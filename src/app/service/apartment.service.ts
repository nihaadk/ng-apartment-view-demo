import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, mergeAll, toArray } from 'rxjs';
import { IApartment } from '../interfaces/apartment.interface';

const APARTMENTS_DEMO_DATA: IApartment[] = [
  {
    id: 1,
    title: 'Cool Apartment',
    description: '2 Zimmer, 50 m², 700€/Monat',
    rooms: 2,
    area: 50,
    rent: 700,
    imageUrl:
      'https://www.shutterstock.com/image-photo/eu-modern-european-complex-apartment-600nw-1445600369.jpg',
  },
  {
    id: 2,
    title: 'Nice Apartment',
    description: '3 Zimmer, 75 m², 1000€/Monat',
    rooms: 3,
    area: 75,
    rent: 1000,
    imageUrl:
      'https://t3.ftcdn.net/jpg/03/48/06/74/360_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private apartments$: BehaviorSubject<IApartment[]> = new BehaviorSubject(
    APARTMENTS_DEMO_DATA
  );

  getAllApartments(): Observable<IApartment[]> {
    return this.apartments$.asObservable();
  }

  getCurrentApartment(id: number): Observable<IApartment> {
    return this.apartments$.pipe(
      mergeAll(),
      filter((apartment) => apartment.id === id)
    );
  }

  filterApartment(term: string): Observable<IApartment[]> {
    if (!term) {
      return this.apartments$.asObservable();
    } else {
      return this.apartments$.pipe(
        mergeAll(),
        filter((apartment) =>
          apartment.description
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase())
        ),
        toArray()
      );
    }
  }
}
