import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { AboutPageComponent } from './layout/about-page/about-page.component';
import { SkillsPageComponent } from './layout/skills-page/skills-page.component';
import { ProjectsPageComponent } from './layout/projects-page/projects-page.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    HomePageComponent,
    AboutPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    SwitchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
