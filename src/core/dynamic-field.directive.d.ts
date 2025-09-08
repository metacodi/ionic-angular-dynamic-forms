import { ComponentRef, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType } from './types';
import { DynamicFieldComponent } from './dynamic-field.component';
export declare const SupportedDynamicComponents: {
    [type: string]: Type<DynamicFieldComponent>;
};
export declare class DynamicFieldDirective implements OnChanges, OnInit {
    private container;
    field: FieldType;
    frm: FormGroup;
    host: any;
    component: ComponentRef<DynamicFieldComponent>;
    constructor(container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
    evalExpr(expr: string, args?: {
        [key: string]: any;
    }): any;
}
//# sourceMappingURL=dynamic-field.directive.d.ts.map