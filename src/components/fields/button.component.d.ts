import { Injector } from '@angular/core';
import { ButtonControlType, FieldType } from '../../core/types';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
export declare class ButtonComponent extends DynamicFieldComponent {
    protected injector: Injector;
    field: FieldType;
    constructor(injector: Injector);
    get control(): ButtonControlType;
}
//# sourceMappingURL=button.component.d.ts.map