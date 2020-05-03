import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setLocalStorageItem(name: string, value: any ) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  public getLocalStorageItem(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  removeLocalStorageItem(name: string) {
    localStorage.removeItem(name);
  }

  crlearLocalStorage(){
    localStorage.clear();
  }
}
