import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { FormBuilderModule } from '@lib/components/form-builder';
import { DynamicFormModule } from '@lib/components/dynamic-form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighlightModule,

    MatToolbarModule,

    FormBuilderModule,
    DynamicFormModule,

    AppRoutingModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      // useValue: {
      //   fullLibraryLoader: () => import('highlight.js'),
      // },
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
