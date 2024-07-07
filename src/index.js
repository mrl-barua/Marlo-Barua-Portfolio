import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

Prevent opening the console and disable left click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

document.onkeydown = function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
    }
};


initScrollReveal(targetElements, defaultProps);
initTiltEffect();
