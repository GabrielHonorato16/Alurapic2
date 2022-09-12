import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ]
})
export class PhotosListModule { }
