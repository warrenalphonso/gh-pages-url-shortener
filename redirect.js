"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function redirect() {
  return _redirect.apply(this, arguments);
}

function _redirect() {
  _redirect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _location, issueNumber, _homepage, response, payload, message, title;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _location = window.location;
            issueNumber = _location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP + 1];
            _homepage = _location.protocol + "//" + _location.hostname + (_location.port ? ":" + _location.port : "") + "/" + _location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP];
            _context.next = 6;
            return fetch(GITHUB_ISSUES_LINK + issueNumber);

          case 6:
            response = _context.sent;

            if (response.status !== 200) {
              _location.replace(_homepage);
            }

            _context.next = 10;
            return response.json();

          case 10:
            payload = _context.sent;
            message = payload.message, title = payload.title;

            if (message === "Not Found") {
              // issueNumber does not exist in gh issues
              _location.replace(_homepage);
            } else if (title) {
              // Check if the title of issue is a legitimate URL
              new URL(title);

              _location.replace(title);
            }

            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            location.replace(homepage);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _redirect.apply(this, arguments);
}

redirect();