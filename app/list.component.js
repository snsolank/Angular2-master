"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'lists-app',
            template: " <div>\n    <h2> List of things in Angular </h2>\n    <ul><i>\n    <li> Components</li>\n    <li> Modules</li>\n    <li> Index file </li>\n    <li> Main</li>\n    <li> npm and install commands</li>\n    </i></ul>\n    </div>"
        })
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
//# sourceMappingURL=list.component.js.map