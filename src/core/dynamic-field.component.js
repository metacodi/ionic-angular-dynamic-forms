import { UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { DynamicAbstractComponent } from './dynamic-abstract.component';
/**
 * Base component from which all field components inherit.
 */
export class DynamicFieldComponent extends DynamicAbstractComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    // ---------------------------------------------------------------------------------------------------
    //  label
    // ---------------------------------------------------------------------------------------------------
    get label() {
        return this.field.component.label;
    }
    get labelText() {
        let text = typeof this.label === 'string' ? this.label : this.evalOrExpr(this.label.text);
        if (this.label.pipes && this.label.pipes.length) {
            this.label.pipes.map(pipe => {
                switch (pipe) {
                    case 'lowercase':
                        text = (new LowerCasePipe()).transform(text);
                        break;
                    case 'uppercase':
                        text = (new UpperCasePipe()).transform(text);
                        break;
                    case 'titlecase':
                        text = (new TitleCasePipe()).transform(text);
                        break;
                    case 'translate':
                        text = this.translate.instant(text);
                        break;
                }
            });
        }
        else {
            text = this.translate.instant(text);
        }
        return text;
    }
    // ---------------------------------------------------------------------------------------------------
    //  icon
    // ---------------------------------------------------------------------------------------------------
    get icon() {
        return typeof this.field.component.icon === 'object' ? this.field.component.icon : undefined;
    }
    get showIcon() {
        return !!this.field.component.icon;
    }
    get iconName() {
        const icon = this.field.component.icon;
        return typeof icon === 'string' && !icon.includes('assets') ? icon : this.evalOrExpr(icon.name) || undefined;
    }
    get iconSrc() {
        const icon = this.field.component.icon;
        return typeof icon === 'string' && icon.includes('assets') ? icon : this.evalOrExpr(icon.src) || undefined;
    }
    get iconSlot() {
        const icon = this.field.component.icon;
        return icon === undefined || icon.slot === undefined ? 'start' : icon.slot;
    }
    // ---------------------------------------------------------------------------------------------------
    //  errors
    // ---------------------------------------------------------------------------------------------------
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
    hasError(err) {
        // If no behavior has been defined, use a sensible default.
        if (!err.behavior) {
            err.behavior = ['touched', 'dirty'];
        }
        // console.log('hasError => ', { field: this.field.name,
        //   1: (!this.host.hasOwnProperty('initialized') || !!this.host.initialized),
        //   2: (
        //     !err.behavior.includes('isNew') && this.evalBehavior(err.behavior) ||
        //     (!this.host.isNew || !!this.host.isNew && this.evalBehavior(err.behavior))
        //   ),
        //   3: !!this.frmControl.errors && !!this.frmControl.errors[err.validator],
        //   err, formControl: this.frmControl, initialized: this.host.initialized, isNew: !!this.host.isNew
        // });
        return (
        // Ensure the form has been initialized
        (!this.host.hasOwnProperty('initialized') || !!this.host.initialized)
            // Check the declared behavior.
            && (!err.behavior.includes('isNew') && this.evalBehavior(err.behavior) ||
                (!this.host.isNew || !!this.host.isNew && this.evalBehavior(err.behavior)))
            // Ensure the control contains the specific error.
            && !!this.frmControl.errors && !!this.frmControl.errors[err.validator]
        // // Optionally check there is a message to show.
        // && !!this.evalOrExpr(err.text) as any
        );
    }
    evalBehavior(behavior) {
        return (!behavior.includes('touched') || !!this.frmControl.touched ||
            !behavior.includes('dirty') || !!this.frmControl.dirty);
    }
    get frmControl() {
        return this.frm.controls[this.field.name];
    }
}
//# sourceMappingURL=dynamic-field.component.js.map