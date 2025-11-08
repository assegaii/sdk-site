import React from 'react';
import styles from './MainContent.module.css';

import QualityIcon from '../../assets/quality-icon.png';
import PricesIcon from '../../assets/prices-icon.png';
import AdviceIcon from '../../assets/advice-icon.png';
import DeliveryIcon from '../../assets/delivery-icon.png';

import FeedbackCarousel from '../FeedbackCarousel/FeedbackCarousel';

const MainContent: React.FC = () => {
    return (
        <main className={styles.mainContent}>

            <FeedbackCarousel />
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <img src={QualityIcon} className={styles.featureIconQuality} />
                            <div className={styles.featureText}>
                                <h3>Качество, проверенное временем</h3>
                                <p>Мы работаем только с сертифицированными поставщиками и контролируем качество каждой партии.</p>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src={PricesIcon} className={styles.featureIconPrices} />
                            <div className={styles.featureText}>
                                <h3>Индивидуальные условия для партнёров</h3>
                                <p>Персональные скидки и гибкая система оплаты.</p>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src={AdviceIcon} className={styles.featureIconAdvice} />
                            <div className={styles.featureText}>
                                <h3>Профессиональная консультация</h3>
                                <p>Помогаем подобрать оптимальные материалы под ваш проект.</p>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src={DeliveryIcon} className={styles.featureIconDelivery} />
                            <div className={styles.featureText}>
                                <h3>Работаем по всей России</h3>
                                <p>Доставка в любые регионы собственным транспортом.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>
                        Продукция
                    </h1>
                </div>
            </section>
        </main>
    );
};

export default MainContent;