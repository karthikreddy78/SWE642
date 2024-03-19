package com.backend.a3BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.a3BE.model.SurveyForm;

@Repository
public interface SurveyRepository extends JpaRepository<SurveyForm, Long>{
	

}
