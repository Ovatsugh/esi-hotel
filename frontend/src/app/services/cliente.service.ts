import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment';


@Injectable({
    providedIn: "root"
})
export class ClienteService {
    
    url = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getAddress(cep) { 
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`).toPromise()
    }

    listing(): Promise<any> {
        return this.http.get(`${this.url}/clientes`).toPromise();
    }

    delete(id): Promise<any> {
        return this.http.delete(`${this.url}/clientes/${id}`).toPromise()

    }

    create(dados: any): Promise<any> {
        return this.http.post(`${this.url}/clientes`, dados).toPromise();
    }

    salvar(dados: any, id): Promise<any> {
        return this.http.put(`${this.url}/clientes/${id}`, dados).toPromise();
    }
    getClient(id): Promise<any> {
        return this.http.get(`${this.url}/clientes/${id}`).toPromise()
    }
}


