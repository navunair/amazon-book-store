import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { MainComponent } from './COMPONENTS/main/main.component';
import { NumberOnlyDirective } from './number-only.directive';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './SERVICES/app.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        
    declarations: [
      AppComponent,
      HeaderComponent,
      MainComponent,
      NumberOnlyDirective
    ],
    imports: [
      CommonModule
  ],
  providers:[
    AppService
  ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
