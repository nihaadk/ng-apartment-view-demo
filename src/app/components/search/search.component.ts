import { Component, OnDestroy, OnInit, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription, debounce, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm = output<string>();

  private readonly formBuilder = inject(FormBuilder);
  private subscription = new Subscription();

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    this.subscribeInputChange();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      term: this.formBuilder.control(null),
    });
  }

  private subscribeInputChange(): void {
    this.subscription.add(
      this.form.valueChanges
        .pipe(
          debounceTime(300),
          map((value) => value.term)
        )
        .subscribe((newValue) => this.searchTerm.emit(newValue))
    );
  }
}
