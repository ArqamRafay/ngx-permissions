import { Injectable, InjectionToken, Inject, Directive, ViewContainerRef, ChangeDetectorRef, TemplateRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { BehaviorSubject, of, from, merge, forkJoin } from 'rxjs';
import { map, switchMap, catchError, mergeAll, first, mergeMap, every, skip, take, tap } from 'rxjs/operators';
import { __assign, __read } from 'tslib';
import { isArray } from 'util';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
var NgxPermissionsPredefinedStrategies = {
    REMOVE: 'remove',
    SHOW: 'show'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsConfigurationStore = /** @class */ (function () {
    function NgxPermissionsConfigurationStore() {
        this.strategiesSource = new BehaviorSubject({});
        this.strategies$ = this.strategiesSource.asObservable();
    }
    /** @nocollapse */
    NgxPermissionsConfigurationStore.ctorParameters = function () { return []; };
NgxPermissionsConfigurationStore.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxPermissionsConfigurationStore, factory: function NgxPermissionsConfigurationStore_Factory(t) { return new (t || NgxPermissionsConfigurationStore)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsConfigurationStore, [{
        type: Injectable
    }], function () { return []; }, { strategiesSource: [], strategies$: [] });
    return NgxPermissionsConfigurationStore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_CONFIGURATION_STORE = new InjectionToken('USE_CONFIGURATION_STORE');
var NgxPermissionsConfigurationService = /** @class */ (function () {
    function NgxPermissionsConfigurationService(isolate, configurationStore) {
        if (isolate === void 0) { isolate = false; }
        this.isolate = isolate;
        this.configurationStore = configurationStore;
        this.strategiesSource = this.isolate ? new BehaviorSubject({}) : this.configurationStore.strategiesSource;
        this.strategies$ = this.strategiesSource.asObservable();
        this.onAuthorisedDefaultStrategy = this.isolate ? undefined : this.configurationStore.onAuthorisedDefaultStrategy;
        this.onUnAuthorisedDefaultStrategy = this.isolate ? undefined : this.configurationStore.onUnAuthorisedDefaultStrategy;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.setDefaultOnAuthorizedStrategy = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.isolate) {
            this.onAuthorisedDefaultStrategy = this.getDefinedStrategy(name);
        }
        else {
            this.configurationStore.onAuthorisedDefaultStrategy = this.getDefinedStrategy(name);
            this.onAuthorisedDefaultStrategy = this.configurationStore.onAuthorisedDefaultStrategy;
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.setDefaultOnUnauthorizedStrategy = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.isolate) {
            this.onUnAuthorisedDefaultStrategy = this.getDefinedStrategy(name);
        }
        else {
            this.configurationStore.onUnAuthorisedDefaultStrategy = this.getDefinedStrategy(name);
            this.onUnAuthorisedDefaultStrategy = this.configurationStore.onUnAuthorisedDefaultStrategy;
        }
    };
    /**
     * @param {?} key
     * @param {?} func
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.addPermissionStrategy = /**
     * @param {?} key
     * @param {?} func
     * @return {?}
     */
    function (key, func) {
        this.strategiesSource.value[key] = func;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.getStrategy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.strategiesSource.value[key];
    };
    /**
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.getAllStrategies = /**
     * @return {?}
     */
    function () {
        return this.strategiesSource.value;
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.getDefinedStrategy = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.strategiesSource.value[name] || this.isPredefinedStrategy(name)) {
            return name;
        }
        else {
            throw new Error("No ' " + name + " ' strategy is found please define one");
        }
    };
    /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    NgxPermissionsConfigurationService.prototype.isPredefinedStrategy = /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        return strategy === NgxPermissionsPredefinedStrategies.SHOW || strategy === NgxPermissionsPredefinedStrategies.REMOVE;
    };
    /** @nocollapse */
    NgxPermissionsConfigurationService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [USE_CONFIGURATION_STORE,] }] },
        { type: NgxPermissionsConfigurationStore }
    ]; };
