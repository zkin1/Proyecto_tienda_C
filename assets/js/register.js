function registerUser(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Crear el objeto de usuario
  const user = {
    username,
    email,
    password
  };

  // Guardar el usuario en localStorage
  saveUser(user);

  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'login.html';
}

function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', registerUser);
