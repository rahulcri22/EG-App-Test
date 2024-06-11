import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductService } from './product.service';
import { Product } from '../../interfaces/data';
import { CommonModule } from '@angular/common';
declare var bootstrap: any; // Declare bootstrap variable

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [
        ProductCardComponent,
        CommonModule]
})
export class ProductComponent implements OnInit {

    products: Product[] = [];
    price: number = 0;
    name: string = '';
    description: string = '';
    productDetails: any = {};
    @ViewChild('productDetailsModal') content!: ElementRef;
    private productService = inject(ProductService);

    ngOnInit(): void {
        this.getProducts();
      }

      ngAfterViewInit() {
        const modalElement = this.content.nativeElement;
        const modal = new bootstrap.Modal(modalElement);
      }

      getProducts() {
        this.productService.getProducts().subscribe({
          next: (response: any) => {
              this.products = response.data;
          },
          error: (error: Error) => {
            console.error('Error', error);
          },
        });
      }

      viewDetails(product: any) {
        this.productDetails = product;
        const modalElement = this.content.nativeElement; 
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.show();
      }

      closeModal() {
        const modalElement = this.content.nativeElement;
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    }
}
