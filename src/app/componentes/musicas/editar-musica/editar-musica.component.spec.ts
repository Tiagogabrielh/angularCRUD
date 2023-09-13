import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMusicaComponent } from './editar-musica.component';

describe('EditarMusicaComponent', () => {
  let component: EditarMusicaComponent;
  let fixture: ComponentFixture<EditarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
