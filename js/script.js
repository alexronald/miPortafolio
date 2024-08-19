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
  var url = "https://api.whatsapp.com/send?phone=51904023490&text=%C2%A1Hola%20Alex!%20%F0%9F%91%8B%0AEspero%20que%20est%C3%A9s%20bien.%0ATe%20contacto%20para%20hablar%20sobre%20lo%20siguiente%3A%0A*Asunto%3A*%20"+asunto.value+"%0A%0A*Mensaje%3A*%20"+mensagem.value+"%0ASi%20necesitas%20m%C3%A1s%20informaci%C3%B3n%20o%20tienes%20alguna%20pregunta%2C%20no%20dudes%20en%20responder%20a%20este%20mensaje%20o%20contactarme%20directamente%20por%20email%20en%20"+email.value+".%0A%C2%A1Gracias%20y%20que%20tengas%20un%20excelente%20d%C3%ADa!%20%F0%9F%98%8A%0ASaludos%2C%0A"+name.value
  window.location.href = url;
  console.log("emviar Correo")
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


btnEnviar.addEventListener('click', validacion);



