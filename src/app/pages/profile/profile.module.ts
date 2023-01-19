import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [ComponentsModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
  exports: [],
})
export class ProfileModule {}
