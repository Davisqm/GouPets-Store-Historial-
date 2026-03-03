package gm.inventarios.controlador;

import java.util.List;
import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import gm.inventarios.modelo.Producto;
import gm.inventarios.servicio.IProductoServicio;

@RestController
@RequestMapping("/inventario-app") //http://localhost:8081/inventario-app
@CrossOrigin(origins = "http://localhost:4200") 
public class ProductoControlador {

    private final IProductoServicio productoServicio;
    
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    public ProductoControlador(IProductoServicio productoServicio) {
        this.productoServicio = productoServicio;
    }

    // LISTAR TODOS LOS PRODUCTOS
    @GetMapping
    public List<Producto> listarProductos() {
    	List<Producto> productos = productoServicio.listarProductos();
    	logger.info("Productos Obtenidos: ");
    	productos.forEach(producto -> logger.info(producto.toString()));
        return productos;
    }

    // BUSCAR POR ID
    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProductoPorId(@PathVariable Integer id) {
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(producto);
    }

    // CREAR PRODUCTO
    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        Producto productoGuardado = productoServicio.guardarProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(productoGuardado);
    }

    // ACTUALIZAR PRODUCTO
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(
            @PathVariable Integer id,
            @RequestBody Producto producto) {

        Producto productoExistente = productoServicio.buscarProductoPorId(id);
        if (productoExistente == null) {
            return ResponseEntity.notFound().build();
        }

        producto.setIdProducto(id);
        Producto productoActualizado = productoServicio.guardarProducto(producto);
        return ResponseEntity.ok(productoActualizado);
    }

    // ELIMINAR PRODUCTO
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Integer id) {
        try {
            productoServicio.eliminarProductoPorId(id);
            return ResponseEntity.noContent().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
