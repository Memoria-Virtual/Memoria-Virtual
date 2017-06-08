var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add("Fase 6", Stage5);
game.state.add("Fase 5", Stage4);
game.state.add("Fase 4", Stage3);
game.state.add("Fase 3", Stage2);
game.state.add("Fase 2", Stage1);
game.state.add("Fase 1", Stage0);
game.state.start("Game0");
