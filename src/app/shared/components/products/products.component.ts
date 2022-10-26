import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { switchMap } from 'rxjs/operators';
import { zip } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  total = 0;
  @Input() products: Product[] = [];
  @Input()
  set productId(id: string | null) {
    if (id) {
      this.onShowDetail(parseInt(id));
    }
  }
  @Output() loadMore = new EventEmitter();
  today = new Date();
  date = new Date(2021,1,1);
  showProductDetail = false;
  productChosen: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    description: '',
    category: {
      id:0,
      name: ''
    }
  }
  limit = 10;
  offset = 0;
  statusDetails: 'loading' | 'success' | 'error' | 'init' = 'init';
  constructor(
    private productService: ProductsService,
    private storeServices: StoreService
  ) { }

  onAddToShoppingCart(product: Product) {
    this.storeServices.addProduct(product);
    this.total = this.storeServices.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.statusDetails = 'loading';
    if (!this.showProductDetail) {
      this.showProductDetail = true;
    }
    this.productService.getProduct(id).subscribe(
      (product) => {
        this.productChosen = product;
        this.statusDetails = 'success';
      }, response => {
        console.log(response);
        this.statusDetails = 'error';
      }
    )
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'Descripcion de un nuevo producto',
      images: ['https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'],
      price: 1000,
      categoryId: 1
    }
    this.productService.create(product).subscribe(
      data => this.products.unshift(data)
    )
  }

  editProduct() {
    const changes: UpdateProductDTO = {
      title: 'Nuevo Titulo updated'
    };
    const id = this.productChosen.id;
    this.productService.update(id, changes).subscribe(
      data => {
        const productIndex = this.products.findIndex(item => item.id == this.productChosen.id);
        this.products[productIndex] = data;
        this.productChosen = data;
      }
    )
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productService.delete(id).subscribe(
      ()=> {
        const productIndex = this.products.findIndex(item => item.id == this.productChosen.id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      }
    )
  }

  //This for avoid the Callback hell
  readAndUpdate(id: number) {
    //this way when is depending
    this.productService.getProduct(id)
    .pipe(
      switchMap((product) => this.productService.update(product.id, { title: ' Change'}))
    )
    .subscribe(data => {
      console.log(data);
    });

    //this way when that execute parallels
    zip(
      this.productService.getProduct(50),
      this.productService.update(21, {title: 'nuevo'})
    ).subscribe(response => {
      const read = response[0];
      const update = response[1];
    })
  }

  onLoadMore() {
    this.loadMore.emit();
  }
}
