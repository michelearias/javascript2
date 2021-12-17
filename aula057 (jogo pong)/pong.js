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
var posJogadorX = 0, posJogadorY
var posCpuX = 960, posCpuY

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
var colidiu = false

// Velocidades
var velBola, velCpu, velJogador

// Controle

var pontos=0
var tecla // armazenar a tecla pressionada
jogo=false // o jogo está parado

function controlajog(){
    if(jogo){
        posJogadorY+=velJogador*dirJy
        if((posJogadorY+barraH>=campoH)||((posJogadorY)<=0)){//limitar a movimentação do jogador
            posJogadorY+=(velJogador*dirJy)*(-1)
        }
        vjogador.style.top=posJogadorY+'px'
    }
}

function controlaBola(){
    //Movimentação Bola
    posBolaX+=velBola*bolaX //preciso incrementar varias vezes
    posBolaY+=velBola*bolaY
    console.log("PosX: ", posBolaX, ", PosY: ", posBolaY)
    console.log("CPU PosX: ", posCpuX, ", CPU PosY: ", posCpuY)
    //Colisão com jogador
    console.log("A já colidiu? ", colidiu)

    if (posBolaX <= posJogadorX+barraW &&
        posBolaY >= posJogadorY && 
        posBolaY <= posJogadorY+barraH){

        colidiu = true
        console.log("Colidiu com o jogador")
        //bolaY=posBolaY+bolaH/2-(posJogadorY+barraH/2)/16
        bolaX*=-1
        bolaY*=1 //Precisa corrigir esse calculo para a boa subir ou descer quando houver colisão
    }
    //Colisão com CPU
    else if (posBolaX + bolaW >= posCpuX-barraW &&
        posBolaY >= posCpuY && 
        posBolaY <= posCpuY+barraH){

        colidiu = true
        console.log("Colidiu com a CPU")
        //bolaY=posBolaY+bolaH/2-(posCpuY+(barraH/2)/16)
        bolaX*=-1
        bolaY*=1 //Precisa corrigir esse calculo para a boa subir ou descer quando houver colisão
    } else {
        console.log("Não colidiu")
    }

    vbola.style.top=posBolaY+'px' // criar movimento para a bola
    vbola.style.left=posBolaX+'px'
}

function teclaDw(){
    tecla=event.keyCode
    if(tecla==38){//CIMA
        dirJy=-1
    }else if(tecla==40){//BAIXO
        dirJy=+1
    }
}

function teclaUp(){
    tecla=event.keyCode
    if(tecla==38){//CIMA
        dirJy=0
    }else if(tecla==40){//BAIXO
        dirJy=0
    }
}

function game(){//controlar o game
    if(jogo){
        controlajog()
        controlaBola()
    }
    frames=requestAnimationFrame(game)

}

function iniciaJogo(){ //função para iniciar o jogo
    if (!jogo){
        cancelAnimationFrame(frames) // primeiro tenho que cancelar 
        jogo=true
        dirJy=0
        bolaY=0
        if((Math.random()*10)<5){
            bolaX=-1 // desloca para a esquerda
        }else{
            bolaX=1 // desloca para a direita
        }
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY // variavel calculada
        posCpuY=posCpuIniY
        game() // iniciar a chamada do nosso controle de animação

    }
    

}

function inicializa(){ // inicializar as variaveis
    velBola=velCpu=velJogador=2

    vbtIniciar=document.getElementById('btIniciar') // associar o elemento do botão a essa variavel
    vbtIniciar.addEventListener('click', iniciaJogo) // adicionar o evento  de click do botão, que vai chamar a função inicia jogo
    vjogador=document.getElementById('dvJogador')
    vcpu=document.getElementById('dvCpu')
    vbola=document.getElementById('dvBola')
    vPaineltxtpontos=document.getElementById('txtPontos')
    document.addEventListener('keydown',teclaDw)
    document.addEventListener('keyup',teclaUp)

}

window.addEventListener('load', inicializa)