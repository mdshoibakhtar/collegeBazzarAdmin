import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { Spinner } from "react-bootstrap";
import { removeItemFromLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
import { getLength, getMenusdata } from "../../api/login/Login";
import { getN, navigationData } from "./navigationData/NavigationData";

let asideMenu = [];

function Aside({ showAsideBar }) {
  const [selectedMenu, setSelectedMenu] = useState({ parentId: null, childId: null, subSubId: null });
  const [countLaenData, setCountLenData] = useState(null);
  const [mainMenus, setMainMenus] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const menuClicked = (parentId) => {
    setSelectedMenu((prev) => ({
      ...prev,
      parentId: prev.parentId === parentId ? null : parentId,
      childId: null,
      subSubId: null,
    }));
  };

  const subMenuClicked = (e, childId) => {
    e.stopPropagation();
    setSelectedMenu((prev) => ({
      ...prev,
      childId: prev.childId === childId ? null : childId,
      subSubId: null,
    }));
  };

  const handleLogOut = () => {
    removeItemFromLocalStorage("userToken");
    dispatch(setIsLogin({ isLogin: false }));
  };

  useEffect(() => {
    const modifiedPath = location.pathname.replace("/", "");
    asideMenu.forEach((item) => {
      item?.subMenus.map((submenu) => {
        if (submenu.path === modifiedPath) {
          setSelectedMenu({
            childId: submenu.uniqueId,
            parentId: item.uniqueId,
            subSubId: null,
          });
        }
      });
    });
  }, [location]);

  const getCountData = async () => {
    try {
      const response = await getLength();
      setCountLenData(response?.data);
    } catch (error) {
      alert(error.message);
    }
  };

  asideMenu = navigationData(countLaenData);

  const getMenusAllData = async () => {
    try {
      const menusRes = await getMenusdata();
      setMainMenus(menusRes?.data);
    } catch (error) {
      alert(error?.message);
    }
  };

  useEffect(() => {
    getCountData();
    getMenusAllData();
  }, []);

  return (
    <>
      <div className={`deznav ${!showAsideBar ? "showMenu" : "hideMenu"}`} id="abcd">
        <div className="deznav-scroll d-flex flex-column justify-content-between h-100">
          {/* Main Menu Content */}
          <ul className="metismenu mm-show flex-1" id="menu">
            <li className={`mm-active hideDarrow ${!showAsideBar ? "hide" : ""}`}>
              <Link className="" to={mainMenus?.dashboard?.frontRoute} aria-expanded="false">
                <span className="menu-icon">
                  <MdDashboard />
                </span>
                <span className="nav-text"> {t("Dashboard")} </span>
              </Link>
            </li>

            {/* Main menus rendering */}
            {mainMenus ? (
              <>
                {mainMenus?.role?.map((item, i) => (
                  <li
                    className={`mm-active ${!showAsideBar ? "hide" : ""} ${selectedMenu.parentId === item.uniqueId ? "active" : ""}`}
                    onClick={() => menuClicked(item.uniqueId)}
                    key={i}
                  >
                    <Link className="has-arrow" aria-expanded="false">
                      <div className="menu-icon">
                        <span>{"⍟"}</span>
                      </div>
                      <span className="nav-text">{t(item?.title)}</span>
                    </Link>

                    {/* Sub-menus */}
                    <ul aria-expanded="false" className={`mm-collapse left ${selectedMenu.parentId === item.uniqueId ? "mm-show" : ""}`}>
                      {item?.subMenus?.map((subItem, i) => (
                        <li
                          className={`mm-active sidebar-content  ${selectedMenu.childId === subItem.id ? "active" : ""}`}
                          onClick={(e) => subMenuClicked(e, subItem.id)}
                          key={i}
                        >
                          <Link to={subItem?.path} className={`mm-active ${subItem?.subSubModule?.length > 0 ? "has-arrow" : ""}`}>
                            {t(subItem?.title)}
                          </Link>

                          {/* Sub-sub menus */}
                          <ul aria-expanded="false" className={`mm-collapse left ${selectedMenu.childId === subItem.id ? "mm-show" : ""}`}>
                            {subItem?.subSubModule?.map((subSubItem, i) => (
                              <li
                                className={`mm-active sidebar-content ${selectedMenu.subSubId === subSubItem.id ? "active" : ""}`}
                                key={i}
                              >
                                <Link to={subSubItem?.path} className="mm-active pl-2">
                                  {t(subSubItem?.title)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </>
            ) : (
              <span className="nav-text" style={{ padding: "0.825rem 1.875rem" }}>
                <Spinner animation="grow" size="sm" className="me-2" />
                <small>Loading ...... </small>
              </span>
            )}
          </ul>

          
        </div>
        <div className="footer-actions d-flex flex-column align-items-center">
            <button
              className="btn border border-2 w-100"
              type="button"
              onClick={handleLogOut}
            >
              <CgLogOut /> <span>Log out</span>
            </button>
          </div>
      </div>
    </>
  );
}

export default Aside;
