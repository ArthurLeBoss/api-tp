import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { StudentService } from './services/http/student.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    MatToolbarModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [StudentService],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
