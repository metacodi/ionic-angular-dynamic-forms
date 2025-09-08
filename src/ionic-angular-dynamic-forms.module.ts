import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { CheckboxComponent } from './components/fields/checkbox.component';
import { DatetimeComponent } from './components/fields/datetime.component';
import { ToggleComponent } from './components/fields/toggle.component';
import { InputComponent } from './components/fields/input.component';
import { ButtonComponent } from './components/fields/button.component';
import { DynamicFieldsGridDirective } from './components/containers/dynamic-fields-grid.directive';
import { DynamicFieldsGridComponent } from './components/containers/dynamic-fields-grid.component';
import { DynamicFieldsRowDirective } from './components/containers/dynamic-fields-row.directive';
import { DynamicFieldsRowComponent } from './components/containers/dynamic-fields-row.component';
import { DynamicFieldDirective } from './core/dynamic-field.directive';

@NgModule({
  declarations: [
    DynamicFieldsGridDirective,
    DynamicFieldsGridComponent,
    DynamicFieldsRowDirective,
    DynamicFieldsRowComponent,
    DynamicFieldDirective,
    InputComponent,
    DatetimeComponent,
    ToggleComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class IonicAngularDynamicForms { }
