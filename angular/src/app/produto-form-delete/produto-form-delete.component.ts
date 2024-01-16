import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoServiceService} from "../produto-service.service";
import {Produto} from "../produto";

@Component({
  selector: 'app-produto-form-delete',
  standalone: true,
    imports: [
        FormsModule,
        MatCardModule,
        HttpClientModule
    ],
  templateUrl: './produto-form-delete.component.html',
  styleUrl: './produto-form-delete.component.css'
})
export class ProdutoFormDeleteComponent {
    produto: Produto;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private produtoService: ProdutoServiceService
    ) {
        this.produto = new Produto(0, null, null, null, null);
    }

    onSubmit() {
        this.produtoService.excluir(this.produto.id).subscribe(this.gotoProdutoList);
    }

    gotoProdutoList() {
        this.router.navigate(['produtos']);
    }
}
