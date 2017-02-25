var game = new Phaser.Game(600, 480, Phaser.AUTO);

var main = {

    preload: function () {

        game.stage.backgroundColor = "#990000";

    },

    create: function () {

    },

    update: function () {

    }

};

game.state.add('main', main);
game.state.start('main');