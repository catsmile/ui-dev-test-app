import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Bookmark } from '../entities/common';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private store: Bookmark[] = [];

  private readonly STORAGE_KEY = 'my-bookmarks';

  constructor(
  ) {
    this.store = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  public getBookmarks(): Bookmark[] {
    return this.store;
  }

  public getBookmark(id: string): Bookmark | undefined {
    return this.store.find(bm => bm.id === id);
  }

  public addBookmark(url: string, title: string, tags?: string[], id?: string): string {
    id = id || uuidv4();

    const bm = <Bookmark>{
      url: url,
      tags: tags,
      title: title || url,
      id: id
    };

    this.store.push(bm);

    this.save();

    return id;
  }

  public deleteBookmark(id: string) {
    this.store = this.store.filter(bm => bm.id !== id);

    this.save();
  }

  private save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.store));
  }
}
