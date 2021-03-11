import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFinderComponent } from './components/image-finder/image-finder.component';
import { CloudStorageComponent } from './components/cloud-storage/cloud-storage.component';

const routes: Routes = [
  { path: '', component: ImageFinderComponent },
  { path: 'images', component: ImageFinderComponent },
  { path: 'storage', component: CloudStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
