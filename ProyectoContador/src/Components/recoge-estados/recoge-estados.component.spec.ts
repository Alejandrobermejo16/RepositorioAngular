import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecogeEstadosComponent } from './recoge-estados.component';

describe('RecogeEstadosComponent', () => {
  let component: RecogeEstadosComponent;
  let fixture: ComponentFixture<RecogeEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecogeEstadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecogeEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
