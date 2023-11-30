package com.kh.project.backEnd.project.controller;
import com.kh.project.backEnd.project.dto.StockDto;
import com.kh.project.backEnd.project.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import static com.kh.project.backEnd.project.utils.Common.CORS_ORIGIN;

@RestController
@CrossOrigin(origins = CORS_ORIGIN)
@RequiredArgsConstructor
@RequestMapping("/stock")
public class StockController {
    private final StockService stockService;

    @GetMapping("/topList")
    public ResponseEntity<List<StockDto>> loadTop() {
        List<StockDto> list = stockService.topDataList();
        return ResponseEntity.ok(list);
    }

//    @PostMapping("/news")
//    public ResponseEntity<Boolean> saveNewsData(@RequestBody List<NewsDto> newsDtoList) {
//
//    }
}
