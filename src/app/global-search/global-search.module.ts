import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { SearchAreaComponent } from './search-area/search-area.component';
import { GlobalSearchComponent } from './global-search.component';
import { SearchRoutingModule } from './global-search.routing';
import { HttpClientModule } from '@angular/common/http';
// import { GoogleChartsModule } from 'angular-google-charts';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GlobalSearchService } from './global-search.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartsModule } from 'ng2-charts';


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
    // GoogleChartsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ChartsModule,
    MatButtonModule
  ],
  providers: [
    GlobalSearchService
  ]
})
export class GlobalSearchModule { }
