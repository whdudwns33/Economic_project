package com.kh.project.backEnd.project.configuration;

import com.kh.project.backEnd.project.constant.RestTem;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppCongig {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
