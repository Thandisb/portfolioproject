const form = document.querySelector("form");
const input = document.querySelectorAll('input[type=text]');
const thankYou = document.querySelector('.thank-you');
const thankYouMessage = document.querySelector(".thanks-message");


// function thanks(event){

    
// thankYouMessage.textContent= "Thanks for your application, (disclaimer! this page was created by a muggle, everyone knows you can't apply to hogwarts silly!!!)";
// thankYou.classList.remove("hidden");
// event.preventDefault();
// }




form.addEventListener("submit", (event)=>{
    event.preventDefault();
    input.forEach((answer)=>{
        console.log(answer)
        
    })
});
