import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()
export class BooksService
{
private url= 'https://localhost:44382/api/bookstore';
//lembrar que deve fazer a alteração pela URL da propria API criada

httpOptions= {
    Headers: new HttpHeaders({'content-type': 'application/json'})}
}

constructor(private http:HttpClient){}


getBook(){
    return this.http.get(this.url);
}