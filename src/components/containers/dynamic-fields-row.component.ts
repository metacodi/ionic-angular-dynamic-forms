import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldType } from '../../core/types';
import { DynamicFieldsRow } from '../../core/types';
import { DynamicAbstractComponent } from '../../core/dynamic-abstract.component';


@Component({
  selector: 'dynamic-fields-row',
  template: `
    <ion-row>
      <ng-container *ngFor="let field of cols">
        <ng-container *ngIf="host.hasPermission(field.component.permission)">
          <ion-col *ngIf="visible(field.component.visible)"
            [size]="size(field, 'xs')"
            [sizeSm]="size(field, 'sm')"
            [sizeMd]="size(field, 'md')"
            [sizeLg]="size(field, 'lg')"
            [sizeXl]="size(field, 'xl')"
          >
            <ng-container dynamicField [frm]="frm" [field]="field" [host]="host"></ng-container>
          </ion-col>
        </ng-container>
      </ng-container>
    </ion-row>
  `,
  standalone: false,
})
export class DynamicFieldsRowComponent extends DynamicAbstractComponent implements DynamicFieldsRow {

  cols: FieldType[];
  declare frm: FormGroup;
  declare host: any;

  constructor(protected override injector: Injector) { super(injector); }

}
