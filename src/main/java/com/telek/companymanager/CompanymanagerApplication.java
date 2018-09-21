package com.telek.companymanager;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.telek.companymanager.dao")
public class CompanymanagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(CompanymanagerApplication.class, args);
    }
}
