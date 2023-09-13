import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMusicaComponent } from './criar-musica.component';

describe('CriarMusicaComponent', () => {
  let component: CriarMusicaComponent;
  let fixture: ComponentFixture<CriarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
