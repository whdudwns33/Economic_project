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
