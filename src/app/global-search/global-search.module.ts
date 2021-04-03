import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { SearchAreaComponent } from './search-area/search-area.component';
import { GlobalSearchComponent } from './global-search.component';
import { SearchRoutingModule } from './global-search.routing';


@NgModule({
  declarations: [
    SearchAreaComponent,
    GlobalSearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    TabsModule.forRoot(),
    FormsModule
  ]
})
export class GlobalSearchModule { }
