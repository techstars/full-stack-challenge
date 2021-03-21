const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const companiesRouter = require('./routes/companies');
const foundersRouter = require('./routes/founders');

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

router.use('/company', companiesRouter);
router.use('/founders', foundersRouter);

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({message : err.message});
});

module.exports = app;
