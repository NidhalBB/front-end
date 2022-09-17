import { Component, OnInit } from '@angular/core';
import { CommercialService } from 'src/app/Services/Commercial/commercial.service';

export class Client{
  public id_client:string;
    public designation:string;
    public address:string;
    public tele:number;
    public compte:number;
    public conditionPaiement:string;
    public siege :string;
    public societe :string;
    public codepostale : number ;
    public pays : string;
    public telesocite :number;
    public ville:string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client :Client;
  clients : Client[];
  constructor(private commercialService :CommercialService) {
    this.client = new Client();
   }
   onSubmit() {
    this.commercialService.save(this.client).subscribe( data => {
        
      console.log(data);
      this.ngOnInit();
    });
     
  }
  ngOnInit(): void {
    this.commercialService.findAll().subscribe(data => {
      this.clients = data;
    })
  }
}
