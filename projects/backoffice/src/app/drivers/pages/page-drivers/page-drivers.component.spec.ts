import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDriversComponent } from './page-drivers.component';

describe('PageDriversComponent', () => {
  let component: PageDriversComponent;
  let fixture: ComponentFixture<PageDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
