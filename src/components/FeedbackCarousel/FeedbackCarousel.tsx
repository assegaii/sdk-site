import React from 'react';
import styles from './FeedbackCarousel.module.css';



const FeedbackCarousel: React.FC = () => {


    return (
        <section
            className={styles.carouselSection}
        >
            <div className={styles.container}>
                <div className={styles.carousel}>
                    {/* Основной контент карусели */}
                    <div className={styles.slidesContainer}>

                    </div>

                    <div className={styles.carouselControls}>
                        <button
                            className={styles.controlButton}
                        >
                            ‹
                        </button>

                        <div className={styles.dots}>

                        </div>

                        <button
                            className={styles.controlButton}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackCarousel;