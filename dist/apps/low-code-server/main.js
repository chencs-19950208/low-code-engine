/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/low-code-server/src/app.controller.ts":
/*!****************************************************!*\
  !*** ./apps/low-code-server/src/app.controller.ts ***!
  \****************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/low-code-server/src/app.service.ts");
const business_exception_filter_1 = __webpack_require__(/*! ./common/exceptions/business.exception.filter */ "./apps/low-code-server/src/common/exceptions/business.exception.filter.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
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
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/low-code-server/src/app.module.ts":
/*!************************************************!*\
  !*** ./apps/low-code-server/src/app.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/low-code-server/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/low-code-server/src/app.service.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./apps/low-code-server/src/app.service.ts":
/*!*************************************************!*\
  !*** ./apps/low-code-server/src/app.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    ;
    findAll() {
        return 'findAll - v1';
    }
    ;
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./apps/low-code-server/src/common/exceptions/base.exception.filter.ts":
/*!*****************************************************************************!*\
  !*** ./apps/low-code-server/src/common/exceptions/base.exception.filter.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).json({
            statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: new common_1.ServiceUnavailableException().getResponse()
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);


/***/ }),

/***/ "./apps/low-code-server/src/common/exceptions/business.error.codes.ts":
/*!****************************************************************************!*\
  !*** ./apps/low-code-server/src/common/exceptions/business.error.codes.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BUSINESS_ERROR_CODE = void 0;
exports.BUSINESS_ERROR_CODE = {
    COMMON: 10001,
    TOKEN_INVALID: 10002,
    ACCESS_FORBIDDEN: 10003,
    PERMISSION_DISABLED: 10003,
    USER_DISABLED: 10004
};


/***/ }),

/***/ "./apps/low-code-server/src/common/exceptions/business.exception.filter.ts":
/*!*********************************************************************************!*\
  !*** ./apps/low-code-server/src/common/exceptions/business.exception.filter.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BusinessException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const business_error_codes_1 = __webpack_require__(/*! ./business.error.codes */ "./apps/low-code-server/src/common/exceptions/business.error.codes.ts");
class BusinessException extends common_1.HttpException {
    constructor(err) {
        if (typeof err === 'string') {
            err = {
                code: business_error_codes_1.BUSINESS_ERROR_CODE.COMMON,
                message: err,
            };
        }
        super(err, common_1.HttpStatus.OK);
    }
    ;
    static throwForbidden() {
        throw new BusinessException({
            code: business_error_codes_1.BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
            message: 'sorry, 您暂无权限'
        });
    }
    ;
}
exports.BusinessException = BusinessException;


/***/ }),

/***/ "./apps/low-code-server/src/common/exceptions/http.exception.filter.ts":
/*!*****************************************************************************!*\
  !*** ./apps/low-code-server/src/common/exceptions/http.exception.filter.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const business_exception_filter_1 = __webpack_require__(/*! ./business.exception.filter */ "./apps/low-code-server/src/common/exceptions/business.exception.filter.ts");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        if (exception instanceof business_exception_filter_1.BusinessException) {
            const error = exception.getResponse();
            response.status(common_1.HttpStatus.OK).json({
                data: null,
                status: error['code'],
                extra: {},
                message: error['message'],
                success: false,
            });
            return;
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.getResponse(),
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);


/***/ }),

/***/ "./apps/low-code-server/src/common/interceptors/transform.interceptor.ts":
/*!*******************************************************************************!*\
  !*** ./apps/low-code-server/src/common/interceptors/transform.interceptor.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
;
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => ({
            data,
            status: 0,
            extra: {},
            message: 'success',
            success: true
        })));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./apps/low-code-server/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const transform_interceptor_1 = __webpack_require__(/*! ./common/interceptors/transform.interceptor */ "./apps/low-code-server/src/common/interceptors/transform.interceptor.ts");
const base_exception_filter_1 = __webpack_require__(/*! ./common/exceptions/base.exception.filter */ "./apps/low-code-server/src/common/exceptions/base.exception.filter.ts");
const http_exception_filter_1 = __webpack_require__(/*! ./common/exceptions/http.exception.filter */ "./apps/low-code-server/src/common/exceptions/http.exception.filter.ts");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/low-code-server/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableVersioning({
        defaultVersion: [common_1.VERSION_NEUTRAL, '1', '2'],
        type: common_1.VersioningType.URI,
    });
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new base_exception_filter_1.AllExceptionsFilter(), new http_exception_filter_1.HttpExceptionFilter());
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;