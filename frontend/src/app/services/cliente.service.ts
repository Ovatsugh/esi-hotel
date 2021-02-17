import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ClienteService {
    
    constructor(private http: HttpClient) { }

    getAddress(cep) { 
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`).toPromise()
    }
}


