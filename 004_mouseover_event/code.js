const demo = document.querySelector('#demo')
console.log(demo)

let isImgDisplayed = false

demo.addEventListener('mouseover', displayImg)
demo.addEventListener('mouseout', removeImg)

function displayImg(event) {
    if (!isImgDisplayed && event.target === demo) {
        const img = document.createElement('img')
        img.src = './img/kep.jpg'
        img.alt = 'elegtelen'

        demo.replaceChildren(img)
        isImgDisplayed = true
    }
}

function removeImg(event) {
    const p = document.createElement('p')
    
    
    demo.replaceChildren(p)
    isImgDisplayed = false
}