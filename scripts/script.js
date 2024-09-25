const container = document.querySelector('.container')
const buttons = container.querySelectorAll('.rating-button')
const submitButton = container.querySelector('.submit-button')
const ratingCard = document.getElementById('rating-card')
const thankYouCard = document.getElementById('thank-you-card')
const thankYouMessage = document.getElementById('you-selected-text')

var rating;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // remove selected class from other buttons
        buttons.forEach(btn => btn.classList.remove('rating-button-selected'))

        rating = button.dataset.rating
        button.classList.add('rating-button-selected')

        submitButton.disabled = false;
    })
})

submitButton.addEventListener("click", () => {
    ratingCard.classList.add('hidden-card')
    thankYouCard.classList.remove('hidden-card')

    thankYouMessage.textContent = `You selected ${rating} out of 5`
})