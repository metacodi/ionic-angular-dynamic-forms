import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType } from '../../core/types';
import { DynamicFieldsRow } from '../../core/types';
import { DynamicAbstractComponent } from '../../core/dynamic-abstract.component';
export declare class DynamicFieldsRowComponent extends DynamicAbstractComponent implements DynamicFieldsRow {
    protected injector: Injector;
    cols: FieldType[];
    frm: FormGroup;
    host: any;
    constructor(injector: Injector);
}
//# sourceMappingURL=dynamic-fields-row.component.d.ts.map