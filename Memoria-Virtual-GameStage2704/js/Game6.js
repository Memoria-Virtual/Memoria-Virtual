var Stage5 = function() {};

Stage5.prototype = {

    preload: function () {
        game.load.image('fundo', 'Imagens/fundo.png');
        game.load.image('fim', 'Imagens/fim1fase.png');
        game.load.image('reiniciar','Imagens/reiniciar.png');
        game.load.image('jogar','Imagens/jogar.png')
    },
    
    create: function () {
    game.add.sprite(0, 0, 'fundo');
    game.add.sprite(160, 100, 'fim');   
    this.playButton = this.game.add.button(400,10, 'reiniciar', this.reiniciar, this);
    this.playButton = this.game.add.button(260,10, 'jogar', this.jogarNovamente, this);
    },
    
    update: function () {
    },
    reiniciar: function (button) {
    game.state.start("Game0");        
            },
   jogarNovamente: function (button) {
    game.state.start("Fase 1");        
        } 
};