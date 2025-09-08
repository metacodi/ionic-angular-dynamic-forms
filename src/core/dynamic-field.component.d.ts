import { Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FieldType, IconControlType, LabelControlType } from './types';
import { DynamicAbstractComponent } from './dynamic-abstract.component';
/**
 * Base component from which all field components inherit.
 */
export declare abstract class DynamicFieldComponent extends DynamicAbstractComponent {
    protected injector: Injector;
    field: FieldType;
    frm: FormGroup;
    host: any;
    constructor(injector: Injector);
    get label(): LabelControlType;
    get labelText(): string;
    get icon(): IconControlType;
    get showIcon(): boolean;
    get iconName(): string | undefined;
    get iconSrc(): string | undefined;
    get iconSlot(): 'start' | 'end' | undefined;
    /**
     * Determines whether an error message should be shown to the user.
     *
     * ```html
     * <p *ngIf="initialized && (!isNew || isNew && (getter('descripcion').touched || getter('descripcion').dirty)) && getter('descripcion').errors?.required">{{'misdirecciones.descripcion_required' | translate}}</p>
     * ```
     *
     * ```html
     * <p *ngIf="(getter('email').touched || getter('email').dirty) && getter('email').errors?.required">{{'login.email_required' | translate}}</p>
     * ```
     */
    hasError(err: any): boolean;
    evalBehavior(behavior: any): boolean;
    get frmControl(): FormControl;
}
//# sourceMappingURL=dynamic-field.component.d.ts.map