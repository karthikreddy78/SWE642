package com.backend.a3BE.model;

import java.util.Date;

import org.hibernate.validator.constraints.Email;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "survey")
public class SurveyForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "First name is required")
    @Column(name = "firstName")
    private String firstName;

    @NotNull(message = "Last name is required")
    @Column(name = "lastName")
    private String lastName;

    @NotNull(message = "StreetAddress is required")
    @Column(name = "streetAddress")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zip")
    private String zip;

    @Pattern(regexp="\\(\\d{3}\\)\\s\\d{3}-\\d{4}", message="Invalid Telephone number format")
    @Column(name = "telephoneNumber")
    private String telephoneNumber;

    @Email(message = "Invalid email format")
    @Column(name = "email")
    private String email;

    @JsonFormat(pattern = "MM-dd-yyyy")
    @Column(name = "dateOfSurvey")
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private Date dateOfSurvey;

    @Column(name = "likedMost")
    private String likedMost;

    @Column(name = "interestedMost")
    private String interestedMost;

    @Column(name = "likelihood")
    private String likelihood;

    @Column(name = "additionalComments")
    private String additionalComments;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(Date dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public String getLikedMost() {
        return likedMost;
    }

    public void setLikedMost(String likedMost) {
        this.likedMost = likedMost;
    }

    public String getInterestedMost() {
        return interestedMost;
    }

    public void setInterestedMost(String interestedMost) {
        this.interestedMost = interestedMost;
    }

    public String getLikelihood() {
        return likelihood;
    }

    public void setLikelihood(String likelihood) {
        this.likelihood = likelihood;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
    
    @Override
    public String toString() {
        return "SurveyResponse{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", dateOfSurvey=" + dateOfSurvey +
                ", likedMost='" + likedMost + '\'' +
                ", interestedMost='" + interestedMost + '\'' +
                ", likelihood=" + likelihood +
                ", additionalComments='" + additionalComments + '\'' +
                '}';
    }
}
