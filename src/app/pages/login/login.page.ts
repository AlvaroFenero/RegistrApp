import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IUserLogin } from 'src/app/models/IUserLogin';
import { NavigationExtras, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  listUser: any;
  usuario  :any ;

  userLoginModal: IUserLogin = {
    correo: '',
    password: ''
  };

  

  constructor(
    private route: Router,
    private usuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    this.userLoginModalRestart();
    this.listUser = await firstValueFrom(this.usuarioService.getusuarios());
    console.log("lista usuario", this.listUser)

  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      console.log('User Loged...', this.listUser[i].correo == userLoginInfo.correo ,this.listUser[i].password == userLoginInfo.password);
      console.log("lista usuario", this.listUser)
      if((this.listUser[i].correo == userLoginInfo.correo) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.correo, this.userLoginModal.correo);
        console.log(this.listUser[i]);
        // this.guardarusuario(this.listUser[i].id_usuario)
        // this.mostrar
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'alumno'){
          this.route.navigate(['/alumno'], userInfoSend);
          return true;
        }else{
         this.route.navigate(['/profesor'], userInfoSend);
          return true;
        }
      }
      else{
     
      
      }
    }
    // this.userLoginModalRestart();
    return false;

    
  }



  registrar() {
    this.route.navigate(['/registrar']);
  
  }

  userLoginModalRestart(): void{
    this.userLoginModal.correo = '';
    this.userLoginModal.password = '';
  }
}
