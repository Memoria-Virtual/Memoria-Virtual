var Game0 = function() {};

Game0.prototype = {
    
    preload: function() {
        
        game.load.image('pginicial', 'Imagens/marca.png');
        game.load.image ('botao',  'Imagens/botao.png');  
        
    }, 
        
    create: function() {
        
        game.add.sprite(0, 0, 'pginicial');
        this.playButton = this.game.add.button(200,100, 'botao', this.playTheGame, this);
        
    },
        
    update: function() {
        
    },
    
    playTheGame: function (button) {
        game.state.start("Fase 1");
        
    }
    
};