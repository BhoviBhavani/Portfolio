import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAccountsComponent } from './user-accounts.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: UserAccountsComponent }]),
    ],
    declarations: [],
})
export class UserAccountsRoutingModule { }
