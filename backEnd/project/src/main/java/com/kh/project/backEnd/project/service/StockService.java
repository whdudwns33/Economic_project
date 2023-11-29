package com.kh.project.backEnd.project.service;

import com.kh.project.backEnd.project.dto.StockDto;
import com.kh.project.backEnd.project.entity.Stock;
import com.kh.project.backEnd.project.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockService {
    @Autowired
    StockRepository stockRepository;

    public boolean saveTopData(List<StockDto> stocks) {
        int count = 0;
        // StockDto stockDto : stocks => 향상된 for문 활용
        stockRepository.deleteAll();
        for (int i = 0; i < stocks.size(); i++) {
            Stock stock = new Stock();
            stock.setName(stocks.get(i).getName());
            stock.setPrice(stocks.get(i).getPrice());
            stock.setUpDown(stocks.get(i).getUpDown());
            stock.setRate(stocks.get(i).getRate());
            stockRepository.save(stock);
            count ++;
            System.out.println("데이터 저장 성공");
        }
        if (stocks.size() == count) {
            return true;
        }
        else return false;
    }

    public List<StockDto> topDataList() {
        try {
            List<StockDto> stockDtoList = new ArrayList<>();
            List<Stock> stockList = stockRepository.findAll();
            for (Stock stock : stockList) {
                StockDto stockDto = new StockDto();
                stockDto.setName(stock.getName());
                stockDto.setPrice(stock.getPrice());
                stockDto.setUpDown(stock.getUpDown());
                stockDto.setRate(stock.getRate());
                stockDtoList.add(stockDto);
            }
            return stockDtoList;
        }
        catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
