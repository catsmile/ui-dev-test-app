import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  public getObjectsColumns(objects: any[], columns: number): any[] {
    const result: any[] = [];

    const count = objects.length;

    const itemsPerCol = Math.ceil(count / columns);

    objects.forEach((img, idx) => {
      const colIdx = Math.floor(idx / itemsPerCol);
      if (!result[colIdx]) {
        result[colIdx] = [];
      }

      result[colIdx].push(img);
    });

    return result;
  }
}
