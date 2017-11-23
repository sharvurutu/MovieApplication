import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlishComponent } from './watchlish.component';

describe('WatchlishComponent', () => {
  let component: WatchlishComponent;
  let fixture: ComponentFixture<WatchlishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
