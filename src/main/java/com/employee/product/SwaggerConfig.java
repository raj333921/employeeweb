package com.employee.product;

import static springfox.documentation.builders.PathSelectors.regex;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.employee.product.controller"))
				.paths(regex("/EProduct.*")).build().apiInfo(metaData()).securitySchemes(Arrays.asList(apiKey()));
		// securitySchemes(securitySchemes()).securityContexts(Arrays.asList(securityContext()));
	}

	private ApiInfo metaData() {
		@SuppressWarnings("rawtypes")
		List<VendorExtension> vext = new ArrayList<>();
		ApiInfo apiInfo = new ApiInfo("Spring Boot REST API", "Spring Boot REST API for MProduct", "1.0",
				"Terms of service",
				new Contact("Balachandar Gopalan", "https://www.linkedin.com/in/balachandar-gopalan-b873ba99/",
						"ergbalachandar@gmail.com"),
				"Apache License Version 2.0", "https://www.apache.org/licenses/LICENSE-2.0", vext);
		return apiInfo;
	}

	private ApiKey apiKey() {
		return new ApiKey("jwtToken", "Authorization", "header");
	}
}