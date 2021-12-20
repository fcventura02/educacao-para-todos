const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  if (name.value.trim() === "" || name.length < 2) {
		return errorInput(e, name, "Entre com um valor valido")
  }
  if (email.value.trim() === "" || !validEmail(email.value)) {
		return errorInput(e, email, "Entre com um E-mail válido")
  }
  if (message.value.trim() === "") {
		return errorInput(e, message, "Descreva o que você achou do projeto")
  }
	
});

function errorInput(event, element, message, fn){
	element.setCustomValidity(message);
	fn(btnSubmit.children)
  return event.preventDefault();
}

function validEmail(mail) {
  const re = /\S+@\S+\.\S+/;
  return re.test(mail);
}