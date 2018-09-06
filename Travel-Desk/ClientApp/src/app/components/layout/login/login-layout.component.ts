import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'login-layout',
    templateUrl: './login-layout.component.html',
    styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {

    constructor() {

        console.log('i am here 1');
    }

   /* app.run(($log) => {
       function keepItOff(pref, name) {
            function turnItOff(details) {
              $log.debug('(re)disabling ' + name + ', currently enabled: ' + details.value);
                if (details.levelOfControl === 'controllable_by_this_extension') {
                    pref.set({ value: false }, () => {
                        if (chrome.runtime.lastError === undefined) {
                            $log.debug('disabled ' + name);
                        } else {
                            $log.warn('failed to disable ' + name + ':', chrome.runtime.lastError);
                        }
                    });
                }
            }
            pref.get({}, turnItOff);
            if (!pref.onChange.hasListeners()) {
                pref.onChange.addListener((details) => {
                    $log.debug(name + ' enabled: ' + details.value);
                    if (details.value) {
                        turnItOff(details);
                    }
                });
            }
        }

        keepItOff(chrome.privacy.services.spellingServiceEnabled, 'spelling service');
        keepItOff(chrome.privacy.services.passwordSavingEnabled, 'password saving');
        keepItOff(chrome.privacy.services.alternateErrorPagesEnabled, 'alternate error pages');
        keepItOff(chrome.privacy.services.autofillEnabled, 'autofill');
        keepItOff(chrome.privacy.services.hotwordSearchEnabled, 'hotword search');
        keepItOff(chrome.privacy.services.safeBrowsingExtendedReportingEnabled, 'safe browsing extended reporting');
        keepItOff(chrome.privacy.services.searchSuggestEnabled, 'search suggest');
        keepItOff(chrome.privacy.services.translationServiceEnabled, 'translation service');
    });
    */
}
