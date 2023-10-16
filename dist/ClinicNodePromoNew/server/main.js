/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_0__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_0__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_0__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-server */ 97014);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.app = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 86032);
__webpack_require__(/*! zone.js/node */ 95510);
const common_1 = __webpack_require__(/*! @angular/common */ 34228);
const express_engine_1 = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
const express = __webpack_require__(/*! express */ 35162);
const node_fs_1 = __webpack_require__(/*! node:fs */ 87561);
const node_path_1 = __webpack_require__(/*! node:path */ 49411);
const main_server_1 = __webpack_require__(/*! ./src/main.server */ 49174);
__webpack_require__(/*! localstorage-polyfill */ 59230);
// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express();
  const distFolder = (0, node_path_1.join)(process.cwd(), 'dist/ClinicNodePromoNew/browser');
  const indexHtml = (0, node_fs_1.existsSync)((0, node_path_1.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  const MockBrowser = (__webpack_require__(/*! mock-browser */ 33144).mocks.MockBrowser);
  const mock = new MockBrowser();
  global['window'] = mock.getWindow();
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0, express_engine_1.ngExpressEngine)({
    bootstrap: main_server_1.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: common_1.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  global['localStorage'] = localStorage;
  return server;
}
exports.app = app;
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}
tslib_1.__exportStar(__webpack_require__(/*! ./src/main.server */ 49174), exports);

  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppRoutingModule = void 0;
const router_1 = __webpack_require__(/*! @angular/router */ 68804);
const about_us_component_1 = __webpack_require__(/*! ./pages/about-us/about-us.component */ 55875);
const contact_us_form_component_1 = __webpack_require__(/*! ./pages/contact-us-form/contact-us-form.component */ 95475);
const cookie_component_1 = __webpack_require__(/*! ./pages/cookie/cookie.component */ 36956);
const home_component_1 = __webpack_require__(/*! ./pages/home/home.component */ 13783);
const impressum_component_1 = __webpack_require__(/*! ./pages/impressum/impressum.component */ 62013);
const our_service_component_1 = __webpack_require__(/*! ./pages/our-service/our-service.component */ 12469);
const privacy_policy_component_1 = __webpack_require__(/*! ./pages/privacy-policy/privacy-policy.component */ 14962);
const terms_component_1 = __webpack_require__(/*! ./pages/terms/terms.component */ 32883);
const type_of_work_component_1 = __webpack_require__(/*! ./pages/type-of-work/type-of-work.component */ 67719);
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! @angular/router */ 68804);
const routes = [{
  path: '',
  component: home_component_1.HomeComponent
}, {
  path: 'about-us',
  component: about_us_component_1.AboutUsComponent
}, {
  path: 'our-service',
  component: our_service_component_1.OurServiceComponent
}, {
  path: 'type-of-work',
  component: type_of_work_component_1.TypeOfWorkComponent
}, {
  path: 'contact-us',
  component: contact_us_form_component_1.ContactUsFormComponent
}, {
  path: 'impressum',
  component: impressum_component_1.ImpressumComponent
}, {
  path: 'privacy-policy',
  component: privacy_policy_component_1.PrivacyPolicyComponent
}, {
  path: 'terms',
  component: terms_component_1.TermsComponent
}, {
  path: 'cookie',
  component: cookie_component_1.CookieComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
    imports: [router_1.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), router_1.RouterModule]
  });
}
exports.AppRoutingModule = AppRoutingModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! ./services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
const i3 = __webpack_require__(/*! @angular/router */ 68804);
const i4 = __webpack_require__(/*! ./parts/navigation/navigation.component */ 78253);
const i5 = __webpack_require__(/*! ./parts/footer/footer.component */ 59775);
function AppComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "img", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "a", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, ".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 15);
    i0.ɵɵlistener("click", function AppComponent_div_12_Template_a_click_7_listener() {
      i0.ɵɵrestoreView(_r2);
      const ctx_r1 = i0.ɵɵnextContext();
      return i0.ɵɵresetView(ctx_r1.setCookieRead());
    });
    i0.ɵɵelement(8, "i", 16);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.cookieMessage, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.here);
  }
}
class AppComponent {
  constructor(help) {
    this.help = help;
    this.scrollToTop = '';
    this.title = 'ClinicNodePromoNew';
    this.cookieRead = 1;
  }
  ngOnInit() {
    //this.help.setSelectionLanguage('english');
    if (!this.help.getSelectionLanguage()) {
      this.help.setSelectionLanguage('germany');
    }
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
    this.cookieRead = this.help.getCookieRead() ? Number(this.help.getCookieRead()) : 1;
  }
  onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 0) {
      this.scrollToTop = 'show';
    } else {
      this.scrollToTop = '';
    }
  }
  setCookieRead() {
    this.cookieRead = 0;
    this.help.setCookieRead();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵlistener("scroll", function AppComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, i0.ɵɵresolveWindow);
      }
    },
    decls: 16,
    vars: 4,
    consts: [[1, "preloader-activate", "preloader-active", "open_tm_preloader"], [1, "preloader-area-wrap"], [1, "spinner", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"], ["id", "main-wrapper"], [1, "site-wrapper-reveal"], ["class", "cookie-message", 4, "ngIf"], ["href", "#", "id", "scroll-top"], [1, "arrow-top", "fal", "fa-long-arrow-up"], [1, "arrow-bottom", "fal", "fa-long-arrow-up"], [1, "cookie-message"], ["src", "../../../assets/images/icons/cookie.png"], ["routerLink", "/cookie"], [1, "close", 3, "click"], [1, "fa", "fa-times"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "body")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        i0.ɵɵelement(4, "div", 3)(5, "div", 4)(6, "div", 5);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(7, "app-navigation");
        i0.ɵɵelementStart(8, "div", 6)(9, "div", 7);
        i0.ɵɵelement(10, "router-outlet");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(11, "app-footer");
        i0.ɵɵtemplate(12, AppComponent_div_12_Template, 9, 2, "div", 8);
        i0.ɵɵelementStart(13, "a", 9);
        i0.ɵɵelement(14, "i", 10)(15, "i", 11);
        i0.ɵɵelementEnd()();
      }
      if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngIf", ctx.cookieRead && ctx.language);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("scroll-top ", ctx.scrollToTop, "");
      }
    },
    dependencies: [i2.NgIf, i3.RouterOutlet, i3.RouterLink, i4.NavigationComponent, i5.FooterComponent],
    styles: [".cookie-message[_ngcontent-%COMP%] {\n  font-family: \"Century Gothic\", CenturyGothic, Geneva, AppleGothic, sans-serif;\n  border-radius: 10px;\n  padding: 15px 0;\n  background: #f7f8fb;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.05), 0 10px 10px 2px rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n  line-height: 40px;\n  border-top: 1px solid #e4e4e4;\n  position: fixed;\n  z-index: 100;\n  bottom: 4.3%;\n  left: 2%;\n  margin: auto;\n  max-width: 540px;\n  display: flex;\n}\n\n.cookie-message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin: 0 15px;\n  align-self: center;\n}\n\n.cookie-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.5;\n  padding-right: 16px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.cookie-message[_ngcontent-%COMP%]   a.close[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border: none;\n  font-size: 24px;\n  padding: 0 20px 0 16px;\n  position: relative;\n  align-self: center;\n  color: #919191;\n  transition: color 0.2s;\n}\n\n.cookie-message[_ngcontent-%COMP%]   a.close[_ngcontent-%COMP%]:hover {\n  color: #795548;\n}\n\n.cookie-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: red;\n  text-decoration: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUZBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFFSjs7QUFBRTtFQUVFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUtKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvb2tpZS1tZXNzYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljXCIsIENlbnR1cnlHb3RoaWMsIEdlbmV2YSwgQXBwbGVHb3RoaWMsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcclxuICAgICAgMCAxMHB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYm90dG9tOiA0LjMlO1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY29va2llLW1lc3NhZ2UgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvb2tpZS1tZXNzYWdlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5jb29raWUtbWVzc2FnZSBhLmNsb3NlIHtcclxuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1ncmlkLXJvdy1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG4gIH1cclxuICAuY29va2llLW1lc3NhZ2UgYS5jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc5NTU0ODtcclxuICB9XHJcbiAgLmNvb2tpZS1tZXNzYWdlIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
exports.AppComponent = AppComponent;

/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppModule = void 0;
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ 11838);
const app_component_1 = __webpack_require__(/*! ./app.component */ 96846);
const navigation_component_1 = __webpack_require__(/*! ./parts/navigation/navigation.component */ 78253);
const footer_component_1 = __webpack_require__(/*! ./parts/footer/footer.component */ 59775);
const testimonial_component_1 = __webpack_require__(/*! ./parts/testimonial/testimonial.component */ 406);
const contact_us_component_1 = __webpack_require__(/*! ./parts/contact-us/contact-us.component */ 75882);
const services_component_1 = __webpack_require__(/*! ./parts/services/services.component */ 89316);
const fun_fact_component_1 = __webpack_require__(/*! ./parts/fun-fact/fun-fact.component */ 37051);
const about_us_component_1 = __webpack_require__(/*! ./pages/about-us/about-us.component */ 55875);
const home_component_1 = __webpack_require__(/*! ./pages/home/home.component */ 13783);
const type_of_work_component_1 = __webpack_require__(/*! ./pages/type-of-work/type-of-work.component */ 67719);
const contact_us_form_component_1 = __webpack_require__(/*! ./pages/contact-us-form/contact-us-form.component */ 95475);
const http_1 = __webpack_require__(/*! @angular/common/http */ 56448);
const helps_service_1 = __webpack_require__(/*! ./services/helps.service */ 15917);
const our_service_component_1 = __webpack_require__(/*! ./pages/our-service/our-service.component */ 12469);
const feature_component_1 = __webpack_require__(/*! ./parts/feature/feature.component */ 24648);
const call_us_component_1 = __webpack_require__(/*! ./parts/call-us/call-us.component */ 95001);
const about_us_delivering_component_1 = __webpack_require__(/*! ./parts/about-us-delivering/about-us-delivering.component */ 58745);
const call_us_promo_component_1 = __webpack_require__(/*! ./parts/call-us-promo/call-us-promo.component */ 92632);
const language_component_1 = __webpack_require__(/*! ./parts/language/language.component */ 92231);
const dynamic_text_component_1 = __webpack_require__(/*! ./dynamic/dynamic-text/dynamic-text.component */ 35478);
const impressum_component_1 = __webpack_require__(/*! ./pages/impressum/impressum.component */ 62013);
const privacy_policy_component_1 = __webpack_require__(/*! ./pages/privacy-policy/privacy-policy.component */ 14962);
const terms_component_1 = __webpack_require__(/*! ./pages/terms/terms.component */ 32883);
const cookie_component_1 = __webpack_require__(/*! ./pages/cookie/cookie.component */ 36956);
const i0 = __webpack_require__(/*! @angular/core */ 59936);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
    type: AppModule,
    bootstrap: [app_component_1.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
    providers: [helps_service_1.HelpsService],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule]
  });
}
exports.AppModule = AppModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
    declarations: [app_component_1.AppComponent, navigation_component_1.NavigationComponent, footer_component_1.FooterComponent, testimonial_component_1.TestimonialComponent, contact_us_component_1.ContactUsComponent, services_component_1.ServicesComponent, fun_fact_component_1.FunFactComponent, about_us_component_1.AboutUsComponent, home_component_1.HomeComponent, type_of_work_component_1.TypeOfWorkComponent, contact_us_form_component_1.ContactUsFormComponent, our_service_component_1.OurServiceComponent, feature_component_1.FeatureComponent, call_us_component_1.CallUsComponent, about_us_delivering_component_1.AboutUsDeliveringComponent, call_us_promo_component_1.CallUsPromoComponent, language_component_1.LanguageComponent, dynamic_text_component_1.DynamicTextComponent, impressum_component_1.ImpressumComponent, privacy_policy_component_1.PrivacyPolicyComponent, terms_component_1.TermsComponent, cookie_component_1.CookieComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule]
  });
})();

