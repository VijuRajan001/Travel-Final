import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(
        private domSanitizer: DomSanitizer,
        public matIconRegistry: MatIconRegistry) {
        //add custom material icons
        matIconRegistry.addSvgIcon('logo', domSanitizer.bypassSecurityTrustResourceUrl('/dist/Nous-logo.svg'));
    }

}
