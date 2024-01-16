import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListIdComponent } from './produto-list-id.component';

describe('ProdutoListIdComponent', () => {
  let component: ProdutoListIdComponent;
  let fixture: ComponentFixture<ProdutoListIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoListIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
