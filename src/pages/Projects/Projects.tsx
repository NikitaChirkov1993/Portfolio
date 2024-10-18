import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Btn from "../../components/ui/Buttons/Btn/Btn";
import style from "./Projects.module.css";

const Projects = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <h1 className={style.title}>Проекты</h1>
                    <ul className={style.pojects__list}>
                        <li className={style.project__item}>
                            <div className={style.project__wrapper_img}>
                                <img className={style.project__img} src="/imgs/projects/Cinemaguied3.png" alt="Cinemaguied" />
                            </div>

                            <a className={style.link} href="http://localhost:5173/" target="blank">
                                <Btn backgroundClass="btnCinemaguied">
                                    Перейти на сайт
                                </Btn>
                            </a>
                        </li>
                        <li className={style.project__item}>
                            <div className={style.project__wrapper_img}>
                                <img className={style.project__img} src="/imgs/projects/Yoldi4.png" alt="Yoldi" />
                            </div>

                            <a className={style.link} href="http://localhost:3000" target="blank">
                                <Btn backgroundClass="btnYoldi">
                                    Перейти на сайт
                                </Btn>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
