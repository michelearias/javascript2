//Elementos
var vbtIniciar
var vbola
var vcpu
var vjogador
var vPaineltxtpontos // variavel para o painel

//Controle de Animação
var game,frames

// Posições dos elementos
var posBolaX, posBolaY // controlar a posição x e y da bola 
var posJogadorX, posJogadorY
var posCpuX, posCpuY

// Direções de acordo com a tecla utilizada
var dirJy // direção Y do jogador

// Posições Iniciais
var posJogIniY=180 // posição Y inicial do jogador
var posCpuIniY=180 // posição Y inicial do cpu 
var posBolaIniX=475 // posição X inicial da bola
var posBolaIniY=240 // posição Y inicial da bola

// Tamanhos

var campoX=0 // posição X do campo
var campoY=0 // posição Y do campo 
var campoW=960 // largura do campo
var campoH=500 // altura do campo
var barraW=20 // largura da barra
var barraH=140 // altura da barra
var bolaW=20 // largura da bola
var bolaH=20 // altura da bola

// Direção do jogador e da bola

var bolaX, bolaY
var cpuY=0

// Velocidades

var velBola, velCpu, velJogador

// Controle

var pontos=0
var tecla // armazenar a tecla pressionada
jogo=false // o jogo está parado

function iniciaJogo(){ //função para iniciar o jogo

}

function inicializa(){ // inicializar as variaveis

    dirJy=0
    posBolaX=posBolaIniX 
    posBolaY  
    var posJogadorX, posJogadorY
    var posCpuX, posCpuY


    vbtIniciar=document.getElementById('btIniciar') // associar o elemento do botão a essa variavel
    vbtIniciar.addEventListener('click', iniciaJogo) // adicionar o evento  de click do botão, que vai chamar a função inicia jogo
    vjogador=document.getElementById('dvJogador')
    vcpu=document.getElementById('dvCpu')
    vbola=document.getElementById('dvBola')
    vPaineltxtpontos=document.getElementById('txtPontos')

}

window.addEventListener('load', inicializa)