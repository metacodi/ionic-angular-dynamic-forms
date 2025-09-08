import { Injector } from '@angular/core';
import { InputControlType, FieldType } from '../../core/types';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
export declare class InputComponent extends DynamicFieldComponent {
    protected injector: Injector;
    field: FieldType;
    constructor(injector: Injector);
    get control(): InputControlType;
}
//# sourceMappingURL=input.component.d.ts.map