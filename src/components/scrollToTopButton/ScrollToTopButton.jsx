import React, { useEffect, useState } from 'react'
import './scrollToTopButton.css'
export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`scroll-to-top-button ${isVisible ? 'visible' : ''} arrow__Style`}
            >
                <i class="bi bi-arrow-up"></i>
            </button>
        </div>
    )
}