NgxPermissionsConfigurationService.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxPermissionsConfigurationService, factory: function NgxPermissionsConfigurationService_Factory(t) { return new (t || NgxPermissionsConfigurationService)(ɵngcc0.ɵɵinject(USE_CONFIGURATION_STORE), ɵngcc0.ɵɵinject(NgxPermissionsConfigurationStore)); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsConfigurationService, [{
        type: Injectable
    }], function () { return [{ type: Boolean, decorators: [{
                type: Inject,
                args: [USE_CONFIGURATION_STORE]
            }] }, { type: NgxPermissionsConfigurationStore }]; }, { isolate: [], configurationStore: [], strategiesSource: [], strategies$: [], onAuthorisedDefaultStrategy: [], onUnAuthorisedDefaultStrategy: [], setDefaultOnAuthorizedStrategy: [], setDefaultOnUnauthorizedStrategy: [], addPermissionStrategy: [], getStrategy: [], getAllStrategies: [], getDefinedStrategy: [], isPredefinedStrategy: [] });
    return NgxPermissionsConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsStore = /** @class */ (function () {
    function NgxPermissionsStore() {
        this.permissionsSource = new BehaviorSubject({});
        this.permissions$ = this.permissionsSource.asObservable();
    }
    /** @nocollapse */
    NgxPermissionsStore.ctorParameters = function () { return []; };
NgxPermissionsStore.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxPermissionsStore, factory: function NgxPermissionsStore_Factory(t) { return new (t || NgxPermissionsStore)(); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsStore, [{
        type: Injectable
    }], function () { return []; }, { permissionsSource: [], permissions$: [] });
    return NgxPermissionsStore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} functionToCheck
 * @return {?}
 */
function isFunction(functionToCheck) {
    /** @type {?} */
    var getType = {};
    return !!functionToCheck && functionToCheck instanceof Function && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * @param {?} value
 * @return {?}
 */
function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }
    else {
        /** @type {?} */
        var prototype = Object.getPrototypeOf(value);
        return prototype === null || prototype === Object.prototype;
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return !!value && typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}
/**
 * @param {?} promise
 * @return {?}
 */
function isPromise(promise) {
    return Object.prototype.toString.call(promise) === '[object Promise]';
}
/**
 * @param {?} value
 * @return {?}
 */
function notEmptyValue(value) {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
}
/**
 * @param {?} value
 * @return {?}
 */
function transformStringToArray(value) {
    if (isString(value)) {
        return [value];
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_PERMISSIONS_STORE = new InjectionToken('USE_PERMISSIONS_STORE');
var NgxPermissionsService = /** @class */ (function () {
    function NgxPermissionsService(isolate, permissionsStore) {
        if (isolate === void 0) { isolate = false; }
        this.isolate = isolate;
        this.permissionsStore = permissionsStore;
        this.permissionsSource = isolate ? new BehaviorSubject({}) : permissionsStore.permissionsSource;
        this.permissions$ = this.permissionsSource.asObservable();
    }
    /**
     * Remove all permissions from permissions source
     */
    /**
     * Remove all permissions from permissions source
     * @return {?}
     */
    NgxPermissionsService.prototype.flushPermissions = /**
     * Remove all permissions from permissions source
     * @return {?}
     */
    function () {
        this.permissionsSource.next({});
    };
    /**
     * @param {?} permission
     * @return {?}
     */
    NgxPermissionsService.prototype.hasPermission = /**
     * @param {?} permission
     * @return {?}
     */
    function (permission) {
        if (!permission || (Array.isArray(permission) && permission.length === 0)) {
            return Promise.resolve(true);
        }
        permission = transformStringToArray(permission);
        return this.hasArrayPermission(permission);
    };
    /**
     * @param {?} permissions
     * @param {?=} validationFunction
     * @return {?}
     */
    NgxPermissionsService.prototype.loadPermissions = /**
     * @param {?} permissions
     * @param {?=} validationFunction
     * @return {?}
     */
    function (permissions, validationFunction) {
        var _this = this;
        /** @type {?} */
        var newPermissions = permissions.reduce((/**
         * @param {?} source
         * @param {?} p
         * @return {?}
         */
        function (source, p) {
            return _this.reducePermission(source, p, validationFunction);
        }), {});
        this.permissionsSource.next(newPermissions);
    };
    /**
     * @param {?} permission
     * @param {?=} validationFunction
     * @return {?}
     */
    NgxPermissionsService.prototype.addPermission = /**
     * @param {?} permission
     * @param {?=} validationFunction
     * @return {?}
     */
    function (permission, validationFunction) {
        var _this = this;
        if (Array.isArray(permission)) {
            /** @type {?} */
            var permissions = permission.reduce((/**
             * @param {?} source
             * @param {?} p
             * @return {?}
             */
            function (source, p) {
                return _this.reducePermission(source, p, validationFunction);
            }), this.permissionsSource.value);
            this.permissionsSource.next(permissions);
        }
        else {
            /** @type {?} */
            var permissions = this.reducePermission(this.permissionsSource.value, permission, validationFunction);
            this.permissionsSource.next(permissions);
        }
    };
    /**
     * @param {?} permissionName
     * @return {?}
     */
    NgxPermissionsService.prototype.removePermission = /**
     * @param {?} permissionName
     * @return {?}
     */
    function (permissionName) {
        /** @type {?} */
        var permissions = __assign({}, this.permissionsSource.value);
        delete permissions[permissionName];
        this.permissionsSource.next(permissions);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxPermissionsService.prototype.getPermission = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.permissionsSource.value[name];
    };
    /**
     * @return {?}
     */
    NgxPermissionsService.prototype.getPermissions = /**
     * @return {?}
     */
    function () {
        return this.permissionsSource.value;
    };
    /**
     * @private
     * @param {?} source
     * @param {?} name
     * @param {?=} validationFunction
     * @return {?}
     */
    NgxPermissionsService.prototype.reducePermission = /**
     * @private
     * @param {?} source
     * @param {?} name
     * @param {?=} validationFunction
     * @return {?}
     */
    function (source, name, validationFunction) {
        var _a, _b;
        if (!!validationFunction && isFunction(validationFunction)) {
            return __assign({}, source, (_a = {}, _a[name] = { name: name, validationFunction: validationFunction }, _a));
        }
        else {
            return __assign({}, source, (_b = {}, _b[name] = { name: name }, _b));
        }
    };
    /**
     * @private
     * @param {?} permissions
     * @return {?}
     */
    NgxPermissionsService.prototype.hasArrayPermission = /**
     * @private
     * @param {?} permissions
     * @return {?}
     */
    function (permissions) {
        var _this = this;
        /** @type {?} */
        var promises = permissions.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (_this.hasPermissionValidationFunction(key)) {
                /** @type {?} */
                var immutableValue_1 = __assign({}, _this.permissionsSource.value);
                /** @type {?} */
                var validationFunction_1 = (/** @type {?} */ (_this.permissionsSource.value[key].validationFunction));
                return of(null).pipe(map((/**
                 * @return {?}
                 */
                function () {
                    return validationFunction_1(key, immutableValue_1);
                })), switchMap((/**
                 * @param {?} promise
                 * @return {?}
                 */
                function (promise) {
                    /** @type {?} */
                    var b = isBoolean(promise);
                    if (b) {
                        return of((/** @type {?} */ (promise)));
                    }
                    else {
                        return (/** @type {?} */ (promise));
                    }
                })), catchError((/**
                 * @return {?}
                 */
                function () { return of(false); })));
            }
            // check for name of the permission if there is no validation function
            return of(!!_this.permissionsSource.value[key]);
        }));
        return from(promises).pipe(mergeAll(), first((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var r = data !== false;
            return r;
        }), false), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var r = data === false ? false : true;
            return r;
        }))).toPromise().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return data;
        }));
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    NgxPermissionsService.prototype.hasPermissionValidationFunction = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return !!this.permissionsSource.value[key] &&
            !!this.permissionsSource.value[key].validationFunction &&
            isFunction(this.permissionsSource.value[key].validationFunction);
    };
    /** @nocollapse */
    NgxPermissionsService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [USE_PERMISSIONS_STORE,] }] },
        { type: NgxPermissionsStore }
    ]; };
