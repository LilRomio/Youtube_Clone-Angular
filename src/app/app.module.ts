import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { ThumbnailComponent } from './components/main/thumbnail/thumbnail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HamburgerMenuComponent } from './components/header/hamburger-menu/hamburger-menu.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { VoiceSearchComponent } from './components/header/voice-search/voice-search.component';

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
import { UploadVideoComponent } from './components/header/upload-video/upload-video.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { UserComponent } from './components/header/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    ThumbnailComponent,
    SidebarComponent,
    HamburgerMenuComponent,
    LogoComponent,
    SearchBarComponent,
    VoiceSearchComponent,

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
    UploadVideoComponent,
    NotificationComponent,
    UserComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
