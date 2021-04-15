import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { SearchAreaComponent } from './search-area/search-area.component';
import { GlobalSearchComponent } from './global-search.component';
import { SearchRoutingModule } from './global-search.routing';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { GlobalSearchService } from './global-search.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SearchAreaComponent,
    GlobalSearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    TabsModule.forRoot(),
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleChartsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    GlobalSearchService
  ]
})
export class GlobalSearchModule { }