NgxPermissionsService.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxPermissionsService, factory: function NgxPermissionsService_Factory(t) { return new (t || NgxPermissionsService)(ɵngcc0.ɵɵinject(USE_PERMISSIONS_STORE), ɵngcc0.ɵɵinject(NgxPermissionsStore)); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsService, [{
        type: Injectable
    }], function () { return [{ type: Boolean, decorators: [{
                type: Inject,
                args: [USE_PERMISSIONS_STORE]
            }] }, { type: NgxPermissionsStore }]; }, { isolate: [], permissionsStore: [], permissionsSource: [], permissions$: [], flushPermissions: [], hasPermission: [], loadPermissions: [], addPermission: [], removePermission: [], getPermission: [], getPermissions: [], reducePermission: [], hasArrayPermission: [], hasPermissionValidationFunction: [] });
    return NgxPermissionsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRolesStore = /** @class */ (function () {
    function NgxRolesStore() {
        this.rolesSource = new BehaviorSubject({});
        this.roles$ = this.rolesSource.asObservable();
    }
    return NgxRolesStore;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_ROLES_STORE = new InjectionToken('USE_ROLES_STORE');
var NgxRolesService = /** @class */ (function () {
    function NgxRolesService(isolate, rolesStore, permissionsService) {
        if (isolate === void 0) { isolate = false; }
        this.isolate = isolate;
        this.rolesStore = rolesStore;
        this.permissionsService = permissionsService;
        this.rolesSource = this.isolate ? new BehaviorSubject({}) : this.rolesStore.rolesSource;
        this.roles$ = this.rolesSource.asObservable();
    }
    /**
     * @param {?} name
     * @param {?} validationFunction
     * @return {?}
     */
    NgxRolesService.prototype.addRole = /**
     * @param {?} name
     * @param {?} validationFunction
     * @return {?}
     */
    function (name, validationFunction) {
        var _a;
        /** @type {?} */
        var roles = __assign({}, this.rolesSource.value, (_a = {}, _a[name] = { name: name, validationFunction: validationFunction }, _a));
        this.rolesSource.next(roles);
    };
    /**
     * @param {?} rolesObj
     * @return {?}
     */
    NgxRolesService.prototype.addRoles = /**
     * @param {?} rolesObj
     * @return {?}
     */
    function (rolesObj) {
        var _this = this;
        Object.keys(rolesObj).forEach((/**
         * @param {?} key
         * @param {?} index
         * @return {?}
         */
        function (key, index) {
            _this.addRole(key, rolesObj[key]);
        }));
    };
    /**
     * @return {?}
     */
    NgxRolesService.prototype.flushRoles = /**
     * @return {?}
     */
    function () {
        this.rolesSource.next({});
    };
    /**
     * @param {?} roleName
     * @return {?}
     */
    NgxRolesService.prototype.removeRole = /**
     * @param {?} roleName
     * @return {?}
     */
    function (roleName) {
        /** @type {?} */
        var roles = __assign({}, this.rolesSource.value);
        delete roles[roleName];
        this.rolesSource.next(roles);
    };
    /**
     * @return {?}
     */
    NgxRolesService.prototype.getRoles = /**
     * @return {?}
     */
    function () {
        return this.rolesSource.value;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxRolesService.prototype.getRole = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.rolesSource.value[name];
    };
    /**
     * @param {?} names
     * @return {?}
     */
    NgxRolesService.prototype.hasOnlyRoles = /**
     * @param {?} names
     * @return {?}
     */
    function (names) {
        /** @type {?} */
        var isNamesEmpty = !names || (Array.isArray(names) && names.length === 0);
        if (isNamesEmpty)
            return Promise.resolve(true);
        names = transformStringToArray(names);
        return Promise.all([this.hasRoleKey(names), this.hasRolePermission(this.rolesSource.value, names)])
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), hasRoles = _b[0], hasPermissions = _b[1];
            return hasRoles || hasPermissions;
        }));
    };
    /**
     * @private
     * @param {?} roleName
     * @return {?}
     */
    NgxRolesService.prototype.hasRoleKey = /**
     * @private
     * @param {?} roleName
     * @return {?}
     */
    function (roleName) {
        var _this = this;
        /** @type {?} */
        var promises = roleName.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var hasValidationFunction = !!_this.rolesSource.value[key] &&
                !!_this.rolesSource.value[key].validationFunction &&
                isFunction(_this.rolesSource.value[key].validationFunction);
            if (hasValidationFunction && !isPromise(_this.rolesSource.value[key].validationFunction)) {
                /** @type {?} */
                var validationFunction_1 = (/** @type {?} */ (_this.rolesSource.value[key].validationFunction));
                return of(null).pipe(map((/**
                 * @return {?}
                 */
                function () { return validationFunction_1(); })), switchMap((/**
                 * @param {?} promise
                 * @return {?}
                 */
                function (promise) { return isBoolean(promise) ?
                    of((/** @type {?} */ (promise))) : (/** @type {?} */ (promise)); })), catchError((/**
                 * @return {?}
                 */
                function () { return of(false); })));
            }
            return of(false);
        }));
        return from(promises).pipe(mergeAll(), first((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data !== false; }), false), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data !== false; }))).toPromise().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data; }));
    };
    /**
     * @private
     * @param {?} roles
     * @param {?} roleNames
     * @return {?}
     */
    NgxRolesService.prototype.hasRolePermission = /**
     * @private
     * @param {?} roles
     * @param {?} roleNames
     * @return {?}
     */
    function (roles, roleNames) {
        var _this = this;
        return from(roleNames).pipe(mergeMap((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (roles[key] && Array.isArray(roles[key].validationFunction)) {
                return from((/** @type {?} */ (roles[key].validationFunction))).pipe(mergeMap((/**
                 * @param {?} permission
                 * @return {?}
                 */
                function (permission) { return _this.permissionsService.hasPermission(permission); })), every((/**
                 * @param {?} hasPermissions
                 * @return {?}
                 */
                function (hasPermissions) { return hasPermissions === true; })));
            }
            return of(false);
        })), first((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) { return hasPermission === true; }), false)).toPromise();
    };
    /** @nocollapse */
    NgxRolesService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [USE_ROLES_STORE,] }] },
        { type: NgxRolesStore },
        { type: NgxPermissionsService }
    ]; };
