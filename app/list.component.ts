import {Component} from '@angular/core';

@Component({
    selector:'lists-app',
    template:` <div>
    <h2> List of things in Angular </h2>
    <ul><i>
    <li> Components</li>
    <li> Modules</li>
    <li> Index file </li>
    <li> Main</li>
    <li> npm and install commands</li>
    </i></ul>
    </div>`
})

export class ListsComponent{}