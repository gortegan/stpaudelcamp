import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { ServesComponent } from './home/serves/serves.component';
import { DividerComponent } from './home/divider/divider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule,
  MatStepperModule, MatHorizontalStepper, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule,
} from '@angular/material';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { CookieLawModule } from 'angular2-cookie-law';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ServesComponent,
    DividerComponent,
    HistoryComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    CookieLawModule,
    APP_ROUTES,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
