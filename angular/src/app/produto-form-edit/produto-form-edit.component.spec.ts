import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFormEditComponent } from './produto-form-edit.component';

describe('ProdutoFormEditComponent', () => {
  let component: ProdutoFormEditComponent;
  let fixture: ComponentFixture<ProdutoFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
