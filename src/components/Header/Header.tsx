import React from 'react';
import styles from './Header.module.css';

import logo from '@assets/logo.png';
import shopIcon from '@assets/icons/shopIcon.png';
import ShopingCart from '@components/ShopingCart/ShopingCart';
import { useCart } from '@contexts/CartContext'; // Создадим этот алиас

const Header: React.FC = () => {
    const {
        state,
        openCart,
        closeCart,
        updateQuantity,
        removeItem,
        getTotalItems
    } = useCart();

    return (
        <>
            <div className={styles.topRow}>
                <div className={styles.contactsHeader}>
                    <span className={styles.topItems}>
                        Кузовлевский тракт, 2Б ст31
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
                        <a href="/catalog" className={styles.navLink}>Каталог</a>
                        <a href="/documents" className={styles.navLink}>Документация</a>
                    </nav>
                    <button
                        onClick={openCart}
                        className={styles.buyButton}
                    >
                        <img src={shopIcon} alt="Иконка корзины" className={styles.shopIcon} />
                        Корзина
                        {getTotalItems() > 0 && (
                            <span className={styles.cartBadge}>
                                {getTotalItems()}
                            </span>
                        )}
                    </button>
                    <ShopingCart
                        isOpen={state.isOpen}
                        onClose={closeCart}
                        items={state.items}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeItem}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;