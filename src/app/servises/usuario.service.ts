import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
  
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getusuarios(): Observable<any> {
    const url = "https://efxijvvxlfnfjjjugldg.supabase.co/rest/v1/usuarios"
    const headers = new HttpHeaders({
      'apikey': environment.supabaseKey,
      'Authorization': `Bearer ${environment.supabaseKey}`,
      
    });
  
    const params = {
      select: '*'
    };
  
    return this.http.get<any>(url, { headers, params });
  }




}
