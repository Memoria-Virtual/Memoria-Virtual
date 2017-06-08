var pontuacao = 0;
var scoreText;
var rcasa;
var rarvore;
var rcolher;

var Stage2 = function() {};

Stage2.prototype = {
    
    preload: function () {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('casa', 'Imagens/casa1.png');
    game.load.image('rcasa', 'Imagens/rcasa.png');
    game.load.image('rarvore', 'Imagens/rarvore.png');
    game.load.image('rcolher', 'Imagens/colher.png');   
}
    create: function () {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'casa');
        rcasa = game.add.sprite(110, 500, 'rcasa');
        rarvore = game.add.sprite(300, 500, 'rarvore');
        rcolher = game.add.sprite(500, 500, 'rcolher');

        rcasa.inputEnabled = true;
        rcasa.input.enableDrag(true);
        rarvore.inputEnabled = true;
        rarvore.input.enableDrag(true);
        rcolher.inputEnabled = true;
        rcolher.input.enableDrag(true);
}  
    update: function () {
}
}