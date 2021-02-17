import { Component } from '@angular/core';
import { CyrilService } from './cyril.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CyrilService]
})
export class AppComponent {
  constructor(private _cyrilService: CyrilService){
    console.log(_cyrilService.parler());
  };
  title = 'hello-world';
}
