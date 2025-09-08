
/** Options to evaluate an expression.
 * ```typescript
 * interface EvalExpressionOptions { host?: any; filterProperties?: string[]; args?: { [key: string]: any }; }
 * ```
 *
 * @param args: Additional arguments to pass to the evaluation function.
 * @param host: Host instance whose properties are exposed as arguments to the evaluation function.
 * @param filterProperties: Filters which host properties will be assigned to arguments. If omitted, all descriptors are traversed.
 */
export interface EvalExpressionOptions { host?: any; filterProperties?: string[]; args?: { [key: string]: any } }

/** Evaluates an expression receiving every host property plus any additional `args` as arguments.
 * ```typescript
 * interface EvalExpressionOptions { host?: any; filterProperties?: string[]; args?: { [key: string]: any }; }
 * ```
 */
export const evalExpr = (expr: string, options?: EvalExpressionOptions): any => {
  if (!options) { options = {}; }
  const filterProperties = options.filterProperties;
  // Return the expression unchanged when it is: undefined, null, '', 0, false.
  if (!expr) { return expr; }
  // Gather all host properties and prototypes as arguments.
  // options.args = deepAssign(options.args || {}, options.host || {}, { filterProperties });
  const args: any = {};
  options.args = options.args || {}; Object.keys(options.args).map(k => args[k] = options.args[k]);
  options.host = options.host || {}; Object.keys(options.host).map(k => args[k] = options.host[k]);
  // if (filterProperties !== undefined) { Object.keys(filterProperties).map(k => args[k] = filterProperties[k]); }
  args.filterProperties = filterProperties;
  const host = options.host;
  // Evaluate the expression code.
  return evalCode(expr, args, host);
};


// ---------------------------------------------------------------------------------------------------
//  evalCode
// ---------------------------------------------------------------------------------------------------

/** Utility to execute code supplied as a string. */
export const evalCode = (code: string, args?: { [key: string]: any }, host?: any): any => {
  if (!code) { return; }

  // Get argument names for the wrapper function.
  const fnArgs = args ? Object.keys(args).join(', ') : '';
  // Create an object literal with a function to encapsulate the provided code.
  const wrapper = `({ fn: function (${fnArgs}) { return (${code}); } });`;

  let runnable: { fn: (...args2: any) => any };

  try {
    // Evaluate the transpiled code to obtain an instance of the wrapper object.
    // tslint:disable-next-line: no-eval
    // eslint-disable-next-line no-eval
    runnable = eval(wrapper);

  } catch (e) { throw new Error (`Evaluating code '${code}'\n${e}\n\n> wrapper:\n${wrapper}`); }

  try {
    // Build the array of argument values.
    const argArray = args ? Object.keys(args).map(k => (args)[k]) : [];
    // Execute the function passing the provided arguments.
    return host ? runnable.fn.apply(host, argArray) : runnable.fn(...argArray);

  } catch (e) { throw new Error (`Running code '${code}'\n${e}\n\n> wrapper:\n${wrapper}`); }

};
