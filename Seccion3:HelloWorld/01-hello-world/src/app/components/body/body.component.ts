import {Component} from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})
export class BodyComponent{

    show = true;

    raze: any = {
        message: 'A big power requires big responsibility',
        author: 'Ben Parker '
    }

    characters: string[] = ['spiderman','venom','octopus'];
}