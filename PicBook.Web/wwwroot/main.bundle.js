webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<login></login>\r\n<router-outlet></router-outlet>\r\n<notifications></notifications>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = (function () {
    function Configuration() {
        this.ApiUrl = "api/";
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    Object.defineProperty(Configuration.prototype, "Server", {
        get: function () {
            return 'https://localhost:44301/';
            //return window.location.protocol + "//" + window.location.host + "/";
        },
        enumerable: true,
        configurable: true
    });
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_picture_picture_component__ = __webpack_require__("../../../../../src/app/components/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_security_service__ = __webpack_require__("../../../../../src/app/services/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var providers = {
    "google": {
        "clientId": "934707524700-kpbb78g76d522r88uhn30bn5ngmt0h3m.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "1932254340430320",
        "apiVersion": "v2.4"
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_picture_picture_component__["a" /* PictureComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["a" /* Angular2SocialLoginModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__app_constants__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_12__services_security_service__["a" /* SecurityService */],
                __WEBPACK_IMPORTED_MODULE_14__services_notifications_service__["a" /* NotificationsService */],
                __WEBPACK_IMPORTED_MODULE_15__services_logger_service__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

__WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);


/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");




var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_3__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: "gallery", component: __WEBPACK_IMPORTED_MODULE_2__components_gallery_gallery_component__["a" /* GalleryComponent */] }
];
var appRoutingProviders = [
    __WEBPACK_IMPORTED_MODULE_1__services_auth_guard__["a" /* AuthGuard */]
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  color:red\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let picture of pictures\">\r\n  <picture [uri]=\"picture.uri\"></picture>\r\n</div>\r\n<div>\r\n  <input type=\"file\" id=\"imgInput\" (change)=\"onImgInputChange($event)\" multiple />\r\n  <button (click)=\"upload()\">Upload</button>\r\n</div>\r\n<div>\r\n  <div *ngFor=\"let f of fileCache\">\r\n    <span>{{f.name}} | {{f.size/1000000}} MB</span>\r\n    <button (click)=\"removeFile(f); $event.stopPropagation()\">x</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryComponent = (function () {
    function GalleryComponent(_dataService, _logger, _notifier) {
        this._dataService = _dataService;
        this._logger = _logger;
        this._notifier = _notifier;
        this.fileCache = new Array();
        this.pictures = new Array();
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.fileCache = [];
        this.pictures = [];
        this.fetchPictures();
    };
    GalleryComponent.prototype.fetchPictures = function () {
        var _this = this;
        var userId = localStorage.getItem("token");
        this._dataService.getAll("image/pictures/" + userId)
            .subscribe(function (res) {
            _this._logger.debug("0x000400", "Picture metadata fetched successfully.", res);
            _this.pictures = res.data;
        }, function (error) {
            _this._logger.error("Ex000400", "Error in fetching picture metadata.", error);
        });
    };
    GalleryComponent.prototype.onImgInputChange = function (event) {
        var files = event.target.files || event.srcElement.files;
        for (var i = 0; i < files.length; i++) {
            if (files[i].type !== "image/gif" && files[i].type !== "image/png" && files[i].type !== "image/jpeg" && files[i].type !== "image/bmp" && files[i].type !== "image/webp") {
                this._notifier.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification__["a" /* Notification */]("warning", "File type mismatch."));
                event.target.files = [];
            }
            else {
                this.fileCache.push(files[i]);
            }
        }
    };
    GalleryComponent.prototype.upload = function () {
        var _this = this;
        if (this.fileCache.length !== 0) {
            this._dataService.uploadFiles("image/upload", this.fileCache)
                .subscribe(function (data) {
                _this._logger.debug("0x000300", "File uploaded", data);
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification__["a" /* Notification */]("success", "Upload successful"));
                _this.fetchPictures();
            }, function (err) {
                _this._logger.debug("Ex000300", err.message, err);
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification__["a" /* Notification */]("error", "Error in uploading", err));
            });
            this.fileCache = [];
        }
        document.getElementById("imgInput").value = "";
    };
    GalleryComponent.prototype.removeFile = function (f) {
        this.fileCache = this.fileCache.filter(function (file) { return file !== f; });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "gallery",
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__services_notifications_service__["a" /* NotificationsService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  color: blue\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"login('facebook')\">Facebook Login</button>\r\n<button (click)=\"login('google')\">Google Login</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_security_service__ = __webpack_require__("../../../../../src/app/services/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(_authService, _secService, _logger, _router, _notifier) {
        this._authService = _authService;
        this._secService = _secService;
        this._logger = _logger;
        this._router = _router;
        this._notifier = _notifier;
    }
    Object.defineProperty(LoginComponent.prototype, "hidden", {
        get: function () {
            return this._secService.IsAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (provider) {
        var _this = this;
        this._authService.externalLogin(provider).subscribe(function (data) {
            var user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
            var extRes = data;
            user.email = extRes.email;
            user.name = extRes.name;
            user.provider = extRes.provider;
            user.userIdentifier = extRes.uid;
            _this._secService.login(user).subscribe(function (res) {
                _this._logger.debug("0x000200", "External login successful via " + provider + ".", res);
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_7__models_notification__["a" /* Notification */]("success", "Login successful."));
                localStorage.setItem("token", res.data.value.userId);
                _this._router.navigate(["/gallery"]);
            });
        }, function (error) {
            _this._logger.error("Ex000200", "Error in external login.", error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_security_service__["a" /* SecurityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_notifications_service__["a" /* NotificationsService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notification a {\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  display: block;\r\n}\r\n\r\n.error a {\r\n  background-color: #ffd4d4;\r\n  border: 1px solid red;\r\n}\r\n\r\n.error.notification a {\r\n  color: red;\r\n}\r\n\r\n.warning a {\r\n  background-color: #ffefc0;\r\n  border: 1px solid #FFC107;\r\n}\r\n\r\n.warning.notification a {\r\n  color: #c99909;\r\n}\r\n\r\n.success a {\r\n  background-color: #e3ffc2;\r\n  border: 1px solid #8BC34A;\r\n}\r\n\r\n.success.notification a {\r\n  color: #669035;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification\" *ngFor=\"let note of notes\" [ngClass]=\"note.type\">\r\n  <a (click)=\"hide(note)\">\r\n    {{ note.message }}\r\n    <div *ngIf=\"note.errors\">\r\n      <ul *ngFor=\"let error of note.errors\">\r\n        <li>\r\n          {{error}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(_notifications) {
        var _this = this;
        this._notifications = _notifications;
        this.notes = new Array();
        _notifications.noteAdded.subscribe(function (note) {
            if (_this.notes.length < 2) {
                _this.notes.push(note);
            }
            else {
                _this.notes.pop();
                _this.notes.push(note);
            }
            setTimeout(function () {
                _this.hide.bind(_this)(note);
            }, 5000);
        });
    }
    NotificationComponent.prototype.hide = function (note) {
        var index = this.notes.indexOf(note);
        if (index >= 0) {
            this.notes.splice(index, 1);
        }
    };
    NotificationComponent.prototype.isError = function (note) {
        return note.type === "error";
    };
    NotificationComponent.prototype.isSuccess = function (note) {
        return note.type === "success";
    };
    NotificationComponent.prototype.isWarning = function (note) {
        return note.type === "warning";
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "notifications",
            template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notifications_service__["a" /* NotificationsService */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img src=\"uri\" />\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureComponent = (function () {
    function PictureComponent() {
    }
    PictureComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PictureComponent.prototype, "uri", void 0);
    PictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "picture",
            template: __webpack_require__("../../../../../src/app/components/picture/picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/picture/picture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PictureComponent);
    return PictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  Such welcome component.\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "welcome",
            template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/notification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(type, message, errors) {
        if (type === void 0) { type = ""; }
        if (message === void 0) { message = ""; }
        this.type = type;
        this.message = message;
        this.errors = errors;
    }
    return Notification;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__("../../../../../src/app/services/security.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_logger, _secService) {
        this._logger = _logger;
        this._secService = _secService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this._secService.IsAuthenticated)
            this._logger.warn("0x000001", "AUTH GUARD DENIED ACCESS");
        return this._secService.IsAuthenticated;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security_service__ = __webpack_require__("../../../../../src/app/services/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(_logger, _configuration, _externalAuth, _router, _secService) {
        this._logger = _logger;
        this._configuration = _configuration;
        this._externalAuth = _externalAuth;
        this._router = _router;
        this._secService = _secService;
    }
    AuthenticationService.prototype.externalLogin = function (provider) {
        return this._externalAuth.login(provider);
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        this._externalAuth.logout().subscribe(function (data) {
            _this._logger.debug("0x000003", "External logout successful.", data);
            localStorage.removeItem("token");
        }, function (error) {
            _this._logger.debug("Ex000003", "External logout failed.", error);
        });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_social_login__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__security_service__["a" /* SecurityService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = (function () {
    function DataService(_logger, _http, _configuration, _notifier) {
        this._logger = _logger;
        this._http = _http;
        this._configuration = _configuration;
        this._notifier = _notifier;
    }
    DataService.prototype.getAll = function (action) {
        var _this = this;
        var headers = this.setHeader();
        return this._http.get(this._configuration.ServerWithApiUrl + action, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.getSingle = function (action, id) {
        var _this = this;
        var headers = this.setHeader();
        var url = this._configuration.ServerWithApiUrl + action;
        if (id)
            url += "/" + id;
        return this._http.get(url, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.add = function (action, itemName) {
        var _this = this;
        var headers = this.setHeader();
        var toAdd = JSON.stringify(itemName);
        return this._http.post(this._configuration.ServerWithApiUrl + action, toAdd, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.update = function (action, itemToUpdate) {
        var _this = this;
        var headers = this.setHeader();
        var toUpdate = JSON.stringify(itemToUpdate);
        return this._http.put(this._configuration.ServerWithApiUrl + action, toUpdate, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.delete = function (action, id) {
        var _this = this;
        var headers = this.setHeader();
        return this._http.delete(this._configuration.ServerWithApiUrl + action + "/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.uploadFiles = function (action, files) {
        var self = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("upload[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open("POST", self._configuration.ServerWithApiUrl + action, true);
            xhr.send(formData);
        });
    };
    DataService.prototype.handleError = function (error) {
        this._logger.error("Ex100000", "Error occured while processing data operations.", error);
        this._notifier.add(new __WEBPACK_IMPORTED_MODULE_9__models_notification__["a" /* Notification */](error.type, error.message, error.errors));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.message);
    };
    DataService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        return headers;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_8__notifications_service__["a" /* NotificationsService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.debug = function (code, message, obj) {
        var format = this.getLocalDateTime() + ": [" + code + "] - " + message;
        if (obj) {
            console.log(format, obj);
        }
        else {
            console.log(format);
        }
    };
    Logger.prototype.info = function (code, message, obj) {
        var format = this.getLocalDateTime() + ": [" + code + "] - " + message;
        if (obj) {
            console.info(format, obj);
        }
        else {
            console.info(format);
        }
    };
    Logger.prototype.warn = function (code, message, obj) {
        var format = this.getLocalDateTime() + ": [" + code + "] - " + message;
        if (obj) {
            console.warn(format, obj);
        }
        else {
            console.warn(format);
        }
    };
    Logger.prototype.error = function (code, message, obj) {
        var format = this.getLocalDateTime() + ": [" + code + "] - " + message;
        if (obj) {
            console.error(format, obj);
        }
        else {
            console.error(format);
        }
    };
    Logger.prototype.getLocalDateTime = function () {
        var date = new Date();
        return date.toLocaleTimeString();
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "../../../../../src/app/services/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = (function () {
    function NotificationsService() {
        this._notifications = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.noteAdded = this._notifications.asObservable();
    }
    NotificationsService.prototype.add = function (notification) {
        this._notifications.next(notification);
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SecurityService = (function () {
    function SecurityService(_logger, _http, _router, _configuration, _notifier) {
        this._logger = _logger;
        this._http = _http;
        this._router = _router;
        this._configuration = _configuration;
        this._notifier = _notifier;
    }
    Object.defineProperty(SecurityService.prototype, "IsAuthenticated", {
        get: function () {
            return this.retrieve("token");
        },
        enumerable: true,
        configurable: true
    });
    SecurityService.prototype.login = function (user) {
        var _this = this;
        var headers = this.setHeader();
        return this._http.post(this._configuration.ServerWithApiUrl + "account/login", user, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SecurityService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        return headers;
    };
    SecurityService.prototype.handleError = function (error) {
        this._logger.error("Ex200000", "Error occured while processing authentication operations.", error);
        this._notifier.add(new __WEBPACK_IMPORTED_MODULE_10__models_notification__["a" /* Notification */](error.type, error.message, error.errors));
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.message);
    };
    SecurityService.prototype.retrieve = function (key) {
        var item = localStorage.getItem(key);
        if (item && item !== "undefined") {
            return JSON.parse(localStorage.getItem(key));
        }
        return null;
    };
    SecurityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_9__notifications_service__["a" /* NotificationsService */]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map