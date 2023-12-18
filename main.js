let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const email = document.getElementById('email')
const number = document.getElementById('number')
const form = document.getElementById('myform')
const pass = document.getElementById('pass');




form.addEventListener('submit',(e) =>{


    e.preventDefault();
    const myFormData = new FormData(e.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    
    validateinputs();


});

function validateinputs() {
    const user = n1.value.trim()
    const no = number.value.trim()
    const m = email.value.trim()

    if (user === '') {
        alert("Username is not correct")
    }

    if (no === '') {
        alert("Number is not correct")
    }

    if (m === '') {
        alert("Email is not Correct")
    }




}
