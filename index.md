const participante = {
    nome: "Gabriel",
    email: "gabriel123@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0)
}
let participantes = [
    {
nome: "Gabriel",
email: "gabriel123@hotmail.com",
dataInscricao: new Date(2024, 2, 22, 19, 20),
dataCheckIn: new Date(2024, 2, 25, 22, 0)
    }
] 
   <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>${participante.email}

            </small>
                </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>

        </tr>


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

for(let participante of participantes)
    output = output + criarNovoParticipante(participante)
     
     
     
     
     
     
     <tr>
            <td><strong>
                Diego Fernandes
            </strong>
            <br>
            <small>Diego@gmail.com

            </small>
                </td>
            <td>há 3 dias</td>
            <td>há 3 minutos</td>

        </tr>
        














        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --border: 1px solid #ffffff1a;
}

body,
table,
input,
button {
  font: 300 16px/140% 'Roboto', sans-serif;
}

body {
  background-color: #121214;
  color: #ffffff;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px 32px;
}

header {
  padding: 20px 0;
}

form {
  border: var(--border);
  border-inline: none;
  padding: 20px 0;
}

fieldset {
  border: none;
}

fieldset>div {
  display: flex;
  gap: 12px;
}

.input-wrapper {
  flex: 1;

  display: flex;
  align-items: center;
  gap: 12px;

  border: var(--border);
  border-radius: 10px;

  padding: 8px 12px;

  font: 400 14px/150% 'Roboto', sans-serif;
  color: #C4C4CC;
}

input {
  all: unset;
}

fieldset legend,
section h2 {
  font: 700 16px/140% 'Roboto', sans-serif;
  color: #E1E1E6;
  padding-bottom: 16px;
}

fieldset button {
  width: fit-content;
  border: 0;
  background: #F48F56;
  border-radius: 10px;
  padding: 7px 20px;

  font: 700 12px/24px 'Roboto', sans-serif;
  color: #00292E;
}

fieldset button:hover {
  background: #f37c37;
}

.lista-participantes {
  padding: 20px 0;
}

.lista-participantes > div {
  border: var(--border);
  border-radius: 8px;
}

table {
  border-collapse: collapse;
}

table thead {
  font-size: 14px;
  line-height: 16px;
}

thead th,
tbody td {
  padding: 12px 16px;
}

tbody td {
  border-top: var(--border);
  font-size: 13px;
  line-height: 15px;
  color: #c4c4cc;
}

tbody td strong {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}

tbody td small {
  font-size: 12px;
  line-height: 16px;
}

tbody td button {
  all: unset;
  color: #9FF9CC;
}

tbody td button:hover {
  text-decoration: underline;
}





































*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
 --border: 1px solid #ffffff1a; 
}

body, table, input, button{
    font: 300 16px/140% 'Roboto', sans-serif;
}



body{
  background-color: #121214;
  color: #ffffff
}

.conteiner{
  max-width: 690px;
  margin: 0 auto;
  padding: 20px 32px;

}

header{
  padding: 20px 0 ;
}
form{
  border: var(--border);
  border-inline: none;
  padding: 20px 0;
}
fieldset{
  border: none;
  padding: 0;
}

fieldset > div{
  display: flex;
  gap: 12px;
}

.input-wrapper{
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  border: var(--border);
  border-radius: 10px;
  padding: 8px 12px;
  font: 400 14px/150% 'Roboto', sans-serif;
  color: #C4C4cc;
}
input{
  all: unset;
}
fieldset legend, section h2{
  font: 700 16px/140% 'Robot', sans-serif;
  color: #E1E1E6;
  padding-bottom: 16px;

}

fieldset button{
  width: fit-content;
  border: 0;
  background: #f48f56 ;
  border-radius: 10px;
  padding: 7px 20px;

  font: 700 12x/24px 'Roboto', sans-serif;
   color: #00292E;
}
fieldset button:hover {
    background: #f36a1b ;

}
.lista-participantes{
  padding: 20px 0;
}
.lista-participantes > div{
  border: var(--border);
  border-radius: 8px;
}
table{
  border-collapse: collapse;
}

table thead {
  font-size: 14px;
  line-height: 16px;
}
thead th, tbody td{
  padding: 12px 16px;
}
tbody td{
  border-top: var(--border);
  font-size: 13px;
  line-height: 15px;
  color: #c4c4cc;
}

tbody td strong{
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600 ;
}
tbody td small{
  font-size: 12px;
  line-height: 16px;
}
tbody td button {
  all: unset;
  color: #9ff9cc;
}
tbody td button:hover{
  text-decoration: underline;
}
