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