// Set the date we're counting down to
var countDownDate = new Date("May 31, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate the days, hours, minutes and seconds remaining
    var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the elements with corresponding IDs
    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Ambil elemen button dan popup
var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

// Ambil elemen tombol close
var span = document.getElementsByClassName("close")[0];

// Ketika user mengklik tombol, tampilkan popup
btn.onclick = function () {
    modal.style.display = "block";
}

// Ketika user mengklik tombol close (x), sembunyikan popup
span.onclick = function () {
    modal.style.display = "none";
}

// Ketika user mengklik di luar popup, sembunyikan popup
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
