/** Options to evaluate an expression.
 * ```typescript
 * interface EvalExpressionOptions { host?: any; filterProperties?: string[]; args?: { [key: string]: any }; }
 * ```
 *
 * @param args: Additional arguments to pass to the evaluation function.
 * @param host: Host instance whose properties are exposed as arguments to the evaluation function.
 * @param filterProperties: Filters which host properties will be assigned to arguments. If omitted, all descriptors are traversed.
 */
export interface EvalExpressionOptions {
    host?: any;
    filterProperties?: string[];
    args?: {
        [key: string]: any;
    };
}
/** Evaluates an expression receiving every host property plus any additional `args` as arguments.
 * ```typescript
 * interface EvalExpressionOptions { host?: any; filterProperties?: string[]; args?: { [key: string]: any }; }
 * ```
 */
export declare const evalExpr: (expr: string, options?: EvalExpressionOptions) => any;
/** Utility to execute code supplied as a string. */
export declare const evalCode: (code: string, args?: {
    [key: string]: any;
}, host?: any) => any;
//# sourceMappingURL=util.d.ts.map