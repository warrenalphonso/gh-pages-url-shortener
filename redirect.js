"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function redirect() {
  return _redirect.apply(this, arguments);
}

function _redirect() {
  _redirect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _location, issueNumber, _homepage, response, message, title;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _location = window.location;
            issueNumber = _location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP + 1];
            _homepage = _location.protocol + "//" + _location.hostname + (_location.port ? ":" + _location.port : "") + "/" + _location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP];
            _context2.next = 6;
            return fetch(GITHUB_ISSUES_LINK + issueNumber);

          case 6:
            _context2.next = 8;
            return _context2.sent.json();

          case 8:
            response = _context2.sent;
            message = response.message, title = response.title;

            if (message === "Not Found") {
              // issueNumber does not exist in gh issues
              _location.replace(_homepage);
            } else if (title) {
              // Check if the title of issue is a legitimate URL
              new URL(title);

              _location.replace(title);
            }

            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            location.replace(homepage);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _redirect.apply(this, arguments);
}

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          redirect();

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();