const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  Usuario: /^[a-zA-Z0-9\_\-]{6,16}$/,
  password: /^.{4,12}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
      
      case "UserName" :
        validarCampo(expresiones.Usuario, e.target, 'UserName');
      break;
  
      case "Password" :
        validarCampo(expresiones.password, e.target, 'Password');
      break;
    }
}

//Validar Campos
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
      document.getElementById(`Grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`Grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#Grupo__${campo} i`).classList.add('fa-circle-check');
      document.querySelector(`#Grupo__${campo} i`).classList.remove('fa-circle-xmark');
      document.querySelector(`#Grupo__${campo} .formulario__input--error`).classList.remove('formulario__input--error-activo');
      campos[campo] = true;
    } else {
      document.getElementById(`Grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`Grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#Grupo__${campo} i`).classList.add('fa-circle-xmark');
      document.querySelector(`#Grupo__${campo} i`).classList.remove('fa-circle-check');
      document.querySelector(`#Grupo__${campo} .formulario__input--error`).classList.add('formulario__input--error-activo');
      campos[campo] = false;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });