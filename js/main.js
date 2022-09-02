// Burger handler

document.addEventListener('click', (event) => {
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('.nav');
  let target = event.target;

  if (target == burger || event.path.includes(burger)) {
    nav.classList.add('active');
  } else if (event.target != nav) {
    nav.classList.remove('active');
  }
})
