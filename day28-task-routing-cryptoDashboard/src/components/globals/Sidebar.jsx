import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import avatar from "../../assets/global/avatar.jpg";
import { useMainActions, useMainStore } from "../../context/MainContext";
import styles from "../../css/globals/Sidebar.module.css";

const getSectionForPath = (pathname) => {
  if (
    pathname === "/" ||
    pathname === "/dashboard-ecommerce" ||
    pathname === "/dashboard-crypto"
  ) {
    return "dashboards";
  }

  if (pathname.startsWith("/auth/")) {
    return "Auth";
  }

  if (pathname.startsWith("/ui-")) {
    return "UI Elements";
  }

  if (pathname.startsWith("/icons-")) {
    return "Icons";
  }

  if (pathname.startsWith("/forms-")) {
    return "Forms";
  }

  if (pathname.startsWith("/tables-")) {
    return "Tables";
  }

  if (pathname === "/form-plugins") {
    return "Form Plugins";
  }

  if (pathname === "/datatables") {
    return "DataTables";
  }

  if (pathname.startsWith("/charts-")) {
    return "Charts";
  }

  if (pathname.startsWith("/maps-")) {
    return "Maps";
  }

  if (pathname.startsWith("/multi-level-")) {
    return "Multi Level";
  }

  return "";
};

const pageEntries = [
  { icon: "ri-user-line", label: "Profile", to: "/pages-profile" },
  { icon: "ri-window-line", label: "Invoice", to: "/pages-invoice" },
  {
    icon: "ri-list-check-3-line",
    label: "Tasks",
    to: "/pages-tasks",
    badge: "Pro",
  },
  {
    icon: "ri-calendar-line",
    label: "Calendar",
    to: "/pages-calendar",
    badge: "Pro",
  },
  {
    icon: "ri-group-line",
    label: "Auth",
    expandable: true,
    children: [
      { label: "Sign In", to: "/auth/sign-in" },
      { label: "Sign Up", to: "/auth/sign-up" },
      { label: "Reset Password", to: "/auth/reset-password" },
    ],
  },
];

const componentEntries = [
  {
    icon: "ri-inbox-archive-line",
    label: "UI Elements",
    expandable: true,
    children: [
      { label: "Alerts", to: "/ui-alerts" },
      { label: "Buttons", to: "/ui-buttons" },
      { label: "Cards", to: "/ui-cards" },
      { label: "General", to: "/ui-general" },
      { label: "Grid", to: "/ui-grid" },
      { label: "Modals", to: "/ui-modals" },
      { label: "Offcanvas", to: "/ui-offcanvas" },
      { label: "Placeholders", to: "/ui-placeholders" },
      { label: "Tabs", to: "/ui-tabs" },
      { label: "Typography", to: "/ui-typography" },
    ],
  },
  {
    icon: "ri-cup-line",
    label: "Icons",
    badge: "1.500+",
    expandable: true,
    children: [
      { label: "Feather", to: "/icons-feather" },
      { label: "Font Awesome", to: "/icons-font-awesome" },
    ],
  },
  {
    icon: "ri-checkbox-circle-line",
    label: "Forms",
    expandable: true,
    children: [
      { label: "Basic Inputs", to: "/forms-basic-inputs" },
      { label: "Layouts", to: "/forms-layouts" },
      { label: "Input Groups", to: "/forms-input-groups" },
      { label: "Advanced Inputs", to: "/forms-advanced-inputs" },
      { label: "Editors", to: "/forms-editors" },
      { label: "Validation", to: "/forms-validation" },
    ],
  },
  {
    icon: "ri-align-justify",
    label: "Tables",
    expandable: true,
    children: [
      { label: "Bootstrap", to: "/tables-bootstrap" },
      { label: "Responsive", to: "/tables-datatables-responsive" },
      { label: "Buttons", to: "/tables-datatables-buttons" },
      { label: "Column Search", to: "/tables-datatables-column-search" },
      { label: "Fixed Header", to: "/tables-datatables-fixed-header" },
      { label: "Multi", to: "/tables-datatables-multi" },
      { label: "Ajax", to: "/tables-datatables-ajax" },
    ],
  },
];