NgxRolesService.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxRolesService, factory: function NgxRolesService_Factory(t) { return new (t || NgxRolesService)(ɵngcc0.ɵɵinject(USE_ROLES_STORE), ɵngcc0.ɵɵinject(NgxRolesStore), ɵngcc0.ɵɵinject(NgxPermissionsService)); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxRolesService, [{
        type: Injectable
    }], function () { return [{ type: Boolean, decorators: [{
                type: Inject,
                args: [USE_ROLES_STORE]
            }] }, { type: NgxRolesStore }, { type: NgxPermissionsService }]; }, { isolate: [], rolesStore: [], permissionsService: [], rolesSource: [], roles$: [], addRole: [], addRoles: [], flushRoles: [], removeRole: [], getRoles: [], getRole: [], hasOnlyRoles: [], hasRoleKey: [], hasRolePermission: [] });
    return NgxRolesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsDirective = /** @class */ (function () {
    function NgxPermissionsDirective(permissionsService, configurationService, rolesService, viewContainer, changeDetector, templateRef) {
        this.permissionsService = permissionsService;
        this.configurationService = configurationService;
        this.rolesService = rolesService;
        this.viewContainer = viewContainer;
        this.changeDetector = changeDetector;
        this.templateRef = templateRef;
        this.permissionsAuthorized = new EventEmitter();
        this.permissionsUnauthorized = new EventEmitter();
        // skip first run cause merge will fire twice
        this.firstMergeUnusedRun = 1;
        this.permissionsState = {};
    }
    /**
     * @return {?}
     */
    NgxPermissionsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        this.initPermissionSubscription = this.validateExceptOnlyPermissions();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxPermissionsDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var onlyChanges = changes['ngxPermissionsOnly'];
        /** @type {?} */
        var exceptChanges = changes['ngxPermissionsExcept'];
        if (onlyChanges || exceptChanges) {
            // Due to bug when you pass empty array
            if (onlyChanges && onlyChanges.firstChange)
                return;
            if (exceptChanges && exceptChanges.firstChange)
                return;
            merge(this.permissionsService.permissions$, this.rolesService.roles$)
                .pipe(skip(this.firstMergeUnusedRun), take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (notEmptyValue(_this.ngxPermissionsExcept)) {
                    _this.validateExceptAndOnlyPermissions();
                    return;
                }
                if (notEmptyValue(_this.ngxPermissionsOnly)) {
                    _this.validateOnlyPermissions();
                    return;
                }
                _this.handleAuthorisedPermission(_this.getAuthorisedTemplates());
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxPermissionsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.initPermissionSubscription) {
            this.initPermissionSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.validateExceptOnlyPermissions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.permissionsService.permissions$, this.rolesService.roles$)
            .pipe(skip(this.firstMergeUnusedRun))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (notEmptyValue(_this.ngxPermissionsExcept)) {
                _this.validateExceptAndOnlyPermissions();
                return;
            }
            if (notEmptyValue(_this.ngxPermissionsOnly)) {
                _this.validateOnlyPermissions();
                return;
            }
            _this.handleAuthorisedPermission(_this.getAuthorisedTemplates());
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.validateExceptAndOnlyPermissions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.getPermissions(this.ngxPermissionsExcept)
            .then((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) {
            if (hasPermission) {
                _this.handleUnauthorisedPermission(_this.ngxPermissionsExceptElse || _this.ngxPermissionsElse);
                return;
            }
            if (!!_this.ngxPermissionsOnly)
                throw false;
            _this.handleAuthorisedPermission(_this.ngxPermissionsExceptThen || _this.ngxPermissionsThen || _this.templateRef);
        }))
            .catch((/**
         * @return {?}
         */
        function () {
            if (!!_this.ngxPermissionsOnly) {
                _this.validateOnlyPermissions();
            }
            else {
                _this.handleAuthorisedPermission(_this.ngxPermissionsExceptThen || _this.ngxPermissionsThen || _this.templateRef);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.validateOnlyPermissions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Validate permissions & store permission state
        this.getPermissions(this.ngxPermissionsOnly)
            .then((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) {
            if (hasPermission) {
                _this.handleAuthorisedPermission(_this.ngxPermissionsOnlyThen || _this.ngxPermissionsThen || _this.templateRef);
            }
            else {
                _this.handleUnauthorisedPermission(_this.ngxPermissionsOnlyElse || _this.ngxPermissionsElse);
            }
        }))
            .catch((/**
         * @return {?}
         */
        function () {
            _this.handleUnauthorisedPermission(_this.ngxPermissionsOnlyElse || _this.ngxPermissionsElse);
        }));
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    NgxPermissionsDirective.prototype.handleUnauthorisedPermission = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        if (isBoolean(this.currentAuthorizedState) && !this.currentAuthorizedState)
            return;
        this.currentAuthorizedState = false;
        this.permissionsUnauthorized.emit(this.permissionsState);
        if (this.getUnAuthorizedStrategyInput()) {
            this.applyStrategyAccordingToStrategyType(this.getUnAuthorizedStrategyInput());
            return;
        }
        if (this.configurationService.onUnAuthorisedDefaultStrategy && !this.elseBlockDefined()) {
            this.applyStrategy(this.configurationService.onUnAuthorisedDefaultStrategy);
        }
        else {
            this.showTemplateBlockInView(template);
        }
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    NgxPermissionsDirective.prototype.handleAuthorisedPermission = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        if (isBoolean(this.currentAuthorizedState) && this.currentAuthorizedState)
            return;
        this.currentAuthorizedState = true;
        this.permissionsAuthorized.emit(this.permissionsState);
        if (this.getAuthorizedStrategyInput()) {
            this.applyStrategyAccordingToStrategyType(this.getAuthorizedStrategyInput());
            return;
        }
        if (this.configurationService.onAuthorisedDefaultStrategy && !this.thenBlockDefined()) {
            this.applyStrategy(this.configurationService.onAuthorisedDefaultStrategy);
        }
        else {
            this.showTemplateBlockInView(template);
        }
    };
    /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    NgxPermissionsDirective.prototype.applyStrategyAccordingToStrategyType = /**
     * @private
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        if (isString(strategy)) {
            this.applyStrategy(strategy);
            return;
        }
        if (isFunction(strategy)) {
            this.showTemplateBlockInView(this.templateRef);
            ((/** @type {?} */ (strategy)))(this.templateRef, this.permissionsState);
            return;
        }
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    NgxPermissionsDirective.prototype.showTemplateBlockInView = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this.viewContainer.clear();
        if (!template) {
            return;
        }
        this.viewContainer.createEmbeddedView(template);
        this.changeDetector.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.getAuthorisedTemplates = /**
     * @private
     * @return {?}
     */
    function () {
        return this.ngxPermissionsOnlyThen
            || this.ngxPermissionsExceptThen
            || this.ngxPermissionsThen
            || this.templateRef;
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.elseBlockDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return !!this.ngxPermissionsExceptElse || !!this.ngxPermissionsElse;
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.thenBlockDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return !!this.ngxPermissionsExceptThen || !!this.ngxPermissionsThen;
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.getAuthorizedStrategyInput = /**
     * @private
     * @return {?}
     */
    function () {
        return this.ngxPermissionsOnlyAuthorisedStrategy ||
            this.ngxPermissionsExceptAuthorisedStrategy ||
            this.ngxPermissionsAuthorisedStrategy;
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsDirective.prototype.getUnAuthorizedStrategyInput = /**
     * @private
     * @return {?}
     */
    function () {
        return this.ngxPermissionsOnlyUnauthorisedStrategy ||
            this.ngxPermissionsExceptUnauthorisedStrategy ||
            this.ngxPermissionsUnauthorisedStrategy;
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    NgxPermissionsDirective.prototype.applyStrategy = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str === NgxPermissionsPredefinedStrategies.SHOW) {
            this.showTemplateBlockInView(this.templateRef);
            return;
        }
        if (str === NgxPermissionsPredefinedStrategies.REMOVE) {
            this.viewContainer.clear();
            return;
        }
        /** @type {?} */
        var strategy = this.configurationService.getStrategy(str);
        this.showTemplateBlockInView(this.templateRef);
        strategy(this.templateRef, this.permissionsState);
    };
    /**
     * Check permission service against parameter "neddedPermissions"
     * then update this class property "permissionsState"
     *
     * @param neddedPermissions Sets the permissions/roles to check (i.e ngxPermissionsOnly)
     */
    /**
     * Check permission service against parameter "neddedPermissions"
     * then update this class property "permissionsState"
     *
     * @private
     * @param {?} neddedPermissions Sets the permissions/roles to check (i.e ngxPermissionsOnly)
     * @return {?}
     */
    NgxPermissionsDirective.prototype.getPermissions = /**
     * Check permission service against parameter "neddedPermissions"
     * then update this class property "permissionsState"
     *
     * @private
     * @param {?} neddedPermissions Sets the permissions/roles to check (i.e ngxPermissionsOnly)
     * @return {?}
     */
    function (neddedPermissions) {
        var _this = this;
        // Ensure we work with array
        /** @type {?} */
        var requestedPermissions = transformStringToArray(neddedPermissions)
        // Array of promises that request permission and roles service with "permission"
        ;
        // Array of promises that request permission and roles service with "permission"
        /** @type {?} */
        var promises = []
        // Reset "permissions state" directive class property
        ;
        // Reset "permissions state" directive class property
        this.permissionsState = {};
        if (isArray(requestedPermissions)) {
            requestedPermissions.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.permissionsState[value] = { hasPermission: false, hasRole: false };
                // Check if has "Permission"
                promises.push(_this.permissionsService.hasPermission(value)
                    .then((/**
                 * @param {?} hasPermission
                 * @return {?}
                 */
                function (hasPermission) {
                    _this.permissionsState[value].hasPermission = hasPermission;
                    return hasPermission;
                }))
                    .catch((/**
                 * @return {?}
                 */
                function () { return false; })));
                // Check if has "Role"
                promises.push(_this.rolesService.hasOnlyRoles(value)
                    .then((/**
                 * @param {?} hasPermission
                 * @return {?}
                 */
                function (hasPermission) {
                    _this.permissionsState[value].hasRole = hasPermission;
                    return hasPermission;
                }))
                    .catch((/**
                 * @return {?}
                 */
                function () { return false; })));
            }));
        }
        /**
         * Return result :
         * true : At least one of neededPermission exists in permission or role service (@see this.permissionsState to get a full detail on wich permission is true/false)
         * false : none of neededPermission exists in  permission or role service
        */
        return from(promises).pipe(mergeAll(), first((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) {
            return hasPermission === true;
        }), false), map((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) {
            return hasPermission;
        }))).toPromise().then((/**
         * @param {?} hasPermission
         * @return {?}
         */
        function (hasPermission) {
            return hasPermission;
        }));
    };
    /** @nocollapse */
    NgxPermissionsDirective.ctorParameters = function () { return [
        { type: NgxPermissionsService },
        { type: NgxPermissionsConfigurationService },
        { type: NgxRolesService },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: TemplateRef }
    ]; };
    NgxPermissionsDirective.propDecorators = {
        ngxPermissionsOnly: [{ type: Input }],
        ngxPermissionsOnlyThen: [{ type: Input }],
        ngxPermissionsOnlyElse: [{ type: Input }],
        ngxPermissionsExcept: [{ type: Input }],
        ngxPermissionsExceptElse: [{ type: Input }],
        ngxPermissionsExceptThen: [{ type: Input }],
        ngxPermissionsThen: [{ type: Input }],
        ngxPermissionsElse: [{ type: Input }],
        ngxPermissionsOnlyAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsOnlyUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsAuthorisedStrategy: [{ type: Input }],
        permissionsAuthorized: [{ type: Output }],
        permissionsUnauthorized: [{ type: Output }]
    };
