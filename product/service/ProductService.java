package com.gavs.product.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.gavs.product.model.Product;
import com.gavs.product.model.ProductRepository;

public class ProductService {
	@Autowired
	private ProductRepository repo;
	public Product save(Product saveProduct) {
		return repo.save(saveProduct);
	}
	public void deleteById(int pid) {
		repo.deleteById(pid);
	}
	public Optional<Product>findById(int pid){
		return repo.findById(pid);
	}

}
