// Violation of SRP in Facade pattern
class Television {
  turnOn() {
    console.log("Turn on the t.v");
  }

  turnOff() {
    console.log("Turn off the t.v");
  }
}

class RoomLight {
  turnOn() {
    console.log("Turn on the lights");
  }

  turnOff() {
    console.log("Turn off the lights");
  }
}

class SoundSystem {
  increaseTheSound() {
    console.log("Increase the Sound System");
  }

  decreaseTheSound() {
    console.log("Decrease the Sound System");
  }
}

class Facade {
  constructor() {
    this.television = new Television();
    this.roomLight = new RoomLight();
    this.soundSystem = new SoundSystem();
  }

  watchMovie() {
    this.television.turnOn();
    this.roomLight.turnOff();
    this.soundSystem.increaseTheSound();
  }

  notWatchMovie() {
    this.television.turnOff();
    this.roomLight.turnOn();
    this.soundSystem.decreaseTheSound();
    this.getPopcorn();
  }

  getPopcorn() {
    console.log("get the popcorn ready");
  }
}

const facade = new Facade();
