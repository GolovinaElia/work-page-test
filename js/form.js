const inputName = document.querySelector(".name")
const inputNumber = document.querySelector(".number")
const errorAnswerName = document.querySelector(".error-answer-name")
const errorAnswerNumber = document.querySelector(".error-answer-number")

inputName.addEventListener("blur", () => {
  if (inputName.getAttribute("data-length") > inputName.value.length) {
    inputName.classList.add("invalid")
    inputName.classList.remove("valid")
    errorAnswerName.classList.remove("is-hidden")
  } else {
    inputName.classList.add("valid")
    inputName.classList.remove("invalid")
    errorAnswerName.classList.add("is-hidden")
  }
})

inputNumber.addEventListener("blur", () => {
  if (inputNumber.getAttribute("data-length") > inputNumber.value.length) {
    inputNumber.classList.add("invalid")
    inputNumber.classList.remove("valid")
    errorAnswerNumber.classList.remove("is-hidden")
  } else {
    inputNumber.classList.add("valid")
    inputNumber.classList.remove("invalid")
    errorAnswerNumber.classList.add("is-hidden")
  }
})
