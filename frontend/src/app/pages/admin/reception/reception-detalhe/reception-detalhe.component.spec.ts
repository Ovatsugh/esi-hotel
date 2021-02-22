import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDetalheComponent } from './reception-detalhe.component';

describe('ReceptionDetalheComponent', () => {
  let component: ReceptionDetalheComponent;
  let fixture: ComponentFixture<ReceptionDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
