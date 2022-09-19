let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpeg','image8.jpg','image9.jpg']

const leftButtton = document.querySelector("#left-button")
const rightButtton = document.querySelector("#right-button")
const img = document.querySelector("img")

console.log('img', img)

// const hello = (word, sign) => {
//     alert(word, sign)
// }

// leftButtton.addEventListener('click', () => {
//     hello("привет", "!")
// })

let currentIndex = 1

const leftButtonClick = () => {
    currentIndex = currentIndex - 1
    img.src = '../best-woomans/images/' + images[currentIndex]
    if (currentIndex === 0) {
        currentIndex = 9
        }
}

const rightButtonClick = () => {
    currentIndex = currentIndex + 1
    img.src = '../best-woomans/images/' + images[currentIndex]
    if (currentIndex === 8) {
        currentIndex = -1
        }
}

leftButtton.addEventListener('click', leftButtonClick)

rightButtton.addEventListener('click', rightButtonClick)