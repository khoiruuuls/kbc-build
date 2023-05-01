let li = document.querySelectorAll(".faq-text li")
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", e => {
		console.log(li)
		let clickedLi
		if (e.target.classList.contains("question-arrow")) {
			clickedLi = e.target.parentElement
		} else {
			clickedLi = e.target.parentElement.parentElement
		}
		clickedLi.classList.toggle("showAnswer")
	})
}

/* ----------------- pagination section ----------------- */

const startBtn = document.querySelector("#pagination #startBtn"),
	endBtn = document.querySelector("#pagination #endBtn"),
	prevNext = document.querySelectorAll("#pagination .prevNext"),
	numbers = document.querySelectorAll("#pagination .link")

// setting initial step

let currentStep = 0

// Function to update the button state
const updateBtn = () => {
	// If we are at the last step
	if (currentStep === 4) {
		endBtn.disabled = true
		prevNext[1].disabled = true
	} else if (currentStep === 0) {
		startBtn.disabled = true
		prevNext[0].disabled = true
	} else {
		startBtn.disabled = false
		endBtn.disabled = false
		prevNext[0].disabled = false
		prevNext[1].disabled = false
	}
}

// Add event listener to the number links

numbers.forEach((number, numIndex) => {
	number.addEventListener("click", e => {
		e.preventDefault()
		// set the current step to the clicked number link
		currentStep = numIndex
		// remove the " active " class from the praviously active number
		document.querySelector(".active").classList.remove("active")
		// add the " active " class to the clicked number link
		number.classList.add("active")
		updateBtn() // Update the button state
	})
})

// Add event listeners to the previous and next button

prevNext.forEach(button => {
	button.addEventListener("click", e => {
		// Increament and decreament the current step based on the clicked button
		currentStep += e.target.id === "next" ? 1 : -1
		numbers.forEach((number, numIndex) => {
			// Toggle the " active " class of on the number links based on the
			number.classList.toggle("active", numIndex === currentStep)
			updateBtn() // Update the button state
		})
	})
})

startBtn.addEventListener("click", () => {
	// Remove the "active" class from the previously active number line
	document.querySelector(".active").classList.remove("active")
	// Add the "active" class to the first number link
	numbers[0].classList.add("active")
	currentStep = 0
	updateBtn() // Update the button state
	endBtn.disabled = false
	prevNext[1].disabled = false
})

endBtn.addEventListener("click", () => {
	// Remove the "active" class from the previously active number line
	document.querySelector(".active").classList.remove("active")
	// Add the "active" class to the last number link
	numbers[4].classList.add("active")
	currentStep = 4
	updateBtn() // Update the button state
	startBtn.disabled = false
	prevNext[0].disabled = false
})

// swiper js

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})
