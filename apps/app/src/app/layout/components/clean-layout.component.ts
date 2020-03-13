
import { Component } from '@angular/core';

@Component({
  selector: 'app-clean-layout',
  template: `
    <div style="
      width: 100%;
      height: 100%;
      background: url(https://www.toptal.com/designers/subtlepatterns/patterns/y-so-serious-white.png);
    ">
      <div style="
        width: 80vw;
        margin: 0 auto;
        padding-top: 15vh;
      ">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class CleanLayoutComponent {}
