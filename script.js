// Табличные переменные
const table = document.querySelector('#tabletest')
const tbody = table.tBodies[0]
const rows = Array.from(tbody.querySelectorAll('tr'))
let cols = 2
let firstColCount = 0

function getValue(n){
  const ths = table.querySelectorAll('th')
  const inputText = rows[n-1].querySelector('input').value
  let measureDiv = rows[n-1].querySelector('.measure')
  for (let i = 1; i <= cols; i++){
    let tdsText = rows[n-1].querySelector(`td:nth-child(${i})`).querySelector('p')
    tdsText.innerText = inputText
  }
  measureDiv.innerText = inputText;
  const buts = rows[n-1].querySelectorAll('.tdbut')
    for (let i = 1; i <= cols; i++){
      if (i === 1){
        if (measureDiv.clientWidth <= 200){
          let but = buts[i-1]
          but.classList.add('hid')
          but.classList.remove('nothid')
        }
        else{
          let but = buts[i-1]
          but.classList.remove('hid')
          but.classList.add('nothid')
        }
      }
      if (i === 2){
        if (measureDiv.clientWidth <= 130){
          let but = buts[i-1]
          but.classList.add('hid')
          but.classList.remove('nothid')
        }
        else{
          let but = buts[i-1]
          but.classList.remove('hid')
          but.classList.add('nothid')
        }
      }
    }
    for (let row of rows){
      if (row.querySelector(`td:nth-child(1)`).querySelector('.tdbut').classList.contains('nothid')){
        firstColCount = 1
        break
      }
      else{
        firstColCount = 0
      }
    }
    for (let row of rows){
      if (row.querySelector(`td:nth-child(2)`).querySelector('.tdbut').classList.contains('nothid')){
        secondColCount = 1
        break
      }
      else{
        secondColCount = 0
      }
    }
    if (firstColCount > 0){
      ths[0].querySelector('.tdbut').classList.remove('hid')
    }
    else{
      ths[0].querySelector('.tdbut').classList.add('hid')
    }
    if (secondColCount > 0){
      ths[1].querySelector('.tdbut').classList.remove('hid')
    }
    else{
      ths[1].querySelector('.tdbut').classList.add('hid')
    }
  
  // if (measureDiv.clientWidth <= 130){
  //   for (let but of buts){
  //     but.classList.add('hid')
  //   }
  // }
  // else{
  //   for (let but of buts){
  //     but.classList.remove('hid')
  //   }
  // }
}


// Проходимся по каждой ячейке
for (let row of rows){
  for (let i = 1; i <= cols; i++){
    const td = row.querySelector(`td:nth-child(${i})`)
    const but = td.querySelector('.tdbut')
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
