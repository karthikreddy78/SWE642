package com.backend.a3BE.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.a3BE.model.SurveyForm;
import com.backend.a3BE.repository.SurveyRepository;
import com.backend.a3BE.service.SurveyService;

@Service
public class SurveyServiceImpl implements SurveyService{

	@Autowired
	private SurveyRepository surveyRepository;
	@Override
	public List<SurveyForm> allSurveys() {
		// TODO Auto-generated method stub
		return (List<SurveyForm>) surveyRepository.findAll();
	}

	@Override
	public SurveyForm saveSurvey(SurveyForm survey) {
		// TODO Auto-generated method stub
		System.out.println(survey.toString());
		return surveyRepository.save(survey);
		
	}

	@Override
	public SurveyForm updateSurvey(SurveyForm survey) {
		// TODO Auto-generated method stub
		
		System.out.println(survey.toString());
		
		return surveyRepository.save(survey);
	}

	@Override
	public void deleteSurvey(Long id) {
		// TODO Auto-generated method stub
		System.out.println(id);
		SurveyForm survey = surveyRepository.findById(id).get();
		
		System.out.println(survey.toString());
		surveyRepository.delete(survey);
	}

}
