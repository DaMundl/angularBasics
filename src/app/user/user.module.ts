import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserFormComponent],
  exports: [],
  providers: []
})

export class UserModule {}
