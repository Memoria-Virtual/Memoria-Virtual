var Fase = function() {};

Fase.prototype = {
    
    preload: function() {
        
        game.load.image('fase2', 'Imagens/fase2.png');
        game.load.image('botao',  'Imagens/avanca.png');  
        
    }, 
        
    create: function() {
        
        game.add.sprite(0, 0, 'fase2');
        this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
        
    },
        
    update: function() {
        
    },
    
    playTheGame: function (button) {
        game.state.start("Fase 7");        
    }
    
};