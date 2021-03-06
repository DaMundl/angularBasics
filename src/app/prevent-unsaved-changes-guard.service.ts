import { LoginComponent } from './login.component';
import { CanDeactivate } from '@angular/router';


export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent> {

  canDeactivate(component: LoginComponent) {
    if (component.form.dirty) {
        return confirm('Are you sure?');
    }
    return true;
  }
}
