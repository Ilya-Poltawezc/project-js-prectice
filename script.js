const input = document.querySelector('[data-js-prev-input]')
const select = document.querySelector('[data-js-prev-select]')
const button = document.querySelector('[data-js-prev-button]')
const result = document.querySelector('[data-js-prev-result]')
const tof = document.querySelector('[data-js-tof]')
const toc = document.querySelector('[data-js-toc]')

button.addEventListener('click', function () {
    const value = parseFloat(input.value)
    const type = select.value

    if (isNaN(value)) {
        result.textContent = "Введите пожалуйста значение"
        return
    }

    let converted

    if (type === "tof") {
        converted = value * 1.8 +32
        result.textContent = `Результат: ${converted.toFixed(2)} F`
    } else {
        converted = (value - 32) / 1.8
        result.textContent = `Результат: ${converted.toFixed(2)} C`
    }
})


class Vectory {
  rootSelectors = {
    container: '[data-js-container]',
    button: '[data-js-button]'
  }

  constructor() {
    this.rootElement = document.querySelector(this.rootSelectors.container)
    this.buttonElement = this.rootElement.querySelector(this.rootSelectors.button)

    this.questions = [
      {
        question: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
        correctIndex: 1
      },
      {
        question: 'Какой цвет получится при смешивании синего и жёлтого?',
        options: ['Зелёный', 'Оранжевый', 'Фиолетовый'],
        correctIndex: 0
      },
      {
        question: 'Что означает HTML?',
        options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        correctIndex: 0
      }
    ]

    this.currentIndex = 0

    this.bindEvents()
  }

  bindEvents() {
    this.buttonElement.addEventListener('click', this.onButtonClick)
  }

  onButtonClick = () => {
    this.showQuestion()
  }

  showQuestion() {
    const current = this.questions[this.currentIndex]
    const optionsHtml = current.options
      .map((opt, index) => `<button data-index="${index}">${opt}</button>`)
      .join('')

    this.rootElement.innerHTML = `
      <h2>${current.question}</h2>
      <div>${optionsHtml}</div>
    `

    this.rootElement.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', this.handleAnswer)
    )
  }

  handleAnswer = (e) => {
    const selected = Number(e.target.dataset.index)
    const correct = this.questions[this.currentIndex].correctIndex

    if (selected === correct) {
      alert('✅ Правильно!')
    } else {
      alert('❌ Неправильно!')
    }

    this.currentIndex++

    if (this.currentIndex < this.questions.length) {
      this.showQuestion()
    } else {
      this.rootElement.innerHTML = `<h2>🎉 Викторина завершена!</h2>`
    }
  }
}

new Vectory()