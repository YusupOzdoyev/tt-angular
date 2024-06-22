import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../data/services/profile.service';
import { debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-profile-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filter.component.html',
  styleUrl: './profile-filter.component.scss',
})
export class ProfileFilterComponent {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);
  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  });

  constructor() {
    this.searchForm.valueChanges.pipe(
      startWith({}),
      debounceTime(300),
      switchMap(formValue => {
        return this.profileService.filterProfiles(formValue);
      }),
    ).subscribe();
  };
};
