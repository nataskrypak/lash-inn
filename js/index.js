// Get the modal
var modal = document.getElementById('modal-login-animated');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.querySelector('.container-login-info button[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            email: document.querySelector('.container-login-info input[name=email]').value,
            password: document.querySelector('.container-login-info input[name=psw]').value
        })
    })
        .then(_ => document.querySelector('.login-content-animate').reset());
