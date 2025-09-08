import { ComponentRef, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType } from '../../core/types';
import { DynamicFieldsRow } from '../../core/types';
export declare class DynamicFieldsRowDirective implements DynamicFieldsRow, OnChanges, OnInit {
    private container;
    cols: FieldType[];
    frm: FormGroup;
    host: any;
    component: ComponentRef<DynamicFieldsRow>;
    constructor(container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=dynamic-fields-row.directive.d.ts.map