const main = document.createElement('div')
const inputAndButton = document.createElement('form')
const toDoList = document.createElement('div')
const list = document.createElement('ul')
const input = document.createElement('input')
const button = document.createElement('button')


inputAndButton.prepend(input,button)
main.prepend(inputAndButton)
main.append(toDoList)
toDoList.prepend(list)

button.textContent = 'Добавить'
main.style.width = '450px'
main.style.height = '500px'
main.style.margin = 'auto'

input.style.width = '70%'
input.style.height = '30px'
input.style.borderRadius = ''
input.style.border = 'none'
input.style.borderBottom = 'solid 1px #5E15E5'

button.style.width = '20%'
button.style.height = '33px'
button.style.marginLeft = '5px'
button.style.borderRadius = '7px'
button.style.border = 'solid 1px #5E15E5'

main.style.backgroundColor = 'white'
main.style.borderRadius = '10px'
inputAndButton.style.display = 'flex'
inputAndButton.style.justifyContent = 'center'
inputAndButton.style.padding = '30px 7px'
toDoList.style.height = '370px'
toDoList.style.borderLeft = 'solid 1px #5E15E5'
toDoList.style.borderRight = 'solid 1px #5E15E5'
toDoList.style.borderBottom = 'solid 1px #5E15E5'
toDoList.style.borderRadius = '0 0 7px 7px'
toDoList.style.width = '400px'
toDoList.style.margin = 'auto'

button.addEventListener('click',(e)=>{
    e.preventDefault()
    const cases = document.createElement('li')
    cases.textContent = input.value

    const button1 = document.createElement('button')
    button1.textContent = 'x'
    button1.addEventListener('click',(e)=> {
        e.target.parentElement.remove()
    })

    const chek = document.createElement('input')
    chek.type = 'checkbox'
    chek.style.width = '20px'
    chek.addEventListener('change',(e)=>{
        console.log(chek.checked)
        if(chek.checked){
            cases.style.color = 'red'
        }
        else{
            cases.style.color = 'black'
        }
    })


    cases.append(chek,button1)
    list.append(cases)
    input.value = ''
})


document.body.prepend(main)


