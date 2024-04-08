const numberPhone = document.getElementById("numberPhone")
const nameContato = document.getElementById("nameContato")



function handleNumbers(e) {
    let allInputs = e.target.value;

    //garantindo que todos os caracteres digitados sejam numeros
    numberPhone.value = allInputs.replace(/\D/g, '')
}
function handleNumbers2(e) {
    //trabalhando com o input e direcionando para uma função
    let input = e.target
    input.value = phoneMAsk(input.value)
}

function phoneMAsk(value) {
    //condição de existencia caso o valor seja undefined
    if(!value) return ""
    //reescrevendo o valor com em formato de telefone
    value = value.replace(/\D/g,'').replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

    
    
   
    


function handleCaracteres(e) {
    let nome = e.target.value;

    //separação das strings digitadas
   const getFullname = nome.split(" ")

    //condição de existencia da sting
   if(getFullname.length > 1 && getFullname[1].length !== 0){
    //teste para identificar caracteres aceitos
    if (!/^[a-zA-ZÀ-ÿ\s\-']+$/.test(nome)) {
        e.target.value = nome.replace(/[^a-zA-ZÀ-ÿ\s\-']/g, '');
      }
   }else {
    //opção caso a condição nao seja valida
        alert("Digite o nome completo")
        e.target.value = ""
   }


}

  

    

numberPhone.addEventListener("focusin", handleNumbers)
numberPhone.addEventListener("focusout", handleNumbers2)
nameContato.addEventListener("focusout", handleCaracteres)

