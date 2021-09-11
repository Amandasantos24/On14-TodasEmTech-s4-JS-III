function calcularMedia(n1, n2, n3){
    n1 = parseFloat(prompt("Digite o valor da primeira nota: "));
    n2 = parseFloat(prompt("Digite o valor da segunda nota: "));
    n3 = parseFloat(prompt("Digite o valor da terceira nota: "));
    if(n1 === "" || n2 === "" || n3 === ""){
        alert("Digite um valor válido")
        return calcularMedia()
    } else{
        var resultado = ((n1+n2+n3)/3).toFixed(1)
        alert(resultado)
    }
    if(resultado >= 7){
        alert("O aluno foi aprovado!!")
    }else if((resultado >=4) || (resultado <= 6.9)){ 
        alert("O aluno está em recuperação..")
    }else{
        alert("O aluno está reprovado")
    }
}

calcularMedia()



