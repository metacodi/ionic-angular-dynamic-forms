/** @typeguard for `{ expr: string }` alternative of `stringOrExpr` | `booleanOrExpr` | `numberOrExpr`. */
export const isExprLiteral = (value) => typeof value === 'object' && value.hasOwnProperty('expr');
//# sourceMappingURL=types.js.map