import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/machines/equipements/equipements.component';
import { FamillMachine } from 'src/app/machines/famille-machine/famille-machine.component';


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
 public delete(id : string) {
  return this.http.delete<Equipement>(`${this.baseUrl}`+`equipement/${id}`);
}
 public find(id : string) {
  return this.http.get<Equipement>(`${this.baseUrl}`+`machines/${id}`);
}
public findAllFamille(): Observable<FamillMachine[]> {
  return this.http.get<FamillMachine[]>(`${this.baseUrl}`+'showAllFamilleMachine');
}
public saveFamille(famillMachine: FamillMachine ) {
  return this.http.post<FamillMachine>(`${this.baseUrl}`+'addFamilleMachine',famillMachine);
}
public deleteFam(id : string) {
  return this.http.delete<FamillMachine>(`${this.baseUrl}`+`FamilleMachine/${id}`);
}
}
