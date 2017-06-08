var Stage5 = function() {};

Stage5.prototype = {

    preload: function () {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('fim', 'Imagens/fim1fase.png');
}
    create: function () {
	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(160, 100, 'fim');   
}  
    update: function () {
}
}