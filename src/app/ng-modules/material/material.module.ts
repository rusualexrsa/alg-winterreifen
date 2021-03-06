import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents = [
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDividerModule
];

@NgModule({
  imports: [CommonModule, MaterialComponents],
  exports: [CommonModule, MaterialComponents],
})
export class MaterialModule {}
