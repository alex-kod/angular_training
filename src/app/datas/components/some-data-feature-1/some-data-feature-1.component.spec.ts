import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDataFeature1Component } from './some-data-feature-1.component';

describe('SomeDataFeature1Component', () => {
  let component: SomeDataFeature1Component;
  let fixture: ComponentFixture<SomeDataFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeDataFeature1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeDataFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
