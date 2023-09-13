import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMusicasComponent } from './listar-musicas.component';

describe('ListarMusicasComponent', () => {
  let component: ListarMusicasComponent;
  let fixture: ComponentFixture<ListarMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMusicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
