import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { PhotoCVComponent } from "../photo-cv/photo-cv.component";
//import { DataSharingService } from '../data-sharing.service';


@Component({
    selector: 'app-personal-information',
    templateUrl: './personal-information.component.html',
    styleUrls: ['./personal-information.component.css'],
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, NgIf, ReactiveFormsModule, PhotoCVComponent]
})
export class PersonalInformationComponent implements OnInit{
  dataForm!: FormGroup;  // Definición del grupo de formularios
  name:string | undefined ;



  constructor(
    private formBuilder: FormBuilder,
    //private dataSharingService: DataSharingServicex
    ) {}

  ngOnInit() {
    // Inicializar el grupo de formularios en el ngOnInit
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  prueba(){
    console.log('alksdhfkjlh');
    console.log(this.dataForm);
  }

  setName(){

  }
  get email() {
    return this.dataForm.get('email');
  }

  getErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    return this.email?.hasError('email') ? 'Correo no válido' : '';
  }

  // // saveInformation() {
  //   // Lógica para guardar la información
  // }
}
