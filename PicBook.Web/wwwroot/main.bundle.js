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
exports.push([module.i, "body {\r\n  color: #5a5a5a;\r\n  background-color: #5a5a5a;\r\n}\r\n\r\ndiv {\r\n  text-align: center;\r\n  padding-top: 3px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  width: 120px;\r\n  height: 24px;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 0;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"gallery()\" type=\"button\" class=\"btn btn-xs btn-default\">Gallery</button>\r\n  <button *ngIf=\"loginHidden\" (click)=\"logout()\" type=\"button\" class=\"btn btn-xs btn-default\">Logout</button>\r\n  <login *ngIf=\"!loginHidden\"></login>\r\n</div>\r\n<notifications></notifications>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
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





var AppComponent = (function () {
    function AppComponent(_authService, _router, _notifier) {
        this._authService = _authService;
        this._router = _router;
        this._notifier = _notifier;
    }
    Object.defineProperty(AppComponent.prototype, "loginHidden", {
        get: function () {
            return this._authService.IsAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        localStorage.removeItem("uid");
        localStorage.removeItem("acc_token");
        localStorage.removeItem("external_login_provider");
        this._router.navigate([""]);
        this._notifier.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification__["a" /* Notification */]("success", "Logout successful."));
    };
    AppComponent.prototype.gallery = function () {
        this._router.navigate(["/gallery"]);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_notifications_service__["a" /* NotificationsService */]])
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
        this.FacebookTokenValidationUrl = "https://graph.facebook.com/v2.4/me/?access_token=";
        this.GoogleTokenValidationUrl = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
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
                __WEBPACK_IMPORTED_MODULE_16__app_constants__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_13__services_notifications_service__["a" /* NotificationsService */],
                __WEBPACK_IMPORTED_MODULE_14__services_logger_service__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */]
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
    { path: "gallery", component: __WEBPACK_IMPORTED_MODULE_2__components_gallery_gallery_component__["a" /* GalleryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard__["a" /* AuthGuard */]] }
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
exports.push([module.i, ".aligncenter{\r\n  text-align: center;\r\n  min-width: 50%;\r\n  padding-top: 10px;\r\n}\r\n.fileContainer {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n/*label {\r\n  display: block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}*/\r\n  .fileContainer [type=file] {\r\n    cursor: inherit;\r\n    display: block;\r\n    font-size: 999px;\r\n    filter: alpha(opacity=0);\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: right;\r\n    top: 0;\r\n  }\r\n\r\n.body {\r\n  background-image: linear-gradient(to top, #ecedee 0%, #eceeef 75%, #e7e8e9 100%);\r\n  min-height: 100vh;\r\n  color: #323231;\r\n  font: normal 16px sans-serif;\r\n  padding: 1px 1px;\r\n}\r\n\r\n.header {\r\n  /*border: 1px solid black;*/\r\n  padding-left: 90px;\r\n}\n\n.container.gallery-container {\n  /*background-color: #F3EEE1;*/\n  background-image: linear-gradient(to top, #ecedee 0%, #eceeef 50%, #e7e8e9 65%, #EAE3D1 100%);\n  color: #35373a;\n  min-height: 100vh;\n  border-radius: 5px;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06);\n}\n\n.gallery-container h1 {\n  text-align: center;\n  /*margin-top: 30px;*/\n  font-family: 'Droid Sans', sans-serif;\n  font-weight: bold;\n}\n\n.gallery-container p.page-description {\n  text-align: center;\n  max-width: 800px;\n  margin: 25px auto;\n  color: #888;\n  font-size: 18px;\n}\n\n.tz-gallery {\n  padding: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let picture of pictures\">\r\n  <picture [uri]=\"picture.uri\"></picture>\r\n</div>-->\r\n<div class=\"body\">\r\n  <div class=\"header\">\r\n    <h1>My Gallery</h1>\r\n  </div>\r\n  <div class=\"container gallery-container\">\r\n    <div class=\"aligncenter\">\r\n      <label class=\"fileContainer\">\r\n        Click here to select files to upload!\r\n        <input type=\"file\" id=\"imgInput\" (change)=\"onImgInputChange($event)\" class=\"input\" multiple />\r\n      </label>\r\n      <br />\r\n      <button (click)=\"upload()\" class=\"btn btn-default\">Upload</button>\r\n    </div>\r\n    <!--<h1>My Gallery</h1>-->\r\n    <!--<p class=\"page-description text-center\">Private</p>-->\r\n\r\n    <div class=\"tz-gallery\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"let picture of pictures\">\r\n          <!--<a class=\"lightbox\" [href]=\"picture.uri\">-->\r\n            <!--<img [src]=\"picture.uri\">-->\r\n            <picture [uri] =\"picture.uri\"></picture>\r\n          <!--</a>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
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
    function GalleryComponent(_dataService, _logger, _notifier, _authService, _router) {
        this._dataService = _dataService;
        this._logger = _logger;
        this._notifier = _notifier;
        this._authService = _authService;
        this._router = _router;
        this.fileCache = new Array();
        this.pictures = new Array();
    }
    GalleryComponent.prototype.ngOnInit = function () {
        if (this._authService.validateToken()) {
            this.fileCache = [];
            this.pictures = [];
            this.fetchPictures();
        }
        else {
            this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("warning", "geci"));
            this._router.navigate([""]);
        }
    };
    GalleryComponent.prototype.fetchPictures = function () {
        var _this = this;
        var userId = localStorage.getItem("uid");
        this._dataService.getAll("image/pictures/" + userId)
            .subscribe(function (res) {
            _this._logger.debug("0x000400", "Picture metadata fetched successfully.", res);
            _this.pictures = res.data;
        }, function (error) {
            _this._logger.error("Ex000400", "Error occured while fetching picture metadata.", error);
        });
    };
    GalleryComponent.prototype.onImgInputChange = function (event) {
        var files = event.target.files || event.srcElement.files;
        for (var i = 0; i < files.length; i++) {
            if (files[i].type !== "image/gif" && files[i].type !== "image/png" && files[i].type !== "image/jpeg" && files[i].type !== "image/bmp" && files[i].type !== "image/webp") {
                this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("warning", "File type mismatch."));
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
            var userId = localStorage.getItem("uid");
            this._dataService.uploadFiles("image/upload/" + userId, this.fileCache)
                .subscribe(function (data) {
                _this._logger.debug("0x000300", "File uploaded", data);
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("success", "Upload successful"));
                _this.fetchPictures();
            }, function (err) {
                _this._logger.debug("Ex000300", err.message, err);
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("error", "Error in uploading", err));
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__services_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  color: #5a5a5a;\r\n  background-color: #5a5a5a;\r\n}\r\n\r\ndiv {\r\n  text-align: center;\r\n  padding-top: 3px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  width: 120px;\r\n  height: 24px;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 0;\r\n  vertical-align: top;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "  <button (click)=\"login('facebook')\" type=\"button\" class=\"btn btn-xs btn-default\">Facebook Login</button>\r\n  <button (click)=\"login('google')\" type=\"button\" class=\"btn btn-xs btn-default\">Google Login</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_notification__ = __webpack_require__("../../../../../src/app/models/notification.ts");
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
    function LoginComponent(_authService, _logger, _router, _notifier) {
        this._authService = _authService;
        this._logger = _logger;
        this._router = _router;
        this._notifier = _notifier;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (provider) {
        var _this = this;
        this._authService.getExternalAccessToken(provider).subscribe(function (data) {
            var user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
            var extRes = data;
            user.email = extRes.email;
            user.name = extRes.name;
            user.provider = extRes.provider;
            user.userIdentifier = extRes.uid;
            _this._authService.login(user).subscribe(function (res) {
                _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("success", "Login successful."));
                _this._logger.debug("0x020700", "Login successful.", res);
                localStorage.setItem("uid", extRes.uid);
                localStorage.setItem("acc_token", extRes.token);
                localStorage.setItem("external_login_provider", extRes.provider);
                _this._router.navigate(["/gallery"]);
            });
        }, function (err) {
            _this._logger.error("Ex020700", "Error occured in external login.", err);
            _this._notifier.add(new __WEBPACK_IMPORTED_MODULE_6__models_notification__["a" /* Notification */]("error", "Error occured while logging in."));
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_notifications_service__["a" /* NotificationsService */]])
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
exports.push([module.i, ".lightbox img {\r\n  width: 100%;\r\n  margin-bottom: 30px;\r\n  transition: 0.2s ease-in-out;\r\n  box-shadow: 0 2px 3px rgba(0,0,0,0.2);\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n.lightbox img:hover {\r\n      -webkit-transform: scale(1.05);\r\n              transform: scale(1.05);\r\n      box-shadow: 0 8px 15px rgba(0,0,0,0.3);\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <!--<a [href]=\"uri\">\r\n    <img [src]=\"uri\" width=\"300\" height=\"300\" />\r\n  </a>-->\r\n\r\n<a class=\"lightbox\" [href]=\"uri\">\r\n  <!--<img [src]=\"picture.uri\">-->\r\n  <img [src]=\"uri\">\r\n</a>\r\n"

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
exports.push([module.i, "body {\n  min-height: 2000px;\n}\n\n.navbar-static-top {\n  margin-bottom: 19px;\n}\n\r\n\r\n/*.body {\r\n  min-height: 100vh;\r\n  color: #323231;\r\n  font: normal 16px sans-serif;\r\n  padding: 60px 0;\r\n  background-image: linear-gradient(to top, #ecedee 0%, #eceeef 75%, #e7e8e9 100%);\r\n}\r\n\r\n.carousel {\r\n  height: 400px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.carousel-caption {\r\n  z-index: 10;\r\n}\r\n\r\n.carousel .item {\r\n  height: 400px;\r\n  background-color: #f00;\r\n}\r\n\r\n.carousel-inner > .item > img {\r\n  background-image: linear-gradient(to top, #ecedee 0%, #eceeef 75%, #e7e8e9 100%);\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carousel-caption p {\r\n    margin-top: 20px;\r\n    font-size: 21px;\r\n    line-height: 1.4;\r\n  }\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Main component for a primary marketing message or call to action -->\r\n  <div class=\"jumbotron\">\r\n    <h1>Ronins Cloud</h1>\r\n    <h2>High Competence</h2>\r\n    <p>\r\n      Datacenter building and operating experience. Certified specialists in all the represented directions.\r\n      All the company founders and vast majority of our employees are qualified IT professionals.\r\n    </p>\r\n    <hr />\r\n    <h2>Quality, reiability and efficiency</h2>\r\n    <p>Our infrastructure is implemented on High End equipment from the best manufacturers in the industry.</p>\r\n    <p>Our equipment is hosted in the best data centers with a safety category not lower than TIER III.</p>\r\n    <p>We offer fault-torelant solutions distributed among the data centers network with the ability of hosting infrastructure in Europe.</p>\r\n    <hr />\r\n    <h2>Security</h2>\r\n    <p>Today your data is your most critical asset. </p>\r\n    <p>We are dedicated to protecting your personal data against unauthorized usage and we are fully compliant with all European data protection laws - which are amongst the strictest in the world.</p>\r\n    <hr />\r\n  </div>\r\n</div> <!-- /container -->\r\n<!--<div class=\"body\">\r\n\r\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n        <img class=\"first-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"First slide\">\r\n        <div class=\"container\">\r\n          <div class=\"carousel-caption\">\r\n            <h1>High Competence</h1>\r\n            <p>\r\n              Datacenter building and operating experience. Certified specialists in all the represented directions.\r\n              All the company founders and vast majority of our employees are qualified IT professionals.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img class=\"second-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Second slide\">\r\n        <div class=\"container\">\r\n          <div class=\"carousel-caption\">\r\n            <h1>Quality, reiability and efficiency</h1>\r\n            <p>Our infrastructure is implemented on High End equipment from the best manufacturers in the industry.</p>\r\n            <p>Our equipment is hosted in the best data centers with a safety category not lower than TIER III.</p>\r\n            <p>We offer fault-torelant solutions distributed among the data centers network with the ability of hosting infrastructure in Europe.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img class=\"third-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Third slide\">\r\n        <div class=\"container\">\r\n          <div class=\"carousel-caption\">\r\n            <h1>Security</h1>\r\n            <p>Today your data is your most critical asset. </p>\r\n            <p>We are dedicated to protecting your personal data against unauthorized usage and we are fully compliant with all European data protection laws - which are amongst the strictest in the world.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>-->\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
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





var AuthGuard = (function () {
    function AuthGuard(_logger, _authService, _notifier) {
        this._logger = _logger;
        this._authService = _authService;
        this._notifier = _notifier;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this._authService.IsAuthenticated) {
            this._logger.warn("Wx000001", "AUTH GUARD DENIED ACCESS");
            this._notifier.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification__["a" /* Notification */]("warning", "Access Denied."));
        }
        return this._authService.IsAuthenticated;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_service__["a" /* NotificationsService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var AuthenticationService = (function () {
    function AuthenticationService(_logger, _configuration, _externalAuth, _http, _notifier) {
        this._logger = _logger;
        this._configuration = _configuration;
        this._externalAuth = _externalAuth;
        this._http = _http;
        this._notifier = _notifier;
    }
    Object.defineProperty(AuthenticationService.prototype, "IsAuthenticated", {
        get: function () {
            return this.retrieve("acc_token");
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.validateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ret, accToken, provider, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = false;
                        accToken = localStorage.getItem("acc_token");
                        provider = localStorage.getItem("external_login_provider");
                        if (!accToken || !provider) {
                            this._logger.error("Ex111100", "Access token or provider not found in local storage.");
                            return [2 /*return*/, ret];
                        }
                        url = "";
                        if (provider === "facebook") {
                            url = this._configuration.FacebookTokenValidationUrl + accToken;
                        }
                        else if (provider === "google") {
                            url = this._configuration.GoogleTokenValidationUrl + accToken;
                        }
                        return [4 /*yield*/, this._http.get(url)
                                .subscribe(function (res) {
                                _this._logger.debug("0x000209", "Token validation was successful.", res);
                                ret = true;
                            }, function (err) {
                                var errJson = JSON.parse(err._body);
                                if (provider === "facebook") {
                                    if (errJson.error.message !== "Invalid OAuth access token.") {
                                        _this.getExternalAccessToken(provider).subscribe(function (res) {
                                            localStorage.setItem("acc_token", res.token);
                                            _this._logger.debug("0x709000", "Refreshing external access token was successful.", res);
                                            ret = true;
                                        }, function (error) {
                                            _this._logger.error("Ex709000", "Error in refreshing external token.", error);
                                        });
                                    }
                                    else {
                                        _this._logger.error("Ex709001", "Invalid access token.");
                                    }
                                }
                                else if (provider === "google") {
                                    if (errJson.error_description !== "Invalid Value") {
                                        _this.getExternalAccessToken(provider).subscribe(function (res) {
                                            localStorage.setitem("acc_token", res.token);
                                            _this._logger.debug("0x709000", "Refreshing external access token was successful.", res);
                                            ret = true;
                                        }, function (error) {
                                            _this._logger.error("Ex709000", "Error in refreshing external token.", error);
                                        });
                                    }
                                    else {
                                        _this._logger.error("Ex709001", "Invalid access token.");
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AuthenticationService.prototype.getExternalAccessToken = function (provider) {
        return this._externalAuth.login(provider);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var headers = this.setHeader();
        return this._http.post(this._configuration.ServerWithApiUrl + "account/login", user, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthenticationService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        return headers;
    };
    AuthenticationService.prototype.handleError = function (error) {
        this._logger.error("Ex200000", "Error occured while processing authentication operations.", error);
        //this._notifier.add(new Notification("error", error.message, error.errors));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.message);
    };
    AuthenticationService.prototype.retrieve = function (key) {
        var item = localStorage.getItem(key);
        if (item && item !== "undefined") {
            //return localStorage.getItem(key);
            return true;
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_7__app_constants__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_social_login__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_9__notifications_service__["a" /* NotificationsService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
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
    function DataService(_logger, _http, _configuration, _notifier, _authService) {
        this._logger = _logger;
        this._http = _http;
        this._configuration = _configuration;
        this._notifier = _notifier;
        this._authService = _authService;
    }
    DataService.prototype.getAll = function (action) {
        var _this = this;
        this._authService.validateToken();
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
        //this._notifier.add(new Notification("error", error.message, error.errors));
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
            __WEBPACK_IMPORTED_MODULE_8__notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_9__authentication_service__["a" /* AuthenticationService */]])
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