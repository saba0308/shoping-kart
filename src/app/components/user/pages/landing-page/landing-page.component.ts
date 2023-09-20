import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Carousel } from 'src/app/components/admin/pages/user-interface/carousel/carousel.component';
import { UserInterfaceService } from 'src/app/components/admin/services/user-interface.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  carouselData: Carousel[];

  constructor(config: NgbCarouselConfig, private cdr: ChangeDetectorRef, private interfaceService: UserInterfaceService,) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  slides = [
    { img: "../../../../../assets/productsImage/1667820020_3.jpg" },
    {
      img: "../../../../../assets/productsImage/1677063124_Mac_Book_Air_Desktop.jpg"
    },
    { img: "../../../../../assets/productsImage/1673344093_6.jpg" },
    { img: "../../../../../assets/productsImage/1677025875_ProVedic_Desktop.jpg" },
    { img: "../../../../../assets/productsImage/1677026046_Livflame_Desktop.jpg" },
    { img: "../../../../../assets/productsImage/1677063124_Mac_Book_Air_Desktop.jpg" },

  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  arrayLength = 10;
  getArray(count: number) {
    return new Array(count)
  }
  ngOnInit(): void {
    this.interfaceService.getAll().subscribe(
      (data: Carousel[]) => {
        this.carouselData = data;
        this.cdr.detectChanges(); // manually trigger change detection
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
