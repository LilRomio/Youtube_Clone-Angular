import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoreSubscriptionsComponent } from './showmore-subscriptions.component';

describe('ShowmoreSubscriptionsComponent', () => {
  let component: ShowmoreSubscriptionsComponent;
  let fixture: ComponentFixture<ShowmoreSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmoreSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmoreSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
