import { TranslateService } from '@ngx-translate/core';
import { evalExpr } from '../core/util';
import { isExprLiteral } from './types';
/**
 * Base component from which all dynamic components inherit.
 */
export class DynamicAbstractComponent {
    constructor(injector) {
        this.injector = injector;
        /** @category Dependencies */
        this.translate = this.injector.get(TranslateService);
    }
    // ---------------------------------------------------------------------------------------------------
    //  size
    // ---------------------------------------------------------------------------------------------------
    size(field, breakpoint) {
        if (!field.component.size) {
            return undefined;
        }
        breakpoint = breakpoint || 'xs';
        return typeof field.component.size === 'object' ? field.component.size[breakpoint] : +field.component.size || undefined;
    }
    // ---------------------------------------------------------------------------------------------------
    //  visible . disabled
    // ---------------------------------------------------------------------------------------------------
    visible(expr, $event) {
        // Visible by default when no expression is provided.
        if (!expr) {
            return true;
        }
        // Evaluate the provided expression.
        return typeof expr === 'boolean' ? expr : !!this.evalExpr(expr, { $event });
    }
    disabled(expr, $event) {
        // Enabled by default when no expression is provided.
        if (!expr) {
            return false;
        }
        // Evaluate the provided expression.
        return typeof expr === 'boolean' ? expr : !!this.evalExpr(expr, { $event });
    }
    // ---------------------------------------------------------------------------------------------------
    //  eval
    // ---------------------------------------------------------------------------------------------------
    evalEvent(expr, $event) {
        // Evaluate the expression code.
        return this.evalExpr(expr, { $event });
    }
    evalOrExpr(value) {
        if (!value) {
            return value;
        }
        return isExprLiteral(value) ? this.evalExpr(value.expr) : value;
    }
    evalOrExprAndTr(value, defaultValue) {
        if (value === undefined) {
            return defaultValue;
        }
        value = isExprLiteral(value) ? this.evalExpr(value.expr) : value;
        if (!value) {
            return defaultValue;
        }
        return this.translate.instant(value);
    }
    evalExpr(expr, args) { return evalExpr(expr, { args, host: this.host }); }
}
//# sourceMappingURL=dynamic-abstract.component.js.map