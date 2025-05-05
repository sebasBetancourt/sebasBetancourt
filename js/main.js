import { navegation } from "./navegation.js";

document.addEventListener("DOMContentLoaded", () => {
    navegation();
    VANTA.TOPOLOGY({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fa9f5,
        backgroundColor: 0x23153c
    });
});
