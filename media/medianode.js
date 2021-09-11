function calcularMedia(n1, n2, n3){
    var media = ((n1 + n2 + n3)/3).toFixed(1)
    console.log("A média do aluno é: ", media)
    if(media >= 7){
        console.log("O aluno foi aprovado!! Uhu")
    }else if((media >=4) || (media <= 6.9)){
        console.log("O aluno está em recuperação..")
    }else{
        console.log("O aluno foi reprovado, poxa!")
    }
}

calcularMedia(7,5,5)

