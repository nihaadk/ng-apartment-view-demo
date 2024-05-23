import { Component, inject } from '@angular/core';
import { ApartmentService } from '../../service/apartment.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { SearchComponent } from '../search/search.component';
import { ApartmentFilter } from '../../pipes/apartment-filter.pipe';
import { Observable } from 'rxjs';
import { IApartment } from '../../interfaces/apartment.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, SearchComponent, ApartmentFilter],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly apartmentService = inject(ApartmentService);
  apartments$: Observable<IApartment[]> =
    this.apartmentService.getAllApartments();
  searchTerm: string = '';
}
