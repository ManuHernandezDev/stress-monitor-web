import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sos } from './sos';

describe('Sos', () => {
  let component: Sos;
  let fixture: ComponentFixture<Sos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
