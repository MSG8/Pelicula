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
    this.paco = new PersonajeBueno (true,'Paco','hijo de una las familias con mejor economia de su pueblo, tras varios sucesos su familia perdio muchas de sus riquezas y el se esfuerza en mejorar la economia actual de su familia ',6,6,12);
    this.maria = new PersonajeBueno (true,'Maria',`amiga de la infancia de ${this.paco.nombre}, una joven llena de energia y unas de las mejores amazonas de su epoca `);
    this.morgan = new PersonajeMalo (true,'Morgan','es un cojo conocido en su pueblo por sus problemas de alchohol y su ataques impulsivos de ira',3,8,6,'La Morgana');


    document.write(`<div>`);
    this.primerActo();
    this.segundoActo();
    document.write(`<h2> TERCER ACTO: EL FIN </h2>`);
    this.narrador.hablar(` ${this.paco.nombre} y ${this.maria.nombre} llegaron al sitio donde se encontraba el oro, era una montaña la cual tenia bastantes menas de oro.`);
    this.paco.hablar(`¿Tu tambien escuchaste ruido detras de nosotros...?`);
    if (this.paco.azarNumero(2,1) == 1)
    {
      this.tercerActoBueno();
    }
    else
    {
      this.tercerActoMalo();
    }
    document.write(`<h3> FIN </h3>`);
    document.write(`</div>`);

  }

  primerActo()
  {
    document.write(`<h1> ${this.titulo} </h1>`);
    document.write(`<h2> PRIMER ACTO: LA SORPRESA </h2>`);
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

  segundoActo()
  {
    document.write(`<h2> SEGUNDO ACTO: EL ENCUENTRO </h2>`);
    this.narrador.hablar(` Tras la hora se encontraba ${this.paco.nombre} esperando a ${this.maria.nombre}.`);
    this.paco.hablar(` Esta chica siempre esta igual...`);
    this.morgan.disparar(1);
    this.narrador.hablar(` De fondo se escucho un sonido fuerte acompañado a uno metalico. ${this.morgan.nombre} acababa de dispara, el ${this.morgan.descripcion}`);
    this.morgan.hablar(` Joder... ahora les debo a los Hermanos Cuchilla mas dinero.. debo conseguir dinero`);
    this.morgan.recargar(3);
    this.narrador.hablar(` En ese momento una nube de polvo cubrio la vista de ${this.paco.nombre} debido a la velocidad con la que habia llegado cabalgando ${this.maria.nombre}`);
    this.maria.hablar(` ¡VAMOS A POR EL OR..!`);
    this.narrador.hablar(` ${this.maria.nombre} fue enturripida por ${this.paco.nombre} antes de que acabara la oracion `);
    this.paco.hablar(` ${this.maria.nombre}, !QUE NO QUIERO QUE SE ENTERE TODO EL MALDITO PUEBLO¡ `);
    this.narrador.hablar(` ${this.maria.nombre} se disculpo mientras ${this.paco.nombre} se subia a su caballo`);
    this.paco.hablar(` Sigueme, anda.. `);
    this.narrador.hablar(` Por mala suerte para ellos ${this.morgan.nombre} habia escuchado su conversacion y ahora sonreia de forma macabra pensando en lo que podia lograr`);
    this.morgan.hablar(`Con que oro no.., ese chico no sabria usarlo bien.. mejor ire a quedarmelo yo.. jejeje`);
    this.morgan.disparar(2);
  }

  tercerActoBueno()
  {

    this.maria.hablar(` Si.. creo que alguien nos siguio ¿habra sido ${this.morgan.nombre}?`);
    this.paco.hablar(`Puede ser.. que querra ese borracho, escondamonos antes de que llegue`);
    this.narrador.hablar(`Ambos se ocultaron entre la maleza,unos minutos despues aparecio ${this.morgan.nombre} y se bajo con dificultad de su caballo. Ando cojeando mientras jugaba con su arma`);
    this.morgan.hablar(`jejeje ¿donde estan esos chicos..? ${this.morgan.nombreArma} quiere saludarles jejeje`);
    this.morgan.disparar(1);
    this.morgan.hablar(` ¡CHICOS SALIR, NECESITO PAGAR UNAS DEUD...!`);
    this.paco.disparar(1);
    this.narrador.hablar(`${this.paco.nombre} disparo detras de este, el disparo fue hacia unas rocas, era un simple aviso`);
    this.paco.hablar(`Alejate de mi oro y no pasara nada..`);
    this.morgan.disparar(3);
    this.narrador.hablar(`${this.morgan.nombre} disparo a lo loco totalmente asustado pero fallo todos sus disparos`);
    this.paco.hablar(` Me has obligado..`);
    this.paco.disparar(6,this.morgan.nombre);
    this.narrador.hablar(`${this.morgan.nombre} murio sin ninguna posibilidad de salvacion, ${this.paco.nombre} respiraba intentandose calmar`);
    this.paco.hablar(` LLevo años investigando como ayudar a recuperrar el prestiguio y la economia que mis padres tenian antes de que todo empeorara y nadie me lo va a quitar`);
    this.narrador.hablar(`${this.maria.nombre} miraba asustada a su amigo mientras se recuperaba del momento..`);
    this.narrador.hablar(`Meses mas tarde se descubrio que morgan era un cobarde buscado para ser ejecutado.Por otra parte a ${this.maria.nombre} y ${this.paco.nombre} le han ido bien las cosas no obstante la sangre de las manos de ${this.paco.nombre} nunca se limpiara`);
  }

  tercerActoMalo()
  {

    this.maria.hablar(` Nope creo que deberias relajarte más, ¿quien nos estaria siguiendo?`);
    this.paco.hablar(`Puede ser.. que sea ese borracho de ${this.morgan.nombre}`);
    this.maria.hablar(` Eres un paranoico, vamos a coger el oro`);
    this.narrador.hablar(`Ambos se pusieron a recoger todo el oro que podias. Mientras ${this.morgan.nombre} llegaba a la zona, antes de llegar se escondio acercandose por la maleza `);
    this.paco.hablar(`¿Seguro que no hay nada..?`);
    this.morgan.disparar(1);
    this.narrador.hablar(`Ambos se asustaron soltando las bolsas llenas de oro, el ${this.paco.nombreArma} de ${this.paco.nombre} estaba en su caballo por lo que no podia hacer nasa, se encontraba totalmente asustado con su amiga`);
    this.morgan.hablar(` Chicos por favor.. dejar las bolsas en el suelo e iros y nos os pasara nada`);
    this.maria.hablar(`Hazlo ${this.paco.nombre} no merece la pena`);
    this.paco.hablar(`Era mi oportunidad y.. se va a ir.. n-no ¡NO!`);
    this.narrador.hablar(`${this.paco.nombre} se preparo para lanzarse contra ${this.morgan.nombre} pero..`);
    this.morgan.disparar(6,this.paco.nombre);
    this.morgan.hablar(` Lo siento por el chavalin, pero todos tenemos nuestras razones..`);
    this.narrador.hablar(`..${this.paco.nombre} cayo antes de siquiera acercarse a ${this.morgan.nombre}. Ahora ${this.maria.nombre} se encontraba sollozando en el suelo al lado del cuerpo de su amigo`);
    this.morgan.hablar(` Una pena`);
    this.morgan.recargar(6);
    this.morgan.hablar(` Tenia que hacerme caso, aunque pasaria lo mismo`);
    this.narrador.hablar(`${this.maria.nombre} miro hacia arriba viendo el cañon de ${this.morgan.nombreArma} frente a sus ojos`);
    this.maria.hablar(` n-no... por favor..`);
    this.narrador.hablar(`${this.maria.nombre} lloraba implorando que no le maten`);
    this.morgan.disparar(6,this.maria.nombre);
    this.morgan.hablar(` Lo siento pero no, jejeje al parecer no he perdido habilidades`);
    this.narrador.hablar(`${this.morgan.nombre} tomo el oro y se monto en su caballo, volviendo al pueblo para pagar su deuda y comenzar su futura y prospera nueva vida`);
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
    document.write(`<p class="narrador"> <span class="negrita"> Narrador: </span> - ${texto} </p>`)
  }
}

