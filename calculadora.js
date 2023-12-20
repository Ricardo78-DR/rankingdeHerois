console.log("Digite a quantidade de vitórias e derrotas");
let vitoria = prompt("Digite o numero de vitórias:");
let derrota = prompt("Digite o numero de derrotas:");
let result = vitoria - derrota
let vGanhas = vitoria - derrota



function ranke() {
    if(result <= 10)
      console.log( "O herói tem salde " + vGanhas +" e está no nivel de Ferro")
    else
      if(result >= 11 && result <= 20)
        console.log( "O herói tem salde " + vGanhas +" e está no nivel de Bronze")
    else
      if(result >= 21 && result <= 50)
        console.log( "O herói tem salde " + vGanhas +" e está no nivel de Prata")
    else
      if(result >= 51 && result <= 80)
        console.log( "O herói tem salde " + vGanhas +" e está no nivel de Ouro")
    else
      if(result >= 81 && result > 100)
        console.log( "O herói tem salde " + vGanhas +" e está no nivel de Lendário")
       
    return 
}
ranke()