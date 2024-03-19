package com.backend.a3BE.service;

import java.util.List;

import com.backend.a3BE.model.SurveyForm;

public interface SurveyService {
	List<SurveyForm> allSurveys();

    public SurveyForm saveSurvey(SurveyForm survey);

}
