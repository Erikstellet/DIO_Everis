import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { BookmarksEffects } from './state/bookmarks.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    ReactiveFormsModule,
    EffectsModule.forFeature([BookmarksEffects]),
    CommonModule
  ],
  declarations: [
    BookmarksPage,
  ],
})
export class BookmarksModule {
}
