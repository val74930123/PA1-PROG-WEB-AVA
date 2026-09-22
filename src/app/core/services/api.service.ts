import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos el HttpClient para hacer la petición
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Inyectamos el HttpClient en el constructor del servicio
  constructor(private http: HttpClient) { }

  
  obtenerDatosDePrueba(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users?_limit=5'); // Hacemos la petición GET a la API REST y limitamos a 5 resultados
  }
}