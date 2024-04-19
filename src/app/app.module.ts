import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './feature/display/display.component';
import { ApiRepository, ApiService } from './core/services';

@NgModule({
  declarations: [AppComponent, DisplayComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: ApiRepository,
      useClass: ApiService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