/***/ }),

/***/ 21463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppServerModule = void 0;
const platform_server_1 = __webpack_require__(/*! @angular/platform-server */ 97014);
const app_module_1 = __webpack_require__(/*! ./app.module */ 50041);
const app_component_1 = __webpack_require__(/*! ./app.component */ 96846);
const i0 = __webpack_require__(/*! @angular/core */ 59936);
class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
    type: AppServerModule,
    bootstrap: [app_component_1.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
    imports: [app_module_1.AppModule, platform_server_1.ServerModule]
  });
}
exports.AppServerModule = AppServerModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppServerModule, {
    imports: [app_module_1.AppModule, platform_server_1.ServerModule]
  });
})();

/***/ }),

/***/ 35478:
/*!****************************************************************!*\
  !*** ./src/app/dynamic/dynamic-text/dynamic-text.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DynamicTextComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function DynamicTextComponent_section_0_p_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function DynamicTextComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1)(1, "div", 2)(2, "h2", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DynamicTextComponent_section_0_p_4_Template, 2, 1, "p", 4);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.language.text);
  }
}
class DynamicTextComponent {
  constructor(helps) {
    this.helps = helps;
  }
  ngOnInit() {
    this.helps.getLanguageFromFolder(this.type, this.helps.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function DynamicTextComponent_Factory(t) {
    return new (t || DynamicTextComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: DynamicTextComponent,
    selectors: [["app-dynamic-text"]],
    inputs: {
      type: "type"
    },
    decls: 1,
    vars: 1,
    consts: [["id", "terms-of-service", 4, "ngIf"], ["id", "terms-of-service"], [1, "card"], [1, "primary-heading"], ["class", "paragraph", 4, "ngFor", "ngForOf"], [1, "paragraph"]],
    template: function DynamicTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, DynamicTextComponent_section_0_Template, 5, 2, "section", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgForOf, i2.NgIf],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 1200px;\n  border-radius: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 5px solid #f5f5f5;\n  padding-top: 40px;\n  padding-bottom: 45px;\n  background-color: #fff;\n  transition: all 0.3s;\n}\n\n.card[_ngcontent-%COMP%]   .primary-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000;\n  font-size: 2.3em;\n  padding-bottom: 0.5em;\n}\n\n.paragraph[_ngcontent-%COMP%] {\n  color: #000;\n  margin-left: 50px;\n  margin-right: 25px;\n  font-size: 1.2em;\n  line-height: 1.3em;\n  font-weight: 500;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n}\n\n.footer-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-bottom: 50px;\n  font-size: 2em;\n  line-height: 35px;\n}\n\n@media only screen and (max-width: 1218px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    width: 1000px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width: 1012px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    width: 800px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width: 832px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    width: 600px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .card[_ngcontent-%COMP%]   .primary-heading[_ngcontent-%COMP%] {\n    font-size: 3.5em;\n  }\n  .footer-heading[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (max-width: 626px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    width: 450px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .header-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .main-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   .primary-heading[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    width: 350px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .card[_ngcontent-%COMP%]   .primary-heading[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 365px) {\n  .card[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    width: 290px;\n    border-radius: 30px;\n    background-color: #007bff;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .card[_ngcontent-%COMP%]   .primary-heading[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHluYW1pYy9keW5hbWljLXRleHQvZHluYW1pYy10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFERjtFQUdBO0lBQ0UsZ0JBQUE7RUFERjtFQUlBO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFIRjtFQU1BO0lBQ0UsY0FBQTtFQUpGO0VBT0E7SUFDRSxhQUFBO0VBTEY7RUFRQTtJQUNFLGNBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFQRjtFQVVBO0lBQ0UsY0FBQTtFQVJGO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQVRGO0VBWUE7SUFDRSxjQUFBO0VBVkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmNhcmQgLnByaW1hcnktaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG4ucGFyYWdyYXBoIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5mb290ZXItaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMThweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTJweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzJweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZCAucHJpbWFyeS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI2cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5oZWFkZXItbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm1haW4taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAucHJpbWFyeS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgLnByaW1hcnktaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkIC5wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
exports.DynamicTextComponent = DynamicTextComponent;

/***/ }),

