import { Component } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Produto} from "../produto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoServiceService} from "../produto-service.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-produto-list-id',
  standalone: true,
  imports: [HttpClientModule, FormsModule, MatCardModule, MatTableModule, ReactiveFormsModule],
  templateUrl: './produto-list-id.component.html',
  styleUrl: './produto-list-id.component.css'
})
export class ProdutoListIdComponent {
  produtos: Produto[] = [];
  displayedColumns = ['id','nome','marca','categoria','preco'];
  ident: Produto;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private produtoService: ProdutoServiceService
  ) {
    this.ident = new Produto(0,"","","",0);
  }

  onSubmit() {
    if (this.ident.preco != null) {
      this.produtoService.listarId(this.ident.preco).subscribe(data => {
        this.produtos = data;
      })
    }
  }
}
