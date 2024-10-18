import React, { useState } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.mobileMenu}>
            <button onClick={toggleMenu} className={styles.hamburger}>
                ☰
            </button>
            {isOpen && (
                <nav className={styles.mobileNav}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    {/* Add more menu items as needed */}
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;