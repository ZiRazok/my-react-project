//src/components/Alert.jsx
import clsx from "clsx";

// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }


// export const Alert = ({ children }) => {
//     // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//     return <p className={css.alert}>{children}</p>;
// };


import './Alert.css';

import { IoIosAddCircleOutline } from "react-icons/io";

const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
};

const getBgColor = variant => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "red";
        case "warning":
            return "orange";
        default:
            throw new Error(`Unsupported variant prop value - ${variant}`);
    }
};

export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p className={clsx(css[variant], {
            [css.isOutlined]: outlined,
            [css.isElevated]: elevated
        })}><IoIosAddCircleOutline className="my-icons" size={20} color="black"/>{' '}
            {children}
        </p>
    );
};