
var game{
    
    function preload() {
        
        game.load.image('pginicial', 'Imagens/marca.png');
        game.load.image ('botao',  'Imagens/botao.png',193, 71);  
        
    }, 
        
    function create() {
        
        game.add.sprite(0, 0, 'pginicial');
        game.add.sprite(150, 110, 'botao');
        this.playButton = this.game.add.button(this.world.centerX, this.world.centerY, 'botao', this.playTheGame, this);
        
    },
        
    function update() {
        
    },
    playTheGame: function (button) {
        game.state.start("Game");
        
    }
    
};