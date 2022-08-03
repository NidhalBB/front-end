import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent,HttpHeaders, HttpRequest  } from '@angular/common/http';
import {  ParametreGeo } from '../../donnee-technique/parametre-geo/parametre-geo.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
  public save(parametreGeo: ParametreGeo , file:File) {
    console.log(file);
    return this.http.post<ParametreGeo>(`${this.baseUrl}`+'addparametre',{parametreGeo,file});
 }
  public findAll(): Observable<ParametreGeo[]> {
    return this.http.get<ParametreGeo[]>(`${this.baseUrl}`+'showAllParametre');
  }
  public edit(id : string) {
    return this.http.get<ParametreGeo>(`${this.baseUrl}`+`getuser/${id}`);
  }
   upload(file: File , parametre :ParametreGeo): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();

      formData.append('file', file);

      const req = new HttpRequest('POST', `${this.baseUrl}`+'addparametre', {formData ,parametre} ,{
        reportProgress: true,
        responseType: 'json'
      });
      console.log(formData);
      console.log(parametre);
      return this.http.request(req);
    }
}
