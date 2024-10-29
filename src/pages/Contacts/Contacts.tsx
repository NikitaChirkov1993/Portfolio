import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Btn from "../../components/ui/Buttons/Btn/Btn";
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
                            <p className={style.content__text}>Россия,Уфа</p>
                        </li>
                        <li className={style.content__item}>
                            <h2 className={style.title__2}>Telegram / WhatsApp</h2>
                            <p className={style.content__text}>
                                <a className={style.content__link} href="tel:+79173566793">
                                    +7 (917) 356-67-93
                                </a>
                            </p>
                            <div className={style.conntent__wrapper_btn}>
                                <a
                                    className={style.content__link}
                                    href="https://t.me/NikitaDevSolution"
                                    target="blank"
                                >
                                    <Btn backgroundClass="btnTelegram">Написать мне</Btn>
                                </a>
                                <a
                                    className={style.content__link}
                                    href="https://api.whatsapp.com/send?phone=79173566793"
                                    target="blank"
                                >
                                    <Btn backgroundClass="btnWhatsapp">Написать мне</Btn>
                                </a>
                            </div>
                        </li>

                        <li className={style.content__item}>
                            <h2 className={style.title__2}>Email</h2>
                            <p className={style.content__text}>
                                <a className={style.content__link} href="mailto:nikita.chirkov.dev@yandex.ru">
                                    nikita.chirkov.dev@yandex.ru
                                </a>
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
