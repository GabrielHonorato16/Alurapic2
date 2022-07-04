import { PhotosListComponent } from './photos-list/photos-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';


@NgModule({
    declarations: [ PhotoComponent,
    PhotosListComponent,
    PhotoFormComponent
    ],
    imports: [HttpClientModule,
      CommonModule
    ]
})
export class PhotosModule {}
