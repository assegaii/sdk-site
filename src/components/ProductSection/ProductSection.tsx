import React, { useState } from 'react';
import { useCart } from '@contexts/CartContext';
import { Flip, toast } from 'react-toastify';
import type { Product, ProductVariant } from '@types';
import ProductCard from './ProductCard';
import styles from './ProductSection.module.css';

// Импорты изображений
import Plank from '@assets/product-image/plank.png';
import Plywood from '@assets/product-image/plywood.png';
import RoundWood from '@assets/product-image/round-wood.png';
import Veneer from '@assets/product-image/veneer.png';
import WoodChips from '@assets/product-image/wood-chips.png';

const ProductSection: React.FC = () => {
    const [expandedProductId, setExpandedProductId] = useState<number | null>(null);
    const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: string }>({});
    const [quantities, setQuantities] = useState<{ [variantId: string]: number }>({});

    const { addItem } = useCart();

    const succesNotify = () => toast.success('Товар добавлен в корзину!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });

    // Mock данные 
    const products: Product[] = [
        {
            id: 1,
            name: "Доска",
            image: Plank,
            description: "Высококачественные пиломатериалы из сосны и ели",
            variants: [
                { id: "board-1", dimensions: "25x100x6000 мм", woodType: "Сосна", grade: "I", price: 1500, stock: 50 },
                { id: "board-2", dimensions: "25x100x6000 мм", woodType: "Сосна", grade: "II", price: 1200, stock: 30 },
                { id: "board-3", dimensions: "50x100x6000 мм", woodType: "Ель", grade: "I", price: 1400, stock: 25 },
                { id: "board-4", dimensions: "50x100x6000 мм", woodType: "Ель", grade: "II", price: 1100, stock: 40 },
                { id: "board-5", dimensions: "100x100x6000 мм", woodType: "Сосна", grade: "I", price: 2800, stock: 15 },
                { id: "board-6", dimensions: "100x100x6000 мм", woodType: "Сосна", grade: "II", price: 2400, stock: 20 },
            ]
        },
        {
            id: 2,
            name: "Круглый лес",
            image: RoundWood,
            description: "Круглые лесоматериалы для строительства",
            variants: [
                { id: "round-1", dimensions: "Ø150x4000 мм", woodType: "Сосна", grade: "I", price: 2500, stock: 20 },
                { id: "round-2", dimensions: "Ø200x4000 мм", woodType: "Сосна", grade: "I", price: 3200, stock: 15 },
                { id: "round-3", dimensions: "Ø150x4000 мм", woodType: "Дуб", grade: "I", price: 4500, stock: 10 },
                { id: "round-4", dimensions: "Ø200x4000 мм", woodType: "Дуб", grade: "I", price: 5800, stock: 8 },
            ]
        },
        {
            id: 3,
            name: "Щепа",
            image: WoodChips,
            description: "Щепа технологическая для производства",
            variants: [
                { id: "chips-1", dimensions: "Фракция 10-30 мм", woodType: "Сосна", grade: "I", price: 800, stock: 100 },
                { id: "chips-2", dimensions: "Фракция 20-40 мм", woodType: "Ель", grade: "II", price: 750, stock: 80 },
                { id: "chips-3", dimensions: "Фракция 15-35 мм", woodType: "Береза", grade: "I", price: 900, stock: 60 },
            ]
        },
        {
            id: 4,
            name: "Фанера",
            image: Plywood,
            description: "Фанера строительная и мебельная",
            variants: [
                { id: "plywood-1", dimensions: "1220x2440x10 мм", woodType: "Береза", grade: "I", price: 1800, stock: 35 },
                { id: "plywood-2", dimensions: "1220x2440x12 мм", woodType: "Береза", grade: "I", price: 2100, stock: 28 },
                { id: "plywood-3", dimensions: "1220x2440x10 мм", woodType: "Хвоя", grade: "II", price: 1500, stock: 42 },
                { id: "plywood-4", dimensions: "1220x2440x15 мм", woodType: "Береза", grade: "I", price: 2600, stock: 22 },
                { id: "plywood-5", dimensions: "1220x2440x18 мм", woodType: "Береза", grade: "I", price: 3100, stock: 18 },
            ]
        },
        {
            id: 5,
            name: "Шпон",
            image: Veneer,
            description: "Шпон натуральный для отделочных работ",
            variants: [
                { id: "veneer-1", dimensions: "0.6 мм", woodType: "Дуб", grade: "I", price: 950, stock: 60 },
                { id: "veneer-2", dimensions: "0.8 мм", woodType: "Ясень", grade: "I", price: 1100, stock: 45 },
                { id: "veneer-3", dimensions: "0.6 мм", woodType: "Бук", grade: "II", price: 800, stock: 55 },
                { id: "veneer-4", dimensions: "0.8 мм", woodType: "Орех", grade: "I", price: 1300, stock: 30 },
            ]
        },
    ];


    const handleToggleDetails = (productId: number) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };

    const handleVariantSelect = (productId: number, variantId: string) => {
        setSelectedVariants(prev => ({
            ...prev,
            [productId]: variantId
        }));

        if (!quantities[variantId]) {
            setQuantities(prev => ({
                ...prev,
                [variantId]: 1
            }));
        }
    };

    const handleQuantityChange = (variantId: string, newQuantity: number) => {
        const variant = getAllVariants().find(v => v.id === variantId);
        if (variant && newQuantity >= 1 && newQuantity <= variant.stock) {
            setQuantities(prev => ({
                ...prev,
                [variantId]: newQuantity
            }));
        }
    };

    const getAllVariants = (): ProductVariant[] => {
        return products.flatMap(product => product.variants);
    };

    const handleAddToCart = (product: Product) => {
        const variantId = selectedVariants[product.id];
        if (!variantId) return;

        const variant = product.variants.find(v => v.id === variantId);
        const quantity = quantities[variantId] || 1;

        if (!variant) return;

        addItem(product, variant, quantity);
        succesNotify();
    };

    const getSelectedVariant = (productId: number) => {
        const variantId = selectedVariants[productId];
        if (!variantId) return null;
        const product = products.find(p => p.id === productId);
        return product?.variants.find(v => v.id === variantId) || null;
    };

    const getCurrentQuantity = (productId: number): number => {
        const variantId = selectedVariants[productId];
        if (!variantId) return 1;
        return quantities[variantId] || 1;
    };

    return (
        <section className={styles.productSection}>
            <h1 className={styles.productSectionName}>Продукция</h1>

            <div className={styles.container}>
                <div className={styles.productGrid}>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isExpanded={expandedProductId === product.id}
                            selectedVariantId={selectedVariants[product.id]}
                            currentQuantity={getCurrentQuantity(product.id)}
                            onToggleDetails={handleToggleDetails}
                            onVariantSelect={handleVariantSelect}
                            onQuantityChange={handleQuantityChange}
                            onAddToCart={handleAddToCart}
                            getSelectedVariant={getSelectedVariant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;