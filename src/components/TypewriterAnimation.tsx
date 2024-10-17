import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

interface TypewriterAnimationProps {
    texts: string[];
}

const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({ texts }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < texts[currentTextIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + texts[currentTextIndex][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText('');
                setCurrentIndex(0);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, currentTextIndex, texts]);

    return <div className={styles.typewriter}>{displayText}</div>;
};

export default TypewriterAnimation;
