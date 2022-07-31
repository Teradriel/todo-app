import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  Email: any;
  constructor() {}

  sendMensaje(mensaje: Message): Observable<any> {
    this.Email.send({
      Host: 'smtp.elasticemail.com',
      username: 'inglterzariol@gmail.com',
      password: 'D09269E41B75593D1CC58B46650D1E446DD2',
      To: 'inglterzariol@gmail.com',
      From: mensaje.email,
      Subject: 'Mensajes de usuario - TASK APP Alexis ',
      Body: mensaje.mensaje,
    });
    return new Observable<any>();
  }
}
