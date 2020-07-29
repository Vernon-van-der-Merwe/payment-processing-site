const tl = gsap.timeline()
const title = document.getElementsById('title')

tl.fromTo(title, { x: -30, opacity: 0 }, { x: 0, opacity: 1 })
