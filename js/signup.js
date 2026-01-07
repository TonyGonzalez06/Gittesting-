(function () {
  var form = document.getElementById('signupForm');

  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var birthday = document.getElementById('birthday');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (
      firstName.value === '' ||
      lastName.value === '' ||
      email.value === '' ||
      username.value === '' ||
      password.value === '' ||
      birthday.value === ''
    ) {
      alert('Please fill out all fields before creating an account.');
      return;
    }

    alert('Account created successfully!');
    window.location.href = 'index.html';
  });
})();
