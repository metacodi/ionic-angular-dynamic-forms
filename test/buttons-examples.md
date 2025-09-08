Dynamic buttons examples
================================

On this page you will find dynamic button definitions (configured in TypeScript) and their equivalent once rendered in an Ionic/Angular template. We add didactic comments to explain what each property does and how it maps to the final HTML.


## Button definitions

### Save button

We define a save button with a translated label, dynamic color based on the form state, and disabled when there are no changes or the form is invalid.

```typescript
export const saveButton: FieldType = {
  name: 'save',
  component: {
    type: 'button',                    // Component type
    click: 'saveRow()',                // Host method invoked on (click)
    // icon: 'checkmark-circle',      // Optional: if set, shows an icon on the button
    label: {                          // Button label
      text: { expr: `'buttons.save'` }, // Expr: evaluated in the host/template context
      pipes: ['translate', 'uppercase'] // Pipes applied to the rendered text
    },
    button: {
      expand: 'block',                // Takes full column width
      color: { expr: `frm.valid ? 'primary' : 'secondary'` } // Color based on form state
    },
    disabled: '!initialized || frm.invalid || frm.pristine || !hasChanges', // When true, the button is disabled
  }
};
```

```html
<ion-col>
  
  <!-- Rendered equivalence: the dynamic component generates this HTML -->
  <ion-button (click)="saveRow()"
    [disabled]="!initialized || frm.invalid || frm.pristine || !hasChanges || isSaving"
    <!-- Note: the HTML example adds `isSaving` as a common pattern -->
    [color]="frm.valid ? 'primary' : 'secondary'" expand="block">
    <ion-icon name="checkmark-circle" slot="start"></ion-icon>
    <!-- Text is translated and uppercased -->
    {{'buttons.save' | translate | uppercase }}
  </ion-button>
  
</ion-col>
```

### Delete button

Delete or cancel button depending on whether the record is new (`isNew`). Shows the icon only when it is not new.

```typescript
export const deleteButton: FieldType = {
  name: 'delete',
  component: {
    type: 'button',
    click: 'deleteRow()',
    icon: { name: 'trash', visible: '!isNew' }, // Icon visible only if !isNew
    label: {
      text: { expr: `(isNew ? 'buttons.cancel' : 'buttons.delete')` }, // Conditional label
      pipes: ['translate', 'uppercase']
    },
    button: { expand: 'block', color: { expr: `isNew ? 'secondary' : 'danger'` } }, // Conditional color
    disabled: '!initialized || frm.invalid || frm.pristine || !hasChanges',
  }
};
```

```html
<ion-col>
  
  <ion-button (click)="deleteRow()" [color]="isNew ? 'secondary' : 'danger'" expand="block">
    <!-- Icon shows only when !isNew -->
    <ion-icon *ngIf="!isNew" name="trash" slot="start"></ion-icon>
    <!-- Label also conditioned by isNew -->
    {{(isNew ? 'buttons.cancel' : 'buttons.delete') | translate | uppercase }}
  </ion-button>
  
</ion-col>
```

<br />


## Grid of buttons

A grid (`DynamicFieldsGrid`) lays out buttons in rows and columns. The `rows` property contains columns (`cols`), and each column holds a dynamic field (e.g., `saveButton`). The `class: 'buttons'` helps styling the grid via CSS.

### Save standalone

Single column with the save button.

```typescript
export const saveButtonGrid: DynamicFieldsGrid = {
  grid: { class: 'buttons' },
  rows: [{ cols: [ saveButton ], }],
};
```

```html
<ion-grid class="buttons">
  <ion-row>
    <ion-col>
      
      <ion-button (click)="saveRow()"
        [disabled]="!initialized || frm.invalid || frm.pristine || !hasChanges || isSaving"
        [color]="frm.valid ? 'primary' : 'secondary'" expand="block">
        <ion-icon name="checkmark-circle" slot="start"></ion-icon>
        {{'buttons.save' | translate | uppercase }}
      </ion-button>
      
    </ion-col>
  </ion-row>
</ion-grid>
```


### Save & delete

Two columns: first the delete/cancel button and then the save button. The order in `cols` is the render order.

```typescript
export const deleteAndSaveButtonsGrid: DynamicFieldsGrid = {
  grid: { class: 'buttons' },
  rows: [{ cols: [ deleteButton, saveButton ], }],
};
```

```html
<ion-grid class="buttons">
  <ion-row>
    <ion-col>
      
      <ion-button (click)="deleteRow()" [color]="isNew ? 'secondary' : 'danger'" expand="block">
        <ion-icon *ngIf="!isNew" name="trash" slot="start"></ion-icon>
        {{(isNew ? 'buttons.cancel' : 'buttons.delete') | translate | uppercase }}
      </ion-button>
      
    </ion-col>
    <ion-col>
      
      <ion-button (click)="saveRow()"
        [disabled]="!initialized || frm.invalid || frm.pristine || !hasChanges || isSaving"
        [color]="frm.valid ? 'primary' : 'secondary'" expand="block">
        <ion-icon name="checkmark-circle" slot="start"></ion-icon>
        {{'buttons.save' | translate | uppercase }}
      </ion-button>
      
    </ion-col>
  </ion-row>
</ion-grid>
```

<br />

## Context and best practices
- Form context: variables like `frm`, `initialized`, `hasChanges`, `isNew` come from the host component and can be used in `expr` to control state, color, and visibility.
- `expr` expressions: evaluated in the same context as the template; avoid heavy logic here, prefer delegating to host methods/computed properties when needed.
- Label pipes: processed in the declared order; combine `translate` with formatting (`uppercase`, etc.).
- Optional icons: define `icon` as a string (`'checkmark-circle'`) or as an object with `visible` to control conditional display.
- Accessibility: ensure the button label is meaningful even if the icon is hidden.
