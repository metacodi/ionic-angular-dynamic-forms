import { __decorate, __metadata } from "tslib";
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { evalExpr } from '../core/util';
import { ButtonComponent } from '../components/fields/button.component';
import { CheckboxComponent } from '../components/fields/checkbox.component';
import { DatetimeComponent } from '../components/fields/datetime.component';
import { InputComponent } from '../components/fields/input.component';
import { ToggleComponent } from '../components/fields/toggle.component';
export const SupportedDynamicComponents = {
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    datetime: DatetimeComponent,
    input: InputComponent,
    toggle: ToggleComponent,
};
let DynamicFieldDirective = class DynamicFieldDirective {
    constructor(container) {
        this.container = container;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.field = this.field;
            this.component.instance.frm = this.frm;
            this.component.instance.host = this.host;
        }
    }
    ngOnInit() {
        if (!SupportedDynamicComponents[this.field.component.type]) {
            // console.log({ field: this.field, frm: this.frm });
            const supportedTypes = Object.keys(SupportedDynamicComponents).join(', ');
            throw new Error(`This dynamic component type is not implemented: (${this.field.component.type}).
        Supported components: ${supportedTypes}`);
        }
        this.component = this.container.createComponent(SupportedDynamicComponents[this.field.component.type]);
        this.component.instance.field = this.field;
        this.component.instance.frm = this.frm;
        this.component.instance.host = this.host;
        if (this.field.component.type !== 'button') {
            if (!this.frm.controls[this.field.name]) {
                // console.log(this.constructor.name + '.ngOnInit() -> Create control', { field: this.field, frm: this.frm });
                const control = new FormControl(this.field.value.hasOwnProperty('default') ? this.field.value.default : null);
                if (this.field.component.validators) {
                    control.setValidators(this.evalExpr(this.field.component.validators, { Validators }));
                }
                this.frm.addControl(this.field.name, control);
            }
            else {
                // console.log(this.constructor.name + '.ngOnInit() -> Perfecto, el control ya existe !!!!!!', { field: this.field, frm: this.frm });
            }
        }
    }
    // ---------------------------------------------------------------------------------------------------
    //  evalExpr
    // ---------------------------------------------------------------------------------------------------
    evalExpr(expr, args) {
        // Evaluamos el código de la expresión.
        return evalExpr(expr, { args, host: this.host });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldDirective.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], DynamicFieldDirective.prototype, "frm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DynamicFieldDirective.prototype, "host", void 0);
DynamicFieldDirective = __decorate([
    Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[dynamicField]',
        standalone: false,
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], DynamicFieldDirective);
export { DynamicFieldDirective };
//# sourceMappingURL=dynamic-field.directive.js.map