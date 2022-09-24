import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChirpListComponent } from './profile-chirp-list.component';

describe('ProfileChirpListComponent', () => {
  let component: ProfileChirpListComponent;
  let fixture: ComponentFixture<ProfileChirpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChirpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChirpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
