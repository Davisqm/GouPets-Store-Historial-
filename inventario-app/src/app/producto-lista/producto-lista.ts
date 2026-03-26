import { Component, inject } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductoServicio } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [],
  templateUrl: './producto-lista.html'
})

export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoServicio);
  private enrutador = inject(Router);

  ngOnInit(){
    //cargamos los productos
    this.obtenerProductos();
  }

  private obtenerProductos():void{
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error: (error) => console.error("Error al obtener los productos", error)
    });
  }

  editarProducto(id: number) {
    this.enrutador.navigate(["editar-producto", id])
  }

  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (error) => console.log("Error al eliminar productos: ", error)
    });
  }
}




