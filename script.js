const cards = document.querySelectorAll('.cards')
const input = document.querySelector('.newEvent')
const butEvent = document.querySelector('.butEvent')
const butDelete = document.querySelector('.butDelete')
const container = document.querySelector('.container')
const toggle = document.getElementById('themeSwitch')

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

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(input.value)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    input.value = ''
}

butEvent.addEventListener('click', addCard)

input.addEventListener('keydown', event => {
    if (event.key === 'Enter')
        addCard()
})

butDelete.addEventListener('click', () => {
    const doneCards = document.querySelectorAll('.cards.done')
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    doneCards.forEach(card => {
        if (card.classList.contains('done'))
            card.remove()
        tasks = tasks.filter(task => task !== card.textContent)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
})

function renderTasks() {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (!savedTasks) return

    savedTasks.forEach(task => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('cards')
        newDiv.textContent = task
        input.before(newDiv)
    })
}

renderTasks()

function changeTheme() {
    let theme = localStorage.getItem('theme')
    if (theme === 'dark') {
        document.body.classList.remove('body-dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.body.classList.add('body-dark')
        localStorage.setItem('theme', 'dark')
    }
}

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
    document.body.classList.add('body-dark')
    toggle.checked = true
}

toggle.addEventListener('change', changeTheme)