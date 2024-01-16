import { Routes } from '@angular/router';
import {ProdutoListComponent} from "./produto-list/produto-list.component";
import {ProdutoFormComponent} from "./produto-form/produto-form.component";
import {ProdutoFormDeleteComponent} from "./produto-form-delete/produto-form-delete.component";
import {ProdutoFormEditComponent} from "./produto-form-edit/produto-form-edit.component";
import {ProdutoListIdComponent} from "./produto-list-id/produto-list-id.component";
import {ProdutoListWordComponent} from "./produto-list-word/produto-list-word.component";

export const routes: Routes = [
    {path: 'listAll', component: ProdutoListComponent},
    {path: 'listWord', component: ProdutoListWordComponent},
    {path: 'listId', component: ProdutoListIdComponent},
    {path: 'add', component: ProdutoFormComponent},
    {path: 'delete', component: ProdutoFormDeleteComponent},
    {path: 'edit', component: ProdutoFormEditComponent}
];
