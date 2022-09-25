"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const parseComment = (commentFromReq) => {
    if (!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromReq;
};
const parseDate = (dateFromReq) => {
    if (!isDate(dateFromReq)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromReq;
};
const parseWeather = (weatherFromReq) => {
    if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromReq;
};
const parseVisibility = (visibilityFromReq) => {
    if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromReq;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const toNewDiaryEntry = (obj) => {
    const newEntry = {
        comment: parseComment(obj.comment),
        date: parseDate(obj.date),
        weather: parseWeather(obj.weather),
        visibility: parseVisibility(obj.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
