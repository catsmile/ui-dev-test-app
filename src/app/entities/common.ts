export interface Image {
  url: string;
  title: string;
}

export interface FlickrPhoto {
  farm: number;
  id: string;
  isfamily: 0 | 1;
  isfriend: 0 | 1;
  ispublic: 0 | 1;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: FlickrPhoto[];
    total: number;
  }
  stat: 'ok' | 'err'
}
