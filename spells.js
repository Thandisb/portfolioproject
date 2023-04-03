 //const Url ="https://hp-api.onrender.com/api/characters/students"
 const form = document.querySelector("form");
// // const main = document.querySelector("main");
 form.addEventListener("submit", (event)=>{
     event.preventDefault();

fetch('https://hp-api.onrender.com/api/spells')
.then(res => res.json())
.then(data => {
        
        data.forEach(spell=>{

            console.log(spell)
            const card = document.createElement('article')
            card.classList.add("card")
            
            const name = document.createElement('h2');
            name.textContent=spell.name

            const describe = document.createElement('p')
            describe.textContent=spell.description
        
            card.append(name,describe);
            
            const main = document.querySelector("main");
            main.append(card);
        } )
 
})
 .catch((error)=>{
         console.log(error)
       });

    })