/***/ 55875:
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AboutUsComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! @angular/router */ 68804);
const i5 = __webpack_require__(/*! ../../parts/about-us-delivering/about-us-delivering.component */ 58745);
const i6 = __webpack_require__(/*! ../../parts/call-us-promo/call-us-promo.component */ 92632);
function AboutUsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "h1", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h5", 9);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(11, "div", 10)(12, "div", 4)(13, "div", 5)(14, "div", 11)(15, "div", 12)(16, "h6", 13);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h3", 14);
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵtext(21);
    i0.ɵɵelementStart(22, "span", 15);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(24, "div", 16)(25, "div", 5)(26, "div", 17)(27, "div", 18)(28, "h2", 19)(29, "span", 20);
    i0.ɵɵtext(30, "8");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "h6", 21);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 22)(35, "div", 23)(36, "div", 24);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 5)(39, "div", 25)(40, "div", 26)(41, "div", 5)(42, "div", 27)(43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "div", 31);
    i0.ɵɵelement(47, "img", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 33)(49, "h5", 14);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "div", 24);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(53, "div", 27)(54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "div", 31);
    i0.ɵɵelement(58, "img", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div", 33)(60, "h5", 14);
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 24);
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(64, "div", 27)(65, "div", 28)(66, "div", 29)(67, "div", 30)(68, "div", 31);
    i0.ɵɵelement(69, "img", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div", 33)(71, "h5", 14);
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "div", 24);
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(75, "div", 36);
    i0.ɵɵtext(76);
    i0.ɵɵelementStart(77, "a", 37);
    i0.ɵɵtext(78);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelement(79, "app-about-us-delivering")(80, "app-call-us-promo");
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsText, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsCardOneTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsCardOneText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsCardOneTextSecond, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsCardOneTextThree, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.yearsExperience, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.moreAboutSuccessStory);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutOurCompanyText);
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsCardTwoTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsCardTwoText, " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsCardThreeTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsCardThreeText, " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsCardFourTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsCardFourText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsChallenge, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutTakeTheChallenge);
  }
}
class AboutUsComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
      this.title.setTitle(this.language.navigationMenuAboutUs + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function AboutUsComponent_Factory(t) {
    return new (t || AboutUsComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: AboutUsComponent,
    selectors: [["app-about-us"]],
    decls: 1,
    vars: 1,
    consts: [["id", "main-wrapper", 4, "ngIf"], ["id", "main-wrapper"], [1, "site-wrapper-reveal"], [1, "about-banner-wrap", "banner-space", "about-us-bg"], [1, "container"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "about-banner-content", "text-center"], [1, "mb-15", "text-white"], [1, "font-weight--normal", "text-white"], [1, "feature-large-images-wrapper", "section-space--ptb_100"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_60"], [1, "section-sub-title", "mb-20"], [1, "heading"], [1, "text-color-primary"], [1, "cybersecurity-about-box", "section-space--pb_70"], [1, "col-lg-4", "offset-lg-1"], [1, "modern-number-01"], [1, "heading", "me-5"], [1, "mark-text"], [1, "heading", "mt-30"], [1, "col-lg-5", "offset-lg-1"], [1, "cybersecurity-about-text"], [1, "text"], [1, "col-12"], [1, "feature-images__six"], [1, "col-lg-4", "col-md-6", "wow", "move-up"], [1, "ht-box-images", "style-06"], [1, "image-box-wrap"], [1, "box-image"], [1, "default-image"], ["src", "assets/images/icons/mitech-box-image-style-06-image-01-120x120.webp", "alt", "", 1, "img-fulid"], [1, "content"], ["src", "assets/images/icons/mitech-box-image-style-06-image-02-120x120.webp", "alt", "", 1, "img-fulid"], ["src", "assets/images/icons/mitech-box-image-style-06-image-03-120x120.webp", "alt", "", 1, "img-fulid"], [1, "section-under-heading", "text-center", "section-space--mt_60"], ["routerLink", "/contact-us"]],
    template: function AboutUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, AboutUsComponent_div_0_Template, 81, 17, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgIf, i4.RouterLink, i5.AboutUsDeliveringComponent, i6.CallUsPromoComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.AboutUsComponent = AboutUsComponent;

/***/ }),

/***/ 95475:
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-us-form/contact-us-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ContactUsFormComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! ../../parts/call-us/call-us.component */ 95001);
function ContactUsFormComponent_body_5_option_47_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function ContactUsFormComponent_body_5_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "body")(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "h2", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h5", 8);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 4)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "h3", 15);
    i0.ɵɵtext(18);
    i0.ɵɵelement(19, "br");
    i0.ɵɵtext(20);
    i0.ɵɵelement(21, "br");
    i0.ɵɵelementStart(22, "span", 16);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 17);
    i0.ɵɵtext(26);
    i0.ɵɵelement(27, "br");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 13)(30, "div", 18)(31, "form", 19);
    i0.ɵɵelement(32, "input", 20);
    i0.ɵɵelementStart(33, "div", 21)(34, "div", 22);
    i0.ɵɵelement(35, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 24)(37, "div", 22);
    i0.ɵɵelement(38, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 22);
    i0.ɵɵelement(40, "input", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 22);
    i0.ɵɵelement(42, "input", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 22)(44, "select", 28)(45, "option", 29);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(47, ContactUsFormComponent_body_5_option_47_Template, 2, 2, "option", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 31);
    i0.ɵɵelement(49, "textarea", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 33)(51, "button", 34);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(53, "p", 35);
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelement(54, "app-call-us");
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactMainTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactMainText);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.contactDescriptionTitleOne, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.contactDescriptionTitleTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactDescriptionTitleThree);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.contactDescriptionTitleFour, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.contactDescriptionTitleFive, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.contactDescriptionTitleSix, "");
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.language.contactFormName);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.language.contactFormTelephone);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.language.contactFormEmail);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.language.contactFormCompanyName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.contactFormCompanySize, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.language.requestDemoDropdownNumbers);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.language.contactFormMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactFormSendMessage);
  }
}
class ContactUsFormComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
      this.title.setTitle(this.language.navigationMenuContact + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function ContactUsFormComponent_Factory(t) {
    return new (t || ContactUsFormComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: ContactUsFormComponent,
    selectors: [["app-contact-us-form"]],
    decls: 6,
    vars: 1,
    consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], [4, "ngIf"], [1, "breadcrumb-area"], [1, "container"], [1, "row"], [1, "col-12"], [1, "breadcrumb_box", "text-center"], [1, "breadcrumb-title"], ["id", "main-wrapper"], [1, "site-wrapper-reveal"], [1, "contact-us-section-wrappaer", "section-space--pt_100", "section-space--pb_70"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-lg-6"], [1, "conact-us-wrap-one", "mb-30"], [1, "heading"], [1, "text-color-primary"], [1, "sub-heading"], [1, "contact-form-wrap"], ["action", "https://api.web3forms.com/submit", "method", "POST"], ["type", "hidden", "name", "access_key", "value", "1b293672-3652-4df3-881e-b2e1124d38f2"], [1, "contact-form"], [1, "contact-inner"], ["name", "Name", "type", "text", 3, "placeholder"], [1, "contact-input"], ["name", "Telephone", "type", "text", 3, "placeholder"], ["name", "Email", "type", "email", 3, "placeholder"], ["name", "Company name", "type", "text", 3, "placeholder"], ["name", "Count of employees", "id", "countOfEmployees", "required", "", 1, "form-control"], ["value", "undefined", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "contact-inner", "contact-message"], ["name", "Message", 3, "placeholder"], [1, "submit-btn", "mt-20"], ["type", "submit", 1, "ht-btn", "ht-btn-md"], [1, "form-messege"], [3, "value"]],
    template: function ContactUsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "head");
        i0.ɵɵelement(1, "meta", 0)(2, "meta", 1);
        i0.ɵɵelementStart(3, "title");
        i0.ɵɵtext(4, "contact form");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(5, ContactUsFormComponent_body_5_Template, 55, 16, "body", 2);
      }
      if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgForOf, i3.NgIf, i4.CallUsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.ContactUsFormComponent = ContactUsFormComponent;

/***/ }),

/***/ 36956:
/*!**************************************************!*\
  !*** ./src/app/pages/cookie/cookie.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CookieComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i2 = __webpack_require__(/*! ../../dynamic/dynamic-text/dynamic-text.component */ 35478);
class CookieComponent {
  constructor(title) {
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle('Cookie - BCI GmbH');
  }
  static #_ = this.ɵfac = function CookieComponent_Factory(t) {
    return new (t || CookieComponent)(i0.ɵɵdirectiveInject(i1.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: CookieComponent,
    selectors: [["app-cookie"]],
    decls: 1,
    vars: 1,
    consts: [[3, "type"]],
    template: function CookieComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "app-dynamic-text", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("type", "cookie");
      }
    },
    dependencies: [i2.DynamicTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.CookieComponent = CookieComponent;

/***/ }),

