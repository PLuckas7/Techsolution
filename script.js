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

// Simulação de serviços com dados fictícios
const services = [
    {
        title: "Dev. Web",
        description: "Criação de websites modernos e responsivos.",
        date: "2024-10-07",
        featured: true
    },
    {
        title: "Consultoria de TI",
        description: "Soluções estratégicas para empresas.",
        date: "2024-10-05",
        featured: false
    },
    {
        title: "Marketing Digital",
        description: "Aumente sua presença online com estratégias personalizadas.",
        date: "2024-10-02",
        featured: true
    },
    {
        title: "Suporte Técnico",
        description: "Assistência e suporte técnico 24 horas.",
        date: "2024-10-04",
        featured: false
    },
    {
        title: "Treinamentos Corporativos",
        description: "Capacite sua equipe com treinamentos personalizados.",
        date: "2024-10-01",
        featured: false
    }
];

// Função para exibir os serviços mais recentes, organizados por data
function displayRecentServices() {
    const recentServicesContainer = document.getElementById('recent-services-container');

    // Ordena os serviços pela data (mais recente primeiro)
    services.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Cria o HTML para cada serviço recente
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');
        serviceItem.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <small>Publicado em: ${new Date(service.date).toLocaleDateString('pt-BR')}</small>
        `;
        recentServicesContainer.appendChild(serviceItem);
    });
}

// Função para exibir os serviços em destaque
function displayFeaturedServices() {
    const featuredServicesContainer = document.getElementById('featured-services-container');

    // Filtra os serviços destacados
    const featuredServices = services.filter(service => service.featured);

    // Cria o HTML para cada serviço em destaque
    featuredServices.forEach(service => {
        const featuredServiceItem = document.createElement('div');
        featuredServiceItem.classList.add('featured-service');
        featuredServiceItem.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        featuredServicesContainer.appendChild(featuredServiceItem);
    });
}

// Inicializando as funções ao carregar a página
window.onload = () => {
    displayRecentServices();
    displayFeaturedServices();
};


