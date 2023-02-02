
const cardArray = [
    {
        name: 'fries',
        img : 'assets/fries.png',

    },
    {
        name: 'cheeseburger',
        img : 'assets/cheeseburger.png',

    },
    {
        name: 'hotdog',
        img : 'assets/hotdog.png',

    },
    {
        name: 'ice-cream',
        img : 'assets/ice-cream.png'

    },
    {
        name: 'pizza',
        img : 'assets/pizza.png'

    },
    {
        name: 'milkshake',
        img : 'assets/milkshake.png'

    },
    {
        name: 'fries',
        img : 'assets/fries.png'

    },
    {
        name: 'cheeseburger',
        img : 'assets/cheeseburger.png'

    },
    {
        name: 'hotdog',
        img : 'assets/hotdog.png'

    },
    {
        name: 'ice-cream',
        img : 'assets/ice-cream.png'

    },
    {
        name: 'pizza',
        img : 'assets/pizza.png'

    },
    {
        name: 'milkshake',
        img : 'assets/milkshake.png'

    }

]
let choiceCard = [];
let choiceCardId = [];
const cardsWon = [];
cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#images');
const result = document.querySelector('#result');

function checkMatch(){
    const cards = document.querySelectorAll('img');
    if(choiceCardId[0]==choiceCardId[1]){
        alert('you chose the same card');
    }
    if(choiceCard[0]==choiceCard[1]&&choiceCardId[0]!=choiceCardId[1]){
        alert('it is a match')
        cards[choiceCardId[0]].setAttribute('src','assets/white.png');
        cards[choiceCardId[1]].setAttribute('src','assets/white.png');
        cards[choiceCardId[0]].removeEventListener('click',flipCard);
        cards[choiceCardId[1]].removeEventListener('click',flipCard);
        cardsWon.push(choiceCard);
    }else{
        cards[choiceCardId[0]].setAttribute('src','assets/blank.png');
        cards[choiceCardId[1]].setAttribute('src','assets/blank.png');
        alert('sorry try again');
    }
    result.textContent=cardsWon.length;
    choiceCard = [];
    choiceCardId = [];
    console.log(choiceCard);
    console.log(choiceCardId);
    console.log(cardsWon);
    if(cardsWon.length==cardArray.length/2){
        result.innerHTML = 'congratulations you won the game!'
    }

}
function createBoard(){
    // for (let i = 0; i< cardArray.length; i++) {
    //     const card = document.createElement('img');
    //     card.setAttribute('src', 'assets/blank.png');
    //     card.setAttribute('data-id',i);
    //     card.addEventListener('click',flipCard);
    //     gridDisplay.appendChild(card);
        
    // }
    cardArray.forEach((val,ind)=>{
        const card = document.createElement('img');
            card.setAttribute('src', 'assets/blank.png');
            card.setAttribute('data-id',ind);
            card.addEventListener('click',flipCard);
            gridDisplay.appendChild(card);
    })
}

createBoard()

function flipCard() {
 const cardId = this.getAttribute('data-id')
choiceCard.push(cardArray[cardId].name)
this.setAttribute('src',cardArray[cardId].img)
choiceCardId.push(cardId)
console.log(choiceCardId)
if (choiceCard.length==2){
    setTimeout(checkMatch , 500)
}
}
