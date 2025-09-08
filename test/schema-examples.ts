import { DynamicRowType, FieldType } from '../src/core/types';

// Example field set demonstrating supported properties and responsive sizes.
export const exampleFields: FieldType[] = [
  {
    name: 'email',
    value: { type: 'string', default: '' },
    component: {
      type: 'input',
      size: { xs: 12, md: 6 },
      label: 'profile.email',
      icon: { name: 'mail', slot: 'start' },
      input: { type: 'email', placeholder: 'profile.email', required: true },
      validators: `Validators.required`
    }
  },
  {
    name: 'birthDate',
    value: { type: 'date' },
    component: {
      type: 'datetime',
      size: { xs: 12, md: 6 },
      label: 'profile.birth_date',
      datetime: { placeholder: 'profile.birth_date' }
    }
  },
  {
    name: 'tos',
    value: { type: 'boolean', default: false },
    component: {
      type: 'checkbox',
      size: { xs: 12 },
      label: 'profile.accept_tos',
      checkbox: { slot: 'start' },
      errors: [
        { validator: 'requiredTrue', text: 'errors.accept_tos', behavior: ['touched'] }
      ],
      validators: `Validators.requiredTrue`
    }
  },
  {
    name: 'submit',
    value: { type: 'string' },
    component: {
      type: 'button',
      size: { xs: 12 },
      label: 'buttons.submit',
      button: { expand: 'block', strong: true },
      click: `saveRow()`
    }
  }
];

// Example of rows for DynamicFieldsGrid
export const exampleRows: DynamicRowType[] = [
  {
    title: 'profile.data',
    row: { ngClass: `{'dense': true}` },
    fields: exampleFields
  }
];

