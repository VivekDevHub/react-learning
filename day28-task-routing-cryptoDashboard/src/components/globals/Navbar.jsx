import React, { useEffect, useRef, useState } from "react";
import avatar from "../../assets/global/avatar.jpg";
import { useMainActions } from "../../context/MainContext";
import styles from "../../css/globals/Navbar.module.css";

const resourceItems = [
  { icon: "ri-home-4-line", label: "Homepage" },
  { icon: "ri-book-open-line", label: "Documentation" },
  { icon: "ri-quill-pen-line", label: "Changelog" },
];

const megaMenuColumns = [
  {
    title: "UI Elements",
    items: [
      "Alerts",
      "Buttons",
      "Cards",
      "Carousel",
      "General",
      "Grid",
      "Modals",
      "Tabs",
      "Typography",
    ],
  },
  {
    title: "Forms",
    items: [
      "Layouts",
      "Basic Inputs",
      "Input Groups",
      "Advanced Inputs",
      "Editors",
      "Validation",
      "Wizard",
    ],
  },
  {
    title: "Tables",
    items: [
      "Basic Tables",
      "Responsive Table",
      "Table with Buttons",
      "Column Search",
      "Muulti Selection",
      "Ajax Sourced Data",
    ],
  },
];

const Navbar = () => {
  const { toggleSidebar } = useMainActions();
  const [openMenu, setOpenMenu] = useState("");
  const navMenusRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navMenusRef.current?.contains(event.target)) {
        setOpenMenu("");
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const handleMenuToggle = (menuName) => {
    setOpenMenu((current) => (current === menuName ? "" : menuName));
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="ri-menu-2-line" aria-hidden="true"></i>
        </button>

        <label className={styles.search}>
          <input type="text" placeholder="Search..." aria-label="Search" />
          <i className="ri-search-line" aria-hidden="true"></i>
        </label>

        <nav
          className={styles.links}
          aria-label="Top navigation"
          ref={navMenusRef}
        >
          <div className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.linkButton} ${openMenu === "mega" ? styles.linkButtonActive : ""}`}
              onClick={() => handleMenuToggle("mega")}
              aria-expanded={openMenu === "mega"}
            >
              Mega Menu{" "}
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>

            {openMenu === "mega" ? (
              <div
                className={`${styles.dropdownMenu} ${styles.megaMenu}`}
                role="menu"
              >
                {megaMenuColumns.map((column) => (
                  <div key={column.title} className={styles.megaColumn}>
                    <div className={styles.megaTitle}>{column.title}</div>
                    <div className={styles.megaList}>
                      {column.items.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={styles.megaItem}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.linkButton} ${openMenu === "resources" ? styles.linkButtonActive : ""}`}
              onClick={() => handleMenuToggle("resources")}
              aria-expanded={openMenu === "resources"}
            >
              Resources{" "}
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>

            {openMenu === "resources" ? (
              <div className={styles.dropdownMenu} role="menu">
                {resourceItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={styles.dropdownItem}
                  >
                    <i className={item.icon} aria-hidden="true"></i>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
      </div>

      <div className={styles.right}>
        <button
          type="button"
          className={styles.iconButton}
          aria-label="Notifications"
        >
          <i className="ri-notification-3-line" aria-hidden="true"></i>
          <span className={styles.badge}>4</span>
        </button>

        <button
          type="button"
          className={styles.iconButton}
          aria-label="Messages"
        >
          <i className="ri-message-2-line" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          className={styles.flagButton}
          aria-label="Language"
        >
          <span className={styles.flagIcon} aria-hidden="true"></span>
        </button>

        <button type="button" className={styles.iconButton} aria-label="Expand">
          <i className="ri-fullscreen-line" aria-hidden="true"></i>
        </button>

        <button
          type="button"
          className={styles.avatarButton}
          aria-label="Profile"
        >
          <img src={avatar} alt="Charles Hall" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
