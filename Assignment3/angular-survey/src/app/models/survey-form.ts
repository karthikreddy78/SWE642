export class SurveyForm {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephoneNumber: string;
    email: string;
    dateOfSurvey: Date;
    likedMost: string;
    interestedMost: string;
    likelihood: string;
    additionalComments: string;

    constructor(
        firstName: string,
        lastName: string,
        streetAddress: string,
        city: string,
        state: string,
        zip: string,
        telephoneNumber: string,
        email: string,
        dateOfSurvey: Date,
        likedMost: string,
        interestedMost: string,
        likelihood: string,
        additionalComments: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.dateOfSurvey = dateOfSurvey;
        this.likedMost = likedMost;
        this.interestedMost = interestedMost;
        this.likelihood = likelihood;
        this.additionalComments = additionalComments;
    }


}
