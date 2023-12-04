import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreEstudiante = 'Nombre Estudiante';
  carnet = '22006761';

  constructor(private router: Router) {}

  cargarPaises() {
    // Simulación de datos para propósitos de demostración
    const paisesMock = [
      { name: 'País 1', flag: 'URL_Bandera_1' },
      { name: 'País 2', flag: 'URL_Bandera_2' },
      // ... Agrega más países según tus necesidades
    ];

    // Navegar a la página "infopaises" y pasar los países como parámetro
    this.router.navigate(['/infopaises'], { queryParams: { paises: JSON.stringify(paisesMock) } });
  }
}
