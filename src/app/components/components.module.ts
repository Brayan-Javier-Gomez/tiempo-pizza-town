import { NgModule } from '@angular/core';

import { ImageModule } from './atoms/Image/image.module';
import { MenuOptionModule } from './molecules/menu-option/menu-option.module';
import { MenuComponent } from './organisms/menu/menu.component';

@NgModule({
  imports: [MenuOptionModule, ImageModule],
  declarations: [MenuComponent],
  exports: [ImageModule, MenuOptionModule],
})
export class ComponentsModule {}
