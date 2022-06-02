
const textInput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs button");
infoText = document.querySelector(".info-text");
let filterIn ;

checkBtn.addEventListener("click", () =>{
    let reverseIn=filterIn.split("").reverse().join("");
    infoText.style.display="block"
    if (filterIn!=reverseIn){
       return infoText.innerHTML=" No, <span>"+textInput.value+" </span> isn't a palindrome"
    }

    infoText.innerHTML=" Yes <span>"+textInput.value+" </span> is a palindrome"
})
textInput.addEventListener("keyup",()=>{
    //remove all the speacial caractere and blacks 
    filterIn= textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
         if (filterIn){
           return checkBtn.classList.add("active");
                     }
                     
                     infoText.style.display="none";
                     checkBtn.classList.remove("active");




});