'use strict'
console.log('JS Cargada');

class Pelicula
{
  constructor() // hago el constructor
  {
    //console.log('Se ha creado el constructor de la pelicula');
    //THIS es el objeto que ejecuta el codigo
    this.titulo = "Tiroteo en Mississippi" //necesario poner el this, si no se puede confundir con variable
    this.pueblo = new Pueblo('EL Pueblo', 'muy polvoriento en el desierto') //Haces un atributo del contructor Pueblo(nombre, descripcion)
    this.narrador = new Narrador();
    this.paco = new PersonajeBueno ('Paco');
    this.maria = new PersonajeBueno ('Maria');
    this.morgan = new PersonajeMalo ('Morgan');

    this.iniciar()

  }

  iniciar()
  {
    document.write(`<h1> ${this.titulo} </h1>`);
    document.write(`<p> ${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`);
    this.narrador.hablar(` Era una soleada mañana`)
    this.paco.hablar(` Hola ${this.maria.nombre}, hoy hace buen dia.`);
    this.maria.hablar(` Hola ${this.maria.nombre}, la verdad es que si.`);
    this.narrador.hablar(` Ambos se miraron un instante y siguieron su camino..`)
    this.narrador.hablar(` Llego el antipatico y cruel Morgan`)
    this.morgan.hablar(` ¡Eh tú! ¡Pringaó! Dame tu caballo y la perras`);
  }
}

class Pueblo
{
  constructor(nombre, descripcion)
  {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Narrador
{
  hablar(texto)
  {
    document.write(`<p> Narrador: - ${texto} </p>`)
  }
}

class Personaje
{
  constructor(nombre)
  {
    this.nombre = nombre;
  }


}

class PersonajeBueno extends Personaje
{
    hablar(texto)
    {
        document.write(`<p class="bueno"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}

class PersonajeMalo extends Personaje
{
    hablar(texto)
    {
        document.write(`<p class="malo"> <span class="negrita"> ${this.nombre}: </span> GRRRRR..... ${texto} </p>`);
    }
}


new Pelicula(); // llamo al constructor de la clase pelicula
