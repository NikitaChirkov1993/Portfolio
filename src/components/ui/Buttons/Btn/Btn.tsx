import { ButtonHTMLAttributes, FC } from "react";
import style from "./Btn.module.css";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    backgroundClass?: string;
}

const Btn: FC<BtnProps> = ({ children, backgroundClass, ...props }) => {
    return (
        <button
            {...props}
            className={`${style.btn} ${backgroundClass ?
                style[backgroundClass] : ''}`
            }
        >
            {children}
        </button>
    );
};

export default Btn;