/***/ 13783:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HomeComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! @angular/router */ 68804);
const i5 = __webpack_require__(/*! ../../parts/contact-us/contact-us.component */ 75882);
const i6 = __webpack_require__(/*! ../../parts/services/services.component */ 89316);
const i7 = __webpack_require__(/*! ../../parts/fun-fact/fun-fact.component */ 37051);
const i8 = __webpack_require__(/*! ../../parts/feature/feature.component */ 24648);
const i9 = __webpack_require__(/*! ../../parts/call-us/call-us.component */ 95001);
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "h2", 13);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 12);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 14)(19, "a", 15);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 16)(22, "span", 17);
    i0.ɵɵelement(23, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()()()()()()()();
    i0.ɵɵelementStart(25, "div", 4)(26, "div", 19)(27, "div", 6)(28, "div", 7)(29, "div", 8)(30, "div", 9)(31, "div", 10)(32, "div", 11)(33, "h3", 12);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h1", 13);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "p", 12);
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 14)(40, "a", 15);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "a", 16)(43, "span", 17);
    i0.ɵɵelement(44, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()()()()()()()()()()();
    i0.ɵɵelementStart(46, "div", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(47, "svg", 21);
    i0.ɵɵelement(48, "path", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(49, "div", 23)(50, "div", 7)(51, "div", 8)(52, "div", 24)(53, "div", 25)(54, "div", 8)(55, "div", 26)(56, "div", 27)(57, "div", 28)(58, "div", 29)(59, "div", 30);
    i0.ɵɵelement(60, "img", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "div", 32);
    i0.ɵɵelement(62, "img", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 34)(64, "h5", 35);
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 36);
    i0.ɵɵtext(67);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(68, "div", 26)(69, "div", 27)(70, "div", 28)(71, "div", 29)(72, "div", 30);
    i0.ɵɵelement(73, "img", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "div", 32);
    i0.ɵɵelement(75, "img", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(76, "div", 34)(77, "h5", 35);
    i0.ɵɵtext(78);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "div", 36);
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(81, "div", 26)(82, "div", 27)(83, "div", 28)(84, "div", 29)(85, "div", 30);
    i0.ɵɵelement(86, "img", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "div", 32);
    i0.ɵɵelement(88, "img", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "div", 34)(90, "h5", 35);
    i0.ɵɵtext(91);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "div", 36);
    i0.ɵɵtext(93);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(94, "div", 41);
    i0.ɵɵtext(95);
    i0.ɵɵelementStart(96, "a", 42);
    i0.ɵɵtext(97);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelement(98, "app-fun-fact")(99, "app-services")(100, "app-contact-us")(101, "app-feature")(102, "app-call-us");
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderFirstTitleFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.sliderFirstTitleSecond, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderFirstText);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderButtonOne);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.sliderButtonTwo, "");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderFirstTitleFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.sliderFirstTitleThree, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderFirstText);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderButtonOne);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.sliderButtonTwo, "");
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.sliderSecondTitleFirst, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.sliderSecondText, " ");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderThreeTitleFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.sliderThreeText, " ");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r0.language.sliderFourTitleFirst);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.sliderFourText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.challengeText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.takeChallenge);
  }
}
class HomeComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
    this.cookieRead = 1;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
      this.title.setTitle(this.language.navigationHome);
    });
    this.cookieRead = this.help.getCookieRead() ? Number(this.help.getCookieRead()) : 1;
  }
  setCookieRead() {
    this.cookieRead = 0;
    this.help.setCookieRead();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "resolutions-hero-slider", "position-relative"], [1, "swiper-container", "hero-slider__container"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["data-swiper-autoplay", "5000", 1, "hero-wrapper", "resolutions-hero-space", "resolutions-hero-bg"], [1, "resolutions-hero-area-content"], [1, "container"], [1, "row"], [1, "col-lg-12", "col-md-12", "m-auto"], [1, "service-hero-wrap", "wow", "move-up"], [1, "service-hero-text", "text-center"], [1, "text-white"], [1, "font-weight--reguler", "text-white", "mb-30"], [1, "hero-button-group", "section-space--mt_50"], ["routerLink", "/contact-us", 1, "ht-btn", "ht-btn-md"], ["routerLink", "/about-us", 1, "ht-btn", "ht-btn-md", "btn--white"], [1, "btn-icon", "me-2"], [1, "fa", "fa-play"], ["data-swiper-autoplay", "5000", 1, "hero-wrapper", "resolutions-hero-space", "resolutions-hero-bg-2"], [1, "vc_row-separator", "center_curve_alt", "bottom"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "preserveAspectRatio", "none", "viewBox", "0 0 100 100"], ["d", "M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"], [1, "feature-images-wrapper", "bg-gray"], [1, "col-12"], [1, "feature-images__five", "resolutions-hero-bottom"], [1, "col-lg-4", "col-md-6", "wow", "move-up"], [1, "ht-box-images", "style-05"], [1, "image-box-wrap"], [1, "box-image"], [1, "default-image"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-01-100x98.webp", "alt", "", 1, "img-fulid"], [1, "hover-images"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.webp", "alt", "", 1, "img-fulid"], [1, "content"], [1, "heading"], [1, "text"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-02-100x98.webp", "alt", "", 1, "img-fulid"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.webp", "alt", "", 1, "img-fulid"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-03-100x98.webp", "alt", "", 1, "img-fulid"], ["src", "assets/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.webp", "alt", "", 1, "img-fulid"], [1, "section-under-heading", "text-center", "section-space--mt_80"], ["routerLink", "/about-us"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, HomeComponent_div_0_Template, 103, 18, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgIf, i4.RouterLink, i5.ContactUsComponent, i6.ServicesComponent, i7.FunFactComponent, i8.FeatureComponent, i9.CallUsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.HomeComponent = HomeComponent;

/***/ }),

/***/ 62013:
/*!********************************************************!*\
  !*** ./src/app/pages/impressum/impressum.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ImpressumComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! ../../dynamic/dynamic-text/dynamic-text.component */ 35478);
class ImpressumComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.title.setTitle(data.footerImpressum + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function ImpressumComponent_Factory(t) {
    return new (t || ImpressumComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: ImpressumComponent,
    selectors: [["app-impressum"]],
    decls: 1,
    vars: 1,
    consts: [[3, "type"]],
    template: function ImpressumComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "app-dynamic-text", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("type", "impressum");
      }
    },
    dependencies: [i3.DynamicTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.ImpressumComponent = ImpressumComponent;

/***/ }),

/***/ 12469:
/*!************************************************************!*\
  !*** ./src/app/pages/our-service/our-service.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OurServiceComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! ../../parts/services/services.component */ 89316);
const i5 = __webpack_require__(/*! ../../parts/feature/feature.component */ 24648);
const i6 = __webpack_require__(/*! ../../parts/call-us-promo/call-us-promo.component */ 92632);
function OurServiceComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h5", 6);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(10, "div", 7)(11, "div", 8);
    i0.ɵɵelement(12, "app-services")(13, "app-feature")(14, "app-call-us-promo");
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesText);
  }
}
class OurServiceComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
      this.title.setTitle(this.language.navigationMenuServices + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function OurServiceComponent_Factory(t) {
    return new (t || OurServiceComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: OurServiceComponent,
    selectors: [["app-our-service"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "breadcrumb-area"], [1, "container"], [1, "row"], [1, "col-12"], [1, "breadcrumb_box", "text-center"], [1, "breadcrumb-title"], ["id", "main-wrapper"], [1, "site-wrapper-reveal"]],
    template: function OurServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, OurServiceComponent_div_0_Template, 15, 2, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgIf, i4.ServicesComponent, i5.FeatureComponent, i6.CallUsPromoComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.OurServiceComponent = OurServiceComponent;

/***/ }),

/***/ 14962:
/*!******************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PrivacyPolicyComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! ../../dynamic/dynamic-text/dynamic-text.component */ 35478);
class PrivacyPolicyComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.title.setTitle(data.footerPrivacyPolicy + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function PrivacyPolicyComponent_Factory(t) {
    return new (t || PrivacyPolicyComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: PrivacyPolicyComponent,
    selectors: [["app-privacy-policy"]],
    decls: 1,
    vars: 1,
    consts: [[3, "type"]],
    template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "app-dynamic-text", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("type", "privacy-policy");
      }
    },
    dependencies: [i3.DynamicTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;

/***/ }),

/***/ 32883:
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TermsComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! ../../dynamic/dynamic-text/dynamic-text.component */ 35478);
class TermsComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.title.setTitle(data.footerTerms + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function TermsComponent_Factory(t) {
    return new (t || TermsComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: TermsComponent,
    selectors: [["app-terms"]],
    decls: 1,
    vars: 1,
    consts: [[3, "type"]],
    template: function TermsComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "app-dynamic-text", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("type", "terms");
      }
    },
    dependencies: [i3.DynamicTextComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.TermsComponent = TermsComponent;

/***/ }),

/***/ 67719:
/*!**************************************************************!*\
  !*** ./src/app/pages/type-of-work/type-of-work.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TypeOfWorkComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/platform-browser */ 41081);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! @angular/router */ 68804);
