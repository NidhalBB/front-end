import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BonCommande } from 'src/app/achat/commande-fournisseur/commande-fournisseur.component';
import { BonAchat } from 'src/app/achat/demande-achat/demande-achat.component';
import { Fournisseur } from 'src/app/achat/fournisseur/fournisseur.component';
import { Client } from 'src/app/commercial/client/client.component';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
  public save(client :Client) {
    console.log(client);
    return this.http.post<Client>(`${this.baseUrl}`+'createClient',client);
 }
 public findAll(): Observable<Client[]> {
  return this.http.get<Client[]>(`${this.baseUrl}`+'showAllClient');
}
public saveFournisseur(fournisseur :Fournisseur) {
  console.log(fournisseur);
  return this.http.post<Fournisseur>(`${this.baseUrl}`+'createFournisseur',fournisseur);
}
public findAllFournisseur(): Observable<Fournisseur[]> {
return this.http.get<Fournisseur[]>(`${this.baseUrl}`+'showAllFournisseur');
}
public saveBonCommande(bonCommande :BonCommande) {
  console.log(bonCommande);
  return this.http.post<BonCommande>(`${this.baseUrl}`+'createBonCommande',bonCommande);
}
public findAllBonCommande(): Observable<BonCommande[]> {
return this.http.get<BonCommande[]>(`${this.baseUrl}`+'showAllBonCommand');
}
public saveBonAchat(bonAchat:BonAchat) {
  console.log(bonAchat);
  return this.http.post<BonAchat>(`${this.baseUrl}`+'createBonAchat',bonAchat);
}
public findAllBonAchat(): Observable<BonAchat[]> {
return this.http.get<BonAchat[]>(`${this.baseUrl}`+'showAllBonAchat');
}
}
