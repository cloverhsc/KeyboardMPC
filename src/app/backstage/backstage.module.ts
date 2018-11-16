import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackstageRoutingModule } from './backstage-routing.module';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    BackstageRoutingModule
  ]
})
export class BackstageModule { }
