// backgroundAnimation.ts
import gsap from 'gsap';

export const applyArtisticBackground = (element: HTMLElement) => {
    gsap.fromTo(element, {
        background: 'linear-gradient(135deg, #b2fefa, #0ed2f7)',
        opacity: 0.8,
    }, {
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    });
};

export default {
    applyArtisticBackground
};
