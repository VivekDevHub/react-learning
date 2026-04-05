import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";

const MOBILE_BREAKPOINT = 960;
const MainContext = createContext(null);

const createMainStore = () => {
  let state = {
    isDesktop:
      typeof window !== "undefined"
        ? window.innerWidth > MOBILE_BREAKPOINT
        : true,
    isSidebarOpen:
      typeof window !== "undefined"
        ? window.innerWidth > MOBILE_BREAKPOINT
        : true,
  };
  const listeners = new Set();

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  const setState = (updater) => {
    const nextState = typeof updater === "function" ? updater(state) : updater;

    if (
      nextState.isDesktop === state.isDesktop &&
      nextState.isSidebarOpen === state.isSidebarOpen
    ) {
      return;
    }

    state = nextState;
    emit();
  };

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    openSidebar: () =>
      setState((current) => ({ ...current, isSidebarOpen: true })),
    closeSidebar: () =>
      setState((current) => ({ ...current, isSidebarOpen: false })),
    toggleSidebar: () =>
      setState((current) => ({
        ...current,
        isSidebarOpen: !current.isSidebarOpen,
      })),
    syncViewport: (isDesktop) =>
      setState((current) => ({
        isDesktop,
        isSidebarOpen: isDesktop ? true : false,
      })),
  };
};

export const MainProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = createMainStore();
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${MOBILE_BREAKPOINT + 1}px)`,
    );
    const handleChange = (event) => {
      storeRef.current.syncViewport(event.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const syncBodyClass = () => {
      const { isDesktop, isSidebarOpen } = storeRef.current.getState();
      document.body.classList.toggle(
        "main-sidebar-open",
        isDesktop && isSidebarOpen,
      );
    };

    syncBodyClass();
    const unsubscribe = storeRef.current.subscribe(syncBodyClass);

    return () => {
      unsubscribe();
      document.body.classList.remove("main-sidebar-open");
    };
  }, []);

  return (
    <MainContext.Provider value={storeRef.current}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainStore = (selector) => {
  const store = useContext(MainContext);

  if (!store) {
    throw new Error("useMainStore must be used inside MainProvider");
  }

  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState()),
  );
};

export const useMainActions = () => {
  const store = useContext(MainContext);

  if (!store) {
    throw new Error("useMainActions must be used inside MainProvider");
  }

  return store;
};
