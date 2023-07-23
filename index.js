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
const circle = bookmarkBtn.querySelector('g>circle');
const backProjectBtn = document.getElementById('back-project');
const backProjectModal = document.getElementById('back-modal');
const nav = document.querySelector('nav');
const closeBackProjectBtn = document.getElementById('close-back-modal');

const totalFunded = document.getElementById('total');

const primaryColor = "hsl(176, 50%, 47%)";
const accentColor = "hsl(176, 72%, 28%)";

let backers = 5007;

closeBackProjectBtn.addEventListener('click', () => {
  cover.classList.toggle('md:hidden');
  backProjectModal.classList.toggle('hidden');
  cover.classList.toggle('hidden');
})

// back this project
backProjectBtn.addEventListener('click', () => {
  cover.classList.toggle('md:hidden');
  // overlay page with dark bg
  cover.classList.toggle('hidden');
  nav.classList.toggle('z-[999]');

  // open back this project modal
  backProjectModal.classList.add('flex');
  backProjectModal.classList.toggle('hidden');

})

// bookmark functionality
bookmarkBtn.addEventListener('click', () => {
  if (bookmarkBtn.getAttribute('data-bookmarked') === 'true') {
    bookmarkBtn.setAttribute('data-bookmarked', 'false');
    circle.classList.remove('fill-accent');
    circle.classList.add('fill-[#2f2f2f]')
    bookmarkBtn.querySelector('g>path').setAttribute('fill', '#B1B1B1');
    bookmarkBtn.classList.remove('text-accent');
    bookmarkBtn.classList.add('text-text');
    bookmarkText.innerHTML = "Bookmark";
    return;
  }

  bookmarkBtn.setAttribute('data-bookmarked', 'true');
  // change svg circle color
  circle.classList.remove('fill-[#2f2f2f]');
  circle.classList.add('fill-accent');

  // change svg bookmark color
  bookmarkBtn.querySelector('g>path').setAttribute('fill', '#FFF');
  // change button text color
  bookmarkBtn.classList.add('text-accent');
  // change text to 'bookmarked'
  bookmarkText.innerHTML = 'Bookmarked';
})

// hamburger functionality
hamburger.addEventListener('click', () => {
    // overlay page with dark bg
    nav.classList.add('z-[999]');
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