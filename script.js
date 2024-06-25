const buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', (event) => {
    let name = prompt("Insira seu nome")

    let message = document.getElementById('message')

    if (name) {
        let nameConfirmed = confirm(`Olá ${name}! Você deseja continuar?`)

        if (nameConfirmed) {
            message.textContent = 'Você escolheu continuar!'
            message.classList.remove('alert')
            alert('Você escolheu continuar!')
        } else {
            message.textContent = 'Você escolheu encerrar!'
            message.classList.remove('alert')
            alert('Você escolheu encerrar!')
        }
    } else {
        message.textContent = 'Erro: Você deve inserir um nome.'
        message.classList.add('alert')
        alert('Erro: Você deve inserir um nome.')
    }   
})

