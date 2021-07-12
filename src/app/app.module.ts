import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductStarComponent } from './product/product-star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { combineAll } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductStarComponent,
    ConvertToSpacesPipe,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
