const form = document.querySelector(".form")
const answerForm = document.querySelector(".answer-form-container")

form.onsubmit = async (event) => {
  event.preventDefault()
  orderForm()
  let response = await fetch("https://asiansy.com/test/test.php", {
    method: "POST",
    body: new FormData(form),
  })
  try {
    let text = await response.text()
    form.classList.add("is-hidden")
    answerForm.classList.remove("is-hidden")
    console.log(text)
    form.reset()
  } catch (error) {
    alert("Ошибка! Такие данные уже используются.")
    console.log(error.message)
    form.reset()
  }
}
function orderForm() {
  setTimeout(() => {
    answerForm.classList.add("is-hidden")
    form.classList.remove("is-hidden")
  }, 3000)
}
