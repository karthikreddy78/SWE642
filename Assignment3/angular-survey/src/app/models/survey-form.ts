//class to create a model
export class SurveyForm {
    id:number = 0;
    firstName: string='';
    lastName: string='';
    streetAddress: string ='';
    city: string='';
    state: string='';
    zip: string='';
    telephoneNumber: string='';
    email: string='';
    dateOfSurvey: Date | null = null;
    likedMost: any;
    interestedMost: string='';
    likelihood: string='';
    additionalComments: string='';

    constructor(){}
}
