import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [
    {
      name: 'VinciU',
      tag: 'E-learning platform',
      description: 'An online academy of digital carreers for teenagers students, with a focus on the skills needed to become a professional in such carreers',
      imgs: [
        '../../assets/projects/vinciu/1.png',
        '../../assets/projects/vinciu/2.jpg',
      ]
    },
    {
      name: 'GuíaMo',
      tag: 'App prototype',
      description: 'A prototype of a mobile app with the objective of connecting between motorbike owners and technicians',
      imgs: [
        '../../assets/projects/guiamo/1.png',
        '../../assets/projects/guiamo/2.png',
        '../../assets/projects/guiamo/3.png',
        '../../assets/projects/guiamo/4.png',
        '../../assets/projects/guiamo/5.png',
        '../../assets/projects/guiamo/6.png',
      ]
    },
    {
      name: 'PhotoStore',
      tag: 'Landing and app',
      description: 'A platform for photographers to sell their photos easily',
      imgs: [
        '../../assets/projects/photostore/1.jpg',
        '../../assets/projects/photostore/2.jpg',
        '../../assets/projects/photostore/3.jpg',
      ]
    },
    {
      name: 'AdStreet',
      tag: 'Landing',
      description: 'A landing page for a company dedicated to street ads',
      imgs: [
        '../../assets/projects/adstreet/1.jpg',
        '../../assets/projects/adstreet/2.jpg',
        '../../assets/projects/adstreet/3.jpg',
        '../../assets/projects/adstreet/4.jpg',
        '../../assets/projects/adstreet/5.jpg',

      ]
    },
    {
      name: 'BestCard',
      tag: 'Landing and app',
      description: 'A landing page and an app for a fintech company',
      imgs: [
        '../../assets/projects/bestcard/bc-1.jpg',
        '../../assets/projects/bestcard/bc-2.jpg',
      ]
    }
  ]

  constructor() { }
}
