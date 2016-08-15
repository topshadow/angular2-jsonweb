"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var base_1 = require('./base');
var router_1 = require('@angular/router');
var PageComponent = (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(router, route) {
        _super.call(this);
        this.router = router;
        this.route = route;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isShowNav = true;
        this.isShowFoot = true;
        this.route.params.subscribe(function (params) {
            _this.path = params['page'];
            console.log(_this.path);
            _this.page = window['pages'].find(function (page) { return page.path == _this.path; });
            console.log(_this.page);
        });
    };
    PageComponent.prototype.ngOnChanges = function () {
    };
    PageComponent.prototype.ngOnDestroy = function () {
        console.log('this page destory');
    };
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page',
            template: "\n    <ul>\n    <li *ngFor=\"let part of page.parts\">\n    <div [ngSwitch]=\"part.part\">\n    <banner *ngSwitchCase=\"'banner'\"></banner>\n    <showcase *ngSwitchCase=\"'showcase'\"></showcase>\n    <dynamic *ngSwitchCase=\"'dynamic'\"></dynamic>\n    <image-article *ngSwitchCase=\"'image-article'\"></image-article>\n    <location *ngSwitchCase=\"'location'\"></location>\n    <product-list *ngSwitchCase=\"'product-list'\"></product-list>\n    <list *ngSwitchCase=\"'list'\"></list>\n    <two-layout *ngSwitchCase=\"'two-layout'\"></two-layout>\n    <custom *ngSwitchCase=\"'custom'\"></custom>\n    </div>\n    </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], PageComponent);
    return PageComponent;
}(base_1.Base));
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map