import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labo } from 'src/app/gestion/labo/labo.component';
import { Magasins } from 'src/app/gestion/magasins/magasins.component';
import { Produit } from 'src/app/gestion/produit/creation-produit/creation-produit.component';
import { FamillProduit } from 'src/app/gestion/produit/famille-produit/famille-produit.component';
import { MatiereAcquise } from 'src/app/gestion/produit/matiereacquise/matiereacquise.component';
import { ProduitSemiFini } from 'src/app/gestion/produit/produit-semifini/produit-semifini.component';
import { ProduitFini } from 'src/app/gestion/produit/produitfini/produitfini.component';
import { SousFamille } from 'src/app/gestion/produit/sous-famille/sous-famille.component';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  } 
  public save(labo :Labo) {
    console.log(labo);
    return this.http.post<Labo>(`${this.baseUrl}`+'createlabo',labo);
 }
 public findAll(): Observable<Labo[]> {
  return this.http.get<Labo[]>(`${this.baseUrl}`+'showAllLabo');
}

public saveMagasins(magasins :Magasins ) {
  console.log(magasins);
  return this.http.post<Magasins>(`${this.baseUrl}`+'createMagasins',magasins);
}
public findAllMagasins(): Observable<Magasins[]> {
return this.http.get<Magasins[]>(`${this.baseUrl}`+'showAllMagasins');
}
public saveFamille(famille :FamillProduit) {
  console.log(famille);
  return this.http.post<FamillProduit>(`${this.baseUrl}`+'createfamilleProduits',famille);
}
public findAllFamille(): Observable<FamillProduit[]> {
return this.http.get<FamillProduit[]>(`${this.baseUrl}`+'showAllfamilleProduit');
}
public saveSousFam(sousFamille :SousFamille) {
  console.log(sousFamille);
  return this.http.post<SousFamille>(`${this.baseUrl}`+'createSousfamille',sousFamille);
}
public findAllSouFam(): Observable<SousFamille[]> {
return this.http.get<SousFamille[]>(`${this.baseUrl}`+'showAllSousfamille');
}

public saveProduitFini(produitfini :ProduitFini) {
  console.log(produitfini);
  return this.http.post<ProduitFini>(`${this.baseUrl}`+'createproduitOuvrage',produitfini);
}
public findAllProduitFini(): Observable<ProduitFini[]> {
return this.http.get<ProduitFini[]>(`${this.baseUrl}`+'showAllproduitOuvrage');
}

public saveProduitSemi(produitSemi :ProduitSemiFini) {
  console.log(produitSemi);
  return this.http.post<ProduitSemiFini>(`${this.baseUrl}`+'createproduitSemiFini',produitSemi);
}
public findAllProduitSemi(): Observable<ProduitSemiFini[]> {
return this.http.get<ProduitSemiFini[]>(`${this.baseUrl}`+'showAllproduitSemiFini');
}

public saveMatiere(matiereAcquise :MatiereAcquise) {
  console.log(matiereAcquise);
  return this.http.post<MatiereAcquise>(`${this.baseUrl}`+'creatematiereAcquise',matiereAcquise);
}
public findAllMatiere(): Observable<MatiereAcquise[]> {
return this.http.get<MatiereAcquise[]>(`${this.baseUrl}`+'showAllmatiereAcquise');
}
public saveProduit(produit :Produit) {
  console.log(produit);
  return this.http.post<Produit>(`${this.baseUrl}`+'createProduit',produit);
}
public findAllProduit(): Observable<Produit[]> {
return this.http.get<Produit[]>(`${this.baseUrl}`+'showAllProduit');
}


}
