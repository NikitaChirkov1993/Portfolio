import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
    const normalLink = `${style.link}`;
    const activeLink = `${style.link} ${style.active}`;

    return (
        <header className={style.header}>
            <div className="container">
                <nav className={style.nav}>
                    <NavLink to={"/"}>
                        <div className={style.logo}>Portfolio</div>
                    </NavLink>
                    <ul className={style.nav__list_desktop}>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/"}>
                            <li className={style.nav__item}>Главная</li>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/projects"}>
                            <li className={style.nav__item}>Проекты</li>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/сontacts"}>
                            <li className={style.nav__item}>Контакты</li>
                        </NavLink>
                    </ul>

                    <ul className={style.nav__list_mobile}>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/"}>
                             <img className={style.nav__icon} src="/imgs/3643769-building-home-house-main-menu-start_113416.svg" alt="Главная" />
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/projects"}>
                           <img className={style.nav__icon}  src="/imgs/office_suitcase_profession_work_job_briefcase_business_icon_232665.svg" alt="Проекты" />
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            to={"/сontacts"}>
                            <img className={style.nav__icon}  src="/imgs/2849835-call-cell-communication-interface-multimedia-phone-telephone_108000.svg" alt="Контакты" />
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
