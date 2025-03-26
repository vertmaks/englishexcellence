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
    const name = form.elements.userName.value.trim();
    const email = form.elements.userEmail.value.trim();
    const phone = form.elements.userPhone.value.trim();
    const comment = form.elements.userComment.value.trim();
    const selectedTeacher = document.querySelector('input[name="teacher"]:checked');
    const teacher = selectedTeacher? selectedTeacher.value : null;
    const selectedLesson = document.querySelector('input[name="lessons"]:checked');
    const lesson = selectedLesson ? selectedLesson.value : null;

    const isNameValid = nameCheck();
    const isEmailValid = emailCheck();

    if (!isNameValid || !isEmailValid) {
        return;
    }

    const userData = { name, email, phone, comment, teacher, lesson };

    console.log(userData);
    form.reset();
};

const emailInput = document.getElementById("userEmail");
const emailErrorMsg = document.querySelector(".form-email-error-msg");
const emailEmptyError = document.querySelector(".form-email-error-empty");
const nameInput = document.getElementById("userName");
const nameEmptyError = document.querySelector(".form-name-error-empty");

function nameCheck() {
    if (nameInput.value === "") {
        nameInput.style.borderColor = "tomato";
        nameEmptyError.classList.remove("visually-hidden");
        nameEmptyError.classList.add("is-onscreen");
        return false;
    } else {
        nameInput.style.borderColor = "";
        nameEmptyError.classList.remove("is-onscreen");
        nameEmptyError.classList.add("visually-hidden");
        return true;
    }    
}

function emailCheck() {
    if (emailInput.value === "") {
        emailInput.style.borderColor = "tomato";
        emailEmptyError.classList.remove("visually-hidden");
        emailEmptyError.classList.add("is-onscreen");
        emailErrorMsg.classList.remove("is-onscreen");
        return false;
    } else if (!emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailInput.style.borderColor = "tomato";
        emailErrorMsg.classList.remove("visually-hidden");
        emailErrorMsg.classList.add("is-onscreen");
        emailEmptyError.classList.remove("is-onscreen");
        return false;
    } else {
        emailInput.style.borderColor = "";
        emailErrorMsg.classList.remove("is-onscreen");
        emailEmptyError.classList.remove("is-onscreen");
        return true;
    }

}

nameInput.addEventListener("blur", nameCheck);
emailInput.addEventListener("blur", emailCheck);

mobMenuOpenBtn.addEventListener("click", toogleMenu);
mobMenuCloseBtn.addEventListener("click", toogleMenu);
mobMenuNav.addEventListener("click", navClickReaction);

lessonBtns.addEventListener("click", lessonsOptions);

applicationForm.addEventListener("submit", formSubmit);



// Swiper

const splide = new Splide( '.splide', {
  type: 'loop',
  mediaQuery: 'min',
//   heightRatio: 0.9,
    gap: "32px",
  perPage: 1,
  drag: true,
  pagination: false,
  arrows: false,
  autoplay: false,
  interval: 5000,
  pauseOnHover: true,
  perPage: 1,
  breakpoints: {
    768: {
        // heightRatio: 0.9,
        perPage: 2,
        autoplay: false,
    },
    1280: {
        type: 'slide',
        perPage: 3,
    },
  },
} );
const bar    = splide.root.querySelector( '.my-slider-progress-bar' );


// splide.on( 'mounted move', function () {
//   const end  = splide.Components.Controller.getEnd() + 1;
//   const rate = Math.min( ( splide.index + 1 ) / end, 1 );
//   bar.style.width = String( 100 * rate ) + '%';
// } );

splide.mount();