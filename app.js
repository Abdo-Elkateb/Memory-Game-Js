let grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardId = []
let cardWon = []

let gridArry = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
console.log(gridArry)
console.log(gridArry)
gridArry.sort(() => 0.5 - Math.random())

function createBorad() {
    for (i = 0; i < gridArry.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
        card.addEventListener('click', flipCard)
    
    }
}
createBorad()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTowId = cardsChosenId[1]
    console.log(cards)
    if (optionOneId == optionTowId) {
        alert("you have cliked")
    }
    // alert('done');
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("you found a match")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTowId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTowId].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '/images/blank.png')
        cards[optionTowId].setAttribute('src', '/images/blank.png')
        alert("sorry try again")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardWon.length
    if (cardWon.length == gridArry.length/ 2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(gridArry[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', gridArry[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}
