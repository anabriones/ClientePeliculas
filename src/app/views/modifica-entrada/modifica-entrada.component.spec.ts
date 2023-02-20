import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEntradaComponent } from './modifica-entrada.component';

describe('ModificaEntradaComponent', () => {
  let component: ModificaEntradaComponent;
  let fixture: ComponentFixture<ModificaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