const i5 = __webpack_require__(/*! ../../parts/call-us-promo/call-us-promo.component */ 92632);
function TypeOfWorkComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "h2", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h5", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.language.typeOfWorkSubtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.typeOfWorkSubtext, " ");
  }
}
function TypeOfWorkComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 3)(4, "div", 4)(5, "div", 12)(6, "div", 13)(7, "h3", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "br");
    i0.ɵɵelementStart(10, "span", 15);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "p", 16);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(14, "div", 17)(15, "div", 3)(16, "div", 4)(17, "div", 5)(18, "div", 18)(19, "div", 19)(20, "a", 20)(21, "div", 21)(22, "div", 22)(23, "div", 23);
    i0.ɵɵelement(24, "img", 24);
    i0.ɵɵelementStart(25, "div", 25)(26, "h5", 26);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 27)(29, "p");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(31, "div", 19)(32, "a", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23);
    i0.ɵɵelement(36, "img", 28);
    i0.ɵɵelementStart(37, "div", 25)(38, "h5", 26);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "div", 27)(41, "p");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(43, "div", 19)(44, "a", 20)(45, "div", 21)(46, "div", 22)(47, "div", 23);
    i0.ɵɵelement(48, "img", 29);
    i0.ɵɵelementStart(49, "div", 25)(50, "h5", 26);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(52, "div", 30)(53, "p");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(55, "div", 31);
    i0.ɵɵtext(56);
    i0.ɵɵelementStart(57, "a", 32);
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelement(59, "app-call-us-promo");
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.language.typeOfWorkTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkTitleSecond);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkText);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkCardOneTitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkCardOneText);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r1.language.typeOfWorkCardTwoTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkCardTwoText);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkCardThreeTitle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.language.typeOfWorkCardThreeText);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.language.aboutUsChallenge, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.language.aboutTakeTheChallenge);
  }
}
class TypeOfWorkComponent {
  constructor(help, title) {
    this.help = help;
    this.title = title;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
      this.title.setTitle(this.language.navigationMenuTypeOfWork + ' - BCI GmbH');
    });
  }
  static #_ = this.ɵfac = function TypeOfWorkComponent_Factory(t) {
    return new (t || TypeOfWorkComponent)(i0.ɵɵdirectiveInject(i1.HelpsService), i0.ɵɵdirectiveInject(i2.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: TypeOfWorkComponent,
    selectors: [["app-type-of-work"]],
    decls: 2,
    vars: 2,
    consts: [["class", "breadcrumb-area", 4, "ngIf"], ["id", "main-wrapper", 4, "ngIf"], [1, "breadcrumb-area"], [1, "container"], [1, "row"], [1, "col-12"], [1, "breadcrumb_box", "text-center"], [1, "breadcrumb-title"], [1, "breadcrumb-text"], ["id", "main-wrapper"], [1, "site-wrapper-reveal"], [1, "feature-large-images-wrapper", "section-space--ptb_100"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_30"], [1, "heading", "mb-20"], [1, "text-color-primary"], [1, "title-dec-text"], [1, "feature-large-images-wrapper", "section-space--pt_70"], [1, "row", "row--35"], [1, "col-lg-4", "col-md-6", "mt-30"], ["href", "#", 1, "box-large-image__wrap", "wow", "move-up"], [1, "box-large-image__box"], [1, "box-large-image__midea"], [1, "images-midea"], ["src", "assets/images/box-image/1.jpg", "alt", "", 1, "img-fluid"], [1, "heading-wrap"], [1, "heading"], [1, "box-large-image__content", "mt-30", "text-center"], ["src", "assets/images/box-image/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/box-image/3.jpg", "alt", "", 1, "img-fluid"], [1, "box-large-image__content", "mt-40", "text-center"], [1, "section-under-heading", "text-center", "section-space--mt_60"], ["routerLink", "/contact-us"]],
    template: function TypeOfWorkComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, TypeOfWorkComponent_div_0_Template, 9, 2, "div", 0);
        i0.ɵɵtemplate(1, TypeOfWorkComponent_div_1_Template, 60, 11, "div", 1);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgIf, i4.RouterLink, i5.CallUsPromoComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.TypeOfWorkComponent = TypeOfWorkComponent;

/***/ }),

/***/ 58745:
/*!****************************************************************************!*\
  !*** ./src/app/parts/about-us-delivering/about-us-delivering.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AboutUsDeliveringComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function AboutUsDeliveringComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h3", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelement(7, "br");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 3)(10, "div", 7)(11, "div", 8)(12, "div", 9);
    i0.ɵɵelement(13, "div", 10);
    i0.ɵɵelementStart(14, "div", 11)(15, "h5", 12);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 13);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 9);
    i0.ɵɵelement(20, "div", 10);
    i0.ɵɵelementStart(21, "div", 11)(22, "h5", 12);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 13);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 9);
    i0.ɵɵelement(27, "div", 10);
    i0.ɵɵelementStart(28, "div", 11)(29, "h5", 12);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 13);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(33, "div", 7)(34, "div", 8)(35, "div", 9);
    i0.ɵɵelement(36, "div", 10);
    i0.ɵɵelementStart(37, "div", 11)(38, "h5", 12);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 13);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 9);
    i0.ɵɵelement(43, "div", 10);
    i0.ɵɵelementStart(44, "div", 11)(45, "h5", 12);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 13);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "div", 9);
    i0.ɵɵelement(50, "div", 10);
    i0.ɵɵelementStart(51, "div", 11)(52, "h5", 12);
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 13);
    i0.ɵɵtext(55);
    i0.ɵɵelementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringTitleOne, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringTitleTwo, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsDeliveringCardOneTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardOneText, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsDeliveringCardTwoTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardTwoText, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardThreeTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsDeliveringCardThreeText);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardFourTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardFourText, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardFiveTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardFiveText, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardSixTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsDeliveringCardSixText, " ");
  }
}
class AboutUsDeliveringComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function AboutUsDeliveringComponent_Factory(t) {
    return new (t || AboutUsDeliveringComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: AboutUsDeliveringComponent,
    selectors: [["app-about-us-delivering"]],
    decls: 1,
    vars: 1,
    consts: [["class", "about-delivering-wrapper section-space--ptb_100", 4, "ngIf"], [1, "about-delivering-wrapper", "section-space--ptb_100"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_20"], [1, "heading"], [1, "col-lg-6"], [1, "delivering-optimal-wrap"], [1, "list-item"], [1, "marker"], [1, "title-wrap"], [1, "title"], [1, "desc"]],
    template: function AboutUsDeliveringComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, AboutUsDeliveringComponent_div_0_Template, 56, 14, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.AboutUsDeliveringComponent = AboutUsDeliveringComponent;

/***/ }),

/***/ 92632:
/*!****************************************************************!*\
  !*** ./src/app/parts/call-us-promo/call-us-promo.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CallUsPromoComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function CallUsPromoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelement(5, "img", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "h3", 10);
    i0.ɵɵtext(10, "4.9/5.0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 11);
    i0.ɵɵelement(12, "span", 12)(13, "span", 12)(14, "span", 12)(15, "span", 12)(16, "span", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 13)(18, "a", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17);
    i0.ɵɵelement(22, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 19)(24, "h6", 20);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 21);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(28, "a", 22)(29, "div", 15)(30, "div", 16)(31, "div", 17);
    i0.ɵɵelement(32, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 19)(34, "h6", 20);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 21);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(25);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactReach);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactTelephone);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactWriteUs);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactEmail);
  }
}
class CallUsPromoComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function CallUsPromoComponent_Factory(t) {
    return new (t || CallUsPromoComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: CallUsPromoComponent,
    selectors: [["app-call-us-promo"]],
    decls: 1,
    vars: 1,
    consts: [["class", "contact-us-area infotechno-contact-us-bg section-space--pt_100", 4, "ngIf"], [1, "contact-us-area", "infotechno-contact-us-bg", "section-space--pt_100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "image"], ["src", "assets/images/banners/home-cybersecurity-contact-bg-image.webp", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "ms-auto"], [1, "contact-info", "style-two", "text-left"], [1, "contact-info-title-wrap", "text-center"], [1, "heading", "mb-10"], [1, "ht-star-rating", "lg-style"], [1, "fa", "fa-star"], [1, "contact-list-item"], ["href", "tel:190068668", 1, "single-contact-list"], [1, "content-wrap"], [1, "content"], [1, "icon"], [1, "fal", "fa-phone"], [1, "main-content"], [1, "heading"], [1, "text"], ["href", "mailto:hello@mitech.com", 1, "single-contact-list"], [1, "fal", "fa-envelope"]],
    template: function CallUsPromoComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, CallUsPromoComponent_div_0_Template, 38, 4, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.CallUsPromoComponent = CallUsPromoComponent;

/***/ }),

/***/ 95001:
/*!****************************************************!*\
  !*** ./src/app/parts/call-us/call-us.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CallUsComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
const i3 = __webpack_require__(/*! @angular/router */ 68804);
function CallUsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h3", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "span", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 8)(10, "div", 9)(11, "a", 10)(12, "span", 11);
    i0.ɵɵelement(13, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 13)(16, "span", 11);
    i0.ɵɵelement(17, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.callUsTitleOne, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.callUsTitleTwo, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.callUsLetTalk, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.callUsGetInfo, "");
  }
}
class CallUsComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function CallUsComponent_Factory(t) {
    return new (t || CallUsComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: CallUsComponent,
    selectors: [["app-call-us"]],
    decls: 1,
    vars: 1,
    consts: [["class", "cta-image-area_one section-space--ptb_80 cta-bg-image_one", 4, "ngIf"], [1, "cta-image-area_one", "section-space--ptb_80", "cta-bg-image_one"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-8", "col-lg-7"], [1, "cta-content", "md-text-center"], [1, "heading", "text-white"], [1, "text-color-secondary"], [1, "col-xl-4", "col-lg-5"], [1, "cta-button-group--one", "text-center"], ["routerLink", "/contact-us", 1, "btn", "btn--white", "btn-one"], [1, "btn-icon", "me-2"], [1, "far", "fa-comment-alt-dots"], ["routerLink", "/our-service", 1, "btn", "btn--secondary", "btn-two"], [1, "far", "fa-info-circle"]],
    template: function CallUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, CallUsComponent_div_0_Template, 19, 4, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf, i3.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.CallUsComponent = CallUsComponent;

/***/ }),

/***/ 75882:
/*!**********************************************************!*\
  !*** ./src/app/parts/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ContactUsComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function ContactUsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h3", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 4)(10, "div", 8)(11, "div", 9);
    i0.ɵɵelement(12, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h6", 11);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "h2", 12)(16, "a", 13);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 14)(19, "a", 15);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.contactSubtitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactTitle);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactReach);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactTelephone);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.contactCallUs);
  }
}
class ContactUsComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function ContactUsComponent_Factory(t) {
    return new (t || ContactUsComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: ContactUsComponent,
    selectors: [["app-contact-us"]],
    decls: 1,
    vars: 1,
    consts: [["class", "contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_120", 4, "ngIf"], [1, "contact-us-section-wrappaer", "processing-contact-us-bg", "section-space--ptb_120"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-lg-6"], [1, "conact-us-wrap-one"], [1, "heading", "text-white"], [1, "sub-heading", "text-white"], [1, "contact-info-two", "text-center"], [1, "icon"], [1, "fal", "fa-phone"], [1, "heading", "font-weight--reguler"], [1, "call-us"], ["href", "tel:190068668"], [1, "contact-us-button", "mt-20"], ["href", "tel: ", 1, "btn", "btn--secondary"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, ContactUsComponent_div_0_Template, 21, 5, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.ContactUsComponent = ContactUsComponent;

/***/ }),

