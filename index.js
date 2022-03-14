// // let check = document.body.querySelector(".check")

// // // function chec(){
// // //     document.body.style.backgroundColor = "yellowgreen";
// // // }
// // // check.addEventListener("click", chec);


// // // let text =document.body.querySelector(".message")
// // // console.log(text.textContent="na me change am");


// // let new_msg=document.body.querySelector(".message");

// // let text=document.body.querySelector(".guess");

// // function tex(){
// //     if(text.value== ""){
// //         new_msg.textContent= "Type a number";
// //     }else{
// //         new_msg.textContent="Correct!"
// //     }
// // }
// // check.addEventListener("click", tex); 

// // Using floor and ceil difference
// // let numberGenerator= Math.floor(Math.random()* 5 +1)  or 
// // let numberGenerator= Math.ceil(Math.random()* 5 )



let numberGenerator = Math.floor(Math.random()*3 + 1);

let score = 20;

let highScore = 0;

let msg = document.querySelector(".message");

let Score = document.querySelector(".score");


let high_score = document.querySelector(".highscore")

let num = document.querySelector(".number");

let agai= document.querySelector('.again')
let btn = document.querySelector(".check");

let body= document.body.style.backgroundColor

function chat(message){
    msg.textContent = message
}

function cheq(){
    let data =Number(document.querySelector(".guess").value);

 if(!data){
    chat("type a number");
    document.body.style.backgroundColor="violet"
    num.textContent = "?"


}else if(data ===numberGenerator){
    chat("correct");
    num.textContent =numberGenerator;
    document.body.style.backgroundColor="green"
    Score.textContent=score
    high_score.textContent=numberGenerator

}else{
    chat("try again");
    document.body.style.backgroundColor="red"
    num.textContent ="?"
    score--
    Score.textContent=score
    if(score < 1){
        // num.textContent =numberGenerator;
        num.textContent="Game Over"
        // document.body.style.width="100px"
        Score.textContent=0
        num.classList.remove('number')
        num.classList.add('numberover')
}

}
}
btn.addEventListener('click', cheq)

function ag(){
//  location.reload(agai)
    score=20
    Score.textContent=20
    document.body.style.backgroundColor='black'
}
agai.addEventListener("click", ag)


// let numberGenerator=Math.floor(Math.random() * 20 +1);

// let input= document.querySelector('.guess')
// let btn = document.querySelector('.check')

// let msg =document.querySelector('.message')
