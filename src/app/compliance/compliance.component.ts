import { Component, OnInit } from '@angular/core';
import {ComplianceService} from '../compliance/compliance.service'

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit {

  accountSubmission: any;
  accountColumn: any;
  public mySelection: string[] = [];

  constructor(public ComplianceService: ComplianceService) { }

  ngOnInit(): void {
    this.accountSubmission = this.ComplianceService.submissionforApproval;
    this.accountColumn = this.ComplianceService.columns;
  }

}
