import gsap from 'gsap';

// 为指定元素附加动画效果
export function attachTextHoverEffect(elementSelector: string): void {
  // 获取元素
  const elements = document.querySelectorAll(elementSelector);
  
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => startHoverEffect(element as HTMLElement));
    element.addEventListener('mouseleave', () => resetHoverEffect(element as HTMLElement));
  });
}

// 悬挂动画效果
function startHoverEffect(element: HTMLElement): void {
  // 字体高亮（黝黑）效果
  gsap.to(element, {
    color: '#333', // 黝黑色
    duration: 0.3,
    ease: 'power1.inOut',
  });

  // 背景熔岩流动效果
  gsap.to(element, {
    backgroundImage: 'radial-gradient(circle, #FF6B6B, #FF6B00, #FF4500)',
    backgroundPosition: 'center center',
    backgroundSize: '200% 200%',
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// 悬挂取消后恢复默认状态
export function resetHoverEffect(element: HTMLElement): void {
  // 停止 `color` 和 `backgroundImage` 的动画
  gsap.killTweensOf(element, 'color');
  gsap.killTweensOf(element, 'backgroundImage');

  // 恢复默认的文字颜色和背景
  element.style.color = '#4A4A4A'; // 深灰色
  element.style.backgroundImage = 'none';
}
