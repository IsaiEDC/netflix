import { Component } from '@angular/core';
import { preguntasrespuestas } from '../interfaces/preguntas-respuestas';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-preguntasfrecuentes',
  templateUrl: './preguntasfrecuentes.component.html',
  styleUrls: ['./preguntasfrecuentes.component.css']
}
)
 



export class PreguntasfrecuentesComponent {
  preguntas:preguntasrespuestas[]=[
    {
      pregunta:"¿Qué es Netflix?",
      respuesta:"Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internetTodo lo que quieras ver, a un costo mensual muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
    },
    {
      pregunta:"¿Cuánto cuesta Netflix?",
      respuesta:"Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $99 hasta $299 al mes. Sin costos adicionales ni contratos."
    },
    {
      pregunta:"¿Dónde puedo ver Netflix?",
      respuesta:"Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.Además, puedes descargar tus series favoritas con la app para iOS o Android. Con la función de descarga, puedes ver contenido donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
    },
    {
      pregunta:"¿Cómo cancelo?",
      respuesta:"Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
    },
    {
      pregunta:"¿Qué puedo ver en Netflix?",
      respuesta:"Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
    },
    {
      pregunta:"¿Es bueno Netflix para los niños?",
      respuesta:"La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
    },
  ];

  preguntasfrecuentesItem = [
    {Pregunta: 'pregunta 1',content: 'respuesta de la pregunta 1', expanded: false},
    {Pregunta: 'pregunta 2',content: 'respuesta de la pregunta 2', expanded: false},
    {Pregunta: 'pregunta 3',content: 'respuesta de la pregunta 3', expanded: false},
    {Pregunta: 'pregunta 4',content: 'respuesta de la pregunta 4', expanded: false},
    {Pregunta: 'pregunta 5',content: 'respuesta de la pregunta 5', expanded: false},
    {Pregunta: 'pregunta 6',content: 'respuesta de la pregunta 6', expanded: false}
  ];

  togglePreguntasFrecuentes(index: number): void {
    this.preguntasfrecuentesItem[index].expanded = !this.preguntasfrecuentesItem[index].expanded;
  }
  

}
