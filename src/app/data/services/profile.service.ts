import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }

  getSubscribersSortList() {
    return this.http.get<Pageble<Profile>>(`${this.baseApiUrl}account/subscribers/?page=1&size=50`)
      .pipe(
        map(res => res.items.slice(0, 3))
      )
  }
}

