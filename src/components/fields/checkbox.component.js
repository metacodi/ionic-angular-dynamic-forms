import { __decorate, __metadata } from "tslib";
import { Component, Injector } from '@angular/core';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
let CheckboxComponent = class CheckboxComponent extends DynamicFieldComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get control() {
        return this.field.component.checkbox;
    }
};
CheckboxComponent = __decorate([
    Component({
        selector: 'dynamic-checkbox',
        template: `
    <ng-container [formGroup]="frm" *ngIf="host.hasPermission(field.component.permission)">
      <ion-item
        *ngIf="visible(field.component.visible)"
        [disabled]="disabled(field.component.disabled)"
        [ngClass]="evalExpr(field.component.ngClass)"
        [class]="field.component.class"
        [ngStyle]="evalExpr(field.component.ngStyle)"
        [style]="field.component.style"
        (click)="evalEvent(field.component.click, $event)"
      >
        <ion-checkbox [formControlName]="field.name"
          [ngClass]="evalExpr(control?.ngClass)"
          [class]="control?.class"
          [ngStyle]="evalExpr(control?.ngStyle)"
          [style]="control?.style"
          [checked]="evalOrExpr(control?.checked)"
          [color]="evalOrExpr(control?.color)"
          [indeterminate]="evalOrExpr(control?.indeterminate)"
          [mode]="control?.mode"
          [name]="control?.name"
          [slot]="control?.slot || 'start'"
          (ionBlur)="evalEvent(control?.ionBlur, $event)"
          (ionFocus)="evalEvent(control?.ionFocus, $event)"
          (ionChange)="evalEvent(control?.ionChange, $event)"
        ></ion-checkbox>
        <ng-container *ngIf="field.component.label">
          <ion-label
            [ngClass]="evalExpr(label?.ngClass)"
            [class]="label?.class"
            [ngStyle]="evalExpr(label?.ngStyle)"
            [style]="label?.style"
            [color]="evalOrExpr(label?.color)"
            [position]="label?.position"
            [mode]="icon?.mode"
          >{{labelText}}</ion-label>
        </ng-container>
      </ion-item>
      <ng-container *ngFor="let err of field.component.errors">
        <p *ngIf="hasError(err)" [class]="err.class || 'error'">{{evalOrExprAndTr(err.text)}}</p>
      </ng-container>
    </ng-container>
  `,
        standalone: false,
    }),
    __metadata("design:paramtypes", [Injector])
], CheckboxComponent);
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map