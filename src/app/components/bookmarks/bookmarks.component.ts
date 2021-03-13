import { Component, OnInit } from '@angular/core';
import { Image } from '../../entities/common';
import { BookmarksService } from '../../services/bookmarks.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'my-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  public preparedImages: Image[][] = [];

  private readonly layoutColumns = 3;

  constructor(
    private readonly bookmarksService: BookmarksService,
    private readonly utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.preparedImages = this.utilsService.getObjectsColumns((this.bookmarksService.getBookmarks() || []), this.layoutColumns);
  }
}
