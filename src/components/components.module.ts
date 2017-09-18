import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container';
import { IonicPageModule, IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ContainerComponent],
	imports: [IonicPageModule,IonicModule],
	exports: [ContainerComponent]
})
export class ComponentsModule {}
