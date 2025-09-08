Ionic Angular Dynamic Forms
===========================

Dynamic, composable field components for Ionic + Angular that extend existing forms with additional, self‑described JSON fields. This library is designed to augment heterogeneous entity forms with dynamic fields while preserving your existing form structure and layout, including responsive presentation inside `ion-grid`, `ion-row`, and `ion-col` containers.

Key goals
- Respect existing form hierarchy: extend, don’t replace
- JSON‑described fields with expression support
- Responsive layout with `ion-grid` nesting
- Minimal runtime API with strong TypeScript types

Status
- Library code is ready for consumption as an Angular package.
- The `test/` folder contains usage examples (not test runners).

Installation
- Add as a library to your Angular + Ionic workspace.
- Ensure peer dependencies match your project (Angular 16–17, Ionic 7).

  ```sh
  npm install @metacodi/ionic-angular-dynamic-forms
  ```

Peer dependencies
- `@angular/common`, `@angular/core`, `@angular/forms`
- `@ionic/angular`
- `@ngx-translate/core` (optional but supported for i18n)
- `rxjs`, `zone.js`

Build
- Build the package with `npm run build` (ng-packagr). The entry point is `src/public-api.ts`.

How it works
- Declare dynamic field metadata (type, label, icon, validators, visibility, etc.).
- Render fields using the provided directives/components within your existing grid layout.
- Expressions are evaluated in the context of a provided `host` object plus optional event args.

Quick start
1) Import module in your app module or a feature module:
```ts
import { IonicAngularDynamicForms } from '@metacodi/ionic-angular-dynamic-forms';

@NgModule({
  imports: [IonicAngularDynamicForms]
})
export class FeatureModule {}
```

2) Define a host component with a reactive form and a permission helper:
```ts
form = this.fb.group({});
host = {
  isNew: false,
  initialized: true,
  hasPermission: (p?: string | boolean) => p === undefined || p === true
};

rows = [
  {
    title: 'profile.section',
    row: { ngClass: `{'compact': true}` },
    fields: [
      {
        name: 'firstName',
        value: { type: 'string', default: '' },
        component: {
          type: 'input',
          size: { xs: 12, md: 6 },
          label: 'profile.first_name',
          input: { placeholder: 'profile.first_name', required: true },
          validators: `Validators.required`
        }
      }
    ]
  }
];
```

3) Use the directives in your template:
```html
<ion-content>
  <form [formGroup]="form">

    <!-- Grid of fields with rows and columns descriptions -->  
    <ng-container dynamic-fields-grid [frm]="form" [rows]="rows" [host]="host"></ng-container>    

    <ion-grid>

      <!-- Or per row -->
      <ng-container dynamic-fields-row [frm]="form" [cols]="rows[0].fields" [host]="host"></ng-container>

      <ion-row>
        <ion-col>
          <!-- Or per field directly -->
          <ng-container dynamicField [frm]="form" [field]="rows[0].fields[0]" [host]="host"></ng-container>
        </ion-col>
      </ion-row>
    
    </ion-grid>

  </form>
</ion-content>
```

Expressions
- Provide expressions as strings; they run with the `host` properties and optional event argument `$event`.
- Examples:
  - Visibility: `visible: '!isNew'`
  - Disabled: `disabled: 'isNew && !form.valid'`
  - Validators: `validators: 'Validators.required'`

Examples
- See `test/basic-usage.md` and `test/schema-examples.ts` for end-to-end samples of field definitions and layouts.

Directive usage
- `dynamic-fields-grid`:
  ```html
  <!-- Renders sections/rows and each field inside ion-grid/ion-row/ion-col -->
  <ng-container dynamic-fields-grid [frm]="form" [rows]="rows" [host]="host"></ng-container>
  ```
- `dynamic-fields-row`:
  ```html
  <!-- Renders a single row made of columns (fields) -->
  <ng-container dynamic-fields-row [frm]="form" [cols]="row.fields" [host]="host"></ng-container>
  ```
