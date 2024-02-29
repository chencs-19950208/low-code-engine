"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(16);
const app_service_1 = __webpack_require__(18);
const business_exception_filter_1 = __webpack_require__(10);
let AppController = class AppController {
    constructor(appService, configServeice) {
        this.appService = appService;
        this.configServeice = configServeice;
    }
    getHello() {
        return this.appService.getHello();
    }
    findAll() {
        return this.appService.findAll();
    }
    ;
    findAll2() {
        return 'chencs';
    }
    ;
    findError() {
        const a = {};
        console.log(a.b.c);
        return this.appService.getHello();
    }
    ;
    findBusinessError() {
        const a = {};
        try {
            console.log(a.b.c);
        }
        catch (e) {
            throw new business_exception_filter_1.BusinessException('sorry, 您的参数貌似出现了问题');
        }
        ;
        return this.appService.findAll();
    }
    ;
    getTestName() {
        console.log(this.configServeice.get('TEST_VALUE').name);
        return this.configServeice.get('TEST_VALUE').name;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)([common_1.VERSION_NEUTRAL, '1']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "findAll2", null);
__decorate([
    (0, common_1.Get)('findError'),
    (0, common_1.Version)([common_1.VERSION_NEUTRAL, '1']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findError", null);
__decorate([
    (0, common_1.Get)('findBusinessError'),
    (0, common_1.Version)([common_1.VERSION_NEUTRAL, '1']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findBusinessError", null);
__decorate([
    (0, common_1.Get)('getTestName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTestName", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AppController);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d360852b99977de542e2")
/******/ })();
/******/ 
/******/ }
;