/***/ 24648:
/*!****************************************************!*\
  !*** ./src/app/parts/feature/feature.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function FeatureComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h6", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 9)(14, "div", 10)(15, "div", 3)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
    i0.ɵɵelement(22, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "h5", 7);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 18)(26, "div", 19);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(28, "div", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "div", 16);
    i0.ɵɵelement(34, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h5", 7);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 18)(38, "div", 19);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(40, "div", 11)(41, "div", 12)(42, "div", 13)(43, "div", 14)(44, "div", 15)(45, "div", 16);
    i0.ɵɵelement(46, "i", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "h5", 7);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 18)(50, "div", 19);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(52, "div", 11)(53, "div", 12)(54, "div", 13)(55, "div", 14)(56, "div", 15)(57, "div", 16);
    i0.ɵɵelement(58, "i", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "h5", 7);
    i0.ɵɵtext(60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 18)(62, "div", 19);
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.language.featureSubtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.featureTitleOne, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureTitleSecond, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureTitleThree, "");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureCardTitleOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.featureCardTextOne);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureCardTitleTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.featureCardTextTwo);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureCardTitleThree, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.featureCardTextThree);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.featureCardTitleFour, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.featureCardTextFour);
  }
}
class FeatureComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function FeatureComponent_Factory(t) {
    return new (t || FeatureComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: FeatureComponent,
    selectors: [["app-feature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "feature-icon-wrapper section-space--ptb_80 border-bottom", 4, "ngIf"], [1, "feature-icon-wrapper", "section-space--ptb_80", "border-bottom"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_40"], [1, "section-sub-title", "mb-20"], [1, "heading"], [1, "text-color-primary"], [1, "col-12"], [1, "feature-list__three"], [1, "col-lg-6", "wow", "move-up"], [1, "grid-item", "animate"], [1, "ht-box-icon", "style-03"], [1, "icon-box-wrap"], [1, "content-header"], [1, "icon"], [1, "fal", "fa-life-ring"], [1, "content"], [1, "text"], [1, "fal", "fa-lock-alt"], [1, "fal", "fa-globe"], [1, "fal", "fa-medal"]],
    template: function FeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, FeatureComponent_div_0_Template, 64, 12, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.FeatureComponent = FeatureComponent;

/***/ }),

/***/ 59775:
/*!**************************************************!*\
  !*** ./src/app/parts/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FooterComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
const i3 = __webpack_require__(/*! @angular/router */ 68804);
function FooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6)(6, "p", 7);
    i0.ɵɵtext(7, " \u00A9 Copyright 2022. Made with ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 8);
    i0.ɵɵelement(9, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " from Austria. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 10)(12, "p", 11)(13, "a", 12);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " | ");
    i0.ɵɵelementStart(16, "a", 13);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18, " | ");
    i0.ɵɵelementStart(19, "a", 14);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r0.language.footerImpressum);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.footerPrivacyPolicy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.language.footerTerms);
  }
}
class FooterComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 1,
    vars: 1,
    consts: [["class", "footer-area-wrapper reveal-footer bg-gray", 4, "ngIf"], [1, "footer-area-wrapper", "reveal-footer", "bg-gray"], [1, "footer-copyright-area", "section-space--pb_30", "section-space--pt_30"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "copyright-text"], ["_ngcontent-lqt-c6", "", 1, "mb-lg-0", "mb-md-0", "white-color"], ["_ngcontent-lqt-c6", "", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "heart", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "width", "14", 1, "svg-inline--fa", "fa-heart", "fa-w-16"], ["_ngcontent-lqt-c6", "", "fill", "currentColor", "d", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"], [1, "col-md-6", "text-right"], [1, "mb-lg-0", "mb-md-0", "white-color"], ["routerLink", "../impressum"], ["routerLink", "../privacy-policy"], ["routerLink", "../terms"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, FooterComponent_div_0_Template, 21, 3, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf, i3.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.FooterComponent = FooterComponent;

/***/ }),

/***/ 37051:
/*!******************************************************!*\
  !*** ./src/app/parts/fun-fact/fun-fact.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FunFactComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function FunFactComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h6", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(13, "div", 9)(14, "div", 3)(15, "div", 10)(16, "div", 11)(17, "h2", 12)(18, "span", 13);
    i0.ɵɵtext(19, "8");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h6", 14);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 15)(24, "div", 16)(25, "div", 17);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutUsCardOneTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.aboutUsCardOneText, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsCardOneTextSecond, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.aboutUsCardOneTextThree, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.yearsExperience, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language.moreAboutSuccessStory);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.aboutOurCompanyText);
  }
}
class FunFactComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function FunFactComponent_Factory(t) {
    return new (t || FunFactComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: FunFactComponent,
    selectors: [["app-fun-fact"]],
    decls: 1,
    vars: 1,
    consts: [["class", "fun-fact-wrapper bg-gray section-space--ptb_120", 4, "ngIf"], [1, "fun-fact-wrapper", "bg-gray", "section-space--ptb_120"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_60"], [1, "section-sub-title", "mb-20"], [1, "heading"], [1, "text-color-primary"], [1, "cybersecurity-about-box", "section-space--pb_70"], [1, "col-lg-4", "offset-lg-1"], [1, "modern-number-01"], [1, "heading", "me-5"], [1, "mark-text"], [1, "heading", "mt-30"], [1, "col-lg-5", "offset-lg-1"], [1, "cybersecurity-about-text"], [1, "text"]],
    template: function FunFactComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, FunFactComponent_div_0_Template, 27, 7, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.FunFactComponent = FunFactComponent;

/***/ }),

/***/ 92231:
/*!******************************************************!*\
  !*** ./src/app/parts/language/language.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LanguageComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function LanguageComponent_div_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7)(1, "a", 8);
    i0.ɵɵlistener("click", function LanguageComponent_div_0_li_8_Template_a_click_1_listener() {
      const restoredCtx = i0.ɵɵrestoreView(_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r3.changeLanguage(item_r2.name));
    });
    i0.ɵɵelement(2, "img", 9);
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("src", "assets/images/flags/", item_r2.name, ".webp", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.language[item_r2.name]);
  }
}
function LanguageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "ul")(2, "li")(3, "a", 2);
    i0.ɵɵelement(4, "img", 3);
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "ul", 5);
    i0.ɵɵtemplate(8, LanguageComponent_div_0_li_8_Template, 5, 2, "li", 6);
    i0.ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r0.page ? "text-black" : "text-white");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("src", "assets/images/flags/", ctx_r0.selectionLanguage, ".webp", i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r0.selectionLanguage);
    i0.ɵɵpropertyInterpolate("title", ctx_r0.selectionLanguage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.language[ctx_r0.selectionLanguage]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.allLangs);
  }
}
class LanguageComponent {
  constructor(helps) {
    this.helps = helps;
  }
  ngOnInit() {
    this.selectionLanguage = this.helps.getSelectionLanguage();
    this.helps.getLanguage(this.helps.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
    this.helps.getAllLangs().subscribe(data => {
      this.allLangs = data;
    });
  }
  changeLanguage(name) {
    this.selectionLanguage = name;
    this.helps.setSelectionLanguage(name);
    location.reload();
  }
  static #_ = this.ɵfac = function LanguageComponent_Factory(t) {
    return new (t || LanguageComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: LanguageComponent,
    selectors: [["app-language"]],
    inputs: {
      page: "page"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "language-menu", 4, "ngIf"], [1, "language-menu"], ["href", "#"], [1, "ls-flag", "selected-flag", 3, "src", "alt", "title"], [1, "wpml-ls-native"], [1, "ls-sub-menu"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "text-black", 3, "click"], ["alt", "en", "title", "Fran\u00E7ais", 1, "ls-flag", 3, "src"]],
    template: function LanguageComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, LanguageComponent_div_0_Template, 9, 8, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgForOf, i2.NgIf],
    styles: [".selected-flag[_ngcontent-%COMP%] {\n  width: 28px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFydHMvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtZmxhZyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
exports.LanguageComponent = LanguageComponent;

/***/ }),

