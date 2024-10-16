import style from "./BtnResume.module.css";

const BtnResume = () => {
    return (
        <a href="/docs/Resume.docx" target="blank">
            <button className={style.btn}>Скачать резюме</button>
        </a>
    );
};

export default BtnResume;
