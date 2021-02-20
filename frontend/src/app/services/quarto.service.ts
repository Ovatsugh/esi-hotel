import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment';


@Injectable({
    providedIn: "root"
})
export class QuartoService {
    
    url = environment.baseUrl;
    constructor(private http: HttpClient) { }

    listing(): Promise<any> {
        return this.http.get(`${this.url}/quartos`).toPromise();
    }

    getQuartos(id): Promise<any> {
        return this.http.get(`${this.url}/quartos/${id}`).toPromise()
    }
    
    create(dados: any): Promise<any> {
        return this.http.post(`${this.url}/quartos`, dados).toPromise();
    }

    salvar(dados: any, id): Promise<any> {
        return this.http.put(`${this.url}/quartos/${id}`, dados).toPromise();
    }
    
    delete(id): Promise<any> {
        return this.http.delete(`${this.url}/quartos/${id}`).toPromise()
    }



    //reception
    getReception(): Promise<any> {
        return this.http.get(`${this.url}/reception`).toPromise()
    }
}


