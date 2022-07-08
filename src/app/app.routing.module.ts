import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: 'user/:userName', component: PhotosListComponent, resolve:{
    photos: PhotoListResolver
  }},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
