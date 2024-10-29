import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Btn from "../../components/ui/Buttons/Btn/Btn";
import { skills } from "../../data/skills";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <h1 className={style.info__title}>
                        <strong className={style.info__title_1}>
                            Привет, меня зовут <span>Никита</span>
                        </strong>
                        <strong className={style.info__title_2}>я фронтенд-разработчик </strong>
                        <strong className={style.info__title_3}>с опытом работы более 3 лет</strong>
{/*
                        <a target="blank" href="/docs/resume CHNS.pdf">
                            <Btn backgroundClass="btnResume">
                                Скачать резюме
                            </Btn>
                        </a> */}
                        <a target="blank" href="https://myresume.ru/resume/OWtsoofpf6y/">
                            <Btn backgroundClass="btnResume">
                                Посмотреть резюме
                            </Btn>
                        </a>

                    </h1>
                    <ul className={style.skill__list}>
                        {skills.map((item, index) => {
                            return (
                                <li className={style.skill_item}>
                                    <div className={style.skill__img_wrapper}>
                                        <img className={style.skill__img} src={item.img} alt={`фото${index + 1}`} />
                                    </div>
                                    <div className={style.skill__text}>{item.text}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
