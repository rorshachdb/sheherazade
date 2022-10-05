import { TestBed } from '@angular/core/testing';
import { ShzComponent } from './shz.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShzComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShzComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sheherazade'`, () => {
    const fixture = TestBed.createComponent(ShzComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sheherazade');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShzComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sheherazade app is running!');
  });
});
