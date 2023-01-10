import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss'],
})
export class SidebarLinkComponent implements OnInit {
  @Input() imageSrc = '';

  data_top = [
    {
      shortcuts1: '../../../../assets/images/home.png',
      name1: 'Home',
    },
    {
      shortcuts1: '../../../../assets/images/subscription.png',
      name1: 'Subscriptions',
    },
  ];
  data_mid = [
    {
      shortcuts2: '../../../../assets/images/library.png',
      name2: 'Library',
    },
    {
      shortcuts2: '../../../../assets/images/history.png',
      name2: 'History',
    },
    {
      shortcuts2: '../../../../assets/images/like.png',
      name2: 'Liked Videos',
    },
    {
      shortcuts2: '../../../../assets/images/explore.png',
      name2: 'Explore',
    },
    {
      shortcuts2: '../../../../assets/images/show-more.png',
      name2: 'Show more',
    },
  ];
  data_bottom = [
    {
      shortcuts3: '../../../../assets/images/Jack.png',
      name3: 'Jack',
    },
    {
      shortcuts3: '../../../../assets/images/cameron.png',
      name3: 'Cameron Hill',
    },
    {
      shortcuts3: '../../../../assets/images/gerard.png',
      name3: 'Gerard ',
    },
    {
      shortcuts3: '../../../../assets/images/megan.png',
      name3: 'Megan Fox',
    },
    {
      shortcuts3: '../../../../assets/images/tom.png',
      name3: 'Tom Dier',
    },
    {
      shortcuts3: '../../../../assets/images/simon.png',
      name3: 'Simon',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
