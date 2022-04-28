import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/*Hier stellen das Routing ein. Das Routing dient dazu von von einer Seite
auf eine andere Seite anhand einer /Pfadangabe in der URI zu navigieren. Bspw.
auf die Post Edit Website, etc. */
const routes: Routes = [
/*path: '' wird eingestellt, weil wir sonst
garnichts anzeigen wenn kein /etcasdfasdf hinter localhost:4200 steht. 
Im Fall von post-edit wollen wir zusätzlich noch einen Parameter in der URL übergeben.
Das machen wir mit index. Somit haben wir bspw. localhost:4200/post-edit/3 stehen */
{
  path: '',
  redirectTo: 'post-list',
  pathMatch: 'full',
},

  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  { 
    path: 'post-edit/:index',
    component: PostEditComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent
  ],
/* imports muss mit den neu importierten Modulen oben übereinstimmen */
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*Das hier verweist auf die oben angegebenen Routen wie post-edit etc.  */
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
