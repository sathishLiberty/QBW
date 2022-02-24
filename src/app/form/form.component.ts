import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  items: any;
  states = [{ "Disabled": false, "Group": null, "Selected": false, "Text": "Alaska", "Value": "AK" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "Alabama", "Value": "AL" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "Arkansas", "Value": "AR" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "Arizona", "Value": "AZ" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "California", "Value": "CA" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "Colorado", "Value": "CO" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "Connecticut", "Value": "CT" }, 
  { "Disabled": false, "Group": null, "Selected": false, "Text": "District of Columbia", "Value": "DC" },
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Delaware", "Value": "DE" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Florida", "Value": "FL" },
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Georgia", "Value": "GA" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Hawaii", "Value": "HI" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Iowa", "Value": "IA" },
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Idaho", "Value": "ID" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Illinois", "Value": "IL" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Indiana", "Value": "IN" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Kansas", "Value": "KS" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Kentucky", "Value": "KY" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Louisiana", "Value": "LA" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Massachusetts", "Value": "MA" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Maryland", "Value": "MD" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Maine", "Value": "ME" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Michigan", "Value": "MI" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Minnesota", "Value": "MN" },
      { "Disabled": false, "Group": null, "Selected": false, "Text": "Missouri", "Value": "MO" }, 
      { "Disabled": false, "Group": null, "Selected": false, "Text": "Mississippi", "Value": "MS" },
       { "Disabled": false, "Group": null, "Selected": false, "Text": "Montana", "Value": "MT" },
  
   ];

   states2 = [  { "Disabled": false, "Group": null, "Selected": false, "Text": "North Carolina", "Value": "NC" },               
   { "Disabled": false, "Group": null, "Selected": false, "Text": "North Dakota", "Value": "ND" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Nebraska", "Value": "NE" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "New Hampshire", "Value": "NH" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "New Jersey", "Value": "NJ" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "New Mexico", "Value": "NM" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Nevada", "Value": "NV" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "New York", "Value": "NY" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "NYFTZ", "Value": "NYFTZ" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Ohio", "Value": "OH" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Oklahoma", "Value": "OK" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Oregon", "Value": "OR" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Pennsylvania", "Value": "PA" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Puerto Rico", "Value": "PR" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "Rhode Island", "Value": "RI" }, 
   { "Disabled": false, "Group": null, "Selected": false, "Text": "South Carolina", "Value": "SC" },
    { "Disabled": false, "Group": null, "Selected": false, "Text": "South Dakota", "Value": "SD" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Tennessee", "Value": "TN" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Texas", "Value": "TX" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Utah", "Value": "UT" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Virginia", "Value": "VA" }, 
    { "Disabled": false, "Group": null, "Selected": false, "Text": "Virgin Islands", "Value": "VI" },
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Vermont", "Value": "VT" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Washington", "Value": "WA" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "Wisconsin", "Value": "WI" }, 
     { "Disabled": false, "Group": null, "Selected": false, "Text": "West Virginia", "Value": "WV" },
      { "Disabled": false, "Group": null, "Selected": false, "Text": "Wyoming", "Value": "WY" }];

  public productItems: any;
  public addFormTab: boolean = true;
  public updateFormTab: boolean = false;
  public searchFormTab: boolean = false;
  public selectStatesTab: boolean = false;
  public underwriterViewTab: boolean = false;
  public writingComDD: Array<string> = ["Item 1", "Item 2", "Item 3"];
  public effDatevalue: Date = new Date(1960, 1, 1);
  public expDatevalue: Date = new Date(2060, 31, 12);
  public expandedKeys: any[] = ["0","1","1_0", "1_1","1_0_0","1_0_1","1_1_0", "2"];
  constructor( public formService: FormService) { }

  ngOnInit(): void {
    this.productItems = this.formService.getBooks();
  }

  public addForm(){
    this.addFormTab = true;
    this.updateFormTab = false;
    this.searchFormTab = false;
    this.underwriterViewTab = false;
    this.selectStatesTab = false;

    $('#addForm').addClass('active');
    $('#updateForm').removeClass('active');
    $('#searchForm').removeClass('active');
    $('#selectStates').removeClass('active');
    $('#underwriterView').removeClass('active');
    
  }

  public updateForm(){
    this.addFormTab = false;
    this.updateFormTab = true;
    this.searchFormTab = false;
    this.underwriterViewTab = false;
    this.selectStatesTab = false;
    $('#updateForm').addClass('active');
    $('#searchForm').removeClass('active');
    $('#addForm').removeClass('active');
    $('#selectStates').removeClass('active');
    $('#underwriterView').removeClass('active');
  }

  public searchForm(){
    this.addFormTab = false;
    this.updateFormTab = false;
    this.searchFormTab = true;
    this.underwriterViewTab = false;
    this.selectStatesTab = false;
    $('#searchForm').addClass('active');
    $('#addForm').removeClass('active');
    $('#updateForm').removeClass('active');
    $('#selectStates').removeClass('active');
    $('#underwriterView').removeClass('active');
  }

  public selectStates(){
    this.addFormTab = false;
    this.updateFormTab = false;
    this.searchFormTab = false;
    this.underwriterViewTab = false;
    this.selectStatesTab = true;
    $('#searchForm').removeClass('active');
    $('#addForm').removeClass('active');
    $('#updateForm').removeClass('active');
    $('#selectStates').addClass('active');
    $('#underwriterView').removeClass('active');

    this.states = [{"Disabled":false,"Group":null,"Selected":false,"Text":"Alaska","Value":"AK"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Alabama","Value":"AL"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Arkansas","Value":"AR"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Arizona","Value":"AZ"},{"Disabled":false,"Group":null,"Selected":false,"Text":"California","Value":"CA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Colorado","Value":"CO"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Connecticut","Value":"CT"},{"Disabled":false,"Group":null,"Selected":false,"Text":"District of Columbia","Value":"DC"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Delaware","Value":"DE"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Florida","Value":"FL"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Georgia","Value":"GA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Hawaii","Value":"HI"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Iowa","Value":"IA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Idaho","Value":"ID"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Illinois","Value":"IL"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Indiana","Value":"IN"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Kansas","Value":"KS"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Kentucky","Value":"KY"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Louisiana","Value":"LA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Massachusetts","Value":"MA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Maryland","Value":"MD"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Maine","Value":"ME"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Michigan","Value":"MI"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Minnesota","Value":"MN"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Missouri","Value":"MO"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Mississippi","Value":"MS"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Montana","Value":"MT"},{"Disabled":false,"Group":null,"Selected":false,"Text":"North Carolina","Value":"NC"},{"Disabled":false,"Group":null,"Selected":false,"Text":"North Dakota","Value":"ND"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Nebraska","Value":"NE"},{"Disabled":false,"Group":null,"Selected":false,"Text":"New Hampshire","Value":"NH"},{"Disabled":false,"Group":null,"Selected":false,"Text":"New Jersey","Value":"NJ"},{"Disabled":false,"Group":null,"Selected":false,"Text":"New Mexico","Value":"NM"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Nevada","Value":"NV"},{"Disabled":false,"Group":null,"Selected":false,"Text":"New York","Value":"NY"},{"Disabled":false,"Group":null,"Selected":false,"Text":"NYFTZ","Value":"NYFTZ"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Ohio","Value":"OH"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Oklahoma","Value":"OK"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Oregon","Value":"OR"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Pennsylvania","Value":"PA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Puerto Rico","Value":"PR"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Rhode Island","Value":"RI"},{"Disabled":false,"Group":null,"Selected":false,"Text":"South Carolina","Value":"SC"},{"Disabled":false,"Group":null,"Selected":false,"Text":"South Dakota","Value":"SD"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Tennessee","Value":"TN"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Texas","Value":"TX"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Utah","Value":"UT"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Virginia","Value":"VA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Virgin Islands","Value":"VI"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Vermont","Value":"VT"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Washington","Value":"WA"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Wisconsin","Value":"WI"},{"Disabled":false,"Group":null,"Selected":false,"Text":"West Virginia","Value":"WV"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Wyoming","Value":"WY"}];

  }

  public underwriterView(){
    this.addFormTab = false;
    this.updateFormTab = false;
    this.searchFormTab = false;
    this.underwriterViewTab = true;
    this.selectStatesTab = false;
    $('#searchForm').removeClass('active');
    $('#addForm').removeClass('active');
    $('#updateForm').removeClass('active');
    $('#selectStates').removeClass('active');
    $('#underwriterView').addClass('active');

  }

  public onSelectedChange(){

  }

}
