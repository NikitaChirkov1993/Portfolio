import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer__info}>
                    <div className={style.wrapper__text}>
                        © 2020-2025 frontend-dev.com
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
