import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLockScreenComponent } from './page-lock-screen.component';

describe('PageLockScreenComponent', () => {
  let component: PageLockScreenComponent;
  let fixture: ComponentFixture<PageLockScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLockScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
