const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 50);
});

var typingEffect = new Typed(".multiText", {
  strings: ["programador", "designer", "autodidata", "leitor", "atleta"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
});

let menu = document.querySelector("#menu-icon"),
  navitems = document.querySelector(".navItems"),
  navicons = document.querySelector(".icons");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navitems.classList.toggle("open");
  navicons.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navitems.classList.remove("open");
  navicons.classList.remove("open");
};
document.getElementById("baixarcurriculo").addEventListener("click", () => {
  alert("Currículo não adicionado");
});

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value,
    message = document.getElementById("message").value,
    phone = document.getElementById("phone").value,
    body =
      "Email: " +
      email +
      "<br/> Mensagem:" +
      message +
      "<br/> Número: " +
      phone;
  Email.send({
    SecureToken: "756c46a8-e62c-4f09-9fb3-40f17e3daaab",
    To: "guilhermeg2004@gmail.com",
    From: "guilhermeg2004@gmail.com",
    Subject: "Mensagem sobre Contato",
    Body: body,
  }).then();
  alert("Mensagem Enviada com Sucesso");
  document.getElementById("form").reset();
});
