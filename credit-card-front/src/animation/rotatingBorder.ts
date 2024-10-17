import gsap from 'gsap'

export const startBorderAnimation = (element: HTMLElement) => {
  // 设置初始角度，确保动画从初始状态开始
  element.style.setProperty('--gradient-angle', '0deg')

  gsap.to(element, {
    duration: 3.3,
    ease: 'sine.inOut', // 使用 Sine 缓动函数，提供平滑的开始和结束效果
    repeat: -1,
    css: {
      '--gradient-angle': '+=360deg',
    },
  })
}

export const resetBorderAnimation = (element: HTMLElement) => {
  gsap.killTweensOf(element)
  // 重置角度，返回到初始状态
  element.style.setProperty('--gradient-angle', '0deg')
}

export default {
  startBorderAnimation,
  resetBorderAnimation,
}
