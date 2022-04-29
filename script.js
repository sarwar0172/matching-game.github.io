const cardList=[
    {
        name:'img1',
        image:'img/image-1.png'
    },
    {
        name:'img1',
        image:'img/image-1.png'
    },
    {
        name:'img2',
        image:'img/image-2.png'
    },
    {
        name:'img2',
        image:'img/image-2.png'
    },
    {
        name:'img3',
        image:'img/image-3.png'
    },
    {
        name:'img3',
        image:'img/image-3.png'
    },
    {
        name:'img4',
        image:'img/image-4.png'
    },
    {
        name:'img4',
        image:'img/image-4.png'
    },
    {
        name:'img5',
        image:'img/image-5.png'
    },
    {
        name:'img5',
        image:'img/image-5.png'
    },
    {
        name:'img6',
        image:'img/image-6.png'

    },
    {
        name:'img6',
        image:'img/image-6.png'
    },
    {
        name:'img5',
        image:'img/image-5.png'
    },
    {
        name:'img5',
        image:'img/image-5.png'
    },
    {
        name:'img2',
        image:'img/image-2.png'
    },
    {
        name:'img2',
        image:'img/image-2.png'
    },
]
cardList.sort(()=>0.5-Math.random());
const cardcontainer=document.getElementById('card-container')
const FlipsCount=document.getElementById('flip-count')
const matchCount=document.getElementById('match-count')

var attempts=0;
var foundCards=0;

FlipsCount.textContent=attempts;
matchCount.textContent=foundCards;

var chosenCards=[];
var chosendCardsIds=[];

function initiateBoard(){
    for(let i=0;i<cardList.length;i++){
        var card=document.createElement('img')
       card.setAttribute('src','img/card.png');
        card.classList.add('img')
       card.setAttribute('data-id',i);
       card.addEventListener('click',clikdecard)
       cardcontainer.appendChild(card)
    }

}
function clikdecard(){
    if(chosenCards.length!=2){
        var cardid=this.getAttribute('data-id');
        if(this.getAttribute('src') !==cardList[cardid].image){
             this.classList.add('flip')
            chosenCards.push(cardList[cardid].name);
            chosendCardsIds.push(cardid);
            this.setAttribute('src',cardList[cardid].image);
            if(chosenCards.length==2){
                setTimeout(cheakforMatch,500);
            }
        }

    }

}

function cheakforMatch(){
    attempts++;
    console.log(attempts)
    var cards=document.querySelectorAll('img');
    var firstCard=chosendCardsIds[0];
    var secondCard=chosendCardsIds[1];
    
    if(chosenCards[0]==chosenCards[1]){
        foundCards++;
        console.log(foundCards)
        cards[firstCard].setAttribute('src',cardList[firstCard].image);
        cards[secondCard].setAttribute('src',cardList[secondCard].image);

    }else{
        cards[firstCard].setAttribute('src','img/card.png')
        cards[secondCard].setAttribute('src','img/card.png')

    }

    chosenCards=[];
    chosendCardsIds=[]
    
    FlipsCount.textContent=attempts;
    matchCount.textContent=foundCards;
    if(foundCards==8){
        alert('you compeleted the gaem')
    }
}
initiateBoard()

function resetGame(){
    location.reload();
}
 
