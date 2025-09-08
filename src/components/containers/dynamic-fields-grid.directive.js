import { __decorate, __metadata } from "tslib";
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldsGridComponent } from './dynamic-fields-grid.component';
/**
 * ```typescript
 * const rows: DynamicRowType[];
 * ```
 * ```html
 * <ng-container dynamic-fields-grid [frm]="frm" [rows]="UsuarioDetailPage" [host]="Me"></ng-container>
 * ```
 */
let DynamicFieldsGridDirective = class DynamicFieldsGridDirective {
    constructor(container) {
        this.container = container;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.grid = this.grid;
            this.component.instance.rows = this.rows;
            this.component.instance.frm = this.frm;
            this.component.instance.host = this.host;
        }
    }
    ngOnInit() {
        this.component = this.container.createComponent(DynamicFieldsGridComponent);
        this.component.instance.grid = this.grid;
        this.component.instance.rows = this.rows;
        this.component.instance.frm = this.frm;
        this.component.instance.host = this.host;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldsGridDirective.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldsGridDirective.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], DynamicFieldsGridDirective.prototype, "frm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldsGridDirective.prototype, "host", void 0);
DynamicFieldsGridDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[dynamic-fields-grid]',
        standalone: false,
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], DynamicFieldsGridDirective);
export { DynamicFieldsGridDirective };
//# sourceMappingURL=dynamic-fields-grid.directive.js.map