import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EchantillonService } from 'src/app/echantillon-services.service';
import { Echantillon } from '../echantillon/echantillon.component';

@Component({
  selector: 'app-minier',
  templateUrl: './minier.component.html',
  styleUrls: ['./minier.component.scss']
})

export class MinierComponent implements OnInit {
  echantillons: Echantillon[];
  echantillon : Echantillon;
  constructor(private echantillonService: EchantillonService ,private route: ActivatedRoute) {
   
   }

   onEdit(id : string ){

   }
  ngOnInit(): void {
    this.echantillon = new Echantillon();
    this.echantillon.id=this.route.snapshot.params['id'];
    this.echantillonService.find(this.echantillon.id).subscribe(data => {
      this.echantillon = data;
    });
    console.log(this.echantillon);
  }

}
