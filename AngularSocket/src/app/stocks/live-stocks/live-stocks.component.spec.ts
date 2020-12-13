import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStocksComponent } from './live-stocks.component';

describe('LiveStocksComponent', () => {
  let component: LiveStocksComponent;
  let fixture: ComponentFixture<LiveStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
