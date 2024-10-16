import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnResume from "../../components/ui/Buttons/BtnResume/BtnResume";
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
                        <strong className={style.info__title_2}>я фронтенд-разработчик</strong>
                        <strong className={style.info__title_3}>
                            со страстью к работе и творчеству.
                        </strong>
                        <BtnResume/>
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
