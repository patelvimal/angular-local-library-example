import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSharedLibComponent } from './ngx-shared-lib.component';

describe('NgxSharedLibComponent', () => {
  let component: NgxSharedLibComponent;
  let fixture: ComponentFixture<NgxSharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSharedLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
