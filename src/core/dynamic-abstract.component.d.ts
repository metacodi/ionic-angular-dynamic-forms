import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FieldType, stringOrExpr, booleanOrExpr, numberOrExpr } from './types';
/**
 * Base component from which all dynamic components inherit.
 */
export declare abstract class DynamicAbstractComponent {
    protected injector: Injector;
    frm: FormGroup;
    host: any;
    /**
     * Instance of the translation service, the internationalization
     * library (i18n) for Angular from the `@ngx-translate` package.
     *
     * @category Dependencies
     */
    translate: TranslateService;
    constructor(injector: Injector);
    size(field: FieldType, breakpoint?: string): number | undefined;
    visible(expr: boolean | string, $event?: any): boolean;
    disabled(expr: boolean | string, $event?: any): boolean;
    evalEvent(expr: string, $event: any): any;
    evalOrExpr(value: stringOrExpr | booleanOrExpr | numberOrExpr): string | boolean | number | undefined;
    evalOrExprAndTr(value: stringOrExpr | booleanOrExpr | numberOrExpr, defaultValue?: any): string | boolean | number | undefined;
    evalExpr(expr: string, args?: {
        [key: string]: any;
    }): any;
}
//# sourceMappingURL=dynamic-abstract.component.d.ts.map