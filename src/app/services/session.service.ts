import { Injectable } from '@angular/core';
import { AuthInfo } from '../entities/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }

  getAuthInfo(): AuthInfo | null {
    return null; //todo
  }
}
