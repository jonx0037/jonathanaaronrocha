import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className={styles.floatingToggle}>
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default DarkModeToggle;