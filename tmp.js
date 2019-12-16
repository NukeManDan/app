/**
 * otplib-browser
 *
 * @author Gerald Yeo <contact@fusedthought.com>
 * @version: 11.0.1
 * @license: MIT
 **/
! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.otplib = e() : t.otplib = e()
}(window, function() {
  return function(t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      })
    }, n.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, n.t = function(t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
        for (var i in t) n.d(r, i, function(e) {
          return t[e]
        }.bind(null, i));
      return r
    }, n.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 55)
  }([function(t, e) {
    "function" == typeof Object.create ? t.exports = function(t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })
    } : t.exports = function(t, e) {
      t.super_ = e;
      var n = function() {};
      n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
  }, function(t, e, n) {
    var r = n(3),
      i = r.Buffer;

    function o(t, e) {
      for (var n in t) e[n] = t[n]
    }

    function s(t, e, n) {
      return i(t, e, n)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), e.Buffer = s), o(i, s), s.from = function(t, e, n) {
      if ("number" == typeof t) throw new TypeError("Argument must not be a number");
      return i(t, e, n)
    }, s.alloc = function(t, e, n) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      var r = i(t);
      return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
    }, s.allocUnsafe = function(t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      return i(t)
    }, s.allocUnsafeSlow = function(t) {
      if ("number" != typeof t) throw new TypeError("Argument must be a number");
      return r.SlowBuffer(t)
    }
  }, function(t, e, n) {
    "use strict";
    var r = function(t) {
      return parseInt(t, 10).toString(16)
    };

    function i(t) {
      return /^(\d+)(\.\d+)?$/.test(t)
    }
    var o = function(t, e) {
      return !(!i(t) || !i(e)) && String(t) === String(e)
    };
    var s = function(t, e) {
        for (var n = e || 0, r = t + ""; r.length < n;) r = "0" + r;
        return r
      },
      a = n(19);
    var u = function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!t || t < 1) return "";
      if (!e.crypto || "function" != typeof e.crypto.randomBytes) throw new Error("Expecting options.crypto to have a randomBytes function");
      return e.crypto.randomBytes(t).toString("base64").slice(0, t)
    };
    n.d(e, "a", function() {
      return r
    }), n.d(e, "b", function() {
      return o
    }), n.d(e, "c", function() {
      return s
    }), n.d(e, "d", function() {
      return a.a
    }), n.d(e, "e", function() {
      return u
    })
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var r = n(32),
        i = n(33),
        o = n(20);

      function s() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
      }

      function a(t, e) {
        if (s() < e) throw new RangeError("Invalid typed array length");
        return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
      }

      function u(t, e, n) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return c(this, t)
        }
        return h(this, t, e, n)
      }

      function h(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
          if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
          if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
          e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
          u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = l(t, e);
          return t
        }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
          "string" == typeof n && "" !== n || (n = "utf8");
          if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | d(e, n),
            i = (t = a(t, r)).write(e, n);
          i !== r && (t = t.slice(0, i));
          return t
        }(t, e, n) : function(t, e) {
          if (u.isBuffer(e)) {
            var n = 0 | p(e.length);
            return 0 === (t = a(t, n)).length ? t : (e.copy(t, 0, 0, n), t)
          }
          if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);
            if ("Buffer" === e.type && o(e.data)) return l(t, e.data)
          }
          var r;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }(t, e)
      }

      function f(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative')
      }

      function c(t, e) {
        if (f(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT)
          for (var n = 0; n < e; ++n) t[n] = 0;
        return t
      }

      function l(t, e) {
        var n = e.length < 0 ? 0 : 0 | p(e.length);
        t = a(t, n);
        for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
        return t
      }

      function p(t) {
        if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
        return 0 | t
      }

      function d(t, e) {
        if (u.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var n = t.length;
        if (0 === n) return 0;
        for (var r = !1;;) switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
          case void 0:
            return Y(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;
          case "hex":
            return n >>> 1;
          case "base64":
            return W(t).length;
          default:
            if (r) return Y(t).length;
            e = ("" + e).toLowerCase(), r = !0
        }
      }

      function g(t, e, n) {
        var r = t[e];
        t[e] = t[n], t[n] = r
      }

      function y(t, e, n, r, i) {
        if (0 === t.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
          if (i) return -1;
          n = t.length - 1
        } else if (n < 0) {
          if (!i) return -1;
          n = 0
        }
        if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : _(t, e, n, r, i);
        if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : _(t, [e], n, r, i);
        throw new TypeError("val must be string, number or Buffer")
      }

      function _(t, e, n, r, i) {
        var o, s = 1,
          a = t.length,
          u = e.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;
          s = 2, a /= 2, u /= 2, n /= 2
        }

        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var f = -1;
          for (o = n; o < a; o++)
            if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
              if (-1 === f && (f = o), o - f + 1 === u) return f * s
            } else -1 !== f && (o -= o - f), f = -1
        } else
          for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
            for (var c = !0, l = 0; l < u; l++)
              if (h(t, o + l) !== h(e, l)) {
                c = !1;
                break
              } if (c) return o
          }
        return -1
      }

      function b(t, e, n, r) {
        n = Number(n) || 0;
        var i = t.length - n;
        r ? (r = Number(r)) > i && (r = i) : r = i;
        var o = e.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var s = 0; s < r; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          t[n + s] = a
        }
        return s
      }

      function v(t, e, n, r) {
        return F(Y(e, t.length - n), t, n, r)
      }

      function w(t, e, n, r) {
        return F(function(t) {
          for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
          return e
        }(e), t, n, r)
      }

      function m(t, e, n, r) {
        return w(t, e, n, r)
      }

      function E(t, e, n, r) {
        return F(W(e), t, n, r)
      }

      function S(t, e, n, r) {
        return F(function(t, e) {
          for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
          return o
        }(e, t.length - n), t, n, r)
      }

      function k(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
      }

      function T(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], i = e; i < n;) {
          var o, s, a, u, h = t[i],
            f = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
          if (i + c <= n) switch (c) {
            case 1:
              h < 128 && (f = h);
              break;
            case 2:
              128 == (192 & (o = t[i + 1])) && (u = (31 & h) << 6 | 63 & o) > 127 && (f = u);
              break;
            case 3:
              o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
              break;
            case 4:
              o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (f = u)
          }
          null === f ? (f = 65533, c = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += c
        }
        return function(t) {
          var e = t.length;
          if (e <= x) return String.fromCharCode.apply(String, t);
          var n = "",
            r = 0;
          for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += x));
          return n
        }(r)
      }
      e.Buffer = u, e.SlowBuffer = function(t) {
        +t != t && (t = 0);
        return u.alloc(+t)
      }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
        } catch (t) {
          return !1
        }
      }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) {
        return t.__proto__ = u.prototype, t
      }, u.from = function(t, e, n) {
        return h(null, t, e, n)
      }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
        value: null,
        configurable: !0
      })), u.alloc = function(t, e, n) {
        return function(t, e, n, r) {
          return f(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
        }(null, t, e, n)
      }, u.allocUnsafe = function(t) {
        return c(null, t)
      }, u.allocUnsafeSlow = function(t) {
        return c(null, t)
      }, u.isBuffer = function(t) {
        return !(null == t || !t._isBuffer)
      }, u.compare = function(t, e) {
        if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
          if (t[i] !== e[i]) {
            n = t[i], r = e[i];
            break
          } return n < r ? -1 : r < n ? 1 : 0
      }, u.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, u.concat = function(t, e) {
        if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return u.alloc(0);
        var n;
        if (void 0 === e)
          for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        var r = u.allocUnsafe(e),
          i = 0;
        for (n = 0; n < t.length; ++n) {
          var s = t[n];
          if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(r, i), i += s.length
        }
        return r
      }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) g(this, e, e + 1);
        return this
      }, u.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
        return this
      }, u.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
        return this
      }, u.prototype.toString = function() {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : function(t, e, n) {
          var r = !1;
          if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
          if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8");;) switch (t) {
            case "hex":
              return R(this, e, n);
            case "utf8":
            case "utf-8":
              return T(this, e, n);
            case "ascii":
              return O(this, e, n);
            case "latin1":
            case "binary":
              return A(this, e, n);
            case "base64":
              return k(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return B(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              t = (t + "").toLowerCase(), r = !0
          }
        }.apply(this, arguments)
      }, u.prototype.equals = function(t) {
        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === u.compare(this, t)
      }, u.prototype.inspect = function() {
        var t = "",
          n = e.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
      }, u.prototype.compare = function(t, e, n, r, i) {
        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
        if (r >= i && e >= n) return 0;
        if (r >= i) return -1;
        if (e >= n) return 1;
        if (this === t) return 0;
        for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), h = this.slice(r, i), f = t.slice(e, n), c = 0; c < a; ++c)
          if (h[c] !== f[c]) {
            o = h[c], s = f[c];
            break
          } return o < s ? -1 : s < o ? 1 : 0
      }, u.prototype.includes = function(t, e, n) {
        return -1 !== this.indexOf(t, e, n)
      }, u.prototype.indexOf = function(t, e, n) {
        return y(this, t, e, n, !0)
      }, u.prototype.lastIndexOf = function(t, e, n) {
        return y(this, t, e, n, !1)
      }, u.prototype.write = function(t, e, n, r) {
        if (void 0 === e) r = "utf8", n = this.length, e = 0;
        else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
        else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
        }
        var i = this.length - e;
        if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var o = !1;;) switch (r) {
          case "hex":
            return b(this, t, e, n);
          case "utf8":
          case "utf-8":
            return v(this, t, e, n);
          case "ascii":
            return w(this, t, e, n);
          case "latin1":
          case "binary":
            return m(this, t, e, n);
          case "base64":
            return E(this, t, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return S(this, t, e, n);
          default:
            if (o) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), o = !0
        }
      }, u.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      };
      var x = 4096;

      function O(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
        return r
      }

      function A(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
        return r
      }

      function R(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var i = "", o = e; o < n; ++o) i += N(t[o]);
        return i
      }

      function B(t, e, n) {
        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return i
      }

      function I(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
      }

      function L(t, e, n, r, i, o) {
        if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range")
      }

      function M(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);
        for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
      }

      function j(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
      }

      function P(t, e, n, r, i, o) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range")
      }

      function C(t, e, n, r, o) {
        return o || P(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
      }

      function U(t, e, n, r, o) {
        return o || P(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
      }
      u.prototype.slice = function(t, e) {
        var n, r = this.length;
        if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
        else {
          var i = e - t;
          n = new u(i, void 0);
          for (var o = 0; o < i; ++o) n[o] = this[o + t]
        }
        return n
      }, u.prototype.readUIntLE = function(t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);
        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
        return r
      }, u.prototype.readUIntBE = function(t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);
        for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
        return r
      }, u.prototype.readUInt8 = function(t, e) {
        return e || I(t, 1, this.length), this[t]
      }, u.prototype.readUInt16LE = function(t, e) {
        return e || I(t, 2, this.length), this[t] | this[t + 1] << 8
      }, u.prototype.readUInt16BE = function(t, e) {
        return e || I(t, 2, this.length), this[t] << 8 | this[t + 1]
      }, u.prototype.readUInt32LE = function(t, e) {
        return e || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
      }, u.prototype.readUInt32BE = function(t, e) {
        return e || I(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
      }, u.prototype.readIntLE = function(t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);
        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
      }, u.prototype.readIntBE = function(t, e, n) {
        t |= 0, e |= 0, n || I(t, e, this.length);
        for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
      }, u.prototype.readInt8 = function(t, e) {
        return e || I(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
      }, u.prototype.readInt16LE = function(t, e) {
        e || I(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
      }, u.prototype.readInt16BE = function(t, e) {
        e || I(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return 32768 & n ? 4294901760 | n : n
      }, u.prototype.readInt32LE = function(t, e) {
        return e || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
      }, u.prototype.readInt32BE = function(t, e) {
        return e || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
      }, u.prototype.readFloatLE = function(t, e) {
        return e || I(t, 4, this.length), i.read(this, t, !0, 23, 4)
      }, u.prototype.readFloatBE = function(t, e) {
        return e || I(t, 4, this.length), i.read(this, t, !1, 23, 4)
      }, u.prototype.readDoubleLE = function(t, e) {
        return e || I(t, 8, this.length), i.read(this, t, !0, 52, 8)
      }, u.prototype.readDoubleBE = function(t, e) {
        return e || I(t, 8, this.length), i.read(this, t, !1, 52, 8)
      }, u.prototype.writeUIntLE = function(t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var i = 1,
          o = 0;
        for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
        return e + n
      }, u.prototype.writeUIntBE = function(t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || L(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var i = n - 1,
          o = 1;
        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
        return e + n
      }, u.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
      }, u.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
      }, u.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
      }, u.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : j(this, t, e, !0), e + 4
      }, u.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
      }, u.prototype.writeIntLE = function(t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          L(this, t, e, n, i - 1, -i)
        }
        var o = 0,
          s = 1,
          a = 0;
        for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
      }, u.prototype.writeIntBE = function(t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          L(this, t, e, n, i - 1, -i)
        }
        var o = n - 1,
          s = 1,
          a = 0;
        for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
      }, u.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
      }, u.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
      }, u.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
      }, u.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : j(this, t, e, !0), e + 4
      }, u.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e |= 0, n || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
      }, u.prototype.writeFloatLE = function(t, e, n) {
        return C(this, t, e, !0, n)
      }, u.prototype.writeFloatBE = function(t, e, n) {
        return C(this, t, e, !1, n)
      }, u.prototype.writeDoubleLE = function(t, e, n) {
        return U(this, t, e, !0, n)
      }, u.prototype.writeDoubleBE = function(t, e, n) {
        return U(this, t, e, !1, n)
      }, u.prototype.copy = function(t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
        var i, o = r - n;
        if (this === t && n < e && e < r)
          for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
        else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
          for (i = 0; i < o; ++i) t[i + e] = this[i + n];
        else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
        return o
      }, u.prototype.fill = function(t, e, n, r) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var i = t.charCodeAt(0);
            i < 256 && (t = i)
          }
          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
          if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        var o;
        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
          for (o = e; o < n; ++o) this[o] = t;
        else {
          var s = u.isBuffer(t) ? t : Y(new u(t, r).toString()),
            a = s.length;
          for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
        }
        return this
      };
      var D = /[^+\/0-9A-Za-z-_]/g;

      function N(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16)
      }

      function Y(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
          if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              if (s + 1 === r) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue
              }
              i = n;
              continue
            }
            if (n < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), i = n;
              continue
            }
            n = 65536 + (i - 55296 << 10 | n - 56320)
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, n < 128) {
            if ((e -= 1) < 0) break;
            o.push(n)
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            o.push(n >> 6 | 192, 63 & n | 128)
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
          }
        }
        return o
      }

      function W(t) {
        return r.toByteArray(function(t) {
          if ((t = function(t) {
              return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }(t).replace(D, "")).length < 2) return "";
          for (; t.length % 4 != 0;) t += "=";
          return t
        }(t))
      }

      function F(t, e, n, r) {
        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
        return i
      }
    }).call(this, n(5))
  }, function(t, e, n) {
    "use strict";
    var r = n(9),
      i = Object.keys || function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
      };
    t.exports = c;
    var o = n(7);
    o.inherits = n(0);
    var s = n(23),
      a = n(17);
    o.inherits(c, s);
    for (var u = i(a.prototype), h = 0; h < u.length; h++) {
      var f = u[h];
      c.prototype[f] || (c.prototype[f] = a.prototype[f])
    }

    function c(t) {
      if (!(this instanceof c)) return new c(t);
      s.call(this, t), a.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", l)
    }

    function l() {
      this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
    }

    function p(t) {
      t.end()
    }
    Object.defineProperty(c.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark
      }
    }), Object.defineProperty(c.prototype, "destroyed", {
      get: function() {
        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
      },
      set: function(t) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
      }
    }), c.prototype._destroy = function(t, e) {
      this.push(null), this.end(), r.nextTick(e, t)
    }
  }, function(t, e) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function(t, e, n) {
    var r = n(1).Buffer;

    function i(t, e) {
      this._block = r.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
    }
    i.prototype.update = function(t, e) {
      "string" == typeof t && (e = e || "utf8", t = r.from(t, e));
      for (var n = this._block, i = this._blockSize, o = t.length, s = this._len, a = 0; a < o;) {
        for (var u = s % i, h = Math.min(o - a, i - u), f = 0; f < h; f++) n[u + f] = t[a + f];
        a += h, (s += h) % i == 0 && this._update(n)
      }
      return this._len += o, this
    }, i.prototype.digest = function(t) {
      var e = this._len % this._blockSize;
      this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var n = 8 * this._len;
      if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
      else {
        var r = (4294967295 & n) >>> 0,
          i = (n - r) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
      }
      this._update(this._block);
      var o = this._hash();
      return t ? o.toString(t) : o
    }, i.prototype._update = function() {
      throw new Error("_update must be implemented by subclass")
    }, t.exports = i
  }, function(t, e, n) {
    (function(t) {
      function n(t) {
        return Object.prototype.toString.call(t)
      }
      e.isArray = function(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t)
      }, e.isBoolean = function(t) {
        return "boolean" == typeof t
      }, e.isNull = function(t) {
        return null === t
      }, e.isNullOrUndefined = function(t) {
        return null == t
      }, e.isNumber = function(t) {
        return "number" == typeof t
      }, e.isString = function(t) {
        return "string" == typeof t
      }, e.isSymbol = function(t) {
        return "symbol" == typeof t
      }, e.isUndefined = function(t) {
        return void 0 === t
      }, e.isRegExp = function(t) {
        return "[object RegExp]" === n(t)
      }, e.isObject = function(t) {
        return "object" == typeof t && null !== t
      }, e.isDate = function(t) {
        return "[object Date]" === n(t)
      }, e.isError = function(t) {
        return "[object Error]" === n(t) || t instanceof Error
      }, e.isFunction = function(t) {
        return "function" == typeof t
      }, e.isPrimitive = function(t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
      }, e.isBuffer = t.isBuffer
    }).call(this, n(3).Buffer)
  }, function(t, e) {
    var n, r, i = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
      try {
        return n(t, 0)
      } catch (e) {
        try {
          return n.call(null, t, 0)
        } catch (e) {
          return n.call(this, t, 0)
        }
      }
    }! function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o
      } catch (t) {
        n = o
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
        r = s
      }
    }();
    var u, h = [],
      f = !1,
      c = -1;

    function l() {
      f && u && (f = !1, u.length ? h = u.concat(h) : c = -1, h.length && p())
    }

    function p() {
      if (!f) {
        var t = a(l);
        f = !0;
        for (var e = h.length; e;) {
          for (u = h, h = []; ++c < e;) u && u[c].run();
          c = -1, e = h.length
        }
        u = null, f = !1,
          function(t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
            try {
              r(t)
            } catch (e) {
              try {
                return r.call(null, t)
              } catch (e) {
                return r.call(this, t)
              }
            }
          }(t)
      }
    }

    function d(t, e) {
      this.fun = t, this.array = e
    }

    function g() {}
    i.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      h.push(new d(t, e)), 1 !== h.length || f || a(p)
    }, d.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t) {
      return []
    }, i.binding = function(t) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function() {
      return "/"
    }, i.chdir = function(t) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function() {
      return 0
    }
  }, function(t, e, n) {
    "use strict";
    (function(e) {
      !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
        nextTick: function(t, n, r, i) {
          if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
          var o, s, a = arguments.length;
          switch (a) {
            case 0:
            case 1:
              return e.nextTick(t);
            case 2:
              return e.nextTick(function() {
                t.call(null, n)
              });
            case 3:
              return e.nextTick(function() {
                t.call(null, n, r)
              });
            case 4:
              return e.nextTick(function() {
                t.call(null, n, r, i)
              });
            default:
              for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
              return e.nextTick(function() {
                t.apply(null, o)
              })
          }
        }
      } : t.exports = e
    }).call(this, n(8))
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      var r = n(11);
      e.a = function(e, n, i) {
        if (!i.crypto || "function" != typeof i.crypto.createHmac) throw new Error("Expecting options.crypto to have a createHmac function");
        if ("function" != typeof i.createHmacSecret) throw new Error("Expecting options.createHmacSecret to be a function");
        if ("string" != typeof i.algorithm) throw new Error("Expecting options.algorithm to be a string");
        var o = i.createHmacSecret(e, {
            algorithm: i.algorithm,
            encoding: i.encoding
          }),
          s = Object(r.a)(n);
        return i.crypto.createHmac(i.algorithm, o).update(t.from(s, "hex")).digest()
      }
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    "use strict";
    var r = n(2);
    e.a = function(t) {
      var e = Object(r.a)(t);
      return Object(r.c)(e, 16)
    }
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      e.a = function(e, n) {
        if ("string" != typeof n.encoding) throw new Error("Expecting options.encoding to be a string");
        return t.from(e, n.encoding)
      }
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      var r = n(2);
      e.a = function(e, n) {
        if ("string" != typeof n.algorithm) throw new Error("Expecting options.algorithm to be a string");
        if ("string" != typeof n.encoding) throw new Error("Expecting options.encoding to be a string");
        var i = t.from(e, n.encoding),
          o = n.algorithm.toLowerCase();
        switch (o) {
          case "sha1":
            return Object(r.d)(i, 20, n.encoding);
          case "sha256":
            return Object(r.d)(i, 32, n.encoding);
          case "sha512":
            return Object(r.d)(i, 64, n.encoding);
          default:
            throw new Error("Unsupported algorithm ".concat(o, ". Accepts: sha1, sha256, sha512"))
        }
      }
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    var r = n(34);
    e.encode = r.encode, e.decode = r.decode
  }, function(t, e, n) {
    "use strict";
    var r, i = "object" == typeof Reflect ? Reflect : null,
      o = i && "function" == typeof i.apply ? i.apply : function(t, e, n) {
        return Function.prototype.apply.call(t, e, n)
      };
    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : function(t) {
      return Object.getOwnPropertyNames(t)
    };
    var s = Number.isNaN || function(t) {
      return t != t
    };

    function a() {
      a.init.call(this)
    }
    t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var u = 10;

    function h(t) {
      return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
    }

    function f(t, e, n, r) {
      var i, o, s, a;
      if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
      if (void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), s = o[e]), void 0 === s) s = o[e] = n, ++t._eventsCount;
      else if ("function" == typeof s ? s = o[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = h(t)) > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, a = u, console && console.warn && console.warn(a)
      }
      return t
    }

    function c(t, e, n) {
      var r = {
          fired: !1,
          wrapFn: void 0,
          target: t,
          type: e,
          listener: n
        },
        i = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
          this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, t))
        }.bind(r);
      return i.listener = n, r.wrapFn = i, i
    }

    function l(t, e, n) {
      var r = t._events;
      if (void 0 === r) return [];
      var i = r[e];
      return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
        return e
      }(i) : d(i, i.length)
    }

    function p(t) {
      var e = this._events;
      if (void 0 !== e) {
        var n = e[t];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length
      }
      return 0
    }

    function d(t, e) {
      for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
      return n
    }
    Object.defineProperty(a, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return u
      },
      set: function(t) {
        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        u = t
      }
    }), a.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(t) {
      if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this
    }, a.prototype.getMaxListeners = function() {
      return h(this)
    }, a.prototype.emit = function(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
      var r = "error" === t,
        i = this._events;
      if (void 0 !== i) r = r && void 0 === i.error;
      else if (!r) return !1;
      if (r) {
        var s;
        if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw a.context = s, a
      }
      var u = i[t];
      if (void 0 === u) return !1;
      if ("function" == typeof u) o(u, this, e);
      else {
        var h = u.length,
          f = d(u, h);
        for (n = 0; n < h; ++n) o(f[n], this, e)
      }
      return !0
    }, a.prototype.addListener = function(t, e) {
      return f(this, t, e, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
      return f(this, t, e, !0)
    }, a.prototype.once = function(t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
      return this.on(t, c(this, t, e)), this
    }, a.prototype.prependOnceListener = function(t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
      return this.prependListener(t, c(this, t, e)), this
    }, a.prototype.removeListener = function(t, e) {
      var n, r, i, o, s;
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
      if (void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[t])) return this;
      if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
      else if ("function" != typeof n) {
        for (i = -1, o = n.length - 1; o >= 0; o--)
          if (n[o] === e || n[o].listener === e) {
            s = n[o].listener, i = o;
            break
          } if (i < 0) return this;
        0 === i ? n.shift() : function(t, e) {
          for (; e + 1 < t.length; e++) t[e] = t[e + 1];
          t.pop()
        }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e)
      }
      return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
      var e, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
      if (0 === arguments.length) {
        var i, o = Object.keys(n);
        for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
      }
      if ("function" == typeof(e = n[t])) this.removeListener(t, e);
      else if (void 0 !== e)
        for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
      return this
    }, a.prototype.listeners = function(t) {
      return l(this, t, !0)
    }, a.prototype.rawListeners = function(t) {
      return l(this, t, !1)
    }, a.listenerCount = function(t, e) {
      return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
    }, a.prototype.listenerCount = p, a.prototype.eventNames = function() {
      return this._eventsCount > 0 ? r(this._events) : []
    }
  }, function(t, e, n) {
    (e = t.exports = n(23)).Stream = e, e.Readable = e, e.Writable = n(17), e.Duplex = n(4), e.Transform = n(26), e.PassThrough = n(42)
  }, function(t, e, n) {
    "use strict";
    (function(e, r, i) {
      var o = n(9);

      function s(t) {
        var e = this;
        this.next = null, this.entry = null, this.finish = function() {
          ! function(t, e, n) {
            var r = t.entry;
            t.entry = null;
            for (; r;) {
              var i = r.callback;
              e.pendingcb--, i(n), r = r.next
            }
            e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
          }(e, t)
        }
      }
      t.exports = b;
      var a, u = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;
      b.WritableState = _;
      var h = n(7);
      h.inherits = n(0);
      var f = {
          deprecate: n(41)
        },
        c = n(24),
        l = n(1).Buffer,
        p = i.Uint8Array || function() {};
      var d, g = n(25);

      function y() {}

      function _(t, e) {
        a = a || n(4), t = t || {};
        var r = e instanceof a;
        this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
        var i = t.highWaterMark,
          h = t.writableHighWaterMark,
          f = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : r && (h || 0 === h) ? h : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var c = !1 === t.decodeStrings;
        this.decodeStrings = !c, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
          ! function(t, e) {
            var n = t._writableState,
              r = n.sync,
              i = n.writecb;
            if (function(t) {
                t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
              }(n), e) ! function(t, e, n, r, i) {
              --e.pendingcb, n ? (o.nextTick(i, r), o.nextTick(k, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (i(r), t._writableState.errorEmitted = !0, t.emit("error", r), k(t, e))
            }(t, n, r, e, i);
            else {
              var s = E(n);
              s || n.corked || n.bufferProcessing || !n.bufferedRequest || m(t, n), r ? u(w, t, n, s, i) : w(t, n, s, i)
            }
          }(e, t)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this)
      }

      function b(t) {
        if (a = a || n(4), !(d.call(b, this) || this instanceof a)) return new b(t);
        this._writableState = new _(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), c.call(this)
      }

      function v(t, e, n, r, i, o, s) {
        e.writelen = r, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
      }

      function w(t, e, n, r) {
        n || function(t, e) {
          0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
        }(t, e), e.pendingcb--, r(), k(t, e)
      }

      function m(t, e) {
        e.bufferProcessing = !0;
        var n = e.bufferedRequest;
        if (t._writev && n && n.next) {
          var r = e.bufferedRequestCount,
            i = new Array(r),
            o = e.corkedRequestsFree;
          o.entry = n;
          for (var a = 0, u = !0; n;) i[a] = n, n.isBuf || (u = !1), n = n.next, a += 1;
          i.allBuffers = u, v(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new s(e), e.bufferedRequestCount = 0
        } else {
          for (; n;) {
            var h = n.chunk,
              f = n.encoding,
              c = n.callback;
            if (v(t, e, !1, e.objectMode ? 1 : h.length, h, f, c), n = n.next, e.bufferedRequestCount--, e.writing) break
          }
          null === n && (e.lastBufferedRequest = null)
        }
        e.bufferedRequest = n, e.bufferProcessing = !1
      }

      function E(t) {
        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
      }

      function S(t, e) {
        t._final(function(n) {
          e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), k(t, e)
        })
      }

      function k(t, e) {
        var n = E(e);
        return n && (! function(t, e) {
          e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(S, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
        }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n
      }
      h.inherits(b, c), _.prototype.getBuffer = function() {
          for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
          return e
        },
        function() {
          try {
            Object.defineProperty(_.prototype, "buffer", {
              get: f.deprecate(function() {
                return this.getBuffer()
              }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
          } catch (t) {}
        }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (d = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
          value: function(t) {
            return !!d.call(this, t) || this === b && (t && t._writableState instanceof _)
          }
        })) : d = function(t) {
          return t instanceof this
        }, b.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"))
        }, b.prototype.write = function(t, e, n) {
          var r, i = this._writableState,
            s = !1,
            a = !i.objectMode && (r = t, l.isBuffer(r) || r instanceof p);
          return a && !l.isBuffer(t) && (t = function(t) {
            return l.from(t)
          }(t)), "function" == typeof e && (n = e, e = null), a ? e = "buffer" : e || (e = i.defaultEncoding), "function" != typeof n && (n = y), i.ended ? function(t, e) {
            var n = new Error("write after end");
            t.emit("error", n), o.nextTick(e, n)
          }(this, n) : (a || function(t, e, n, r) {
            var i = !0,
              s = !1;
            return null === n ? s = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")), s && (t.emit("error", s), o.nextTick(r, s), i = !1), i
          }(this, i, t, n)) && (i.pendingcb++, s = function(t, e, n, r, i, o) {
            if (!n) {
              var s = function(t, e, n) {
                t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = l.from(e, n));
                return e
              }(e, r, i);
              r !== s && (n = !0, i = "buffer", r = s)
            }
            var a = e.objectMode ? 1 : r.length;
            e.length += a;
            var u = e.length < e.highWaterMark;
            u || (e.needDrain = !0);
            if (e.writing || e.corked) {
              var h = e.lastBufferedRequest;
              e.lastBufferedRequest = {
                chunk: r,
                encoding: i,
                isBuf: n,
                callback: o,
                next: null
              }, h ? h.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
            } else v(t, e, !1, a, r, i, o);
            return u
          }(this, i, a, t, e, n)), s
        }, b.prototype.cork = function() {
          this._writableState.corked++
        }, b.prototype.uncork = function() {
          var t = this._writableState;
          t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || m(this, t))
        }, b.prototype.setDefaultEncoding = function(t) {
          if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
          return this._writableState.defaultEncoding = t, this
        }, Object.defineProperty(b.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark
          }
        }), b.prototype._write = function(t, e, n) {
          n(new Error("_write() is not implemented"))
        }, b.prototype._writev = null, b.prototype.end = function(t, e, n) {
          var r = this._writableState;
          "function" == typeof t ? (n = t, t = null, e = null) : "function" == typeof e && (n = e, e = null), null != t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function(t, e, n) {
            e.ending = !0, k(t, e), n && (e.finished ? o.nextTick(n) : t.once("finish", n));
            e.ended = !0, t.writable = !1
          }(this, r, n)
        }, Object.defineProperty(b.prototype, "destroyed", {
          get: function() {
            return void 0 !== this._writableState && this._writableState.destroyed
          },
          set: function(t) {
            this._writableState && (this._writableState.destroyed = t)
          }
        }), b.prototype.destroy = g.destroy, b.prototype._undestroy = g.undestroy, b.prototype._destroy = function(t, e) {
          this.end(), e(t)
        }
    }).call(this, n(8), n(39).setImmediate, n(5))
  }, function(t, e, n) {
    "use strict";
    var r = n(1).Buffer,
      i = r.isEncoding || function(t) {
        switch ((t = "" + t) && t.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1
        }
      };

    function o(t) {
      var e;
      switch (this.encoding = function(t) {
        var e = function(t) {
          if (!t) return "utf8";
          for (var e;;) switch (t) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return t;
            default:
              if (e) return;
              t = ("" + t).toLowerCase(), e = !0
          }
        }(t);
        if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
        return e || t
      }(t), this.encoding) {
        case "utf16le":
          this.text = u, this.end = h, e = 4;
          break;
        case "utf8":
          this.fillLast = a, e = 4;
          break;
        case "base64":
          this.text = f, this.end = c, e = 3;
          break;
        default:
          return this.write = l, void(this.end = p)
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
    }

    function s(t) {
      return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
    }

    function a(t) {
      var e = this.lastTotal - this.lastNeed,
        n = function(t, e, n) {
          if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
          if (t.lastNeed > 1 && e.length > 1) {
            if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
            if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
          }
        }(this, t);
      return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
    }

    function u(t, e) {
      if ((t.length - e) % 2 == 0) {
        var n = t.toString("utf16le", e);
        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
        }
        return n
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
    }

    function h(t) {
      var e = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, n)
      }
      return e
    }

    function f(t, e) {
      var n = (t.length - e) % 3;
      return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
    }

    function c(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }

    function l(t) {
      return t.toString(this.encoding)
    }

    function p(t) {
      return t && t.length ? this.write(t) : ""
    }
    e.StringDecoder = o, o.prototype.write = function(t) {
      if (0 === t.length) return "";
      var e, n;
      if (this.lastNeed) {
        if (void 0 === (e = this.fillLast(t))) return "";
        n = this.lastNeed, this.lastNeed = 0
      } else n = 0;
      return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
    }, o.prototype.end = function(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + "�" : e
    }, o.prototype.text = function(t, e) {
      var n = function(t, e, n) {
        var r = e.length - 1;
        if (r < n) return 0;
        var i = s(e[r]);
        if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
        if (--r < n || -2 === i) return 0;
        if ((i = s(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
        if (--r < n || -2 === i) return 0;
        if ((i = s(e[r])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;
        return 0
      }(this, t, e);
      if (!this.lastNeed) return t.toString("utf8", e);
      this.lastTotal = n;
      var r = t.length - (n - this.lastNeed);
      return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
    }, o.prototype.fillLast = function(t) {
      if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
    }
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      e.a = function(e, n, r) {
        var i = e.toString(r).length;
        if (n && i < n) {
          var o = new Array(n - i + 1).join(e.toString("hex"));
          return t.from(o, "hex").slice(0, n)
        }
        return e
      }
    }).call(this, n(3).Buffer)
  }, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
      return "[object Array]" == n.call(t)
    }
  }, function(t, e, n) {
    var r = n(1).Buffer,
      i = n(22).Transform,
      o = n(18).StringDecoder;

    function s(t) {
      i.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    n(0)(s, i), s.prototype.update = function(t, e, n) {
      "string" == typeof t && (t = r.from(t, e));
      var i = this._update(t);
      return this.hashMode ? this : (n && (i = this._toString(i, n)), i)
    }, s.prototype.setAutoPadding = function() {}, s.prototype.getAuthTag = function() {
      throw new Error("trying to get auth tag in unsupported state")
    }, s.prototype.setAuthTag = function() {
      throw new Error("trying to set auth tag in unsupported state")
    }, s.prototype.setAAD = function() {
      throw new Error("trying to set aad in unsupported state")
    }, s.prototype._transform = function(t, e, n) {
      var r;
      try {
        this.hashMode ? this._update(t) : this.push(this._update(t))
      } catch (t) {
        r = t
      } finally {
        n(r)
      }
    }, s.prototype._flush = function(t) {
      var e;
      try {
        this.push(this.__final())
      } catch (t) {
        e = t
      }
      t(e)
    }, s.prototype._finalOrDigest = function(t) {
      var e = this.__final() || r.alloc(0);
      return t && (e = this._toString(e, t, !0)), e
    }, s.prototype._toString = function(t, e, n) {
      if (this._decoder || (this._decoder = new o(e), this._encoding = e), this._encoding !== e) throw new Error("can't switch encodings");
      var r = this._decoder.write(t);
      return n && (r += this._decoder.end()), r
    }, t.exports = s
  }, function(t, e, n) {
    t.exports = i;
    var r = n(15).EventEmitter;

    function i() {
      r.call(this)
    }
    n(0)(i, r), i.Readable = n(16), i.Writable = n(43), i.Duplex = n(44), i.Transform = n(45), i.PassThrough = n(46), i.Stream = i, i.prototype.pipe = function(t, e) {
      var n = this;

      function i(e) {
        t.writable && !1 === t.write(e) && n.pause && n.pause()
      }

      function o() {
        n.readable && n.resume && n.resume()
      }
      n.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (n.on("end", a), n.on("close", u));
      var s = !1;

      function a() {
        s || (s = !0, t.end())
      }

      function u() {
        s || (s = !0, "function" == typeof t.destroy && t.destroy())
      }

      function h(t) {
        if (f(), 0 === r.listenerCount(this, "error")) throw t
      }

      function f() {
        n.removeListener("data", i), t.removeListener("drain", o), n.removeListener("end", a), n.removeListener("close", u), n.removeListener("error", h), t.removeListener("error", h), n.removeListener("end", f), n.removeListener("close", f), t.removeListener("close", f)
      }
      return n.on("error", h), t.on("error", h), n.on("end", f), n.on("close", f), t.on("close", f), t.emit("pipe", n), t
    }
  }, function(t, e, n) {
    "use strict";
    (function(e, r) {
      var i = n(9);
      t.exports = v;
      var o, s = n(20);
      v.ReadableState = b;
      n(15).EventEmitter;
      var a = function(t, e) {
          return t.listeners(e).length
        },
        u = n(24),
        h = n(1).Buffer,
        f = e.Uint8Array || function() {};
      var c = n(7);
      c.inherits = n(0);
      var l = n(36),
        p = void 0;
      p = l && l.debuglog ? l.debuglog("stream") : function() {};
      var d, g = n(37),
        y = n(25);
      c.inherits(v, u);
      var _ = ["error", "close", "destroy", "pause", "resume"];

      function b(t, e) {
        t = t || {};
        var r = e instanceof(o = o || n(4));
        this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
        var i = t.highWaterMark,
          s = t.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : r && (s || 0 === s) ? s : a, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new g, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = n(18).StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding)
      }

      function v(t) {
        if (o = o || n(4), !(this instanceof v)) return new v(t);
        this._readableState = new b(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this)
      }

      function w(t, e, n, r, i) {
        var o, s = t._readableState;
        null === e ? (s.reading = !1, function(t, e) {
          if (e.ended) return;
          if (e.decoder) {
            var n = e.decoder.end();
            n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
          }
          e.ended = !0, k(t)
        }(t, s)) : (i || (o = function(t, e) {
          var n;
          r = e, h.isBuffer(r) || r instanceof f || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
          var r;
          return n
        }(s, e)), o ? t.emit("error", o) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === h.prototype || (e = function(t) {
          return h.from(t)
        }(e)), r ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : m(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1, s.decoder && !n ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? m(t, s, e, !1) : x(t, s)) : m(t, s, e, !1))) : r || (s.reading = !1));
        return function(t) {
          return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
        }(s)
      }

      function m(t, e, n, r) {
        e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && k(t)), x(t, e)
      }
      Object.defineProperty(v.prototype, "destroyed", {
        get: function() {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(t) {
          this._readableState && (this._readableState.destroyed = t)
        }
      }), v.prototype.destroy = y.destroy, v.prototype._undestroy = y.undestroy, v.prototype._destroy = function(t, e) {
        this.push(null), e(t)
      }, v.prototype.push = function(t, e) {
        var n, r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = h.from(t, e), e = ""), n = !0), w(this, t, e, !1, n)
      }, v.prototype.unshift = function(t) {
        return w(this, t, null, !0, !1)
      }, v.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
      }, v.prototype.setEncoding = function(t) {
        return d || (d = n(18).StringDecoder), this._readableState.decoder = new d(t), this._readableState.encoding = t, this
      };
      var E = 8388608;

      function S(t, e) {
        return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
          return t >= E ? t = E : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
        }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
      }

      function k(t) {
        var e = t._readableState;
        e.needReadable = !1, e.emittedReadable || (p("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(T, t) : T(t))
      }

      function T(t) {
        p("emit readable"), t.emit("readable"), B(t)
      }

      function x(t, e) {
        e.readingMore || (e.readingMore = !0, i.nextTick(O, t, e))
      }

      function O(t, e) {
        for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
        e.readingMore = !1
      }

      function A(t) {
        p("readable nexttick read 0"), t.read(0)
      }

      function R(t, e) {
        e.reading || (p("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), B(t), e.flowing && !e.reading && t.read(0)
      }

      function B(t) {
        var e = t._readableState;
        for (p("flow", e.flowing); e.flowing && null !== t.read(););
      }

      function I(t, e) {
        return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function(t, e, n) {
          var r;
          t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function(t, e) {
            var n = e.head,
              r = 1,
              i = n.data;
            t -= i.length;
            for (; n = n.next;) {
              var o = n.data,
                s = t > o.length ? o.length : t;
              if (s === o.length ? i += o : i += o.slice(0, t), 0 === (t -= s)) {
                s === o.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
                break
              }++r
            }
            return e.length -= r, i
          }(t, e) : function(t, e) {
            var n = h.allocUnsafe(t),
              r = e.head,
              i = 1;
            r.data.copy(n), t -= r.data.length;
            for (; r = r.next;) {
              var o = r.data,
                s = t > o.length ? o.length : t;
              if (o.copy(n, n.length - t, 0, s), 0 === (t -= s)) {
                s === o.length ? (++i, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));
                break
              }++i
            }
            return e.length -= i, n
          }(t, e);
          return r
        }(t, e.buffer, e.decoder), n);
        var n
      }

      function L(t) {
        var e = t._readableState;
        if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        e.endEmitted || (e.ended = !0, i.nextTick(M, e, t))
      }

      function M(t, e) {
        t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
      }

      function j(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
          if (t[n] === e) return n;
        return -1
      }
      v.prototype.read = function(t) {
        p("read", t), t = parseInt(t, 10);
        var e = this._readableState,
          n = t;
        if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return p("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? L(this) : k(this), null;
        if (0 === (t = S(t, e)) && e.ended) return 0 === e.length && L(this), null;
        var r, i = e.needReadable;
        return p("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && p("length less than watermark", i = !0), e.ended || e.reading ? p("reading or ended", i = !1) : i && (p("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = S(n, e))), null === (r = t > 0 ? I(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && L(this)), null !== r && this.emit("data", r), r
      }, v.prototype._read = function(t) {
        this.emit("error", new Error("_read() is not implemented"))
      }, v.prototype.pipe = function(t, e) {
        var n = this,
          o = this._readableState;
        switch (o.pipesCount) {
          case 0:
            o.pipes = t;
            break;
          case 1:
            o.pipes = [o.pipes, t];
            break;
          default:
            o.pipes.push(t)
        }
        o.pipesCount += 1, p("pipe count=%d opts=%j", o.pipesCount, e);
        var u = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? f : v;

        function h(e, r) {
          p("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, p("cleanup"), t.removeListener("close", _), t.removeListener("finish", b), t.removeListener("drain", c), t.removeListener("error", y), t.removeListener("unpipe", h), n.removeListener("end", f), n.removeListener("end", v), n.removeListener("data", g), l = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || c())
        }

        function f() {
          p("onend"), t.end()
        }
        o.endEmitted ? i.nextTick(u) : n.once("end", u), t.on("unpipe", h);
        var c = function(t) {
          return function() {
            var e = t._readableState;
            p("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, "data") && (e.flowing = !0, B(t))
          }
        }(n);
        t.on("drain", c);
        var l = !1;
        var d = !1;

        function g(e) {
          p("ondata"), d = !1, !1 !== t.write(e) || d || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== j(o.pipes, t)) && !l && (p("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, d = !0), n.pause())
        }

        function y(e) {
          p("onerror", e), v(), t.removeListener("error", y), 0 === a(t, "error") && t.emit("error", e)
        }

        function _() {
          t.removeListener("finish", b), v()
        }

        function b() {
          p("onfinish"), t.removeListener("close", _), v()
        }

        function v() {
          p("unpipe"), n.unpipe(t)
        }
        return n.on("data", g),
          function(t, e, n) {
            if ("function" == typeof t.prependListener) return t.prependListener(e, n);
            t._events && t._events[e] ? s(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
          }(t, "error", y), t.once("close", _), t.once("finish", b), t.emit("pipe", n), o.flowing || (p("pipe resume"), n.resume()), t
      }, v.prototype.unpipe = function(t) {
        var e = this._readableState,
          n = {
            hasUnpiped: !1
          };
        if (0 === e.pipesCount) return this;
        if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n), this);
        if (!t) {
          var r = e.pipes,
            i = e.pipesCount;
          e.pipes = null, e.pipesCount = 0, e.flowing = !1;
          for (var o = 0; o < i; o++) r[o].emit("unpipe", this, n);
          return this
        }
        var s = j(e.pipes, t);
        return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n), this)
      }, v.prototype.on = function(t, e) {
        var n = u.prototype.on.call(this, t, e);
        if ("data" === t) !1 !== this._readableState.flowing && this.resume();
        else if ("readable" === t) {
          var r = this._readableState;
          r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && k(this) : i.nextTick(A, this))
        }
        return n
      }, v.prototype.addListener = v.prototype.on, v.prototype.resume = function() {
        var t = this._readableState;
        return t.flowing || (p("resume"), t.flowing = !0, function(t, e) {
          e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(R, t, e))
        }(this, t)), this
      }, v.prototype.pause = function() {
        return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this
      }, v.prototype.wrap = function(t) {
        var e = this,
          n = this._readableState,
          r = !1;
        for (var i in t.on("end", function() {
            if (p("wrapped end"), n.decoder && !n.ended) {
              var t = n.decoder.end();
              t && t.length && e.push(t)
            }
            e.push(null)
          }), t.on("data", function(i) {
            (p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (e.push(i) || (r = !0, t.pause()))
          }), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
          return function() {
            return t[e].apply(t, arguments)
          }
        }(i));
        for (var o = 0; o < _.length; o++) t.on(_[o], this.emit.bind(this, _[o]));
        return this._read = function(e) {
          p("wrapped _read", e), r && (r = !1, t.resume())
        }, this
      }, Object.defineProperty(v.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
          return this._readableState.highWaterMark
        }
      }), v._fromList = I
    }).call(this, n(5), n(8))
  }, function(t, e, n) {
    t.exports = n(15).EventEmitter
  }, function(t, e, n) {
    "use strict";
    var r = n(9);

    function i(t, e) {
      t.emit("error", e)
    }
    t.exports = {
      destroy: function(t, e) {
        var n = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;
        return o || s ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
          !e && t ? (r.nextTick(i, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
        }), this)
      },
      undestroy: function() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
      }
    }
  }, function(t, e, n) {
    "use strict";
    t.exports = s;
    var r = n(4),
      i = n(7);

    function o(t, e) {
      var n = this._transformState;
      n.transforming = !1;
      var r = n.writecb;
      if (!r) return this.emit("error", new Error("write callback called multiple times"));
      n.writechunk = null, n.writecb = null, null != e && this.push(e), r(t);
      var i = this._readableState;
      i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }

    function s(t) {
      if (!(this instanceof s)) return new s(t);
      r.call(this, t), this._transformState = {
        afterTransform: o.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", a)
    }

    function a() {
      var t = this;
      "function" == typeof this._flush ? this._flush(function(e, n) {
        u(t, e, n)
      }) : u(this, null, null)
    }

    function u(t, e, n) {
      if (e) return t.emit("error", e);
      if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return t.push(null)
    }
    i.inherits = n(0), i.inherits(s, r), s.prototype.push = function(t, e) {
      return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e)
    }, s.prototype._transform = function(t, e, n) {
      throw new Error("_transform() is not implemented")
    }, s.prototype._write = function(t, e, n) {
      var r = this._transformState;
      if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
      }
    }, s.prototype._read = function(t) {
      var e = this._transformState;
      null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }, s.prototype._destroy = function(t, e) {
      var n = this;
      r.prototype._destroy.call(this, t, function(t) {
        e(t), n.emit("close")
      })
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(1).Buffer,
      i = n(22).Transform;

    function o(t) {
      i.call(this), this._block = r.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    n(0)(o, i), o.prototype._transform = function(t, e, n) {
      var r = null;
      try {
        this.update(t, e)
      } catch (t) {
        r = t
      }
      n(r)
    }, o.prototype._flush = function(t) {
      var e = null;
      try {
        this.push(this.digest())
      } catch (t) {
        e = t
      }
      t(e)
    }, o.prototype.update = function(t, e) {
      if (function(t, e) {
          if (!r.isBuffer(t) && "string" != typeof t) throw new TypeError(e + " must be a string or a buffer")
        }(t, "Data"), this._finalized) throw new Error("Digest already called");
      r.isBuffer(t) || (t = r.from(t, e));
      for (var n = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
        for (var o = this._blockOffset; o < this._blockSize;) n[o++] = t[i++];
        this._update(), this._blockOffset = 0
      }
      for (; i < t.length;) n[this._blockOffset++] = t[i++];
      for (var s = 0, a = 8 * t.length; a > 0; ++s) this._length[s] += a, (a = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * a);
      return this
    }, o.prototype._update = function() {
      throw new Error("_update is not implemented")
    }, o.prototype.digest = function(t) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = !0;
      var e = this._digest();
      void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
      for (var n = 0; n < 4; ++n) this._length[n] = 0;
      return e
    }, o.prototype._digest = function() {
      throw new Error("_digest is not implemented")
    }, t.exports = o
  }, function(t, e, n) {
    var r = n(0),
      i = n(6),
      o = n(1).Buffer,
      s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      a = new Array(64);

    function u() {
      this.init(), this._w = a, i.call(this, 64, 56)
    }

    function h(t, e, n) {
      return n ^ t & (e ^ n)
    }

    function f(t, e, n) {
      return t & e | n & (t | e)
    }

    function c(t) {
      return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
    }

    function l(t) {
      return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
    }

    function p(t) {
      return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
    }
    r(u, i), u.prototype.init = function() {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    }, u.prototype._update = function(t) {
      for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, d = 0 | this._f, g = 0 | this._g, y = 0 | this._h, _ = 0; _ < 16; ++_) n[_] = t.readInt32BE(4 * _);
      for (; _ < 64; ++_) n[_] = 0 | (((e = n[_ - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + n[_ - 7] + p(n[_ - 15]) + n[_ - 16];
      for (var b = 0; b < 64; ++b) {
        var v = y + l(u) + h(u, d, g) + s[b] + n[b] | 0,
          w = c(r) + f(r, i, o) | 0;
        y = g, g = d, d = u, u = a + v | 0, a = o, o = i, i = r, r = v + w | 0
      }
      this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0, this._f = d + this._f | 0, this._g = g + this._g | 0, this._h = y + this._h | 0
    }, u.prototype._hash = function() {
      var t = o.allocUnsafe(32);
      return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
    }, t.exports = u
  }, function(t, e, n) {
    var r = n(0),
      i = n(6),
      o = n(1).Buffer,
      s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
      a = new Array(160);

    function u() {
      this.init(), this._w = a, i.call(this, 128, 112)
    }

    function h(t, e, n) {
      return n ^ t & (e ^ n)
    }

    function f(t, e, n) {
      return t & e | n & (t | e)
    }

    function c(t, e) {
      return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
    }

    function l(t, e) {
      return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
    }

    function p(t, e) {
      return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
    }

    function d(t, e) {
      return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
    }

    function g(t, e) {
      return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
    }

    function y(t, e) {
      return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
    }

    function _(t, e) {
      return t >>> 0 < e >>> 0 ? 1 : 0
    }
    r(u, i), u.prototype.init = function() {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    }, u.prototype._update = function(t) {
      for (var e = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, a = 0 | this._eh, u = 0 | this._fh, b = 0 | this._gh, v = 0 | this._hh, w = 0 | this._al, m = 0 | this._bl, E = 0 | this._cl, S = 0 | this._dl, k = 0 | this._el, T = 0 | this._fl, x = 0 | this._gl, O = 0 | this._hl, A = 0; A < 32; A += 2) e[A] = t.readInt32BE(4 * A), e[A + 1] = t.readInt32BE(4 * A + 4);
      for (; A < 160; A += 2) {
        var R = e[A - 30],
          B = e[A - 30 + 1],
          I = p(R, B),
          L = d(B, R),
          M = g(R = e[A - 4], B = e[A - 4 + 1]),
          j = y(B, R),
          P = e[A - 14],
          C = e[A - 14 + 1],
          U = e[A - 32],
          D = e[A - 32 + 1],
          N = L + C | 0,
          Y = I + P + _(N, L) | 0;
        Y = (Y = Y + M + _(N = N + j | 0, j) | 0) + U + _(N = N + D | 0, D) | 0, e[A] = Y, e[A + 1] = N
      }
      for (var W = 0; W < 160; W += 2) {
        Y = e[W], N = e[W + 1];
        var F = f(n, r, i),
          q = f(w, m, E),
          z = c(n, w),
          H = c(w, n),
          K = l(a, k),
          V = l(k, a),
          X = s[W],
          $ = s[W + 1],
          J = h(a, u, b),
          Z = h(k, T, x),
          G = O + V | 0,
          Q = v + K + _(G, O) | 0;
        Q = (Q = (Q = Q + J + _(G = G + Z | 0, Z) | 0) + X + _(G = G + $ | 0, $) | 0) + Y + _(G = G + N | 0, N) | 0;
        var tt = H + q | 0,
          et = z + F + _(tt, H) | 0;
        v = b, O = x, b = u, x = T, u = a, T = k, a = o + Q + _(k = S + G | 0, S) | 0, o = i, S = E, i = r, E = m, r = n, m = w, n = Q + et + _(w = G + tt | 0, G) | 0
      }
      this._al = this._al + w | 0, this._bl = this._bl + m | 0, this._cl = this._cl + E | 0, this._dl = this._dl + S | 0, this._el = this._el + k | 0, this._fl = this._fl + T | 0, this._gl = this._gl + x | 0, this._hl = this._hl + O | 0, this._ah = this._ah + n + _(this._al, w) | 0, this._bh = this._bh + r + _(this._bl, m) | 0, this._ch = this._ch + i + _(this._cl, E) | 0, this._dh = this._dh + o + _(this._dl, S) | 0, this._eh = this._eh + a + _(this._el, k) | 0, this._fh = this._fh + u + _(this._fl, T) | 0, this._gh = this._gh + b + _(this._gl, x) | 0, this._hh = this._hh + v + _(this._hl, O) | 0
    }, u.prototype._hash = function() {
      var t = o.allocUnsafe(64);

      function e(e, n, r) {
        t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
      }
      return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
    }, t.exports = u
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(35),
      o = n(21),
      s = n(1).Buffer,
      a = n(47),
      u = n(49),
      h = n(50),
      f = s.alloc(128);

    function c(t, e) {
      o.call(this, "digest"), "string" == typeof e && (e = s.from(e));
      var n = "sha512" === t || "sha384" === t ? 128 : 64;
      (this._alg = t, this._key = e, e.length > n) ? e = ("rmd160" === t ? new u : h(t)).update(e).digest(): e.length < n && (e = s.concat([e, f], n));
      for (var r = this._ipad = s.allocUnsafe(n), i = this._opad = s.allocUnsafe(n), a = 0; a < n; a++) r[a] = 54 ^ e[a], i[a] = 92 ^ e[a];
      this._hash = "rmd160" === t ? new u : h(t), this._hash.update(r)
    }
    r(c, o), c.prototype._update = function(t) {
      this._hash.update(t)
    }, c.prototype._final = function() {
      var t = this._hash.digest();
      return ("rmd160" === this._alg ? new u : h(this._alg)).update(this._opad).update(t).digest()
    }, t.exports = function(t, e) {
      return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new c("rmd160", e) : "md5" === t ? new i(a, e) : new c(t, e)
    }
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      e.a = function(e) {
        var n = window.crypto || window.msCrypto;
        if (!n || "function" != typeof n.getRandomValues) throw new Error("Unable to load crypto module. You may be on an older browser");
        if (e > 65536) throw new Error("Requested size of random bytes is too large");
        if (e < 1) throw new Error("Requested size must be more than 0");
        var r = new Uint8Array(e);
        return n.getRandomValues(r), t.from(r.buffer)
      }
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    "use strict";
    e.byteLength = function(t) {
      var e = h(t),
        n = e[0],
        r = e[1];
      return 3 * (n + r) / 4 - r
    }, e.toByteArray = function(t) {
      for (var e, n = h(t), r = n[0], s = n[1], a = new o(function(t, e, n) {
          return 3 * (e + n) / 4 - n
        }(0, r, s)), u = 0, f = s > 0 ? r - 4 : r, c = 0; c < f; c += 4) e = i[t.charCodeAt(c)] << 18 | i[t.charCodeAt(c + 1)] << 12 | i[t.charCodeAt(c + 2)] << 6 | i[t.charCodeAt(c + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;
      2 === s && (e = i[t.charCodeAt(c)] << 2 | i[t.charCodeAt(c + 1)] >> 4, a[u++] = 255 & e);
      1 === s && (e = i[t.charCodeAt(c)] << 10 | i[t.charCodeAt(c + 1)] << 4 | i[t.charCodeAt(c + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e);
      return a
    }, e.fromByteArray = function(t) {
      for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(f(t, s, s + 16383 > a ? a : s + 16383));
      1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
      return o.join("")
    };
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

    function h(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
    }

    function f(t, e, n) {
      for (var i, o, s = [], a = e; a < n; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
      return s.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
  }, function(t, e) {
    e.read = function(t, e, n, r, i) {
      var o, s, a = 8 * i - r - 1,
        u = (1 << a) - 1,
        h = u >> 1,
        f = -7,
        c = n ? i - 1 : 0,
        l = n ? -1 : 1,
        p = t[e + c];
      for (c += l, o = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; o = 256 * o + t[e + c], c += l, f -= 8);
      for (s = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; s = 256 * s + t[e + c], c += l, f -= 8);
      if (0 === o) o = 1 - h;
      else {
        if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
        s += Math.pow(2, r), o -= h
      }
      return (p ? -1 : 1) * s * Math.pow(2, o - r)
    }, e.write = function(t, e, n, r, i, o) {
      var s, a, u, h = 8 * o - i - 1,
        f = (1 << h) - 1,
        c = f >> 1,
        l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = r ? 0 : o - 1,
        d = r ? 1 : -1,
        g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) * u >= 2 && (s++, u /= 2), s + c >= f ? (a = 0, s = f) : s + c >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += d, a /= 256, i -= 8);
      for (s = s << i | a, h += i; h > 0; t[n + p] = 255 & s, p += d, s /= 256, h -= 8);
      t[n + p - d] |= 128 * g
    }
  }, function(t, e, n) {
    "use strict";
    (function(t) {
      var n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
      e.encode = function(e) {
        t.isBuffer(e) || (e = new t(e));
        for (var n, r, i = 0, o = 0, s = 0, a = 0, u = new t(8 * (n = e, r = Math.floor(n.length / 5), n.length % 5 == 0 ? r : r + 1)); i < e.length;) {
          var h = e[i];
          s > 3 ? (a = (a = h & 255 >> s) << (s = (s + 5) % 8) | (i + 1 < e.length ? e[i + 1] : 0) >> 8 - s, i++) : (a = h >> 8 - (s + 5) & 31, 0 === (s = (s + 5) % 8) && i++), u[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(a), o++
        }
        for (i = o; i < u.length; i++) u[i] = 61;
        return u
      }, e.decode = function(e) {
        var r, i = 0,
          o = 0,
          s = 0;
        t.isBuffer(e) || (e = new t(e));
        for (var a = new t(Math.ceil(5 * e.length / 8)), u = 0; u < e.length && 61 !== e[u]; u++) {
          var h = e[u] - 48;
          if (!(h < n.length)) throw new Error("Invalid input - it is not base32 encoded string");
          o = n[h], i <= 3 ? 0 === (i = (i + 5) % 8) ? (r |= o, a[s] = r, s++, r = 0) : r |= 255 & o << 8 - i : (r |= 255 & o >>> (i = (i + 5) % 8), a[s] = r, s++, r = 255 & o << 8 - i)
        }
        return a.slice(0, s)
      }
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    "use strict";
    var r = n(0),
      i = n(1).Buffer,
      o = n(21),
      s = i.alloc(128),
      a = 64;

    function u(t, e) {
      o.call(this, "digest"), "string" == typeof e && (e = i.from(e)), this._alg = t, this._key = e, e.length > a ? e = t(e) : e.length < a && (e = i.concat([e, s], a));
      for (var n = this._ipad = i.allocUnsafe(a), r = this._opad = i.allocUnsafe(a), u = 0; u < a; u++) n[u] = 54 ^ e[u], r[u] = 92 ^ e[u];
      this._hash = [n]
    }
    r(u, o), u.prototype._update = function(t) {
      this._hash.push(t)
    }, u.prototype._final = function() {
      var t = this._alg(i.concat(this._hash));
      return this._alg(i.concat([this._opad, t]))
    }, t.exports = u
  }, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = n(1).Buffer,
      i = n(38);
    t.exports = function() {
      function t() {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.head = null, this.tail = null, this.length = 0
      }
      return t.prototype.push = function(t) {
        var e = {
          data: t,
          next: null
        };
        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
      }, t.prototype.unshift = function(t) {
        var e = {
          data: t,
          next: this.head
        };
        0 === this.length && (this.tail = e), this.head = e, ++this.length
      }, t.prototype.shift = function() {
        if (0 !== this.length) {
          var t = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
        }
      }, t.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0
      }, t.prototype.join = function(t) {
        if (0 === this.length) return "";
        for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
        return n
      }, t.prototype.concat = function(t) {
        if (0 === this.length) return r.alloc(0);
        if (1 === this.length) return this.head.data;
        for (var e, n, i, o = r.allocUnsafe(t >>> 0), s = this.head, a = 0; s;) e = s.data, n = o, i = a, e.copy(n, i), a += s.data.length, s = s.next;
        return o
      }, t
    }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
      var t = i.inspect({
        length: this.length
      });
      return this.constructor.name + " " + t
    })
  }, function(t, e) {}, function(t, e, n) {
    (function(t) {
      var r = void 0 !== t && t || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;

      function o(t, e) {
        this._id = t, this._clearFn = e
      }
      e.setTimeout = function() {
        return new o(i.call(setTimeout, r, arguments), clearTimeout)
      }, e.setInterval = function() {
        return new o(i.call(setInterval, r, arguments), clearInterval)
      }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
      }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
        this._clearFn.call(r, this._id)
      }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
      }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
      }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
          t._onTimeout && t._onTimeout()
        }, e))
      }, n(40), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(5))
  }, function(t, e, n) {
    (function(t, e) {
      ! function(t, n) {
        "use strict";
        if (!t.setImmediate) {
          var r, i, o, s, a, u = 1,
            h = {},
            f = !1,
            c = t.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(t);
          l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
            e.nextTick(function() {
              d(t)
            })
          } : ! function() {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return t.onmessage = function() {
                e = !1
              }, t.postMessage("", "*"), t.onmessage = n, e
            }
          }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
            d(t.data)
          }, r = function(t) {
            o.port2.postMessage(t)
          }) : c && "onreadystatechange" in c.createElement("script") ? (i = c.documentElement, r = function(t) {
            var e = c.createElement("script");
            e.onreadystatechange = function() {
              d(t), e.onreadystatechange = null, i.removeChild(e), e = null
            }, i.appendChild(e)
          }) : r = function(t) {
            setTimeout(d, 0, t)
          } : (s = "setImmediate$" + Math.random() + "$", a = function(e) {
            e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && d(+e.data.slice(s.length))
          }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), r = function(e) {
            t.postMessage(s + e, "*")
          }), l.setImmediate = function(t) {
            "function" != typeof t && (t = new Function("" + t));
            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
            var i = {
              callback: t,
              args: e
            };
            return h[u] = i, r(u), u++
          }, l.clearImmediate = p
        }

        function p(t) {
          delete h[t]
        }

        function d(t) {
          if (f) setTimeout(d, 0, t);
          else {
            var e = h[t];
            if (e) {
              f = !0;
              try {
                ! function(t) {
                  var e = t.callback,
                    r = t.args;
                  switch (r.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(r[0]);
                      break;
                    case 2:
                      e(r[0], r[1]);
                      break;
                    case 3:
                      e(r[0], r[1], r[2]);
                      break;
                    default:
                      e.apply(n, r)
                  }
                }(e)
              } finally {
                p(t), f = !1
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(5), n(8))
  }, function(t, e, n) {
    (function(e) {
      function n(t) {
        try {
          if (!e.localStorage) return !1
        } catch (t) {
          return !1
        }
        var n = e.localStorage[t];
        return null != n && "true" === String(n).toLowerCase()
      }
      t.exports = function(t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function() {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
          }
          return t.apply(this, arguments)
        }
      }
    }).call(this, n(5))
  }, function(t, e, n) {
    "use strict";
    t.exports = o;
    var r = n(26),
      i = n(7);

    function o(t) {
      if (!(this instanceof o)) return new o(t);
      r.call(this, t)
    }
    i.inherits = n(0), i.inherits(o, r), o.prototype._transform = function(t, e, n) {
      n(null, t)
    }
  }, function(t, e, n) {
    t.exports = n(17)
  }, function(t, e, n) {
    t.exports = n(4)
  }, function(t, e, n) {
    t.exports = n(16).Transform
  }, function(t, e, n) {
    t.exports = n(16).PassThrough
  }, function(t, e, n) {
    var r = n(48);
    t.exports = function(t) {
      return (new r).update(t).digest()
    }
  }, function(t, e, n) {
    "use strict";
    (function(e) {
      var r = n(0),
        i = n(27),
        o = new Array(16);

      function s() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
      }

      function a(t, e) {
        return t << e | t >>> 32 - e
      }

      function u(t, e, n, r, i, o, s) {
        return a(t + (e & n | ~e & r) + i + o | 0, s) + e | 0
      }

      function h(t, e, n, r, i, o, s) {
        return a(t + (e & r | n & ~r) + i + o | 0, s) + e | 0
      }

      function f(t, e, n, r, i, o, s) {
        return a(t + (e ^ n ^ r) + i + o | 0, s) + e | 0
      }

      function c(t, e, n, r, i, o, s) {
        return a(t + (n ^ (e | ~r)) + i + o | 0, s) + e | 0
      }
      r(s, i), s.prototype._update = function() {
        for (var t = o, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
        var n = this._a,
          r = this._b,
          i = this._c,
          s = this._d;
        n = u(n, r, i, s, t[0], 3614090360, 7), s = u(s, n, r, i, t[1], 3905402710, 12), i = u(i, s, n, r, t[2], 606105819, 17), r = u(r, i, s, n, t[3], 3250441966, 22), n = u(n, r, i, s, t[4], 4118548399, 7), s = u(s, n, r, i, t[5], 1200080426, 12), i = u(i, s, n, r, t[6], 2821735955, 17), r = u(r, i, s, n, t[7], 4249261313, 22), n = u(n, r, i, s, t[8], 1770035416, 7), s = u(s, n, r, i, t[9], 2336552879, 12), i = u(i, s, n, r, t[10], 4294925233, 17), r = u(r, i, s, n, t[11], 2304563134, 22), n = u(n, r, i, s, t[12], 1804603682, 7), s = u(s, n, r, i, t[13], 4254626195, 12), i = u(i, s, n, r, t[14], 2792965006, 17), n = h(n, r = u(r, i, s, n, t[15], 1236535329, 22), i, s, t[1], 4129170786, 5), s = h(s, n, r, i, t[6], 3225465664, 9), i = h(i, s, n, r, t[11], 643717713, 14), r = h(r, i, s, n, t[0], 3921069994, 20), n = h(n, r, i, s, t[5], 3593408605, 5), s = h(s, n, r, i, t[10], 38016083, 9), i = h(i, s, n, r, t[15], 3634488961, 14), r = h(r, i, s, n, t[4], 3889429448, 20), n = h(n, r, i, s, t[9], 568446438, 5), s = h(s, n, r, i, t[14], 3275163606, 9), i = h(i, s, n, r, t[3], 4107603335, 14), r = h(r, i, s, n, t[8], 1163531501, 20), n = h(n, r, i, s, t[13], 2850285829, 5), s = h(s, n, r, i, t[2], 4243563512, 9), i = h(i, s, n, r, t[7], 1735328473, 14), n = f(n, r = h(r, i, s, n, t[12], 2368359562, 20), i, s, t[5], 4294588738, 4), s = f(s, n, r, i, t[8], 2272392833, 11), i = f(i, s, n, r, t[11], 1839030562, 16), r = f(r, i, s, n, t[14], 4259657740, 23), n = f(n, r, i, s, t[1], 2763975236, 4), s = f(s, n, r, i, t[4], 1272893353, 11), i = f(i, s, n, r, t[7], 4139469664, 16), r = f(r, i, s, n, t[10], 3200236656, 23), n = f(n, r, i, s, t[13], 681279174, 4), s = f(s, n, r, i, t[0], 3936430074, 11), i = f(i, s, n, r, t[3], 3572445317, 16), r = f(r, i, s, n, t[6], 76029189, 23), n = f(n, r, i, s, t[9], 3654602809, 4), s = f(s, n, r, i, t[12], 3873151461, 11), i = f(i, s, n, r, t[15], 530742520, 16), n = c(n, r = f(r, i, s, n, t[2], 3299628645, 23), i, s, t[0], 4096336452, 6), s = c(s, n, r, i, t[7], 1126891415, 10), i = c(i, s, n, r, t[14], 2878612391, 15), r = c(r, i, s, n, t[5], 4237533241, 21), n = c(n, r, i, s, t[12], 1700485571, 6), s = c(s, n, r, i, t[3], 2399980690, 10), i = c(i, s, n, r, t[10], 4293915773, 15), r = c(r, i, s, n, t[1], 2240044497, 21), n = c(n, r, i, s, t[8], 1873313359, 6), s = c(s, n, r, i, t[15], 4264355552, 10), i = c(i, s, n, r, t[6], 2734768916, 15), r = c(r, i, s, n, t[13], 1309151649, 21), n = c(n, r, i, s, t[4], 4149444226, 6), s = c(s, n, r, i, t[11], 3174756917, 10), i = c(i, s, n, r, t[2], 718787259, 15), r = c(r, i, s, n, t[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + s | 0
      }, s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var t = new e(16);
        return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
      }, t.exports = s
    }).call(this, n(3).Buffer)
  }, function(t, e, n) {
    "use strict";
    var r = n(3).Buffer,
      i = n(0),
      o = n(27),
      s = new Array(16),
      a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
      u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
      h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
      f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
      c = [0, 1518500249, 1859775393, 2400959708, 2840853838],
      l = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function p() {
      o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }

    function d(t, e) {
      return t << e | t >>> 32 - e
    }

    function g(t, e, n, r, i, o, s, a) {
      return d(t + (e ^ n ^ r) + o + s | 0, a) + i | 0
    }

    function y(t, e, n, r, i, o, s, a) {
      return d(t + (e & n | ~e & r) + o + s | 0, a) + i | 0
    }

    function _(t, e, n, r, i, o, s, a) {
      return d(t + ((e | ~n) ^ r) + o + s | 0, a) + i | 0
    }

    function b(t, e, n, r, i, o, s, a) {
      return d(t + (e & r | n & ~r) + o + s | 0, a) + i | 0
    }

    function v(t, e, n, r, i, o, s, a) {
      return d(t + (e ^ (n | ~r)) + o + s | 0, a) + i | 0
    }
    i(p, o), p.prototype._update = function() {
      for (var t = s, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
      for (var n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, p = 0 | this._e, w = 0 | this._a, m = 0 | this._b, E = 0 | this._c, S = 0 | this._d, k = 0 | this._e, T = 0; T < 80; T += 1) {
        var x, O;
        T < 16 ? (x = g(n, r, i, o, p, t[a[T]], c[0], h[T]), O = v(w, m, E, S, k, t[u[T]], l[0], f[T])) : T < 32 ? (x = y(n, r, i, o, p, t[a[T]], c[1], h[T]), O = b(w, m, E, S, k, t[u[T]], l[1], f[T])) : T < 48 ? (x = _(n, r, i, o, p, t[a[T]], c[2], h[T]), O = _(w, m, E, S, k, t[u[T]], l[2], f[T])) : T < 64 ? (x = b(n, r, i, o, p, t[a[T]], c[3], h[T]), O = y(w, m, E, S, k, t[u[T]], l[3], f[T])) : (x = v(n, r, i, o, p, t[a[T]], c[4], h[T]), O = g(w, m, E, S, k, t[u[T]], l[4], f[T])), n = p, p = o, o = d(i, 10), i = r, r = x, w = k, k = S, S = d(E, 10), E = m, m = O
      }
      var A = this._b + i + S | 0;
      this._b = this._c + o + k | 0, this._c = this._d + p + w | 0, this._d = this._e + n + m | 0, this._e = this._a + r + E | 0, this._a = A
    }, p.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var t = r.alloc ? r.alloc(20) : new r(20);
      return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
    }, t.exports = p
  }, function(t, e, n) {
    (e = t.exports = function(t) {
      t = t.toLowerCase();
      var n = e[t];
      if (!n) throw new Error(t + " is not supported (we accept pull requests)");
      return new n
    }).sha = n(51), e.sha1 = n(52), e.sha224 = n(53), e.sha256 = n(28), e.sha384 = n(54), e.sha512 = n(29)
  }, function(t, e, n) {
    var r = n(0),
      i = n(6),
      o = n(1).Buffer,
      s = [1518500249, 1859775393, -1894007588, -899497514],
      a = new Array(80);

    function u() {
      this.init(), this._w = a, i.call(this, 64, 56)
    }

    function h(t) {
      return t << 30 | t >>> 2
    }

    function f(t, e, n, r) {
      return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }
    r(u, i), u.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, u.prototype._update = function(t) {
      for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, c = 0; c < 16; ++c) n[c] = t.readInt32BE(4 * c);
      for (; c < 80; ++c) n[c] = n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16];
      for (var l = 0; l < 80; ++l) {
        var p = ~~(l / 20),
          d = 0 | ((e = r) << 5 | e >>> 27) + f(p, i, o, a) + u + n[l] + s[p];
        u = a, a = o, o = h(i), i = r, r = d
      }
      this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0
    }, u.prototype._hash = function() {
      var t = o.allocUnsafe(20);
      return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = u
  }, function(t, e, n) {
    var r = n(0),
      i = n(6),
      o = n(1).Buffer,
      s = [1518500249, 1859775393, -1894007588, -899497514],
      a = new Array(80);

    function u() {
      this.init(), this._w = a, i.call(this, 64, 56)
    }

    function h(t) {
      return t << 5 | t >>> 27
    }

    function f(t) {
      return t << 30 | t >>> 2
    }

    function c(t, e, n, r) {
      return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }
    r(u, i), u.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, u.prototype._update = function(t) {
      for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, u = 0 | this._e, l = 0; l < 16; ++l) n[l] = t.readInt32BE(4 * l);
      for (; l < 80; ++l) n[l] = (e = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16]) << 1 | e >>> 31;
      for (var p = 0; p < 80; ++p) {
        var d = ~~(p / 20),
          g = h(r) + c(d, i, o, a) + u + n[p] + s[d] | 0;
        u = a, a = o, o = f(i), i = r, r = g
      }
      this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0
    }, u.prototype._hash = function() {
      var t = o.allocUnsafe(20);
      return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
    }, t.exports = u
  }, function(t, e, n) {
    var r = n(0),
      i = n(28),
      o = n(6),
      s = n(1).Buffer,
      a = new Array(64);

    function u() {
      this.init(), this._w = a, o.call(this, 64, 56)
    }
    r(u, i), u.prototype.init = function() {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, u.prototype._hash = function() {
      var t = s.allocUnsafe(28);
      return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
    }, t.exports = u
  }, function(t, e, n) {
    var r = n(0),
      i = n(29),
      o = n(6),
      s = n(1).Buffer,
      a = new Array(160);

    function u() {
      this.init(), this._w = a, o.call(this, 128, 112)
    }
    r(u, i), u.prototype.init = function() {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, u.prototype._hash = function() {
      var t = s.allocUnsafe(48);

      function e(e, n, r) {
        t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
      }
      return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
    }, t.exports = u
  }, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2),
      i = n(10);
    var o = function(t, e, n) {
      if (null == e) return "";
      if ("number" != typeof n.digits) throw new Error("Expecting options.digits to be a number");
      var o = Object(i.a)(t, e, n),
        s = 15 & o[o.length - 1],
        a = ((127 & o[s]) << 24 | (255 & o[s + 1]) << 16 | (255 & o[s + 2]) << 8 | 255 & o[s + 3]) % Math.pow(10, n.digits);
      return a = Object(r.c)(a, n.digits)
    };
    var s = function(t, e, n, i) {
        var s = o(e, n, i);
        return !(s.length < 1) && Object(r.b)(t, s)
      },
      a = (n(11), n(12));
    var u = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object.assign({
        algorithm: "sha1",
        createHmacSecret: a.a,
        crypto: null,
        digits: 6,
        encoding: "ascii"
      }, t)
    };
    var h = function(t, e) {
      return Math.floor(t / e / 1e3)
    };
    var f = function(t, e) {
      if ("number" != typeof e.epoch) throw new Error("Expecting options.epoch to be a number");
      if ("number" != typeof e.step) throw new Error("Expecting options.step to be a number");
      var n = h(e.epoch, e.step);
      return o(t, n, e)
    };
    var c = function(t, e, n) {
      var i = f(e, n || {});
      return !(i.length < 1) && Object(r.b)(t, i)
    };
    var l = function(t, e, n) {
        var r = Object.assign({}, n),
          i = function(t) {
            var e = Array.isArray(t.window) ? t.window : [parseInt(t.window, 10), parseInt(t.window, 10)];
            if (!Number.isInteger(e[0]) || !Number.isInteger(e[1])) throw new Error("Expecting options.window to be an integer or an array of integers");
            return e
          }(r),
          o = function(t, e, n) {
            var r = 1e3 * n.step,
              i = n.epoch;
            return function(o, s, a) {
              for (var u = s; u <= a; u++)
                if (n.epoch = i + o * u * r, c(t, e, n)) return 0 === u ? 0 : o * u;
              return null
            }
          }(t, e, r),
          s = o(-1, 0, i[0]);
        return null !== s ? s : o(1, 1, i[1])
      },
      p = {
        createHmacSecret: n(13).a,
        epoch: null,
        step: 30,
        window: 0
      };
    var d = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = Object.assign(u(), p, t);
      return e.epoch = "number" == typeof e.epoch ? 1e3 * e.epoch : Date.now(), e
    };
    var g = function(t, e) {
      return Math.floor(t / 1e3) % e
    };
    var y = function(t, e) {
      return e - g(t, e)
    };

    function _(t) {
      return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function b(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }
    var v = function() {
      function t() {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this._defaultOptions = {}, this._options = this._defaultOptions
      }
      var e, n, r;
      return e = t, (n = [{
        key: "getClass",
        value: function() {
          return t
        }
      }, {
        key: "resetOptions",
        value: function() {
          return this._options = this.defaultOptions, this
        }
      }, {
        key: "generate",
        value: function(t, e) {
          var n = this.optionsAll;
          return o(t || n.secret, e, n)
        }
      }, {
        key: "check",
        value: function(t, e, n) {
          var r = this.optionsAll;
          return s(t, e || r.secret, n, r)
        }
      }, {
        key: "verify",
        value: function(t) {
          return "object" === _(t) && null != t && this.check(t.token, t.secret, t.counter)
        }
      }, {
        key: "defaultOptions",
        set: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t && (this._defaultOptions = Object.assign({}, this.defaultOptions, t), this.options = t)
        },
        get: function() {
          return this._defaultOptions
        }
      }, {
        key: "options",
        set: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t && (this._options = Object.assign({}, this._options, t))
        },
        get: function() {
          return Object.assign({}, this._options)
        }
      }, {
        key: "optionsAll",
        get: function() {
          return u(this._options)
        }
      }]) && b(e.prototype, n), r && b(e, r), t
    }();
    v.prototype.HOTP = v;
    var w = new v;

    function m(t) {
      return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function E(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    function S(t, e) {
      return !e || "object" !== m(e) && "function" != typeof e ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function k(t) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function T(t, e) {
      return (T = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }
    var x = w.HOTP,
      O = function(t) {
        function e() {
          var t;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = S(this, k(e).call(this)))._defaultOptions = {
            epoch: null,
            step: 30,
            window: 0
          }, t._options = t._defaultOptions, t
        }
        var n, r, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && T(t, e)
        }(e, x), n = e, (r = [{
          key: "getClass",
          value: function() {
            return e
          }
        }, {
          key: "generate",
          value: function(t) {
            var e = this.optionsAll;
            return f(t || e.secret, e)
          }
        }, {
          key: "check",
          value: function(t, e) {
            var n = this.checkDelta(t, e);
            return Number.isInteger(n)
          }
        }, {
          key: "checkDelta",
          value: function(t, e) {
            var n = this.optionsAll;
            return l(t, e || n.secret, n)
          }
        }, {
          key: "verify",
          value: function(t) {
            return "object" === m(t) && null != t && this.check(t.token, t.secret)
          }
        }, {
          key: "timeRemaining",
          value: function() {
            var t = this.optionsAll;
            return y(t.epoch, t.step)
          }
        }, {
          key: "timeUsed",
          value: function() {
            var t = this.optionsAll;
            return g(t.epoch, t.step)
          }
        }, {
          key: "optionsAll",
          get: function() {
            return d(this._options)
          }
        }]) && E(n.prototype, r), i && E(n, i), e
      }();
    O.prototype.TOTP = O;
    var A = new O,
      R = n(14),
      B = n.n(R);
    var I = function(t) {
      return B.a.decode(t).toString("hex")
    };
    var L = function(t, e, n) {
      return l(t, I(e), n)
    };
    var M = function(t, e, n) {
      var r = L(t, e, n);
      return Number.isInteger(r)
    };
    var j = function(t) {
        return B.a.encode(t).toString().replace(/=/g, "")
      },
      P = "{service}:{user}?secret={secret}&issuer={service}";
    var C = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "user",
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "service",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return "otpauth://totp/" + P.replace("{user}", encodeURIComponent(t)).replace("{secret}", n).replace(/{service}/g, encodeURIComponent(e))
    };
    var U = function(t, e) {
      return f(I(t), e)
    };

    function D(t) {
      return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function N(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    function Y(t, e) {
      return !e || "object" !== D(e) && "function" != typeof e ? function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function W(t) {
      return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function F(t, e) {
      return (F = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }
    var q = A.TOTP,
      z = function(t) {
        function e() {
          var t;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = Y(this, W(e).call(this)))._defaultOptions = {
            encoding: "hex",
            epoch: null,
            step: 30,
            window: 0
          }, t._options = t._defaultOptions, t
        }
        var n, i, o;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && F(t, e)
        }(e, q), n = e, (i = [{
          key: "getClass",
          value: function() {
            return e
          }
        }, {
          key: "encode",
          value: function() {
            return j.apply(void 0, arguments)
          }
        }, {
          key: "decode",
          value: function() {
            return I.apply(void 0, arguments)
          }
        }, {
          key: "keyuri",
          value: function() {
            return C.apply(void 0, arguments)
          }
        }, {
          key: "generateSecret",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
            if (!t) return "";
            var e = Object(r.e)(t, this.optionsAll);
            return j(e)
          }
        }, {
          key: "generate",
          value: function(t) {
            var e = this.optionsAll;
            return U(t || e.secret, e)
          }
        }, {
          key: "check",
          value: function(t, e) {
            var n = this.optionsAll;
            return M(t, e || n.secret, n)
          }
        }, {
          key: "checkDelta",
          value: function(t, e) {
            var n = this.optionsAll;
            return L(t, e || n.secret, n)
          }
        }]) && N(n.prototype, i), o && N(n, o), e
      }();
    z.prototype.Authenticator = z, z.prototype.utils = {
      check: M,
      checkDelta: L,
      decodeKey: I,
      encodeKey: j,
      keyuri: C,
      token: U
    };
    var H = new z,
      K = n(30),
      V = n.n(K),
      X = n(31),
      $ = {
        createHmac: V.a,
        randomBytes: X.a
      };
    n.d(e, "authenticator", function() {
      return H
    }), n.d(e, "hotp", function() {
      return w
    }), n.d(e, "totp", function() {
      return A
    }), H.defaultOptions = {
      crypto: $
    }, w.defaultOptions = {
      crypto: $
    }, A.defaultOptions = {
      crypto: $
    }
  }])
});
//# sourceMappingURL=otplib-browser.js.map
