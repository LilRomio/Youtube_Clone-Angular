import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { ThumbnailComponent } from './components/main/thumbnail/thumbnail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HamburgerMenuComponent } from './components/header/hamburger-menu/hamburger-menu.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { HomeComponent } from './components/sidebar/home/home.component';
import { ExploreComponent } from './components/sidebar/explore/explore.component';
import { SubscriptionComponent } from './components/sidebar/subscription/subscription.component';
import { LibraryComponent } from './components/sidebar/library/library.component';
import { HistoryComponent } from './components/sidebar/history/history.component';
import { PlaylistComponent } from './components/sidebar/playlist/playlist.component';
import { MessagesComponent } from './components/sidebar/messages/messages.component';
import { ShowmoreComponent } from './components/sidebar/showmore/showmore.component';
import { SubscribedComponent } from './components/sidebar/subscribed/subscribed.component';
import { ShowmoreSubscriptionsComponent } from './components/sidebar/showmore-subscriptions/showmore-subscriptions.component';
import { UserComponent } from './components/header/user/user.component';
import { SidebarLinkComponent } from './components/sidebar/sidebar-link/sidebar-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    ThumbnailComponent,
    SidebarComponent,
    HamburgerMenuComponent,
    SearchBarComponent,
    HomeComponent,
    ExploreComponent,
    SubscriptionComponent,
    LibraryComponent,
    HistoryComponent,
    PlaylistComponent,
    MessagesComponent,
    ShowmoreComponent,
    SubscribedComponent,
    ShowmoreSubscriptionsComponent,
    UserComponent,
    SidebarLinkComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
