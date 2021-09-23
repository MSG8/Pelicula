'use strict'
console.log('JS Cargada');

class Pelicula
{
  constructor() // hago el constructor
  {
    //console.log('Se ha creado el constructor de la pelicula');
    //THIS es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Mississippi' //necesario poner el this, si no se puede confundir con variable
    this.pueblo = new Pueblo('Arlington', 'en el cual se respiraba la tension, siempre acompañada por las duras y calurosas horas del sol') //Haces un atributo del contructor Pueblo(nombre, descripcion)
    this.narrador = new Narrador();
    this.paco = new PersonajeBueno (true,'Paco','hijo de una las familias con mejor economia de su pueblo, tras varios sucesos su familia perdio muchas de sus riquezas y el se esfuerza en mejorar la economia actual de su familia ',6);
    this.maria = new PersonajeBueno (true,'Maria',`amiga de la infancia de ${this.paco.nombre}, una joven llena de energia y unas de las mejores amazonas de su epoca `);
    this.morgan = new PersonajeMalo (true,'Morgan','es un cojo conocido en su pueblo por sus problemas de alchohol y su ataques impulsivos de ira',3,'La Morgana');


    document.write(`<div>`);
    this.primerActo()
    document.write(`</div>`);

  }

  primerActo()
  {
    document.write(`<h1> ${this.titulo} </h1>`);
    document.write(`<p> ${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}, en el pasado fue un pueblo tranquilo y prospero pero eso cambio tras el paso del Sendero de las Lagrimas</p>`);
    this.narrador.hablar(` Era otra calurosa mañana, se escuchaba el sonido de la musica de la taberna de fondo mientras ${this.paco.nombre}${this.paco.descripcionPersonaje} preparaba su caballo.`);
    this.paco.hablar(`¿Que haces esta tarde ${this.maria.nombre}?.`);
    this.narrador.hablar(`Pregunto ${this.paco.nombre} mientras acababa de preparar su caballo.`);
    this.maria.hablar(` La verdad que no tengo nada que hacer ${this.paco.nombre}`);
    this.narrador.hablar(`${this.maria.nombre} es una ${this.maria.descripcionPersonaje}. Miro con cursiosidad a su compañero, le extrañaba que este le preguntase sobre sus planes ya que ${this.paco.nombre} siempre estaba demasiado ocupado`);
    this.maria.hablar(` ¿Por que me preguntas tu algo asi..?`);
    this.paco.hablar(` Porque.... necesito tu ayuda.`);
    this.narrador.hablar(` ${this.paco.nombre} sonrio mientras sacaba un pequeño trozo de oro de la mochila de su caballo.`);
    this.narrador.hablar(`La rosto de ${this.maria.nombre} cambio de golpe al tiempo que el reflejo del oro aparecia frente su vista.`);
    this.maria.hablar(` ¡¿DE DONDE SACASTE ESO?!`);
    this.narrador.hablar(`La rosto de ${this.maria.nombre} cambio de golpe al tiempo que el reflejo del oro aparecia frente su vista.`);
    this.narrador.hablar(`${this.paco.nombre} devolvio el oro a su mochila mientras se avalanza a silenciar a su amiga.`);
    this.maria.hablar(` ${this.maria.nombre}, quedamos en 1 hora detras de la taberna para ir a recoger todo el oro que podamos, asi que rapido ve a preparar tu caballo`);
    this.narrador.hablar(`${this.maria.nombre} simplemente asento y salio corriendo a preparar su caballo.`);
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
    document.write(`<p class="narrador"> Narrador: - ${texto} </p>`)
  }
}

class Personaje
{
  constructor(nombre, descripcion, balas=0 ,nombreArma= 'Revolver')
  {
    this.nombre = nombre;
    this.descripcionPersonaje = descripcion;

    this.arma = new Arma(balas,nombreArma);
  }

  recargar(nuevasBalas)
  {
    this.arma.balas = this.arma.balas + nuevasBalas;
    document.write(`<p> ${this.nombre}:`);
    while (nuevasBalas > 0)
    {
      document.write(` fsh `);
      nuevasBalas = nuevasBalas - 1;
    }
    document.write(`</p>`);
  }

  disparar(balasDisparadas)
  {
    if (this.arma.balas > 0)
    {
      document.write(`<p> ${this.nombre}:`);
      while (balasDisparadas > 0 && this.arma.balas > 0)
      {
        document.write(` ¡¡BUMM!!  `);
        balasDisparadas = balasDisparadas - 1;
        this.arma.balas = this.arma.balas - 1;
      }
      document.write(`</p>`);
    }
    else
    {
      document.write(`<p> CLICK </p>`);
    }
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

class Arma
{
  constructor(balas, nombreArma )
  {
    this.balas = balas;
    this.nombreArma =  nombreArma;
  }
}


new Pelicula(); // llamo al constructor de la clase pelicula                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
