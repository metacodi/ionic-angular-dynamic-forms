import { Injector } from '@angular/core';
import { DatetimeControlType, FieldType } from '../../core/types';
import { DynamicFieldComponent } from '../../core/dynamic-field.component';
export declare class DatetimeComponent extends DynamicFieldComponent {
    protected injector: Injector;
    field: FieldType;
    constructor(injector: Injector);
    get control(): DatetimeControlType;
}
//# sourceMappingURL=datetime.component.d.ts.map