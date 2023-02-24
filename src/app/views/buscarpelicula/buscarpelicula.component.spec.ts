import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpeliculaComponent } from './buscarpelicula.component';

describe('BuscarpeliculaComponent', () => {
  let component: BuscarpeliculaComponent;
  let fixture: ComponentFixture<BuscarpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
