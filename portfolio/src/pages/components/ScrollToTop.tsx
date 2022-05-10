import React, { useState, useEffect } from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs'

type Props = {}

export const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const ScrollToTop = (props: Props) => {
    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <>
            <div className="top-to-btm">
                <a href='#home'><BsChevronDoubleUp className="icon-position icon-style" onClick={goToTop}/></a>
            </div>
        </>
    )
}

export default ScrollToTop