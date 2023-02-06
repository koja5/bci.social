import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelpsService {
  constructor(private http: HttpClient) {}

  getLanguage(language: any) {
    return this.http.get('../assets/languages/home/' + language + '.json');
  }

  getAllLangs() {
    return this.http.get('./assets/languages/choose-lang.json');
  }

  setSelectionLanguage(language: string) {
    localStorage.setItem('language', language);
  }

  getSelectionLanguage() {
    return localStorage.getItem('language');
  }

  getLanguageFromFolder(folder: string, language: any) {
    return this.http.get(
      '../assets/languages/pages/' + folder + '/' + language + '.json'
    );
  }

  getCookieRead() {
    return localStorage.getItem('cookieRead');
  }

  setCookieRead() {
    localStorage.setItem('cookieRead', '0');
  }
}
