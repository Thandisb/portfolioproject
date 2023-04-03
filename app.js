 //const Url ="https://hp-api.onrender.com/api/characters/students"
 const form = document.querySelector("form");
// // const main = document.querySelector("main");
 form.addEventListener("submit", (event)=>{
     event.preventDefault();

fetch('https://hp-api.onrender.com/api/characters/students')
.then(res => res.json())
.then(data => {
        
        data.forEach(item=>{

            console.log(item)
            const card = document.createElement('article');
            card.classList.add("card");
        
            const name = document.createElement('h2');
            name.textContent = item.name;
        
            const img = document.createElement('img')
            img.setAttribute("src", item.image)
            
            const gender = document.createElement('p');
            gender.textContent=item.gender;
        
            const house=document.createElement('p');
            house.textContent=item.house;
        
            const birthday = document.createElement('p');
            birthday.textContent=item.dateOfBirth;
        
            const status = document.createElement('p')
            status.textContent=item.ancestry
        
            card.append(name,img,gender,house,birthday,status);
            
            const main = document.querySelector("main")
            main.append(card);
        } )
 
})
 .catch((error)=>{
         console.log(error)
       });

    })

// const displayResult = (result) => {
//     console.log(result)

//     const card = document.createElement('article');
//     card.classList.add("card");

//     const name = document.createElement('h2');
//     name.textContent = result.name;

//     const img = document.createElement('img')
//     img.setAttribute("src", result.image)
    
//     const gender = document.createElement('p');
//     gender.textContent=result.gender;

//     const house=document.createElement('p');
//     house.textContent=result.house;

//     const birthday = document.createElement('p');
//     birthday.textContent=result.dateOfBirth;

//     const status = document.createElement('p')
//     status.textContent=result.ancestry

//     card.append(name,img,gender,house,birthday,status);
    
//     const main = document.querySelector("main")
//     main.append(card);
// 

// const button=document.querySelector("#submit")


//  function getStudents(){
// fetch('https://hp-api.onrender.com/api/characters/students')
// .then(res => res.json())
// .then(data => {
//         console.log (data)
        
//     const card = document.createElement('article');
//     card.classList.add("card");

//     const name = document.createElement('h2');
//     name.textContent = data.name;

//     // const img = document.createElement('img')
//     // img.setAttribute("src", data.image)
    
//     const gender = document.createElement('p');
//     gender.textContent=data.gender;

//     const house=document.createElement('p');
//     house.textContent=data.house;

//     const birthday = document.createElement('p');
//     birthday.textContent=data.dateOfBirth;

//     const status = document.createElement('p')
//     status.textContent=data.ancestry

//     card.append(name,img,gender,house,birthday,status);
    
//     const main = document.querySelector("main")
//     main.append(card);
// })
//  .catch((error)=>{
//          console.log(error)
//        });

//     };