/***/ 78253:
/*!**********************************************************!*\
  !*** ./src/app/parts/navigation/navigation.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NavigationComponent = void 0;
const router_1 = __webpack_require__(/*! @angular/router */ 68804);
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! @angular/router */ 68804);
const i2 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i3 = __webpack_require__(/*! @angular/common */ 34228);
const i4 = __webpack_require__(/*! ../language/language.component */ 92231);
function NavigationComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "div", 29)(6, "div", 30)(7, "div", 31)(8, "div", 32)(9, "div", 33);
    i0.ɵɵelement(10, "app-language");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 34)(12, "ul", 35)(13, "li", 36)(14, "a", 37);
    i0.ɵɵelement(15, "i", 38);
    i0.ɵɵelementStart(16, "span", 39)(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "li", 40);
    i0.ɵɵelement(20, "i", 41);
    i0.ɵɵelementStart(21, "span", 39);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()()()()()()();
    i0.ɵɵelementStart(23, "div")(24, "div", 26)(25, "div", 27)(26, "div", 42)(27, "div", 43)(28, "div", 44)(29, "a", 45);
    i0.ɵɵelement(30, "img", 46)(31, "img", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 48)(33, "div", 49)(34, "nav", 50)(35, "ul")(36, "li")(37, "a", 10)(38, "span");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "li")(41, "a", 17)(42, "span");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "li")(45, "a", 18)(46, "span");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(48, "li")(49, "a", 19)(50, "span");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "li")(53, "a", 20)(54, "span");
    i0.ɵɵtext(55);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(56, "div", 51);
    i0.ɵɵlistener("click", function NavigationComponent_div_0_div_1_Template_div_click_56_listener() {
      i0.ɵɵrestoreView(_r4);
      const ctx_r3 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r3.showMobileMenu());
    });
    i0.ɵɵelement(57, "i");
    i0.ɵɵelementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(14);
    i0.ɵɵpropertyInterpolate1("href", "tel:", ctx_r1.language.contactTelephone, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.contactTelephone);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.contactEmail);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("header-bottom-wrap header-sticky ", ctx_r1.scroll, "");
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(ctx_r1.language.navigationMenuHome);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.navigationMenuAboutUs);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.navigationMenuServices);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.navigationMenuTypeOfWork);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.language.navigationMenuContact);
  }
}
function NavigationComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53);
    i0.ɵɵelement(2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "div", 6)(5, "div", 27)(6, "div", 42)(7, "div", 54)(8, "div", 44)(9, "a", 10);
    i0.ɵɵelement(10, "img", 46)(11, "img", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 55)(13, "div", 56)(14, "div", 57)(15, "div", 58)(16, "div", 59)(17, "nav", 60)(18, "ul")(19, "li")(20, "a", 10)(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "li")(24, "a", 17)(25, "span");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "li")(28, "a", 18)(29, "span");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "li")(32, "a", 19)(33, "span");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "li")(36, "a", 20)(37, "span");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()()()()()()()()();
    i0.ɵɵelementStart(39, "div", 61)(40, "div", 62);
    i0.ɵɵelement(41, "app-language");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 63);
    i0.ɵɵlistener("click", function NavigationComponent_div_0_div_2_Template_div_click_42_listener() {
      i0.ɵɵrestoreView(_r6);
      const ctx_r5 = i0.ɵɵnextContext(2);
      return i0.ɵɵresetView(ctx_r5.showMobileMenu());
    });
    i0.ɵɵelement(43, "i");
    i0.ɵɵelementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("header-bottom-wrap header-sticky  ", ctx_r2.scroll, "");
    i0.ɵɵadvance(19);
    i0.ɵɵtextInterpolate(ctx_r2.language.navigationMenuHome);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.language.navigationMenuAboutUs);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.language.navigationMenuServices);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.language.navigationMenuTypeOfWork);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.language.navigationMenuContact);
  }
}
function NavigationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NavigationComponent_div_0_div_1_Template, 58, 11, "div", 1);
    i0.ɵɵtemplate(2, NavigationComponent_div_0_div_2_Template, 44, 8, "div", 2);
    i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "a", 10);
    i0.ɵɵelement(11, "img", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 12)(13, "div", 13);
    i0.ɵɵlistener("click", function NavigationComponent_div_0_Template_div_click_13_listener() {
      i0.ɵɵrestoreView(_r8);
      const ctx_r7 = i0.ɵɵnextContext();
      return i0.ɵɵresetView(ctx_r7.showMobileMenu());
    });
    i0.ɵɵelement(14, "span", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(15, "div", 15)(16, "nav", 16)(17, "ul")(18, "li")(19, "a", 10)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "li")(23, "a", 17)(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "li")(27, "a", 18)(28, "span");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "li")(31, "a", 19)(32, "span");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "li")(35, "a", 20)(36, "span");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 21)(39, "div", 22);
    i0.ɵɵelement(40, "app-language", 23);
    i0.ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.page);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.page);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("mobile-menu-overlay ", ctx_r0.mobileMenu, "");
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r0.language.navigationMenuHome);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.navigationMenuAboutUs);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.navigationMenuServices);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.navigationMenuTypeOfWork);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.language.navigationMenuContact);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("page", ctx_r0.page);
  }
}
class NavigationComponent {
  constructor(router, route, help) {
    this.router = router;
    this.route = route;
    this.help = help;
    this.scroll = '';
    this.mobileMenu = '';
    route.events.subscribe(val => {
      if (val instanceof router_1.NavigationEnd) {
        if (window.location.hash !== '#/') {
          this.page = true;
        } else {
          this.page = false;
        }
      }
      this.mobileMenu = '';
    });
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 0) {
      this.scroll = 'is-sticky';
    } else {
      this.scroll = '';
    }
  }
  showMobileMenu() {
    if (this.mobileMenu !== '') {
      this.mobileMenu = '';
    } else {
      this.mobileMenu = 'active';
    }
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: NavigationComponent,
    selectors: [["app-navigation"]],
    hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵlistener("scroll", function NavigationComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, i0.ɵɵresolveWindow);
      }
    },
    inputs: {
      page: "page"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["class", "header-area header-area--absolute", 4, "ngIf"], ["class", "header-area header-area--default", 4, "ngIf"], ["id", "mobile-menu-overlay"], [1, "mobile-menu-overlay__inner"], [1, "mobile-menu-overlay__header"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-6", "col-8"], [1, "logo"], ["routerLink", "/"], ["src", "assets/images/logo-short.png", "alt", "", 1, "img-fluid", 2, "width", "55px"], [1, "col-md-6", "col-4"], [1, "mobile-menu-content", "text-end", 3, "click"], ["id", "mobile-menu-close-trigger", 1, "mobile-navigation-close-icon"], [1, "mobile-menu-overlay__body"], [1, "offcanvas-navigation"], ["routerLink", "about-us"], ["routerLink", "/our-service"], ["routerLink", "/type-of-work"], ["routerLink", "/contact-us"], [1, "text-center"], ["id", " hidden-icon-wrapper", 1, "text-center"], [3, "page"], [1, "header-area", "header-area--absolute"], [1, "header-top-bar-info", "border-bottom", "d-none", "d-lg-block"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "top-bar-wrap"], [1, "top-bar-left"], [1, "top-bar-text", "text-white"], [1, "header-left-box"], ["id", "hidden-icon-wrapper", 1, "header-left-inner"], [1, "top-bar-right"], [1, "top-bar-info"], [1, "info-item"], [1, "info-link", "text-white", 3, "href"], [1, "info-icon", "fa", "fa-phone"], [1, "info-text"], [1, "info-item", "text-white"], [1, "info-icon", "fa", "fa-map-marker-alt"], [1, "col-lg-12"], [1, "header", "position-relative"], [1, "header__logo"], ["href", "index.html"], ["src", "assets/images/logo-short.png", "width", "65", "height", "48", "alt", "", 1, "img-fluid", "light-logo"], ["src", "assets/images/logo-short.png", "width", "65", "height", "48", "alt", "", 1, "img-fluid", "dark-logo"], [1, "header-right"], [1, "header__navigation", "menu-style-four", "d-none", "d-xl-block"], [1, "navigation-menu"], ["id", "mobile-menu-trigger", 1, "mobile-navigation-icon", "white-md-icon", "d-block", "d-xl-none", 3, "click"], [1, "header-area", "header-area--default"], [1, "header-top-wrap", "border-bottom"], [1, "header", "default-menu-style", "position-relative"], [1, "header-midle-box"], [1, "header-bottom-wrap", "d-md-block", "d-none"], [1, "header-bottom-inner"], [1, "header-bottom-left-wrap"], [1, "header__navigation", "d-none", "d-xl-block"], [1, "navigation-menu", "primary--menu"], [1, "header-right-box"], ["id", "hidden-icon-wrapper", 1, "header-right-inner"], ["id", "mobile-menu-trigger", 1, "mobile-navigation-icon", "d-block", "d-xl-none", 3, "click"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, NavigationComponent_div_0_Template, 41, 11, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i3.NgIf, i1.RouterLink, i4.LanguageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.NavigationComponent = NavigationComponent;

/***/ }),

/***/ 89316:
/*!******************************************************!*\
  !*** ./src/app/parts/services/services.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ServicesComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! src/app/services/helps.service */ 15917);
