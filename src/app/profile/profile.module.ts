import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SplitterModule } from 'primeng/splitter';
import { HttpClientModule } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SplitterModule,
    HttpClientModule,
    DividerModule
  ]
})
export class ProfileModule { }
