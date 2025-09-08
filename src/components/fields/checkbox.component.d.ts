import { Injector } from '@angular/core';
import { CheckboxControlType, FieldType } from '../../core/types';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
export declare class CheckboxComponent extends DynamicFieldComponent {
    protected injector: Injector;
    field: FieldType;
    constructor(injector: Injector);
    get control(): CheckboxControlType;
}
//# sourceMappingURL=checkbox.component.d.ts.map