import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donnee } from 'src/app/extraction/donnees-extraction/donnees-extraction.component';
import { Quantite } from 'src/app/extraction/quantite/quantite.component';
import { Operation } from 'src/app/prod/operation/operation.component';
import { Process } from 'src/app/prod/process/process.component';

@Injectable({
  providedIn: 'root'
})

export class MinierService {

  private baseUrl = 'http://localhost:8085/'; 
  constructor(private http: HttpClient) {
  }
  public save(donnee :Donnee) {
    console.log(donnee);
    return this.http.post<Donnee>(`${this.baseUrl}`+'createDonneesExtraction',donnee);
 }
 public findAll(): Observable<Donnee[]> {
  return this.http.get<Donnee[]>(`${this.baseUrl}`+'showDonneesExtraction');
}

public saveQ(quantite :Quantite) {
  console.log(quantite);
  return this.http.post<Quantite>(`${this.baseUrl}`+'createQuantiteMinier',quantite);
}
public findAllQ(): Observable<Quantite[]> {
return this.http.get<Quantite[]>(`${this.baseUrl}`+'showQuantiteMinier');
}

public saveO(operation :Operation) {
  console.log(operation);
  return this.http.post<Operation>(`${this.baseUrl}`+'createOperation',operation);
}
public findAllO(): Observable<Operation[]> {
return this.http.get<Operation[]>(`${this.baseUrl}`+'showAllOperation');
}


public saveP(process :Process) {
  console.log(process);
  return this.http.post<Process>(`${this.baseUrl}`+'createProcess',process);
}
public findAllP(): Observable<Process[]> {
return this.http.get<Process[]>(`${this.baseUrl}`+'showAllProcess');
}
}
