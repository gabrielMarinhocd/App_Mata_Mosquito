
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
	// Quardando largura e altura da página
	altura =  window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

	//Removendo o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
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
	//Limitando o mosquito a 3 tamanhos
	var classe = Math.floor(Math.random() * 2)
	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

