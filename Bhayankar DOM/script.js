// let heading = document.querySelector("h1")
// heading.style.backgroundColor = "pink"
// heading.style.color =  " blue"
// heading.style.fontSize = "1rem"

// heading.style.border = "2px solid red"
// heading.style.padding = "1rem"
// heading.style.margin = "4rem"



// heading.addEventListener("click",()=>{
//  heading.style.backgroundColor = "black"
//  heading.innerHTML = "I love you"
//  heading.style.color = "purple"
//  heading.style.transform = "scale(1.5)"
// })



const para = document.createElement("p")
para.textContent = "mai tumse pyaar nahi karta hun"
para.style.backgroundColor = "black"
para.style.color = "green"

document.body.appendChild(para)


const btn = document.createElement("button")
btn.textContent = "Click Me"
para.appendChild(btn);
document.body.appendChild(para);


const div = document.querySelector(".box");
div.classList.add("newclass")


