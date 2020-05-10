
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var pontuacao = 0

var criarMosquitoTempo = 1500

//search retorna apenas queryString da url
var nivel = window.location.search
nivel = nivel.replace('?', '')

//Separando os niveis e defininto o valor do tempo em milisegundos
if (nivel === 'normal'){
	//1500
	criarMosquitoTempo = 1500
} else if (nivel === 'dificil'){
	//1000
	criarMosquitoTempo = 1000
} else if (nivel === 'hardcore'){
	criarMosquitoTempo = 750 
}

function ajustaTamanhoPalcoJogo(){
	// Guardando largura e altura da página
	altura =  window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval( function(){
	//Tirando um segundo do cronometro
	tempo -= 1

	if (tempo < 0){

		// Parando o cronometro quando chegar a zero
		clearInterval(cronometro)

		// Parando a aparição de mosquitos na tela
		clearInterval(criarMosquito)
		
		//Redirecionado para a pagina de vitoria
		window.location.href ='vitoria.html'

	} else { 
		//Recendo e trocando os numeros do cronometro
		document.getElementById('cronometro').innerHTML = tempo	
	}
} , 1000)


function posicaoRandomica() {

	//Removendo o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')){
	//Remoção automatica
		document.getElementById('mosquito').remove()
		
		//console.log('Elemento selecionado ' + vidas)
		//Trocando imagem coração cheio por coração vazio
		if (vidas > 3) {
			// Abrira a pagina de game over quando não over mais vidas
			window.location.href ='fim_de_jogo.html'
		}else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	// Math.random(): Gerando largura e altura aleatorios porem respeitando o limite de tela do aparelho 
	//Math.floor: Arredodando os valores para baixo
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	// -90 e para impedir o estoura da imagem na tela

	//Operador ternario
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// Criando o elemento html
	var mosquito = document.createElement('img')
	
	// Adiconando imagem ao elemento ao body
	mosquito.src = 'imagens/mosquito.png'

	// Adicionando a classe ao elemento
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()

	//Ajustado a posição que a imagem vai aparecer na tela
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top  = posicaoY + 'px'

	// E necesario que a posição seja absoluta
	mosquito.style.position = 'absolute'

	// Acicionado um id para cada mosquito
	mosquito.id = 'mosquito'

	//Retirando o mosquito quando clicado
	mosquito.onclick = function(){
        this.remove()

        //Adicionando pontuação a cada click
        pontuacao += 1
        //Guardando pontuação
        localStorage.setItem('pontuacao', pontuacao)
        document.getElementById("pontuacao").innerHTML = pontuacao
    }

	//lançando na pagina os mosquitos
	document.body.appendChild(mosquito)

}

// Adicionando o tamanho ao mosquito
function tamanhoAleatorio(){
	//Limitando o mosquito a 3 tamanhos
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

// Adicionando o lado em que o mosquito ira ficar
function  ladoAleatorio() {
	//	Limitando o mosquito a 3 tamanhos
	var classe = Math.floor(Math.random() * 2)
	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

