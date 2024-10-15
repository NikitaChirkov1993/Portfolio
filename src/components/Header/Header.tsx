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
                    <ul className={style.nav__list}>
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
                </nav>
            </div>
        </header>
    );
};

export default Header;
