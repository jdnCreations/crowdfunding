const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.querySelector('body');
const cover = document.getElementById('cover');
const navModal = document.getElementById('nav-modal');
const navContainer = document.getElementById('nav-container');
const bars = hamburger.querySelectorAll('span');
const bookmarkBtn = document.getElementById('bookmark-btn');
const bookmarkText = bookmarkBtn.querySelector('p');
const bookmarkSvg = bookmarkBtn.querySelector('svg');

const primaryColor = "hsl(176, 50%, 47%)";
const accentColor = "hsl(176, 72%, 28%)";

bookmarkBtn.addEventListener('click', () => {
  if (bookmarkBtn.getAttribute('data-bookmarked') === 'true') {
    console.log('bookmarked already.')
    return;
  }

  bookmarkBtn.setAttribute('data-bookmarked', 'true');

  // change svg circle color
  bookmarkBtn.querySelector('g>circle').setAttribute('fill', accentColor);

  // change svg bookmark color
  bookmarkBtn.querySelector('g>path').setAttribute('fill', '#FFF');

  // change button text color
  // bookmarkBtn.classList.remove('text-text');
  bookmarkBtn.style.color = accentColor;
  
  // change text to 'bookmarked'
  bookmarkText.innerHTML = 'Bookmarked';
})

hamburger.addEventListener('click', () => {
    // overlay page with dark bg
    cover.classList.toggle('hidden');
    navMenu.classList.toggle('-left-[calc(100%+2.5rem)]')

    // navContainer.classList.toggle('fixed');
    for (let i = 0; i < bars.length; i++) {
        if (i === 0) {
            bars[i].classList.toggle('rotate-45');
            bars[i].classList.toggle('translate-y-2');
        }

        if (i === 1) {
            bars[i].classList.toggle('opacity-0');
        }

        if (i === 2) {
            bars[i].classList.toggle('-rotate-45');
            bars[i].classList.toggle('-translate-y-2');
        }
    }
})