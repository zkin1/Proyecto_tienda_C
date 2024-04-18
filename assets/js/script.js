// Array de productos
const productos = [
    {
      nombre: "Batman Núm. 11",
      imagen: "./assets/img/Pbatman.png",
      descripcion: "¡El Amanecer de DC sigue aquí! ¡La batalla final! ¡El enfrentamiento definitivo entre Máscara Roja y Batman culmina con un número muy especial y lleno de sorpresas! El equipo de lujo formado por Chip Zdarsky y Jorge Jiménez (¡junto a un montón de estrellas invitadas!) homenajean al Caballero Oscuro ¡No te lo puedes perder!"
    },
    {
      nombre: "Maximum Berserk 7",
      imagen: "./assets/img/Pberserk.png",
      descripcion: "¡Se ha manifestado una dimensión alternativa! Un espacio que da sentido a todo lo sucedido hasta ahora, pero donde al mismo tiempo ese pasado carece de importancia. El Beherit, de nuevo en las manos de Griffith, responde a la llamada de su corazón, derrama lágrimas de sangre y arrastra a la Banda del Halcón en pleno a esa otra dimensión. Se produce entonces el advenimoiento de cuatro seres grotescos, los Mano de dios, que anuncian que Griffith se incorpora a sus filas tras una ofrenda: la vida de sus compañeros de armas. ¡Empieza el desenfrenado banquete de los demonios!"
    },
    {
      nombre: "Batman: La Broma Asesina (Grandes Novelas Gráficas De Batman)",
      imagen: "./assets/img/PbromaAsesina.png",
      descripcion: "Hay pocos enemigos tan acérrimos como Batman y el Joker. Ahora, el villano ha urdido un nuevo plan que pasa por secuestrar al comisario Gordon para humillarlo y destruirlo después de perjudicar a uno de sus seres más queridos. ¿Servirá como excusa para que el Caballero Oscuro y el Príncipe Payaso del Crimen libren la batalla final?"
    },
    {
      nombre: "ONE PIECE EDICION 3 EN 1: PACK 1 A 5",
      imagen: "./assets/img/Ponepice.png",
      descripcion: "PACK DE LOS PRIMEROS 5 TOMOS DE ONE PIECE EDITADO POR PLANETA"
    },
    {
      nombre: "Junji Ito: Maestro Del Terror – Terror Insólito Vol. 3 De 3",
      imagen: "./assets/img/PterrorInsolito.png",
      descripcion: "En este volumen Junji Ito despliega su maestría en la creación de ambientes, como vemos en El disco de segunda mano, uno de los favoritos del autor, donde la música se convierte en un elemento espeluznante. Otros ejemplos son La cañería gimiente, un relato que gira en torno al ruido inquietante de un desagüe, El club de los fumadores, donde el humo es algo fascinante que poco a poco se va adueñando de toda la historia, o Un laberinto insoportable, en el que la espiritualidad y la claustrofobia se unen para crear una auténtica pesadilla."
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
              <a href="${obtenerEnlaceProducto(producto.nombre)}" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      `;
      contenedorResultados.appendChild(divProducto);
    })

// Función para obtener el enlace 
function obtenerEnlaceProducto(nombreProducto) {
  const enlaces = {
    "Batman Núm. 11": "batman.html",
    "Maximum Berserk 7": "berserk.html",
    "Batman: La Broma Asesina (Grandes Novelas Gráficas De Batman)": "bromaasesina.html",
    "ONE PIECE EDICION 3 EN 1: PACK 1 A 5": "onepice.html",
    "Junji Ito: Maestro Del Terror – Terror Insólito Vol. 3 De 3": "terrorinsolito.html"
  };

  return enlaces[nombreProducto] || "#";
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
  }