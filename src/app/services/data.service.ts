import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [
    {
      name: 'VinciU',
      slug: 'vinciu',
      tag: 'E-learning platform',
      description: 'An online academy of digital carreers for teenagers students, with a focus on the skills needed to become a professional in such carreers',
      imgs: [
        '../../assets/projects/vinciu/1.webp',
        '../../assets/projects/vinciu/2.webp',
        '../../assets/projects/vinciu/3.webp',
        '../../assets/projects/vinciu/4.webp',
        '../../assets/projects/vinciu/5.webp',
        '../../assets/projects/vinciu/6.webp',
        '../../assets/projects/vinciu/7.webp',
        '../../assets/projects/vinciu/8.webp',
        '../../assets/projects/vinciu/9.webp',
        '../../assets/projects/vinciu/10.webp',
        '../../assets/projects/vinciu/11.webp',
      ]
    },
    {
      name: 'GuíaMo',
      slug: 'guiamo',
      tag: 'App prototype',
      description: 'A prototype of a mobile app with the objective of connecting between motorbike owners and technicians',
      imgs: [
        '../../assets/projects/guiamo/1.webp',
        '../../assets/projects/guiamo/2.webp',
        '../../assets/projects/guiamo/3.webp',
        '../../assets/projects/guiamo/4.webp',
        '../../assets/projects/guiamo/5.webp',
        '../../assets/projects/guiamo/6.webp',
        '../../assets/projects/guiamo/7.webp',
        '../../assets/projects/guiamo/8.webp',
        '../../assets/projects/guiamo/9.webp',
        '../../assets/projects/guiamo/10.webp',
        '../../assets/projects/guiamo/11.webp',
        '../../assets/projects/guiamo/12.webp',
        '../../assets/projects/guiamo/13.webp',
        '../../assets/projects/guiamo/14.webp',
        '../../assets/projects/guiamo/15.webp',
        '../../assets/projects/guiamo/16.webp',
        '../../assets/projects/guiamo/17.webp',
        '../../assets/projects/guiamo/18.webp',
      ]
    },
    {
      name: 'PhotoStore',
      slug: 'photostore',
      tag: 'Landing and app',
      description: 'A platform for photographers to sell their photos easily',
      imgs: [
        '../../assets/projects/photostore/1.webp',
        '../../assets/projects/photostore/2.webp',
        '../../assets/projects/photostore/3.webp',
      ]
    },
    {
      name: 'AdStreet',
      slug: 'adstreet',
      tag: 'Landing',
      description: 'A landing page for a company dedicated to street ads',
      imgs: [
        '../../assets/projects/adstreet/1.webp',
        '../../assets/projects/adstreet/2.webp',
        '../../assets/projects/adstreet/3.webp',
        '../../assets/projects/adstreet/4.webp',
        '../../assets/projects/adstreet/5.webp',

      ]
    },
    {
      name: 'BestCard',
      slug: 'bestcard',
      tag: 'Landing and app',
      description: 'A landing page and an app for a fintech company',
      imgs: [
        '../../assets/projects/bestcard/bc-1.webp',
        '../../assets/projects/bestcard/bc-2.webp',
        '../../assets/projects/bestcard/bc-3.webp',
        '../../assets/projects/bestcard/bc-4.webp',
        '../../assets/projects/bestcard/bc-app-1.webp',
        '../../assets/projects/bestcard/bc-app-2.webp',
        '../../assets/projects/bestcard/bc-app-3.webp',
        '../../assets/projects/bestcard/bc-app-4.webp',
        '../../assets/projects/bestcard/bc-app-5.webp',
        '../../assets/projects/bestcard/bc-app-6.webp',
        '../../assets/projects/bestcard/bc-app-7.webp',
      ]
    }
  ]

  constructor() { }
}
