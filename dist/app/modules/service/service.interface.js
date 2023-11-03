"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSearchableFields = exports.ServiceFilterAbleFields = exports.ServiceSearchAbleFields = void 0;
// for search
exports.ServiceSearchAbleFields = ['name', 'category', 'location'];
// for filter
exports.ServiceFilterAbleFields = [
    'search',
    'name',
    'category',
    'price',
    'location',
];
exports.PriceSearchableFields = ['maxPrice', 'minPrice'];
