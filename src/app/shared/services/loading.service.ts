import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  getLoadingSubject() {
    return this.loadingSubject.asObservable();
  }

  setLoadingSubject(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }

  constructor() { }
  
}
