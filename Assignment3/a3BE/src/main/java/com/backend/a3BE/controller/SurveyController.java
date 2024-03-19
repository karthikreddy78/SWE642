package com.backend.a3BE.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.backend.a3BE.model.SurveyForm;
import com.backend.a3BE.service.SurveyService;

@RestController
@RequestMapping("/survey")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @GetMapping(value = "/findAll")
    public List<SurveyForm> findAll() {
        return surveyService.allSurveys();
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public SurveyForm create(@RequestBody SurveyForm resource) {
    	System.out.println(resource);
        return surveyService.saveSurvey(resource);
    }

    

}
