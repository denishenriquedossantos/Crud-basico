import { Component } from '@angular/core';
import {Produto} from "../produto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoServiceService} from "../produto-service.service";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-produto-form',
  standalone: true,
    imports: [
        MatCardModule,
        FormsModule,
        HttpClientModule
    ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoServiceService
  ) {
    this.produto = new Produto(0, null, null, null, null);
  }

  onSubmit() {
    this.produtoService.adicionar(this.produto).subscribe(result => this.gotoProdutoList());
  }

  gotoProdutoList() {
    this.router.navigate(['/produtos']);
  }
}
