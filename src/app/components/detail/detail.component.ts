import { Component, OnInit, inject, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApartmentService } from '../../service/apartment.service';
import { Observable } from 'rxjs';
import { IApartment } from '../../interfaces/apartment.interface';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  id = input<string>();

  private readonly apartmentService = inject(ApartmentService);

  currentApartment$!: Observable<IApartment>;

  ngOnInit(): void {
    const id = Number(this.id());
    if (id) {
      this.currentApartment$ = this.apartmentService.getCurrentApartment(id);
    }
  }
}
