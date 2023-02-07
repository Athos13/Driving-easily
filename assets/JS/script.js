let botaoLogin=document.getElementById("submit")
let body = document.getElementsByTagName("body")[0]
let textoBemVindo = document.querySelector(".titulo p")
let titulo = document.querySelector("h1")
let formulario = document.getElementsByTagName("form")[0]
let id=100

function animaTextos(){
    textoBemVindo.classList.add("animacaoP")
    titulo.classList.add("animacao")
}

botaoLogin.addEventListener("click", function(e){
    let email=document.getElementById("email").value
    let senha=document.getElementById("senha").value

    if(email =="" || senha==""){
        alert("Verifique os campos")
        e.preventDefault()
    }
    else if(!email.includes("@") || senha.length < 5){
        alert("Email deve conter @, e a senha no mínimo 5 digitos")
        e.preventDefault()
    }
    else{
        e.preventDefault()

        let dadosUsuario={
            userId:id,
            title:email,
            body:senha
        }
        id++
        enviaDados(dadosUsuario) 

        formulario.reset()
    }
    
})


async function pegaDados(){
    let dados = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((dados)=>dados.json())
    .then((json)=>console.log(json))
    .catch((err)=>console.log(err))

    return dados
}
pegaDados()



async function enviaDados(dadosUsuario){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(dadosUsuario)
    })
    .then((response)=>response.json())
    .then((json)=>console.log(json))
    .catch((err) => console.log(err))
}
