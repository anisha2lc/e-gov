// Lack of Abstraction
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
  increase() {
    console.log("Increase the Sound System");
  }

  decrease() {
    console.log("Decrease the Sound System");
  }
}

class Facade {
  constructor() {
    this.television = new Television();
    this.roomLight = new RoomLight();
    this.soundSystem = new SoundSystem();
  }

  turnOn() {
    this.television.turnOn(); //lack of abstraction, directly calling subsystem operation
  }

  turnOff() {
    this.television.turnOff(); //lack of abstraction, directly calling subsystem operation
  }
}

const facade = new Facade();
