let btn=document.querySelector('button')
console.log(btn)
let op=document.getElementById('q')
let quotes=[
    "You’re braver than you believe, and stronger than you seem, and smarter than you think",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "The only time you fail is when you fall down and stay down.",
    "Positive anything is better than negative nothing.",
    "Happiness is the only thing that multiplies when you share it.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "Be yourself; everyone else is already taken.",
    "The most important thing is to enjoy your life—to be happy—it's all that matters"
]
btn.addEventListener('click',() =>{
// for(let i=1;i<=quotes.length;i++){
    var randomquotes=quotes[Math.floor(Math.random()*quotes.length) ]
    op.innerHTML=randomquotes
// }
// document.getElementById('s').textContent=quotes
}
)