const imgWidth = 300;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector('.prev');
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slide img");
const dots = document.querySelectorAll('.dot');
const slideCount = images.length;
let slideIndex = 0;

const checkBtn = () => {
    prevBtn.disabled = slideIndex === 0;
    nextBtn.disabled = slideIndex >= slideCount - 1;
}

const slideRight = () => {
    slideIndex = slideIndex < slideCount ? slideIndex + 1 : slideCount;
    slider.style.transform = `translateX(${-slideIndex * imgWidth}px)`;
    document.querySelector('.dots .active').classList.remove('active');
    dots[slideIndex].classList.add('active');
    checkBtn();
}

const slideLeft = () => {
    slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
    slider.style.transform = `translateX(${-slideIndex * imgWidth}px)`;
    document.querySelector('.dots .active').classList.remove('active');
    dots[slideIndex].classList.add('active');
    checkBtn();
}

const navDots = (dot, index) => {
    slideIndex = index;
    document.querySelector('.dots .active').classList.remove('active');
    dot.classList.add('active');
    slider.style.transform = `translateX(${-imgWidth * index}px)`;
    checkBtn();
}

nextBtn.addEventListener("click", slideRight);
prevBtn.addEventListener('click', slideLeft);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        navDots(dot, index);
    })
});

checkBtn();
