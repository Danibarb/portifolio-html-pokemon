/*
O que precisamos fazer? - quando clicarmos no botão de troca de tema, temos que alterar a cor do tema da pagina para as cores do tema claro ou escuro.

- objetivo 1 - quado clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para LUA.
- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
-  passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body.
- passo 3 - dar um jeito de identificar o clique do usuario no botão de troca de tema.
- passo 4 - adicionar a classe modo-escuro do body
- passo 5 - trocar a imagem do botão de alterar tema para LUA.

- objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem para SOL.
- passo 6 - verificar se o body já tem o modo escuro
-passo 7 - remover a classe do modo-escuro do body
- passo 8 - trocar a imagem do botão de alterar tema para o SOL.
*/

//passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body.
const body = document.querySelector("body");

//variavel para recever a nova imagem de troca de tema
const botaoLua =document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuario no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {
     //passo 6 - verificar se o body já tem o modo escuro
     const modoEscuroAtivado = body.classList.contains("modo-escuro");
    
     //com toggle não precisa usar os metodos ADD e Remove no IF
     body.classList.toggle("modo-escuro");

     if(modoEscuroAtivado){
        //passo 7 - remover a classe do modo-escuro do body
        // body.classList.remove("modo-escuro");
        botaoLua.setAttribute("src","./imgs/sol.png");
     } else {
        // body.classList.add("modo-escuro");

        //passo 5 - trocar a imagem do botão de alterar tema para LUA.
        botaoLua.setAttribute("src","./imgs/lua.png");   
     }
});

