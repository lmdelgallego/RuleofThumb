import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './pages/home/home.component';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PassTrialsComponent } from './pages/pass-trials/pass-trials.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import * as fromRuling from './store/reducers/ruling.reduces';
import {RulingEffects} from './store/effects/ruling.effects';
import {clearState} from './store/meta.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    PassTrialsComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatButtonModule,
    StoreModule.forRoot(
      {ruling: fromRuling.reducer },
      {
        metaReducers: [clearState],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([RulingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
