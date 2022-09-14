import { DarkOnHoverModule } from './../../shared/components/directives/dark-on-hover/dark-on-hover.module';
import { DarkenOnHoverDirective } from './../../shared/components/directives/dark-on-hover/dark-on-hover.directive';
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
    CardModule,
    DarkOnHoverModule
  ]
})
export class PhotosListModule { }
