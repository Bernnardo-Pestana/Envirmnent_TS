// Generated by https://quicktype.io

export interface Countyface {
    data?:       { [key: string]: string };
    status?:     number;
    statusText?: string;
    headers?:    CountyfaceHeaders;
    config?:     Config;
    request?:    Request;
}

export interface Config {
    transitional:      Transitional;
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    headers:           ConfigHeaders;
    method:            string;
    url:               string;
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface CountyfaceHeaders {
    "content-length": string;
    "content-type":   string;
}

export interface Request {
}
