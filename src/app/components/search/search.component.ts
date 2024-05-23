import { Component, OnInit, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchTerm = output<string>();

  private readonly formBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      term: this.formBuilder.control(null),
    });
  }

  filter(): void {
    const { term } = this.form.value;
    this.searchTerm.emit(term);
  }
}