class Personaje
{
  constructor(vivo=true ,nombre, descripcion, balas=0, maximaBalas=6, balasReserva=0 ,nombreArma='Revolver')
  {
    this.vivo = vivo;
    this.nombre = nombre;
    this.descripcionPersonaje = descripcion;

    this.arma = new Arma(balas, maximaBalas, balasReserva, nombreArma);
  }

  recargar(nuevasBalas)
  {
    this.dialogos =
      [
        'MIERDA ME QUEDE SIN BALAS PARA RECARGAR',
        'Y-ya no tengo mas..',
        'Es mi fin..'
      ];

    if (this.arma.balasReserva > 0)
    {
      if (nuevasBalas+this.arma.balas > this.arma.maximaBalas)
      {
        nuevasBalas = this.arma.maximaBalas - this.arma.balas;
      }
      this.arma.balas = this.arma.balas + nuevasBalas;
      this.arma.balasReserva = this.arma.balasReserva - nuevasBalas;
      document.write(`<p class="cargar"> <span class="negrita">${this.nombre}:</span>`);
      while (nuevasBalas > 0)
      {
        document.write(` fsh `);
        nuevasBalas = nuevasBalas - 1;
      }
      document.write(`</p>`);
    }
    else
    {
      document.write(`<p> <span class="negrita"> ${this.nombre}:</span> ${this.dialogos[this.azarNumero(2,0)]}`);
    }

  }

