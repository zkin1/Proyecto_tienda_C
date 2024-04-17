console.log('Contenido de localStorage:', localStorage.getItem('user'));

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (login(username, password)) {
      window.location.href = 'index.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });

  function login(username, password) {
    const user = getUser();
    if (user && user.username === username && user.password === password) {
      return true;
    }
    return false;
  }

  function getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
});
