package com.backend.a3BE.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.a3BE.exceptions.ResourceNotFoundException;
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
	public SurveyForm updateSurvey(SurveyForm survey, Long id) {
		// TODO Auto-generated method stub
		SurveyForm existingSurvey = surveyRepository.findById(id).get();
		
		if (existingSurvey != null ) {
		System.out.println(existingSurvey.toString());
		if (survey.getFirstName() != null) {
			existingSurvey.setFirstName(survey.getFirstName());
		}
		
		if (survey.getLastName() != null) {
			existingSurvey.setLastName(survey.getLastName());
		}
		if (survey.getEmail() != null) {
			existingSurvey.setEmail(survey.getEmail());
		}
		if (survey.getCity() != null) {
			existingSurvey.setCity(survey.getCity());
		}
		///
		if (survey.getDateOfSurvey() != null) {
			existingSurvey.setDateOfSurvey(survey.getDateOfSurvey());
		}
		
		if (survey.getState() != null) {
			existingSurvey.setState(survey.getState());
		}
		if (survey.getStreetAddress() != null) {
			existingSurvey.setStreetAddress(survey.getStreetAddress());
		}
		if (survey.getTelephoneNumber() != null) {
			existingSurvey.setTelephoneNumber(survey.getTelephoneNumber());
		}
			
		
		
		if (survey.getZip() != null) {
			existingSurvey.setZip(survey.getZip());
		}
		
		if (survey.getInterestedMost() != null) {
			existingSurvey.setInterestedMost(survey.getInterestedMost());;
		}
		if (survey.getLikedMost() != null) {
			existingSurvey.setLikedMost(survey.getLikedMost());
		}
		if (survey.getLikelihood() != null) {
			existingSurvey.setLikelihood(survey.getLikelihood());
		}
		
		if (survey.getAdditionalComments() != null) {
			existingSurvey.setAdditionalComments(survey.getAdditionalComments());
		}
			
			
		System.out.println("EXisting survey");
		System.out.println(existingSurvey.toString());
		
		return surveyRepository.save(existingSurvey);
		} else {
			throw new ResourceNotFoundException(null, null, existingSurvey);
		}
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
