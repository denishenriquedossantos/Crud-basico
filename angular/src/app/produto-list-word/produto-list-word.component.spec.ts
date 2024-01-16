import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListWordComponent } from './produto-list-word.component';

describe('ProdutoListWordComponent', () => {
  let component: ProdutoListWordComponent;
  let fixture: ComponentFixture<ProdutoListWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoListWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
