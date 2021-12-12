var biblioteca=['javascript','curso','computador', 'transporte', 'livraria', 'tecnologia', 'controle', 'churrasco', 'brasil', 'impressora', 'xicara', 'telefone', 'internet', 'camera', 'monitor', 'brinquedo', 'youtube', 'portaria', 'escola', 'carnaval', 'teclado', 'guitarra', 'bateria', 'chinelo', 'helicoptero', 'arduino']

var qtde=biblioteca.length-1
var pos=Math.round(Math.random()*qtde)
var palavra=biblioteca[pos]
var tam=palavra.length
var cxLetras=[]
var acertos
var errosMax=7
var erros=0
var desenhos=[]
var acertou=false
var jogando=false
//dddddhhhsh
