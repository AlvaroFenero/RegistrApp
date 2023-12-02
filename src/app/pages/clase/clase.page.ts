import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
