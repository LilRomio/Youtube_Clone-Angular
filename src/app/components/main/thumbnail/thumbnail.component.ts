import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  data = [
    {
      video: '../../../../assets/images/thumbnail1.png',
      icon: '../../../../assets/images/simon.png',
      title: 'Best Channel for travel',
      subtitle: 'Best Places to travel',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail2.png',
      icon: '../../../../assets/images/tom.png',
      title: 'American Spirit',
      subtitle: 'America Best Destination',
      views: '20k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail3.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tutorials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail4.png',
      icon: '../../../../assets/images/megan.png',
      title: 'Lakes',
      subtitle: 'Enjoy the nature',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail5.png',
      icon: '../../../../assets/images/simon.png',
      title: '5 Friends',
      subtitle: 'Best Friends',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail6.png',
      icon: '../../../../assets/images/cameron.png',
      title: 'Top cars 2023',
      subtitle: 'Fast Cars',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail7.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Industry',
      subtitle: 'Industry',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail8.png',
      icon: '../../../../assets/images/cameron.png',
      title: 'Lamborghini',
      subtitle: 'Dream Car',
      views: '45k views 5 days',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
