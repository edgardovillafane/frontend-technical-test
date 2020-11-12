import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InAtlas frontend test';


  public async method() {
    const value = null;

    if (value === 'Vader') {
      return 'vader';
    }else if (value === 'Luke') {
      return 'luke';
    } else if (value === 'Yoda') {
      return 'yoda';
    } else if (value === 'Kylo') {
      return 'kylo';
    } else {
      return 'chewee';
    }

  }

}
