import { __decorate, __metadata } from "tslib";
import { Component, Injector } from '@angular/core';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
let DatetimeComponent = class DatetimeComponent extends DynamicFieldComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get control() {
        return this.field.component.datetime;
    }
};
DatetimeComponent = __decorate([
    Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'dynamic-datetime',
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
      </ion-item>
      <ng-container *ngFor="let err of field.component.errors">
        <error-message *ngIf="hasError(err)" [class]="err.class || 'error'">{{evalOrExprAndTr(err.text)}}</error-message>
      </ng-container>
    </ng-container>
  `,
        standalone: false,
    })
    // <ion-text>{{ displayValue }}</ion-text>
    //         <ion-modal trigger="open-date-time-{{formControlName}}-modal" show-backdrop="false">
    //           <ng-template>
    //             <ion-content>
    //               <ion-datetime
    //                 #modalDatetime
    //                 (ionCancel)="onIonCancel($event)" (ionChange)="onIonChange($event)"
    //                 (ionFocus)="onIonFocus($event)" (ionBlur)="onIonBlur($event)"
    //                 (ionCancel)="onIonCancel($event)" (ionChange)="onIonChange($event); value = modalDatetime.value;"
    //                 [cancelText]="evalOrExprAndTr(control?.cancelText || 'buttons.cancel')"
    //                 [doneText]="evalOrExprAndTr(control?.doneText || 'buttons.accept')"
    //                 [color]="control?.color"
    //                 [dayNames]="evalOrExprAndTr(control?.dayNames)"
    //                 [firstDayOfWeek]="firstDayOfWeek"
    //                 [hourCycle]="control?.hourCycle"
    //                 [hourValues]="control?.hourValues"
    //                 [isDateEnabled]="isDateEnabled"
    //                 [locale]="control?.locale"
    //                 [max]="evalOrExpr(control?.max)"
    //                 [min]="evalOrExpr(control?.min)"
    //                 [mode]="control?.mode"
    //                 [monthValues]="control?.monthValues"
    //                 [name]="control?.name"
    //                 [presentation]="control?.presentation"
    //                 [readonly]="readonly"
    //                 [showClearButton]="control?.showClearButton"
    //                 [showDefaultButtons]="control?.showDefaultButtons"
    //                 [showDefaultTimeLabel]="control?.showDefaultTimeLabel"
    //                 [showDefaultTitle]="control?.showDefaultTitle"
    //                 [size]="control?.size"
    //                 [readonly]="evalOrExpr(control?.readonly) || false"
    //                 [value]="control?.formatedValue"
    //                 [yearValues]="control?.yearValues"
    //                 (ionBlur)="evalEvent(control?.ionBlur, $event)"
    //                 (ionFocus)="evalEvent(control?.ionFocus, $event)"
    //                 (ionChange)="field.value = control?.popoverDatetime.value"
    //                 (ionCancel)="evalEvent(control?.ionCancel, $event)"
    //               >
    //               </ion-datetime>
    //             </ion-content>
    //           </ng-template>
    //         </ion-modal>
    ,
    __metadata("design:paramtypes", [Injector])
], DatetimeComponent);
export { DatetimeComponent };
//# sourceMappingURL=datetime.component.js.map