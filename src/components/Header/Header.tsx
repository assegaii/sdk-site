import React, { useState } from 'react';
import styles from './Header.module.css';

import logo from '../../assets/logo.png';
import shopIcon from '../../assets/icons/shopIcon.png';
import ShopingCart, { type CartItem } from '../ShopingCart/ShopingCart';


const Header: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: '1',
            name: 'Доска обрезная',
            price: 2500,
            quantity: 2,
            dimensions: '50x150x6000 мм',
            woodType: 'Сосна',
            grade: 'A'
        },
        {
            id: '2',
            name: 'Брус',
            price: 4500,
            quantity: 1,
            dimensions: '100x100x6000 мм',
            woodType: 'Ель',
            grade: 'B'
        }
    ]);

    const handleUpdateQuantity = (id: string, quantity: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const handleRemoveItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

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
                        <a href="/catalog" className={styles.navLink}>Каталог</a>
                        <a href="/documents" className={styles.navLink}>Документация</a>
                    </nav>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className={styles.buyButton}><img src={shopIcon} alt="Иконка корзины" className={styles.shopIcon} />Корзина</button>
                    <ShopingCart
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        items={cartItems}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;