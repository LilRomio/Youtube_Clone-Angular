import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  data = [
    {
      video: 'src="../../../../assets/images/thumbnail1.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail2.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail3.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail4.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail5.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail6.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail7.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
    {
      video: 'src="../../../../assets/images/thumbnail8.png"',
      icon: 'src="../../../../assets/images/Jack.png"',
      title: 'Best Channel to learn coding',
      subtitle: 'Easy Tuturials',
      views: '15k views 2 days',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
