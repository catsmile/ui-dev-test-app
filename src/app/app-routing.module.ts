import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFinderComponent } from './components/image-finder/image-finder.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: ImageFinderComponent },
  { path: 'images', component: ImageFinderComponent },
  { path: 'storage', component: BookmarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
