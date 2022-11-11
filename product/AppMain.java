package com.gavs.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication

public class AppMain {

	public static void main(String[] args) {
		SpringApplication.run(AppMain.class, args);
		System.out.println("Connected");
	}
}