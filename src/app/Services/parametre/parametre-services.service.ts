import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent,HttpHeaders, HttpRequest  } from '@angular/common/http';
import {  ParametreGeo } from '../../donnee-technique/parametre-geo/parametre-geo.component';
import { Observable } from 'rxjs';
import { Echnatillonage } from 'src/app/donnee-technique/echantillonage-varc/echantillonage-varc.component';
import { Chimique } from 'src/app/donnee-technique/physo-chimique/physo-chimique.component';

let  headers= new HttpHeaders({
  'Content-Type':  'application/pdf',
  responseType : 'blob',
  Accept : 'application/pdf',
  observe : 'response'
  });
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
  public upload(para: FormData) {
    return this.http.post<ParametreGeo>(`${this.baseUrl}`+'addparametre', para);
  }
  public uploadfile(para: FormData) {
    return this.http.post<Echnatillonage>(`${this.baseUrl}`+'addvac', para);
  }
  public find(id : string) {
    return this.http.get<Blob>(`${this.baseUrl}`+`getfile/${id}`);
  }
  public uploadchimique(para: FormData) {
    return this.http.post<Chimique>(`${this.baseUrl}`+'addChimique', para);
  }
  
}
