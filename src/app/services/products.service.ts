import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError} from 'rxjs';
import { Category, CreateProductDTO, Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}/products`;
  constructor(
    private http: HttpClient
  ) { }

  getByCategoryId(id: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset)
    {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${environment.API_URL}/categories/${id}/products`, { params })
  }

  getAllCategories(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset)
    {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Category[]>(`${environment.API_URL}/categories`, { params })
  }

  getAllProducts(limit?: number, offset?: number) {
    // https://fakestoreapi.com/products
    let params = new HttpParams();
    if (limit && offset)
    {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
                    .pipe(
                      map(products => products.map(item => {
                        return {
                          ...item,
                          taxes: .19 * item.price
                        }
                      }))
                    )
                    //.pipe(retry(3)); it's for retry when a request is broken
  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }, context: checkTime()
    });
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Error in el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('Product not found');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('Unauthorired');
        }
        return throwError('Ups an error ocurred');
      })
    );
  }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto)
  }

  update(id: number, dto: any) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto)
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
