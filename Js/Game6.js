var Game6{
    

function preload() {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('fim', 'Imagens/fim1fase.png');
}
function create() {
	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(160, 100, 'fim');   
}  
function render() {
}
}