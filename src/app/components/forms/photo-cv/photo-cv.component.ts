import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-photo-cv',
  templateUrl: './photo-cv.component.html',
  styleUrls: ['./photo-cv.component.css'],
  standalone: true,
  imports:[MatButtonModule, MatCardModule, MatFormFieldModule]
})
export class PhotoCVComponent implements OnInit {
  public archivos: any[] = []; // Cambié "archivos" a un array vacío []
  public loading = false; // Inicialicé "loading" en "false"
  public displayedImage: any = "https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png";

  constructor() {}

  ngOnInit(): void {}

  captureFile(event: any): void {
    const capturePhoto = event.target.files[0]; // Corregí "event.target.file" a "event.target.files"
    this.archivos.push(capturePhoto); // Usé "push" para agregar el archivo al array "archivos"

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.displayedImage = e.target.result;
    };
    reader.readAsDataURL(capturePhoto);
  }

  uploadFile(): void {
    try {
      this.loading = true;
      const formDataPhoto = new FormData();
      this.archivos.forEach(archivos => {
        formDataPhoto.append('archivos', archivos); // Agregué "archivo" como nombre del campo en FormData
      });

      // Simulando una llamada a la carga de foto con FormData
      setTimeout(() => {
        this.loading = false;
        console.log('Foto cargada exitosamente');
      }, 2000); // Simulación de carga exitosa después de 2 segundos
    } catch (error) {
      this.loading = false;
      console.error('Error al cargar la foto', error);
    }
  }
}
