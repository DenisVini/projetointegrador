package perifaDelivery.PerifaBuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import perifaDelivery.PerifaBuy.model.Carrinho;
import perifaDelivery.PerifaBuy.repository.CarrinhoRepository;

@RestController
@RequestMapping("/carrinho") // ALTERAR ISSO PRA CLASSE DESEJADA
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CarrinhoController implements WebMvcConfigurer {
	public void addViewControllers(ViewControllerRegistry index) {
		index.addViewController("/").setViewName("forward:/index.html");
	}

	@Autowired
	private CarrinhoRepository repository;
	
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Carrinho>> getAllCarrinho(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping ("/getById/{id}")
	public ResponseEntity <Carrinho> getById(@PathVariable Long id){	
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	/*@GetMapping("/meu_carrinho/{id}")
	public ResponseEntity<Carrinho> getById(@PathVariable Long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}*/
	
	/*@GetMapping("/historico_compras")
	public ResponseEntity<List<Carrinho>> GetAll()
	{
		return ResponseEntity.ok(repository.findAll());
	}*/
	
	@PostMapping("/post")
	public ResponseEntity<Carrinho> post(@RequestBody Carrinho objeto)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(objeto));
	}
	
	@PutMapping("/put/{id}")
	public ResponseEntity<Carrinho> put(@RequestBody Carrinho objeto)
	{
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(objeto));
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	
	
}
