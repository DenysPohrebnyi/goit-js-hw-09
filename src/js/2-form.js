const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
populateText();

const formData = {
    email: "",
    message: ""
}

function handleInput(event) {
    event.preventDefault();
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (!data) {
        return
    }
    const { email, message } = form.elements;
    email.value = data.email.trim();
    message.value = data.message.trim();
}


function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  console.log({ email: email.value, message: message.value });
  form.reset();
}