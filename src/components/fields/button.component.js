import { __decorate, __metadata } from "tslib";
import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
let ButtonComponent = class ButtonComponent extends DynamicFieldComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get control() {
        return this.field.component.button;
    }
};
ButtonComponent = __decorate([
    Component({
        selector: 'dynamic-button',
        encapsulation: ViewEncapsulation.None,
        template: `
    <ng-container [formGroup]="frm" *ngIf="host.hasPermission(field.component.permission)">
      <ion-button
        *ngIf="visible(field.component.visible)"
        [disabled]="disabled(field.component.disabled)"
        [ngClass]="evalExpr(field.component.ngClass || control?.ngClass)"
        [class]="field.component.class || control?.class"
        [ngStyle]="evalExpr(field.component.ngStyle || control?.ngStyle)"
        [style]="field.component.style || control?.style"
        [buttonType]="control?.buttonType || 'button'"
        [color]="evalOrExpr(control?.color)"
        [download]="control?.download"
        [expand]="control?.expand"
        [fill]="control?.fill"
        [href]="control?.href"
        [mode]="control?.mode"
        [rel]="control?.rel"
        [routerDirection]="control?.routerDirection || 'forward'"
        [shape]="control?.shape"
        [size]="control?.size"
        [strong]="control?.strong || false"
        [target]="control?.target"
        [type]="control?.buttonType || 'button'"
        (click)="evalEvent(field.component.click, $event)"
        (ionBlur)="evalEvent(control?.ionBlur, $event)"
        (ionFocus)="evalEvent(control?.ionFocus, $event)"
      >
        <ion-icon  *ngIf="showIcon"
          [name]="iconName" [src]="iconSrc" [slot]="iconSlot"
          [ngClass]="evalExpr(icon?.ngClass)"
          [class]="icon?.class"
          [ngStyle]="evalExpr(icon?.ngStyle)"
          [style]="icon?.style"
          [color]="evalOrExpr(icon?.color)"
          [ios]="evalOrExpr(icon?.ios)"
          [md]="evalOrExpr(icon?.md)"
          [mode]="icon?.mode"
          [size]="icon?.size"
        ></ion-icon>
        {{labelText}}
      </ion-button>
    </ng-container>
  `,
        standalone: false,
    }),
    __metadata("design:paramtypes", [Injector])
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map