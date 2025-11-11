import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import styles from './MainContent.module.css';
import FeedbackCarousel from '@components/FeedbackCarousel/FeedbackCarousel';
import AboutUs from '@components/AboutUs/AboutUs';
import ProductSection from '@components/ProductSection/ProductSection';
import PhoneButton from '@components/PhoneButton/PhoneButton';
import CallbackModal from '@components/CallBackModal/CallBackModal';
import MapSection from '@components/MapSection/MapSection';

const MainContent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = async (phoneNumber: string): Promise<void> => {
        console.log('Отправляем номер:', phoneNumber);
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert(`Заявка принята! Мы перезвоним на номер ${phoneNumber}`);
    };

    return (
        <main className={styles.mainContent}>
            <PhoneButton
                onClick={openModal}
                position={{ bottom: 40, right: 40 }}
                size={65}
                withPulse={true}
                withVibration={true}
            />
            <CallbackModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
            />
            <ToastContainer />
            <FeedbackCarousel />
            <AboutUs />
            <ProductSection />
            <MapSection />
        </main>
    );
};

export default MainContent;