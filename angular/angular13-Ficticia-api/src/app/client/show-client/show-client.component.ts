import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientApiService } from 'src/app/client-api.service';
@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent implements OnInit {

  clientList$!:Observable<any[]>;
  documentTypeList$!:Observable<any[]>;
  genderTypeList$!:Observable<any[]>;
  documentTypeList:any=[];
  genderTypeList:any=[];

  documentTypeMap:Map<number,string> = new Map()
  genderTypeMap:Map<number, string> = new Map()
  constructor(private service:ClientApiService) { }

  ngOnInit(): void {
    this.clientList$ = this.service.getClientList();
    this.documentTypeList$ = this.service.getDocumentTypes();
    this.genderTypeList$ = this.service.getGenderTypes();
    this.refreshDocumentTypeMap();
    this.refreshGenderTypeMap();
  }

  modalTitle:string = '';
  activateAddEditClientComponent: boolean = false;
  client:any;

modalAdd(){
  this.client ={
    cli_Id: 0,
    cli_Name: null,
    dni: 0,
    cliDoc_DocumentType: 0,
    cliGenGender: 0,
    cli_Active: false,
    cli_Drive: false,
    cli_UseGlasses: false,
    cli_Diabetic: false,
    cli_OtherDiseases: false,
    cli_Diseases: null,
  }
  this.modalTitle = "Add Client";
  this.activateAddEditClientComponent = true;
}

modalEdit(item:any){
this.client = item;
this.modalTitle = "Edit Client";
this.activateAddEditClientComponent = true;
}

delete(item:any){
if(confirm(`Are you sure you want to delete this client ${item.cli_Id}`)){
  this.service.deleteClient(item.cli_Id).subscribe(res =>{
    var closeModalBtn = document.getElementById('delete-edit-modal-close');
    if(closeModalBtn){
      closeModalBtn.click();
    }
    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess){
      showDeleteSuccess.style.display = "block";
    }
    setTimeout(function(){
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "none"
      }
     }, 4000);
     this.clientList$ = this.service.getClientList();
     console.log(this.clientList$);
  })
}
}

modalClose(){
  this.activateAddEditClientComponent = false;
  this.clientList$ = this.service.getClientList();
}

refreshDocumentTypeMap(){
  this.service.getDocumentTypes().subscribe(data =>{
    this.documentTypeList = data;

    for(let i = 0; i < data.length; i++){
      this.documentTypeMap.set(this.documentTypeList[i].id,this.documentTypeList[i].documentType);
    } 
  })
}

refreshGenderTypeMap(){
  this.service.getGenderTypes().subscribe(data =>{
    this.genderTypeList = data;

    for(let i = 0; i < data.length; i++){
      this.genderTypeMap.set(this.genderTypeList[i].id,this.genderTypeList[i].gender);
    } 
  })
}
}
