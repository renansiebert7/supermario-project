/* VARIAVEIS 
um espaço de memoria que voce reserva e pode guardar o que quiser la dentro

    3 jeitos de criar uma variavel
        VAR / JEITO ANTIGO { nao use mais }
        LET { consegue alterar depois}
        CONST { é uma constante, nao altera o valor}

    EX:
    const numero1 = 100
    const numero2 = 300
    const numeroTotal = numero1 + numero2

    para ver na tela: 
    console.log (numeroTotal)
*/

/*  FUNÇÕES
    um trecho de codigo que so é executado quando é chamado

        TAG: function

        EX:
        const abacate = 'oi sou o abacate'
        const pera = 'oi sou a pera'
        const numero1 = 100
        const numero2 = 200

        function soma(){
            const somatoria = numero1 + numero2   ----> FUNÇÃO
            console.log(somatoria)
        }

        console.log (pera)

        soma()  ------> EXECUTA A FUNÇÃO (pode executar quantas vezes quiser)

*/

const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao(){
    form.style.left = "50%" 
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharFormulario() {
    form.style.left = "-350px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden";    
}
