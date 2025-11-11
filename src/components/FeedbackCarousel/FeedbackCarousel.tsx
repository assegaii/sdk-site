import React, { useState, useEffect } from 'react';
import styles from './FeedbackCarousel.module.css';

import sawIcon from '@assets/saw-dot.svg';

const FeedbackCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const totalSlides = 3;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const dots = Array.from({ length: totalSlides }, (_, index) => index);

    return (
        <section
            className={styles.carouselSection}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <div className={styles.slidesContainer}>
                        <div className={styles.slide}>
                        </div>
                    </div>

                    <div className={styles.carouselControls}>
                        <button
                            className={styles.controlButton}
                            onClick={prevSlide}
                            aria-label="Предыдущий слайд"
                        >
                            ‹
                        </button>

                        <div className={styles.dots}>
                            {dots.map((index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${currentSlide === index ? styles.active : ''
                                        }`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Перейти к слайду ${index + 1}`}
                                >
                                    {currentSlide === index && (
                                        <img
                                            src={sawIcon}
                                            alt="Активный слайд"
                                            className={styles.sawIcon}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            className={styles.controlButton}
                            onClick={nextSlide}
                            aria-label="Следующий слайд"
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