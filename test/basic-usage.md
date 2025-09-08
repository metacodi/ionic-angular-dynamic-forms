Basic Usage Examples
====================

This folder contains usage examples (not executable unit tests) showing how to integrate the dynamic components into an Ionic + Angular application.

Host component (excerpt)
```example.page.ts```
```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DynamicRowType, FieldType } from 'ionic-angular-dynamic-forms';

@Component({ selector: 'app-example', templateUrl: './example.page.html' })
export class ExamplePage {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({});
  host = {
    isNew: false,
    initialized: true,
    hasPermission: (p?: string | boolean) => p === undefined || p === true
  };

  rows: DynamicRowType[] = [
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
        },
        {
          name: 'newsletter',
          value: { type: 'boolean', default: true },
          component: {
            type: 'toggle',
            size: { xs: 12, md: 6 },
            label: 'profile.newsletter',
            toggle: { slot: 'end' }
          }
        }
      ]
    }
  ];
}
```

```example.page.html```
Template (excerpt)
```html
<ion-content>
  <form [formGroup]="form">
    <ng-container dynamic-fields-grid [frm]="form" [rows]="rows" [host]="host"></ng-container>
  </form>
</ion-content>
```

Single field rendering
```html
<ng-container dynamicField [frm]="form" [field]="rows[0].fields[0]" [host]="host"></ng-container>
```

See also: `schema-examples.ts` or `buttons-examples.md` for more field configurations.

