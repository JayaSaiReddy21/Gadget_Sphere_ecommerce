package com.gadget.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gadget.model.Product;



@Repository
public interface ProductRepository extends JpaRepository<Product,Integer>{
	
	// find product by name
		@Query(value = "select * from product s where s.Product_Name=?1",nativeQuery = true)
		public List<Product> getProductByName(String productName);

}

