// itemAnimations.ts
import gsap from 'gsap';

// 选项的进入动画
export const animateDropdownItemsEntry = (items: NodeListOf<HTMLElement>|null) => {
    if(items){
        gsap.from(items, {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.7)',
        });
    }
    
};

// 选中项的波浪动画
export const animateItemSelection = (item: HTMLElement) => {
    gsap.fromTo(item, {
        boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
        background: 'linear-gradient(90deg, #e0f7fa, #b2ebf2)',
    }, {
        boxShadow: '0 0 15px rgba(0, 0, 255, 0.6)',
        background: 'linear-gradient(90deg, #03a9f4, #0288d1)',
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(item, {
                boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
                background: 'linear-gradient(90deg, #e0f7fa, #b2ebf2)',
                duration: 0.5,
            });
        }
    });
};

export default {
    animateDropdownItemsEntry,
    animateItemSelection,
};
