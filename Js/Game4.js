var Game4{
 
    
function preload() {
   game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('arvore', 'Imagens/arvore.png');
    game.load.image('rarvore', 'Imagens/rarvore.png');
    game.load.image('hospital', 'Imagens/hospital.png');
    game.load.image('pente', 'Imagens/pente.png');
}
function create() {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'arvore');
    game.add.sprite(110, 500, 'pente');
        var rarvore = game.add.sprite(300, 500, 'rarvore');
    game.add.sprite(500, 500, 'hospital');
        rarvore.inputEnabled = true;
        rarvore.input.enableDrag(true);
}  
function render() {
}
}