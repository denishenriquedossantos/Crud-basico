import {Component, OnInit} from '@angular/core';
import {Produto} from "../produto";
import {ProdutoServiceService} from "../produto-service.service";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [
    MatTableModule,HttpClientModule
  ],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  displayedColumns = ['id','nome','marca','categoria','preco'];

  constructor(private produtoService: ProdutoServiceService) {}

  ngOnInit() {
    this.produtoService.listarTodos().subscribe(data => {
      this.produtos = data;
    });
  }
}
