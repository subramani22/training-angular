import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  images = ['https://aikyne-mediafiles.s3.ap-south-1.amazonaws.com/loginImages/1055.png', 'https://aikyne-mediafiles.s3.ap-south-1.amazonaws.com/loginImages/image_1.png', 'https://aikyne-mediafiles.s3.ap-south-1.amazonaws.com/loginImages/image_2.png',
  'https://aikyne-mediafiles.s3.ap-south-1.amazonaws.com/loginImages/image_3.png','https://aikyne-mediafiles.s3.ap-south-1.amazonaws.com/loginImages/image_4.png'];
  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