const i2 = __webpack_require__(/*! @angular/common */ 34228);
function ServicesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h6", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(13, "div", 3)(14, "div", 9)(15, "div", 10)(16, "div", 3)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
    i0.ɵɵelement(21, "img", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 16)(23, "h5", 7);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 17);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14);
    i0.ɵɵelement(31, "img", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 16)(33, "h5", 7);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 17);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(37, "div", 11)(38, "div", 12)(39, "div", 13)(40, "div", 14);
    i0.ɵɵelement(41, "img", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 16)(43, "h5", 7);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 17);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(47, "div", 11)(48, "div", 12)(49, "div", 13)(50, "div", 14);
    i0.ɵɵelement(51, "img", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 16)(53, "h5", 7);
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 17);
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "div", 14);
    i0.ɵɵelement(61, "img", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 16)(63, "h5", 7);
    i0.ɵɵtext(64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "div", 17);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(67, "div", 11)(68, "div", 12)(69, "div", 13)(70, "div", 14);
    i0.ɵɵelement(71, "img", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "div", 16)(73, "h5", 7);
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "div", 17);
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(77, "div", 11)(78, "div", 12)(79, "div", 13)(80, "div", 14);
    i0.ɵɵelement(81, "img", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "div", 16)(83, "h5", 7);
    i0.ɵɵtext(84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "div", 17);
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(87, "div", 11)(88, "div", 12)(89, "div", 13)(90, "div", 14);
    i0.ɵɵelement(91, "img", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "div", 16)(93, "h5", 7);
    i0.ɵɵtext(94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "div", 17);
    i0.ɵɵtext(96);
    i0.ɵɵelementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesSubtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesTitleOne, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.servicesTitleSecond, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.language.servicesTitleThree, "");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardOneTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardOneText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardTwoTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardTwoText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardThreeTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardThreeText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardFourTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardFourText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardFiveTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardFiveText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardSixTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardSixText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardSevenTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardSevenText, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.language.servicesCardEightTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.language.servicesCardEightText, " ");
  }
}
class ServicesComponent {
  constructor(help) {
    this.help = help;
  }
  ngOnInit() {
    this.help.getLanguage(this.help.getSelectionLanguage()).subscribe(data => {
      this.language = data;
    });
  }
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)(i0.ɵɵdirectiveInject(i1.HelpsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: ServicesComponent,
    selectors: [["app-services"]],
    decls: 1,
    vars: 1,
    consts: [["class", "feature-icon-wrapper section-space--ptb_100", 4, "ngIf"], [1, "feature-icon-wrapper", "section-space--ptb_100"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_40"], [1, "section-sub-title", "mb-20"], [1, "heading"], [1, "text-color-primary"], [1, "col-12"], [1, "feature-list__one"], [1, "col-lg-3", "col-md-6", "wow", "move-up"], [1, "ht-box-icon", "style-01", "single-svg-icon-box"], [1, "icon-box-wrap"], [1, "icon"], ["id", "svg-icon-1", "src", "assets/images/svg/linea-basic-heart.svg", 1, "svg-icon"], [1, "content"], [1, "text"], ["id", "svg-icon-2", "src", "assets/images/svg/linea-basic-case.svg", 1, "svg-icon"], ["id", "svg-icon-3", "src", "assets/images/svg/linea-basic-alarm.svg", 1, "svg-icon"], ["id", "svg-icon-4", "src", "assets/images/svg/linea-basic-geolocalize-05.svg", 1, "svg-icon"], ["id", "svg-icon-5", "src", "assets/images/svg/linea-ecommerce-money.svg", 1, "svg-icon"], ["id", "svg-icon-6", "src", "assets/images/svg/linea-basic-spread-text-bookmark.svg", 1, "svg-icon"], ["id", "svg-icon-7", "src", "assets/images/svg/linea-music-headphones.svg", 1, "svg-icon"], ["id", "svg-icon-8", "src", "assets/images/svg/linea-basic-gear.svg", 1, "svg-icon"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵtemplate(0, ServicesComponent_div_0_Template, 97, 20, "div", 0);
      }
      if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
      }
    },
    dependencies: [i2.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.ServicesComponent = ServicesComponent;

/***/ }),

/***/ 406:
/*!************************************************************!*\
  !*** ./src/app/parts/testimonial/testimonial.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TestimonialComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
class TestimonialComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TestimonialComponent_Factory(t) {
    return new (t || TestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: TestimonialComponent,
    selectors: [["app-testimonial"]],
    decls: 91,
    vars: 0,
    consts: [[1, "testimonial-slider-area", "bg-gray", "section-space--ptb_100"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title-wrap", "text-center", "section-space--mb_40"], [1, "section-sub-title", "mb-20"], [1, "heading"], [1, "text-color-primary"], [1, "testimonial-slider"], [1, "swiper-container", "testimonial-slider__container"], [1, "swiper-wrapper", "testimonial-slider__wrapper"], [1, "swiper-slide"], [1, "testimonial-slider__one", "wow", "move-up"], [1, "testimonial-slider--info"], [1, "testimonial-slider__media"], ["src", "assets/images/testimonial/mitech-testimonial-avata-02-90x90.webp", "alt", "", 1, "img-fluid"], [1, "testimonial-slider__author"], [1, "testimonial-rating"], [1, "fa", "fa-star"], [1, "author-info"], [1, "name"], [1, "designation"], [1, "testimonial-slider__text"], ["src", "assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp", "alt", "", 1, "img-fluid"], ["src", "assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp", "alt", "", 1, "img-fluid"], ["src", "assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp", "alt", "", 1, "img-fluid"], [1, "swiper-pagination", "swiper-pagination-t01", "section-space--mt_30"]],
    template: function TestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
        i0.ɵɵtext(6, "Testimonials");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h3", 6);
        i0.ɵɵtext(8, "What do people praise about ");
        i0.ɵɵelementStart(9, "span", 7);
        i0.ɵɵtext(10, " Mitech?");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
        i0.ɵɵelement(18, "img", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 16)(20, "div", 17);
        i0.ɵɵelement(21, "span", 18)(22, "span", 18)(23, "span", 18)(24, "span", 18)(25, "span", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 19)(27, "h6", 20);
        i0.ɵɵtext(28, "Abbie Ferguson");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "span", 21);
        i0.ɵɵtext(30, "Marketing");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(31, "div", 22);
        i0.ɵɵtext(32, "I\u2019ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(33, "div", 11)(34, "div", 12)(35, "div", 13)(36, "div", 14);
        i0.ɵɵelement(37, "img", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 16)(39, "div", 17);
        i0.ɵɵelement(40, "span", 18)(41, "span", 18)(42, "span", 18)(43, "span", 18)(44, "span", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "div", 19)(46, "h6", 20);
        i0.ɵɵtext(47, "Monica Blews");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "span", 21);
        i0.ɵɵtext(49, "Web designer");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(50, "div", 22);
        i0.ɵɵtext(51, "I\u2019ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(52, "div", 11)(53, "div", 12)(54, "div", 13)(55, "div", 14);
        i0.ɵɵelement(56, "img", 24);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 16)(58, "div", 17);
        i0.ɵɵelement(59, "span", 18)(60, "span", 18)(61, "span", 18)(62, "span", 18)(63, "span", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "div", 19)(65, "h6", 20);
        i0.ɵɵtext(66, "Abbie Ferguson");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(67, "span", 21);
        i0.ɵɵtext(68, "WEB DESIGNER");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(69, "div", 22);
        i0.ɵɵtext(70, "I\u2019ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(71, "div", 11)(72, "div", 12)(73, "div", 13)(74, "div", 14);
        i0.ɵɵelement(75, "img", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "div", 16)(77, "div", 17);
        i0.ɵɵelement(78, "span", 18)(79, "span", 18)(80, "span", 18)(81, "span", 18)(82, "span", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(83, "div", 19)(84, "h6", 20);
        i0.ɵɵtext(85, "Abbie Ferguson");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "span", 21);
        i0.ɵɵtext(87, "WEB DESIGNER");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(88, "div", 22);
        i0.ɵɵtext(89, "I\u2019ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(90, "div", 26);
        i0.ɵɵelementEnd()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.TestimonialComponent = TestimonialComponent;

/***/ }),

/***/ 15917:
/*!*******************************************!*\
  !*** ./src/app/services/helps.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HelpsService = void 0;
const i0 = __webpack_require__(/*! @angular/core */ 59936);
const i1 = __webpack_require__(/*! @angular/common/http */ 56448);
class HelpsService {
  constructor(http) {
    this.http = http;
  }
  getLanguage(language) {
    return this.http.get(window.location.origin + '/assets/languages/home/' + language + '.json');
  }
  getAllLangs() {
    return this.http.get(window.location.origin + '/assets/languages/choose-lang.json');
  }
  setSelectionLanguage(language) {
    localStorage.setItem('language', language);
  }
  getSelectionLanguage() {
    return localStorage.getItem('language');
  }
  getLanguageFromFolder(folder, language) {
    return this.http.get(window.location.origin + '/assets/languages/pages/' + folder + '/' + language + '.json');
  }
  getCookieRead() {
    return localStorage.getItem('cookieRead');
  }
  setCookieRead() {
    localStorage.setItem('cookieRead', '0');
  }
  static #_ = this.ɵfac = function HelpsService_Factory(t) {
    return new (t || HelpsService)(i0.ɵɵinject(i1.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
    token: HelpsService,
    factory: HelpsService.ɵfac,
    providedIn: 'root'
  });
}
exports.HelpsService = HelpsService;

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppServerModule = void 0;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ 21463);
Object.defineProperty(exports, "AppServerModule", ({
  enumerable: true,
  get: function () {
    return app_server_module_1.AppServerModule;
  }
}));

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 84911:
/*!**********************************************************************!*\
  !*** ./node_modules/mock-browser/node_modules/jsdom/lib/jsdom/ sync ***!
  \**********************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 84911;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 39491:
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 32081:
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 26144:
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("vm");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map