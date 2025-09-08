import { __decorate, __metadata } from "tslib";
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldsRowComponent } from './dynamic-fields-row.component';
let DynamicFieldsRowDirective = class DynamicFieldsRowDirective {
    constructor(container) {
        this.container = container;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.cols = this.cols;
            this.component.instance.frm = this.frm;
            this.component.instance.host = this.host;
        }
    }
    ngOnInit() {
        this.component = this.container.createComponent(DynamicFieldsRowComponent);
        this.component.instance.cols = this.cols;
        this.component.instance.frm = this.frm;
        this.component.instance.host = this.host;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], DynamicFieldsRowDirective.prototype, "cols", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], DynamicFieldsRowDirective.prototype, "frm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldsRowDirective.prototype, "host", void 0);
DynamicFieldsRowDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[dynamic-fields-row]',
        standalone: false,
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], DynamicFieldsRowDirective);
export { DynamicFieldsRowDirective };
//# sourceMappingURL=dynamic-fields-row.directive.js.map