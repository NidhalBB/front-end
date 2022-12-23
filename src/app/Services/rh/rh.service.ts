import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mouvement } from 'src/app/logistique/mvt/mvt.component';
import { Collaborateur } from 'src/app/rh/gcollaborateur/gcollaborateur.component';
import { Competance } from 'src/app/rh/gcompetance/gcompetance.component';
import { Coordonne } from 'src/app/rh/gcoordonne/gcoordonne.component';
import { Poste } from 'src/app/rh/gpostes/gpostes.component';

@Injectable({
  providedIn: 'root'
})
export class RhService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
  public save(collaborateur :Collaborateur) {
    console.log(collaborateur);
    return this.http.post<Collaborateur>(`${this.baseUrl}`+'createCollaborateur',collaborateur);
 }
 public findAll(): Observable<Collaborateur[]> {
  return this.http.get<Collaborateur[]>(`${this.baseUrl}`+'showCollaborateur');
}

public delete(id : string) {
  return this.http.delete<Collaborateur>(`${this.baseUrl}`+`Collaborateur/${id}`);
}
public find(id : string) {
  return this.http.get<Collaborateur>(`${this.baseUrl}`+`getcolab/${id}`);
}

public saveCompetance(competance :Competance) {
  console.log(competance);
  return this.http.post<Competance>(`${this.baseUrl}`+'createCompetance',competance);
}
public findAllCompetance(): Observable<Competance[]> {
return this.http.get<Competance[]>(`${this.baseUrl}`+'showCompetance');
}


public saveCoordonne(coordonne :Coordonne) {
  console.log(coordonne);
  return this.http.post<Coordonne>(`${this.baseUrl}`+'createCoordonne',coordonne);
}
public findAllCoordonne(): Observable<Coordonne[]> {
return this.http.get<Coordonne[]>(`${this.baseUrl}`+'showCoordonne');
}


public savePoste(poste :Poste) {
  console.log(poste);
  return this.http.post<Poste>(`${this.baseUrl}`+'createPostes',poste);
}
public findAllPoste(): Observable<Poste[]> {
return this.http.get<Poste[]>(`${this.baseUrl}`+'showPostes');
}
public saveMvt(mvt :Mouvement) {
  console.log(mvt);
  return this.http.post<Mouvement>(`${this.baseUrl}`+'createMouvement',mvt);
}
public findAllMvt(): Observable<Mouvement[]> {
return this.http.get<Mouvement[]>(`${this.baseUrl}`+'showMouvement');
}

}
