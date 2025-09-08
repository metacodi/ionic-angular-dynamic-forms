import { __decorate, __metadata } from "tslib";
import { Component, Injector } from '@angular/core';
import { DynamicAbstractComponent } from '../../core/dynamic-abstract.component';
let DynamicFieldsRowComponent = class DynamicFieldsRowComponent extends DynamicAbstractComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
};
DynamicFieldsRowComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [Injector])
], DynamicFieldsRowComponent);
export { DynamicFieldsRowComponent };
//# sourceMappingURL=dynamic-fields-row.component.js.map