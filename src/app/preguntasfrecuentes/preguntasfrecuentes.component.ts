import { Component } from '@angular/core';
import { preguntasrespuestas } from '../interfaces/preguntas-respuestas';

@Component({
  selector: 'app-preguntasfrecuentes',
  templateUrl: './preguntasfrecuentes.component.html',
  styleUrls: ['./preguntasfrecuentes.component.css']
})
export class PreguntasfrecuentesComponent {
  preguntas:preguntasrespuestas[]=[
    {
      pregunta:"Qué es Netflix",
      respuesta:"Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internetTodo lo que quieras ver, a un costo mensual muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
    },
  ]
}
