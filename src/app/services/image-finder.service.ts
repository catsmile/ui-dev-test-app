import { Injectable } from '@angular/core';
import { FlickrResponse, Image } from '../entities/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageFinderService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getImages(searchQuery?: string, pageSize?: number, page?: number): Observable<{
    images: Image[];
    total: number;
  }> {
    return this.httpClient.get<FlickrResponse>(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${environment.flickr.apiKey}&text=${searchQuery}&format=json&nojsoncallback=1&per_page=${pageSize}&page=${page}`).pipe(
      map((response) => {
        if (response.stat !== 'ok') {
          return {
            total: 0,
            images: []
          };
        }

        return {
          total: response.photos.total,
          images: response.photos.photo.map(p => {
            return {
              title: p.title,
              url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`
            }
          })
        }
      })
    );
  }
}
