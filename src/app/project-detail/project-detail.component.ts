import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  config2: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 36,
    navigation: true,
    pagination: { clickable: true }
  };
  constructor(private route: ActivatedRoute,
    public ds: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.project = this.ds.projects.find(obj => {
        return obj.slug === params['id'];
      });
      console.log(this.project);
      console.log(this.project.imgs[0])
    });
  }

}
