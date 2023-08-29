import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisplayComponent } from './components/forms/display/display.component';
import { PreviewComponent } from './components/views/preview/preview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'preview', component: PreviewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