NgxPermissionsDirective.ngDirectiveDef = ɵngcc0.ɵɵdefineDirective({ type: NgxPermissionsDirective, selectors: [["", "ngxPermissionsOnly", ""], ["", "ngxPermissionsExcept", ""]], factory: function NgxPermissionsDirective_Factory(t) { return new (t || NgxPermissionsDirective)(ɵngcc0.ɵɵdirectiveInject(NgxPermissionsService), ɵngcc0.ɵɵdirectiveInject(NgxPermissionsConfigurationService), ɵngcc0.ɵɵdirectiveInject(NgxRolesService), ɵngcc0.ɵɵdirectiveInject(ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(TemplateRef)); }, inputs: { ngxPermissionsOnly: "ngxPermissionsOnly", ngxPermissionsOnlyThen: "ngxPermissionsOnlyThen", ngxPermissionsOnlyElse: "ngxPermissionsOnlyElse", ngxPermissionsExcept: "ngxPermissionsExcept", ngxPermissionsExceptElse: "ngxPermissionsExceptElse", ngxPermissionsExceptThen: "ngxPermissionsExceptThen", ngxPermissionsThen: "ngxPermissionsThen", ngxPermissionsElse: "ngxPermissionsElse", ngxPermissionsOnlyAuthorisedStrategy: "ngxPermissionsOnlyAuthorisedStrategy", ngxPermissionsOnlyUnauthorisedStrategy: "ngxPermissionsOnlyUnauthorisedStrategy", ngxPermissionsExceptUnauthorisedStrategy: "ngxPermissionsExceptUnauthorisedStrategy", ngxPermissionsExceptAuthorisedStrategy: "ngxPermissionsExceptAuthorisedStrategy", ngxPermissionsUnauthorisedStrategy: "ngxPermissionsUnauthorisedStrategy", ngxPermissionsAuthorisedStrategy: "ngxPermissionsAuthorisedStrategy" }, outputs: { permissionsAuthorized: "permissionsAuthorized", permissionsUnauthorized: "permissionsUnauthorized" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxPermissionsOnly],[ngxPermissionsExcept]'
            }]
    }], function () { return [{ type: NgxPermissionsService }, { type: NgxPermissionsConfigurationService }, { type: NgxRolesService }, { type: ViewContainerRef }, { type: ChangeDetectorRef }, { type: TemplateRef }]; }, { permissionsService: [], configurationService: [], rolesService: [], viewContainer: [], changeDetector: [], templateRef: [], permissionsAuthorized: [{
            type: Output
        }], permissionsUnauthorized: [{
            type: Output
        }], firstMergeUnusedRun: [], permissionsState: [], ngOnInit: [], initPermissionSubscription: [], ngOnChanges: [], ngOnDestroy: [], validateExceptOnlyPermissions: [], validateExceptAndOnlyPermissions: [], validateOnlyPermissions: [], handleUnauthorisedPermission: [], currentAuthorizedState: [], handleAuthorisedPermission: [], applyStrategyAccordingToStrategyType: [], showTemplateBlockInView: [], getAuthorisedTemplates: [], elseBlockDefined: [], thenBlockDefined: [], getAuthorizedStrategyInput: [], getUnAuthorizedStrategyInput: [], applyStrategy: [], getPermissions: [], ngxPermissionsOnly: [{
            type: Input
        }], ngxPermissionsOnlyThen: [{
            type: Input
        }], ngxPermissionsOnlyElse: [{
            type: Input
        }], ngxPermissionsExcept: [{
            type: Input
        }], ngxPermissionsExceptElse: [{
            type: Input
        }], ngxPermissionsExceptThen: [{
            type: Input
        }], ngxPermissionsThen: [{
            type: Input
        }], ngxPermissionsElse: [{
            type: Input
        }], ngxPermissionsOnlyAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsOnlyUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsAuthorisedStrategy: [{
            type: Input
        }] });
    return NgxPermissionsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsGuard = /** @class */ (function () {
    function NgxPermissionsGuard(permissionsService, rolesService, router) {
        this.permissionsService = permissionsService;
        this.rolesService = rolesService;
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.hasPermissions(route, state);
    };
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.canActivateChild = /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    function (childRoute, state) {
        return this.hasPermissions(childRoute, state);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    NgxPermissionsGuard.prototype.canLoad = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.hasPermissions(route);
    };
    /**
     * @private
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.hasPermissions = /**
     * @private
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    function (route, state) {
        /** @type {?} */
        var purePermissions = !!route && route.data ? (/** @type {?} */ (route.data['permissions'])) : {};
        /** @type {?} */
        var permissions = this.transformPermission(purePermissions, route, state);
        if (this.isParameterAvailable(permissions.except)) {
            return this.passingExceptPermissionsValidation(permissions, route, state);
        }
        if (this.isParameterAvailable(permissions.only)) {
            return this.passingOnlyPermissionsValidation(permissions, route, state);
        }
        return true;
    };
    /**
     * @private
     * @param {?} purePermissions
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.transformPermission = /**
     * @private
     * @param {?} purePermissions
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (purePermissions, route, state) {
        /** @type {?} */
        var permissions = __assign({}, purePermissions);
        if (isFunction(permissions.except)) {
            permissions.except = ((/** @type {?} */ (permissions.except)))(route, state);
        }
        if (isFunction(permissions.only)) {
            permissions.only = ((/** @type {?} */ (permissions.only)))(route, state);
        }
        permissions.except = transformStringToArray(permissions.except);
        permissions.only = transformStringToArray(permissions.only);
        return permissions;
    };
    /**
     * @private
     * @param {?} permission
     * @return {?}
     */
    NgxPermissionsGuard.prototype.isParameterAvailable = /**
     * @private
     * @param {?} permission
     * @return {?}
     */
    function (permission) {
        return !!(permission) && permission.length > 0;
    };
    /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.passingExceptPermissionsValidation = /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (permissions, route, state) {
        var _this = this;
        if (!!permissions.redirectTo && ((isFunction(permissions.redirectTo)) || (isPlainObject(permissions.redirectTo) && !this.isRedirectionWithParameters(permissions.redirectTo)))) {
            /** @type {?} */
            var failedPermission_1 = '';
            return from((/** @type {?} */ (permissions.except))).pipe(mergeMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return forkJoin([
                    _this.permissionsService.hasPermission((/** @type {?} */ (data))),
                    _this.rolesService.hasOnlyRoles((/** @type {?} */ (data)))
                ]).pipe(tap((/**
                 * @param {?} hasPermissions
                 * @return {?}
                 */
                function (hasPermissions) {
                    /** @type {?} */
                    var dontHavePermissions = hasPermissions.every((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return data === false; }));
                    if (!dontHavePermissions) {
                        failedPermission_1 = data;
                    }
                })));
            })), first((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.some((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data === true; })); }), false), mergeMap((/**
             * @param {?} isAllFalse
             * @return {?}
             */
            function (isAllFalse) {
                if (!!failedPermission_1) {
                    _this.handleRedirectOfFailedPermission(permissions, failedPermission_1, route, state);
                    return of(false);
                }
                if (!isAllFalse && permissions.only) {
                    return _this.onlyRedirectCheck(permissions, route, state);
                }
                return of(!isAllFalse);
            }))).toPromise();
        }
        return Promise.all([this.permissionsService.hasPermission((/** @type {?} */ (permissions.except))), this.rolesService.hasOnlyRoles((/** @type {?} */ (permissions.except)))])
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), hasPermission = _b[0], hasRoles = _b[1];
            if (hasPermission || hasRoles) {
                if (permissions.redirectTo) {
                    _this.redirectToAnotherRoute(permissions.redirectTo, route, state);
                }
                return false;
            }
            if (permissions.only) {
                return _this.checkOnlyPermissions(permissions, route, state);
            }
            return true;
        }));
    };
    /**
     * @private
     * @param {?} redirectTo
     * @param {?} route
     * @param {?=} state
     * @param {?=} failedPermissionName
     * @return {?}
     */
    NgxPermissionsGuard.prototype.redirectToAnotherRoute = /**
     * @private
     * @param {?} redirectTo
     * @param {?} route
     * @param {?=} state
     * @param {?=} failedPermissionName
     * @return {?}
     */
    function (redirectTo, route, state, failedPermissionName) {
        if (isFunction(redirectTo)) {
            redirectTo = ((/** @type {?} */ (redirectTo)))(failedPermissionName, route, state);
        }
        if (this.isRedirectionWithParameters(redirectTo)) {
            if (this.hasNavigationExtrasAsFunction(redirectTo)) {
                ((/** @type {?} */ (redirectTo))).navigationExtras = ((/** @type {?} */ (((/** @type {?} */ (redirectTo))).navigationExtras)))(route, state);
            }
            if (this.hasNavigationCommandsAsFunction(redirectTo)) {
                ((/** @type {?} */ (redirectTo))).navigationCommands = ((/** @type {?} */ (((/** @type {?} */ (redirectTo))).navigationCommands)))(route, state);
            }
            this.router.navigate(((/** @type {?} */ (((/** @type {?} */ (redirectTo))).navigationCommands))), ((/** @type {?} */ (((/** @type {?} */ (redirectTo))).navigationExtras))));
            return;
        }
        if (Array.isArray(redirectTo)) {
            this.router.navigate(redirectTo);
        }
        else {
            this.router.navigate([redirectTo]);
        }
    };
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    NgxPermissionsGuard.prototype.isRedirectionWithParameters = /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return isPlainObject(object) && (!!object.navigationCommands || !!object.navigationExtras);
    };
    /**
     * @private
     * @param {?} redirectTo
     * @return {?}
     */
    NgxPermissionsGuard.prototype.hasNavigationExtrasAsFunction = /**
     * @private
     * @param {?} redirectTo
     * @return {?}
     */
    function (redirectTo) {
        return !!((/** @type {?} */ (redirectTo))).navigationExtras &&
            isFunction(((/** @type {?} */ (redirectTo))).navigationExtras);
    };
    /**
     * @private
     * @param {?} redirectTo
     * @return {?}
     */
    NgxPermissionsGuard.prototype.hasNavigationCommandsAsFunction = /**
     * @private
     * @param {?} redirectTo
     * @return {?}
     */
    function (redirectTo) {
        return !!((/** @type {?} */ (redirectTo))).navigationCommands &&
            isFunction(((/** @type {?} */ (redirectTo))).navigationCommands);
    };
    /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.onlyRedirectCheck = /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    function (permissions, route, state) {
        var _this = this;
        /** @type {?} */
        var failedPermission = '';
        return from(permissions.only).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return forkJoin([
                _this.permissionsService.hasPermission((/** @type {?} */ (data))),
                _this.rolesService.hasOnlyRoles((/** @type {?} */ (data)))
            ]).pipe(tap((/**
             * @param {?} hasPermission
             * @return {?}
             */
            function (hasPermission) {
                /** @type {?} */
                var failed = hasPermission.every((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return data === false; }));
                if (failed) {
                    failedPermission = data;
                }
            })));
        })), first((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (isFunction(permissions.redirectTo)) {
                return data.some((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return data === true; }));
            }
            return data.every((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data === false; }));
        }), false), mergeMap((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            if (isFunction(permissions.redirectTo)) {
                if (pass) {
                    return of(true);
                }
                else {
                    _this.handleRedirectOfFailedPermission(permissions, failedPermission, route, state);
                    return of(false);
                }
            }
            else {
                if (!!failedPermission) {
                    _this.handleRedirectOfFailedPermission(permissions, failedPermission, route, state);
                }
                return of(!pass);
            }
        }))).toPromise();
    };
    /**
     * @private
     * @param {?} permissions
     * @param {?} failedPermission
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.handleRedirectOfFailedPermission = /**
     * @private
     * @param {?} permissions
     * @param {?} failedPermission
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    function (permissions, failedPermission, route, state) {
        if (this.isFailedPermissionPropertyOfRedirectTo(permissions, failedPermission)) {
            this.redirectToAnotherRoute(((/** @type {?} */ (permissions.redirectTo)))[failedPermission], route, state, failedPermission);
        }
        else {
            if (isFunction(permissions.redirectTo)) {
                this.redirectToAnotherRoute(((/** @type {?} */ (permissions.redirectTo))), route, state, failedPermission);
            }
            else {
                this.redirectToAnotherRoute(((/** @type {?} */ (permissions.redirectTo)))['default'], route, state, failedPermission);
            }
        }
    };
    /**
     * @private
     * @param {?} permissions
     * @param {?} failedPermission
     * @return {?}
     */
    NgxPermissionsGuard.prototype.isFailedPermissionPropertyOfRedirectTo = /**
     * @private
     * @param {?} permissions
     * @param {?} failedPermission
     * @return {?}
     */
    function (permissions, failedPermission) {
        return !!permissions.redirectTo && permissions.redirectTo[(/** @type {?} */ (failedPermission))];
    };
    /**
     * @private
     * @param {?} purePermissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.checkOnlyPermissions = /**
     * @private
     * @param {?} purePermissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    function (purePermissions, route, state) {
        var _this = this;
        /** @type {?} */
        var permissions = __assign({}, purePermissions);
        return Promise.all([this.permissionsService.hasPermission((/** @type {?} */ (permissions.only))), this.rolesService.hasOnlyRoles((/** @type {?} */ (permissions.only)))])
            .then((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), hasPermission = _b[0], hasRole = _b[1];
            if (hasPermission || hasRole)
                return true;
            if (permissions.redirectTo) {
                _this.redirectToAnotherRoute(permissions.redirectTo, route, state);
            }
            return false;
        }));
    };
    /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    NgxPermissionsGuard.prototype.passingOnlyPermissionsValidation = /**
     * @private
     * @param {?} permissions
     * @param {?} route
     * @param {?=} state
     * @return {?}
     */
    function (permissions, route, state) {
        if ((isFunction(permissions.redirectTo) || isPlainObject(permissions.redirectTo) && !this.isRedirectionWithParameters(permissions.redirectTo))) {
            return this.onlyRedirectCheck(permissions, route, state);
        }
        return this.checkOnlyPermissions(permissions, route, state);
    };
    /** @nocollapse */
    NgxPermissionsGuard.ctorParameters = function () { return [
        { type: NgxPermissionsService },
        { type: NgxRolesService },
        { type: Router }
    ]; };
