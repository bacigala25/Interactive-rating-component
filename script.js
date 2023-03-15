const button = document.querySelector(".btn")
const rating = document.querySelector(".rating-page")
const thanks = document.querySelector(".thanks-page")
const ratingButtons = document.querySelectorAll(".rating span")
const selectedRate = document.querySelector(".selected-rate")
let score = 3 //default value

button.addEventListener("click", clickButton)

ratingButtons.forEach(element =>{
        element.addEventListener("click", ratingButtonClick)
})


function clickButton(){
      thanks.classList.remove("hidden")      
      rating.classList.add("hidden") 
      selectedRate.textContent = score 
}

function ratingButtonClick(event){
       ratingButtons.forEach(element =>{
            element.classList.remove("active")
            console.log()
       })
       event.target.classList.add("active")

       score = event.target.textContent
       console.log(score)

}





console.log(ratingButtons)

