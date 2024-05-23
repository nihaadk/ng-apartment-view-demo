import { Component, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  id = input.required();
  title = input.required();
  description = input.required();
  imageUrl = input.required();
}
