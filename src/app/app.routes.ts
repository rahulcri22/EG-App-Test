import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadComponent: () => import('./product/product/product.component').then(c => c.ProductComponent)
    },
    {path: 'product',
     loadComponent: () => import('./product/product/product.component').then(c => c.ProductComponent)
    },
    {path: 'cat-fact',
     loadComponent: () => import('./cat-fact/cat-fact.component').then(c => c.CatFactComponent)
    },
    {path: 'university',
    loadComponent: () => import('./universities/university/university.component').then(c => c.UniversityComponent)
    }
]
