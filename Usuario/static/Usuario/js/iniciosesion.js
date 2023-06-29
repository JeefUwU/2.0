const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  Usuario: /^[a-zA-Z0-9\_\-]{6,16}$/,
  nombre: /^[a-zA-Z-AÁ-Ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
  Nombre: false,
  UserName: false,
  Password: false,
  Email: false,
  Genero: false,
  FechaNac: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "Nombre":
      validarCampo(expresiones.nombre, e.target, 'Nombre');
      break;

    case "UserName":
      validarCampo(expresiones.Usuario, e.target, 'UserName');
      break;

    case "Email":
      validarCampo(expresiones.correo, e.target, 'Email');
      break;

    case "Password":
      validarCampo(expresiones.password, e.target, 'Password');
      break;

    case "Password2":
      ValidarPassword2();
      break;

    case "Genero":
      generoInputs();
      break;

    case "FechaNac":
      fechaNacInput();
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
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

const ValidarPassword2 = () => {
  const inputPassword1 = document.getElementById('Password')
  const inputPassword2 = document.getElementById('Password2')

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`Grupo__Password2`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`Grupo__Password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#Grupo__Password2 i`).classList.add('fa-circle-xmark');
    document.querySelector(`#Grupo__Password2 i`).classList.remove('fa-circle-check');
    document.querySelector(`#Grupo__Password2 .formulario__input--error`).classList.add('formulario__input--error-activo');
    campos["Password"] = false;
  } else {
    document.getElementById(`Grupo__Password2`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`Grupo__Password2`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#Grupo__Password2 i`).classList.add('fa-circle-check');
    document.querySelector(`#Grupo__Password2 i`).classList.remove('fa-circle-xmark');
    document.querySelector(`#Grupo__Password2 .formulario__input--error`).classList.remove('formulario__input--error-activo');
    campos["Password"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener('input', validarFormulario);
});

/*//Validar Genero

const generoInputs = document.querySelectorAll('input[name="Genero"]');

generoInputs.forEach(input => {
  input.addEventListener('click', () => {
    const seleccionado = document.querySelector('input[name="Genero"]:checked');
    if (seleccionado) {
      const error = document.querySelector('#Grupo__Genero .formulario__input--error-activo');
      error.style.display = 'none';
    }
  });
});

formulario.addEventListener('submit', event => {
  event.preventDefault();
  const seleccionado = document.querySelector('input[name="Genero"]:checked');
  const error = document.querySelector('#Grupo__Genero .formulario__input--error');
  if (!seleccionado) {
    error.style.display = 'block';
  } else {
    formulario.submit();
  }
});*/


/*//edad
const fechaNacInput = document.getElementById('FechaNac');
fechaNacInput.addEventListener('input', function() {
  const hoy = new Date();
  const fechaNac = new Date(this.value);
  const edad = hoy.getFullYear() - fechaNac.getFullYear();

  if (edad >= 18) {
    document.getElementById('resultado').innerHTML = '✓';
    document.getElementById('resultado').style.color = 'green';
  } else {
    document.getElementById('resultado').innerHTML = 'X';
    document.getElementById('resultado').style.color = 'red';
  }
});

const birthDateInput = document.getElementById('FechaNac');
const registerBtn = document.getElementById('register-btn');

birthDateInput.addEventListener('change', () => {
  const birthDate = new Date(birthDateInput.value);
  const ageInMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (age >= 18) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
    alert('Debes tener al menos 18 años para registrarte.');
  }
});*/


inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});
