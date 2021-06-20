import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private httpclient:HttpClient) {}

  getSetupContext():Observable<any>{
    return this.httpclient.get("http://wcidev:9001/ecouiapservices/rest/1/setupcontextvoapi")
  }  
  getTableDetails(voname:string):Observable<any>{
    return this.httpclient.get("http://wcidev:9001/ecouiapservices/rest/1/"+voname)
  }  
}
