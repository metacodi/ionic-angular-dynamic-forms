import { ComponentRef, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControlType } from '../../core/types';
import { DynamicFieldsGrid } from '../../core/types';
/**
 * ```typescript
 * const rows: DynamicRowType[];
 * ```
 * ```html
 * <ng-container dynamic-fields-grid [frm]="frm" [rows]="UsuarioDetailPage" [host]="Me"></ng-container>
 * ```
 */
export declare class DynamicFieldsGridDirective implements DynamicFieldsGrid, OnChanges, OnInit {
    private container;
    grid: BaseControlType;
    rows: DynamicFieldsGrid['rows'];
    frm: FormGroup;
    host: any;
    component: ComponentRef<DynamicFieldsGrid>;
    constructor(container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=dynamic-fields-grid.directive.d.ts.map