import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificapeliculaComponent } from './modificapelicula.component';

describe('ModificapeliculaComponent', () => {
  let component: ModificapeliculaComponent;
  let fixture: ComponentFixture<ModificapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificapeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
