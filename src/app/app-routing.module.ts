import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'to-do',
    loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule)
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'home-n',
    loadChildren: () => import('./home-n/home-n.module').then( m => m.HomeNPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'edit-note',
    redirectTo: 'add-note',
    pathMatch: 'full'
  },
  {
    path: 'cards-home',
    loadChildren: () => import('./cards-home/cards-home.module').then( m => m.CardsHomePageModule)
  },
  {
    path: 'create-flashcard',
    loadChildren: () => import('./create-flashcard/create-flashcard.module').then( m => m.CreateFlashcardPageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
