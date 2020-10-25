import { Component, OnInit } from '@angular/core';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': '/../../assets/images/maquinas.jpg'},
    {'image': '/../../assets/images/tlayacapan-dren.jpg'},
    {'image': '/../../assets/images/pista-yaute3.jpg'},
    {'image': '/../../assets/images/tlayacapan-dren2.jpg'},
    {'image': '/../../assets/images/yaute-dren.jpg'},
  ]

  slidesend = [
    {'image': '/../../assets/images/img1.jpg'},
    {'image': '/../../assets/images/pavimentacion.jpg'},
    {'image': '/../../assets/images/yaute-dren3.jpg'},
  ]

}
