import { Component, inject } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import { CommonModule } from '@angular/common';
import { CatFact } from '../interfaces/data';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.scss'
})
export class CatFactComponent {
  
  catFact: any = {};
  isLoading: boolean = true;
  private catFactService = inject(CatFactService);

  ngOnInit(): void {
    this.getCatFact();
  }

  getCatFact() {
    this.isLoading = true;
    this.catFactService.getCatFact().subscribe({
      next: (response: CatFact[]) => {
        this.catFact = response;
        this.isLoading = false;
      },
      error: (error: Error) => {
        console.error('Cat Fact Error', error);
        alert(error.message);
        this.isLoading = false;
      },
    });
  }
}
