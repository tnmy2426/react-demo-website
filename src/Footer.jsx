import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 text-center">
                This App is developed by Abdullah Al Nahdi | Copyright © {currentYear}
            </footer>
        </>
    )
}

export default Footer