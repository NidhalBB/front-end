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

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  documents: Documents[];
  document : Documents;
  constructor(private echantillonService: EchantillonService) {
    this.document = new Documents();
   }

   onSubmit() {
    this.echantillonService.upload(this.document.certif).subscribe();
    console.log(this.document.certif)
    
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.echantillonService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.echantillonService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
  ngOnInit(): void {
        this.fileInfos = this.echantillonService.getFiles();

  }

}