  disparar(balasDisparadas, personaDisparada='')
  {
    if (this.arma.balas > 0)
    {
      document.write(`<p > <span class="negrita">${this.nombre}:</span>`);
      while (balasDisparadas > 0 && this.arma.balas > 0)
      {
        document.write(` <span class="metal">¡¡BUMM!! </span> `);
        balasDisparadas = balasDisparadas - 1;
        this.arma.balas = this.arma.balas - 1;
        if ((personaDisparada != '') && (this.azarNumero(2,1) == 1))
        {
          this.dialogos =
            [
              'Ah.. m-me dio.. n-no puede..',
              'AHHH AYYY DUELE DEMASIADO, PA-PA....',
              'Esto no tenia que acabar asi...'
            ];
          document.write(`<p class="morir"> <span class="negrita"> ${personaDisparada}:</span> ${this.dialogos[this.azarNumero(2,0)]}</p>`);
        }
      }
      if (this.arma.balas == 0)
      {
        while (balasDisparadas > 0)
        {
          balasDisparadas = balasDisparadas - 1;
          document.write(` <span class="metal">CLICK</span>  `);
        }
      }
      document.write(`</p>`);
    }
    else
    {
      document.write(`<p > ${this.nombre}:`);
      while (balasDisparadas > 0)
      {
        balasDisparadas = balasDisparadas - 1;
        document.write(` <span class="metal">CLICK</span>  `);
      }
      document.write(`</p>`);
    }
  }

  azarNumero(max=0,min=0)
  {
    this.max = max+1;
    this.min = min;

    return (Math.floor(Math.random() * (this.max - this.min)) + this.min);
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
        document.write(`<p class="malo"> <span class="negrita"> ${this.nombre}: </span>  ${texto} </p>`);
    }
}

class Arma
{
  constructor(balas, maximaBalas, balasReserva, nombreArma)
  {
    this.balas = balas;
    this.maximaBalas = maximaBalas;
    this.balasReserva = balasReserva;
    this.nombreArma =  nombreArma;
  }
}

new Pelicula(); // llamo al constructor de la clase pelicula                                                                     
