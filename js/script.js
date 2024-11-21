//Ini JavaScript//

function validateForm() {
    const name = document.forms["contactus-form"]["your-name"].value;
    const emailAddress = document.forms["contactus-form"]["email-address"].value;
    const whatInterested = document.form["contacus-form"]["what-interestedin"].value;

    if (name == "" || emailAddress == "" || whatInterested == "") {
        alert("Tidak boleh ada yang kosong");
    }

    setSenderUI(name, emailAddress, whatInterested);

    return false;
}

function setSenderUI(name, emailAddress, whatInterested) {
    document.getElementByID("sender-your-name").innerHTML = name;
    document.getElementById("sender-email-address").innerHTML = emailAddress;
    document.getElementById("sender-what-interestedin").innerHTML = whatIntersted;
}

// Auto Slide Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Tampilkan slide pertama dan jalankan auto-slide
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik