import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChirpPageComponent } from './chirp-page.component';

describe('ChirpPageComponent', () => {
  let component: ChirpPageComponent;
  let fixture: ComponentFixture<ChirpPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
