import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slidespista = [
    {'image': '/../../assets/images/pista-yaute.jpg'},
    {'image': '/../../assets/images/pista-yaute2.jpg'},
    {'image': '/../../assets/images/pista-yaute3.jpg'},
  ]

  slidesgas = [
    {'image': '/../../assets/images/gasolinera1.jpg'},
    {'image': '/../../assets/images/gasolinera2.jpg'},
  ]

  slidesdrentlaya = [
    {'image': '/../../assets/images/tlayacapan-dren.jpg'},
    {'image': '/../../assets/images/tlayacapan-dren2.jpg'},
    {'image': '/../../assets/images/tlayacapan-dren3.jpg'},
  ]

  slidesdrentyaute = [
    {'image': '/../../assets/images/yaute-dren.jpg'},
    {'image': '/../../assets/images/yaute-dren2.jpg'},
    {'image': '/../../assets/images/yaute-dren3.jpg'},
  ]

}
