const form = document.querySelector(".form")
const answerForm = document.querySelector(".answer-form-container")

form.onsubmit = async (event) => {
  event.preventDefault()
  orderForm()
  let response = await fetch("https://asiansy.com/test/test.php", {
    method: "POST",
    body: new FormData(form),
  })
  await response.json().then((data) => {
    responseForm(data)
  })
}

function responseForm(response) {
  if (response.message === "Phone is invalid") {
    alert("Заказ не создан! Введите верные данные!")
  } else if (response.message === "OK") {
    form.classList.add("is-hidden")
    answerForm.classList.remove("is-hidden")
    form.reset()
  }
}

function orderForm() {
  setTimeout(() => {
    answerForm.classList.add("is-hidden")
    form.classList.remove("is-hidden")
  }, 3000)
}
