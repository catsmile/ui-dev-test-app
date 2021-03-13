import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';
import { ImageFinderService } from '../../services/image-finder.service';
import { Image } from '../../entities/common';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'my-image-finder',
  templateUrl: './image-finder.component.html',
  styleUrls: ['./image-finder.component.scss']
})
export class ImageFinderComponent implements OnInit, OnDestroy {
  private searchQuery = new Subject<string>();
  private get searchQuery$() {
    return this.searchQuery.asObservable().pipe(debounceTime(500));
  }

  private subs: Subscription = new Subscription();

  private readonly layoutColumns = 3;

  public query: string = '';
  public pageSize = 25;
  public currentPage = 1;
  public total = 0;
  public images: Image[] = [];
  public preparedImages: Image[][] = [];

  constructor(
    private readonly imageFinderService: ImageFinderService,
    private readonly utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.searchQuery$.subscribe(query => {
        this.query = query;
        this.getImages();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  onSearchQueryChange($event: Event) {
    this.searchQuery.next(($event.target as any)?.value);
  }

  private getImages() {
    this.imageFinderService.getImages(this.query, this.pageSize, this.currentPage).pipe(take(1)).subscribe((result: {
      images: Image[];
      total: number;
    }) => {
      this.total = result.total;
      this.images = result.images;
      this.setPreparedImages();
    });
  }

  private setPreparedImages() {
    this.preparedImages = this.utilsService.getObjectsColumns(this.images, this.layoutColumns);
    /*
    this.preparedImages = [];

    const count = this.images.length;

    const itemsPerCol = Math.ceil(count / this.layoutColumns);

    this.images.forEach((img, idx) => {
      const colIdx = Math.floor(idx / itemsPerCol);
      if (!this.preparedImages[colIdx]) {
        this.preparedImages[colIdx] = [];
      }

      this.preparedImages[colIdx].push(img);
    });

     */
  }

  onPageChange($event: PageEvent) {
    this.currentPage = $event.pageIndex + 1;
    this.getImages();
  }
}
