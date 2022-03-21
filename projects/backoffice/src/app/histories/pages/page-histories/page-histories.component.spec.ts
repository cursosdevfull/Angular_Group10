import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHistoriesComponent } from './page-histories.component';

describe('PageHistoriesComponent', () => {
  let component: PageHistoriesComponent;
  let fixture: ComponentFixture<PageHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
