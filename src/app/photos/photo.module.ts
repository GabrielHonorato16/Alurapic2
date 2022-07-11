import { PhotosListModule } from './photos-list/photos-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { FilterByDescription } from './photos-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';


@NgModule({
    imports: [
      PhotoFormModule,
      PhotoModule,
      PhotosListModule
    ]
})
export class PhotosModule {}
