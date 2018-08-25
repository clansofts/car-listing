import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HeaderModule],
            declarations: [AppComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should have car-header', () => {
        const header: DebugElement = de.query(By.css('car-header'));
        expect(header).toBeDefined();
    });

    it('should have router-outlet', () => {
        const routerOutlet: DebugElement = de.query(By.css('router-outlet'));
        expect(routerOutlet).toBeDefined();
    });

});