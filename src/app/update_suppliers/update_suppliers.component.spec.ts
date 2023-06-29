/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Update_suppliersComponent } from './update_suppliers.component';

describe('Update_suppliersComponent', () => {
  let component: Update_suppliersComponent;
  let fixture: ComponentFixture<Update_suppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update_suppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update_suppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
