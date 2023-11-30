package com.kh.project.backEnd.project.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kh.project.backEnd.project.dto.StockDto;
import com.kh.project.backEnd.project.entity.Stock;
import com.kh.project.backEnd.project.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;


@Slf4j
@Service
@RequiredArgsConstructor
public class StockSkedulerService {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final StockService stockService;
    private final StockRepository stockRepository;
    @Scheduled(fixedRate = 600000)
    public void performCrawling() throws JsonProcessingException {
        // Flask 애플리케이션의 stockTop 엔드포인트에 POST 요청 보내기
        String url = "http://localhost:5000/api/stockTop";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        String stockData = response.getBody();
        System.out.println(stockData);

        List<Map<String,String >> stockDtoList = objectMapper.readValue(stockData, new TypeReference<List<Map<String,String >>>() {});
        System.out.println(stockDtoList);

        stockRepository.deleteAll();
        for (Map<String,String> data : stockDtoList) {
            Stock stock = new Stock();
            stock.setName(data.get("name"));
            stock.setPrice(data.get("price"));
            stock.setUpDown(data.get("upDown"));
            stock.setRate(data.get("rate"));
            stockRepository.save(stock);
        }
        System.out.println("주식 데이터 저장 성공");
    }
}

