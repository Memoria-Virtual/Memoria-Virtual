var Game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add("Game0", Game0);
game.state.add("Game1", Game1);
game.state.start("Game0");
