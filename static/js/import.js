var express = require('express')
    , cors = require('cors')
    , app = express();
app.options('*', cors());
