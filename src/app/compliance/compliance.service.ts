import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {
    public submissionforApproval = [{"DeregId":5278,"AccountName":"QA Test Alaska  090921",
    "SubmissionNumber":null,"LayerId":"6NACB7NA001","State":"AR",
    "TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II",
    "CreatedBy":588,"CreatedByDomainId":"cmapa","CreatedByEmailId":null,
    "CreatedOn":"02/10/2022","UpdatedBy":588,"UpdatedByDomainId":"cmapa",
    "UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"",
    "TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},
    {"DeregId":5277,"AccountName":"Hospital 2","SubmissionNumber":null,
    "LayerId":"S901609","State":"VA","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,
    "WritingCompany":"II","CreatedBy":588,"CreatedByDomainId":"cmapa",
    "CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":588,"UpdatedByDomainId":"cmapa","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5276,"AccountName":"\u0027mrudula\u0027  rani","SubmissionNumber":null,"LayerId":"22ACFS94","State":"WA","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1011,"CreatedByDomainId":"DKhurana","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1011,"UpdatedByDomainId":"DKhurana","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5275,"AccountName":"test QA IAM","SubmissionNumber":null,"LayerId":"6NACCRU4001","State":"NV","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1141,"CreatedByDomainId":"NSinha","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1141,"UpdatedByDomainId":"NSinha","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5274,"AccountName":"nikhil Test KT","SubmissionNumber":null,"LayerId":"22ACFRX3","State":"OV","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1051,"CreatedByDomainId":"Nummaneni","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1051,"UpdatedByDomainId":"Nummaneni","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5273,"AccountName":"qa test  212","SubmissionNumber":null,"LayerId":"6NACB85T001","State":"AR","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1139,"CreatedByDomainId":"MRJesta","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1139,"UpdatedByDomainId":"MRJesta","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5272,"AccountName":"qa test  212","SubmissionNumber":null,"LayerId":"6NACB85T001","State":"AK","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1139,"CreatedByDomainId":"MRJesta","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1139,"UpdatedByDomainId":"MRJesta","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5271,"AccountName":"qa  103","SubmissionNumber":null,"LayerId":"23ACEXHQ","State":"FL","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":3,"WritingCompany":"LIUI","CreatedBy":1156,"CreatedByDomainId":"Rjain","CreatedByEmailId":null,"CreatedOn":"02/10/2022","UpdatedBy":1156,"UpdatedByDomainId":"Rjain","UpdatedByEmailId":null,"UpdatedOn":"02/10/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5268,"AccountName":"Jen Cyber test","SubmissionNumber":null,"LayerId":"ABVZRJ 001","State":"WA","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1011,"CreatedByDomainId":"DKhurana","CreatedByEmailId":null,"CreatedOn":"02/07/2022","UpdatedBy":1011,"UpdatedByDomainId":"DKhurana","UpdatedByEmailId":null,"UpdatedOn":"02/07/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null},{"DeregId":5266,"AccountName":"QA MC E\u0026O  2","SubmissionNumber":null,"LayerId":"6NACEI9Y001","State":"WA","TypeOfDeregStatusId":1,"TypeOfLegalEntityId":1,"WritingCompany":"II","CreatedBy":1139,"CreatedByDomainId":"MRJesta","CreatedByEmailId":null,"CreatedOn":"01/14/2022","UpdatedBy":1139,"UpdatedByDomainId":"MRJesta","UpdatedByEmailId":null,"UpdatedOn":"01/14/2022","Comments":"","TypeOfProcessId":null,"TypeOfProcess":null,"AccountStatusId":null}];

    public columns: any[] = [
      {field: "AccountName"},
      { field: "WritingCompany" },
      { field: "State" },
      { field: "SubmissionNumber" },
      { field: "CreatedByDomainId" },
      { field: "CreatedOn" },
      { field: "UpdatedByEmailId" },
      { field: "UpdatedOn" },
    
     
    ];
  constructor() { }
}
