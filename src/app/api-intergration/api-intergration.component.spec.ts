import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntergrationComponent } from './api-intergration.component';

describe('ApiIntergrationComponent', () => {
  let component: ApiIntergrationComponent;
  let fixture: ComponentFixture<ApiIntergrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiIntergrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIntergrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
