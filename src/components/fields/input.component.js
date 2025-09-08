import { __decorate, __metadata } from "tslib";
import { Component, Injector } from '@angular/core';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
let InputComponent = class InputComponent extends DynamicFieldComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get control() {
        return this.field.component.input;
    }
};
InputComponent = __decorate([
    Component({
        selector: 'dynamic-input',
        template: `
    <ng-container [formGroup]="frm" *ngIf="host.hasPermission(field.component.permission)">
      <ion-item
        *ngIf="visible(field.component.visible)"
        [ngClass]="evalExpr(field.component.ngClass)"
        [class]="field.component.class"
        [ngStyle]="evalExpr(field.component.ngStyle)"
        [style]="field.component.style"
        [disabled]="disabled(field.component.disabled)"
        (click)="evalEvent(field.component.click, $event)"
      >
        <ng-container *ngIf="showIcon">
          <ion-icon [name]="iconName" [src]="iconSrc" [slot]="iconSlot"
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
        </ng-container>
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
        <ion-input [formControlName]="field.name"
          [ngClass]="evalExpr(control?.ngClass)"
          [class]="control?.class"
          [ngStyle]="evalExpr(control?.ngStyle)"
          [style]="control?.style"
          [autocapitalize]="control?.autocapitalize ||'off'"
          [autocomplete]="control?.autocomplete ||'off'"
          [autocorrect]="control?.autocorrect ||'off'"
          [autofocus]="evalOrExpr(control?.autofocus) || false"
          [clearInput]="evalOrExpr(control?.clearInput) || false"
          [clearOnEdit]="evalOrExpr(control?.clearOnEdit)"
          [color]="evalOrExpr(control?.color)"
          [debounce]="control?.debounce || 0"
          [inputmode]="control?.inputmode"
          [max]="control?.max"
          [maxlength]="control?.maxlength"
          [min]="control?.min"
          [minlength]="control?.minlength"
          [mode]="control?.mode"
          [multiple]="control?.multiple"
          [name]="control?.name"
          [pattern]="control?.pattern"
          [placeholder]="evalOrExprAndTr(control?.placeholder)"
          [readonly]="evalOrExpr(control?.readonly) || false"
          [required]="!!evalOrExpr(control?.required) || false"
          [spellcheck]="control?.spellcheck || false"
          [step]="control?.step"
          [type]="control?.type || 'text'"
          (ionBlur)="evalEvent(control?.ionBlur, $event)"
          (ionFocus)="evalEvent(control?.ionFocus, $event)"
          (ionChange)="evalEvent(control?.ionChange, $event)"
          (ionInput)="evalEvent(control?.ionInput, $event)"
        ></ion-input>
      </ion-item>
      <ng-container *ngFor="let err of field.component.errors">
        <p *ngIf="hasError(err)" [class]="err.class || 'error'">{{evalOrExprAndTr(err.text)}}</p>
      </ng-container>
    </ng-container>
  `,
        standalone: false,
    }),
    __metadata("design:paramtypes", [Injector])
], InputComponent);
export { InputComponent };
//# sourceMappingURL=input.component.js.map