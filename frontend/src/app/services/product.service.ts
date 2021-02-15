import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class ProductService {
    url = environment.baseUrl;
    constructor(private http: HttpClient) {

    }

    listing(): Promise<any> {
        return this.http.get(`${this.url}/products`).toPromise();
    }

    create(dados: any): Promise<any> {
        return this.http.post(`${this.url}/products`, dados).toPromise();
    }

    salvar(dados: any, id): Promise<any> {
        return this.http.put(`${this.url}/products/${id}`, dados).toPromise();
    }

    getProduct(id): Promise<any> {
        return this.http.get(`${this.url}/products/${id}`).toPromise()
    }

    delete(id): Promise<any> {
        return this.http.delete(`${this.url}/products/${id}`).toPromise()

    }
}