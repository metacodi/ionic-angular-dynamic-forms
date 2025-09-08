import { ComponentRef, Directive, Input, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldType } from '../../core/types';
import { DynamicFieldsRow } from '../../core/types';
import { DynamicFieldsRowComponent } from './dynamic-fields-row.component';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dynamic-fields-row]',
  standalone: false,
})
export class DynamicFieldsRowDirective implements DynamicFieldsRow, OnChanges, OnInit {

  @Input() cols: FieldType[];
  @Input() frm: FormGroup;
  @Input() host: any;

  component: ComponentRef<DynamicFieldsRow>;

  constructor(
    private container: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.cols = this.cols;
      this.component.instance.frm = this.frm;
      this.component.instance.host = this.host;
    }
  }

  ngOnInit(): void {
    this.component = this.container.createComponent<DynamicFieldsRow>(DynamicFieldsRowComponent);
    this.component.instance.cols = this.cols;
    this.component.instance.frm = this.frm;
    this.component.instance.host = this.host;
  }
}
