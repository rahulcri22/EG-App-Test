import { Component, OnInit, inject } from '@angular/core';
import { UniversityService } from './university.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-university',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss'
})
export class UniversityComponent implements OnInit {

  universities: any[] = [];
  currentIndex: number = 0;
  data: any[] = [];
  selectedUniversity: any;
  private universityService = inject(UniversityService);

  ngOnInit(): void {
    this.getUniversities();
  }


  getUniversities() {
    this.universityService.getUniversities().subscribe({
      next: (response: any) => {
        let row: any = {};
        response.forEach((element : any, index: number) => {
          row.id = index;
          row.name =  element.name;
          row.state =  'EU';
          row.country = element.country;
          row.alphaCode = element.alpha_two_code;
          row.website = element.web_pages.length ? element.web_pages[0] : '';
          this.universities.push(row);
          row = {};
        });
      },
      error: (error: Error) => {
        console.error('Error', error);
      },
    });
  }

  nextUniversity() {
    this.currentIndex = (this.currentIndex + 1) % this.universities.length;
  }

  prevUniversity() {
    this.currentIndex = (this.currentIndex - 1 + this.universities.length) % this.universities.length;
  }

  onUniversitySelect() {
    this.currentIndex = (this.selectedUniversity.id) % this.universities.length;
  }

}
