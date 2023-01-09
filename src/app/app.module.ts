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
    UserComponent,
    SidebarLinkComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
