let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes [i].style.transform = 'translate ( ${x * boolInt}px , ${y * boolInt}px)'
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible ";
  emailjs
    .sendForm(
      "service_qbidaes",
      "template_qpk1w2q",
      event.target,
      "X1F4DZCFc0lAmKd0e"
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible ";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarly unavailable. Please contact me directly on lemizhsh@gmail.com"
      );
    });
}
function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
    isModalopen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalopen = true;
  document.body.classList += " modal--open";
}
