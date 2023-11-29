package com.kh.project.backEnd.project.service;

import com.kh.project.backEnd.project.dto.NewsDto;
import com.kh.project.backEnd.project.entity.News;
import com.kh.project.backEnd.project.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {
//    @Autowired
//    private final NewsRepository newsRepository;

//    public boolean saveNews(List<NewsDto> newsDtoList) {
//        int count = 0;
//        for (NewsDto newsDto : newsDtoList) {
//            News news = new News();
//            news.setNewsTitle(newsDto.getNewsTitle());
//            news.setNewsLink(news.getNewsLink());
//            newsRepository.save(news);
//            count ++;
//        }
//        if(count == newsDtoList.size()) {
//            return true;
//        }
//        else {
//            return false;
//        }
//
//    }
}
