// Array de productos
const productos = [
    {
      nombre: "Ojos",
      imagen: "./assets/img/ojos.png",
      descripcion: "Una descripción detallada de los ojos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    },
    {
      nombre: "Mineon",
      imagen: "./assets/img/mineon.png",
      descripcion: "Una descripción detallada de Mineon. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    },
    {
      nombre: "AUTO",
      imagen: "./assets/img/auto.png",
      descripcion: "Una descripción detallada de AUTO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna quis eros sollicitudin, sed hendrerit justo bibendum."
    }
  ];
  
  // funcion busqueda
  function search() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const resultados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchText)
    );
  
    mostrarResultados(resultados);
  }
  
  // Funcion para mostrar los resultados 
  function mostrarResultados(resultados) {
    const contenedorResultados = document.getElementById("resultadosBusqueda");
    contenedorResultados.innerHTML = "";
  
    if (resultados.length === 0) {
      contenedorResultados.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }
  
    resultados.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("card", "mb-3");
      divProducto.innerHTML = `
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${producto.imagen}" class="card-img" alt="${producto.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      contenedorResultados.appendChild(divProducto);
    });
  }
  const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;

  if (isValidEmail(email)) {
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Email válido:', email);
  } else {
    emailError.textContent = 'Por favor, ingresa un email válido.';
  }
});

function isValidEmail(email) {
  // Expresión regular para validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Función para guardar los datos del usuario en el localStorage
function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Función para obtener los datos del usuario del localStorage
function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// Función para validar el inicio de sesión
function login(username, password) {
  const user = getUser();
  if (user && user.username === username && user.password === password) {
    return true;
  }
  return false;
}
function registerUser(event) {
  event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    // Mostrar un mensaje de error
    return;
  }

  // Crear un objeto con los datos del usuario
  const user = {
    username,
    email,
    password
  };

  // Guardar los datos del usuario en el localStorage
  saveUser(user);

  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'login.html';
}
// script.js
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (login(username, password)) {
    // Redirigir al usuario a la página principal
    window.location.href = 'index.html';
  } else {
    // Mostrar un mensaje de error
    alert('Usuario invalido o contraseña incorrecta');
  }
}