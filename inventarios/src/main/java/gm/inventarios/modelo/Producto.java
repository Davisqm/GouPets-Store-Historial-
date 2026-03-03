package gm.inventarios.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProducto;

    private String descripcion;
    private Double precio;
    private Integer existencia;

    // 🔴 ESTE CONSTRUCTOR ES OBLIGATORIO
    public Producto() {
    }

    public Producto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public Producto(String descripcion, Double precio, Integer existencia) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
    }

    public Producto(Integer idProducto, String descripcion, Double precio, Integer existencia) {
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getExistencia() {
        return existencia;
    }

    public void setExistencia(Integer existencia) {
        this.existencia = existencia;
    }
}
