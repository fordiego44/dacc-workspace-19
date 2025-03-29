import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaccSideMenuComponent } from './dacc-side-menu.component';
import { provideRouter } from '@angular/router';

describe('DaccSideMenuComponent', () => {
  let component: DaccSideMenuComponent;
  let fixture: ComponentFixture<DaccSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaccSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaccSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
