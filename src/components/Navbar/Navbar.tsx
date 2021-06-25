import React from "react";
import "./styles.css"

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="content-box">
                <div className="logo">Каталог</div>
                <ul>
                    <li>Сравнение</li>
                    <li className="settings"><span>Личный кабинет</span><img src="/icons/ic-person.svg" alt="ic-person"/></li>
                </ul>
            </div>
        </nav>
    )
}