import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Route} from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { CharactersComponent } from './characters/characters.component'; 
import { StudentsComponent } from './students/students.component';
import { DataService } from './data.service';
import { InicioComponent } from './inicio/inicio.component';


const router: Route [] = [
  {path: '', component: InicioComponent},
  {path: 'Staff', component: StaffComponent},
  {path: 'Characters', component: CharactersComponent},
  {path: 'Students', component: StudentsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    CharactersComponent,
    StudentsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(router),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
