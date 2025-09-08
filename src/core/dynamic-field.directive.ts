import { ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { evalExpr } from '../core/util';

import { FieldType } from './types';
import { DynamicFieldComponent } from './dynamic-field.component';
import { ButtonComponent } from '../components/fields/button.component';
import { CheckboxComponent } from '../components/fields/checkbox.component';
import { DatetimeComponent } from '../components/fields/datetime.component';
import { InputComponent } from '../components/fields/input.component';
import { ToggleComponent } from '../components/fields/toggle.component';


export const SupportedDynamicComponents: {[type: string]: Type<DynamicFieldComponent>} = {
  button: ButtonComponent,
  checkbox: CheckboxComponent,
  datetime: DatetimeComponent,
  input: InputComponent,
  toggle: ToggleComponent,
};

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dynamicField]',
  standalone: false,
})
export class DynamicFieldDirective implements OnChanges, OnInit {

  @Input() field: FieldType;
  @Input() frm: FormGroup;
  @Input() host: any;

  component: ComponentRef<DynamicFieldComponent>;

  constructor(
    private container: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.frm = this.frm;
      this.component.instance.host = this.host;
    }
  }

  ngOnInit(): void {
    if (!SupportedDynamicComponents[this.field.component.type]) {
      // console.log({ field: this.field, frm: this.frm });
      const supportedTypes = Object.keys(SupportedDynamicComponents).join(', ');
      throw new Error(
        `This dynamic component type is not implemented: (${this.field.component.type}).
        Supported components: ${supportedTypes}`
      );
    }
    this.component = this.container.createComponent<DynamicFieldComponent>(SupportedDynamicComponents[this.field.component.type]);
    this.component.instance.field = this.field;
    this.component.instance.frm = this.frm;
    this.component.instance.host = this.host;

    if (this.field.component.type !== 'button') {
      if (!this.frm.controls[this.field.name]) {
        // console.log(this.constructor.name + '.ngOnInit() -> Create control', { field: this.field, frm: this.frm });
        const control = new FormControl(this.field.value.hasOwnProperty('default') ? (this.field.value as any).default : null);
        if (this.field.component.validators) { control.setValidators(this.evalExpr(this.field.component.validators, { Validators })); }
        this.frm.addControl(this.field.name, control);
      } else {
        // console.log(this.constructor.name + '.ngOnInit() -> Perfecto, el control ya existe !!!!!!', { field: this.field, frm: this.frm });
      }
    }
  }

  // ---------------------------------------------------------------------------------------------------
  //  evalExpr
  // ---------------------------------------------------------------------------------------------------

  evalExpr(expr: string, args?: { [key: string]: any }): any {
    // Evaluamos el código de la expresión.
    return evalExpr(expr, { args, host: this.host });
  }

}

