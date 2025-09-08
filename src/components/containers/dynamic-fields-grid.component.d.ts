import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControlType } from '../../core/types';
import { DynamicFieldsGrid } from '../../core/types';
import { DynamicAbstractComponent } from '../../core/dynamic-abstract.component';
export declare class DynamicFieldsGridComponent extends DynamicAbstractComponent implements DynamicFieldsGrid {
    protected injector: Injector;
    grid: BaseControlType;
    rows: DynamicFieldsGrid['rows'];
    frm: FormGroup;
    host: any;
    constructor(injector: Injector);
}
//# sourceMappingURL=dynamic-fields-grid.component.d.ts.map