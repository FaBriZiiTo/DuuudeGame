import Phaser from "phaser";

class Preload extends Phaser.Scene {

    constructor() {
        super('Preload')
    }
    //carga de imagenes y musica
    preload() {
        this.load.audio('musica', 'sound/mainTheme.mp3');
        this.load.image('sky', 'img/sky.png');
        this.load.image('ground', 'img/platform.png');
        this.load.image('star', 'img/star.png');
        this.load.image('bomb', 'img/bomb.png');
        this.load.spritesheet('dude', 'img/dude.png',
            { frameWidth: 32, frameHeight: 48 });
        //debugger;
    }

    create() {
        this.scene.start('Escena')
    }
}

export default Preload;