function send(){
    const valueEmail = document.querySelector(".email");

    if(!valueEmail.value || valueEmail == "@"){
        alert("Error! digite um valor para receber as notícias. ")
    }else{
        alert("Parabéns🎉,você se mantera atualizado sobre o mundo da tecnologia")
        valueEmail.value="";
    }
}