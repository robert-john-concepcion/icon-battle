import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoaderComponent } from './loader/loader.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { CookieService } from 'ngx-cookie-service';
import { BattleComponent } from './battle/battle.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PlayerComponent } from './player/player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UniqueUsernameDirective } from './shared/unique-username.directive';
import { MyIconsComponent } from './my-icons/my-icons.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    HeaderComponent,
    IconListComponent,
    LoaderComponent,
    PaginationComponent,
    BattleComponent,
    HeroFormComponent,
    PlayerComponent,
    UniqueUsernameDirective,
    MyIconsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