- `dynamicField`:
  ```html
  <!-- Renders one field based on component.type -->
  <ng-container dynamicField [frm]="form" [field]="field" [host]="host"></ng-container>
  ```

Field recipes
- Input with label, placeholder, validators and responsive size:
  ```ts
  const firstName: FieldType = {
    name: 'firstName',
    value: { type: 'string', default: '' },
    component: {
      type: 'input',
      size: { xs: 12, md: 6 },
      label: 'profile.first_name',
      input: { placeholder: 'profile.first_name', required: true },
      validators: `Validators.required`
    }
  };
  ```
- Checkbox with label on the right and simple permission:
  ```ts
  const tos: FieldType = {
    name: 'tos',
    value: { type: 'boolean', default: false },
    component: {
      type: 'checkbox',
      size: 12,
      permission: 'profile.accept_tos',
      label: 'profile.accept_tos',
      checkbox: { slot: 'start' },
      validators: `Validators.requiredTrue`,
      errors: [{ validator: 'requiredTrue', text: 'errors.accept_tos', behavior: ['touched'] }]
    }
  };
  ```
- Toggle with clickable label to flip value:
  ```ts
  const newsletter: FieldType = {
    name: 'newsletter',
    value: { type: 'boolean', default: true },
    component: {
      type: 'toggle',
      size: { xs: 12, md: 6 },
      label: 'profile.newsletter',
      toggle: { slot: 'end' }
    }
  };
  ```
- Button with icon and click expression:
  ```ts
  const submit: FieldType = {
    name: 'submit',
    value: { type: 'string' },
    component: {
      type: 'button',
      size: 12,
      label: 'buttons.submit',
      icon: { name: 'send', slot: 'start' },
      button: { expand: 'block', strong: true },
      click: `saveRow()`
    }
  };
  ```
- Datetime placeholder and basic config:
  ```ts
  const birthDate: FieldType = {
    name: 'birthDate',
    value: { type: 'date' },
    component: {
      type: 'datetime',
      size: { xs: 12, md: 6 },
      label: 'profile.birth_date',
      datetime: { placeholder: 'profile.birth_date' }
    }
  };
  ```

Labels, icons and pipes
- Label text defaults to translate; specify pipes to alter behavior:
  ```ts
  label: { text: 'buttons.accept', pipes: ['translate', 'uppercase'] }
  // To avoid default translation pipe
  label: { text: 'Accept', pipes: [] }
  ```
- Icons can use an Ionic icon name or a custom src, with an optional slot:
  ```ts
  icon: 'people'                    // shorthand name
  icon: { name: 'people', slot: 'start' }
  icon: { src: 'assets/icon/people.svg', slot: 'end' }
  ```

Visibility, disabled and validators (expressions)
- Expressions run against the provided `host` and optional `$event`:
  ```ts
  component: { visible: '!isNew' }
  component: { disabled: '!initialized || frm.invalid || frm.pristine' }
  component: { validators: `[Validators.required, Validators.email]` }
  ```

Error messages behavior
- Control when to show errors via `behavior`: any of `touched`, `dirty`, `isNew`.
  ```ts
  errors: [
    { validator: 'required', text: 'login.email_required', behavior: ['touched', 'dirty'] }
  ]
  ```

Events
- Provide expressions that receive `$event` for focus, blur, change or input:
  ```ts
  input: { ionBlur: `onBlur($event)`, ionFocus: `onFocus($event)`, ionChange: `onChange($event)`, ionInput: `onInput($event)` }
  button: { ionBlur: `onButtonBlur($event)`, ionFocus: `onButtonFocus($event)` }
  ```

Permissions
- Section/field rendering is gated by `host.hasPermission(permission)`; provide boolean or key.
  ```ts
  permission: true // or a string key your host understands
  // host.hasPermission is called internally by the library
  ```

Contributing
- Issues and PRs welcome. Keep changes focused and backward compatible.

License
- MIT
