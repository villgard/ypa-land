let toggleBlocks = document.querySelectorAll(".slideToggle-block")
toggleBlocks.forEach((el, i) => {
    el.setAttribute("data-id", i + 1)
    let id = el.getAttribute("data-id")
    let toggleElement = document.querySelector(`[data-id="${id}"] .slideToggle-block__show`)
    let animatedBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__hidden`)
    let contentBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__wrap`)
    let contentBlockHeight = contentBlock.getBoundingClientRect().height
    toggleElement.onclick = function() {
        console.log();
        if (el.classList.contains("slideToggle-block--active")) {
            el.classList.remove("slideToggle-block--active")
            animatedBlock.style.height = `0px`
        } else {
            el.classList.add("slideToggle-block--active")
            animatedBlock.style.height = `${contentBlockHeight}px`
            setToggleBlocksHeight()
        }

    }
});

window.onresize = function() {
    setToggleBlocksHeight()
}

function setToggleBlocksHeight() {
    if(toggleBlocks.length===0){
        return
    }
    let activeToggleBlocks = document.querySelectorAll(".slideToggle-block--active")

    activeToggleBlocks.forEach(el => {
        let id = el.getAttribute("data-id")
        let animatedBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__hidden`)
        let contentBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__wrap`)
        let contentBlockHeight = contentBlock.getBoundingClientRect().height
        animatedBlock.style.height = `${contentBlockHeight}px`
    });
}