const pluginEntries = [
  {
    icon: "ri-checkbox-multiple-line",
    label: "Form Plugins",
    expandable: true,
    children: [{ label: "Overview", to: "/form-plugins" }],
  },
  {
    icon: "ri-align-justify",
    label: "DataTables",
    expandable: true,
    children: [{ label: "Overview", to: "/datatables" }],
  },
  {
    icon: "ri-bar-chart-line",
    label: "Charts",
    expandable: true,
    children: [
      { label: "Chart.js", to: "/charts-chartjs" },
      { label: "ApexCharts", to: "/charts-apexcharts" },
    ],
  },
  {
    icon: "ri-notification-4-line",
    label: "Notifications",
    to: "/notifications",
    badge: "Pro",
  },
  {
    icon: "ri-map-2-line",
    label: "Maps",
    expandable: true,
    children: [
      { label: "Google Maps", to: "/maps-google" },
      { label: "Vector Maps", to: "/maps-vector" },
    ],
  },
  {
    icon: "ri-corner-down-right-line",
    label: "Multi Level",
    expandable: true,
    children: [
      { label: "Level 1", to: "/multi-level-1" },
      { label: "Level 2", to: "/multi-level-2" },
    ],
  },
];

const menuGroups = [
  {
    id: "dashboards",
    icon: "ri-layout-grid-line",
    label: "Dashboards",
    children: [
      { label: "Analytics", to: "/" },
      { label: "E-Commerce", to: "/dashboard-ecommerce", badge: "Pro" },
      { label: "Crypto", to: "/dashboard-crypto", badge: "Pro" },
    ],
  },
];

