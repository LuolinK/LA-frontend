/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Update_duesComponent } from './update_dues.component';

describe('Update_duesComponent', () => {
  let component: Update_duesComponent;
  let fixture: ComponentFixture<Update_duesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update_duesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update_duesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
