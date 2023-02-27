import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuserComponent } from './moduser.component';

describe('ModuserComponent', () => {
  let component: ModuserComponent;
  let fixture: ComponentFixture<ModuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
