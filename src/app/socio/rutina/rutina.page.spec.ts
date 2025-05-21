import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaPage } from './rutina.page';

describe('RutinaPage', () => {
  let component: RutinaPage;
  let fixture: ComponentFixture<RutinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
