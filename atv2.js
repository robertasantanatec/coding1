let decisao = prompt('----Central de atendimento----\nEscolha: 1, Clinico geral. 2, Otorrino. 3 Gastro')
  if (decisao == 1){
  let escolhaClinico = prompt('----Clinico Geral----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaClinico == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
   else if(escolhaClinico == 2){
   window.alert('Você sera encaminhado para o medico')
  }
}
else if(decisao == 2){
  let escolhaOtorrino = prompt('----Otorrino----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaOtorrino == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
   else if(escolhaOtorrino == 2){
   alert('Você sera encaminhado para o medico')
  }
}

else if(decisao == 3){
  let escolhaGastro = prompt('----Gastro----\n 1, Agendar consulta. 2, Falar com medico. 3, Sair.')
  if (escolhaGastro == 1){
    let nome = prompt('Digite o seu nome para agendamento')
    let telefone = prompt('Digite o seu telefone para contado')
    window.alert(`Nome:${nome}\nTelefone ${telefone}\nVocê Confima?`)
  }
  else if(escolhaGastro == 2){
   window.alert(`Você sera encaminhado para o medico`)
  }
}
// --------------------------------
let hora_Onibus = prompt('Qual ônibus você quer saber o horário? 1.Macaxeira 2.PE-15 3.Afogados')
if (hora_Onibus === '1') {
  window.alert('O ônibus Macaxeira irá passar as 12:10h')
}
else if (hora_Onibus === '2') {
  window.alert('O onibûs PE-15 irá passar as 16:55h')
}
  else if (hora_Onibus === '3') {
    window.alert('O ônibus Afogados irá passar as 10:15h')
  }
else {
  window.alert('valor inválido')
}
