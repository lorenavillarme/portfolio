

hamburguer = document.querySelector(".hamburguer")
hamburguer.onclick = function () {
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

//contacto

const form = document.querySelector('form')
const fullName = document.getElementById('nombre')
const email = document.getElementById('email')
const phone = document.getElementById('telefono')
const subject = document.getElementById('asunto')
const message = document.getElementById('mensaje')
var switcher = document.getElementById('switcher');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value} <br>
    Phone Number: ${phone.value} <br> Message: ${message.value}`

    Email.send({
        SecureToken: "f543b330-468d-427c-a3ca-ba5787d071be",
        To: 'lorenavillarm@gmail.com',
        From: "lorenavillarm@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                if (switcher.checked) {
                    Swal.fire({
                        title: "Perfect",
                        text: "Your message has been sent",
                        icon: "success"
                    });
                }else {
                    Swal.fire({
                        title: "Perfecto",
                        text: "Tu mensaje ha sido enviado",
                        icon: "success"
                    });
                }
               
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll('.item')

    for (const item of items) {
        if (item.value == '') {
            item.classList.add('error')
            item.parentElement.classList.add('error')
        }

        if (items[1].value != '') {
            checkEmail()
        }

        items[1].addEventListener('keyup', () => {
            checkEmail()
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add('error')
                item.parentElement.classList.add('error')
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

    const errorEmail = document.querySelector('.error.email')

    if (!email.value.match(emailRegex)) {
        email.classList.add('error')
        email.parentElement.classList.add('error')

        if (email.value != '') {
            errorEmail.innerText = 'Pon un email correcto'
        }
        else {
            errorEmail.innerText = 'No puede estar vacío'
        }
    }
    else {
        email.classList.remove('error')
        email.parentElement.classList.remove('error')
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()

    if (!fullName.classList.contains('error') && !email.classList.contains('error')
        && !phone.classList.contains('error') && !subject.classList.contains('error')
        && !message.classList.contains('error')) {

        sendEmail()

        form.reset()
        return false
    }

})

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('#hero .title').style.opacity = 1;
    }, 500);
    setTimeout(function () {
        document.querySelector('#hero .second').style.opacity = 1;
    }, 800);
    setTimeout(function () {
        document.querySelector('#hero .third').style.opacity = 1;
    }, 1100);
    setTimeout(function () {
        document.querySelector('#hero #more').style.opacity = 1;
    }, 1400);
});


var copy = document.querySelector(".tools-slide").cloneNode(true);
document.querySelector(".tools").appendChild(copy);


document.getElementById('switcher').addEventListener('change', function () {
    var ideas = document.getElementById('ideas');
    var more = document.getElementById('more');
    var heading = document.querySelector('.second');
    var third = document.querySelector('.third');
    var team = document.getElementById('team');
    var knowledge = document.getElementById('knowledge');
    var info = document.getElementById('info');
    var copy = document.getElementById('copy');
    var code = document.getElementById('code');
    var text2 = document.getElementById('text2');
    var apple = document.getElementById('apple');
    var bookie = document.getElementById('bookie');
    var agency = document.getElementById('agency');
    var s2 = document.getElementById('s2');
    var s1 = document.getElementById('s1');
    var hablamos = document.getElementById('hablamos');
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');
    var asunto = document.getElementById('asunto');
    var mensaje = document.getElementById('mensaje');
    var errorNombre = document.getElementById('error-nombre');
    var errorEmail = document.getElementById('error-email');
    var errorTelefono = document.getElementById('error-telefono');
    var errorAsunto = document.getElementById('error-asunto');
    var errorMs = document.getElementById('error-ms');
    var sendbtn = document.getElementById('send');
    var sobremi = document.getElementById('link-sobremi');
    var proyectos = document.getElementById('link-proyectos');
    var contacto = document.getElementById('link-contacto');
    var emailLabel = document.getElementById('email-label');
    var phoneLabel = document.getElementById('phone-label');
    var phoneValue = document.getElementById('phone-value');


    if (this.checked) {
        ideas.src = 'img/eng-pics/ideas.png';
        more.src = 'img/eng-pics/more.png';
        heading.innerHTML = 'Transforming ideas into code, and code into <span class="diff-color">solutions</span>';
        third.textContent = "Hello! I'm Lorena, I invite you to see my projects.";
        team.src = 'img/eng-pics/team.png';
        knowledge.src = 'img/eng-pics/knowledge.png';
        info.src = 'img/eng-pics/info.png';
        copy.src = 'img/eng-pics/copy.png';
        code.src = 'img/eng-pics/code.png';
        text2.innerHTML = 'A brief selection of my <span class="diff-color">recent projects</span>';
        apple.src = 'img/eng-pics/web-apple.png';
        bookie.src = 'img/eng-pics/bookie.png';
        agency.src = 'img/eng-pics/agency.png';
        s2.src = 'img/eng-pics/sentence2.png';
        s1.src = 'img/eng-pics/sentence1.png';
        hablamos.textContent = "Shall we talk? :)";
        nombre.placeholder = "Name";
        email.placeholder = "Email";
        telefono.placeholder = "Phone";
        asunto.placeholder = "Subject";
        mensaje.placeholder = "Message";
        sendbtn.src = 'img/eng-pics/send.png';
        sobremi.textContent = "About Me";
        proyectos.textContent = "Projects";
        contacto.textContent = "Contact";
        emailLabel.textContent = "Email";
        phoneLabel.textContent = "Phone";
        phoneValue.textContent = "+34 695 303 715";
        errorNombre.textContent = "Please enter your name";
        errorEmail.textContent = "Please enter your email";
        errorTelefono.textContent = "Please enter your phone number";
        errorAsunto.textContent = "Please enter your subject";
        errorMs.textContent = "Empty message";
     
    } else {
        ideas.src = 'img/ideas.png';
        more.src = 'img/more.png';
        heading.innerHTML = 'Transformando ideas en código, y código en <span class="diff-color">soluciones</span>';
        third.textContent = "¡Hola! Soy Lorena, te invito a ver mis proyectos.";
        team.src = 'img/team.png';
        knowledge.src = 'img/knowledge.png';
        info.src = 'img/info.png';
        copy.src = 'img/copy.png';
        code.src = 'img/code.png';
        text2.innerHTML = 'Una breve selección de mis <span class="diff-color">proyectos recientes</span>';
        apple.src = 'img/apple.png';
        bookie.src = 'img/web-bookie.png';
        agency.src = 'img/agency.png';
        s2.src = 'img/sentence2.png';
        s1.src = 'img/sentence1.png';
        hablamos.textContent = "¿Hablamos?";
        nombre.placeholder = "Nombre";
        email.placeholder = "Correo electrónico";
        telefono.placeholder = "Teléfono";
        asunto.placeholder = "Asunto";
        mensaje.placeholder = "Mensaje";
        send.src = 'img/send.png';
        sobremi.textContent = "Sobre mí";
        proyectos.textContent = "Proyectos";
        contacto.textContent = "Contacto";
        emailLabel.textContent = "Correo electrónico";
        phoneLabel.textContent = "Teléfono";
        phoneValue.textContent = "695 303 715";
        errorNombre.textContent = "Por favor, introduce tu nombre";
        errorEmail.textContent = "Por favor, introduce tu email";
        errorTelefono.textContent = "Por favor, introduce tu teléfono";
        errorAsunto.textContent = "Por favor, introduce tu asunto";
        errorMs.textContent = "Mensaje vacío";
        
    }
});