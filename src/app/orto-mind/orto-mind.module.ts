import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrtoMindRoutingModule } from './orto-mind.routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, OrtoMindRoutingModule, SharedModule, IonicModule],
})
export class OrtoMindModule {}
