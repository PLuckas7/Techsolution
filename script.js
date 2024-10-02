document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name=document.getElementById('name').values;
    const email=document.getElementById('email').values;
    const password=document.getElementById('password').values;

    document.getElementById('responseMessage').innerText`Obrigado,${name}! sua mensagem foi enviada`;

    document.getElementById('contactForm').reset();
})