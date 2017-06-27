var musica;
var Game0 = function() {};

Game0.prototype = {
    
    preload: function() {
        
        game.load.image('pginicial', 'Imagens/marca.png');
        game.load.image('botao',  'Imagens/botao.png'); 
        game.load.audio('music', ['Musica/RetroVision.mp3']);
        
    }, 
        
    create: function() {
        
        game.add.sprite(0, 0, 'pginicial');
        musica = game.add.audio('music');
        musica.play();
             
            this.playButton = this.game.add.button(500,400, 'botao', this.playTheGame, this);
        
    },
        
    update: function() {
        
    },
    
    playTheGame: function (button) {
        game.state.start("Fase 1");        
    }
    
};