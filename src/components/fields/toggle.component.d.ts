import { Injector } from '@angular/core';
import { ToggleControlType, FieldType } from '../../core/types';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
export declare class ToggleComponent extends DynamicFieldComponent {
    protected injector: Injector;
    field: FieldType;
    constructor(injector: Injector);
    get control(): ToggleControlType;
}
//# sourceMappingURL=toggle.component.d.ts.map