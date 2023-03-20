/*const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Validar los campos del formulario
  const name = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('asunto').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido(email.value)) {
      alert('Por favor ingrese un correo electrónico válido.');
      return;
    }

  if (!name || !email || !message) {
    alert('Por favor complete todos los campos requeridos.');
    return;
  }

  // Envíe el formulario si todos los campos están completos
  this.submit();
});

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }*/
  const btnEnviar = document.getElementById('btn-enviar');

const validacion = (e) => {
  e.preventDefault();

  const alerta = document.querySelector(".alert")
  let emailMsg = document.querySelector(".email-msg")
  let mensajeMsg = document.querySelector(".msg-msg")
  const alertaAsunto = document.querySelector(".asunto-msg")
  const name = document.getElementById('nombre');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const mensagem = document.getElementById('mensagem');
  if (name.value === "") {
    name.focus();
    alerta.style.display='block'
    return false;
  }else{
    alerta.style.display='none'
  }
   
    if (asunto.value === "") {
    asunto.focus();
    alertaAsunto.style.display='block'
    return false;
  }else{
    alertaAsunto.style.display='none'
  }

  if (email.value === "") {
    emailMsg.innerHTML = "Por favor, escribe tu correo electrónico"
    emailMsg.style.display='block'
    email.focus();
    return false;
  }else{
    emailMsg.style.display='none'
  }

  if (!emailVálido(email.value)) {
    emailMsg.innerHTML = "Por favor, escribe un correo electrónico válido"
    emailMsg.style.display='block'
    email.focus();
    return false;
  }else{
    emailMsg.style.display='none'
  }
   if (mensagem.value === "") {
    mensagem.focus();
    mensajeMsg.innerHTML = "Por favor, escribe el mensaje válido"
    mensajeMsg.style.display='block'
    return false;
  }else{
    mensajeMsg.style.display='none'
  }
  if (mensagem.value.length >= 300 ) {
    mensagem.focus();
    mensajeMsg.innerHTML = "Por favor, el mensaje debe tener 300 caracters maxino"
    mensajeMsg.style.display='block'
    return false;
  }else{
    mensajeMsg.style.display='none'
  }

  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEnviar.addEventListener('click', validacion);