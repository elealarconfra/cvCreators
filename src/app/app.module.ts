import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalInformationComponent } from "./components/forms/personal-information/personal-information.component";
import { PhotoCVComponent } from './components/forms/photo-cv/photo-cv.component';
import { WorkingInformationComponent } from './components/forms/working-information/working-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DatasharingComponent } from './services/datasharing/datasharing.component';


@NgModule({
    declarations: [
        AppComponent,
        DisplayComponent,
        HomeComponent,
        //DatasharingComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        PersonalInformationComponent,
        PhotoCVComponent,
        WorkingInformationComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
