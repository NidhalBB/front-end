import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/Services/parametre/parametre-services.service';
import {Location} from '@angular/common';
export class Chimique {
  public id : string;
  public ph:number;
  public si:number;
  public al:number;
  public fe:number;
  public autre:string;
  public quantite:number;
  public drx:File;
  public sable:number;
  public ag:File;
}

@Component({
  selector: 'app-physo-chimique',
  templateUrl: './physo-chimique.component.html',
  styleUrls: ['./physo-chimique.component.scss']
})
export class PhysoChimiqueComponent implements OnInit {
chimique: Chimique;
chimiques : Chimique[];
selectedFiles: FileList;
selectedFiles2: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  constructor(private parametreService: ParametreService,private _location: Location) { 
    this.chimique = new Chimique();
  }
  backClicked() {
    this._location.back();
  }
  show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  show1(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
   show2(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  selectFile2(event) {
    this.selectedFiles2 = event.target.files;
  }
  upload() {
    if (this.selectedFiles) {
      let file: File | null = null;
      let file2: File | null = null;
      const formData: FormData = new FormData();
   
      for (let i = 0; i < this.selectedFiles.length; i++) {
         file = this.selectedFiles.item(i);
         if (file) {
            formData.append(`file`, file);
         }
      }
      for (let i = 0; i < this.selectedFiles2.length; i++) {
         file2 = this.selectedFiles2.item(i);
         if (file2) {
            formData.append(`file2`, file2);
         }
      }
      for ( var key in this.chimique ) { 
        formData.append(key, this.chimique[key]);
    }
      console.log(formData);

    this.parametreService.uploadchimique(formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      
    });
     this.selectedFiles = undefined;
     this.ngOnInit();
  }}
  onSubmit(){
    console.log(this.chimique);

  }
  ngOnInit(): void {
  }

}
