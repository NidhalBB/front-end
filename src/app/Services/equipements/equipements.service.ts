import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/donnee-technique/equipements/equipements.component';


@Injectable({
  providedIn: 'root'
})
export class EquipementsService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}`+'showAllEquipements');
  }
  public save(equipements: Equipement ) {
    return this.http.post<Equipement>(`${this.baseUrl}`+'addEquipements',equipements);
 }
}
