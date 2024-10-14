import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

interface TypewriterAnimationProps {
    text: string;
}

const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return <div className={styles.typewriter}>{displayText}</div>;
};

export default TypewriterAnimation;
