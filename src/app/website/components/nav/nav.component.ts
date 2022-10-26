import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu: boolean = false;
  counter = 0;
  categories: Category[] = [];
  profile: User | null = null;
  constructor(
    private storeService: StoreService,
    private productServices: ProductsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      products => {
        this.counter = products.length;
      }
    )
    this.getAllCategories();
    this.authService.user$
    .subscribe(data => this.profile = data)
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getAllCategories() {
    this.productServices.getAllCategories()
    .subscribe(data => this.categories = data)
  }

  login() {
    this.authService.loginAndGet('oscar@gmail.com','12345')
    .subscribe(() => {
      this.router.navigate(['/profile'])
    })
  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }
}
