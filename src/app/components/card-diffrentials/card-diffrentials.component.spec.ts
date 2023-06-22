import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiffrentialsComponent } from './card-diffrentials.component';

describe('CardDiffrentialsComponent', () => {
  let component: CardDiffrentialsComponent;
  let fixture: ComponentFixture<CardDiffrentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiffrentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiffrentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
