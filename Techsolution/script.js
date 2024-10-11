let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Muda de slide a cada 5 segundos
}

// Função para ir ao próximo ou anterior slide
function plusSlides(n) {
    showSpecificSlide(slideIndex += n);
}

// Função para ir a um slide específico
function currentSlide(n) {
    showSpecificSlide(slideIndex = n);
}

function showSpecificSlide(n) {
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


// Função para alterar a cor da barra de navegação ao rolar a página
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#555';
    } else {
        nav.style.backgroundColor = '#333';
    }
});

// Função para verificar o formulário antes de enviar (na página de contato)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos antes de enviar.');
            e.preventDefault(); // Impede o envio do formulário
        }
    });
}
function searchSite() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    // Simulando um comportamento de busca
    if (input === "") {
        alert("Por favor, insira um termo de pesquisa.");
    } else if (input.includes("serviços")) {
        // Redireciona para a página de serviços (exemplo)
        window.location.href = "servicos.html";
    } else if (input.includes("sobre")) {
        // Redireciona para a página sobre nós
        window.location.href = "sobre.html";
    } else if (input.includes("contato")) {
        // Redireciona para a página de contato
        window.location.href = "contato.html";
    } else {
        alert("Nenhum resultado encontrado para: " + input);
    }
}

