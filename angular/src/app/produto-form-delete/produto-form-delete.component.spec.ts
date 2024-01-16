import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormDeleteComponent } from './produto-form-delete.component';

describe('ProdutoFormDeleteComponent', () => {
  let component: ProdutoFormDeleteComponent;
  let fixture: ComponentFixture<ProdutoFormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFormDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
