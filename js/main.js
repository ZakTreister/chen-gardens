var btn = document.getElementById('btn');
var shem = document.getElementById('shem')
var mail = document.getElementById('mail')
var phone = document.getElementById('phone')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`Thank you ${shem.value}. We will contact you as soon as possible. ${mail.value}, ${phone.value}`)
})