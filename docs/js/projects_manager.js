"use strict";

var site = []
var aplicativo =[]
var jogo = []
var sistema = []

var current_site
var current_aplicativo
var current_jogo
var current_sistema

function getJsonData() {

    var aux
    var data = []

    // sites
    data = '[ { "titulo": "Site de Pomerode", "tecnologias": "HTML, CSS e JavaScript", "descricao": "Website estático que mostra as atrações, historia e curiosidades sobre a cidade de pomerode. Utiliza bibliotecas externas e animações controladas por CSS e JavaScript. Desenvolvido em 2020 para a disciplina de Desenvolvimento Web I.", "midia": "recources/media/site_pomerode.jpg", "link": "https://all-powerful-outlin.000webhostapp.com/" }, { "titulo": "Titulo do aplicativo", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do jogo", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do sistema", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" } ] '
    aux = JSON.parse(data);

    for (var i in aux)
        site.push(aux[i]);
    //console.log(site[0])
    console.log('sites carregados!')

    // aplicativos
    data = '[ { "titulo": "Aplicativo Melhor Preço", "plataforma": "IOS", "tecnologias": "Swift e UIKit", "descricao": "Aplicativo de gerenciamento de lista de compras e de economia nas compras do dia a dia. A interface do aplicativo é contrida com UIKit e seus elementos funcionais em parte utilizam o CoreData. O aplicativo foi desenvolvido em 2022 durante o curso Novos Negócios em TIC realizado pelo IFCE.", "midia": "recources/media/print_melhor_preco.png", "link": "https://github.com/alvaro-alvin/App-Melhor-Preco" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" } ]'
    aux = JSON.parse(data);

    for (var i in aux)
        aplicativo.push(aux[i]);
    //console.log(aplicativo[0])
    console.log('aplicativos carregados!')

    // jogos
    data = '[ { "titulo": "Futebol de Botões", "plataforma": "Windows, Linux e Web", "tecnologias": "C++ e SDL2", "descricao": "Jogo simples no estilo de futebol de botões escrito do zero em C++ utilizando a biblioteca gráfica SDL2. Possúi um sistema físico e gráfico simples. Foi desenvolvido em 2020 como projeto para a disciplina de Programação Orientada a Objetos I.", "midia": "recources/media/futebol_de_botoes_game.png", "link": "alvaroalvin-dev.ga/futebol_de_botoes/play.html" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" } ]'
    aux = JSON.parse(data);


    for (var i in aux)
        jogo.push(aux[i]);
    //console.log(jogo[0])
    console.log('jogos carregados!')

    // sistemas
    data = '[ { "titulo": "Sistema de arquivos", "plataforma": "Window e Linux", "tecnologias": "C", "descricao": "Um sistema de arquivos escrito em C que da suporte a operações basica com documentos e diretórios. Escrito em C. Desenvolvido em 2022 para a dsiciplina de Sistemas Operacionais", "midia": "recources/media/sistema_de_arquivos.png", "link": "https://gitlab.com/alvaro.alvinn/so-sistema-de-arquivos" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia", "link": "" } ]'
    aux = JSON.parse(data);

    for (var i in aux)
        sistema.push(aux[i])
    //console.log(sistema[0])
    console.log('sistemas carregados!')
}

function load_data(tipo, id){

    const mainDiv = document.querySelector(('#' + tipo));

    const description = mainDiv.querySelector('.description')
    const media = mainDiv.querySelector('.media')
    console.log(mainDiv)
    console.log(description)
    console.log(media)

    var object

    switch(tipo){
        case 'sites':
            object = site[id]
            console.log('sites')
            break;
        case 'aplicativos':
            object = aplicativo[id]
            console.log('aplicativos')
            break;
        case 'jogos':
            object = jogo[id]
            console.log('jogos')
            break;
        case 'sistemas':
            object = sistema[id]
            console.log('sistemas')
            break;
    }
    console.log(object)

    const title_div = description.querySelector('.title_container')
    title_div.querySelector('.titulo').innerHTML = object.titulo
    title_div.querySelector('.clicable').onclick = function(){window.open( object.link , '_blank')}
    description.querySelector('.tecnologias').innerHTML = object.tecnologias
    description.querySelector('.descricao').innerHTML = object.descricao

    media.querySelector('.presentation').src = object.midia
    //console.log(object.midia)
}

function next(tipo){
    switch(tipo){
        case 'sites':
            if(current_site == (site.length -1)){
                current_site = 0
            }
            else{
                current_site++
            }
            load_data(tipo, current_site)
        case 'aplicativos':
            if(current_aplicativo == (aplicativo.length -1)){
                current_aplicativo = 0
            }
            else{
                current_aplicativo++
            }
            load_data(tipo, current_aplicativo)
        case 'jogos':
            if(current_jogo == (jogo.length -1)){
                current_jogo = 0
            }
            else{
                current_jogo++
            }
            load_data(tipo, current_jogo)
        case 'sistemas':
            if(current_sistema == (sistema.length -1)){
                current_sistema = 0
            }
            else{
                current_sistema++
            }
            load_data(tipo, current_sistema)
    }
}

function previous(tipo){
    switch(tipo){
        case 'sites':
            if(current_site == 0){
                current_site = (site.length -1)
            }
            else{
                current_site--
            }
            load_data(tipo, current_site)
        case 'aplicativos':
            if(current_aplicativo == 0){
                current_aplicativo = (aplicativo.length -1)
            }
            else{
                current_aplicativo--
            }
            load_data(tipo, current_aplicativo)
        case 'jogos':
            if(current_jogo == 0){
                current_jogo = (jogo.length -1)
            }
            else{
                current_jogo--
            }
            load_data(tipo, current_jogo)
        case 'sistemas':
            if(current_sistema == 0){
                current_sistema = (sistema.length -1)
            }
            else{
                current_sistema--
            }
            load_data(tipo, current_sistema)
    }
}

// INITIALIZATION
current_site = 0
current_aplicativo = 0 
current_jogo = 0
current_sistema = 0
getJsonData()
load_data('sites', current_site)
load_data('aplicativos', current_aplicativo)
load_data('jogos', current_jogo)
load_data('sistemas', current_sistema)

