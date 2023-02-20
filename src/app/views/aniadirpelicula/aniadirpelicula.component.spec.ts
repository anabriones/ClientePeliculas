import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirpeliculaComponent } from './aniadirpelicula.component';

describe('AniadirpeliculaComponent', () => {
  let component: AniadirpeliculaComponent;
  let fixture: ComponentFixture<AniadirpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniadirpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
