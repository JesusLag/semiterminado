import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
})
export class ErrorPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Volver() {
    this.router.navigate(['/login']); // Navega a la página de inicio de sesión
  }

}
