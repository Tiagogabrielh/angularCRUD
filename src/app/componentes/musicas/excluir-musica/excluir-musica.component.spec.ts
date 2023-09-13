import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMusicaComponent } from './excluir-musica.component';

describe('ExcluirMusicaComponent', () => {
  let component: ExcluirMusicaComponent;
  let fixture: ComponentFixture<ExcluirMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
