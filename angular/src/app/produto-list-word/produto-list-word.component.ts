import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {Produto} from "../produto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoServiceService} from "../produto-service.service";

@Component({
  selector: 'app-produto-list-word',
  standalone: true,
    imports: [
        FormsModule,
        MatCardModule,
        MatTableModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  templateUrl: './produto-list-word.component.html',
  styleUrl: './produto-list-word.component.css'
})
export class ProdutoListWordComponent {
    produtos: Produto[] = [];
    displayedColumns = ['id','nome','marca','categoria','preco'];
    palavra: Produto;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private produtoService: ProdutoServiceService
    ) {
        this.palavra = new Produto(0,"","","",0);
    }

    onSubmit() {
        if (this.palavra.nome != null) {
            this.produtoService.listarPalavra(this.palavra.nome).subscribe(data => {
                this.produtos = data;
            });
        }
    }
}
