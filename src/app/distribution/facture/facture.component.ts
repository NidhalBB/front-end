import { Component, OnInit } from '@angular/core';
import { CommandeClient } from 'src/app/commercial/commande-client/commande-client.component';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';

export class Facture{
  public idFacture : string;
  public numF : string; 
  public numC : string;
  public adress:string;
  public matricule : string;
  public date : Date;
}
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  facture : Facture;
  factures :Facture[];
  commandeClients :CommandeClient[];
  constructor(private  commercialService: CommercialService) {
    this.facture = new Facture();
   }

  onSubmit() {
    }

  ngOnInit(): void {
    this.commercialService.findAllCommandeClient().subscribe(data => {
      this.commandeClients = data;
    })
  }

}
