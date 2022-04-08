import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientApiService } from 'src/app/client-api.service';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  clientList$!:Observable<any[]>;
  documentTypeList$!:Observable<any[]>;
  genderTypeList$!:Observable<any[]>;
  documentTypeList:any=[];
  genderTypeList:any=[];

  constructor(private service:ClientApiService) { }


 @Input() client:any;
 cli_Id: number= 0;
 cli_Name: string = "";
 dni: number = 0;
 cliDoc_DocumentType:number= 0;
 cliGenGender: number= 0;
 cli_Active: boolean = false;
 cli_Drive: boolean = false;
 cli_UseGlasses: boolean = false;
 cli_Diabetic:boolean = false;
 cli_OtherDiseases:boolean = false;
 cli_Diseases: string = ""; 

 ngOnInit(): void {
    this.cli_Id = this.client.cli_Id;
    this.cli_Name = this.client.cli_Name;
    this.dni = this.client.dni;
    this.cliDoc_DocumentType = this.client.cliDoc_DocumentType;
    this.cliGenGender = this.client.cliGenGender;
    this.cli_Active = this.client.cli_Active;
    this.cli_Drive = this.client.cli_Drive;
    this.cli_UseGlasses = this.client.cli_UseGlasses;
    this.cli_Diabetic = this.client.cli_Diabetic;
    this.cli_OtherDiseases = this.client.cli_OtherDiseases;
    this.cli_Diseases = this.client.cli_Diseases;
    this.documentTypeList$ = this.service.getDocumentTypes();
    this.genderTypeList$ = this.service.getGenderTypes();
    this.clientList$ = this.service.getClientList();


}
 addClient(){
    var client = {
      cli_Name:this.client.cli_Name,
      dni: this.client.dni,
      cliDoc_DocumentType: this.client.cliDoc_DocumentType,
      cliGenGender: this.client.cliGenGender,
      cli_Active: this.client.cli_Active,
      cli_Drive:this.client.cli_Drive,
      cli_UseGlasses: this.client.cli_UseGlasses,
      cli_Diabetic: this.client.cli_Diabetic,
      cli_OtherDiseases: this.client.cli_OtherDiseases,
      cli_Diseases: this.client.cli_Diseases,
    }
    this.service.addClient(client).subscribe(res=>{
      console.log(client)
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none"
        }
       }, 4000);
    })
 }

 editClient(){
  var client = {
    cli_Id: this.client.cli_Id,
    cli_Name:this.client.cli_Name,
    dni: this.client.dni,
    cliDoc_DocumentType: this.client.cliDoc_DocumentType,
    cliGenGender: this.client.cliGenGender,
    cli_Active: this.client.cli_Active,
    cli_Drive:this.client.cli_Drive,
    cli_UseGlasses: this.client.cli_UseGlasses,
    cli_Diabetic: this.client.cli_Diabetic,
    cli_OtherDiseases: this.client.cli_OtherDiseases,
    cli_Diseases: this.client.cli_Diseases,
  }
  var id: number = this.cli_Id;
  this.service.updateClient(id,client).subscribe(res=>{
    console.log(client.cli_Name+'sad')
    var closeModalBtn = document.getElementById('add-edit-modal-close');
    if(closeModalBtn){
      closeModalBtn.click();
    }
    var showEditdSuccess = document.getElementById('edit-success-alert');
    if(showEditdSuccess){
      showEditdSuccess.style.display = "block";
    }
    setTimeout(function(){
      if(showEditdSuccess){
        showEditdSuccess.style.display = "none"
      }
     }, 4000);
  })
}
}
