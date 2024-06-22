import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { ProfileService } from '../../data/services/profile.service';
import { ProfileFilterComponent } from './profile-filter/profile-filter.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-search-page',
    standalone: true,
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.scss',
    imports: [ProfileCardComponent, ProfileFilterComponent, AsyncPipe],
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles = this.profileService.filteredProfiles;
}
