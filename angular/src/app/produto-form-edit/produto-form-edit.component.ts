import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {Produto} from "../produto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoServiceService} from "../produto-service.service";

@Component({
  selector: 'app-produto-form-edit',
  standalone: true,
    imports: [
        FormsModule,
        MatCardModule,
        HttpClientModule
    ],
  templateUrl: './produto-form-edit.component.html',
  styleUrl: './produto-form-edit.component.css'
})
export class ProdutoFormEditComponent {
    produto: Produto;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private produtoService: ProdutoServiceService
    ) {
        this.produto = new Produto(0, null, null, null, null);
    }

    onSubmit() {
        this.produtoService.editar(this.produto).subscribe(result => this.gotoProdutoList());
    }

    gotoProdutoList() {
        this.router.navigate(['/produtos']);
    }
}
