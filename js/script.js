// Fungsi Validate Form 
function validateForm() {
    const userName = document.getElementById("user-name").value;
    const emailAddress = document.getElementById("email").value;
    const destinationOption = document.getElementById("destination").value;
    console.log(userName, emailAddress, destinationOption);
    if (userName == "" || emailAddress == "" || destinationOption == "") {
        alert('"Please Fill Out Your Form."');
    } else {
        alert('"Successfully Submitted Your Form."');
    }
}

// Auto Slide Banner
let indexSlide = 1;
const listImages = document.getElementsByClassName("banner-autoslide");

nextSlide();

//Fungsi Mengganti Gambar
function nextSlide() {
    showSlide(indexSlide += 1);
}

//Fungsi Mengihlangkan Gambar
function hideAllSlide() {
    for (let i = 0; i < listImages.length; i++) {
        listImages[i].style.display = "none";
    }
}

//Fungsi Menampilkan Gambar
function showSlide(index) {
    //Merestart Gambar
    if (index > listImages.length) indexSlide = 1;
    hideAllSlide();
    listImages[indexSlide - 1].style.display = "block";
}

//Menjalankan Auto Slide Banner
setInterval(()=> nextSlide(), 3000); //Mengganti Slide Setiap 3 detik