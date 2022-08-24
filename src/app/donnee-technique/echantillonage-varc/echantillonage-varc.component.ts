import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParametreService } from 'src/app/Services/parametre/parametre-services.service';
 
export class Echnatillonage {
public id :string;
public file1 :File;
public file2:File;
public file3 :File;
}

@Component({
  selector: 'app-echantillonage-varc',
  templateUrl: './echantillonage-varc.component.html',
  styleUrls: ['./echantillonage-varc.component.scss']
})
export class EchantillonageVarcComponent implements OnInit {
  selectedFiles: FileList;
  selectedFiles2: FileList;
  selectedFiles3: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  i = 0;
  echantillon :Echnatillonage;
  echantillons : Echnatillonage[];
  constructor(private parametreService: ParametreService) {
    this.echantillon = new Echnatillonage();
   } 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  selectFile2(event) {
    this.selectedFiles2 = event.target.files;
  }
  selectFile3(event) {
    this.selectedFiles3 = event.target.files;
  }
  upload() {
   
      const formData: FormData = new FormData();
      let file: File | null = null;
      let file1: File | null = null;
      let file2: File | null = null;
      file = this.selectedFiles.item(0);
      file1 = this.selectedFiles2.item(0);
      file2 = this.selectedFiles3.item(0);
      formData.append('file',file);
      formData.append('file2',file2);
      formData.append('file1',file1)
      for ( var key in this.selectedFiles ) { 
        formData.append(key, this.selectedFiles[key]);
    }
console.log(formData.get('file'));
    
this.parametreService.uploadfile(formData).subscribe({
  next: (response) => console.log(response),
  error: (error) => console.log(error),
  
});
 this.selectedFiles = undefined;
 this.ngOnInit();
  }

  ngOnInit(): void {
  }

}
