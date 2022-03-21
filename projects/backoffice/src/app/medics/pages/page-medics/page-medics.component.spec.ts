import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedicsComponent } from './page-medics.component';

describe('PageMedicsComponent', () => {
  let component: PageMedicsComponent;
  let fixture: ComponentFixture<PageMedicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMedicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
