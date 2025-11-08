import React from 'react';
import styles from './Header.module.css';

import logo from '../../assets/logo.png';
import shopIcon from '../../assets/icons/shopIcon.png';


const Header: React.FC = () => {

    return (
        <>
            <div className={styles.topRow}>
                <div className={styles.contactsHeader}>
                    <span className={styles.topItems}>
                        место компании
                    </span>
                    <span className={styles.topItems}>
                        adress_email.ru
                    </span>
                    <span className={styles.topItems}>
                        +7 (888) 888 88-88
                    </span>
                </div>
            </div>
            <div className={styles.stickyBottom}>
                <div className={styles.bottomRow}>
                    <a href="/" className={styles.logoLink}>
                        <img src={logo} alt="Логотип компании" className={styles.logo} />
                    </a>
                    <nav className={styles.headerNav}>
                        <a href="/" className={styles.navLink}>Главная</a>
                        <a href="/about" className={styles.navLink}>О компании</a>
                        <a href="/catalog" className={styles.navLink}>Каталог</a>
                        <a href="/contacts" className={styles.navLink}>Контакты</a>
                    </nav>
                    <button className={styles.buyButton}><img src={shopIcon} alt="Иконка корзины" className={styles.shopIcon} />Корзина</button>
                </div>
            </div>
        </>
    );
};

export default Header;