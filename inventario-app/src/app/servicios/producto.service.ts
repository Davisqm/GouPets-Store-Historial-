import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoServicio {
  private urlBase = "http://localhost:8081/inventario-app";

  constructor (private clienteHttp: HttpClient){}

    obtenerProductosLista(): Observable<Producto[]>{
      return this.clienteHttp.get<Producto[]>(this.urlBase);
    }

    agregarProducto(producto: Producto): Observable<object>{
      return this.clienteHttp.post(this.urlBase, producto);
    }

    obtenerProductoPorId(id: number){
      return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
    }

    editarProducto(id: number, producto: Producto): Observable<object> {
      return this.clienteHttp.put(` ${this.urlBase}/${id}`, producto);
    }

    eliminarProducto(id: number): Observable<object>{
      return this.clienteHttp.delete(` ${this.urlBase}/${id}`)
    }

}
