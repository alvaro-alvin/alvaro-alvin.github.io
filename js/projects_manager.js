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
    data = '[ { "titulo": "Titulo do site", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "recources/media/site_pomerode.jpg" }, { "titulo": "Titulo do aplicativo", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do jogo", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do sistema", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" } ] '
    aux = JSON.parse(data);

    for (var i in aux)
        site.push(aux[i]);
    //console.log(site[0])
    console.log('sites carregados!')

    // aplicativos
    data = '[ { "titulo": "Titulo do site", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "recources/media/print_melhor_preco.png" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" } ]'
    aux = JSON.parse(data);

    for (var i in aux)
        aplicativo.push(aux[i]);
    console.log('aplicativos carregados!')

    // jogos
    data = '[ { "titulo": "Titulo do site", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "recources/media/futebol_de_botoes_game.png" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" } ]'
    aux = JSON.parse(data);


    for (var i in aux)
        jogo.push(aux[i]);

    console.log('jogos carregados!')

    // sistemas
    data = '[ { "titulo": "Titulo do site", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "recources/media/sistema_de_arquivos.png" }, { "titulo": "Titulo do aplicativo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do jogo", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" }, { "titulo": "Titulo do sistema", "plataforma": "Android ou IOS", "tecnologias": "listagem das tecnologias utilizadas", "descricao": "bla bla bla bla bla", "midia": "link para a midia" } ]'
    aux = JSON.parse(data);

    for (var i in aux)
        sistema.push(aux[i]);
    console.log('sistemas carregados!')
}

function load_data(tipo, id){

    const mainDiv = document.querySelector(('#' + tipo));

    const description = mainDiv.children[0]
    const media = mainDiv.children[1]

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

    description.querySelector('.titulo').innerHTML = object.titulo
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

