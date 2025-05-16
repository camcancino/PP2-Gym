import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: false,
})
export class LandingPage {

constructor(private router: Router) {
    console.log('Redireccionando en 5 segundos a Login ');
    
    setTimeout(() => {
      this.router.navigate(['./login']);
    }, 5000);
  }

}
