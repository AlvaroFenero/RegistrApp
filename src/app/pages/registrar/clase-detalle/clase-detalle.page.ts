import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { QRCodeModule } from "angularx-qrcode";

@Component({
  selector: 'app-clase-detalle',
  templateUrl: './clase-detalle.page.html',
  styleUrls: ['./clase-detalle.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, QRCodeModule]
})
export class ClaseDetallePage implements OnInit {

  claseInfoReceived: any;

  public qrdata: string = null;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.claseInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['clase'];
    this.qrdata = this.claseInfoReceived.id_clase;
  }

}
