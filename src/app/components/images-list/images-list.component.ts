import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookmarksService } from '../../services/bookmarks.service';
import { Image } from '../../entities/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  @Input() allowBookmarking: boolean = false;
  @Input() allowUnbookmarking: boolean = false;
  @Input() images: Image[][] = [];

  @Output() updateContentRequest: EventEmitter<any> = new EventEmitter<any>();

  public currentTags: string = '';

  constructor(
    private readonly bookmarksService: BookmarksService,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addBookmark(image: Image) {
    const tags = this.currentTags.split(',');
    this.currentTags = '';

    const id = this.bookmarksService.addBookmark(
      image.url,
      image.title,
      tags
    );

    const sb = this.snackBar.open('Bookmarked!' , 'Undo');

    sb.onAction().pipe(take(1)).subscribe(() => {
      this.bookmarksService.deleteBookmark(id);
    });
  }

  removeBookmark(image: Image) {
    if (!image.id) {
      return;
    }

    this.bookmarksService.deleteBookmark(image.id);

    const sb = this.snackBar.open('Bookmark removed!' , 'Undo');

    sb.onAction().pipe(take(1)).subscribe(() => {
      this.bookmarksService.addBookmark(image.url, image.title, image.tags, image.id);
    });

    this.updateContentRequest.emit();
  }
}
