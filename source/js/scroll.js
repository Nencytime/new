document.querySelectorAll('a[href^="#"').forEach = (link) => {

  link.addEventListener('click', function (event) {
    event.preventDefault();

    let href = event.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
};
