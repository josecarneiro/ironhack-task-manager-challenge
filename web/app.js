'use strict';

const { join } = require('path');
const resolve = (path = '') => join(__dirname, './../client/build', path);

const express = require('express');
const serve = (path, ...args) => express.static(resolve(path), ...args);

const logger = require('morgan');
const compress = require('compression');
const helmet = require('helmet');
const microcache = require('route-cache');
const favicon = require('serve-favicon-safe');
const api = require('./../api/app');

const app = express();

app.set('trust proxy', true);

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(compress({ threshold: 0 }));
app.use(favicon(resolve('favicon.ico')));
app.use(logger('common'));
app.use('/', api);
app.use(microcache.cacheSeconds(5, request => request.originalUrl));
app.use(serve());
app.use('*', serve('index.html'));

module.exports = app;
