webpackJsonp([2,5],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 col-md-push-4 page-header\">\n\t\t\t<h1>Quote generator</h1>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t<div class=\"col-md-4 col-md-push-4\" *ngIf=\"showReport\">\n\t<h4 class=\"text-center\">Report</h4>\n\t<button class=\"btn btn-primary\" (click)=\"dismissReport()\">Dismiss</button>\n\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item list-group-item-success\">Project name:  {{project.name}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Project markup:  {{project.markup}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Hardware cost:  {{project.hardwareCost}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Labour cost:  {{project.labourCost}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Sanding Cost:  {{project.sandingCost}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Sundries:  {{project.sundries}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Total Items Cost:  {{project.totalItemsCost}}</li>\n\t\t\t<li class=\"list-group-item list-group-item-success\">Total project cost:  {{project.totalCost}}</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col-md-4 col-md-push-4\" *ngIf=\"!newItem && !showReport\">\n\t\t<button class=\"btn btn-primary pull-right\" (click)=\"addNewItem()\">Add Item</button>\n\t\t\t\n\t\t<form [formGroup]=\"projectForm\" role=\"form\" (ngSubmit)=\"calculateTotal(projectForm.value)\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"pName\">Project Name</label>\n\t\t\t\t<input id=\"pName\" class=\"form-control\" placeholder=\"Enter project name\" type=\"text\" [formControl]=\"projectForm.controls['name']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"markup\">Markup(%)</label>\n\t\t\t\t<input id=\"markup\" class=\"form-control\" placeHolder=\"Enter markup percentage\" type=\"number\" [formControl]=\"projectForm.controls['markup']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"hCost\">Hardware cost</label>\n\t\t\t\t<input id=\"hCost\" class=\"form-control\" placeHolder=\"Enter hardware cost\" type=\"number\" step=\"0.01\" [formControl]=\"projectForm.controls['hardwareCost']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"lCost\">Labour cost</label>\n\t\t\t\t<input id=\"lCost\" class=\"form-control\" placeHolder=\"Enter labour cost\" type=\"number\" step=\"0.01\" [formControl]=\"projectForm.controls['labourCost']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"sCost\">Sanding cost</label>\n\t\t\t\t<input id=\"sCost\" class=\"form-control\" placeHolder=\"Enter sanding cost\" type=\"number\" step=\"0.01\" [formControl]=\"projectForm.controls['sandingCost']\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"sdCost\">Sundries cost</label>\n\t\t\t\t<input id=\"sdCost\" class=\"form-control\" placeHolder=\"Enter Sundries cost\" type=\"number\" step=\"0.01\" [formControl]=\"projectForm.controls['sundriesCost']\">\n\t\t\t</div>\t\t\t\n\t\t\t<button class=\"btn btn-submit pull-right\" [disabled]=\"!projectForm.valid || project.items.length < 1\">Calculate</button> \n\t\t</form>\n\t\t<button class=\"btn btn-submit pull-left\" (click)=\"newQuote()\">New Quote</button>\n\t</div>\t\n\t<div class=\"col-md-4 col-md-push-4\" *ngIf=\"newItem\">\n\t<button class=\"btn btn-primary pull-right\" (click)=\"cancelItem()\">Cancel</button>\n\t\t\t<form [formGroup]=\"itemForm\" role=\"form\" (ngSubmit)=\"addItem(itemForm.value)\">\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"name\" Placeholder=\"Enter Item Name\" [formControl]=\"itemForm.controls['name']\">\t\t\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"height\">Height</label>\n\t\t\t\t\t<input class=\"form-control\" id=\"height\" type=\"number\" step=\"0.01\" placeholder=\"Enter item height\" [formControl]=\"itemForm.controls['height']\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"length\">Length</label>\n\t\t\t\t\t<input class=\"form-control\" id=\"length\" type=\"number\" step=\"0.01\" placeholder=\"Enter item length\" [formControl]=\"itemForm.controls['length']\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"width\">Width</label>\n\t\t\t\t\t<input class=\"form-control\" id=\"width\" type=\"number\" step=\"0.01\" placeholder=\"Enter item width\" [formControl]=\"itemForm.controls['width']\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"qty\">qty</label>\n\t\t\t\t\t<input class=\"form-control\" id=\"qty\" type=\"number\" step=\"0.01\" placeholder=\"Enter item Quantity\" [formControl]=\"itemForm.controls['qty']\">\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"pcbm\">Price/m<sup>3</sup></label>\n\t\t\t\t\t<input class=\"form-control\" type=\"number\" step=\"0.01\" placeholder=\"Enter item Price/cbm\" [formControl]=\"itemForm.controls['priceM3']\">\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-block btn-submit\" [disabled]=\"!itemForm.valid\">Add</button>\n\t\t\t</form>\t\t\t\n\t\t</div>\n\t\t<div class=\"col-md-4 col-md-push-4\" *ngIf=\"project.items.length > 0 && !newItem && !showReport\">\n\t\t<h4 class=\"text-center\">Items</h4>\n\t\t<table class=\"table table-responsive\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tName\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tVolume/m<sup>3</sup>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tCost\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\tAction\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of project.items\">\n\t\t\t\t<td>\n\t\t\t\t\t{{item.name}}\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{item.volumeM3}}\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{item.totalPrice}}\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t<button class=\"btn btn-xs\"  title=\"Delete Item\" (click)=\"deleteItem(item)\"><span class=\"glyphicon glyphicon-trash\"></span><span class=\"sr-only\">Delete item</span></button>\n\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 80;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(96);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item_model__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_project_model__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__models_project_model__["a" /* Project */]();
        this.newItem = null;
        this.showReport = false;
        this.itemForm = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'height': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'length': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'width': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'qty': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'priceM3': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
        this.projectForm = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'markup': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'hardwareCost': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'labourCost': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'sandingCost': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'sundriesCost': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    AppComponent.prototype.calculateTotal = function (project) {
        this.project.name = project.name;
        this.project.markup = project.markup;
        this.project.hardwareCost = project.hardwareCost;
        this.project.labourCost = project.labourCost;
        this.project.sandingCost = project.sandingCost;
        this.project.sundries = project.sundriesCost;
        this.project.totalItemsCost = 0;
        if (this.project.items.length > 0) {
            for (var i = 0; i < this.project.items.length; i++) {
                console.log("items cost" + this.project.totalItemsCost);
                this.project.totalItemsCost += this.project.items[i].totalPrice;
            }
        }
        var multiplier = 1 + this.project.markup / 100;
        console.log("multiplier:" + multiplier);
        var markedUpCost = +this.project.totalItemsCost * +multiplier;
        this.project.totalCost = markedUpCost + +project.hardwareCost + +project.labourCost + +project.sandingCost + +project.sundriesCost;
        console.log(this.project);
        this.showReport = true;
    };
    AppComponent.prototype.addNewItem = function () {
        this.newItem = true;
    };
    AppComponent.prototype.addItem = function (item) {
        this.item = item;
        this.item.volumeM3 = item.height * item.length * item.width;
        this.item.totalPrice = item.volumeM3 * item.priceM3;
        console.log(this.item);
        this.project.items.push(this.item);
        this.newItem = false;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__models_item_model__["a" /* Item */]();
        this.itemForm.reset();
        console.log(this.project);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.project.items = [];
    };
    AppComponent.prototype.deleteItem = function (item) {
        var index = this.project.items.indexOf(item);
        this.project.items.splice(index, 1);
    };
    AppComponent.prototype.cancelItem = function () {
        this.newItem = false;
        this.itemForm.reset();
        this.item = new __WEBPACK_IMPORTED_MODULE_2__models_item_model__["a" /* Item */]();
    };
    AppComponent.prototype.dismissReport = function () {
        this.showReport = false;
    };
    AppComponent.prototype.newQuote = function () {
        this.newItem = false;
        this.showReport = false;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__models_item_model__["a" /* Item */]();
        this.project = new __WEBPACK_IMPORTED_MODULE_3__models_project_model__["a" /* Project */]();
        this.itemForm.reset();
        this.projectForm.reset();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(156),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());

//# sourceMappingURL=item.model.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
        this.items = [];
    }
    return Project;
}());

//# sourceMappingURL=project.model.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[184]);
//# sourceMappingURL=main.bundle.js.map