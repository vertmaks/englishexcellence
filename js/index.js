const mobMenuOpenBtn = document.querySelector(".js-open-menu");
const mobMenuCloseBtn = document.querySelector(".mobmenu-close-btn");
const menuBg = document.querySelector(".burger-menu-bg");
const menu = document.querySelector(".burger-menu-bg");
const body = document.querySelector(".body");
const mobMenuNav = document.querySelector(".mob-nav-list");
const applicationForm = document.querySelector(".main-form");

// lessons button
const lessonBtns = document.querySelector(".lessons-card-list");

// lessons inputs
const practiceId = document.getElementById("practice");
const standardId = document.getElementById("standard");
const individualId = document.getElementById("individual");

function toogleMenu () {
    menu.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
};

function navClickReaction (event) {
    if (event.target.nodeName === 'A') {
        toogleMenu();
    }
};

function lessonsOptions(event) {
    const practice = event.target.classList.contains("practice");
    const standard = event.target.classList.contains("standard");
    const individual = event.target.classList.contains("individual");

    if (event.target.nodeName === 'A') {

        if (practice) {
            practiceId.checked = true;
            standardId.checked = false;
            individualId.checked = false;
            return;
        }
        
        if (standard) {
            practiceId.checked = false;
            standardId.checked = true;
            individualId.checked = false;
            return;
        }

        if (individual) {
            practiceId.checked = false;
            standardId.checked = false;
            individualId.checked = true;
            return;
        }
    }
};

function formSubmit (event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const phone = form.elements.userPhone.value;
    const comment = form.elements.userComment.value;
    const selectedTeacher = document.querySelector('input[name="teacher"]:checked');
    const teacher = selectedTeacher.value;
    const selectedLesson = document.querySelector('input[name="lessons"]:checked');
    const lesson = selectedLesson.value;
    const userData = { name, email, phone, comment, teacher, lesson };

    if (name.trim() === '' || email.trim() === '') {
        return alert("Please, enter your name and email");
    }

    userData.name = name.trim();
    userData.email = email.trim();
    userData.phone = phone.trim();
    userData.comment = comment.trim();

    console.log(userData);
    form.reset();
};

mobMenuOpenBtn.addEventListener("click", toogleMenu);
mobMenuCloseBtn.addEventListener("click", toogleMenu);
mobMenuNav.addEventListener("click", navClickReaction);

lessonBtns.addEventListener("click", lessonsOptions);

applicationForm.addEventListener("submit", formSubmit);

// Swiper

const splide = new Splide( '.splide', {
  type       : 'loop',
//   speed      : 400,
  heightRatio: 0.9,
  gap: 20,
  drag: true,
  pagination : false,
  arrows     : false,
  autoplay   : true,
  interval   : 5000,
  pauseOnHover: true,
} );
const bar    = splide.root.querySelector( '.my-slider-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();