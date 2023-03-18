function tabuada(){
  var numero        = window.document.getElementById('numero')   // imput "Qual tabuada ..."
  var endPoint      = window.document.getElementById('endPoint') // imput "Até que numero ,,"
  
  if(numero.value.length == 0 || endPoint.value.length == 0){
    window.alert('[Erro] Confira os dados!')
  }else{ 
      var numberValue   = Number(numero.value)      //transformando a string em Numero
      var endPointValue = Number(endPoint.value)    //transformando a string em Numero
      var inicializacao = 0
      var numero_x_endPoint = ''
      var resposta = window.document.getElementById('resposta')  // pegando a div "Preencha os .."
      resposta.innerHTML = `A tabuada do ${numberValue} é:<br><br>`

      do{
        numero_x_endPoint = numberValue * inicializacao
        resposta.innerHTML += `${inicializacao} X ${numberValue} = ${numero_x_endPoint} <br>`
        inicializacao = inicializacao + 1    // ou inicializacao++

      }while(inicializacao <= endPointValue)
  }

}
