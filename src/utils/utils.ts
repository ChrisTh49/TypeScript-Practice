import { NewDiaryEntry } from "../types";
import { Visibility, Weather } from "../enums";

const parseComment = (commentFromReq: any): string => {
    if (!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment');
    }

    return commentFromReq;
};

const parseDate = (dateFromReq: any): string => {
    if (!isDate(dateFromReq)) {
        throw new Error('Incorrect or missing date');
    }

    return dateFromReq;
};

const parseWeather = (weatherFromReq: any): Weather => {
    if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect or missing weather');
    }

    return weatherFromReq;
};

const parseVisibility = (visibilityFromReq: any): Visibility => {
    if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Incorrect or missing visibility');
    }

    return visibilityFromReq;
}

const isString = (string: any): Boolean => {
    return typeof string === 'string' || string instanceof String
};

const isDate = (date: string): Boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
};

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
};

const toNewDiaryEntry = (obj: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(obj.comment),
        date: parseDate(obj.date),
        weather: parseWeather(obj.weather),
        visibility: parseVisibility(obj.visibility)
    };

    return newEntry;
};


export default toNewDiaryEntry;