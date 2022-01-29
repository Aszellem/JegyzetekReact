import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Czégel Vanessza {currentYear}</p>
        </footer>
    );
}

export default Footer;