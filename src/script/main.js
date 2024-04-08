const addContact = document.getElementById("addContact")
const showContacts = document.getElementById("allContacts")
const getTbody = document.querySelector("tbody")
const nameContact = document.getElementById("nameContato")
const numberContact = document.getElementById("numberPhone")

let number = []
let contact = []




function handleContacts(e) {
    e.preventDefault()
    
    //funções principais chamadas
    handleLinhas();
    numberOfContact(contact);
    removeContact();




}

function handleLinhas() {
    //condição de existencia das linhas
    if(contact.includes(nameContact.value) || number.includes(numberContact.value)){
        alert("contato ou numero ja existente")
        nameContact.value = ""
        numberContact.value = ""
        return
    }else {
        contact.push(nameContact.value);
        number.push(numberContact.value);
    }
   
    //linhas sendo adionanandas 
    let linha = `<tr>`;
    linha += `<td id = "selectContact">${nameContact.value}</td>`;
    linha += `<td id ="selectNumber">${numberContact.value}</td>`;
    linha += `<td><button id='removeContact'>remover</button></td>`;
    linha += `</tr>`;

    getTbody.innerHTML += linha;


    nameContact.value = ""
    numberContact.value = ""




}

function numberOfContact(contact) {
    //renderizando numero de contatos na tela
    return showContacts .innerHTML = contact.length
}

function removeContact() {
    const btnRemove = document.querySelectorAll("#removeContact")
    const selectContact = document.querySelectorAll("#selectContact")
    const selectNumber = document.querySelectorAll("#selectNumber")
    const linhaSelect = document.querySelectorAll("tr")


    for (let i = 0; i < btnRemove.length; i++) {
        //loop no botão para escutar o click do usuario
        btnRemove[i].addEventListener("click", () => {

            //excluindo a linha selecionada pelo usuario
            linhaSelect[i + 1].style.display = "none";

            //selecionando linhas desejadas
            const idIndexContact = selectContact[i].innerHTML
            const idIndexNumber = selectNumber[i].innerHTML

            //selecionando index das linha selecionadas
            const indexContact = contact.indexOf(idIndexContact)
            const indexNumber = number.indexOf(idIndexNumber)

            //condição caso o index for achando dentro do array
            if(indexContact > - 1 && indexNumber > -1) {
                //excluindo o contato e numero do array e renderizando o nome numero de contatos 
                contact.splice(indexContact,1);
                number.splice(indexNumber,1);
                numberOfContact(contact);
            }
            
        })
      
    }

}





addContact.addEventListener("submit",handleContacts)