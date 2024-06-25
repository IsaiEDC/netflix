import { Component } from '@angular/core';
import { PublicidadPelicula } from '../interfaces/publicidad-pelicula';

@Component({
  selector: 'app-partedos',
  templateUrl: './partedos.component.html',
  styleUrls: ['./partedos.component.css']
})

export class PartedosComponent {
  publicidad:PublicidadPelicula[]=[
    {
      titulo:"Disfruta en tu TV",
      descripcion:`Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
      reproductores de Blu-ray y más.`,
      imagen:"../../assets/NesflixConTVConRecorte (1).gif"
    },
    {
      titulo:"Disfruta donde quieras",
      descripcion:`Películas y series ilimitadas en tu teléfono, tablet, laptop y <br>
      TV.`,
      imagen:"../../assets/device-pile.png"
    },
    {
      titulo:" Crea perfiles para niños",
      descripcion:`      Los niños vivirán aventuras con sus personajes favoritos en un <br>
      espacio diseñado exclusivamente para ellos, sin costo con tu <br>
      membresía.`,
      imagen:"../../assets/perfilninios.png"
    },
    {
      titulo:"Descarga tus series para verlas offline",
      descripcion:`Ve Netflix en un avión, un tren o un <br>
      submarino...`,
      imagen:"../../assets/promocionaltelefono.jpg"
    },
  ]
}
