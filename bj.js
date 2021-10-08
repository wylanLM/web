
let cards=[
    {
        new:Card(1,1,11)
    },
    {
        new:Card(1,2,11)

    },
    {
        new:Card(1,3,11)

    },
    {
        new:Card(1,4,11)

    },
    {
        new:Card(2,1,2)
    },
    {
        new:Card(2,2,2)

    },
    {
        new:Card(2,3,2)

    },
    {
        new:Card(2,4,2)

    },
    {
        new:Card(3,1,3)
    },
    {
        new:Card(3,2,3)

    },
    {
        new:Card(3,3,3)

    },
    {
        new:Card(3,4,3)

    },
    {
        new:Card(4,1,4)
    },
    {
        new:Card(4,2,4)

    },
    {
        new:Card(4,3,4)

    },
    {
        new:Card(4,4,4)

    },
    {
        new:Card(5,1,5)
    },
    {
        new:Card(5,2,5)

    },
    {
        new:Card(5,3,5)

    },
    {
        new:Card(5,4,5)

    },
    {
        new:Card(6,1,6)
    },
    {
        new:Card(6,2,6)

    },
    {
        new:Card(6,3,6)

    },
    {
        new:Card(6,4,6)

    },
    {
        new:Card(7,1,7)
    },
    {
        new:Card(7,2,7)

    },
    {
        new:Card(7,3,7)

    },
    {
        new:Card(7,4,7)

    },
    {
        new:Card(8,1,8)
    },
    {
        new:Card(8,2,8)

    },
    {
        new:Card(8,3,8)

    },
    {
        new:Card(8,4,8)

    },
    {
        new:Card(9,1,9)
    },
    {
        new:Card(9,2,9)

    },
    {
        new:Card(9,3,9)

    },
    {
        new:Card(9,4,9)

    },
    {
        new:Card(10,1,10)
    },
    {
        new:Card(10,2,10)

    },
    {
        new:Card(10,3,10)

    },
    {
        new:Card(10,4,10)

    },
    {
        new:Card(11,1,10)
    },
    {
        new:Card(11,2,10)

    },
    {
        new:Card(11,3,10)

    },
    {
        new:Card(11,4,10)

    },
    {
        new:Card(12,1,10)
    },
    {
        new:Card(12,2,10)

    },
    {
        new:Card(12,3,10)

    },
    {
        new:Card(12,4,10)

    },
    {
        new:Card(13,1,10)
    },
    {
        new:Card(13,2,10)

    },
    {
        new:Card(13,3,10)

    },
    {
        new:Card(13,4,10)

    },
];
let played_cards=[

];

(function() {
    let button= document.getElementById("newCard")
    button.style.color="red"
    button.addEventListener('click', ()=> {
    let user_cards_view = document.getElementById('uCards')
    let myImage = new Image(150, 200);
    myImage.src = 'c11.png';
    user_cards_view.appendChild(myImage)
    let myImage2 = new Image(100, 200);
    let card_pos=Math.floor(Math.random(52));
    myImage2.src = 'c12.png';
    let count=document.getElementById('count')
    count.innerHTML= card_pos;
    math+=1

    user_cards_view.appendChild(myImage2)
    })
})();