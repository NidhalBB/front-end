import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EchantillonService } from 'src/app/echantillon-services.service';


export class Documents {
  id: String;
  name: String ;
  contentType: String ;
  size: number;
  certif: File;
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  
  ngOnInit(): void {
  }

}
