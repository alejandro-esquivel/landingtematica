import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nombre: string = '';
  tipo: string = '';
  raza: string = '';
  isLetraGrande: boolean = false;
  isTituloGrande: boolean = false;
  isDarkMode: boolean = false;
  nombreContacto: string = '';
  email: string = '';
  mensaje: string = '';

  setDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  setLetraGrande() {
    this.isLetraGrande = !this.isLetraGrande;
    this.isTituloGrande = !this.isTituloGrande;
  }
}
