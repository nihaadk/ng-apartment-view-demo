import { Pipe, PipeTransform } from '@angular/core';
import { IApartment } from '../interfaces/apartment.interface';

@Pipe({
  name: 'apartmentFilter',
  standalone: true,
})
export class ApartmentFilter implements PipeTransform {
  transform(apartments: IApartment[] | null, searchTerm: string): IApartment[] {
    if (!apartments) {
      return [];
    }

    if (!searchTerm) {
      return apartments;
    }

    const lowerSearchText = searchTerm.toLowerCase();

    return apartments.filter(
      (apartment) =>
        apartment.title.toLowerCase().includes(lowerSearchText) ||
        apartment.description.toLowerCase().includes(lowerSearchText)
    );
  }
}
