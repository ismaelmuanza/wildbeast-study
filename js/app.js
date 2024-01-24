const items = document.querySelectorAll('[data-anime]')

function animationScroll () {
    const distanceScrollTop = window.scrollY + ((innerHeight * 3) / 4)
    items.forEach(element => {
        if(distanceScrollTop > element.offsetTop) {
            element.classList.add('anime')
        } else {
            element.classList.remove('anime')
        }
    })
}

if(items.length) {
    window.addEventListener('scroll', () => {
        animationScroll()
    })
}