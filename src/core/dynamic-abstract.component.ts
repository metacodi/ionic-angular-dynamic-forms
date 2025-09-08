import { Injector, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { evalExpr } from '../core/util';

import { FieldType, stringOrExpr, booleanOrExpr, numberOrExpr, isExprLiteral } from './types';


/**
 * Base component from which all dynamic components inherit.
 */
export abstract class DynamicAbstractComponent  {

  frm: FormGroup;
  host: any;

  /**
   * Instance of the translation service, the internationalization
   * library (i18n) for Angular from the `@ngx-translate` package.
   *
   * @category Dependencies
   */
  translate: TranslateService;

  constructor(protected injector: Injector) {
    /** @category Dependencies */
    this.translate = this.injector.get<TranslateService>(TranslateService);
  }


  // ---------------------------------------------------------------------------------------------------
  //  size
  // ---------------------------------------------------------------------------------------------------

  size(field: FieldType, breakpoint?: string): number | undefined {
    if (!field.component.size) { return undefined; }
    breakpoint = breakpoint || 'xs';
    return typeof field.component.size === 'object' ? field.component.size[breakpoint] : +field.component.size || undefined;
  }


  // ---------------------------------------------------------------------------------------------------
  //  visible . disabled
  // ---------------------------------------------------------------------------------------------------

  visible(expr: boolean | string, $event?: any): boolean {
    // Visible by default when no expression is provided.
    if (!expr) { return true; }
    // Evaluate the provided expression.
    return typeof expr === 'boolean' ? expr : !!this.evalExpr(expr, { $event });
  }

  disabled(expr: boolean | string, $event?: any): boolean {
    // Enabled by default when no expression is provided.
    if (!expr) { return false; }
    // Evaluate the provided expression.
    return typeof expr === 'boolean' ? expr : !!this.evalExpr(expr, { $event });
  }


  // ---------------------------------------------------------------------------------------------------
  //  eval
  // ---------------------------------------------------------------------------------------------------

  evalEvent(expr: string, $event: any): any {
    // Evaluate the expression code.
    return this.evalExpr(expr, { $event });
  }

  evalOrExpr(value: stringOrExpr | booleanOrExpr | numberOrExpr): string | boolean | number | undefined {
    if (!value) { return (value as any); }
    return isExprLiteral(value) ? this.evalExpr(value.expr) : value;
  }

  evalOrExprAndTr(value: stringOrExpr | booleanOrExpr | numberOrExpr, defaultValue?: any): string | boolean | number | undefined {
    if (value === undefined) { return defaultValue; }
    value = isExprLiteral(value) ? this.evalExpr(value.expr) : value;
    if (!value) { return defaultValue; }
    return this.translate.instant(value as string);
  }

  evalExpr(expr: string, args?: { [key: string]: any }): any { return evalExpr(expr, { args, host: this.host }); }

}
