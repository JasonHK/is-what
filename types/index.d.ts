/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export declare function getType(payload: any): string;
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isUndefined(payload: any): payload is undefined;
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export declare function isNull(payload: any): payload is null;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isPlainObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
export declare function isAnyObject(payload: any): payload is {
    [key: string]: any;
};
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
export declare function isObjectLike<T extends object>(payload: any): payload is T;
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
export declare function isFunction(payload: any): payload is Function;
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isArray(payload: any): payload is any[];
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isString(payload: any): payload is string;
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isFullString(payload: any): payload is string;
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isEmptyString(payload: any): payload is string;
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export declare function isNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export declare function isBoolean(payload: any): payload is boolean;
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export declare function isRegExp(payload: any): payload is RegExp;
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
export declare function isDate(payload: any): payload is Date;
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is Symbol}
 */
export declare function isSymbol(payload: any): payload is Symbol;
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {*}
 */
export declare function isPrimitive(payload: any): any;
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
export declare function isType<T extends Function>(payload: any, type: T): payload is T;
