const button=document.querySelectorAll(".link");
console.log(button)

button.forEach(a => {
    a.addEventListener("click",()=>{
        a.classList.toggle("active");
        
    });
});