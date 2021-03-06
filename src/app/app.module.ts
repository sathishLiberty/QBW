import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';





// import { TreeviewModule } from 'ngx-treeview';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SearchComponent } from './search/search.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ComplianceComponent } from './compliance/compliance.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    ComplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PanelBarModule,
    BrowserAnimationsModule,
    MenuModule,
    LabelModule,
    DropDownsModule,
    ButtonsModule,
    // TreeviewModule.forRoot(),
    DateInputsModule,
    InputsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    TreeViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
