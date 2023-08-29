import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/forms/display/display.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInformationComponent } from "./components/forms/personal-information/personal-information.component";
import { PhotoCVComponent } from './components/forms/photo-cv/photo-cv.component';
import { WorkingInformationComponent } from './components/forms/working-information/working-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        AppComponent,
        DisplayComponent,
    ],

    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
          { path: 'display', component: DisplayComponent },
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          { path: '**', pathMatch: 'full', redirectTo: 'home' },
        ]),
        AppRoutingModule,
        NavbarComponent,
        HomeComponent,
        PersonalInformationComponent,
        PhotoCVComponent,
        WorkingInformationComponent,
        BrowserAnimationsModule,
        MatCardModule
    ]
})
export class AppModule { }
