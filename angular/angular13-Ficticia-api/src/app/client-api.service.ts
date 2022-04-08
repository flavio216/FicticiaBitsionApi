import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  readonly clientUrl = 'https://localhost:7048/api';

  constructor(private http: HttpClient) { }

  getClientList():Observable<any[]>{
    return this.http.get<any>(this.clientUrl+ '/clients');
  }

  addClient(data: any){
    return this.http.post<any>(this.clientUrl + '/clients', data);
  }

  updateClient(id:number|string, data:any){
    return this.http.put<any>(this.clientUrl +`/clients/${id}`, data);
  }

  deleteClient(id:number|string){
    return this.http.delete<any>(this.clientUrl +`/clients/${id}`);
  }

  //DocumnetTypes

  getDocumentTypes():Observable<any[]>{
    return this.http.get<any>(this.clientUrl+'/documenttypes');
  }

  addDocumnetTypes(data: any){
    return this.http.post<any>(this.clientUrl + '/documentTypes', data);
  }

  updateDocumnetTypes(id:number|string, client:any){
    return this.http.put<any>(this.clientUrl +`/documnetTypes/${id}`, client);
  }

  deleteDocumnetTypes(id:number|string){
    return this.http.delete<any>(this.clientUrl +`/documnetTypes/${id}`);
  }

    //GenderTypes

    getGenderTypes():Observable<any[]>{
      return this.http.get<any>(this.clientUrl+ '/genderTypes');
    }
  
    addGenderTypes(data: any){
      return this.http.post<any>(this.clientUrl + '/genderTypes', data);
    }
  
    updateGenderTypes(id:number|string, client:any){
      return this.http.put<any>(this.clientUrl +`/genderTypes/${id}`, client);
    }
  
    deleteGenderTypes(id:number|string){
      return this.http.delete<any>(this.clientUrl +`/genderTypes/${id}`);
    }

}
