import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { UserAccountsComponent } from './user-accounts.component';
import { UserAccountsService } from './user-accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [UserAccountsComponent],
  providers: [UserAccountsService],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule,
    TableModule
  ]
})
export class UserAccountsModule { }
