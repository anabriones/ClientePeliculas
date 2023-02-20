import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarpeliculaComponent } from './eliminarpelicula.component';

describe('EliminarpeliculaComponent', () => {
  let component: EliminarpeliculaComponent;
  let fixture: ComponentFixture<EliminarpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
