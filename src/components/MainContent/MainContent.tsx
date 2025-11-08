import React from 'react';
import styles from './MainContent.module.css';

import FeedbackCarousel from '../FeedbackCarousel/FeedbackCarousel';

import Plank from '../../assets/product-image/plank.png';
import Plywood from '../../assets/product-image/plywood.png';
import RoundWood from '../../assets/product-image/round-wood.png';
import Veneer from '../../assets/product-image/veneer.png';
import WoodChips from '../../assets/product-image/wood-chips.png';
import AboutUs from '../AboutUs/AboutUs';


const MainContent: React.FC = () => {
    return (
        <main className={styles.mainContent}>

            <FeedbackCarousel />
            <AboutUs />
            <h1 className={styles.productSectionName}>
                Продукция
            </h1>
            <section className={styles.productSection}>
                <div className={styles.container}>
                    <div className={styles.productGrid}>
                        <div className={styles.productCard}>
                            <div className={styles.cardImageContainer}>
                                <img src={Plank} alt="Доска" className={styles.productIconPlank} />
                            </div>
                            <div className={styles.productDesc}>
                                <h2 className={styles.productTitle}>Доска</h2>
                                <p>Типа какое-то описание чтоли</p>
                                <button className={styles.sizeBtn}>Размеры</button>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.cardImageContainer}>
                                <img src={RoundWood} alt="Круглый лес" className={styles.productIconRoundWood} />
                            </div>
                            <div className={styles.productDesc}>
                                <h2 className={styles.productTitle}>Круглый лес</h2>
                                <p>Типа какое-то описание чтоли</p>
                                <button className={styles.sizeBtn}>Размеры</button>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.cardImageContainer}>
                                <img src={WoodChips} alt="Щепа" className={styles.productIconWoodChips} />
                            </div>
                            <div className={styles.productDesc}>
                                <h2 className={styles.productTitle}>Щепа</h2>
                                <p>Типа какое-то описание чтоли</p>
                                <button className={styles.sizeBtn}>Размеры</button>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.cardImageContainer}>
                                <img src={Plywood} alt="Фанера" className={styles.productIconPlywood} />
                            </div>
                            <div className={styles.productDesc}>
                                <h2 className={styles.productTitle}>Фанера</h2>
                                <p>Типа какое-то описание чтоли</p>
                                <button className={styles.sizeBtn}>Размеры</button>
                            </div>
                        </div>
                        <div className={styles.productCard}>
                            <div className={styles.cardImageContainer}>
                                <img src={Veneer} alt="Шпон" className={styles.productIconVeneer} />
                            </div>
                            <div className={styles.productDesc}>
                                <h2 className={styles.productTitle}>Шпон</h2>
                                <p>Типа какое-то описание чтоли</p>
                                <button className={styles.sizeBtn}>Размеры</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;