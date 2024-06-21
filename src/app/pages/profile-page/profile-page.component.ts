import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { ProfileService } from '../../data/services/profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";
import { PostFeedComponent } from "./post-feed/post-feed.component";

@Component({
    selector: 'app-profile-page',
    standalone: true,
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.scss',
    imports: [RouterLink, ProfileHeaderComponent, AsyncPipe, SvgIconComponent, ImgUrlPipe, PostFeedComponent]
})
export class ProfilePageComponent {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)
  
  me$ = toObservable(this.profileService.me)
  subscribers$ = this.profileService.getSubscribersShortList(5)

  profile$ = this.route.params
  .pipe(
    switchMap(({id}) => {
      if (id === 'me') return this.me$
      return this.profileService.getAccount(id)
    })
  )
}
