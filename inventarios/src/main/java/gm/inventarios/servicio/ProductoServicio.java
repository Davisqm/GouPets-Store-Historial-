package gm.inventarios.servicio;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gm.inventarios.modelo.Producto;
import gm.inventarios.repositorio.productoRepositorio;

@Service
@Transactional
public class ProductoServicio implements IProductoServicio {

	private final productoRepositorio productoRepositorio;

	public ProductoServicio(productoRepositorio productoRepositorio) {
		this.productoRepositorio = productoRepositorio;
	}

	@Override
	@Transactional(readOnly = true)
	public List<Producto> listarProductos() {
		return productoRepositorio.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Producto buscarProductoPorId(Integer idProducto) {
		return productoRepositorio.findById(idProducto).orElse(null);
	}

	@Override
	public Producto guardarProducto(Producto producto) {
		return productoRepositorio.save(producto);
	}

	@Override
	public void eliminarProductoPorId(Integer idProducto) {
			if (!productoRepositorio.existsById(idProducto)) {
				throw new NoSuchElementException("No existe producto con id: " + idProducto);
			}
			productoRepositorio.deleteById(idProducto);
		}
}
