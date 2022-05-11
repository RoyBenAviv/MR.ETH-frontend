import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MpChartComponent } from './cmps/mp-chart/mp-chart.component';
import { FormsModule } from '@angular/forms';
import {
  IgxFinancialChartModule,
  IgxCategoryChartModule,
  IgxLegendModule,
  IgxDoughnutChartModule,
  IgxRingSeriesModule,
  IgxItemLegendModule,
  IgxPieChartModule,
} from 'igniteui-angular-charts';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CompareChartComponent } from './cmps/compare-chart/compare-chart.component';
import { VolumeChartComponent } from './cmps/volume-chart/volume-chart.component';
import { CryptosChartComponent } from './cmps/cryptos-chart/cryptos-chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    DashboardComponent,
    MpChartComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFilterComponent,
    SignUpComponent,
    MoveListComponent,
    TransferFundComponent,
    CompareChartComponent,
    VolumeChartComponent,
    CryptosChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IgxFinancialChartModule,
    IgxLegendModule,
    IgxCategoryChartModule,
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxItemLegendModule,
    IgxPieChartModule,
    LottieModule.forRoot({ player: playerFactory }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
