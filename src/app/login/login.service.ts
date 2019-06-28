import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Login } from './login';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private appService: AppService) { }

  login(ObjectValue: Login): Observable<Login> {
    return this.appService.Post('', ObjectValue).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
