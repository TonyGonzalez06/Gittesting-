// THIS CODE IS FOR LOGIN FORM HANDLING IN index.html

(function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
  //  e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log('Email:', email);
    console.log('Password:', password);

    // 
    alert(
      'Email: ' + email + '\n' +
      'Password: ' + password );

      if (email === 'ADMIN' && password === 'ADMIN123') {
      window.location.href = 'main.html';
    } else {
      alert('Incorrect email or password');
      e.preventDefault();

    }
  });
})();


// ADMIN  ADMIN123    