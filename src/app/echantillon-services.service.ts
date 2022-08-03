import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent,HttpHeaders, HttpRequest  } from '@angular/common/http';
import { Echantillon , Labo } from './phase-pre/echantillon/echantillon.component';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
 
  public save(echantillon: Echantillon , labo :Labo) {
    echantillon.SetLabo(labo);
    console.log(echantillon.labo);
    console.log(labo);
    return this.http.post<Echantillon>(`${this.baseUrl}`+'createechantillon',echantillon);
 }
  public findAll(): Observable<Echantillon[]> {
    return this.http.get<Echantillon[]>(`${this.baseUrl}`+'showAll');
  }
 
  public find(id : string) {
    return this.http.get<Echantillon>(`${this.baseUrl}`+`getechantillon/${id}`);
  }

  upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();

      formData.append('file', file);

      const req = new HttpRequest('POST', `${this.baseUrl}`+'addfile', formData, {
      reportProgress: true,
       responseType: 'json'
    });
      console.log(req);
      return this.http.request(req);
    }

}
