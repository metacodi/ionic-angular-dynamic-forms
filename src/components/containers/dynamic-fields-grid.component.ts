import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseControlType } from '../../core/types';
import { DynamicFieldsGrid  } from '../../core/types';
import { DynamicAbstractComponent } from '../../core/dynamic-abstract.component';


@Component({
  selector: 'dynamic-fields-grid',
  template: `
    <ion-grid
      [class]="grid?.class"
      [ngClass]="evalExpr(grid?.ngClass)"
    >
      <ng-container *ngFor="let section of rows">
        <ion-row
          *ngIf="host.hasPermission(section.permission)"
          [class]="section.row?.class"
          [ngClass]="evalExpr(section.row?.ngClass)"
        >
          <ion-col *ngIf="section.title" size="12"><h3 class="center">{{evalOrExprAndTr(section.title)}}</h3></ion-col>
          <ng-container *ngFor="let field of section.fields">
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
      </ng-container>
    </ion-grid>
  `,
  standalone: false,
})
export class DynamicFieldsGridComponent extends DynamicAbstractComponent implements DynamicFieldsGrid {

  grid: BaseControlType;
  rows: DynamicFieldsGrid['rows']; // => DynamicRowType[]
  declare frm: FormGroup;
  declare host: any;

  constructor(protected override injector: Injector) { super(injector); }

}
