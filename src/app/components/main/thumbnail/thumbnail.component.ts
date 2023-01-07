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
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail2.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail3.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail4.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail5.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail6.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail7.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: '../../../../assets/images/thumbnail8.png',
      icon: '../../../../assets/images/Jack.png',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
