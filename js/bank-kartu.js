var dropdowns = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// popup
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