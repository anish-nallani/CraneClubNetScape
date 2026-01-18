import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webamp } from './webamp';

describe('Webamp', () => {
  let component: Webamp;
  let fixture: ComponentFixture<Webamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
