import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbgComponent } from './fbg.component';

describe('FbgComponent', () => {
  let component: FbgComponent;
  let fixture: ComponentFixture<FbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
