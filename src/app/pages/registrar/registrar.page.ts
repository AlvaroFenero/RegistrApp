import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { IClase } from 'src/app/models/IClase';
import { NavigationExtras, Router } from '@angular/router';
import { ClasesService } from 'src/app/servises/clases.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarPage implements OnInit {

  titulo = "Crear Clase"

  listaClases: any;

  qrResponse: any;



  constructor(
    private clasesService: ClasesService,
    private router: Router
  ) {


   }

  async ngOnInit() {
    this.listaClases = await firstValueFrom(this.clasesService.getClases());
    console.log("lista clases", this.listaClases);
    console.log(this.qrResponse);


  }

  async enviarDatosClase(clase: IClase){
    this.qrResponse = await firstValueFrom(this.clasesService.putQrClases(clase.id_clase));
    let userInfoSend: NavigationExtras = {

      // Se envía el objeto userLoginModal como parámetro a la página de inicio
      state: {
        clase: clase
      }
    }
    this.router.navigate(['generador'], userInfoSend);
    console.log('claseInfo:', userInfoSend);

  }




}
