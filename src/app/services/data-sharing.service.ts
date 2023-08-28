import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private nameValue: string = '';

  setNameValue(name: string) {
    this.nameValue = name;
  }

  getNameValue(): string {
    return this.nameValue;
  }
}
