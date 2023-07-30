// Переменные для измерения длины текста
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let text = ctx.measureText("Hello world");
console.log(text.width)

// Табличные переменные
const table = document.querySelector('#tabletest')
const tbody = table.tBodies[0]
const rows = Array.from(tbody.querySelectorAll('tr'))

let cols = 2


// Проходимся по каждой ячейке
for (let row of rows){
  let inputText = row.querySelector(`td:nth-child(3)`).querySelector('input')
  for (let i = 1; i <= cols; i++){
    const td = row.querySelector(`td:nth-child(${i})`)
    const but = td.querySelector('.tdbut')
    let tdText = td.querySelector('p').innerText
    let textWid = ctx.measureText(tdText).width
    console.log(textWid)
    if (textWid < 80){
      but.classList.add('hid')
    }
    else{
      but.classList.remove('hid')
    }
    // Делаем так, чтобы при нажатии на кнопку происходили определенные события
    but.addEventListener('click', () => {
      // Открываем/закрываем текст
      td.querySelector('p').classList.toggle('closed')
      td.querySelector('p').classList.toggle('open')

      // Перемещаем кнопку
      but.classList.toggle('buttop')
      but.classList.toggle('butbot')
    })
  }
}
