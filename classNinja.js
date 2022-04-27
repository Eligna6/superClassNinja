class Ninja {
  constructor(nombre, salud, velocidad, fuerza) {
    this.nombre = nombre;
    this.salud = salud || 0;
    this.velocidad = velocidad || 3;
    this.fuerza = fuerza || 3;
  }

  sayName = () => console.log(`Hi, I'm a ninja named ${this.nombre}`);

  showStats = () =>
    console.log(
      `Nombre: ${this.nombre}\nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud}`
    );

  drinkSake = () => (this.salud += 10);
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
