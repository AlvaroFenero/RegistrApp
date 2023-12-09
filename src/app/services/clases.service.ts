import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient, private router: Router) {
    
  }




  getClases(): Observable<any> {
    const url = "https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/clase";
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      
    });

    const params = {     
      select: '*'
    };

    return this.http.get<any>(url, { headers, params });
  }

  putQrClases(claseId: string): Observable<any> {
    const url = `https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/clase?id_clase=eq.${claseId}`; // Especifica la condición de filtro en la URL
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
    });
  
    const fechaHora = new Date();
  
    const body = {
      qr: fechaHora, // Asegúrate de usar el nombre correcto del campo en la tabla
    };
  
    return this.http.patch<any>(url, body, { headers });
  }



}