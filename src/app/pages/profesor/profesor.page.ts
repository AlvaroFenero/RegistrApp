import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from 'src/app/models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfesorPage implements OnInit {

  conductorInfoReceived: UserModel | undefined;

  constructor(private router: Router) {
    this.conductorInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    console.log(this.conductorInfoReceived);
    
   }

  ngOnInit() {
    
  }
  volverinicio(){
    this.router.navigate(['/login']);
  }
  auto(){
    this.router.navigate(['/clase']);
  }
  
  viajes(){
    this.router.navigate(['/registrar']);
  }

}