const renderSimpleItem = (
  item,
  itemClassName,
  labelClassName,
  arrowClassName,
  openSection,
  handleSectionToggle,
  handleRouteItemClick,
) => {
  if (item.children) {
    const isExpanded = openSection === item.label;

    return (
      <div key={item.label} className={styles.group}>
        <button
          type="button"
          className={`${styles.groupButton} ${isExpanded ? styles.groupButtonOpen : ""}`}
          onClick={() => handleSectionToggle(item.label)}
        >
          <span className={labelClassName}>
            <i className={item.icon} aria-hidden="true"></i>
            <span>{item.label}</span>
          </span>
          {item.badge ? (
            <span
              className={
                item.badge === "1.500+" ? styles.lightBadge : styles.proBadge
              }
            >
              {item.badge}
            </span>
          ) : null}
          {item.expandable ? (
            <i
              className={`ri-arrow-down-s-line ${arrowClassName} ${isExpanded ? styles.groupArrowOpen : ""}`}
              aria-hidden="true"
            ></i>
          ) : null}
        </button>

        <div
          className={`${styles.submenuWrap} ${isExpanded ? styles.submenuWrapOpen : ""}`}
        >
          <div className={styles.submenu}>
            {item.children.map((child) => (
              <NavLink
                key={child.label}
                to={child.to}
                end
                className={({ isActive }) =>
                  `${styles.submenuItem} ${isActive ? styles.submenuActive : ""}`
                }
                onClick={handleRouteItemClick}
              >
                <span className={styles.submenuLeft}>
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                  <span>{child.label}</span>
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (item.to) {
    return (
      <NavLink
        key={item.label}
        to={item.to}
        end
        className={({ isActive }) =>
          `${itemClassName} ${isActive ? styles.submenuActive : ""}`
        }
        onClick={handleRouteItemClick}
      >
        <span className={labelClassName}>
          <i className={item.icon} aria-hidden="true"></i>
          <span>{item.label}</span>
        </span>
        {item.badge ? (
          <span
            className={
              item.badge === "1.500+" ? styles.lightBadge : styles.proBadge
            }
          >
            {item.badge}
          </span>
        ) : null}
        {item.expandable ? (
          <i
            className={`ri-arrow-down-s-line ${arrowClassName}`}
            aria-hidden="true"
          ></i>
        ) : null}
      </NavLink>
    );
  }

  return (
    <button key={item.label} type="button" className={itemClassName}>
      <span className={labelClassName}>
        <i className={item.icon} aria-hidden="true"></i>
        <span>{item.label}</span>
      </span>
      {item.badge ? (
        <span
          className={
            item.badge === "1.500+" ? styles.lightBadge : styles.proBadge
          }
        >
          {item.badge}
        </span>
      ) : null}
      {item.expandable ? (
        <i
          className={`ri-arrow-down-s-line ${arrowClassName}`}
          aria-hidden="true"
        ></i>
      ) : null}
    </button>
  );
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const isSidebarOpen = useMainStore((state) => state.isSidebarOpen);
  const isDesktop = useMainStore((state) => state.isDesktop);
  const { closeSidebar } = useMainActions();
  const [openSection, setOpenSection] = useState(getSectionForPath(pathname));

  useEffect(() => {
    setOpenSection(getSectionForPath(pathname));
    if (!isDesktop) {
      closeSidebar();
    }
  }, [pathname, isDesktop, closeSidebar]);

  const handleSectionToggle = (sectionId) => {
    setOpenSection((current) => (current === sectionId ? "" : sectionId));
  };

  const handleRouteItemClick = () => {
    if (!isDesktop) {
      closeSidebar();
    }
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isSidebarOpen ? styles.overlayVisible : ""}`}
      />

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.brand}>
          <span className={styles.brandText}>AdminKit</span>
          <span className={styles.brandBadge}>PRO</span>
        </div>

        <div className={styles.profile}>
          <img src={avatar} alt="Charles Hall" className={styles.avatar} />
          <div className={styles.profileDetails}>
            <button type="button" className={styles.profileButton}>
              Charles Hall{" "}
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </button>
            <p className={styles.role}>Designer</p>
          </div>
        </div>

        <div className={styles.scrollArea}>
          <div className={styles.sectionLabel}>Pages</div>

          <div className={styles.menuList}>
            {menuGroups.map((group) => (
              <div key={group.id} className={styles.group}>
                <button
                  type="button"
                  className={`${styles.groupButton} ${openSection === group.id ? styles.groupButtonOpen : ""}`}
                  onClick={() => handleSectionToggle(group.id)}
                >
                  <span className={styles.groupButtonLeft}>
                    <i className={group.icon} aria-hidden="true"></i>
                    <span>{group.label}</span>
                  </span>
                  <i
                    className={`ri-arrow-down-s-line ${styles.groupArrow} ${openSection === group.id ? styles.groupArrowOpen : ""}`}
                    aria-hidden="true"
                  ></i>
                </button>

                <div
                  className={`${styles.submenuWrap} ${openSection === group.id ? styles.submenuWrapOpen : ""}`}
                >
                  <div className={styles.submenu}>
                    {group.children.map((item) => {
                      const content = (
                        <>
                          <span className={styles.submenuLeft}>
                            <i
                              className="ri-arrow-right-line"
                              aria-hidden="true"
                            ></i>
                            <span>{item.label}</span>
                          </span>
                          {item.badge ? (
                            <span className={styles.proBadge}>
                              {item.badge}
                            </span>
                          ) : null}
                        </>
                      );

                      if (item.to) {
                        return (
                          <NavLink
                            key={item.label}
                            to={item.to}
                            end
                            className={({ isActive }) =>
                              `${styles.submenuItem} ${isActive ? styles.submenuActive : ""}`
                            }
                            onClick={handleRouteItemClick}
                          >
                            {content}
                          </NavLink>
                        );
                      }

                      return (
                        <button
                          key={item.label}
                          type="button"
                          className={styles.submenuItem}
                        >
                          {content}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            {pageEntries.map((item) =>
              renderSimpleItem(
                item,
                styles.singleItem,
                styles.groupButtonLeft,
                styles.itemArrow,
                openSection,
                handleSectionToggle,
                handleRouteItemClick,
              ),
            )}
          </div>

          <div className={styles.sectionLabel}>Components</div>
          <div className={styles.menuList}>
            {componentEntries.map((item) =>
              renderSimpleItem(
                item,
                styles.singleItem,
                styles.groupButtonLeft,
                styles.itemArrow,
                openSection,
                handleSectionToggle,
                handleRouteItemClick,
              ),
            )}
          </div>

          <div className={styles.sectionLabel}>Plugins & Addons</div>
          <div className={styles.menuList}>
            {pluginEntries.map((item) =>
              renderSimpleItem(
                item,
                styles.singleItem,
                styles.groupButtonLeft,
                styles.itemArrow,
                openSection,
                handleSectionToggle,
                handleRouteItemClick,
              ),
            )}
          </div>

          <div className={styles.downloadCard}>
            <h4>Weekly Sales Report</h4>
            <p>Your weekly sales report is ready for download!</p>
            <button type="button" className={styles.downloadButton}>
              Download
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
