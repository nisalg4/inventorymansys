import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetupdateformComponent } from './assetupdateform.component';

describe('AssetupdateformComponent', () => {
  let component: AssetupdateformComponent;
  let fixture: ComponentFixture<AssetupdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetupdateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
