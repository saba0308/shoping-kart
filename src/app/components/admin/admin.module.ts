import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AdminComponent } from './admin.component';
import { TmToastrModule } from '@tmlib/ui-sdk/toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TmLayoutModule } from '@tmlib/ui-sdk/layout';
import { TmCardModule } from '@tmlib/ui-sdk/card';
import { TmThemeModule } from '@tmlib/ui-sdk';
import { TmSidebarModule } from '@tmlib/ui-sdk/sidebar';
import { TmButtonModule } from '@tmlib/ui-sdk/button';
import { TmMenuModule } from '@tmlib/ui-sdk/menu';
import { TmContextMenuModule } from '@tmlib/ui-sdk/context-menu';
import { TmUserModule } from '@tmlib/ui-sdk/user';
import { TmCheckboxModule } from '@tmlib/ui-sdk/checkbox';
import { TmPopoverModule } from '@tmlib/ui-sdk/popover';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as CanvasJSAngularChart from '../../../assets/canvasjs.angular.component';
import { TmSelectModule } from '@tmlib/ui-sdk/select';
import { TmRadioModule } from '@tmlib/ui-sdk/radio';
import { TmGridModule } from '@tmlib/ui-sdk/grid';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { SortPipe } from '../pipes/sort.pipe';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CanvasJSChart, UserListComponent, DateAgoPipe, SortPipe
  ],
  imports: [
    CommonModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AdminRoutingModule, FormsModule, ReactiveFormsModule,
    TmLayoutModule, TmCardModule, TmSidebarModule.forRoot(),
    TmButtonModule, TmMenuModule, TmContextMenuModule, TmUserModule, TmCheckboxModule, TmCardModule,
    TmPopoverModule, TmSelectModule, TmRadioModule, TmGridModule
  ]
})
export class AdminModule {
  static forRoot(): ModuleWithProviders<AdminModule> {
    return {
      ngModule: AdminModule,
      providers: [
        ...<[]>TmThemeModule.forRoot(
          {
            name: 'default', // 'cosmic' , 'dark' , 'corporate'
          },
        ).providers,
      ],
    };
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}