import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolaoComponent } from './sacolao.component';

describe('SacolaoComponent', () => {
  let component: SacolaoComponent;
  let fixture: ComponentFixture<SacolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacolaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
