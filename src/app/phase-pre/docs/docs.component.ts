import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EchantillonService } from 'src/app/echantillon-services.service';


export class Documents {
  id: String;
  name: String ;
  contentType: String ;
  size: number;
  file: File;
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  documents: Documents[];
  document : Documents;
  constructor(private echantillonService: EchantillonService) {
    this.document = new Documents();
   }

   onSubmit() {
    this.echantillonService.upload(this.document.file).subscribe();
    console.log(this.document.file)
    
  }
  ngOnInit(): void {
    
  }

}
