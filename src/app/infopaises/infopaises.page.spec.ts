import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfopaisesPage } from './infopaises.page';

describe('InfopaisesPage', () => {
  let component: InfopaisesPage;
  let fixture: ComponentFixture<InfopaisesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfopaisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
