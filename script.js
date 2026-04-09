const cards = document.querySelectorAll('.cards')
const input = document.querySelector('.newEvent')
const butEvent = document.querySelector('.butEvent')
const butDelete = document.querySelector('.butDelete')
const container = document.querySelector('.container')

container.addEventListener('click', event => {
    if (event.target.classList.contains('cards'))
        event.target.classList.toggle('done')
})

function addCard() {
    if (!input.value) return
    const newDiv = document.createElement('div')
    newDiv.classList.add('cards')
    newDiv.textContent = input.value
    input.before(newDiv)
    input.value = ''
}

butEvent.addEventListener('click', addCard)

input.addEventListener('keydown', event => {
    if (event.key === 'Enter')
        addCard()
})

butDelete.addEventListener('click', () => {
    const doneCards = document.querySelectorAll('.cards.done')
    doneCards.forEach(card => {
        if (card.classList.contains('done'))
            card.remove()
    })
})