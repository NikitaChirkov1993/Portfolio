import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <h1 className={style.title__1}>Контакты</h1>
                    <ul className={style.content__list}>

                        <li className={style.content__item}>
                            <h2 className={style.title__2}>Локация</h2>
                            <p>Россия,Уфа</p>
                        </li>
                        <li className={style.content__item}>
                            <h2 className={style.title__2}>
                                Telegram / WhatsApp
                            </h2>
                            <p>
                                <a href="tel:+79051234567">+7 (937) 347-23-27</a>
                            </p>
                        </li>

                        <li className={style.content__item}>
                            <h2 className={style.title__2}>Email</h2>
                            <p>
                                <a href="mailto:chirkov31011993@gmail.com">chirkov31011993@gmail.com</a>
                            </p>
                        </li>

                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;