NgxPermissionsGuard.ngInjectableDef = ɵngcc0.ɵɵdefineInjectable({ token: NgxPermissionsGuard, factory: function NgxPermissionsGuard_Factory(t) { return new (t || NgxPermissionsGuard)(ɵngcc0.ɵɵinject(NgxPermissionsService), ɵngcc0.ɵɵinject(NgxRolesService), ɵngcc0.ɵɵinject(Router)); }, providedIn: null });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsGuard, [{
        type: Injectable
    }], function () { return [{ type: NgxPermissionsService }, { type: NgxRolesService }, { type: Router }]; }, { permissionsService: [], rolesService: [], router: [], canActivate: [], canActivateChild: [], canLoad: [], hasPermissions: [], transformPermission: [], isParameterAvailable: [], passingExceptPermissionsValidation: [], redirectToAnotherRoute: [], isRedirectionWithParameters: [], hasNavigationExtrasAsFunction: [], hasNavigationCommandsAsFunction: [], onlyRedirectCheck: [], handleRedirectOfFailedPermission: [], isFailedPermissionPropertyOfRedirectTo: [], checkOnlyPermissions: [], passingOnlyPermissionsValidation: [] });
    return NgxPermissionsGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsAllowStubDirective = /** @class */ (function () {
    function NgxPermissionsAllowStubDirective(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.permissionsAuthorized = new EventEmitter();
        this.permissionsUnauthorized = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxPermissionsAllowStubDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.getAuthorizedTemplate());
        this.permissionsUnauthorized.emit();
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsAllowStubDirective.prototype.getAuthorizedTemplate = /**
     * @private
     * @return {?}
     */
    function () {
        return this.ngxPermissionsOnlyThen ||
            this.ngxPermissionsExceptThen ||
            this.ngxPermissionsThen ||
            this.templateRef;
    };
    /** @nocollapse */
    NgxPermissionsAllowStubDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NgxPermissionsAllowStubDirective.propDecorators = {
        ngxPermissionsOnly: [{ type: Input }],
        ngxPermissionsOnlyThen: [{ type: Input }],
        ngxPermissionsOnlyElse: [{ type: Input }],
        ngxPermissionsExcept: [{ type: Input }],
        ngxPermissionsExceptElse: [{ type: Input }],
        ngxPermissionsExceptThen: [{ type: Input }],
        ngxPermissionsThen: [{ type: Input }],
        ngxPermissionsElse: [{ type: Input }],
        ngxPermissionsOnlyAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsOnlyUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsAuthorisedStrategy: [{ type: Input }],
        permissionsAuthorized: [{ type: Output }],
        permissionsUnauthorized: [{ type: Output }]
    };
NgxPermissionsAllowStubDirective.ngDirectiveDef = ɵngcc0.ɵɵdefineDirective({ type: NgxPermissionsAllowStubDirective, selectors: [["", "ngxPermissionsOnly", ""], ["", "ngxPermissionsExcept", ""]], factory: function NgxPermissionsAllowStubDirective_Factory(t) { return new (t || NgxPermissionsAllowStubDirective)(ɵngcc0.ɵɵdirectiveInject(ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(TemplateRef)); }, inputs: { ngxPermissionsOnly: "ngxPermissionsOnly", ngxPermissionsOnlyThen: "ngxPermissionsOnlyThen", ngxPermissionsOnlyElse: "ngxPermissionsOnlyElse", ngxPermissionsExcept: "ngxPermissionsExcept", ngxPermissionsExceptElse: "ngxPermissionsExceptElse", ngxPermissionsExceptThen: "ngxPermissionsExceptThen", ngxPermissionsThen: "ngxPermissionsThen", ngxPermissionsElse: "ngxPermissionsElse", ngxPermissionsOnlyAuthorisedStrategy: "ngxPermissionsOnlyAuthorisedStrategy", ngxPermissionsOnlyUnauthorisedStrategy: "ngxPermissionsOnlyUnauthorisedStrategy", ngxPermissionsExceptUnauthorisedStrategy: "ngxPermissionsExceptUnauthorisedStrategy", ngxPermissionsExceptAuthorisedStrategy: "ngxPermissionsExceptAuthorisedStrategy", ngxPermissionsUnauthorisedStrategy: "ngxPermissionsUnauthorisedStrategy", ngxPermissionsAuthorisedStrategy: "ngxPermissionsAuthorisedStrategy" }, outputs: { permissionsAuthorized: "permissionsAuthorized", permissionsUnauthorized: "permissionsUnauthorized" } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsAllowStubDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxPermissionsOnly],[ngxPermissionsExcept]'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { viewContainer: [], templateRef: [], permissionsAuthorized: [{
            type: Output
        }], permissionsUnauthorized: [{
            type: Output
        }], ngOnInit: [], getAuthorizedTemplate: [], ngxPermissionsOnly: [{
            type: Input
        }], ngxPermissionsOnlyThen: [{
            type: Input
        }], ngxPermissionsOnlyElse: [{
            type: Input
        }], ngxPermissionsExcept: [{
            type: Input
        }], ngxPermissionsExceptElse: [{
            type: Input
        }], ngxPermissionsExceptThen: [{
            type: Input
        }], ngxPermissionsThen: [{
            type: Input
        }], ngxPermissionsElse: [{
            type: Input
        }], ngxPermissionsOnlyAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsOnlyUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsAuthorisedStrategy: [{
            type: Input
        }] });
    return NgxPermissionsAllowStubDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsRestrictStubDirective = /** @class */ (function () {
    function NgxPermissionsRestrictStubDirective(viewContainer) {
        this.viewContainer = viewContainer;
        this.permissionsAuthorized = new EventEmitter();
        this.permissionsUnauthorized = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxPermissionsRestrictStubDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        if (this.getUnAuthorizedTemplate()) {
            this.viewContainer.createEmbeddedView(this.getUnAuthorizedTemplate());
        }
        this.permissionsUnauthorized.emit();
    };
    /**
     * @private
     * @return {?}
     */
    NgxPermissionsRestrictStubDirective.prototype.getUnAuthorizedTemplate = /**
     * @private
     * @return {?}
     */
    function () {
        return this.ngxPermissionsOnlyElse ||
            this.ngxPermissionsExceptElse ||
            this.ngxPermissionsElse;
    };
    /** @nocollapse */
    NgxPermissionsRestrictStubDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgxPermissionsRestrictStubDirective.propDecorators = {
        ngxPermissionsOnly: [{ type: Input }],
        ngxPermissionsOnlyThen: [{ type: Input }],
        ngxPermissionsOnlyElse: [{ type: Input }],
        ngxPermissionsExcept: [{ type: Input }],
        ngxPermissionsExceptElse: [{ type: Input }],
        ngxPermissionsExceptThen: [{ type: Input }],
        ngxPermissionsThen: [{ type: Input }],
        ngxPermissionsElse: [{ type: Input }],
        ngxPermissionsOnlyAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsOnlyUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsExceptAuthorisedStrategy: [{ type: Input }],
        ngxPermissionsUnauthorisedStrategy: [{ type: Input }],
        ngxPermissionsAuthorisedStrategy: [{ type: Input }],
        permissionsAuthorized: [{ type: Output }],
        permissionsUnauthorized: [{ type: Output }]
    };
NgxPermissionsRestrictStubDirective.ngDirectiveDef = ɵngcc0.ɵɵdefineDirective({ type: NgxPermissionsRestrictStubDirective, selectors: [["", "ngxPermissionsOnly", ""], ["", "ngxPermissionsExcept", ""]], factory: function NgxPermissionsRestrictStubDirective_Factory(t) { return new (t || NgxPermissionsRestrictStubDirective)(ɵngcc0.ɵɵdirectiveInject(ViewContainerRef)); }, inputs: { ngxPermissionsOnly: "ngxPermissionsOnly", ngxPermissionsOnlyThen: "ngxPermissionsOnlyThen", ngxPermissionsOnlyElse: "ngxPermissionsOnlyElse", ngxPermissionsExcept: "ngxPermissionsExcept", ngxPermissionsExceptElse: "ngxPermissionsExceptElse", ngxPermissionsExceptThen: "ngxPermissionsExceptThen", ngxPermissionsThen: "ngxPermissionsThen", ngxPermissionsElse: "ngxPermissionsElse", ngxPermissionsOnlyAuthorisedStrategy: "ngxPermissionsOnlyAuthorisedStrategy", ngxPermissionsOnlyUnauthorisedStrategy: "ngxPermissionsOnlyUnauthorisedStrategy", ngxPermissionsExceptUnauthorisedStrategy: "ngxPermissionsExceptUnauthorisedStrategy", ngxPermissionsExceptAuthorisedStrategy: "ngxPermissionsExceptAuthorisedStrategy", ngxPermissionsUnauthorisedStrategy: "ngxPermissionsUnauthorisedStrategy", ngxPermissionsAuthorisedStrategy: "ngxPermissionsAuthorisedStrategy" }, outputs: { permissionsAuthorized: "permissionsAuthorized", permissionsUnauthorized: "permissionsUnauthorized" } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsRestrictStubDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxPermissionsOnly],[ngxPermissionsExcept]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { viewContainer: [], permissionsAuthorized: [{
            type: Output
        }], permissionsUnauthorized: [{
            type: Output
        }], ngOnInit: [], getUnAuthorizedTemplate: [], ngxPermissionsOnly: [{
            type: Input
        }], ngxPermissionsOnlyThen: [{
            type: Input
        }], ngxPermissionsOnlyElse: [{
            type: Input
        }], ngxPermissionsExcept: [{
            type: Input
        }], ngxPermissionsExceptElse: [{
            type: Input
        }], ngxPermissionsExceptThen: [{
            type: Input
        }], ngxPermissionsThen: [{
            type: Input
        }], ngxPermissionsElse: [{
            type: Input
        }], ngxPermissionsOnlyAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsOnlyUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsExceptAuthorisedStrategy: [{
            type: Input
        }], ngxPermissionsUnauthorisedStrategy: [{
            type: Input
        }], ngxPermissionsAuthorisedStrategy: [{
            type: Input
        }] });
    return NgxPermissionsRestrictStubDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRole = /** @class */ (function () {
    function NgxRole(name, validationFunction) {
        this.name = name;
        this.validationFunction = validationFunction;
    }
    return NgxRole;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPermissionsModule = /** @class */ (function () {
    function NgxPermissionsModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxPermissionsModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxPermissionsModule,
            providers: [
                NgxPermissionsStore,
                NgxRolesStore,
                NgxPermissionsConfigurationStore,
                NgxPermissionsService,
                NgxPermissionsGuard,
                NgxRolesService,
                NgxPermissionsConfigurationService,
                { provide: USE_PERMISSIONS_STORE, useValue: config.permissionsIsolate },
                { provide: USE_ROLES_STORE, useValue: config.rolesIsolate },
                { provide: USE_CONFIGURATION_STORE, useValue: config.configurationIsolate },
            ]
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxPermissionsModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxPermissionsModule,
            providers: [
                { provide: USE_PERMISSIONS_STORE, useValue: config.permissionsIsolate },
                { provide: USE_ROLES_STORE, useValue: config.rolesIsolate },
                { provide: USE_CONFIGURATION_STORE, useValue: config.configurationIsolate },
                NgxPermissionsConfigurationService,
                NgxPermissionsService,
                NgxRolesService,
                NgxPermissionsGuard
            ]
        };
    };
NgxPermissionsModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: NgxPermissionsModule });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(NgxPermissionsModule, { declarations: [NgxPermissionsDirective], exports: [NgxPermissionsDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [
                    NgxPermissionsDirective
                ],
                exports: [
                    NgxPermissionsDirective
                ]
            }]
    }], function () { return []; }, null);
NgxPermissionsModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function NgxPermissionsModule_Factory(t) { return new (t || NgxPermissionsModule)(); }, imports: [[]] });
    return NgxPermissionsModule;
}());
var NgxPermissionsAllowStubModule = /** @class */ (function () {
    function NgxPermissionsAllowStubModule() {
    }
NgxPermissionsAllowStubModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: NgxPermissionsAllowStubModule });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(NgxPermissionsAllowStubModule, { declarations: [NgxPermissionsAllowStubDirective], exports: [NgxPermissionsAllowStubDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsAllowStubModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [
                    NgxPermissionsAllowStubDirective
                ],
                exports: [
                    NgxPermissionsAllowStubDirective
                ]
            }]
    }], function () { return []; }, null);
NgxPermissionsAllowStubModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function NgxPermissionsAllowStubModule_Factory(t) { return new (t || NgxPermissionsAllowStubModule)(); }, imports: [[]] });
    return NgxPermissionsAllowStubModule;
}());
var NgxPermissionsRestrictStubModule = /** @class */ (function () {
    function NgxPermissionsRestrictStubModule() {
    }
NgxPermissionsRestrictStubModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: NgxPermissionsRestrictStubModule });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(NgxPermissionsRestrictStubModule, { declarations: [NgxPermissionsRestrictStubDirective], exports: [NgxPermissionsRestrictStubDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxPermissionsRestrictStubModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [
                    NgxPermissionsRestrictStubDirective
                ],
                exports: [
                    NgxPermissionsRestrictStubDirective
                ]
            }]
    }], function () { return []; }, null);
NgxPermissionsRestrictStubModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function NgxPermissionsRestrictStubModule_Factory(t) { return new (t || NgxPermissionsRestrictStubModule)(); }, imports: [[]] });
    return NgxPermissionsRestrictStubModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxPermissionsAllowStubDirective, NgxPermissionsAllowStubModule, NgxPermissionsConfigurationService, NgxPermissionsConfigurationStore, NgxPermissionsDirective, NgxPermissionsGuard, NgxPermissionsModule, NgxPermissionsPredefinedStrategies, NgxPermissionsRestrictStubDirective, NgxPermissionsRestrictStubModule, NgxPermissionsService, NgxPermissionsStore, NgxRole, NgxRolesService, NgxRolesStore, USE_CONFIGURATION_STORE, USE_PERMISSIONS_STORE, USE_ROLES_STORE };

//# sourceMappingURL=ngx-permissions.js.map