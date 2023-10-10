const grid = document.querySelector('#grid');


let gridArry = [
    {
        name: 'blank',
        img: '/image/blank.png'
    },
    {
        name: 'cheesburger',
        img: '/image/cheeseburger.png'
    },
    {
        name: 'fries',
        img: '/image/fries.png'
    },
    {
        name: 'hotdog',
        img: '/image/hotdog.png'
    },
    {
        name: 'iceCream',
        img: '/image/ice-cream.png'
    },
    {
        name: 'milkShake',
        img: '/image/milkshake.png'
    },
    {
        name: 'pizza',
        img: '/image/pizza.png'
    },
    {
        name: 'white',
        img: '/image/white.png'
    },
    {
        name: 'hotdog',
        img: '/image/hotdog.png'
    },
    {
        name: 'iceCream',
        img: '/image/ice-cream.png'
    },
    {
        name: 'milkShake',
        img: '/image/milkshake.png'
    },

    {
        name: 'white',
        img: '/image/white.png'
    }
]
console.log(gridArry)
gridArry.sort(() => 0.5 - Math.random())
console.log(gridArry)

function createBorad() {
    for (i = 0; i < gridArry.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'image/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBorad()
const cardsChon = []
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChon.push(gridArry[cardId].name)
    console.log(cardsChon)
    this.setAttribute("src", gridArry[cardId].img)

}
