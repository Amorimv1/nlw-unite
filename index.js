let participantes = [
    {
        nome: "Gabriel",
        email: "gabriel123@hotmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
        nome: "Diego",
        email: "digomal0202@gmail.com",
        dataInscricao: new Date(2024, 3, 12, 29, 20),
        dataCheckIn: new Date(2024, 3, 24, 21, 1)
    },
    {
        nome: "Maria",
        email: "maria@example.com",
        dataInscricao: new Date(2024, 2, 20, 12, 0),
        dataCheckIn: new Date(2024, 2, 23, 14, 30)
    },
    {
        nome: "João",
        email: "joao@example.com",
        dataInscricao: new Date(2024, 2, 18, 8, 45),
        dataCheckIn: new Date(2024, 2, 21, 9, 15)
    },
    {
        nome: "Carla",
        email: "carla@example.com",
        dataInscricao: new Date(2024, 3, 1, 17, 30),
        dataCheckIn: new Date(2024, 3, 4, 20, 0)
    },
    {
        nome: "Pedro",
        email: "pedro@example.com",
        dataInscricao: new Date(2024, 3, 5, 10, 0),
        dataCheckIn: new Date(2024, 3, 8, 12, 45)
    },
    {
        nome: "Ana",
        email: "ana@example.com",
        dataInscricao: new Date(2024, 2, 15, 14, 15),
        dataCheckIn: new Date(2024, 2, 18, 16, 0)
    },
    {
        nome: "Luiz",
        email: "luiz@example.com",
        dataInscricao: new Date(2024, 2, 28, 21, 0),
        dataCheckIn: new Date(2024, 3, 2, 22, 30)
    },
    {
        nome: "Fernanda",
        email: "fernanda@example.com",
        dataInscricao: new Date(2024, 3, 10, 11, 30),
        dataCheckIn: new Date(2024, 3, 13, 13, 15)
    },
    {
        nome: "Rafael",
        email: "rafael@example.com",
        dataInscricao: new Date(2024, 3, 8, 16, 45),
        dataCheckIn: new Date(2024, 3, 11, 18, 0)
    }
    ];



const criarNovoParticipante =(participante) =>{
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
    if(participante.dataCheckIn == null){
        dataCheckIn = `
        <button
         data-email= "${participante.email}" 
         onclick="fazerCheckIn(event)"
        >
          confirmar check-in
        </button>
        `
 

    }
    
    return `<tr>
            <td><strong>
                ${participante.nome}
            </strong>
            <br>
            <small>
            ${participante.email}

            </small>
                </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>

        </tr>
    `
}


const atualizarlista = (participantes) =>{
    let output = ""
    for(let participante of participantes)
    output = output + criarNovoParticipante(participante)

    document.querySelector('tbody').innerHTML = output

}
atualizarlista(participantes)

const adicionarParticipante = (event) =>{
     event.preventDefault()

     const dadosDoFormulario = new FormData(event.target)

     const participante = {
         nome: dadosDoFormulario.get("nome"),
         email: dadosDoFormulario.get("email"),
         dataInscricao: new Date(),
         dataCheckIn: null
       
     }
     const participanteExiste = participantes.find((p) =>{
         return p.email == participante.email
     }
     )
     if (participanteExiste) {
         alert("email já cadastrado")
     }

     participantes = [participante, ...participantes]
     atualizarlista(participantes)

     event.target.querySelector('[name="nome"]').value = ""
     event.target.querySelector('[name="email"]').value = ""



}
const fazerCheckIn = (event) =>{
    const mensagemDeConfirmacao = "Tem certeza que deseja fazer o check-in?"
    if(confirm(mensagemDeConfirmacao)== false){
        return
    }
    
    const participante = participantes.find((p) => {
        return p.email == event.target.dataset.email
    })
    participante.dataCheckIn = new Date()
    atualizarlista(participantes)
}

