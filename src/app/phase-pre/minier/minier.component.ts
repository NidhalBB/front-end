import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
   selectedFiles: FileList;
   currentFile: File;
   progress = 0;
   message = '';
   i = 0;
 
   fileInfos: Observable<any>;
   selectFile(event) {
     this.selectedFiles = event.target.files;
   }
   onEdit(id : string ){

    if (this.selectedFiles) {
      let file: File | null = null;
      const formData: FormData = new FormData();
   
      for (let i = 0; i < this.selectedFiles.length; i++) {
         file = this.selectedFiles.item(i);
         if (file) {
            formData.append(`file`, file);
         }
      }
      for ( var key in this.echantillon ) {
        formData.append(key, this.echantillon[key]);
    }
      

    this.echantillonService.upload(formData, id).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
     this.selectedFiles = undefined;
    
  }
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
