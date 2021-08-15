import { vertex, fragment } from "./shader.js";

!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 9));
})([
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var i = n(4),
      r = n(7),
      a = new s(),
      o = new r.a();
    function s(e, t, n) {
      (this.x = e || 0), (this.y = t || 0), (this.z = n || 0);
    }
    Object.assign(s.prototype, {
      isVector3: !0,
      set: function (e, t, n) {
        return (this.x = e), (this.y = t), (this.z = n), this;
      },
      setScalar: function (e) {
        return (this.x = e), (this.y = e), (this.z = e), this;
      },
      setX: function (e) {
        return (this.x = e), this;
      },
      setY: function (e) {
        return (this.y = e), this;
      },
      setZ: function (e) {
        return (this.z = e), this;
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          case 2:
            this.z = t;
            break;
          default:
            throw new Error("index is out of range: " + e);
        }
        return this;
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("index is out of range: " + e);
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y, this.z);
      },
      copy: function (e) {
        return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
      },
      add: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            ),
            this.addVectors(e, t))
          : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
      },
      addScalar: function (e) {
        return (this.x += e), (this.y += e), (this.z += e), this;
      },
      addVectors: function (e, t) {
        return (
          (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
        );
      },
      addScaledVector: function (e, t) {
        return (
          (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this
        );
      },
      sub: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            ),
            this.subVectors(e, t))
          : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
      },
      subScalar: function (e) {
        return (this.x -= e), (this.y -= e), (this.z -= e), this;
      },
      subVectors: function (e, t) {
        return (
          (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
        );
      },
      multiply: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
            ),
            this.multiplyVectors(e, t))
          : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
      },
      multiplyScalar: function (e) {
        return (this.x *= e), (this.y *= e), (this.z *= e), this;
      },
      multiplyVectors: function (e, t) {
        return (
          (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
        );
      },
      applyEuler: function (e) {
        return (
          (e && e.isEuler) ||
            console.error(
              "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
            ),
          this.applyQuaternion(o.setFromEuler(e))
        );
      },
      applyAxisAngle: function (e, t) {
        return this.applyQuaternion(o.setFromAxisAngle(e, t));
      },
      applyMatrix3: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements;
        return (
          (this.x = r[0] * t + r[3] * n + r[6] * i),
          (this.y = r[1] * t + r[4] * n + r[7] * i),
          (this.z = r[2] * t + r[5] * n + r[8] * i),
          this
        );
      },
      applyNormalMatrix: function (e) {
        return this.applyMatrix3(e).normalize();
      },
      applyMatrix4: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements,
          a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return (
          (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
          (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
          (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
          this
        );
      },
      applyQuaternion: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.x,
          a = e.y,
          o = e.z,
          s = e.w,
          l = s * t + a * i - o * n,
          c = s * n + o * t - r * i,
          u = s * i + r * n - a * t,
          h = -r * t - a * n - o * i;
        return (
          (this.x = l * s + h * -r + c * -o - u * -a),
          (this.y = c * s + h * -a + u * -r - l * -o),
          (this.z = u * s + h * -o + l * -a - c * -r),
          this
        );
      },
      project: function (e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
          e.projectionMatrix
        );
      },
      unproject: function (e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
          e.matrixWorld
        );
      },
      transformDirection: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements;
        return (
          (this.x = r[0] * t + r[4] * n + r[8] * i),
          (this.y = r[1] * t + r[5] * n + r[9] * i),
          (this.z = r[2] * t + r[6] * n + r[10] * i),
          this.normalize()
        );
      },
      divide: function (e) {
        return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e);
      },
      min: function (e) {
        return (
          (this.x = Math.min(this.x, e.x)),
          (this.y = Math.min(this.y, e.y)),
          (this.z = Math.min(this.z, e.z)),
          this
        );
      },
      max: function (e) {
        return (
          (this.x = Math.max(this.x, e.x)),
          (this.y = Math.max(this.y, e.y)),
          (this.z = Math.max(this.z, e.z)),
          this
        );
      },
      clamp: function (e, t) {
        return (
          (this.x = Math.max(e.x, Math.min(t.x, this.x))),
          (this.y = Math.max(e.y, Math.min(t.y, this.y))),
          (this.z = Math.max(e.z, Math.min(t.z, this.z))),
          this
        );
      },
      clampScalar: function (e, t) {
        return (
          (this.x = Math.max(e, Math.min(t, this.x))),
          (this.y = Math.max(e, Math.min(t, this.y))),
          (this.z = Math.max(e, Math.min(t, this.z))),
          this
        );
      },
      clampLength: function (e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(
          Math.max(e, Math.min(t, n))
        );
      },
      floor: function () {
        return (
          (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          (this.z = Math.floor(this.z)),
          this
        );
      },
      ceil: function () {
        return (
          (this.x = Math.ceil(this.x)),
          (this.y = Math.ceil(this.y)),
          (this.z = Math.ceil(this.z)),
          this
        );
      },
      round: function () {
        return (
          (this.x = Math.round(this.x)),
          (this.y = Math.round(this.y)),
          (this.z = Math.round(this.z)),
          this
        );
      },
      roundToZero: function () {
        return (
          (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
          (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
          (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
          this
        );
      },
      negate: function () {
        return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
      },
      lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
      manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1);
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e);
      },
      lerp: function (e, t) {
        return (
          (this.x += (e.x - this.x) * t),
          (this.y += (e.y - this.y) * t),
          (this.z += (e.z - this.z) * t),
          this
        );
      },
      lerpVectors: function (e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e);
      },
      cross: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
            ),
            this.crossVectors(e, t))
          : this.crossVectors(this, e);
      },
      crossVectors: function (e, t) {
        var n = e.x,
          i = e.y,
          r = e.z,
          a = t.x,
          o = t.y,
          s = t.z;
        return (
          (this.x = i * s - r * o),
          (this.y = r * a - n * s),
          (this.z = n * o - i * a),
          this
        );
      },
      projectOnVector: function (e) {
        var t = e.dot(this) / e.lengthSq();
        return this.copy(e).multiplyScalar(t);
      },
      projectOnPlane: function (e) {
        return a.copy(this).projectOnVector(e), this.sub(a);
      },
      reflect: function (e) {
        return this.sub(a.copy(e).multiplyScalar(2 * this.dot(e)));
      },
      angleTo: function (e) {
        var t = Math.sqrt(this.lengthSq() * e.lengthSq());
        0 === t &&
          console.error(
            "THREE.Vector3: angleTo() can't handle zero length vectors."
          );
        var n = this.dot(e) / t;
        return Math.acos(i.a.clamp(n, -1, 1));
      },
      distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e));
      },
      distanceToSquared: function (e) {
        var t = this.x - e.x,
          n = this.y - e.y,
          i = this.z - e.z;
        return t * t + n * n + i * i;
      },
      manhattanDistanceTo: function (e) {
        return (
          Math.abs(this.x - e.x) +
          Math.abs(this.y - e.y) +
          Math.abs(this.z - e.z)
        );
      },
      setFromSpherical: function (e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
      },
      setFromSphericalCoords: function (e, t, n) {
        var i = Math.sin(t) * e;
        return (
          (this.x = i * Math.sin(n)),
          (this.y = Math.cos(t) * e),
          (this.z = i * Math.cos(n)),
          this
        );
      },
      setFromCylindrical: function (e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
      },
      setFromCylindricalCoords: function (e, t, n) {
        return (
          (this.x = e * Math.sin(t)),
          (this.y = n),
          (this.z = e * Math.cos(t)),
          this
        );
      },
      setFromMatrixPosition: function (e) {
        var t = e.elements;
        return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
      },
      setFromMatrixScale: function (e) {
        var t = this.setFromMatrixColumn(e, 0).length(),
          n = this.setFromMatrixColumn(e, 1).length(),
          i = this.setFromMatrixColumn(e, 2).length();
        return (this.x = t), (this.y = n), (this.z = i), this;
      },
      setFromMatrixColumn: function (e, t) {
        return this.fromArray(e.elements, 4 * t);
      },
      equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z;
      },
      fromArray: function (e, t) {
        return (
          void 0 === t && (t = 0),
          (this.x = e[t]),
          (this.y = e[t + 1]),
          (this.z = e[t + 2]),
          this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this.x),
          (e[t + 1] = this.y),
          (e[t + 2] = this.z),
          e
        );
      },
      fromBufferAttribute: function (e, t, n) {
        return (
          void 0 !== n &&
            console.warn(
              "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
            ),
          (this.x = e.getX(t)),
          (this.y = e.getY(t)),
          (this.z = e.getZ(t)),
          this
        );
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var i = n(3),
      r = n(2),
      a = n(6),
      o = {
        common: {
          diffuse: { value: new i.a(15658734) },
          opacity: { value: 1 },
          map: { value: null },
          uvTransform: { value: new a.a() },
          uv2Transform: { value: new a.a() },
          alphaMap: { value: null },
        },
        specularmap: { specularMap: { value: null } },
        envmap: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          reflectivity: { value: 1 },
          refractionRatio: { value: 0.98 },
          maxMipLevel: { value: 0 },
        },
        aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
        lightmap: {
          lightMap: { value: null },
          lightMapIntensity: { value: 1 },
        },
        emissivemap: { emissiveMap: { value: null } },
        bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
        normalmap: {
          normalMap: { value: null },
          normalScale: { value: new r.a(1, 1) },
        },
        displacementmap: {
          displacementMap: { value: null },
          displacementScale: { value: 1 },
          displacementBias: { value: 0 },
        },
        roughnessmap: { roughnessMap: { value: null } },
        metalnessmap: { metalnessMap: { value: null } },
        gradientmap: { gradientMap: { value: null } },
        fog: {
          fogDensity: { value: 25e-5 },
          fogNear: { value: 1 },
          fogFar: { value: 2e3 },
          fogColor: { value: new i.a(16777215) },
        },
        lights: {
          ambientLightColor: { value: [] },
          lightProbe: { value: [] },
          directionalLights: {
            value: [],
            properties: {
              direction: {},
              color: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {},
            },
          },
          directionalShadowMap: { value: [] },
          directionalShadowMatrix: { value: [] },
          spotLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              direction: {},
              distance: {},
              coneCos: {},
              penumbraCos: {},
              decay: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {},
            },
          },
          spotShadowMap: { value: [] },
          spotShadowMatrix: { value: [] },
          pointLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              decay: {},
              distance: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {},
              shadowCameraNear: {},
              shadowCameraFar: {},
            },
          },
          pointShadowMap: { value: [] },
          pointShadowMatrix: { value: [] },
          hemisphereLights: {
            value: [],
            properties: { direction: {}, skyColor: {}, groundColor: {} },
          },
          rectAreaLights: {
            value: [],
            properties: { color: {}, position: {}, width: {}, height: {} },
          },
        },
        points: {
          diffuse: { value: new i.a(15658734) },
          opacity: { value: 1 },
          size: { value: 1 },
          scale: { value: 1 },
          map: { value: null },
          alphaMap: { value: null },
          uvTransform: { value: new a.a() },
        },
        sprite: {
          diffuse: { value: new i.a(15658734) },
          opacity: { value: 1 },
          center: { value: new r.a(0.5, 0.5) },
          rotation: { value: 0 },
          map: { value: null },
          alphaMap: { value: null },
          uvTransform: { value: new a.a() },
        },
      };
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      (this.x = e || 0), (this.y = t || 0);
    }
    n.d(t, "a", function () {
      return i;
    }),
      Object.defineProperties(i.prototype, {
        width: {
          get: function () {
            return this.x;
          },
          set: function (e) {
            this.x = e;
          },
        },
        height: {
          get: function () {
            return this.y;
          },
          set: function (e) {
            this.y = e;
          },
        },
      }),
      Object.assign(i.prototype, {
        isVector2: !0,
        set: function (e, t) {
          return (this.x = e), (this.y = t), this;
        },
        setScalar: function (e) {
          return (this.x = e), (this.y = e), this;
        },
        setX: function (e) {
          return (this.x = e), this;
        },
        setY: function (e) {
          return (this.y = e), this;
        },
        setComponent: function (e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            default:
              throw new Error("index is out of range: " + e);
          }
          return this;
        },
        getComponent: function (e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + e);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y);
        },
        copy: function (e) {
          return (this.x = e.x), (this.y = e.y), this;
        },
        add: function (e, t) {
          return void 0 !== t
            ? (console.warn(
                "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(e, t))
            : ((this.x += e.x), (this.y += e.y), this);
        },
        addScalar: function (e) {
          return (this.x += e), (this.y += e), this;
        },
        addVectors: function (e, t) {
          return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
        },
        addScaledVector: function (e, t) {
          return (this.x += e.x * t), (this.y += e.y * t), this;
        },
        sub: function (e, t) {
          return void 0 !== t
            ? (console.warn(
                "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(e, t))
            : ((this.x -= e.x), (this.y -= e.y), this);
        },
        subScalar: function (e) {
          return (this.x -= e), (this.y -= e), this;
        },
        subVectors: function (e, t) {
          return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
        },
        multiply: function (e) {
          return (this.x *= e.x), (this.y *= e.y), this;
        },
        multiplyScalar: function (e) {
          return (this.x *= e), (this.y *= e), this;
        },
        divide: function (e) {
          return (this.x /= e.x), (this.y /= e.y), this;
        },
        divideScalar: function (e) {
          return this.multiplyScalar(1 / e);
        },
        applyMatrix3: function (e) {
          var t = this.x,
            n = this.y,
            i = e.elements;
          return (
            (this.x = i[0] * t + i[3] * n + i[6]),
            (this.y = i[1] * t + i[4] * n + i[7]),
            this
          );
        },
        min: function (e) {
          return (
            (this.x = Math.min(this.x, e.x)),
            (this.y = Math.min(this.y, e.y)),
            this
          );
        },
        max: function (e) {
          return (
            (this.x = Math.max(this.x, e.x)),
            (this.y = Math.max(this.y, e.y)),
            this
          );
        },
        clamp: function (e, t) {
          return (
            (this.x = Math.max(e.x, Math.min(t.x, this.x))),
            (this.y = Math.max(e.y, Math.min(t.y, this.y))),
            this
          );
        },
        clampScalar: function (e, t) {
          return (
            (this.x = Math.max(e, Math.min(t, this.x))),
            (this.y = Math.max(e, Math.min(t, this.y))),
            this
          );
        },
        clampLength: function (e, t) {
          var n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(e, Math.min(t, n))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        },
        negate: function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y;
        },
        cross: function (e) {
          return this.x * e.y - this.y * e.x;
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y;
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        manhattanLength: function () {
          return Math.abs(this.x) + Math.abs(this.y);
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        angle: function () {
          var e = Math.atan2(this.y, this.x);
          return e < 0 && (e += 2 * Math.PI), e;
        },
        distanceTo: function (e) {
          return Math.sqrt(this.distanceToSquared(e));
        },
        distanceToSquared: function (e) {
          var t = this.x - e.x,
            n = this.y - e.y;
          return t * t + n * n;
        },
        manhattanDistanceTo: function (e) {
          return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
        },
        setLength: function (e) {
          return this.normalize().multiplyScalar(e);
        },
        lerp: function (e, t) {
          return (
            (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
          );
        },
        lerpVectors: function (e, t, n) {
          return this.subVectors(t, e).multiplyScalar(n).add(e);
        },
        equals: function (e) {
          return e.x === this.x && e.y === this.y;
        },
        fromArray: function (e, t) {
          return (
            void 0 === t && (t = 0), (this.x = e[t]), (this.y = e[t + 1]), this
          );
        },
        toArray: function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this.x),
            (e[t + 1] = this.y),
            e
          );
        },
        fromBufferAttribute: function (e, t, n) {
          return (
            void 0 !== n &&
              console.warn(
                "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = e.getX(t)),
            (this.y = e.getY(t)),
            this
          );
        },
        rotateAround: function (e, t) {
          var n = Math.cos(t),
            i = Math.sin(t),
            r = this.x - e.x,
            a = this.y - e.y;
          return (
            (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this
          );
        },
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var i = n(4),
      r = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      },
      a = { h: 0, s: 0, l: 0 },
      o = { h: 0, s: 0, l: 0 };
    function s(e, t, n) {
      return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n);
    }
    function l(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + 6 * (t - e) * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + 6 * (t - e) * (2 / 3 - n)
          : e
      );
    }
    function c(e) {
      return e < 0.04045
        ? 0.0773993808 * e
        : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
    }
    function u(e) {
      return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
    }
    Object.assign(s.prototype, {
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set: function (e) {
        return (
          e && e.isColor
            ? this.copy(e)
            : "number" == typeof e
            ? this.setHex(e)
            : "string" == typeof e && this.setStyle(e),
          this
        );
      },
      setScalar: function (e) {
        return (this.r = e), (this.g = e), (this.b = e), this;
      },
      setHex: function (e) {
        return (
          (e = Math.floor(e)),
          (this.r = ((e >> 16) & 255) / 255),
          (this.g = ((e >> 8) & 255) / 255),
          (this.b = (255 & e) / 255),
          this
        );
      },
      setRGB: function (e, t, n) {
        return (this.r = e), (this.g = t), (this.b = n), this;
      },
      setHSL: function (e, t, n) {
        if (
          ((e = i.a.euclideanModulo(e, 1)),
          (t = i.a.clamp(t, 0, 1)),
          (n = i.a.clamp(n, 0, 1)),
          0 === t)
        )
          this.r = this.g = this.b = n;
        else {
          var r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
            a = 2 * n - r;
          (this.r = l(a, r, e + 1 / 3)),
            (this.g = l(a, r, e)),
            (this.b = l(a, r, e - 1 / 3));
        }
        return this;
      },
      setStyle: function (e) {
        function t(t) {
          void 0 !== t &&
            parseFloat(t) < 1 &&
            console.warn(
              "THREE.Color: Alpha component of " + e + " will be ignored."
            );
        }
        var n;
        if ((n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e))) {
          var i,
            r = n[1],
            a = n[2];
          switch (r) {
            case "rgb":
            case "rgba":
              if (
                (i =
                  /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                    a
                  ))
              )
                return (
                  (this.r = Math.min(255, parseInt(i[1], 10)) / 255),
                  (this.g = Math.min(255, parseInt(i[2], 10)) / 255),
                  (this.b = Math.min(255, parseInt(i[3], 10)) / 255),
                  t(i[5]),
                  this
                );
              if (
                (i =
                  /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                    a
                  ))
              )
                return (
                  (this.r = Math.min(100, parseInt(i[1], 10)) / 100),
                  (this.g = Math.min(100, parseInt(i[2], 10)) / 100),
                  (this.b = Math.min(100, parseInt(i[3], 10)) / 100),
                  t(i[5]),
                  this
                );
              break;
            case "hsl":
            case "hsla":
              if (
                (i =
                  /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                    a
                  ))
              ) {
                var o = parseFloat(i[1]) / 360,
                  s = parseInt(i[2], 10) / 100,
                  l = parseInt(i[3], 10) / 100;
                return t(i[5]), this.setHSL(o, s, l);
              }
          }
        } else if ((n = /^\#([A-Fa-f0-9]+)$/.exec(e))) {
          var c = n[1],
            u = c.length;
          if (3 === u)
            return (
              (this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255),
              (this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255),
              (this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255),
              this
            );
          if (6 === u)
            return (
              (this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255),
              (this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255),
              (this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255),
              this
            );
        }
        return e && e.length > 0 ? this.setColorName(e) : this;
      },
      setColorName: function (e) {
        var t = r[e];
        return (
          void 0 !== t
            ? this.setHex(t)
            : console.warn("THREE.Color: Unknown color " + e),
          this
        );
      },
      clone: function () {
        return new this.constructor(this.r, this.g, this.b);
      },
      copy: function (e) {
        return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
      },
      copyGammaToLinear: function (e, t) {
        return (
          void 0 === t && (t = 2),
          (this.r = Math.pow(e.r, t)),
          (this.g = Math.pow(e.g, t)),
          (this.b = Math.pow(e.b, t)),
          this
        );
      },
      copyLinearToGamma: function (e, t) {
        void 0 === t && (t = 2);
        var n = t > 0 ? 1 / t : 1;
        return (
          (this.r = Math.pow(e.r, n)),
          (this.g = Math.pow(e.g, n)),
          (this.b = Math.pow(e.b, n)),
          this
        );
      },
      convertGammaToLinear: function (e) {
        return this.copyGammaToLinear(this, e), this;
      },
      convertLinearToGamma: function (e) {
        return this.copyLinearToGamma(this, e), this;
      },
      copySRGBToLinear: function (e) {
        return (this.r = c(e.r)), (this.g = c(e.g)), (this.b = c(e.b)), this;
      },
      copyLinearToSRGB: function (e) {
        return (this.r = u(e.r)), (this.g = u(e.g)), (this.b = u(e.b)), this;
      },
      convertSRGBToLinear: function () {
        return this.copySRGBToLinear(this), this;
      },
      convertLinearToSRGB: function () {
        return this.copyLinearToSRGB(this), this;
      },
      getHex: function () {
        return (
          ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
        );
      },
      getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      },
      getHSL: function (e) {
        void 0 === e &&
          (console.warn("THREE.Color: .getHSL() target is now required"),
          (e = { h: 0, s: 0, l: 0 }));
        var t,
          n,
          i = this.r,
          r = this.g,
          a = this.b,
          o = Math.max(i, r, a),
          s = Math.min(i, r, a),
          l = (s + o) / 2;
        if (s === o) (t = 0), (n = 0);
        else {
          var c = o - s;
          switch (((n = l <= 0.5 ? c / (o + s) : c / (2 - o - s)), o)) {
            case i:
              t = (r - a) / c + (r < a ? 6 : 0);
              break;
            case r:
              t = (a - i) / c + 2;
              break;
            case a:
              t = (i - r) / c + 4;
          }
          t /= 6;
        }
        return (e.h = t), (e.s = n), (e.l = l), e;
      },
      getStyle: function () {
        return (
          "rgb(" +
          ((255 * this.r) | 0) +
          "," +
          ((255 * this.g) | 0) +
          "," +
          ((255 * this.b) | 0) +
          ")"
        );
      },
      offsetHSL: function (e, t, n) {
        return (
          this.getHSL(a),
          (a.h += e),
          (a.s += t),
          (a.l += n),
          this.setHSL(a.h, a.s, a.l),
          this
        );
      },
      add: function (e) {
        return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
      },
      addColors: function (e, t) {
        return (
          (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
        );
      },
      addScalar: function (e) {
        return (this.r += e), (this.g += e), (this.b += e), this;
      },
      sub: function (e) {
        return (
          (this.r = Math.max(0, this.r - e.r)),
          (this.g = Math.max(0, this.g - e.g)),
          (this.b = Math.max(0, this.b - e.b)),
          this
        );
      },
      multiply: function (e) {
        return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
      },
      multiplyScalar: function (e) {
        return (this.r *= e), (this.g *= e), (this.b *= e), this;
      },
      lerp: function (e, t) {
        return (
          (this.r += (e.r - this.r) * t),
          (this.g += (e.g - this.g) * t),
          (this.b += (e.b - this.b) * t),
          this
        );
      },
      lerpHSL: function (e, t) {
        this.getHSL(a), e.getHSL(o);
        var n = i.a.lerp(a.h, o.h, t),
          r = i.a.lerp(a.s, o.s, t),
          s = i.a.lerp(a.l, o.l, t);
        return this.setHSL(n, r, s), this;
      },
      equals: function (e) {
        return e.r === this.r && e.g === this.g && e.b === this.b;
      },
      fromArray: function (e, t) {
        return (
          void 0 === t && (t = 0),
          (this.r = e[t]),
          (this.g = e[t + 1]),
          (this.b = e[t + 2]),
          this
        );
      },
      toArray: function (e, t) {
        return (
          void 0 === e && (e = []),
          void 0 === t && (t = 0),
          (e[t] = this.r),
          (e[t + 1] = this.g),
          (e[t + 2] = this.b),
          e
        );
      },
      toJSON: function () {
        return this.getHex();
      },
    }),
      (s.NAMES = r);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    for (var i = [], r = 0; r < 256; r++)
      i[r] = (r < 16 ? "0" : "") + r.toString(16);
    var a = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function () {
        var e = (4294967295 * Math.random()) | 0,
          t = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          r = (4294967295 * Math.random()) | 0;
        return (
          i[255 & e] +
          i[(e >> 8) & 255] +
          i[(e >> 16) & 255] +
          i[(e >> 24) & 255] +
          "-" +
          i[255 & t] +
          i[(t >> 8) & 255] +
          "-" +
          i[((t >> 16) & 15) | 64] +
          i[(t >> 24) & 255] +
          "-" +
          i[(63 & n) | 128] +
          i[(n >> 8) & 255] +
          "-" +
          i[(n >> 16) & 255] +
          i[(n >> 24) & 255] +
          i[255 & r] +
          i[(r >> 8) & 255] +
          i[(r >> 16) & 255] +
          i[(r >> 24) & 255]
        ).toUpperCase();
      },
      clamp: function (e, t, n) {
        return Math.max(t, Math.min(n, e));
      },
      euclideanModulo: function (e, t) {
        return ((e % t) + t) % t;
      },
      mapLinear: function (e, t, n, i, r) {
        return i + ((e - t) * (r - i)) / (n - t);
      },
      lerp: function (e, t, n) {
        return (1 - n) * e + n * t;
      },
      smoothstep: function (e, t, n) {
        return e <= t
          ? 0
          : e >= n
          ? 1
          : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
      },
      smootherstep: function (e, t, n) {
        return e <= t
          ? 0
          : e >= n
          ? 1
          : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
      },
      randInt: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1));
      },
      randFloat: function (e, t) {
        return e + Math.random() * (t - e);
      },
      randFloatSpread: function (e) {
        return e * (0.5 - Math.random());
      },
      degToRad: function (e) {
        return e * a.DEG2RAD;
      },
      radToDeg: function (e) {
        return e * a.RAD2DEG;
      },
      isPowerOfTwo: function (e) {
        return 0 == (e & (e - 1)) && 0 !== e;
      },
      ceilPowerOfTwo: function (e) {
        return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
      },
      floorPowerOfTwo: function (e) {
        return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      var t = {};
      for (var n in e)
        for (var i in ((t[n] = {}), e[n])) {
          var r = e[n][i];
          r &&
          (r.isColor ||
            r.isMatrix3 ||
            r.isMatrix4 ||
            r.isVector2 ||
            r.isVector3 ||
            r.isVector4 ||
            r.isTexture)
            ? (t[n][i] = r.clone())
            : Array.isArray(r)
            ? (t[n][i] = r.slice())
            : (t[n][i] = r);
        }
      return t;
    }
    function r(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = i(e[n]);
        for (var a in r) t[a] = r[a];
      }
      return t;
    }
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "c", function () {
        return r;
      }),
      n.d(t, "a", function () {
        return a;
      });
    var a = { clone: i, merge: r };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = new (n(0).a)();
    function r() {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
          );
    }
    Object.assign(r.prototype, {
      isMatrix3: !0,
      set: function (e, t, n, i, r, a, o, s, l) {
        var c = this.elements;
        return (
          (c[0] = e),
          (c[1] = i),
          (c[2] = o),
          (c[3] = t),
          (c[4] = r),
          (c[5] = s),
          (c[6] = n),
          (c[7] = a),
          (c[8] = l),
          this
        );
      },
      identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
      },
      clone: function () {
        return new this.constructor().fromArray(this.elements);
      },
      copy: function (e) {
        var t = this.elements,
          n = e.elements;
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          this
        );
      },
      setFromMatrix4: function (e) {
        var t = e.elements;
        return (
          this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        );
      },
      applyToBufferAttribute: function (e) {
        for (var t = 0, n = e.count; t < n; t++)
          (i.x = e.getX(t)),
            (i.y = e.getY(t)),
            (i.z = e.getZ(t)),
            i.applyMatrix3(this),
            e.setXYZ(t, i.x, i.y, i.z);
        return e;
      },
      multiply: function (e) {
        return this.multiplyMatrices(this, e);
      },
      premultiply: function (e) {
        return this.multiplyMatrices(e, this);
      },
      multiplyMatrices: function (e, t) {
        var n = e.elements,
          i = t.elements,
          r = this.elements,
          a = n[0],
          o = n[3],
          s = n[6],
          l = n[1],
          c = n[4],
          u = n[7],
          h = n[2],
          d = n[5],
          f = n[8],
          p = i[0],
          m = i[3],
          g = i[6],
          v = i[1],
          _ = i[4],
          x = i[7],
          y = i[2],
          M = i[5],
          b = i[8];
        return (
          (r[0] = a * p + o * v + s * y),
          (r[3] = a * m + o * _ + s * M),
          (r[6] = a * g + o * x + s * b),
          (r[1] = l * p + c * v + u * y),
          (r[4] = l * m + c * _ + u * M),
          (r[7] = l * g + c * x + u * b),
          (r[2] = h * p + d * v + f * y),
          (r[5] = h * m + d * _ + f * M),
          (r[8] = h * g + d * x + f * b),
          this
        );
      },
      multiplyScalar: function (e) {
        var t = this.elements;
        return (
          (t[0] *= e),
          (t[3] *= e),
          (t[6] *= e),
          (t[1] *= e),
          (t[4] *= e),
          (t[7] *= e),
          (t[2] *= e),
          (t[5] *= e),
          (t[8] *= e),
          this
        );
      },
      determinant: function () {
        var e = this.elements,
          t = e[0],
          n = e[1],
          i = e[2],
          r = e[3],
          a = e[4],
          o = e[5],
          s = e[6],
          l = e[7],
          c = e[8];
        return (
          t * a * c - t * o * l - n * r * c + n * o * s + i * r * l - i * a * s
        );
      },
      getInverse: function (e, t) {
        e &&
          e.isMatrix4 &&
          console.error(
            "THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."
          );
        var n = e.elements,
          i = this.elements,
          r = n[0],
          a = n[1],
          o = n[2],
          s = n[3],
          l = n[4],
          c = n[5],
          u = n[6],
          h = n[7],
          d = n[8],
          f = d * l - c * h,
          p = c * u - d * s,
          m = h * s - l * u,
          g = r * f + a * p + o * m;
        if (0 === g) {
          var v =
            "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === t) throw new Error(v);
          return console.warn(v), this.identity();
        }
        var _ = 1 / g;
        return (
          (i[0] = f * _),
          (i[1] = (o * h - d * a) * _),
          (i[2] = (c * a - o * l) * _),
          (i[3] = p * _),
          (i[4] = (d * r - o * u) * _),
          (i[5] = (o * s - c * r) * _),
          (i[6] = m * _),
          (i[7] = (a * u - h * r) * _),
          (i[8] = (l * r - a * s) * _),
          this
        );
      },
      transpose: function () {
        var e,
          t = this.elements;
        return (
          (e = t[1]),
          (t[1] = t[3]),
          (t[3] = e),
          (e = t[2]),
          (t[2] = t[6]),
          (t[6] = e),
          (e = t[5]),
          (t[5] = t[7]),
          (t[7] = e),
          this
        );
      },
      getNormalMatrix: function (e) {
        return this.setFromMatrix4(e).getInverse(this).transpose();
      },
      transposeIntoArray: function (e) {
        var t = this.elements;
        return (
          (e[0] = t[0]),
          (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = t[1]),
          (e[4] = t[4]),
          (e[5] = t[7]),
          (e[6] = t[2]),
          (e[7] = t[5]),
          (e[8] = t[8]),
          this
        );
      },
      setUvTransform: function (e, t, n, i, r, a, o) {
        var s = Math.cos(r),
          l = Math.sin(r);
        this.set(
          n * s,
          n * l,
          -n * (s * a + l * o) + a + e,
          -i * l,
          i * s,
          -i * (-l * a + s * o) + o + t,
          0,
          0,
          1
        );
      },
      scale: function (e, t) {
        var n = this.elements;
        return (
          (n[0] *= e),
          (n[3] *= e),
          (n[6] *= e),
          (n[1] *= t),
          (n[4] *= t),
          (n[7] *= t),
          this
        );
      },
      rotate: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e),
          i = this.elements,
          r = i[0],
          a = i[3],
          o = i[6],
          s = i[1],
          l = i[4],
          c = i[7];
        return (
          (i[0] = t * r + n * s),
          (i[3] = t * a + n * l),
          (i[6] = t * o + n * c),
          (i[1] = -n * r + t * s),
          (i[4] = -n * a + t * l),
          (i[7] = -n * o + t * c),
          this
        );
      },
      translate: function (e, t) {
        var n = this.elements;
        return (
          (n[0] += e * n[2]),
          (n[3] += e * n[5]),
          (n[6] += e * n[8]),
          (n[1] += t * n[2]),
          (n[4] += t * n[5]),
          (n[7] += t * n[8]),
          this
        );
      },
      equals: function (e) {
        for (var t = this.elements, n = e.elements, i = 0; i < 9; i++)
          if (t[i] !== n[i]) return !1;
        return !0;
      },
      fromArray: function (e, t) {
        void 0 === t && (t = 0);
        for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this;
      },
      toArray: function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var n = this.elements;
        return (
          (e[t] = n[0]),
          (e[t + 1] = n[1]),
          (e[t + 2] = n[2]),
          (e[t + 3] = n[3]),
          (e[t + 4] = n[4]),
          (e[t + 5] = n[5]),
          (e[t + 6] = n[6]),
          (e[t + 7] = n[7]),
          (e[t + 8] = n[8]),
          e
        );
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n(4);
    function r(e, t, n, i) {
      (this._x = e || 0),
        (this._y = t || 0),
        (this._z = n || 0),
        (this._w = void 0 !== i ? i : 1);
    }
    Object.assign(r, {
      slerp: function (e, t, n, i) {
        return n.copy(e).slerp(t, i);
      },
      slerpFlat: function (e, t, n, i, r, a, o) {
        var s = n[i + 0],
          l = n[i + 1],
          c = n[i + 2],
          u = n[i + 3],
          h = r[a + 0],
          d = r[a + 1],
          f = r[a + 2],
          p = r[a + 3];
        if (u !== p || s !== h || l !== d || c !== f) {
          var m = 1 - o,
            g = s * h + l * d + c * f + u * p,
            v = g >= 0 ? 1 : -1,
            _ = 1 - g * g;
          if (_ > Number.EPSILON) {
            var x = Math.sqrt(_),
              y = Math.atan2(x, g * v);
            (m = Math.sin(m * y) / x), (o = Math.sin(o * y) / x);
          }
          var M = o * v;
          if (
            ((s = s * m + h * M),
            (l = l * m + d * M),
            (c = c * m + f * M),
            (u = u * m + p * M),
            m === 1 - o)
          ) {
            var b = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
            (s *= b), (l *= b), (c *= b), (u *= b);
          }
        }
        (e[t] = s), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = u);
      },
    }),
      Object.defineProperties(r.prototype, {
        x: {
          get: function () {
            return this._x;
          },
          set: function (e) {
            (this._x = e), this._onChangeCallback();
          },
        },
        y: {
          get: function () {
            return this._y;
          },
          set: function (e) {
            (this._y = e), this._onChangeCallback();
          },
        },
        z: {
          get: function () {
            return this._z;
          },
          set: function (e) {
            (this._z = e), this._onChangeCallback();
          },
        },
        w: {
          get: function () {
            return this._w;
          },
          set: function (e) {
            (this._w = e), this._onChangeCallback();
          },
        },
      }),
      Object.assign(r.prototype, {
        isQuaternion: !0,
        set: function (e, t, n, i) {
          return (
            (this._x = e),
            (this._y = t),
            (this._z = n),
            (this._w = i),
            this._onChangeCallback(),
            this
          );
        },
        clone: function () {
          return new this.constructor(this._x, this._y, this._z, this._w);
        },
        copy: function (e) {
          return (
            (this._x = e.x),
            (this._y = e.y),
            (this._z = e.z),
            (this._w = e.w),
            this._onChangeCallback(),
            this
          );
        },
        setFromEuler: function (e, t) {
          if (!e || !e.isEuler)
            throw new Error(
              "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
            );
          var n = e._x,
            i = e._y,
            r = e._z,
            a = e.order,
            o = Math.cos,
            s = Math.sin,
            l = o(n / 2),
            c = o(i / 2),
            u = o(r / 2),
            h = s(n / 2),
            d = s(i / 2),
            f = s(r / 2);
          return (
            "XYZ" === a
              ? ((this._x = h * c * u + l * d * f),
                (this._y = l * d * u - h * c * f),
                (this._z = l * c * f + h * d * u),
                (this._w = l * c * u - h * d * f))
              : "YXZ" === a
              ? ((this._x = h * c * u + l * d * f),
                (this._y = l * d * u - h * c * f),
                (this._z = l * c * f - h * d * u),
                (this._w = l * c * u + h * d * f))
              : "ZXY" === a
              ? ((this._x = h * c * u - l * d * f),
                (this._y = l * d * u + h * c * f),
                (this._z = l * c * f + h * d * u),
                (this._w = l * c * u - h * d * f))
              : "ZYX" === a
              ? ((this._x = h * c * u - l * d * f),
                (this._y = l * d * u + h * c * f),
                (this._z = l * c * f - h * d * u),
                (this._w = l * c * u + h * d * f))
              : "YZX" === a
              ? ((this._x = h * c * u + l * d * f),
                (this._y = l * d * u + h * c * f),
                (this._z = l * c * f - h * d * u),
                (this._w = l * c * u - h * d * f))
              : "XZY" === a &&
                ((this._x = h * c * u - l * d * f),
                (this._y = l * d * u - h * c * f),
                (this._z = l * c * f + h * d * u),
                (this._w = l * c * u + h * d * f)),
            !1 !== t && this._onChangeCallback(),
            this
          );
        },
        setFromAxisAngle: function (e, t) {
          var n = t / 2,
            i = Math.sin(n);
          return (
            (this._x = e.x * i),
            (this._y = e.y * i),
            (this._z = e.z * i),
            (this._w = Math.cos(n)),
            this._onChangeCallback(),
            this
          );
        },
        setFromRotationMatrix: function (e) {
          var t,
            n = e.elements,
            i = n[0],
            r = n[4],
            a = n[8],
            o = n[1],
            s = n[5],
            l = n[9],
            c = n[2],
            u = n[6],
            h = n[10],
            d = i + s + h;
          return (
            d > 0
              ? ((t = 0.5 / Math.sqrt(d + 1)),
                (this._w = 0.25 / t),
                (this._x = (u - l) * t),
                (this._y = (a - c) * t),
                (this._z = (o - r) * t))
              : i > s && i > h
              ? ((t = 2 * Math.sqrt(1 + i - s - h)),
                (this._w = (u - l) / t),
                (this._x = 0.25 * t),
                (this._y = (r + o) / t),
                (this._z = (a + c) / t))
              : s > h
              ? ((t = 2 * Math.sqrt(1 + s - i - h)),
                (this._w = (a - c) / t),
                (this._x = (r + o) / t),
                (this._y = 0.25 * t),
                (this._z = (l + u) / t))
              : ((t = 2 * Math.sqrt(1 + h - i - s)),
                (this._w = (o - r) / t),
                (this._x = (a + c) / t),
                (this._y = (l + u) / t),
                (this._z = 0.25 * t)),
            this._onChangeCallback(),
            this
          );
        },
        setFromUnitVectors: function (e, t) {
          var n = e.dot(t) + 1;
          return (
            n < 1e-6
              ? ((n = 0),
                Math.abs(e.x) > Math.abs(e.z)
                  ? ((this._x = -e.y),
                    (this._y = e.x),
                    (this._z = 0),
                    (this._w = n))
                  : ((this._x = 0),
                    (this._y = -e.z),
                    (this._z = e.y),
                    (this._w = n)))
              : ((this._x = e.y * t.z - e.z * t.y),
                (this._y = e.z * t.x - e.x * t.z),
                (this._z = e.x * t.y - e.y * t.x),
                (this._w = n)),
            this.normalize()
          );
        },
        angleTo: function (e) {
          return 2 * Math.acos(Math.abs(i.a.clamp(this.dot(e), -1, 1)));
        },
        rotateTowards: function (e, t) {
          var n = this.angleTo(e);
          if (0 === n) return this;
          var i = Math.min(1, t / n);
          return this.slerp(e, i), this;
        },
        inverse: function () {
          return this.conjugate();
        },
        conjugate: function () {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this._onChangeCallback(),
            this
          );
        },
        dot: function (e) {
          return (
            this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
          );
        },
        lengthSq: function () {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        },
        length: function () {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        },
        normalize: function () {
          var e = this.length();
          return (
            0 === e
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((e = 1 / e),
                (this._x = this._x * e),
                (this._y = this._y * e),
                (this._z = this._z * e),
                (this._w = this._w * e)),
            this._onChangeCallback(),
            this
          );
        },
        multiply: function (e, t) {
          return void 0 !== t
            ? (console.warn(
                "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
              ),
              this.multiplyQuaternions(e, t))
            : this.multiplyQuaternions(this, e);
        },
        premultiply: function (e) {
          return this.multiplyQuaternions(e, this);
        },
        multiplyQuaternions: function (e, t) {
          var n = e._x,
            i = e._y,
            r = e._z,
            a = e._w,
            o = t._x,
            s = t._y,
            l = t._z,
            c = t._w;
          return (
            (this._x = n * c + a * o + i * l - r * s),
            (this._y = i * c + a * s + r * o - n * l),
            (this._z = r * c + a * l + n * s - i * o),
            (this._w = a * c - n * o - i * s - r * l),
            this._onChangeCallback(),
            this
          );
        },
        slerp: function (e, t) {
          if (0 === t) return this;
          if (1 === t) return this.copy(e);
          var n = this._x,
            i = this._y,
            r = this._z,
            a = this._w,
            o = a * e._w + n * e._x + i * e._y + r * e._z;
          if (
            (o < 0
              ? ((this._w = -e._w),
                (this._x = -e._x),
                (this._y = -e._y),
                (this._z = -e._z),
                (o = -o))
              : this.copy(e),
            o >= 1)
          )
            return (
              (this._w = a), (this._x = n), (this._y = i), (this._z = r), this
            );
          var s = 1 - o * o;
          if (s <= Number.EPSILON) {
            var l = 1 - t;
            return (
              (this._w = l * a + t * this._w),
              (this._x = l * n + t * this._x),
              (this._y = l * i + t * this._y),
              (this._z = l * r + t * this._z),
              this.normalize(),
              this._onChangeCallback(),
              this
            );
          }
          var c = Math.sqrt(s),
            u = Math.atan2(c, o),
            h = Math.sin((1 - t) * u) / c,
            d = Math.sin(t * u) / c;
          return (
            (this._w = a * h + this._w * d),
            (this._x = n * h + this._x * d),
            (this._y = i * h + this._y * d),
            (this._z = r * h + this._z * d),
            this._onChangeCallback(),
            this
          );
        },
        equals: function (e) {
          return (
            e._x === this._x &&
            e._y === this._y &&
            e._z === this._z &&
            e._w === this._w
          );
        },
        fromArray: function (e, t) {
          return (
            void 0 === t && (t = 0),
            (this._x = e[t]),
            (this._y = e[t + 1]),
            (this._z = e[t + 2]),
            (this._w = e[t + 3]),
            this._onChangeCallback(),
            this
          );
        },
        toArray: function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this._x),
            (e[t + 1] = this._y),
            (e[t + 2] = this._z),
            (e[t + 3] = this._w),
            e
          );
        },
        _onChange: function (e) {
          return (this._onChangeCallback = e), this;
        },
        _onChangeCallback: function () {},
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "CustomMeshPhysicalShader", function () {
        return o;
      });
    var i = n(3),
      r = n(1);
    var o = {
      uniforms: n(5).a.merge([
        r.a.common,
        r.a.envmap,
        r.a.normalmap,
        r.a.roughnessmap,
        r.a.metalnessmap,
        r.a.lights,
        {
          map: { value: null },
          emissive: { value: new i.a(0) },
          roughness: { value: 0.5 },
          metalness: { value: 0.5 },
          envMapIntensity: { value: 1 },
          mouse: { value: 1 },
        },
      ]),
      vertexShader: vertex,
      fragmentShader: fragment,
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(4);
    function r() {}
    Object.assign(r.prototype, {
      addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var n = this._listeners;
        void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
      },
      hasEventListener: function (e, t) {
        if (void 0 === this._listeners) return !1;
        var n = this._listeners;
        return void 0 !== n[e] && -1 !== n[e].indexOf(t);
      },
      removeEventListener: function (e, t) {
        if (void 0 !== this._listeners) {
          var n = this._listeners[e];
          if (void 0 !== n) {
            var i = n.indexOf(t);
            -1 !== i && n.splice(i, 1);
          }
        }
      },
      dispatchEvent: function (e) {
        if (void 0 !== this._listeners) {
          var t = this._listeners[e.type];
          if (void 0 !== t) {
            e.target = this;
            for (var n = t.slice(0), i = 0, r = n.length; i < r; i++)
              n[i].call(this, e);
          }
        }
      },
    });
    var a,
      o = n(2),
      s = n(6),
      l = function (e) {
        var t;
        if ("undefined" == typeof HTMLCanvasElement) return e.src;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
          void 0 === a &&
            (a = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "canvas"
            )),
            (a.width = e.width),
            (a.height = e.height);
          var n = a.getContext("2d");
          e instanceof ImageData
            ? n.putImageData(e, 0, 0)
            : n.drawImage(e, 0, 0, e.width, e.height),
            (t = a);
        }
        return t.width > 2048 || t.height > 2048
          ? t.toDataURL("image/jpeg", 0.6)
          : t.toDataURL("image/png");
      },
      c = 0;
    function u(e, t, n, r, a, l, h, d, f, p) {
      Object.defineProperty(this, "id", { value: c++ }),
        (this.uuid = i.a.generateUUID()),
        (this.name = ""),
        (this.image = void 0 !== e ? e : u.DEFAULT_IMAGE),
        (this.mipmaps = []),
        (this.mapping = void 0 !== t ? t : u.DEFAULT_MAPPING),
        (this.wrapS = void 0 !== n ? n : 1001),
        (this.wrapT = void 0 !== r ? r : 1001),
        (this.magFilter = void 0 !== a ? a : 1006),
        (this.minFilter = void 0 !== l ? l : 1008),
        (this.anisotropy = void 0 !== f ? f : 1),
        (this.format = void 0 !== h ? h : 1023),
        (this.internalFormat = null),
        (this.type = void 0 !== d ? d : 1009),
        (this.offset = new o.a(0, 0)),
        (this.repeat = new o.a(1, 1)),
        (this.center = new o.a(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new s.a()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = void 0 !== p ? p : 3e3),
        (this.version = 0),
        (this.onUpdate = null);
    }
    function h(e, t, n, i, r, a, o, s, l, c, h, d) {
      u.call(this, null, a, o, s, l, c, i, r, h, d),
        (this.image = { data: e || null, width: t || 1, height: n || 1 }),
        (this.magFilter = void 0 !== l ? l : 1003),
        (this.minFilter = void 0 !== c ? c : 1003),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.needsUpdate = !0);
    }
    (u.DEFAULT_IMAGE = void 0),
      (u.DEFAULT_MAPPING = 300),
      (u.prototype = Object.assign(Object.create(r.prototype), {
        constructor: u,
        isTexture: !0,
        updateMatrix: function () {
          this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (e) {
          return (
            (this.name = e.name),
            (this.image = e.image),
            (this.mipmaps = e.mipmaps.slice(0)),
            (this.mapping = e.mapping),
            (this.wrapS = e.wrapS),
            (this.wrapT = e.wrapT),
            (this.magFilter = e.magFilter),
            (this.minFilter = e.minFilter),
            (this.anisotropy = e.anisotropy),
            (this.format = e.format),
            (this.internalFormat = e.internalFormat),
            (this.type = e.type),
            this.offset.copy(e.offset),
            this.repeat.copy(e.repeat),
            this.center.copy(e.center),
            (this.rotation = e.rotation),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            this.matrix.copy(e.matrix),
            (this.generateMipmaps = e.generateMipmaps),
            (this.premultiplyAlpha = e.premultiplyAlpha),
            (this.flipY = e.flipY),
            (this.unpackAlignment = e.unpackAlignment),
            (this.encoding = e.encoding),
            this
          );
        },
        toJSON: function (e) {
          var t = void 0 === e || "string" == typeof e;
          if (!t && void 0 !== e.textures[this.uuid])
            return e.textures[this.uuid];
          var n = {
            metadata: {
              version: 4.5,
              type: "Texture",
              generator: "Texture.toJSON",
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
          };
          if (void 0 !== this.image) {
            var r = this.image;
            if (
              (void 0 === r.uuid && (r.uuid = i.a.generateUUID()),
              !t && void 0 === e.images[r.uuid])
            ) {
              var a;
              if (Array.isArray(r)) {
                a = [];
                for (var o = 0, s = r.length; o < s; o++) a.push(l(r[o]));
              } else a = l(r);
              e.images[r.uuid] = { uuid: r.uuid, url: a };
            }
            n.image = r.uuid;
          }
          return t || (e.textures[this.uuid] = n), n;
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
        transformUv: function (e) {
          if (300 !== this.mapping) return e;
          if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
            switch (this.wrapS) {
              case 1e3:
                e.x = e.x - Math.floor(e.x);
                break;
              case 1001:
                e.x = e.x < 0 ? 0 : 1;
                break;
              case 1002:
                1 === Math.abs(Math.floor(e.x) % 2)
                  ? (e.x = Math.ceil(e.x) - e.x)
                  : (e.x = e.x - Math.floor(e.x));
            }
          if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
              case 1e3:
                e.y = e.y - Math.floor(e.y);
                break;
              case 1001:
                e.y = e.y < 0 ? 0 : 1;
                break;
              case 1002:
                1 === Math.abs(Math.floor(e.y) % 2)
                  ? (e.y = Math.ceil(e.y) - e.y)
                  : (e.y = e.y - Math.floor(e.y));
            }
          return this.flipY && (e.y = 1 - e.y), e;
        },
      })),
      Object.defineProperty(u.prototype, "needsUpdate", {
        set: function (e) {
          !0 === e && this.version++;
        },
      }),
      (h.prototype = Object.create(u.prototype)),
      (h.prototype.constructor = h),
      (h.prototype.isDataTexture = !0);
    var d = n(0),
      f = [
        new d.a(),
        new d.a(),
        new d.a(),
        new d.a(),
        new d.a(),
        new d.a(),
        new d.a(),
        new d.a(),
      ],
      p = new d.a(),
      m = new S(),
      g = new d.a(),
      v = new d.a(),
      _ = new d.a(),
      x = new d.a(),
      y = new d.a(),
      M = new d.a(),
      b = new d.a(),
      w = new d.a(),
      E = new d.a(),
      T = new d.a();
    function S(e, t) {
      (this.min = void 0 !== e ? e : new d.a(1 / 0, 1 / 0, 1 / 0)),
        (this.max = void 0 !== t ? t : new d.a(-1 / 0, -1 / 0, -1 / 0));
    }
    function A(e, t, n, i, r) {
      var a, o;
      for (a = 0, o = e.length - 3; a <= o; a += 3) {
        T.fromArray(e, a);
        var s = r.x * Math.abs(T.x) + r.y * Math.abs(T.y) + r.z * Math.abs(T.z),
          l = t.dot(T),
          c = n.dot(T),
          u = i.dot(T);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > s) return !1;
      }
      return !0;
    }
    Object.assign(S.prototype, {
      isBox3: !0,
      set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this;
      },
      setFromArray: function (e) {
        for (
          var t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            o = -1 / 0,
            s = 0,
            l = e.length;
          s < l;
          s += 3
        ) {
          var c = e[s],
            u = e[s + 1],
            h = e[s + 2];
          c < t && (t = c),
            u < n && (n = u),
            h < i && (i = h),
            c > r && (r = c),
            u > a && (a = u),
            h > o && (o = h);
        }
        return this.min.set(t, n, i), this.max.set(r, a, o), this;
      },
      setFromBufferAttribute: function (e) {
        for (
          var t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            o = -1 / 0,
            s = 0,
            l = e.count;
          s < l;
          s++
        ) {
          var c = e.getX(s),
            u = e.getY(s),
            h = e.getZ(s);
          c < t && (t = c),
            u < n && (n = u),
            h < i && (i = h),
            c > r && (r = c),
            u > a && (a = u),
            h > o && (o = h);
        }
        return this.min.set(t, n, i), this.max.set(r, a, o), this;
      },
      setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this;
      },
      setFromCenterAndSize: function (e, t) {
        var n = p.copy(t).multiplyScalar(0.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
      },
      setFromObject: function (e) {
        return this.makeEmpty(), this.expandByObject(e);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this;
      },
      makeEmpty: function () {
        return (
          (this.min.x = this.min.y = this.min.z = 1 / 0),
          (this.max.x = this.max.y = this.max.z = -1 / 0),
          this
        );
      },
      isEmpty: function () {
        return (
          this.max.x < this.min.x ||
          this.max.y < this.min.y ||
          this.max.z < this.min.z
        );
      },
      getCenter: function (e) {
        return (
          void 0 === e &&
            (console.warn("THREE.Box3: .getCenter() target is now required"),
            (e = new d.a())),
          this.isEmpty()
            ? e.set(0, 0, 0)
            : e.addVectors(this.min, this.max).multiplyScalar(0.5)
        );
      },
      getSize: function (e) {
        return (
          void 0 === e &&
            (console.warn("THREE.Box3: .getSize() target is now required"),
            (e = new d.a())),
          this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        );
      },
      expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this;
      },
      expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this;
      },
      expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this;
      },
      expandByObject: function (e) {
        e.updateWorldMatrix(!1, !1);
        var t = e.geometry;
        void 0 !== t &&
          (null === t.boundingBox && t.computeBoundingBox(),
          m.copy(t.boundingBox),
          m.applyMatrix4(e.matrixWorld),
          this.expandByPoint(m.min),
          this.expandByPoint(m.max));
        for (var n = e.children, i = 0, r = n.length; i < r; i++)
          this.expandByObject(n[i]);
        return this;
      },
      containsPoint: function (e) {
        return !(
          e.x < this.min.x ||
          e.x > this.max.x ||
          e.y < this.min.y ||
          e.y > this.max.y ||
          e.z < this.min.z ||
          e.z > this.max.z
        );
      },
      containsBox: function (e) {
        return (
          this.min.x <= e.min.x &&
          e.max.x <= this.max.x &&
          this.min.y <= e.min.y &&
          e.max.y <= this.max.y &&
          this.min.z <= e.min.z &&
          e.max.z <= this.max.z
        );
      },
      getParameter: function (e, t) {
        return (
          void 0 === t &&
            (console.warn("THREE.Box3: .getParameter() target is now required"),
            (t = new d.a())),
          t.set(
            (e.x - this.min.x) / (this.max.x - this.min.x),
            (e.y - this.min.y) / (this.max.y - this.min.y),
            (e.z - this.min.z) / (this.max.z - this.min.z)
          )
        );
      },
      intersectsBox: function (e) {
        return !(
          e.max.x < this.min.x ||
          e.min.x > this.max.x ||
          e.max.y < this.min.y ||
          e.min.y > this.max.y ||
          e.max.z < this.min.z ||
          e.min.z > this.max.z
        );
      },
      intersectsSphere: function (e) {
        return (
          this.clampPoint(e.center, p),
          p.distanceToSquared(e.center) <= e.radius * e.radius
        );
      },
      intersectsPlane: function (e) {
        var t, n;
        return (
          e.normal.x > 0
            ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
            : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
          e.normal.y > 0
            ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
            : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
          e.normal.z > 0
            ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
            : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
          t <= -e.constant && n >= -e.constant
        );
      },
      intersectsTriangle: function (e) {
        if (this.isEmpty()) return !1;
        this.getCenter(b),
          w.subVectors(this.max, b),
          g.subVectors(e.a, b),
          v.subVectors(e.b, b),
          _.subVectors(e.c, b),
          x.subVectors(v, g),
          y.subVectors(_, v),
          M.subVectors(g, _);
        var t = [
          0,
          -x.z,
          x.y,
          0,
          -y.z,
          y.y,
          0,
          -M.z,
          M.y,
          x.z,
          0,
          -x.x,
          y.z,
          0,
          -y.x,
          M.z,
          0,
          -M.x,
          -x.y,
          x.x,
          0,
          -y.y,
          y.x,
          0,
          -M.y,
          M.x,
          0,
        ];
        return (
          !!A(t, g, v, _, w) &&
          !!A((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), g, v, _, w) &&
          (E.crossVectors(x, y), A((t = [E.x, E.y, E.z]), g, v, _, w))
        );
      },
      clampPoint: function (e, t) {
        return (
          void 0 === t &&
            (console.warn("THREE.Box3: .clampPoint() target is now required"),
            (t = new d.a())),
          t.copy(e).clamp(this.min, this.max)
        );
      },
      distanceToPoint: function (e) {
        return p.copy(e).clamp(this.min, this.max).sub(e).length();
      },
      getBoundingSphere: function (e) {
        return (
          void 0 === e &&
            console.error(
              "THREE.Box3: .getBoundingSphere() target is now required"
            ),
          this.getCenter(e.center),
          (e.radius = 0.5 * this.getSize(p).length()),
          e
        );
      },
      intersect: function (e) {
        return (
          this.min.max(e.min),
          this.max.min(e.max),
          this.isEmpty() && this.makeEmpty(),
          this
        );
      },
      union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this;
      },
      applyMatrix4: function (e) {
        return this.isEmpty()
          ? this
          : (f[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
            f[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
            f[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
            f[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
            f[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
            f[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
            f[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
            f[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
            this.setFromPoints(f),
            this);
      },
      translate: function (e) {
        return this.min.add(e), this.max.add(e), this;
      },
      equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
      },
    });
    var L = new S();
    function R(e, t) {
      (this.center = void 0 !== e ? e : new d.a()),
        (this.radius = void 0 !== t ? t : 0);
    }
    Object.assign(R.prototype, {
      set: function (e, t) {
        return this.center.copy(e), (this.radius = t), this;
      },
      setFromPoints: function (e, t) {
        var n = this.center;
        void 0 !== t ? n.copy(t) : L.setFromPoints(e).getCenter(n);
        for (var i = 0, r = 0, a = e.length; r < a; r++)
          i = Math.max(i, n.distanceToSquared(e[r]));
        return (this.radius = Math.sqrt(i)), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return this.center.copy(e.center), (this.radius = e.radius), this;
      },
      empty: function () {
        return this.radius <= 0;
      },
      containsPoint: function (e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius;
      },
      distanceToPoint: function (e) {
        return e.distanceTo(this.center) - this.radius;
      },
      intersectsSphere: function (e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t;
      },
      intersectsBox: function (e) {
        return e.intersectsSphere(this);
      },
      intersectsPlane: function (e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
      },
      clampPoint: function (e, t) {
        var n = this.center.distanceToSquared(e);
        return (
          void 0 === t &&
            (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            (t = new d.a())),
          t.copy(e),
          n > this.radius * this.radius &&
            (t.sub(this.center).normalize(),
            t.multiplyScalar(this.radius).add(this.center)),
          t
        );
      },
      getBoundingBox: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Sphere: .getBoundingBox() target is now required"
            ),
            (e = new S())),
          e.set(this.center, this.center),
          e.expandByScalar(this.radius),
          e
        );
      },
      applyMatrix4: function (e) {
        return (
          this.center.applyMatrix4(e),
          (this.radius = this.radius * e.getMaxScaleOnAxis()),
          this
        );
      },
      translate: function (e) {
        return this.center.add(e), this;
      },
      equals: function (e) {
        return e.center.equals(this.center) && e.radius === this.radius;
      },
    });
    var P = new d.a(),
      N = new d.a(),
      D = new s.a();
    function C(e, t) {
      (this.normal = void 0 !== e ? e : new d.a(1, 0, 0)),
        (this.constant = void 0 !== t ? t : 0);
    }
    Object.assign(C.prototype, {
      isPlane: !0,
      set: function (e, t) {
        return this.normal.copy(e), (this.constant = t), this;
      },
      setComponents: function (e, t, n, i) {
        return this.normal.set(e, t, n), (this.constant = i), this;
      },
      setFromNormalAndCoplanarPoint: function (e, t) {
        return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
      },
      setFromCoplanarPoints: function (e, t, n) {
        var i = P.subVectors(n, t).cross(N.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return this.normal.copy(e.normal), (this.constant = e.constant), this;
      },
      normalize: function () {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), (this.constant *= e), this;
      },
      negate: function () {
        return (this.constant *= -1), this.normal.negate(), this;
      },
      distanceToPoint: function (e) {
        return this.normal.dot(e) + this.constant;
      },
      distanceToSphere: function (e) {
        return this.distanceToPoint(e.center) - e.radius;
      },
      projectPoint: function (e, t) {
        return (
          void 0 === t &&
            (console.warn(
              "THREE.Plane: .projectPoint() target is now required"
            ),
            (t = new d.a())),
          t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
        );
      },
      intersectLine: function (e, t) {
        void 0 === t &&
          (console.warn("THREE.Plane: .intersectLine() target is now required"),
          (t = new d.a()));
        var n = e.delta(P),
          i = this.normal.dot(n);
        if (0 === i)
          return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : void 0;
        var r = -(e.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1
          ? void 0
          : t.copy(n).multiplyScalar(r).add(e.start);
      },
      intersectsLine: function (e) {
        var t = this.distanceToPoint(e.start),
          n = this.distanceToPoint(e.end);
        return (t < 0 && n > 0) || (n < 0 && t > 0);
      },
      intersectsBox: function (e) {
        return e.intersectsPlane(this);
      },
      intersectsSphere: function (e) {
        return e.intersectsPlane(this);
      },
      coplanarPoint: function (e) {
        return (
          void 0 === e &&
            (console.warn(
              "THREE.Plane: .coplanarPoint() target is now required"
            ),
            (e = new d.a())),
          e.copy(this.normal).multiplyScalar(-this.constant)
        );
      },
      applyMatrix4: function (e, t) {
        var n = t || D.getNormalMatrix(e),
          i = this.coplanarPoint(P).applyMatrix4(e),
          r = this.normal.applyMatrix3(n).normalize();
        return (this.constant = -i.dot(r)), this;
      },
      translate: function (e) {
        return (this.constant -= e.dot(this.normal)), this;
      },
      equals: function (e) {
        return e.normal.equals(this.normal) && e.constant === this.constant;
      },
    });
    var I = new R(),
      U = new d.a();
    function F(e, t, n, i, r, a) {
      this.planes = [
        void 0 !== e ? e : new C(),
        void 0 !== t ? t : new C(),
        void 0 !== n ? n : new C(),
        void 0 !== i ? i : new C(),
        void 0 !== r ? r : new C(),
        void 0 !== a ? a : new C(),
      ];
    }
    Object.assign(F.prototype, {
      set: function (e, t, n, i, r, a) {
        var o = this.planes;
        return (
          o[0].copy(e),
          o[1].copy(t),
          o[2].copy(n),
          o[3].copy(i),
          o[4].copy(r),
          o[5].copy(a),
          this
        );
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this;
      },
      setFromMatrix: function (e) {
        var t = this.planes,
          n = e.elements,
          i = n[0],
          r = n[1],
          a = n[2],
          o = n[3],
          s = n[4],
          l = n[5],
          c = n[6],
          u = n[7],
          h = n[8],
          d = n[9],
          f = n[10],
          p = n[11],
          m = n[12],
          g = n[13],
          v = n[14],
          _ = n[15];
        return (
          t[0].setComponents(o - i, u - s, p - h, _ - m).normalize(),
          t[1].setComponents(o + i, u + s, p + h, _ + m).normalize(),
          t[2].setComponents(o + r, u + l, p + d, _ + g).normalize(),
          t[3].setComponents(o - r, u - l, p - d, _ - g).normalize(),
          t[4].setComponents(o - a, u - c, p - f, _ - v).normalize(),
          t[5].setComponents(o + a, u + c, p + f, _ + v).normalize(),
          this
        );
      },
      intersectsObject: function (e) {
        var t = e.geometry;
        return (
          null === t.boundingSphere && t.computeBoundingSphere(),
          I.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
          this.intersectsSphere(I)
        );
      },
      intersectsSprite: function (e) {
        return (
          I.center.set(0, 0, 0),
          (I.radius = 0.7071067811865476),
          I.applyMatrix4(e.matrixWorld),
          this.intersectsSphere(I)
        );
      },
      intersectsSphere: function (e) {
        for (
          var t = this.planes, n = e.center, i = -e.radius, r = 0;
          r < 6;
          r++
        ) {
          if (t[r].distanceToPoint(n) < i) return !1;
        }
        return !0;
      },
      intersectsBox: function (e) {
        for (var t = this.planes, n = 0; n < 6; n++) {
          var i = t[n];
          if (
            ((U.x = i.normal.x > 0 ? e.max.x : e.min.x),
            (U.y = i.normal.y > 0 ? e.max.y : e.min.y),
            (U.z = i.normal.z > 0 ? e.max.z : e.min.z),
            i.distanceToPoint(U) < 0)
          )
            return !1;
        }
        return !0;
      },
      containsPoint: function (e) {
        for (var t = this.planes, n = 0; n < 6; n++)
          if (t[n].distanceToPoint(e) < 0) return !1;
        return !0;
      },
    });
    var O = new d.a(),
      z = new W(),
      B = new d.a(0, 0, 0),
      G = new d.a(1, 1, 1),
      V = new d.a(),
      H = new d.a(),
      k = new d.a();
    function W() {
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
          );
    }
    Object.assign(W.prototype, {
      isMatrix4: !0,
      set: function (e, t, n, i, r, a, o, s, l, c, u, h, d, f, p, m) {
        var g = this.elements;
        return (
          (g[0] = e),
          (g[4] = t),
          (g[8] = n),
          (g[12] = i),
          (g[1] = r),
          (g[5] = a),
          (g[9] = o),
          (g[13] = s),
          (g[2] = l),
          (g[6] = c),
          (g[10] = u),
          (g[14] = h),
          (g[3] = d),
          (g[7] = f),
          (g[11] = p),
          (g[15] = m),
          this
        );
      },
      identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      clone: function () {
        return new W().fromArray(this.elements);
      },
      copy: function (e) {
        var t = this.elements,
          n = e.elements;
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          (t[9] = n[9]),
          (t[10] = n[10]),
          (t[11] = n[11]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15]),
          this
        );
      },
      copyPosition: function (e) {
        var t = this.elements,
          n = e.elements;
        return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
      },
      extractBasis: function (e, t, n) {
        return (
          e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this
        );
      },
      makeBasis: function (e, t, n) {
        return (
          this.set(
            e.x,
            t.x,
            n.x,
            0,
            e.y,
            t.y,
            n.y,
            0,
            e.z,
            t.z,
            n.z,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      extractRotation: function (e) {
        var t = this.elements,
          n = e.elements,
          i = 1 / O.setFromMatrixColumn(e, 0).length(),
          r = 1 / O.setFromMatrixColumn(e, 1).length(),
          a = 1 / O.setFromMatrixColumn(e, 2).length();
        return (
          (t[0] = n[0] * i),
          (t[1] = n[1] * i),
          (t[2] = n[2] * i),
          (t[3] = 0),
          (t[4] = n[4] * r),
          (t[5] = n[5] * r),
          (t[6] = n[6] * r),
          (t[7] = 0),
          (t[8] = n[8] * a),
          (t[9] = n[9] * a),
          (t[10] = n[10] * a),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          this
        );
      },
      makeRotationFromEuler: function (e) {
        (e && e.isEuler) ||
          console.error(
            "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
          );
        var t = this.elements,
          n = e.x,
          i = e.y,
          r = e.z,
          a = Math.cos(n),
          o = Math.sin(n),
          s = Math.cos(i),
          l = Math.sin(i),
          c = Math.cos(r),
          u = Math.sin(r);
        if ("XYZ" === e.order) {
          var h = a * c,
            d = a * u,
            f = o * c,
            p = o * u;
          (t[0] = s * c),
            (t[4] = -s * u),
            (t[8] = l),
            (t[1] = d + f * l),
            (t[5] = h - p * l),
            (t[9] = -o * s),
            (t[2] = p - h * l),
            (t[6] = f + d * l),
            (t[10] = a * s);
        } else if ("YXZ" === e.order) {
          var m = s * c,
            g = s * u,
            v = l * c,
            _ = l * u;
          (t[0] = m + _ * o),
            (t[4] = v * o - g),
            (t[8] = a * l),
            (t[1] = a * u),
            (t[5] = a * c),
            (t[9] = -o),
            (t[2] = g * o - v),
            (t[6] = _ + m * o),
            (t[10] = a * s);
        } else if ("ZXY" === e.order) {
          (m = s * c), (g = s * u), (v = l * c), (_ = l * u);
          (t[0] = m - _ * o),
            (t[4] = -a * u),
            (t[8] = v + g * o),
            (t[1] = g + v * o),
            (t[5] = a * c),
            (t[9] = _ - m * o),
            (t[2] = -a * l),
            (t[6] = o),
            (t[10] = a * s);
        } else if ("ZYX" === e.order) {
          (h = a * c), (d = a * u), (f = o * c), (p = o * u);
          (t[0] = s * c),
            (t[4] = f * l - d),
            (t[8] = h * l + p),
            (t[1] = s * u),
            (t[5] = p * l + h),
            (t[9] = d * l - f),
            (t[2] = -l),
            (t[6] = o * s),
            (t[10] = a * s);
        } else if ("YZX" === e.order) {
          var x = a * s,
            y = a * l,
            M = o * s,
            b = o * l;
          (t[0] = s * c),
            (t[4] = b - x * u),
            (t[8] = M * u + y),
            (t[1] = u),
            (t[5] = a * c),
            (t[9] = -o * c),
            (t[2] = -l * c),
            (t[6] = y * u + M),
            (t[10] = x - b * u);
        } else if ("XZY" === e.order) {
          (x = a * s), (y = a * l), (M = o * s), (b = o * l);
          (t[0] = s * c),
            (t[4] = -u),
            (t[8] = l * c),
            (t[1] = x * u + b),
            (t[5] = a * c),
            (t[9] = y * u - M),
            (t[2] = M * u - y),
            (t[6] = o * c),
            (t[10] = b * u + x);
        }
        return (
          (t[3] = 0),
          (t[7] = 0),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          this
        );
      },
      makeRotationFromQuaternion: function (e) {
        return this.compose(B, e, G);
      },
      lookAt: function (e, t, n) {
        var i = this.elements;
        return (
          k.subVectors(e, t),
          0 === k.lengthSq() && (k.z = 1),
          k.normalize(),
          V.crossVectors(n, k),
          0 === V.lengthSq() &&
            (1 === Math.abs(n.z) ? (k.x += 1e-4) : (k.z += 1e-4),
            k.normalize(),
            V.crossVectors(n, k)),
          V.normalize(),
          H.crossVectors(k, V),
          (i[0] = V.x),
          (i[4] = H.x),
          (i[8] = k.x),
          (i[1] = V.y),
          (i[5] = H.y),
          (i[9] = k.y),
          (i[2] = V.z),
          (i[6] = H.z),
          (i[10] = k.z),
          this
        );
      },
      multiply: function (e, t) {
        return void 0 !== t
          ? (console.warn(
              "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
            ),
            this.multiplyMatrices(e, t))
          : this.multiplyMatrices(this, e);
      },
      premultiply: function (e) {
        return this.multiplyMatrices(e, this);
      },
      multiplyMatrices: function (e, t) {
        var n = e.elements,
          i = t.elements,
          r = this.elements,
          a = n[0],
          o = n[4],
          s = n[8],
          l = n[12],
          c = n[1],
          u = n[5],
          h = n[9],
          d = n[13],
          f = n[2],
          p = n[6],
          m = n[10],
          g = n[14],
          v = n[3],
          _ = n[7],
          x = n[11],
          y = n[15],
          M = i[0],
          b = i[4],
          w = i[8],
          E = i[12],
          T = i[1],
          S = i[5],
          A = i[9],
          L = i[13],
          R = i[2],
          P = i[6],
          N = i[10],
          D = i[14],
          C = i[3],
          I = i[7],
          U = i[11],
          F = i[15];
        return (
          (r[0] = a * M + o * T + s * R + l * C),
          (r[4] = a * b + o * S + s * P + l * I),
          (r[8] = a * w + o * A + s * N + l * U),
          (r[12] = a * E + o * L + s * D + l * F),
          (r[1] = c * M + u * T + h * R + d * C),
          (r[5] = c * b + u * S + h * P + d * I),
          (r[9] = c * w + u * A + h * N + d * U),
          (r[13] = c * E + u * L + h * D + d * F),
          (r[2] = f * M + p * T + m * R + g * C),
          (r[6] = f * b + p * S + m * P + g * I),
          (r[10] = f * w + p * A + m * N + g * U),
          (r[14] = f * E + p * L + m * D + g * F),
          (r[3] = v * M + _ * T + x * R + y * C),
          (r[7] = v * b + _ * S + x * P + y * I),
          (r[11] = v * w + _ * A + x * N + y * U),
          (r[15] = v * E + _ * L + x * D + y * F),
          this
        );
      },
      multiplyScalar: function (e) {
        var t = this.elements;
        return (
          (t[0] *= e),
          (t[4] *= e),
          (t[8] *= e),
          (t[12] *= e),
          (t[1] *= e),
          (t[5] *= e),
          (t[9] *= e),
          (t[13] *= e),
          (t[2] *= e),
          (t[6] *= e),
          (t[10] *= e),
          (t[14] *= e),
          (t[3] *= e),
          (t[7] *= e),
          (t[11] *= e),
          (t[15] *= e),
          this
        );
      },
      applyToBufferAttribute: function (e) {
        for (var t = 0, n = e.count; t < n; t++)
          (O.x = e.getX(t)),
            (O.y = e.getY(t)),
            (O.z = e.getZ(t)),
            O.applyMatrix4(this),
            e.setXYZ(t, O.x, O.y, O.z);
        return e;
      },
      determinant: function () {
        var e = this.elements,
          t = e[0],
          n = e[4],
          i = e[8],
          r = e[12],
          a = e[1],
          o = e[5],
          s = e[9],
          l = e[13],
          c = e[2],
          u = e[6],
          h = e[10],
          d = e[14];
        return (
          e[3] *
            (+r * s * u -
              i * l * u -
              r * o * h +
              n * l * h +
              i * o * d -
              n * s * d) +
          e[7] *
            (+t * s * d -
              t * l * h +
              r * a * h -
              i * a * d +
              i * l * c -
              r * s * c) +
          e[11] *
            (+t * l * u -
              t * o * d -
              r * a * u +
              n * a * d +
              r * o * c -
              n * l * c) +
          e[15] *
            (-i * o * c -
              t * s * u +
              t * o * h +
              i * a * u -
              n * a * h +
              n * s * c)
        );
      },
      transpose: function () {
        var e,
          t = this.elements;
        return (
          (e = t[1]),
          (t[1] = t[4]),
          (t[4] = e),
          (e = t[2]),
          (t[2] = t[8]),
          (t[8] = e),
          (e = t[6]),
          (t[6] = t[9]),
          (t[9] = e),
          (e = t[3]),
          (t[3] = t[12]),
          (t[12] = e),
          (e = t[7]),
          (t[7] = t[13]),
          (t[13] = e),
          (e = t[11]),
          (t[11] = t[14]),
          (t[14] = e),
          this
        );
      },
      setPosition: function (e, t, n) {
        var i = this.elements;
        return (
          e.isVector3
            ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
            : ((i[12] = e), (i[13] = t), (i[14] = n)),
          this
        );
      },
      getInverse: function (e, t) {
        var n = this.elements,
          i = e.elements,
          r = i[0],
          a = i[1],
          o = i[2],
          s = i[3],
          l = i[4],
          c = i[5],
          u = i[6],
          h = i[7],
          d = i[8],
          f = i[9],
          p = i[10],
          m = i[11],
          g = i[12],
          v = i[13],
          _ = i[14],
          x = i[15],
          y =
            f * _ * h -
            v * p * h +
            v * u * m -
            c * _ * m -
            f * u * x +
            c * p * x,
          M =
            g * p * h -
            d * _ * h -
            g * u * m +
            l * _ * m +
            d * u * x -
            l * p * x,
          b =
            d * v * h -
            g * f * h +
            g * c * m -
            l * v * m -
            d * c * x +
            l * f * x,
          w =
            g * f * u -
            d * v * u -
            g * c * p +
            l * v * p +
            d * c * _ -
            l * f * _,
          E = r * y + a * M + o * b + s * w;
        if (0 === E) {
          var T =
            "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === t) throw new Error(T);
          return console.warn(T), this.identity();
        }
        var S = 1 / E;
        return (
          (n[0] = y * S),
          (n[1] =
            (v * p * s -
              f * _ * s -
              v * o * m +
              a * _ * m +
              f * o * x -
              a * p * x) *
            S),
          (n[2] =
            (c * _ * s -
              v * u * s +
              v * o * h -
              a * _ * h -
              c * o * x +
              a * u * x) *
            S),
          (n[3] =
            (f * u * s -
              c * p * s -
              f * o * h +
              a * p * h +
              c * o * m -
              a * u * m) *
            S),
          (n[4] = M * S),
          (n[5] =
            (d * _ * s -
              g * p * s +
              g * o * m -
              r * _ * m -
              d * o * x +
              r * p * x) *
            S),
          (n[6] =
            (g * u * s -
              l * _ * s -
              g * o * h +
              r * _ * h +
              l * o * x -
              r * u * x) *
            S),
          (n[7] =
            (l * p * s -
              d * u * s +
              d * o * h -
              r * p * h -
              l * o * m +
              r * u * m) *
            S),
          (n[8] = b * S),
          (n[9] =
            (g * f * s -
              d * v * s -
              g * a * m +
              r * v * m +
              d * a * x -
              r * f * x) *
            S),
          (n[10] =
            (l * v * s -
              g * c * s +
              g * a * h -
              r * v * h -
              l * a * x +
              r * c * x) *
            S),
          (n[11] =
            (d * c * s -
              l * f * s -
              d * a * h +
              r * f * h +
              l * a * m -
              r * c * m) *
            S),
          (n[12] = w * S),
          (n[13] =
            (d * v * o -
              g * f * o +
              g * a * p -
              r * v * p -
              d * a * _ +
              r * f * _) *
            S),
          (n[14] =
            (g * c * o -
              l * v * o -
              g * a * u +
              r * v * u +
              l * a * _ -
              r * c * _) *
            S),
          (n[15] =
            (l * f * o -
              d * c * o +
              d * a * u -
              r * f * u -
              l * a * p +
              r * c * p) *
            S),
          this
        );
      },
      scale: function (e) {
        var t = this.elements,
          n = e.x,
          i = e.y,
          r = e.z;
        return (
          (t[0] *= n),
          (t[4] *= i),
          (t[8] *= r),
          (t[1] *= n),
          (t[5] *= i),
          (t[9] *= r),
          (t[2] *= n),
          (t[6] *= i),
          (t[10] *= r),
          (t[3] *= n),
          (t[7] *= i),
          (t[11] *= r),
          this
        );
      },
      getMaxScaleOnAxis: function () {
        var e = this.elements,
          t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
          i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i));
      },
      makeTranslation: function (e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
      },
      makeRotationX: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
      },
      makeRotationY: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
      },
      makeRotationZ: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      makeRotationAxis: function (e, t) {
        var n = Math.cos(t),
          i = Math.sin(t),
          r = 1 - n,
          a = e.x,
          o = e.y,
          s = e.z,
          l = r * a,
          c = r * o;
        return (
          this.set(
            l * a + n,
            l * o - i * s,
            l * s + i * o,
            0,
            l * o + i * s,
            c * o + n,
            c * s - i * a,
            0,
            l * s - i * o,
            c * s + i * a,
            r * s * s + n,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      makeScale: function (e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
      },
      makeShear: function (e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this;
      },
      compose: function (e, t, n) {
        var i = this.elements,
          r = t._x,
          a = t._y,
          o = t._z,
          s = t._w,
          l = r + r,
          c = a + a,
          u = o + o,
          h = r * l,
          d = r * c,
          f = r * u,
          p = a * c,
          m = a * u,
          g = o * u,
          v = s * l,
          _ = s * c,
          x = s * u,
          y = n.x,
          M = n.y,
          b = n.z;
        return (
          (i[0] = (1 - (p + g)) * y),
          (i[1] = (d + x) * y),
          (i[2] = (f - _) * y),
          (i[3] = 0),
          (i[4] = (d - x) * M),
          (i[5] = (1 - (h + g)) * M),
          (i[6] = (m + v) * M),
          (i[7] = 0),
          (i[8] = (f + _) * b),
          (i[9] = (m - v) * b),
          (i[10] = (1 - (h + p)) * b),
          (i[11] = 0),
          (i[12] = e.x),
          (i[13] = e.y),
          (i[14] = e.z),
          (i[15] = 1),
          this
        );
      },
      decompose: function (e, t, n) {
        var i = this.elements,
          r = O.set(i[0], i[1], i[2]).length(),
          a = O.set(i[4], i[5], i[6]).length(),
          o = O.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r),
          (e.x = i[12]),
          (e.y = i[13]),
          (e.z = i[14]),
          z.copy(this);
        var s = 1 / r,
          l = 1 / a,
          c = 1 / o;
        return (
          (z.elements[0] *= s),
          (z.elements[1] *= s),
          (z.elements[2] *= s),
          (z.elements[4] *= l),
          (z.elements[5] *= l),
          (z.elements[6] *= l),
          (z.elements[8] *= c),
          (z.elements[9] *= c),
          (z.elements[10] *= c),
          t.setFromRotationMatrix(z),
          (n.x = r),
          (n.y = a),
          (n.z = o),
          this
        );
      },
      makePerspective: function (e, t, n, i, r, a) {
        void 0 === a &&
          console.warn(
            "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
          );
        var o = this.elements,
          s = (2 * r) / (t - e),
          l = (2 * r) / (n - i),
          c = (t + e) / (t - e),
          u = (n + i) / (n - i),
          h = -(a + r) / (a - r),
          d = (-2 * a * r) / (a - r);
        return (
          (o[0] = s),
          (o[4] = 0),
          (o[8] = c),
          (o[12] = 0),
          (o[1] = 0),
          (o[5] = l),
          (o[9] = u),
          (o[13] = 0),
          (o[2] = 0),
          (o[6] = 0),
          (o[10] = h),
          (o[14] = d),
          (o[3] = 0),
          (o[7] = 0),
          (o[11] = -1),
          (o[15] = 0),
          this
        );
      },
      makeOrthographic: function (e, t, n, i, r, a) {
        var o = this.elements,
          s = 1 / (t - e),
          l = 1 / (n - i),
          c = 1 / (a - r),
          u = (t + e) * s,
          h = (n + i) * l,
          d = (a + r) * c;
        return (
          (o[0] = 2 * s),
          (o[4] = 0),
          (o[8] = 0),
          (o[12] = -u),
          (o[1] = 0),
          (o[5] = 2 * l),
          (o[9] = 0),
          (o[13] = -h),
          (o[2] = 0),
          (o[6] = 0),
          (o[10] = -2 * c),
          (o[14] = -d),
          (o[3] = 0),
          (o[7] = 0),
          (o[11] = 0),
          (o[15] = 1),
          this
        );
      },
      equals: function (e) {
        for (var t = this.elements, n = e.elements, i = 0; i < 16; i++)
          if (t[i] !== n[i]) return !1;
        return !0;
      },
      fromArray: function (e, t) {
        void 0 === t && (t = 0);
        for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this;
      },
      toArray: function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var n = this.elements;
        return (
          (e[t] = n[0]),
          (e[t + 1] = n[1]),
          (e[t + 2] = n[2]),
          (e[t + 3] = n[3]),
          (e[t + 4] = n[4]),
          (e[t + 5] = n[5]),
          (e[t + 6] = n[6]),
          (e[t + 7] = n[7]),
          (e[t + 8] = n[8]),
          (e[t + 9] = n[9]),
          (e[t + 10] = n[10]),
          (e[t + 11] = n[11]),
          (e[t + 12] = n[12]),
          (e[t + 13] = n[13]),
          (e[t + 14] = n[14]),
          (e[t + 15] = n[15]),
          e
        );
      },
    });
    var j = {
        alphamap_fragment:
          "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
        alphamap_pars_fragment:
          "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
        alphatest_fragment:
          "\n#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",
        aomap_fragment:
          "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n",
        aomap_pars_fragment:
          "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex:
          "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n",
        bsdfs:
          '\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n\n}\n\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t// page 32, equation 26: E[window1]\n\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t// this is intended to be used on spot and point lights who are represented as luminous intensity\n\t// but who must be converted to luminous irradiance for surface lighting calculation\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\tif( cutoffDistance > 0.0 ) {\n\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t}\n\n\treturn distanceFalloff;\n\n#else\n\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n#endif\n\n}\n\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick \'94\n\t// float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n} // validated\n\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\n\t// See F_Schlick\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\n\treturn Fr * fresnel + F0;\n\n}\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\t// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\n\t// also see #12151\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\n\treturn 1.0 / ( gl * gv );\n\n} // validated\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\t// dotNL and dotNV are explicitly swapped. This is not a mistake.\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\n\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\n\treturn specularColor * brdf.x + brdf.y;\n\n} // validated\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\t//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\t//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\n\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94\nfloat D_Charlie(float roughness, float NoH) {\n\t// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136\nfloat V_Neubelt(float NoV, float NoL) {\n\t// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\n\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n\n}\n\n#endif\n',
        bumpmap_pars_fragment:
          "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",
        clipping_planes_fragment:
          "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n",
        clipping_planes_pars_fragment:
          "\n#if NUM_CLIPPING_PLANES > 0\n\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
        clipping_planes_pars_vertex:
          "\n#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
        clipping_planes_vertex:
          "\n#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment:
          "\n#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n",
        color_pars_fragment:
          "\n#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n",
        color_pars_vertex:
          "\n#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n",
        color_vertex:
          "\n#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif\n",
        common:
          "\n#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\n// https://en.wikipedia.org/wiki/Relative_luminance\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\n\treturn dot( weights, color.rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n  return m[ 2 ][ 3 ] == - 1.0;\n\n}\n",
        cube_uv_reflection_fragment:
          "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\n\n// These shader functions convert between the UV coordinates of a single face of\n// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n// sampling a textureCube (not generally normalized).\n\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\n\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\n\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n\n// These defines must match with PMREMGenerator\n\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\n\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25\n  }\n  return mip;\n}\n\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif\n",
        defaultnormal_vertex:
          "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n",
        displacementmap_pars_vertex:
          "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",
        displacementmap_vertex:
          "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n",
        emissivemap_fragment:
          "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
        emissivemap_pars_fragment:
          "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",
        encodings_fragment:
          "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment:
          "\n// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\n\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\n\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\n\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\n\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
        envmap_fragment:
          "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t}  else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\n\t\treflectVec = normalize( reflectVec );\n\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\treflectVec = normalize( reflectVec );\n\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\n\t\tenvColor = envMapTexelToLinear( envColor );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",
        envmap_common_pars_fragment:
          "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n",
        envmap_pars_fragment:
          "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n",
        envmap_pars_vertex:
          "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n",
        envmap_physical_pars_fragment:
          "\n#if defined( USE_ENVMAP )\n\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\n\tvec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\n\t\t\t// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n\t\t\t// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#else\n\n\t\t\t\t// force the bias high to get the last LOD level as it is the most blurred.\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\n\t\t#else\n\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\n\t\t#endif\n\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t}\n\n\t// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\n\t\t// clamp to allowable LOD ranges.\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\n\t}\n\n\tvec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\n\t\t  // Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t#else\n\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\n\t\t#endif\n\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#endif\n\n\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t}\n\n#endif\n",
        envmap_vertex:
          "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) { \n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
        fog_vertex:
          "\n#ifdef USE_FOG\n\n\tfogDepth = -mvPosition.z;\n\n#endif\n",
        fog_pars_vertex:
          "\n#ifdef USE_FOG\n\n\tvarying float fogDepth;\n\n#endif\n",
        fog_fragment:
          "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
        fog_pars_fragment:
          "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n",
        gradientmap_pars_fragment:
          "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\n\t#else\n\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\n\t#endif\n\n}\n\n",
        lightmap_fragment:
          "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\n\n#endif\n",
        lightmap_pars_fragment:
          "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n",
        lights_lambert_vertex:
          "\nvec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\n#if NUM_POINT_LIGHTS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\n#endif\n\n/*\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\t// TODO (abelnation): implement\n\n\t}\n\n#endif\n*/\n\n#if NUM_DIR_LIGHTS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
        lights_pars_begin:
          "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI;\n\n\t#endif\n\n\treturn irradiance;\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\n\t\tif ( angleCos > spotLight.coneCos ) {\n\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\n\t\t} else {\n\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\n\t\t}\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tirradiance *= PI;\n\n\t\t#endif\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
        lights_toon_fragment:
          "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_toon_pars_fragment:
          "\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct ToonMaterial {\n\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_phong_fragment:
          "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment:
          "\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct BlinnPhongMaterial {\n\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment:
          "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n\n#ifdef REFLECTIVITY\n\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n\n#endif\n\n#ifdef CLEARCOAT\n\n\tmaterial.clearcoat = saturate( clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheen;\n\n#endif\n",
        lights_physical_pars_fragment:
          "\nstruct PhysicalMaterial {\n\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n\n};\n\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n\n// Clear coat directional hemishperical reflectance (this approximation should be improved)\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\t#ifdef CLEARCOAT\n\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tccIrradiance *= PI; // punctual light\n\n\t\t#endif\n\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\n\t#else\n\n\t\tfloat clearcoatDHR = 0.0;\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef CLEARCOAT\n\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\n\t#else\n\n\t\tfloat clearcoatDHR = 0.0;\n\n\t#endif\n\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n",
        lights_fragment_begin:
          "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t}\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
        lights_fragment_maps:
          "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\n\t#ifdef CLEARCOAT\n\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\n\t#endif\n\n#endif\n",
        lights_fragment_end:
          "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n",
        logdepthbuf_fragment:
          "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n",
        logdepthbuf_pars_fragment:
          "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n",
        logdepthbuf_pars_vertex:
          "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n",
        logdepthbuf_vertex:
          "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
        map_fragment:
          "\n#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n",
        map_pars_fragment:
          "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n",
        map_particle_fragment:
          "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n",
        map_particle_pars_fragment:
          "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
        metalnessmap_fragment:
          "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n",
        metalnessmap_pars_fragment:
          "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n",
        morphnormal_vertex:
          "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n#endif\n",
        morphtarget_pars_vertex:
          "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif\n",
        morphtarget_vertex:
          "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n",
        normal_fragment_begin:
          "\n#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n",
        normal_fragment_maps:
          "\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n",
        normalmap_pars_fragment:
          "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\n\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tmat3 tsn = mat3( S, T, N );\n\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n",
        clearcoat_normal_fragment_begin:
          "\n#ifdef CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n",
        clearcoat_normal_fragment_maps:
          "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\n\t#endif\n\n#endif\n",
        clearcoat_normalmap_pars_fragment:
          "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n",
        packing:
          "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment:
          "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
        project_vertex:
          "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n",
        dithering_fragment:
          "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n",
        dithering_pars_fragment:
          "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n",
        roughnessmap_fragment:
          "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n",
        roughnessmap_pars_fragment:
          "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n",
        shadowmap_pars_fragment:
          "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\n\t\tvec2 f = fract( uv * size + 0.5 );\n\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\n\t\treturn c;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
        shadowmap_pars_vertex:
          "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n",
        shadowmap_vertex:
          "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n",
        shadowmask_pars_fragment:
          "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLight directionalLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLight spotLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLight pointLight;\n\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n",
        skinbase_vertex:
          "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n",
        skinning_pars_vertex:
          "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
        skinning_vertex:
          "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n",
        skinnormal_vertex:
          "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n",
        specularmap_fragment:
          "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n",
        specularmap_pars_fragment:
          "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n",
        tonemapping_fragment:
          "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
        tonemapping_pars_fragment:
          "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n\t// John Hable's filmic operator from Uncharted 2 video game\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n\n}\n",
        uv_pars_fragment:
          "\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n",
        uv_pars_vertex:
          "\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n",
        uv_vertex:
          "\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n",
        uv2_pars_fragment:
          "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n",
        uv2_pars_vertex:
          "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n",
        uv2_vertex:
          "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n",
        worldpos_vertex:
          "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n",
        background_frag:
          "\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tvec4 texColor = texture2D( t2D, vUv );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        background_vert:
          "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n",
        cube_frag:
          "\n\n#include <envmap_common_pars_fragment>\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        cube_vert:
          "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
        depth_frag:
          "\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\n\t#endif\n\n}\n",
        depth_vert:
          "\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n}\n",
        distanceRGBA_frag:
          "\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
        distanceRGBA_vert:
          "\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n",
        equirect_frag:
          "\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV;\n\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        equirect_vert:
          "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n",
        linedashed_frag:
          "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        linedashed_vert:
          "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\n\tvLineDistance = scale * lineDistance;\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshbasic_frag:
          "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        meshbasic_vert:
          "\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshlambert_frag:
          "\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\n\t#endif\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert:
          "\n#define LAMBERT\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshmatcap_frag:
          "\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( 1.0 );\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        meshmatcap_vert:
          "\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\t\tvNormal = normalize( transformedNormal );\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n",
        meshtoon_frag:
          "\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshtoon_vert:
          "\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshphong_frag:
          "\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshphong_vert:
          "\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshphysical_frag:
          "\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t// this is a stub for the transparency model\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshphysical_vert:
          "\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        normal_frag:
          "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n}\n",
        normal_vert:
          "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n",
        points_frag:
          "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        points_vert:
          "\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n",
        shadow_frag:
          "\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <fog_fragment>\n\n}\n",
        shadow_vert:
          "\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        sprite_frag:
          "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        sprite_vert:
          "\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
      },
      X = n(5),
      q = n(1),
      Y = n(3),
      Z = {
        basic: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.specularmap,
            q.a.envmap,
            q.a.aomap,
            q.a.lightmap,
            q.a.fog,
          ]),
          vertexShader: j.meshbasic_vert,
          fragmentShader: j.meshbasic_frag,
        },
        lambert: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.specularmap,
            q.a.envmap,
            q.a.aomap,
            q.a.lightmap,
            q.a.emissivemap,
            q.a.fog,
            q.a.lights,
            { emissive: { value: new Y.a(0) } },
          ]),
          vertexShader: j.meshlambert_vert,
          fragmentShader: j.meshlambert_frag,
        },
        phong: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.specularmap,
            q.a.envmap,
            q.a.aomap,
            q.a.lightmap,
            q.a.emissivemap,
            q.a.bumpmap,
            q.a.normalmap,
            q.a.displacementmap,
            q.a.fog,
            q.a.lights,
            {
              emissive: { value: new Y.a(0) },
              specular: { value: new Y.a(1118481) },
              shininess: { value: 30 },
            },
          ]),
          vertexShader: j.meshphong_vert,
          fragmentShader: j.meshphong_frag,
        },
        standard: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.envmap,
            q.a.aomap,
            q.a.lightmap,
            q.a.emissivemap,
            q.a.bumpmap,
            q.a.normalmap,
            q.a.displacementmap,
            q.a.roughnessmap,
            q.a.metalnessmap,
            q.a.fog,
            q.a.lights,
            {
              emissive: { value: new Y.a(0) },
              roughness: { value: 0.5 },
              metalness: { value: 0.5 },
              envMapIntensity: { value: 1 },
            },
          ]),
          vertexShader: j.meshphysical_vert,
          fragmentShader: j.meshphysical_frag,
        },
        toon: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.specularmap,
            q.a.aomap,
            q.a.lightmap,
            q.a.emissivemap,
            q.a.bumpmap,
            q.a.normalmap,
            q.a.displacementmap,
            q.a.gradientmap,
            q.a.fog,
            q.a.lights,
            {
              emissive: { value: new Y.a(0) },
              specular: { value: new Y.a(1118481) },
              shininess: { value: 30 },
            },
          ]),
          vertexShader: j.meshtoon_vert,
          fragmentShader: j.meshtoon_frag,
        },
        matcap: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.bumpmap,
            q.a.normalmap,
            q.a.displacementmap,
            q.a.fog,
            { matcap: { value: null } },
          ]),
          vertexShader: j.meshmatcap_vert,
          fragmentShader: j.meshmatcap_frag,
        },
        points: {
          uniforms: Object(X.c)([q.a.points, q.a.fog]),
          vertexShader: j.points_vert,
          fragmentShader: j.points_frag,
        },
        dashed: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.fog,
            {
              scale: { value: 1 },
              dashSize: { value: 1 },
              totalSize: { value: 2 },
            },
          ]),
          vertexShader: j.linedashed_vert,
          fragmentShader: j.linedashed_frag,
        },
        depth: {
          uniforms: Object(X.c)([q.a.common, q.a.displacementmap]),
          vertexShader: j.depth_vert,
          fragmentShader: j.depth_frag,
        },
        normal: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.bumpmap,
            q.a.normalmap,
            q.a.displacementmap,
            { opacity: { value: 1 } },
          ]),
          vertexShader: j.normal_vert,
          fragmentShader: j.normal_frag,
        },
        sprite: {
          uniforms: Object(X.c)([q.a.sprite, q.a.fog]),
          vertexShader: j.sprite_vert,
          fragmentShader: j.sprite_frag,
        },
        background: {
          uniforms: { uvTransform: { value: new s.a() }, t2D: { value: null } },
          vertexShader: j.background_vert,
          fragmentShader: j.background_frag,
        },
        cube: {
          uniforms: Object(X.c)([q.a.envmap, { opacity: { value: 1 } }]),
          vertexShader: j.cube_vert,
          fragmentShader: j.cube_frag,
        },
        equirect: {
          uniforms: { tEquirect: { value: null } },
          vertexShader: j.equirect_vert,
          fragmentShader: j.equirect_frag,
        },
        distanceRGBA: {
          uniforms: Object(X.c)([
            q.a.common,
            q.a.displacementmap,
            {
              referencePosition: { value: new d.a() },
              nearDistance: { value: 1 },
              farDistance: { value: 1e3 },
            },
          ]),
          vertexShader: j.distanceRGBA_vert,
          fragmentShader: j.distanceRGBA_frag,
        },
        shadow: {
          uniforms: Object(X.c)([
            q.a.lights,
            q.a.fog,
            { color: { value: new Y.a(0) }, opacity: { value: 1 } },
          ]),
          vertexShader: j.shadow_vert,
          fragmentShader: j.shadow_frag,
        },
      };
    function J(e, t, n, i) {
      (this.x = e || 0),
        (this.y = t || 0),
        (this.z = n || 0),
        (this.w = void 0 !== i ? i : 1);
    }
    (Z.physical = {
      uniforms: Object(X.c)([
        Z.standard.uniforms,
        {
          transparency: { value: 0 },
          clearcoat: { value: 0 },
          clearcoatRoughness: { value: 0 },
          sheen: { value: new Y.a(0) },
          clearcoatNormalScale: { value: new o.a(1, 1) },
          clearcoatNormalMap: { value: null },
        },
      ]),
      vertexShader: j.meshphysical_vert,
      fragmentShader: j.meshphysical_frag,
    }),
      Object.defineProperties(J.prototype, {
        width: {
          get: function () {
            return this.z;
          },
          set: function (e) {
            this.z = e;
          },
        },
        height: {
          get: function () {
            return this.w;
          },
          set: function (e) {
            this.w = e;
          },
        },
      }),
      Object.assign(J.prototype, {
        isVector4: !0,
        set: function (e, t, n, i) {
          return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
        },
        setScalar: function (e) {
          return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
        },
        setX: function (e) {
          return (this.x = e), this;
        },
        setY: function (e) {
          return (this.y = e), this;
        },
        setZ: function (e) {
          return (this.z = e), this;
        },
        setW: function (e) {
          return (this.w = e), this;
        },
        setComponent: function (e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            case 2:
              this.z = t;
              break;
            case 3:
              this.w = t;
              break;
            default:
              throw new Error("index is out of range: " + e);
          }
          return this;
        },
        getComponent: function (e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + e);
          }
        },
        clone: function () {
          return new this.constructor(this.x, this.y, this.z, this.w);
        },
        copy: function (e) {
          return (
            (this.x = e.x),
            (this.y = e.y),
            (this.z = e.z),
            (this.w = void 0 !== e.w ? e.w : 1),
            this
          );
        },
        add: function (e, t) {
          return void 0 !== t
            ? (console.warn(
                "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(e, t))
            : ((this.x += e.x),
              (this.y += e.y),
              (this.z += e.z),
              (this.w += e.w),
              this);
        },
        addScalar: function (e) {
          return (
            (this.x += e), (this.y += e), (this.z += e), (this.w += e), this
          );
        },
        addVectors: function (e, t) {
          return (
            (this.x = e.x + t.x),
            (this.y = e.y + t.y),
            (this.z = e.z + t.z),
            (this.w = e.w + t.w),
            this
          );
        },
        addScaledVector: function (e, t) {
          return (
            (this.x += e.x * t),
            (this.y += e.y * t),
            (this.z += e.z * t),
            (this.w += e.w * t),
            this
          );
        },
        sub: function (e, t) {
          return void 0 !== t
            ? (console.warn(
                "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(e, t))
            : ((this.x -= e.x),
              (this.y -= e.y),
              (this.z -= e.z),
              (this.w -= e.w),
              this);
        },
        subScalar: function (e) {
          return (
            (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this
          );
        },
        subVectors: function (e, t) {
          return (
            (this.x = e.x - t.x),
            (this.y = e.y - t.y),
            (this.z = e.z - t.z),
            (this.w = e.w - t.w),
            this
          );
        },
        multiplyScalar: function (e) {
          return (
            (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this
          );
        },
        applyMatrix4: function (e) {
          var t = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = e.elements;
          return (
            (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
            (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
            (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
            (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
            this
          );
        },
        divideScalar: function (e) {
          return this.multiplyScalar(1 / e);
        },
        setAxisAngleFromQuaternion: function (e) {
          this.w = 2 * Math.acos(e.w);
          var t = Math.sqrt(1 - e.w * e.w);
          return (
            t < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
            this
          );
        },
        setAxisAngleFromRotationMatrix: function (e) {
          var t,
            n,
            i,
            r,
            a = e.elements,
            o = a[0],
            s = a[4],
            l = a[8],
            c = a[1],
            u = a[5],
            h = a[9],
            d = a[2],
            f = a[6],
            p = a[10];
          if (
            Math.abs(s - c) < 0.01 &&
            Math.abs(l - d) < 0.01 &&
            Math.abs(h - f) < 0.01
          ) {
            if (
              Math.abs(s + c) < 0.1 &&
              Math.abs(l + d) < 0.1 &&
              Math.abs(h + f) < 0.1 &&
              Math.abs(o + u + p - 3) < 0.1
            )
              return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            var m = (o + 1) / 2,
              g = (u + 1) / 2,
              v = (p + 1) / 2,
              _ = (s + c) / 4,
              x = (l + d) / 4,
              y = (h + f) / 4;
            return (
              m > g && m > v
                ? m < 0.01
                  ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                  : ((i = _ / (n = Math.sqrt(m))), (r = x / n))
                : g > v
                ? g < 0.01
                  ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                  : ((n = _ / (i = Math.sqrt(g))), (r = y / i))
                : v < 0.01
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((n = x / (r = Math.sqrt(v))), (i = y / r)),
              this.set(n, i, r, t),
              this
            );
          }
          var M = Math.sqrt(
            (f - h) * (f - h) + (l - d) * (l - d) + (c - s) * (c - s)
          );
          return (
            Math.abs(M) < 0.001 && (M = 1),
            (this.x = (f - h) / M),
            (this.y = (l - d) / M),
            (this.z = (c - s) / M),
            (this.w = Math.acos((o + u + p - 1) / 2)),
            this
          );
        },
        min: function (e) {
          return (
            (this.x = Math.min(this.x, e.x)),
            (this.y = Math.min(this.y, e.y)),
            (this.z = Math.min(this.z, e.z)),
            (this.w = Math.min(this.w, e.w)),
            this
          );
        },
        max: function (e) {
          return (
            (this.x = Math.max(this.x, e.x)),
            (this.y = Math.max(this.y, e.y)),
            (this.z = Math.max(this.z, e.z)),
            (this.w = Math.max(this.w, e.w)),
            this
          );
        },
        clamp: function (e, t) {
          return (
            (this.x = Math.max(e.x, Math.min(t.x, this.x))),
            (this.y = Math.max(e.y, Math.min(t.y, this.y))),
            (this.z = Math.max(e.z, Math.min(t.z, this.z))),
            (this.w = Math.max(e.w, Math.min(t.w, this.w))),
            this
          );
        },
        clampScalar: function (e, t) {
          return (
            (this.x = Math.max(e, Math.min(t, this.x))),
            (this.y = Math.max(e, Math.min(t, this.y))),
            (this.z = Math.max(e, Math.min(t, this.z))),
            (this.w = Math.max(e, Math.min(t, this.w))),
            this
          );
        },
        clampLength: function (e, t) {
          var n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(e, Math.min(t, n))
          );
        },
        floor: function () {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        },
        ceil: function () {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        },
        round: function () {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        },
        roundToZero: function () {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
          );
        },
        negate: function () {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
        },
        lengthSq: function () {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        },
        length: function () {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        },
        manhattanLength: function () {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        },
        normalize: function () {
          return this.divideScalar(this.length() || 1);
        },
        setLength: function (e) {
          return this.normalize().multiplyScalar(e);
        },
        lerp: function (e, t) {
          return (
            (this.x += (e.x - this.x) * t),
            (this.y += (e.y - this.y) * t),
            (this.z += (e.z - this.z) * t),
            (this.w += (e.w - this.w) * t),
            this
          );
        },
        lerpVectors: function (e, t, n) {
          return this.subVectors(t, e).multiplyScalar(n).add(e);
        },
        equals: function (e) {
          return (
            e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
          );
        },
        fromArray: function (e, t) {
          return (
            void 0 === t && (t = 0),
            (this.x = e[t]),
            (this.y = e[t + 1]),
            (this.z = e[t + 2]),
            (this.w = e[t + 3]),
            this
          );
        },
        toArray: function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this.x),
            (e[t + 1] = this.y),
            (e[t + 2] = this.z),
            (e[t + 3] = this.w),
            e
          );
        },
        fromBufferAttribute: function (e, t, n) {
          return (
            void 0 !== n &&
              console.warn(
                "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = e.getX(t)),
            (this.y = e.getY(t)),
            (this.z = e.getZ(t)),
            (this.w = e.getW(t)),
            this
          );
        },
      });
    var Q = n(7),
      K = new W(),
      $ = new Q.a();
    function ee(e, t, n, i) {
      (this._x = e || 0),
        (this._y = t || 0),
        (this._z = n || 0),
        (this._order = i || ee.DefaultOrder);
    }
    function te() {
      this.mask = 1;
    }
    (ee.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]),
      (ee.DefaultOrder = "XYZ"),
      Object.defineProperties(ee.prototype, {
        x: {
          get: function () {
            return this._x;
          },
          set: function (e) {
            (this._x = e), this._onChangeCallback();
          },
        },
        y: {
          get: function () {
            return this._y;
          },
          set: function (e) {
            (this._y = e), this._onChangeCallback();
          },
        },
        z: {
          get: function () {
            return this._z;
          },
          set: function (e) {
            (this._z = e), this._onChangeCallback();
          },
        },
        order: {
          get: function () {
            return this._order;
          },
          set: function (e) {
            (this._order = e), this._onChangeCallback();
          },
        },
      }),
      Object.assign(ee.prototype, {
        isEuler: !0,
        set: function (e, t, n, i) {
          return (
            (this._x = e),
            (this._y = t),
            (this._z = n),
            (this._order = i || this._order),
            this._onChangeCallback(),
            this
          );
        },
        clone: function () {
          return new this.constructor(this._x, this._y, this._z, this._order);
        },
        copy: function (e) {
          return (
            (this._x = e._x),
            (this._y = e._y),
            (this._z = e._z),
            (this._order = e._order),
            this._onChangeCallback(),
            this
          );
        },
        setFromRotationMatrix: function (e, t, n) {
          var r = i.a.clamp,
            a = e.elements,
            o = a[0],
            s = a[4],
            l = a[8],
            c = a[1],
            u = a[5],
            h = a[9],
            d = a[2],
            f = a[6],
            p = a[10];
          return (
            "XYZ" === (t = t || this._order)
              ? ((this._y = Math.asin(r(l, -1, 1))),
                Math.abs(l) < 0.9999999
                  ? ((this._x = Math.atan2(-h, p)),
                    (this._z = Math.atan2(-s, o)))
                  : ((this._x = Math.atan2(f, u)), (this._z = 0)))
              : "YXZ" === t
              ? ((this._x = Math.asin(-r(h, -1, 1))),
                Math.abs(h) < 0.9999999
                  ? ((this._y = Math.atan2(l, p)), (this._z = Math.atan2(c, u)))
                  : ((this._y = Math.atan2(-d, o)), (this._z = 0)))
              : "ZXY" === t
              ? ((this._x = Math.asin(r(f, -1, 1))),
                Math.abs(f) < 0.9999999
                  ? ((this._y = Math.atan2(-d, p)),
                    (this._z = Math.atan2(-s, u)))
                  : ((this._y = 0), (this._z = Math.atan2(c, o))))
              : "ZYX" === t
              ? ((this._y = Math.asin(-r(d, -1, 1))),
                Math.abs(d) < 0.9999999
                  ? ((this._x = Math.atan2(f, p)), (this._z = Math.atan2(c, o)))
                  : ((this._x = 0), (this._z = Math.atan2(-s, u))))
              : "YZX" === t
              ? ((this._z = Math.asin(r(c, -1, 1))),
                Math.abs(c) < 0.9999999
                  ? ((this._x = Math.atan2(-h, u)),
                    (this._y = Math.atan2(-d, o)))
                  : ((this._x = 0), (this._y = Math.atan2(l, p))))
              : "XZY" === t
              ? ((this._z = Math.asin(-r(s, -1, 1))),
                Math.abs(s) < 0.9999999
                  ? ((this._x = Math.atan2(f, u)), (this._y = Math.atan2(l, o)))
                  : ((this._x = Math.atan2(-h, p)), (this._y = 0)))
              : console.warn(
                  "THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
                    t
                ),
            (this._order = t),
            !1 !== n && this._onChangeCallback(),
            this
          );
        },
        setFromQuaternion: function (e, t, n) {
          return (
            K.makeRotationFromQuaternion(e), this.setFromRotationMatrix(K, t, n)
          );
        },
        setFromVector3: function (e, t) {
          return this.set(e.x, e.y, e.z, t || this._order);
        },
        reorder: function (e) {
          return $.setFromEuler(this), this.setFromQuaternion($, e);
        },
        equals: function (e) {
          return (
            e._x === this._x &&
            e._y === this._y &&
            e._z === this._z &&
            e._order === this._order
          );
        },
        fromArray: function (e) {
          return (
            (this._x = e[0]),
            (this._y = e[1]),
            (this._z = e[2]),
            void 0 !== e[3] && (this._order = e[3]),
            this._onChangeCallback(),
            this
          );
        },
        toArray: function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this._x),
            (e[t + 1] = this._y),
            (e[t + 2] = this._z),
            (e[t + 3] = this._order),
            e
          );
        },
        toVector3: function (e) {
          return e
            ? e.set(this._x, this._y, this._z)
            : new d.a(this._x, this._y, this._z);
        },
        _onChange: function (e) {
          return (this._onChangeCallback = e), this;
        },
        _onChangeCallback: function () {},
      }),
      Object.assign(te.prototype, {
        set: function (e) {
          this.mask = (1 << e) | 0;
        },
        enable: function (e) {
          this.mask |= (1 << e) | 0;
        },
        enableAll: function () {
          this.mask = -1;
        },
        toggle: function (e) {
          this.mask ^= (1 << e) | 0;
        },
        disable: function (e) {
          this.mask &= ~((1 << e) | 0);
        },
        disableAll: function () {
          this.mask = 0;
        },
        test: function (e) {
          return 0 != (this.mask & e.mask);
        },
      });
    var ne = 0,
      ie = new d.a(),
      re = new Q.a(),
      ae = new W(),
      oe = new d.a(),
      se = new d.a(),
      le = new d.a(),
      ce = new Q.a(),
      ue = new d.a(1, 0, 0),
      he = new d.a(0, 1, 0),
      de = new d.a(0, 0, 1),
      fe = { type: "added" },
      pe = { type: "removed" };
    function me() {
      Object.defineProperty(this, "id", { value: ne++ }),
        (this.uuid = i.a.generateUUID()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = me.DefaultUp.clone());
      var e = new d.a(),
        t = new ee(),
        n = new Q.a(),
        r = new d.a(1, 1, 1);
      t._onChange(function () {
        n.setFromEuler(t, !1);
      }),
        n._onChange(function () {
          t.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: e },
          rotation: { configurable: !0, enumerable: !0, value: t },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: r },
          modelViewMatrix: { value: new W() },
          normalMatrix: { value: new s.a() },
        }),
        (this.matrix = new W()),
        (this.matrixWorld = new W()),
        (this.matrixAutoUpdate = me.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new te()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.userData = {});
    }
    function ge() {
      me.call(this),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.overrideMaterial = null),
        (this.autoUpdate = !0),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    function ve() {
      var e = null,
        t = !1,
        n = null;
      function i(r, a) {
        !1 !== t && (n(r, a), e.requestAnimationFrame(i));
      }
      return {
        start: function () {
          !0 !== t && null !== n && (e.requestAnimationFrame(i), (t = !0));
        },
        stop: function () {
          t = !1;
        },
        setAnimationLoop: function (e) {
          n = e;
        },
        setContext: function (t) {
          e = t;
        },
      };
    }
    function _e(e) {
      var t = new WeakMap();
      return {
        get: function (e) {
          return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
        },
        remove: function (n) {
          n.isInterleavedBufferAttribute && (n = n.data);
          var i = t.get(n);
          i && (e.deleteBuffer(i.buffer), t.delete(n));
        },
        update: function (n, i) {
          n.isInterleavedBufferAttribute && (n = n.data);
          var r = t.get(n);
          void 0 === r
            ? t.set(
                n,
                (function (t, n) {
                  var i = t.array,
                    r = t.usage,
                    a = e.createBuffer();
                  e.bindBuffer(n, a),
                    e.bufferData(n, i, r),
                    t.onUploadCallback();
                  var o = e.FLOAT;
                  return (
                    i instanceof Float32Array
                      ? (o = e.FLOAT)
                      : i instanceof Float64Array
                      ? console.warn(
                          "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
                        )
                      : i instanceof Uint16Array
                      ? (o = e.UNSIGNED_SHORT)
                      : i instanceof Int16Array
                      ? (o = e.SHORT)
                      : i instanceof Uint32Array
                      ? (o = e.UNSIGNED_INT)
                      : i instanceof Int32Array
                      ? (o = e.INT)
                      : i instanceof Int8Array
                      ? (o = e.BYTE)
                      : i instanceof Uint8Array && (o = e.UNSIGNED_BYTE),
                    {
                      buffer: a,
                      type: o,
                      bytesPerElement: i.BYTES_PER_ELEMENT,
                      version: t.version,
                    }
                  );
                })(n, i)
              )
            : r.version < n.version &&
              (!(function (t, n, i) {
                var r = n.array,
                  a = n.updateRange;
                e.bindBuffer(i, t),
                  -1 === a.count
                    ? e.bufferSubData(i, 0, r)
                    : (e.bufferSubData(
                        i,
                        a.offset * r.BYTES_PER_ELEMENT,
                        r.subarray(a.offset, a.offset + a.count)
                      ),
                      (a.count = -1));
              })(r.buffer, n, i),
              (r.version = n.version));
        },
      };
    }
    function xe(e, t, n, i, r, a) {
      (this.a = e),
        (this.b = t),
        (this.c = n),
        (this.normal = i && i.isVector3 ? i : new d.a()),
        (this.vertexNormals = Array.isArray(i) ? i : []),
        (this.color = r && r.isColor ? r : new Y.a()),
        (this.vertexColors = Array.isArray(r) ? r : []),
        (this.materialIndex = void 0 !== a ? a : 0);
    }
    (me.DefaultUp = new d.a(0, 1, 0)),
      (me.DefaultMatrixAutoUpdate = !0),
      (me.prototype = Object.assign(Object.create(r.prototype), {
        constructor: me,
        isObject3D: !0,
        onBeforeRender: function () {},
        onAfterRender: function () {},
        applyMatrix: function (e) {
          this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(e),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        },
        applyQuaternion: function (e) {
          return this.quaternion.premultiply(e), this;
        },
        setRotationFromAxisAngle: function (e, t) {
          this.quaternion.setFromAxisAngle(e, t);
        },
        setRotationFromEuler: function (e) {
          this.quaternion.setFromEuler(e, !0);
        },
        setRotationFromMatrix: function (e) {
          this.quaternion.setFromRotationMatrix(e);
        },
        setRotationFromQuaternion: function (e) {
          this.quaternion.copy(e);
        },
        rotateOnAxis: function (e, t) {
          return re.setFromAxisAngle(e, t), this.quaternion.multiply(re), this;
        },
        rotateOnWorldAxis: function (e, t) {
          return (
            re.setFromAxisAngle(e, t), this.quaternion.premultiply(re), this
          );
        },
        rotateX: function (e) {
          return this.rotateOnAxis(ue, e);
        },
        rotateY: function (e) {
          return this.rotateOnAxis(he, e);
        },
        rotateZ: function (e) {
          return this.rotateOnAxis(de, e);
        },
        translateOnAxis: function (e, t) {
          return (
            ie.copy(e).applyQuaternion(this.quaternion),
            this.position.add(ie.multiplyScalar(t)),
            this
          );
        },
        translateX: function (e) {
          return this.translateOnAxis(ue, e);
        },
        translateY: function (e) {
          return this.translateOnAxis(he, e);
        },
        translateZ: function (e) {
          return this.translateOnAxis(de, e);
        },
        localToWorld: function (e) {
          return e.applyMatrix4(this.matrixWorld);
        },
        worldToLocal: function (e) {
          return e.applyMatrix4(ae.getInverse(this.matrixWorld));
        },
        lookAt: function (e, t, n) {
          e.isVector3 ? oe.copy(e) : oe.set(e, t, n);
          var i = this.parent;
          this.updateWorldMatrix(!0, !1),
            se.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight
              ? ae.lookAt(se, oe, this.up)
              : ae.lookAt(oe, se, this.up),
            this.quaternion.setFromRotationMatrix(ae),
            i &&
              (ae.extractRotation(i.matrixWorld),
              re.setFromRotationMatrix(ae),
              this.quaternion.premultiply(re.inverse()));
        },
        add: function (e) {
          if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
          }
          return e === this
            ? (console.error(
                "THREE.Object3D.add: object can't be added as a child of itself.",
                e
              ),
              this)
            : (e && e.isObject3D
                ? (null !== e.parent && e.parent.remove(e),
                  (e.parent = this),
                  this.children.push(e),
                  e.dispatchEvent(fe))
                : console.error(
                    "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                    e
                  ),
              this);
        },
        remove: function (e) {
          if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++)
              this.remove(arguments[t]);
            return this;
          }
          var n = this.children.indexOf(e);
          return (
            -1 !== n &&
              ((e.parent = null),
              this.children.splice(n, 1),
              e.dispatchEvent(pe)),
            this
          );
        },
        attach: function (e) {
          return (
            this.updateWorldMatrix(!0, !1),
            ae.getInverse(this.matrixWorld),
            null !== e.parent &&
              (e.parent.updateWorldMatrix(!0, !1),
              ae.multiply(e.parent.matrixWorld)),
            e.applyMatrix(ae),
            e.updateWorldMatrix(!1, !1),
            this.add(e),
            this
          );
        },
        getObjectById: function (e) {
          return this.getObjectByProperty("id", e);
        },
        getObjectByName: function (e) {
          return this.getObjectByProperty("name", e);
        },
        getObjectByProperty: function (e, t) {
          if (this[e] === t) return this;
          for (var n = 0, i = this.children.length; n < i; n++) {
            var r = this.children[n].getObjectByProperty(e, t);
            if (void 0 !== r) return r;
          }
        },
        getWorldPosition: function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "THREE.Object3D: .getWorldPosition() target is now required"
              ),
              (e = new d.a())),
            this.updateMatrixWorld(!0),
            e.setFromMatrixPosition(this.matrixWorld)
          );
        },
        getWorldQuaternion: function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "THREE.Object3D: .getWorldQuaternion() target is now required"
              ),
              (e = new Q.a())),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(se, e, le),
            e
          );
        },
        getWorldScale: function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "THREE.Object3D: .getWorldScale() target is now required"
              ),
              (e = new d.a())),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(se, ce, e),
            e
          );
        },
        getWorldDirection: function (e) {
          void 0 === e &&
            (console.warn(
              "THREE.Object3D: .getWorldDirection() target is now required"
            ),
            (e = new d.a())),
            this.updateMatrixWorld(!0);
          var t = this.matrixWorld.elements;
          return e.set(t[8], t[9], t[10]).normalize();
        },
        raycast: function () {},
        traverse: function (e) {
          e(this);
          for (var t = this.children, n = 0, i = t.length; n < i; n++)
            t[n].traverse(e);
        },
        traverseVisible: function (e) {
          if (!1 !== this.visible) {
            e(this);
            for (var t = this.children, n = 0, i = t.length; n < i; n++)
              t[n].traverseVisible(e);
          }
        },
        traverseAncestors: function (e) {
          var t = this.parent;
          null !== t && (e(t), t.traverseAncestors(e));
        },
        updateMatrix: function () {
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        },
        updateMatrixWorld: function (e) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || e) &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              (this.matrixWorldNeedsUpdate = !1),
              (e = !0));
          for (var t = this.children, n = 0, i = t.length; n < i; n++)
            t[n].updateMatrixWorld(e);
        },
        updateWorldMatrix: function (e, t) {
          var n = this.parent;
          if (
            (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            !0 === t)
          )
            for (var i = this.children, r = 0, a = i.length; r < a; r++)
              i[r].updateWorldMatrix(!1, !0);
        },
        toJSON: function (e) {
          var t = void 0 === e || "string" == typeof e,
            n = {};
          t &&
            ((e = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
            }),
            (n.metadata = {
              version: 4.5,
              type: "Object",
              generator: "Object3D.toJSON",
            }));
          var i = {};
          function r(t, n) {
            return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
              ((i.type = "InstancedMesh"),
              (i.count = this.count),
              (i.instanceMatrix = this.instanceMatrix.toJSON())),
            this.isMesh || this.isLine || this.isPoints)
          ) {
            i.geometry = r(e.geometries, this.geometry);
            var a = this.geometry.parameters;
            if (void 0 !== a && void 0 !== a.shapes) {
              var o = a.shapes;
              if (Array.isArray(o))
                for (var s = 0, l = o.length; s < l; s++) {
                  var c = o[s];
                  r(e.shapes, c);
                }
              else r(e.shapes, o);
            }
          }
          if (void 0 !== this.material)
            if (Array.isArray(this.material)) {
              var u = [];
              for (s = 0, l = this.material.length; s < l; s++)
                u.push(r(e.materials, this.material[s]));
              i.material = u;
            } else i.material = r(e.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (s = 0; s < this.children.length; s++)
              i.children.push(this.children[s].toJSON(e).object);
          }
          if (t) {
            var h = m(e.geometries),
              d = m(e.materials),
              f = m(e.textures),
              p = m(e.images);
            o = m(e.shapes);
            h.length > 0 && (n.geometries = h),
              d.length > 0 && (n.materials = d),
              f.length > 0 && (n.textures = f),
              p.length > 0 && (n.images = p),
              o.length > 0 && (n.shapes = o);
          }
          return (n.object = i), n;
          function m(e) {
            var t = [];
            for (var n in e) {
              var i = e[n];
              delete i.metadata, t.push(i);
            }
            return t;
          }
        },
        clone: function (e) {
          return new this.constructor().copy(this, e);
        },
        copy: function (e, t) {
          if (
            (void 0 === t && (t = !0),
            (this.name = e.name),
            this.up.copy(e.up),
            this.position.copy(e.position),
            this.quaternion.copy(e.quaternion),
            this.scale.copy(e.scale),
            this.matrix.copy(e.matrix),
            this.matrixWorld.copy(e.matrixWorld),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
            (this.layers.mask = e.layers.mask),
            (this.visible = e.visible),
            (this.castShadow = e.castShadow),
            (this.receiveShadow = e.receiveShadow),
            (this.frustumCulled = e.frustumCulled),
            (this.renderOrder = e.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(e.userData))),
            !0 === t)
          )
            for (var n = 0; n < e.children.length; n++) {
              var i = e.children[n];
              this.add(i.clone());
            }
          return this;
        },
      })),
      (ge.prototype = Object.assign(Object.create(me.prototype), {
        constructor: ge,
        isScene: !0,
        copy: function (e, t) {
          return (
            me.prototype.copy.call(this, e, t),
            null !== e.background && (this.background = e.background.clone()),
            null !== e.environment &&
              (this.environment = e.environment.clone()),
            null !== e.fog && (this.fog = e.fog.clone()),
            null !== e.overrideMaterial &&
              (this.overrideMaterial = e.overrideMaterial.clone()),
            (this.autoUpdate = e.autoUpdate),
            (this.matrixAutoUpdate = e.matrixAutoUpdate),
            this
          );
        },
        toJSON: function (e) {
          var t = me.prototype.toJSON.call(this, e);
          return (
            null !== this.background &&
              (t.object.background = this.background.toJSON(e)),
            null !== this.environment &&
              (t.object.environment = this.environment.toJSON(e)),
            null !== this.fog && (t.object.fog = this.fog.toJSON()),
            t
          );
        },
        dispose: function () {
          this.dispatchEvent({ type: "dispose" });
        },
      })),
      Object.assign(xe.prototype, {
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (e) {
          (this.a = e.a),
            (this.b = e.b),
            (this.c = e.c),
            this.normal.copy(e.normal),
            this.color.copy(e.color),
            (this.materialIndex = e.materialIndex);
          for (var t = 0, n = e.vertexNormals.length; t < n; t++)
            this.vertexNormals[t] = e.vertexNormals[t].clone();
          for (t = 0, n = e.vertexColors.length; t < n; t++)
            this.vertexColors[t] = e.vertexColors[t].clone();
          return this;
        },
      });
    var ye = 0,
      Me = new W(),
      be = new me(),
      we = new d.a();
    function Ee() {
      Object.defineProperty(this, "id", { value: (ye += 2) }),
        (this.uuid = i.a.generateUUID()),
        (this.name = ""),
        (this.type = "Geometry"),
        (this.vertices = []),
        (this.colors = []),
        (this.faces = []),
        (this.faceVertexUvs = [[]]),
        (this.morphTargets = []),
        (this.morphNormals = []),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.lineDistances = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.elementsNeedUpdate = !1),
        (this.verticesNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.lineDistancesNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }
    Ee.prototype = Object.assign(Object.create(r.prototype), {
      constructor: Ee,
      isGeometry: !0,
      applyMatrix: function (e) {
        for (
          var t = new s.a().getNormalMatrix(e), n = 0, i = this.vertices.length;
          n < i;
          n++
        ) {
          this.vertices[n].applyMatrix4(e);
        }
        for (n = 0, i = this.faces.length; n < i; n++) {
          var r = this.faces[n];
          r.normal.applyMatrix3(t).normalize();
          for (var a = 0, o = r.vertexNormals.length; a < o; a++)
            r.vertexNormals[a].applyMatrix3(t).normalize();
        }
        return (
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          (this.verticesNeedUpdate = !0),
          (this.normalsNeedUpdate = !0),
          this
        );
      },
      rotateX: function (e) {
        return Me.makeRotationX(e), this.applyMatrix(Me), this;
      },
      rotateY: function (e) {
        return Me.makeRotationY(e), this.applyMatrix(Me), this;
      },
      rotateZ: function (e) {
        return Me.makeRotationZ(e), this.applyMatrix(Me), this;
      },
      translate: function (e, t, n) {
        return Me.makeTranslation(e, t, n), this.applyMatrix(Me), this;
      },
      scale: function (e, t, n) {
        return Me.makeScale(e, t, n), this.applyMatrix(Me), this;
      },
      lookAt: function (e) {
        return (
          be.lookAt(e), be.updateMatrix(), this.applyMatrix(be.matrix), this
        );
      },
      fromBufferGeometry: function (e) {
        var t = this,
          n = null !== e.index ? e.index.array : void 0,
          i = e.attributes;
        if (void 0 === i.position)
          return (
            console.error(
              "THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."
            ),
            this
          );
        var r = i.position.array,
          a = void 0 !== i.normal ? i.normal.array : void 0,
          s = void 0 !== i.color ? i.color.array : void 0,
          l = void 0 !== i.uv ? i.uv.array : void 0,
          c = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (var u = 0; u < r.length; u += 3)
          t.vertices.push(new d.a().fromArray(r, u)),
            void 0 !== s && t.colors.push(new Y.a().fromArray(s, u));
        function h(e, n, i, r) {
          var u =
              void 0 === s
                ? []
                : [
                    t.colors[e].clone(),
                    t.colors[n].clone(),
                    t.colors[i].clone(),
                  ],
            h = new xe(
              e,
              n,
              i,
              void 0 === a
                ? []
                : [
                    new d.a().fromArray(a, 3 * e),
                    new d.a().fromArray(a, 3 * n),
                    new d.a().fromArray(a, 3 * i),
                  ],
              u,
              r
            );
          t.faces.push(h),
            void 0 !== l &&
              t.faceVertexUvs[0].push([
                new o.a().fromArray(l, 2 * e),
                new o.a().fromArray(l, 2 * n),
                new o.a().fromArray(l, 2 * i),
              ]),
            void 0 !== c &&
              t.faceVertexUvs[1].push([
                new o.a().fromArray(c, 2 * e),
                new o.a().fromArray(c, 2 * n),
                new o.a().fromArray(c, 2 * i),
              ]);
        }
        var f = e.groups;
        if (f.length > 0)
          for (u = 0; u < f.length; u++)
            for (
              var p = f[u], m = p.start, g = m, v = m + p.count;
              g < v;
              g += 3
            )
              void 0 !== n
                ? h(n[g], n[g + 1], n[g + 2], p.materialIndex)
                : h(g, g + 1, g + 2, p.materialIndex);
        else if (void 0 !== n)
          for (u = 0; u < n.length; u += 3) h(n[u], n[u + 1], n[u + 2]);
        else for (u = 0; u < r.length / 3; u += 3) h(u, u + 1, u + 2);
        return (
          this.computeFaceNormals(),
          null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
          null !== e.boundingSphere &&
            (this.boundingSphere = e.boundingSphere.clone()),
          this
        );
      },
      center: function () {
        return (
          this.computeBoundingBox(),
          this.boundingBox.getCenter(we).negate(),
          this.translate(we.x, we.y, we.z),
          this
        );
      },
      normalize: function () {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center,
          t = this.boundingSphere.radius,
          n = 0 === t ? 1 : 1 / t,
          i = new W();
        return (
          i.set(
            n,
            0,
            0,
            -n * e.x,
            0,
            n,
            0,
            -n * e.y,
            0,
            0,
            n,
            -n * e.z,
            0,
            0,
            0,
            1
          ),
          this.applyMatrix(i),
          this
        );
      },
      computeFaceNormals: function () {
        for (
          var e = new d.a(), t = new d.a(), n = 0, i = this.faces.length;
          n < i;
          n++
        ) {
          var r = this.faces[n],
            a = this.vertices[r.a],
            o = this.vertices[r.b],
            s = this.vertices[r.c];
          e.subVectors(s, o),
            t.subVectors(a, o),
            e.cross(t),
            e.normalize(),
            r.normal.copy(e);
        }
      },
      computeVertexNormals: function (e) {
        var t, n, i, r, a, o;
        for (
          void 0 === e && (e = !0),
            o = new Array(this.vertices.length),
            t = 0,
            n = this.vertices.length;
          t < n;
          t++
        )
          o[t] = new d.a();
        if (e) {
          var s,
            l,
            c,
            u = new d.a(),
            h = new d.a();
          for (i = 0, r = this.faces.length; i < r; i++)
            (a = this.faces[i]),
              (s = this.vertices[a.a]),
              (l = this.vertices[a.b]),
              (c = this.vertices[a.c]),
              u.subVectors(c, l),
              h.subVectors(s, l),
              u.cross(h),
              o[a.a].add(u),
              o[a.b].add(u),
              o[a.c].add(u);
        } else
          for (
            this.computeFaceNormals(), i = 0, r = this.faces.length;
            i < r;
            i++
          )
            o[(a = this.faces[i]).a].add(a.normal),
              o[a.b].add(a.normal),
              o[a.c].add(a.normal);
        for (t = 0, n = this.vertices.length; t < n; t++) o[t].normalize();
        for (i = 0, r = this.faces.length; i < r; i++) {
          var f = (a = this.faces[i]).vertexNormals;
          3 === f.length
            ? (f[0].copy(o[a.a]), f[1].copy(o[a.b]), f[2].copy(o[a.c]))
            : ((f[0] = o[a.a].clone()),
              (f[1] = o[a.b].clone()),
              (f[2] = o[a.c].clone()));
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0);
      },
      computeFlatVertexNormals: function () {
        var e, t, n;
        for (
          this.computeFaceNormals(), e = 0, t = this.faces.length;
          e < t;
          e++
        ) {
          var i = (n = this.faces[e]).vertexNormals;
          3 === i.length
            ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal))
            : ((i[0] = n.normal.clone()),
              (i[1] = n.normal.clone()),
              (i[2] = n.normal.clone()));
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0);
      },
      computeMorphNormals: function () {
        var e, t, n, i, r;
        for (n = 0, i = this.faces.length; n < i; n++)
          for (
            (r = this.faces[n]).__originalFaceNormal
              ? r.__originalFaceNormal.copy(r.normal)
              : (r.__originalFaceNormal = r.normal.clone()),
              r.__originalVertexNormals || (r.__originalVertexNormals = []),
              e = 0,
              t = r.vertexNormals.length;
            e < t;
            e++
          )
            r.__originalVertexNormals[e]
              ? r.__originalVertexNormals[e].copy(r.vertexNormals[e])
              : (r.__originalVertexNormals[e] = r.vertexNormals[e].clone());
        var a = new Ee();
        for (
          a.faces = this.faces, e = 0, t = this.morphTargets.length;
          e < t;
          e++
        ) {
          if (!this.morphNormals[e]) {
            (this.morphNormals[e] = {}),
              (this.morphNormals[e].faceNormals = []),
              (this.morphNormals[e].vertexNormals = []);
            var o = this.morphNormals[e].faceNormals,
              s = this.morphNormals[e].vertexNormals;
            for (n = 0, i = this.faces.length; n < i; n++)
              (l = new d.a()),
                (c = { a: new d.a(), b: new d.a(), c: new d.a() }),
                o.push(l),
                s.push(c);
          }
          var l,
            c,
            u = this.morphNormals[e];
          for (
            a.vertices = this.morphTargets[e].vertices,
              a.computeFaceNormals(),
              a.computeVertexNormals(),
              n = 0,
              i = this.faces.length;
            n < i;
            n++
          )
            (r = this.faces[n]),
              (l = u.faceNormals[n]),
              (c = u.vertexNormals[n]),
              l.copy(r.normal),
              c.a.copy(r.vertexNormals[0]),
              c.b.copy(r.vertexNormals[1]),
              c.c.copy(r.vertexNormals[2]);
        }
        for (n = 0, i = this.faces.length; n < i; n++)
          ((r = this.faces[n]).normal = r.__originalFaceNormal),
            (r.vertexNormals = r.__originalVertexNormals);
      },
      computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new S()),
          this.boundingBox.setFromPoints(this.vertices);
      },
      computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new R()),
          this.boundingSphere.setFromPoints(this.vertices);
      },
      merge: function (e, t, n) {
        if (e && e.isGeometry) {
          var i,
            r = this.vertices.length,
            a = this.vertices,
            o = e.vertices,
            l = this.faces,
            c = e.faces,
            u = this.colors,
            h = e.colors;
          void 0 === n && (n = 0),
            void 0 !== t && (i = new s.a().getNormalMatrix(t));
          for (var d = 0, f = o.length; d < f; d++) {
            var p = o[d].clone();
            void 0 !== t && p.applyMatrix4(t), a.push(p);
          }
          for (d = 0, f = h.length; d < f; d++) u.push(h[d].clone());
          for (d = 0, f = c.length; d < f; d++) {
            var m,
              g,
              v,
              _ = c[d],
              x = _.vertexNormals,
              y = _.vertexColors;
            (m = new xe(_.a + r, _.b + r, _.c + r)).normal.copy(_.normal),
              void 0 !== i && m.normal.applyMatrix3(i).normalize();
            for (var M = 0, b = x.length; M < b; M++)
              (g = x[M].clone()),
                void 0 !== i && g.applyMatrix3(i).normalize(),
                m.vertexNormals.push(g);
            m.color.copy(_.color);
            for (M = 0, b = y.length; M < b; M++)
              (v = y[M]), m.vertexColors.push(v.clone());
            (m.materialIndex = _.materialIndex + n), l.push(m);
          }
          for (d = 0, f = e.faceVertexUvs.length; d < f; d++) {
            var w = e.faceVertexUvs[d];
            void 0 === this.faceVertexUvs[d] && (this.faceVertexUvs[d] = []);
            for (M = 0, b = w.length; M < b; M++) {
              for (var E = w[M], T = [], S = 0, A = E.length; S < A; S++)
                T.push(E[S].clone());
              this.faceVertexUvs[d].push(T);
            }
          }
        } else
          console.error(
            "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
            e
          );
      },
      mergeMesh: function (e) {
        e && e.isMesh
          ? (e.matrixAutoUpdate && e.updateMatrix(),
            this.merge(e.geometry, e.matrix))
          : console.error(
              "THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
              e
            );
      },
      mergeVertices: function () {
        var e,
          t,
          n,
          i,
          r,
          a,
          o,
          s,
          l = {},
          c = [],
          u = [],
          h = Math.pow(10, 4);
        for (n = 0, i = this.vertices.length; n < i; n++)
          (e = this.vertices[n]),
            void 0 ===
            l[
              (t =
                Math.round(e.x * h) +
                "_" +
                Math.round(e.y * h) +
                "_" +
                Math.round(e.z * h))
            ]
              ? ((l[t] = n), c.push(this.vertices[n]), (u[n] = c.length - 1))
              : (u[n] = u[l[t]]);
        var d = [];
        for (n = 0, i = this.faces.length; n < i; n++) {
          ((r = this.faces[n]).a = u[r.a]),
            (r.b = u[r.b]),
            (r.c = u[r.c]),
            (a = [r.a, r.b, r.c]);
          for (var f = 0; f < 3; f++)
            if (a[f] === a[(f + 1) % 3]) {
              d.push(n);
              break;
            }
        }
        for (n = d.length - 1; n >= 0; n--) {
          var p = d[n];
          for (
            this.faces.splice(p, 1), o = 0, s = this.faceVertexUvs.length;
            o < s;
            o++
          )
            this.faceVertexUvs[o].splice(p, 1);
        }
        var m = this.vertices.length - c.length;
        return (this.vertices = c), m;
      },
      setFromPoints: function (e) {
        this.vertices = [];
        for (var t = 0, n = e.length; t < n; t++) {
          var i = e[t];
          this.vertices.push(new d.a(i.x, i.y, i.z || 0));
        }
        return this;
      },
      sortFacesByMaterialIndex: function () {
        for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;
        e.sort(function (e, t) {
          return e.materialIndex - t.materialIndex;
        });
        var i,
          r,
          a = this.faceVertexUvs[0],
          o = this.faceVertexUvs[1];
        a && a.length === t && (i = []), o && o.length === t && (r = []);
        for (n = 0; n < t; n++) {
          var s = e[n]._id;
          i && i.push(a[s]), r && r.push(o[s]);
        }
        i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r);
      },
      toJSON: function () {
        var e = {
          metadata: {
            version: 4.5,
            type: "Geometry",
            generator: "Geometry.toJSON",
          },
        };
        if (
          ((e.uuid = this.uuid),
          (e.type = this.type),
          "" !== this.name && (e.name = this.name),
          void 0 !== this.parameters)
        ) {
          var t = this.parameters;
          for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
          return e;
        }
        for (var i = [], r = 0; r < this.vertices.length; r++) {
          var a = this.vertices[r];
          i.push(a.x, a.y, a.z);
        }
        var o = [],
          s = [],
          l = {},
          c = [],
          u = {},
          h = [],
          d = {};
        for (r = 0; r < this.faces.length; r++) {
          var f = this.faces[r],
            p = void 0 !== this.faceVertexUvs[0][r],
            m = f.normal.length() > 0,
            g = f.vertexNormals.length > 0,
            v = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
            _ = f.vertexColors.length > 0,
            x = 0;
          if (
            ((x = w(x, 0, 0)),
            (x = w(x, 1, !0)),
            (x = w(x, 2, !1)),
            (x = w(x, 3, p)),
            (x = w(x, 4, m)),
            (x = w(x, 5, g)),
            (x = w(x, 6, v)),
            (x = w(x, 7, _)),
            o.push(x),
            o.push(f.a, f.b, f.c),
            o.push(f.materialIndex),
            p)
          ) {
            var y = this.faceVertexUvs[0][r];
            o.push(S(y[0]), S(y[1]), S(y[2]));
          }
          if ((m && o.push(E(f.normal)), g)) {
            var M = f.vertexNormals;
            o.push(E(M[0]), E(M[1]), E(M[2]));
          }
          if ((v && o.push(T(f.color)), _)) {
            var b = f.vertexColors;
            o.push(T(b[0]), T(b[1]), T(b[2]));
          }
        }
        function w(e, t, n) {
          return n ? e | (1 << t) : e & ~(1 << t);
        }
        function E(e) {
          var t = e.x.toString() + e.y.toString() + e.z.toString();
          return void 0 !== l[t]
            ? l[t]
            : ((l[t] = s.length / 3), s.push(e.x, e.y, e.z), l[t]);
        }
        function T(e) {
          var t = e.r.toString() + e.g.toString() + e.b.toString();
          return void 0 !== u[t]
            ? u[t]
            : ((u[t] = c.length), c.push(e.getHex()), u[t]);
        }
        function S(e) {
          var t = e.x.toString() + e.y.toString();
          return void 0 !== d[t]
            ? d[t]
            : ((d[t] = h.length / 2), h.push(e.x, e.y), d[t]);
        }
        return (
          (e.data = {}),
          (e.data.vertices = i),
          (e.data.normals = s),
          c.length > 0 && (e.data.colors = c),
          h.length > 0 && (e.data.uvs = [h]),
          (e.data.faces = o),
          e
        );
      },
      clone: function () {
        return new Ee().copy(this);
      },
      copy: function (e) {
        var t, n, i, r, a, o;
        (this.vertices = []),
          (this.colors = []),
          (this.faces = []),
          (this.faceVertexUvs = [[]]),
          (this.morphTargets = []),
          (this.morphNormals = []),
          (this.skinWeights = []),
          (this.skinIndices = []),
          (this.lineDistances = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.name = e.name);
        var s = e.vertices;
        for (t = 0, n = s.length; t < n; t++) this.vertices.push(s[t].clone());
        var l = e.colors;
        for (t = 0, n = l.length; t < n; t++) this.colors.push(l[t].clone());
        var c = e.faces;
        for (t = 0, n = c.length; t < n; t++) this.faces.push(c[t].clone());
        for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
          var u = e.faceVertexUvs[t];
          for (
            void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []),
              i = 0,
              r = u.length;
            i < r;
            i++
          ) {
            var h = u[i],
              d = [];
            for (a = 0, o = h.length; a < o; a++) {
              var f = h[a];
              d.push(f.clone());
            }
            this.faceVertexUvs[t].push(d);
          }
        }
        var p = e.morphTargets;
        for (t = 0, n = p.length; t < n; t++) {
          var m = {};
          if (((m.name = p[t].name), void 0 !== p[t].vertices))
            for (m.vertices = [], i = 0, r = p[t].vertices.length; i < r; i++)
              m.vertices.push(p[t].vertices[i].clone());
          if (void 0 !== p[t].normals)
            for (m.normals = [], i = 0, r = p[t].normals.length; i < r; i++)
              m.normals.push(p[t].normals[i].clone());
          this.morphTargets.push(m);
        }
        var g = e.morphNormals;
        for (t = 0, n = g.length; t < n; t++) {
          var v = {};
          if (void 0 !== g[t].vertexNormals)
            for (
              v.vertexNormals = [], i = 0, r = g[t].vertexNormals.length;
              i < r;
              i++
            ) {
              var _ = g[t].vertexNormals[i],
                x = {};
              (x.a = _.a.clone()),
                (x.b = _.b.clone()),
                (x.c = _.c.clone()),
                v.vertexNormals.push(x);
            }
          if (void 0 !== g[t].faceNormals)
            for (
              v.faceNormals = [], i = 0, r = g[t].faceNormals.length;
              i < r;
              i++
            )
              v.faceNormals.push(g[t].faceNormals[i].clone());
          this.morphNormals.push(v);
        }
        var y = e.skinWeights;
        for (t = 0, n = y.length; t < n; t++)
          this.skinWeights.push(y[t].clone());
        var M = e.skinIndices;
        for (t = 0, n = M.length; t < n; t++)
          this.skinIndices.push(M[t].clone());
        var b = e.lineDistances;
        for (t = 0, n = b.length; t < n; t++) this.lineDistances.push(b[t]);
        var w = e.boundingBox;
        null !== w && (this.boundingBox = w.clone());
        var E = e.boundingSphere;
        return (
          null !== E && (this.boundingSphere = E.clone()),
          (this.elementsNeedUpdate = e.elementsNeedUpdate),
          (this.verticesNeedUpdate = e.verticesNeedUpdate),
          (this.uvsNeedUpdate = e.uvsNeedUpdate),
          (this.normalsNeedUpdate = e.normalsNeedUpdate),
          (this.colorsNeedUpdate = e.colorsNeedUpdate),
          (this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate),
          (this.groupsNeedUpdate = e.groupsNeedUpdate),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    });
    var Te = new d.a();
    function Se(e, t, n) {
      if (Array.isArray(e))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.name = ""),
        (this.array = e),
        (this.itemSize = t),
        (this.count = void 0 !== e ? e.length / t : 0),
        (this.normalized = !0 === n),
        (this.usage = 35044),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }
    function Ae(e, t, n) {
      Se.call(this, new Int8Array(e), t, n);
    }
    function Le(e, t, n) {
      Se.call(this, new Uint8Array(e), t, n);
    }
    function Re(e, t, n) {
      Se.call(this, new Uint8ClampedArray(e), t, n);
    }
    function Pe(e, t, n) {
      Se.call(this, new Int16Array(e), t, n);
    }
    function Ne(e, t, n) {
      Se.call(this, new Uint16Array(e), t, n);
    }
    function De(e, t, n) {
      Se.call(this, new Int32Array(e), t, n);
    }
    function Ce(e, t, n) {
      Se.call(this, new Uint32Array(e), t, n);
    }
    function Ie(e, t, n) {
      Se.call(this, new Float32Array(e), t, n);
    }
    function Ue(e, t, n) {
      Se.call(this, new Float64Array(e), t, n);
    }
    function Fe() {
      (this.vertices = []),
        (this.normals = []),
        (this.colors = []),
        (this.uvs = []),
        (this.uvs2 = []),
        (this.groups = []),
        (this.morphTargets = {}),
        (this.skinWeights = []),
        (this.skinIndices = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.verticesNeedUpdate = !1),
        (this.normalsNeedUpdate = !1),
        (this.colorsNeedUpdate = !1),
        (this.uvsNeedUpdate = !1),
        (this.groupsNeedUpdate = !1);
    }
    function Oe(e) {
      if (0 === e.length) return -1 / 0;
      for (var t = e[0], n = 1, i = e.length; n < i; ++n)
        e[n] > t && (t = e[n]);
      return t;
    }
    Object.defineProperty(Se.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++;
      },
    }),
      Object.assign(Se.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function () {},
        setUsage: function (e) {
          return (this.usage = e), this;
        },
        copy: function (e) {
          return (
            (this.name = e.name),
            (this.array = new e.array.constructor(e.array)),
            (this.itemSize = e.itemSize),
            (this.count = e.count),
            (this.normalized = e.normalized),
            (this.usage = e.usage),
            this
          );
        },
        copyAt: function (e, t, n) {
          (e *= this.itemSize), (n *= t.itemSize);
          for (var i = 0, r = this.itemSize; i < r; i++)
            this.array[e + i] = t.array[n + i];
          return this;
        },
        copyArray: function (e) {
          return this.array.set(e), this;
        },
        copyColorsArray: function (e) {
          for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            void 0 === a &&
              (console.warn(
                "THREE.BufferAttribute.copyColorsArray(): color is undefined",
                i
              ),
              (a = new Y.a())),
              (t[n++] = a.r),
              (t[n++] = a.g),
              (t[n++] = a.b);
          }
          return this;
        },
        copyVector2sArray: function (e) {
          for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            void 0 === a &&
              (console.warn(
                "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
                i
              ),
              (a = new o.a())),
              (t[n++] = a.x),
              (t[n++] = a.y);
          }
          return this;
        },
        copyVector3sArray: function (e) {
          for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            void 0 === a &&
              (console.warn(
                "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
                i
              ),
              (a = new d.a())),
              (t[n++] = a.x),
              (t[n++] = a.y),
              (t[n++] = a.z);
          }
          return this;
        },
        copyVector4sArray: function (e) {
          for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
            var a = e[i];
            void 0 === a &&
              (console.warn(
                "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
                i
              ),
              (a = new J())),
              (t[n++] = a.x),
              (t[n++] = a.y),
              (t[n++] = a.z),
              (t[n++] = a.w);
          }
          return this;
        },
        applyMatrix3: function (e) {
          for (var t = 0, n = this.count; t < n; t++)
            (Te.x = this.getX(t)),
              (Te.y = this.getY(t)),
              (Te.z = this.getZ(t)),
              Te.applyMatrix3(e),
              this.setXYZ(t, Te.x, Te.y, Te.z);
          return this;
        },
        applyMatrix4: function (e) {
          for (var t = 0, n = this.count; t < n; t++)
            (Te.x = this.getX(t)),
              (Te.y = this.getY(t)),
              (Te.z = this.getZ(t)),
              Te.applyMatrix4(e),
              this.setXYZ(t, Te.x, Te.y, Te.z);
          return this;
        },
        applyNormalMatrix: function (e) {
          for (var t = 0, n = this.count; t < n; t++)
            (Te.x = this.getX(t)),
              (Te.y = this.getY(t)),
              (Te.z = this.getZ(t)),
              Te.applyNormalMatrix(e),
              this.setXYZ(t, Te.x, Te.y, Te.z);
          return this;
        },
        transformDirection: function (e) {
          for (var t = 0, n = this.count; t < n; t++)
            (Te.x = this.getX(t)),
              (Te.y = this.getY(t)),
              (Te.z = this.getZ(t)),
              Te.transformDirection(e),
              this.setXYZ(t, Te.x, Te.y, Te.z);
          return this;
        },
        set: function (e, t) {
          return void 0 === t && (t = 0), this.array.set(e, t), this;
        },
        getX: function (e) {
          return this.array[e * this.itemSize];
        },
        setX: function (e, t) {
          return (this.array[e * this.itemSize] = t), this;
        },
        getY: function (e) {
          return this.array[e * this.itemSize + 1];
        },
        setY: function (e, t) {
          return (this.array[e * this.itemSize + 1] = t), this;
        },
        getZ: function (e) {
          return this.array[e * this.itemSize + 2];
        },
        setZ: function (e, t) {
          return (this.array[e * this.itemSize + 2] = t), this;
        },
        getW: function (e) {
          return this.array[e * this.itemSize + 3];
        },
        setW: function (e, t) {
          return (this.array[e * this.itemSize + 3] = t), this;
        },
        setXY: function (e, t, n) {
          return (
            (e *= this.itemSize),
            (this.array[e + 0] = t),
            (this.array[e + 1] = n),
            this
          );
        },
        setXYZ: function (e, t, n, i) {
          return (
            (e *= this.itemSize),
            (this.array[e + 0] = t),
            (this.array[e + 1] = n),
            (this.array[e + 2] = i),
            this
          );
        },
        setXYZW: function (e, t, n, i, r) {
          return (
            (e *= this.itemSize),
            (this.array[e + 0] = t),
            (this.array[e + 1] = n),
            (this.array[e + 2] = i),
            (this.array[e + 3] = r),
            this
          );
        },
        onUpload: function (e) {
          return (this.onUploadCallback = e), this;
        },
        clone: function () {
          return new this.constructor(this.array, this.itemSize).copy(this);
        },
        toJSON: function () {
          return {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized,
          };
        },
      }),
      (Ae.prototype = Object.create(Se.prototype)),
      (Ae.prototype.constructor = Ae),
      (Le.prototype = Object.create(Se.prototype)),
      (Le.prototype.constructor = Le),
      (Re.prototype = Object.create(Se.prototype)),
      (Re.prototype.constructor = Re),
      (Pe.prototype = Object.create(Se.prototype)),
      (Pe.prototype.constructor = Pe),
      (Ne.prototype = Object.create(Se.prototype)),
      (Ne.prototype.constructor = Ne),
      (De.prototype = Object.create(Se.prototype)),
      (De.prototype.constructor = De),
      (Ce.prototype = Object.create(Se.prototype)),
      (Ce.prototype.constructor = Ce),
      (Ie.prototype = Object.create(Se.prototype)),
      (Ie.prototype.constructor = Ie),
      (Ue.prototype = Object.create(Se.prototype)),
      (Ue.prototype.constructor = Ue),
      Object.assign(Fe.prototype, {
        computeGroups: function (e) {
          for (
            var t, n = [], i = void 0, r = e.faces, a = 0;
            a < r.length;
            a++
          ) {
            var o = r[a];
            o.materialIndex !== i &&
              ((i = o.materialIndex),
              void 0 !== t && ((t.count = 3 * a - t.start), n.push(t)),
              (t = { start: 3 * a, materialIndex: i }));
          }
          void 0 !== t && ((t.count = 3 * a - t.start), n.push(t)),
            (this.groups = n);
        },
        fromGeometry: function (e) {
          var t,
            n = e.faces,
            i = e.vertices,
            r = e.faceVertexUvs,
            a = r[0] && r[0].length > 0,
            s = r[1] && r[1].length > 0,
            l = e.morphTargets,
            c = l.length;
          if (c > 0) {
            t = [];
            for (var u = 0; u < c; u++) t[u] = { name: l[u].name, data: [] };
            this.morphTargets.position = t;
          }
          var h,
            d = e.morphNormals,
            f = d.length;
          if (f > 0) {
            h = [];
            for (u = 0; u < f; u++) h[u] = { name: d[u].name, data: [] };
            this.morphTargets.normal = h;
          }
          var p = e.skinIndices,
            m = e.skinWeights,
            g = p.length === i.length,
            v = m.length === i.length;
          i.length > 0 &&
            0 === n.length &&
            console.error(
              "THREE.DirectGeometry: Faceless geometries are not supported."
            );
          for (u = 0; u < n.length; u++) {
            var _ = n[u];
            this.vertices.push(i[_.a], i[_.b], i[_.c]);
            var x = _.vertexNormals;
            if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
            else {
              var y = _.normal;
              this.normals.push(y, y, y);
            }
            var M,
              b = _.vertexColors;
            if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
            else {
              var w = _.color;
              this.colors.push(w, w, w);
            }
            if (!0 === a)
              void 0 !== (M = r[0][u])
                ? this.uvs.push(M[0], M[1], M[2])
                : (console.warn(
                    "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
                    u
                  ),
                  this.uvs.push(new o.a(), new o.a(), new o.a()));
            if (!0 === s)
              void 0 !== (M = r[1][u])
                ? this.uvs2.push(M[0], M[1], M[2])
                : (console.warn(
                    "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
                    u
                  ),
                  this.uvs2.push(new o.a(), new o.a(), new o.a()));
            for (var E = 0; E < c; E++) {
              var T = l[E].vertices;
              t[E].data.push(T[_.a], T[_.b], T[_.c]);
            }
            for (E = 0; E < f; E++) {
              var S = d[E].vertexNormals[u];
              h[E].data.push(S.a, S.b, S.c);
            }
            g && this.skinIndices.push(p[_.a], p[_.b], p[_.c]),
              v && this.skinWeights.push(m[_.a], m[_.b], m[_.c]);
          }
          return (
            this.computeGroups(e),
            (this.verticesNeedUpdate = e.verticesNeedUpdate),
            (this.normalsNeedUpdate = e.normalsNeedUpdate),
            (this.colorsNeedUpdate = e.colorsNeedUpdate),
            (this.uvsNeedUpdate = e.uvsNeedUpdate),
            (this.groupsNeedUpdate = e.groupsNeedUpdate),
            null !== e.boundingSphere &&
              (this.boundingSphere = e.boundingSphere.clone()),
            null !== e.boundingBox &&
              (this.boundingBox = e.boundingBox.clone()),
            this
          );
        },
      });
    var ze = 1,
      Be = new W(),
      Ge = new me(),
      Ve = new d.a(),
      He = new S(),
      ke = new S(),
      We = new d.a();
    function je() {
      Object.defineProperty(this, "id", { value: (ze += 2) }),
        (this.uuid = i.a.generateUUID()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    je.prototype = Object.assign(Object.create(r.prototype), {
      constructor: je,
      isBufferGeometry: !0,
      getIndex: function () {
        return this.index;
      },
      setIndex: function (e) {
        Array.isArray(e)
          ? (this.index = new (Oe(e) > 65535 ? Ce : Ne)(e, 1))
          : (this.index = e);
      },
      getAttribute: function (e) {
        return this.attributes[e];
      },
      setAttribute: function (e, t) {
        return (this.attributes[e] = t), this;
      },
      deleteAttribute: function (e) {
        return delete this.attributes[e], this;
      },
      addGroup: function (e, t, n) {
        this.groups.push({
          start: e,
          count: t,
          materialIndex: void 0 !== n ? n : 0,
        });
      },
      clearGroups: function () {
        this.groups = [];
      },
      setDrawRange: function (e, t) {
        (this.drawRange.start = e), (this.drawRange.count = t);
      },
      applyMatrix: function (e) {
        var t = this.attributes.position;
        void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
        var n = this.attributes.normal;
        if (void 0 !== n) {
          var i = new s.a().getNormalMatrix(e);
          n.applyNormalMatrix(i), (n.needsUpdate = !0);
        }
        var r = this.attributes.tangent;
        return (
          void 0 !== r && (r.transformDirection(e), (r.needsUpdate = !0)),
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          this
        );
      },
      rotateX: function (e) {
        return Be.makeRotationX(e), this.applyMatrix(Be), this;
      },
      rotateY: function (e) {
        return Be.makeRotationY(e), this.applyMatrix(Be), this;
      },
      rotateZ: function (e) {
        return Be.makeRotationZ(e), this.applyMatrix(Be), this;
      },
      translate: function (e, t, n) {
        return Be.makeTranslation(e, t, n), this.applyMatrix(Be), this;
      },
      scale: function (e, t, n) {
        return Be.makeScale(e, t, n), this.applyMatrix(Be), this;
      },
      lookAt: function (e) {
        return (
          Ge.lookAt(e), Ge.updateMatrix(), this.applyMatrix(Ge.matrix), this
        );
      },
      center: function () {
        return (
          this.computeBoundingBox(),
          this.boundingBox.getCenter(Ve).negate(),
          this.translate(Ve.x, Ve.y, Ve.z),
          this
        );
      },
      setFromObject: function (e) {
        var t = e.geometry;
        if (e.isPoints || e.isLine) {
          var n = new Ie(3 * t.vertices.length, 3),
            i = new Ie(3 * t.colors.length, 3);
          if (
            (this.setAttribute("position", n.copyVector3sArray(t.vertices)),
            this.setAttribute("color", i.copyColorsArray(t.colors)),
            t.lineDistances && t.lineDistances.length === t.vertices.length)
          ) {
            var r = new Ie(t.lineDistances.length, 1);
            this.setAttribute("lineDistance", r.copyArray(t.lineDistances));
          }
          null !== t.boundingSphere &&
            (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox &&
              (this.boundingBox = t.boundingBox.clone());
        } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
        return this;
      },
      setFromPoints: function (e) {
        for (var t = [], n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          t.push(r.x, r.y, r.z || 0);
        }
        return this.setAttribute("position", new Ie(t, 3)), this;
      },
      updateFromObject: function (e) {
        var t,
          n = e.geometry;
        if (e.isMesh) {
          var i = n.__directGeometry;
          if (
            (!0 === n.elementsNeedUpdate &&
              ((i = void 0), (n.elementsNeedUpdate = !1)),
            void 0 === i)
          )
            return this.fromGeometry(n);
          (i.verticesNeedUpdate = n.verticesNeedUpdate),
            (i.normalsNeedUpdate = n.normalsNeedUpdate),
            (i.colorsNeedUpdate = n.colorsNeedUpdate),
            (i.uvsNeedUpdate = n.uvsNeedUpdate),
            (i.groupsNeedUpdate = n.groupsNeedUpdate),
            (n.verticesNeedUpdate = !1),
            (n.normalsNeedUpdate = !1),
            (n.colorsNeedUpdate = !1),
            (n.uvsNeedUpdate = !1),
            (n.groupsNeedUpdate = !1),
            (n = i);
        }
        return (
          !0 === n.verticesNeedUpdate &&
            (void 0 !== (t = this.attributes.position) &&
              (t.copyVector3sArray(n.vertices), (t.needsUpdate = !0)),
            (n.verticesNeedUpdate = !1)),
          !0 === n.normalsNeedUpdate &&
            (void 0 !== (t = this.attributes.normal) &&
              (t.copyVector3sArray(n.normals), (t.needsUpdate = !0)),
            (n.normalsNeedUpdate = !1)),
          !0 === n.colorsNeedUpdate &&
            (void 0 !== (t = this.attributes.color) &&
              (t.copyColorsArray(n.colors), (t.needsUpdate = !0)),
            (n.colorsNeedUpdate = !1)),
          n.uvsNeedUpdate &&
            (void 0 !== (t = this.attributes.uv) &&
              (t.copyVector2sArray(n.uvs), (t.needsUpdate = !0)),
            (n.uvsNeedUpdate = !1)),
          n.lineDistancesNeedUpdate &&
            (void 0 !== (t = this.attributes.lineDistance) &&
              (t.copyArray(n.lineDistances), (t.needsUpdate = !0)),
            (n.lineDistancesNeedUpdate = !1)),
          n.groupsNeedUpdate &&
            (n.computeGroups(e.geometry),
            (this.groups = n.groups),
            (n.groupsNeedUpdate = !1)),
          this
        );
      },
      fromGeometry: function (e) {
        return (
          (e.__directGeometry = new Fe().fromGeometry(e)),
          this.fromDirectGeometry(e.__directGeometry)
        );
      },
      fromDirectGeometry: function (e) {
        var t = new Float32Array(3 * e.vertices.length);
        if (
          (this.setAttribute(
            "position",
            new Se(t, 3).copyVector3sArray(e.vertices)
          ),
          e.normals.length > 0)
        ) {
          var n = new Float32Array(3 * e.normals.length);
          this.setAttribute(
            "normal",
            new Se(n, 3).copyVector3sArray(e.normals)
          );
        }
        if (e.colors.length > 0) {
          var i = new Float32Array(3 * e.colors.length);
          this.setAttribute("color", new Se(i, 3).copyColorsArray(e.colors));
        }
        if (e.uvs.length > 0) {
          var r = new Float32Array(2 * e.uvs.length);
          this.setAttribute("uv", new Se(r, 2).copyVector2sArray(e.uvs));
        }
        if (e.uvs2.length > 0) {
          var a = new Float32Array(2 * e.uvs2.length);
          this.setAttribute("uv2", new Se(a, 2).copyVector2sArray(e.uvs2));
        }
        for (var o in ((this.groups = e.groups), e.morphTargets)) {
          for (
            var s = [], l = e.morphTargets[o], c = 0, u = l.length;
            c < u;
            c++
          ) {
            var h = l[c],
              d = new Ie(3 * h.data.length, 3);
            (d.name = h.name), s.push(d.copyVector3sArray(h.data));
          }
          this.morphAttributes[o] = s;
        }
        if (e.skinIndices.length > 0) {
          var f = new Ie(4 * e.skinIndices.length, 4);
          this.setAttribute("skinIndex", f.copyVector4sArray(e.skinIndices));
        }
        if (e.skinWeights.length > 0) {
          var p = new Ie(4 * e.skinWeights.length, 4);
          this.setAttribute("skinWeight", p.copyVector4sArray(e.skinWeights));
        }
        return (
          null !== e.boundingSphere &&
            (this.boundingSphere = e.boundingSphere.clone()),
          null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
          this
        );
      },
      computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new S());
        var e = this.attributes.position,
          t = this.morphAttributes.position;
        if (void 0 !== e) {
          if ((this.boundingBox.setFromBufferAttribute(e), t))
            for (var n = 0, i = t.length; n < i; n++) {
              var r = t[n];
              He.setFromBufferAttribute(r),
                this.morphTargetsRelative
                  ? (We.addVectors(this.boundingBox.min, He.min),
                    this.boundingBox.expandByPoint(We),
                    We.addVectors(this.boundingBox.max, He.max),
                    this.boundingBox.expandByPoint(We))
                  : (this.boundingBox.expandByPoint(He.min),
                    this.boundingBox.expandByPoint(He.max));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) ||
          isNaN(this.boundingBox.min.y) ||
          isNaN(this.boundingBox.min.z)) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
            this
          );
      },
      computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new R());
        var e = this.attributes.position,
          t = this.morphAttributes.position;
        if (e) {
          var n = this.boundingSphere.center;
          if ((He.setFromBufferAttribute(e), t))
            for (var i = 0, r = t.length; i < r; i++) {
              var a = t[i];
              ke.setFromBufferAttribute(a),
                this.morphTargetsRelative
                  ? (We.addVectors(He.min, ke.min),
                    He.expandByPoint(We),
                    We.addVectors(He.max, ke.max),
                    He.expandByPoint(We))
                  : (He.expandByPoint(ke.min), He.expandByPoint(ke.max));
            }
          He.getCenter(n);
          var o = 0;
          for (i = 0, r = e.count; i < r; i++)
            We.fromBufferAttribute(e, i),
              (o = Math.max(o, n.distanceToSquared(We)));
          if (t)
            for (i = 0, r = t.length; i < r; i++) {
              a = t[i];
              for (
                var s = this.morphTargetsRelative, l = 0, c = a.count;
                l < c;
                l++
              )
                We.fromBufferAttribute(a, l),
                  s && (Ve.fromBufferAttribute(e, l), We.add(Ve)),
                  (o = Math.max(o, n.distanceToSquared(We)));
            }
          (this.boundingSphere.radius = Math.sqrt(o)),
            isNaN(this.boundingSphere.radius) &&
              console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                this
              );
        }
      },
      computeFaceNormals: function () {},
      computeVertexNormals: function () {
        var e = this.index,
          t = this.attributes;
        if (t.position) {
          var n = t.position.array;
          if (void 0 === t.normal)
            this.setAttribute("normal", new Se(new Float32Array(n.length), 3));
          else
            for (var i = t.normal.array, r = 0, a = i.length; r < a; r++)
              i[r] = 0;
          var o,
            s,
            l,
            c = t.normal.array,
            u = new d.a(),
            h = new d.a(),
            f = new d.a(),
            p = new d.a(),
            m = new d.a();
          if (e) {
            var g = e.array;
            for (r = 0, a = e.count; r < a; r += 3)
              (o = 3 * g[r + 0]),
                (s = 3 * g[r + 1]),
                (l = 3 * g[r + 2]),
                u.fromArray(n, o),
                h.fromArray(n, s),
                f.fromArray(n, l),
                p.subVectors(f, h),
                m.subVectors(u, h),
                p.cross(m),
                (c[o] += p.x),
                (c[o + 1] += p.y),
                (c[o + 2] += p.z),
                (c[s] += p.x),
                (c[s + 1] += p.y),
                (c[s + 2] += p.z),
                (c[l] += p.x),
                (c[l + 1] += p.y),
                (c[l + 2] += p.z);
          } else
            for (r = 0, a = n.length; r < a; r += 9)
              u.fromArray(n, r),
                h.fromArray(n, r + 3),
                f.fromArray(n, r + 6),
                p.subVectors(f, h),
                m.subVectors(u, h),
                p.cross(m),
                (c[r] = p.x),
                (c[r + 1] = p.y),
                (c[r + 2] = p.z),
                (c[r + 3] = p.x),
                (c[r + 4] = p.y),
                (c[r + 5] = p.z),
                (c[r + 6] = p.x),
                (c[r + 7] = p.y),
                (c[r + 8] = p.z);
          this.normalizeNormals(), (t.normal.needsUpdate = !0);
        }
      },
      merge: function (e, t) {
        if (e && e.isBufferGeometry) {
          void 0 === t &&
            ((t = 0),
            console.warn(
              "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
            ));
          var n = this.attributes;
          for (var i in n)
            if (void 0 !== e.attributes[i])
              for (
                var r = n[i].array,
                  a = e.attributes[i],
                  o = a.array,
                  s = a.itemSize * t,
                  l = Math.min(o.length, r.length - s),
                  c = 0,
                  u = s;
                c < l;
                c++, u++
              )
                r[u] = o[c];
          return this;
        }
        console.error(
          "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
          e
        );
      },
      normalizeNormals: function () {
        for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++)
          (We.x = e.getX(t)),
            (We.y = e.getY(t)),
            (We.z = e.getZ(t)),
            We.normalize(),
            e.setXYZ(t, We.x, We.y, We.z);
      },
      toNonIndexed: function () {
        function e(e, t) {
          for (
            var n = e.array,
              i = e.itemSize,
              r = new n.constructor(t.length * i),
              a = 0,
              o = 0,
              s = 0,
              l = t.length;
            s < l;
            s++
          ) {
            a = t[s] * i;
            for (var c = 0; c < i; c++) r[o++] = n[a++];
          }
          return new Se(r, i);
        }
        if (null === this.index)
          return (
            console.warn(
              "THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
            ),
            this
          );
        var t = new je(),
          n = this.index.array,
          i = this.attributes;
        for (var r in i) {
          var a = e(i[r], n);
          t.setAttribute(r, a);
        }
        var o = this.morphAttributes;
        for (r in o) {
          for (var s = [], l = o[r], c = 0, u = l.length; c < u; c++) {
            a = e(l[c], n);
            s.push(a);
          }
          t.morphAttributes[r] = s;
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        for (var h = this.groups, d = ((c = 0), h.length); c < d; c++) {
          var f = h[c];
          t.addGroup(f.start, f.count, f.materialIndex);
        }
        return t;
      },
      toJSON: function () {
        var e = {
          metadata: {
            version: 4.5,
            type: "BufferGeometry",
            generator: "BufferGeometry.toJSON",
          },
        };
        if (
          ((e.uuid = this.uuid),
          (e.type = this.type),
          "" !== this.name && (e.name = this.name),
          Object.keys(this.userData).length > 0 && (e.userData = this.userData),
          void 0 !== this.parameters)
        ) {
          var t = this.parameters;
          for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
          return e;
        }
        e.data = { attributes: {} };
        var i = this.index;
        null !== i &&
          (e.data.index = {
            type: i.array.constructor.name,
            array: Array.prototype.slice.call(i.array),
          });
        var r = this.attributes;
        for (var n in r) {
          var a = (d = r[n]).toJSON();
          "" !== d.name && (a.name = d.name), (e.data.attributes[n] = a);
        }
        var o = {},
          s = !1;
        for (var n in this.morphAttributes) {
          for (
            var l = this.morphAttributes[n], c = [], u = 0, h = l.length;
            u < h;
            u++
          ) {
            var d;
            a = (d = l[u]).toJSON();
            "" !== d.name && (a.name = d.name), c.push(a);
          }
          c.length > 0 && ((o[n] = c), (s = !0));
        }
        s &&
          ((e.data.morphAttributes = o),
          (e.data.morphTargetsRelative = this.morphTargetsRelative));
        var f = this.groups;
        f.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(f)));
        var p = this.boundingSphere;
        return (
          null !== p &&
            (e.data.boundingSphere = {
              center: p.center.toArray(),
              radius: p.radius,
            }),
          e
        );
      },
      clone: function () {
        return new je().copy(this);
      },
      copy: function (e) {
        var t, n, i;
        (this.index = null),
          (this.attributes = {}),
          (this.morphAttributes = {}),
          (this.groups = []),
          (this.boundingBox = null),
          (this.boundingSphere = null),
          (this.name = e.name);
        var r = e.index;
        null !== r && this.setIndex(r.clone());
        var a = e.attributes;
        for (t in a) {
          var o = a[t];
          this.setAttribute(t, o.clone());
        }
        var s = e.morphAttributes;
        for (t in s) {
          var l = [],
            c = s[t];
          for (n = 0, i = c.length; n < i; n++) l.push(c[n].clone());
          this.morphAttributes[t] = l;
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        var u = e.groups;
        for (n = 0, i = u.length; n < i; n++) {
          var h = u[n];
          this.addGroup(h.start, h.count, h.materialIndex);
        }
        var d = e.boundingBox;
        null !== d && (this.boundingBox = d.clone());
        var f = e.boundingSphere;
        return (
          null !== f && (this.boundingSphere = f.clone()),
          (this.drawRange.start = e.drawRange.start),
          (this.drawRange.count = e.drawRange.count),
          (this.userData = e.userData),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    });
    class Xe extends je {
      constructor(e, t, n, i, r, a) {
        super(),
          (this.type = "BoxBufferGeometry"),
          (this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a,
          });
        var o = this;
        (e = e || 1),
          (t = t || 1),
          (n = n || 1),
          (i = Math.floor(i) || 1),
          (r = Math.floor(r) || 1),
          (a = Math.floor(a) || 1);
        var s = [],
          l = [],
          c = [],
          u = [],
          h = 0,
          f = 0;
        function p(e, t, n, i, r, a, p, m, g, v, _) {
          var x,
            y,
            M = a / g,
            b = p / v,
            w = a / 2,
            E = p / 2,
            T = m / 2,
            S = g + 1,
            A = v + 1,
            L = 0,
            R = 0,
            P = new d.a();
          for (y = 0; y < A; y++) {
            var N = y * b - E;
            for (x = 0; x < S; x++) {
              var D = x * M - w;
              (P[e] = D * i),
                (P[t] = N * r),
                (P[n] = T),
                l.push(P.x, P.y, P.z),
                (P[e] = 0),
                (P[t] = 0),
                (P[n] = m > 0 ? 1 : -1),
                c.push(P.x, P.y, P.z),
                u.push(x / g),
                u.push(1 - y / v),
                (L += 1);
            }
          }
          for (y = 0; y < v; y++)
            for (x = 0; x < g; x++) {
              var C = h + x + S * y,
                I = h + x + S * (y + 1),
                U = h + (x + 1) + S * (y + 1),
                F = h + (x + 1) + S * y;
              s.push(C, I, F), s.push(I, U, F), (R += 6);
            }
          o.addGroup(f, R, _), (f += R), (h += L);
        }
        p("z", "y", "x", -1, -1, n, t, e, a, r, 0),
          p("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
          p("x", "z", "y", 1, 1, e, n, t, i, a, 2),
          p("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
          p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
          p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
          this.setIndex(s),
          this.setAttribute("position", new Ie(l, 3)),
          this.setAttribute("normal", new Ie(c, 3)),
          this.setAttribute("uv", new Ie(u, 2));
      }
    }
    function qe(e, t, n, i) {
      Ee.call(this),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: i,
        }),
        this.fromBufferGeometry(new Ye(e, t, n, i)),
        this.mergeVertices();
    }
    function Ye(e, t, n, i) {
      je.call(this),
        (this.type = "PlaneBufferGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: i,
        });
      var r,
        a,
        o = (e = e || 1) / 2,
        s = (t = t || 1) / 2,
        l = Math.floor(n) || 1,
        c = Math.floor(i) || 1,
        u = l + 1,
        h = c + 1,
        d = e / l,
        f = t / c,
        p = [],
        m = [],
        g = [],
        v = [];
      for (a = 0; a < h; a++) {
        var _ = a * f - s;
        for (r = 0; r < u; r++) {
          var x = r * d - o;
          m.push(x, -_, 0), g.push(0, 0, 1), v.push(r / l), v.push(1 - a / c);
        }
      }
      for (a = 0; a < c; a++)
        for (r = 0; r < l; r++) {
          var y = r + u * a,
            M = r + u * (a + 1),
            b = r + 1 + u * (a + 1),
            w = r + 1 + u * a;
          p.push(y, M, w), p.push(M, b, w);
        }
      this.setIndex(p),
        this.setAttribute("position", new Ie(m, 3)),
        this.setAttribute("normal", new Ie(g, 3)),
        this.setAttribute("uv", new Ie(v, 2));
    }
    (qe.prototype = Object.create(Ee.prototype)),
      (qe.prototype.constructor = qe),
      (Ye.prototype = Object.create(je.prototype)),
      (Ye.prototype.constructor = Ye);
    var Ze = 0;
    function Je() {
      Object.defineProperty(this, "id", { value: Ze++ }),
        (this.uuid = i.a.generateUUID()),
        (this.name = ""),
        (this.type = "Material"),
        (this.fog = !0),
        (this.blending = 1),
        (this.side = 0),
        (this.flatShading = !1),
        (this.vertexTangents = !1),
        (this.vertexColors = 0),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = 100),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = 7680),
        (this.stencilZFail = 7680),
        (this.stencilZPass = 7680),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaTest = 0),
        (this.premultipliedAlpha = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0);
    }
    (Je.prototype = Object.assign(Object.create(r.prototype), {
      constructor: Je,
      isMaterial: !0,
      onBeforeCompile: function () {},
      setValues: function (e) {
        if (void 0 !== e)
          for (var t in e) {
            var n = e[t];
            if (void 0 !== n)
              if ("shading" !== t) {
                var i = this[t];
                void 0 !== i
                  ? i && i.isColor
                    ? i.set(n)
                    : i && i.isVector3 && n && n.isVector3
                    ? i.copy(n)
                    : (this[t] = n)
                  : console.warn(
                      "THREE." +
                        this.type +
                        ": '" +
                        t +
                        "' is not a property of this material."
                    );
              } else
                console.warn(
                  "THREE." +
                    this.type +
                    ": .shading has been removed. Use the boolean .flatShading instead."
                ),
                  (this.flatShading = 1 === n);
            else
              console.warn(
                "THREE.Material: '" + t + "' parameter is undefined."
              );
          }
      },
      toJSON: function (e) {
        var t = void 0 === e || "string" == typeof e;
        t && (e = { textures: {}, images: {} });
        var n = {
          metadata: {
            version: 4.5,
            type: "Material",
            generator: "Material.toJSON",
          },
        };
        function i(e) {
          var t = [];
          for (var n in e) {
            var i = e[n];
            delete i.metadata, t.push(i);
          }
          return t;
        }
        if (
          ((n.uuid = this.uuid),
          (n.type = this.type),
          "" !== this.name && (n.name = this.name),
          this.color && this.color.isColor && (n.color = this.color.getHex()),
          void 0 !== this.roughness && (n.roughness = this.roughness),
          void 0 !== this.metalness && (n.metalness = this.metalness),
          this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
          this.emissive &&
            this.emissive.isColor &&
            (n.emissive = this.emissive.getHex()),
          this.emissiveIntensity &&
            1 !== this.emissiveIntensity &&
            (n.emissiveIntensity = this.emissiveIntensity),
          this.specular &&
            this.specular.isColor &&
            (n.specular = this.specular.getHex()),
          void 0 !== this.shininess && (n.shininess = this.shininess),
          void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
          void 0 !== this.clearcoatRoughness &&
            (n.clearcoatRoughness = this.clearcoatRoughness),
          this.clearcoatNormalMap &&
            this.clearcoatNormalMap.isTexture &&
            ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
            (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
          this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
          this.matcap &&
            this.matcap.isTexture &&
            (n.matcap = this.matcap.toJSON(e).uuid),
          this.alphaMap &&
            this.alphaMap.isTexture &&
            (n.alphaMap = this.alphaMap.toJSON(e).uuid),
          this.lightMap &&
            this.lightMap.isTexture &&
            (n.lightMap = this.lightMap.toJSON(e).uuid),
          this.aoMap &&
            this.aoMap.isTexture &&
            ((n.aoMap = this.aoMap.toJSON(e).uuid),
            (n.aoMapIntensity = this.aoMapIntensity)),
          this.bumpMap &&
            this.bumpMap.isTexture &&
            ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
            (n.bumpScale = this.bumpScale)),
          this.normalMap &&
            this.normalMap.isTexture &&
            ((n.normalMap = this.normalMap.toJSON(e).uuid),
            (n.normalMapType = this.normalMapType),
            (n.normalScale = this.normalScale.toArray())),
          this.displacementMap &&
            this.displacementMap.isTexture &&
            ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
            (n.displacementScale = this.displacementScale),
            (n.displacementBias = this.displacementBias)),
          this.roughnessMap &&
            this.roughnessMap.isTexture &&
            (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
          this.metalnessMap &&
            this.metalnessMap.isTexture &&
            (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
          this.emissiveMap &&
            this.emissiveMap.isTexture &&
            (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
          this.specularMap &&
            this.specularMap.isTexture &&
            (n.specularMap = this.specularMap.toJSON(e).uuid),
          this.envMap &&
            this.envMap.isTexture &&
            ((n.envMap = this.envMap.toJSON(e).uuid),
            (n.reflectivity = this.reflectivity),
            (n.refractionRatio = this.refractionRatio),
            void 0 !== this.combine && (n.combine = this.combine),
            void 0 !== this.envMapIntensity &&
              (n.envMapIntensity = this.envMapIntensity)),
          this.gradientMap &&
            this.gradientMap.isTexture &&
            (n.gradientMap = this.gradientMap.toJSON(e).uuid),
          void 0 !== this.size && (n.size = this.size),
          void 0 !== this.sizeAttenuation &&
            (n.sizeAttenuation = this.sizeAttenuation),
          1 !== this.blending && (n.blending = this.blending),
          !0 === this.flatShading && (n.flatShading = this.flatShading),
          0 !== this.side && (n.side = this.side),
          0 !== this.vertexColors && (n.vertexColors = this.vertexColors),
          this.opacity < 1 && (n.opacity = this.opacity),
          !0 === this.transparent && (n.transparent = this.transparent),
          (n.depthFunc = this.depthFunc),
          (n.depthTest = this.depthTest),
          (n.depthWrite = this.depthWrite),
          (n.stencilWrite = this.stencilWrite),
          (n.stencilWriteMask = this.stencilWriteMask),
          (n.stencilFunc = this.stencilFunc),
          (n.stencilRef = this.stencilRef),
          (n.stencilFuncMask = this.stencilFuncMask),
          (n.stencilFail = this.stencilFail),
          (n.stencilZFail = this.stencilZFail),
          (n.stencilZPass = this.stencilZPass),
          this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
          !0 === this.polygonOffset && (n.polygonOffset = !0),
          0 !== this.polygonOffsetFactor &&
            (n.polygonOffsetFactor = this.polygonOffsetFactor),
          0 !== this.polygonOffsetUnits &&
            (n.polygonOffsetUnits = this.polygonOffsetUnits),
          this.linewidth &&
            1 !== this.linewidth &&
            (n.linewidth = this.linewidth),
          void 0 !== this.dashSize && (n.dashSize = this.dashSize),
          void 0 !== this.gapSize && (n.gapSize = this.gapSize),
          void 0 !== this.scale && (n.scale = this.scale),
          !0 === this.dithering && (n.dithering = !0),
          this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
          !0 === this.premultipliedAlpha &&
            (n.premultipliedAlpha = this.premultipliedAlpha),
          !0 === this.wireframe && (n.wireframe = this.wireframe),
          this.wireframeLinewidth > 1 &&
            (n.wireframeLinewidth = this.wireframeLinewidth),
          "round" !== this.wireframeLinecap &&
            (n.wireframeLinecap = this.wireframeLinecap),
          "round" !== this.wireframeLinejoin &&
            (n.wireframeLinejoin = this.wireframeLinejoin),
          !0 === this.morphTargets && (n.morphTargets = !0),
          !0 === this.morphNormals && (n.morphNormals = !0),
          !0 === this.skinning && (n.skinning = !0),
          !1 === this.visible && (n.visible = !1),
          !1 === this.toneMapped && (n.toneMapped = !1),
          "{}" !== JSON.stringify(this.userData) &&
            (n.userData = this.userData),
          t)
        ) {
          var r = i(e.textures),
            a = i(e.images);
          r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
        }
        return n;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        (this.name = e.name),
          (this.fog = e.fog),
          (this.blending = e.blending),
          (this.side = e.side),
          (this.flatShading = e.flatShading),
          (this.vertexTangents = e.vertexTangents),
          (this.vertexColors = e.vertexColors),
          (this.opacity = e.opacity),
          (this.transparent = e.transparent),
          (this.blendSrc = e.blendSrc),
          (this.blendDst = e.blendDst),
          (this.blendEquation = e.blendEquation),
          (this.blendSrcAlpha = e.blendSrcAlpha),
          (this.blendDstAlpha = e.blendDstAlpha),
          (this.blendEquationAlpha = e.blendEquationAlpha),
          (this.depthFunc = e.depthFunc),
          (this.depthTest = e.depthTest),
          (this.depthWrite = e.depthWrite),
          (this.stencilWriteMask = e.stencilWriteMask),
          (this.stencilFunc = e.stencilFunc),
          (this.stencilRef = e.stencilRef),
          (this.stencilFuncMask = e.stencilFuncMask),
          (this.stencilFail = e.stencilFail),
          (this.stencilZFail = e.stencilZFail),
          (this.stencilZPass = e.stencilZPass),
          (this.stencilWrite = e.stencilWrite);
        var t = e.clippingPlanes,
          n = null;
        if (null !== t) {
          var i = t.length;
          n = new Array(i);
          for (var r = 0; r !== i; ++r) n[r] = t[r].clone();
        }
        return (
          (this.clippingPlanes = n),
          (this.clipIntersection = e.clipIntersection),
          (this.clipShadows = e.clipShadows),
          (this.shadowSide = e.shadowSide),
          (this.colorWrite = e.colorWrite),
          (this.precision = e.precision),
          (this.polygonOffset = e.polygonOffset),
          (this.polygonOffsetFactor = e.polygonOffsetFactor),
          (this.polygonOffsetUnits = e.polygonOffsetUnits),
          (this.dithering = e.dithering),
          (this.alphaTest = e.alphaTest),
          (this.premultipliedAlpha = e.premultipliedAlpha),
          (this.visible = e.visible),
          (this.toneMapped = e.toneMapped),
          (this.userData = JSON.parse(JSON.stringify(e.userData))),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    })),
      Object.defineProperty(Je.prototype, "needsUpdate", {
        set: function (e) {
          !0 === e && this.version++;
        },
      });
    function Qe(e) {
      Je.call(this),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader =
          "\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"),
        (this.fragmentShader =
          "\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        void 0 !== e &&
          (void 0 !== e.attributes &&
            console.error(
              "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
            ),
          this.setValues(e));
    }
    (Qe.prototype = Object.create(Je.prototype)),
      (Qe.prototype.constructor = Qe),
      (Qe.prototype.isShaderMaterial = !0),
      (Qe.prototype.copy = function (e) {
        return (
          Je.prototype.copy.call(this, e),
          (this.fragmentShader = e.fragmentShader),
          (this.vertexShader = e.vertexShader),
          (this.uniforms = Object(X.b)(e.uniforms)),
          (this.defines = Object.assign({}, e.defines)),
          (this.wireframe = e.wireframe),
          (this.wireframeLinewidth = e.wireframeLinewidth),
          (this.lights = e.lights),
          (this.clipping = e.clipping),
          (this.skinning = e.skinning),
          (this.morphTargets = e.morphTargets),
          (this.morphNormals = e.morphNormals),
          (this.extensions = e.extensions),
          this
        );
      }),
      (Qe.prototype.toJSON = function (e) {
        var t = Je.prototype.toJSON.call(this, e);
        for (var n in ((t.uniforms = {}), this.uniforms)) {
          var i = this.uniforms[n].value;
          i && i.isTexture
            ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
            : i && i.isColor
            ? (t.uniforms[n] = { type: "c", value: i.getHex() })
            : i && i.isVector2
            ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
            : i && i.isVector3
            ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
            : i && i.isVector4
            ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
            : i && i.isMatrix3
            ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
            : i && i.isMatrix4
            ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
            : (t.uniforms[n] = { value: i });
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
          (t.vertexShader = this.vertexShader),
          (t.fragmentShader = this.fragmentShader);
        var r = {};
        for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
        return Object.keys(r).length > 0 && (t.extensions = r), t;
      });
    var Ke = new d.a(),
      $e = new d.a(),
      et = new d.a(),
      tt = new d.a(),
      nt = new d.a(),
      it = new d.a(),
      rt = new d.a();
    function at(e, t) {
      (this.origin = void 0 !== e ? e : new d.a()),
        (this.direction = void 0 !== t ? t : new d.a(0, 0, -1));
    }
    Object.assign(at.prototype, {
      set: function (e, t) {
        return this.origin.copy(e), this.direction.copy(t), this;
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          this.origin.copy(e.origin), this.direction.copy(e.direction), this
        );
      },
      at: function (e, t) {
        return (
          void 0 === t &&
            (console.warn("THREE.Ray: .at() target is now required"),
            (t = new d.a())),
          t.copy(this.direction).multiplyScalar(e).add(this.origin)
        );
      },
      lookAt: function (e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this;
      },
      recast: function (e) {
        return this.origin.copy(this.at(e, Ke)), this;
      },
      closestPointToPoint: function (e, t) {
        void 0 === t &&
          (console.warn(
            "THREE.Ray: .closestPointToPoint() target is now required"
          ),
          (t = new d.a())),
          t.subVectors(e, this.origin);
        var n = t.dot(this.direction);
        return n < 0
          ? t.copy(this.origin)
          : t.copy(this.direction).multiplyScalar(n).add(this.origin);
      },
      distanceToPoint: function (e) {
        return Math.sqrt(this.distanceSqToPoint(e));
      },
      distanceSqToPoint: function (e) {
        var t = Ke.subVectors(e, this.origin).dot(this.direction);
        return t < 0
          ? this.origin.distanceToSquared(e)
          : (Ke.copy(this.direction).multiplyScalar(t).add(this.origin),
            Ke.distanceToSquared(e));
      },
      distanceSqToSegment: function (e, t, n, i) {
        $e.copy(e).add(t).multiplyScalar(0.5),
          et.copy(t).sub(e).normalize(),
          tt.copy(this.origin).sub($e);
        var r,
          a,
          o,
          s,
          l = 0.5 * e.distanceTo(t),
          c = -this.direction.dot(et),
          u = tt.dot(this.direction),
          h = -tt.dot(et),
          d = tt.lengthSq(),
          f = Math.abs(1 - c * c);
        if (f > 0)
          if (((a = c * u - h), (s = l * f), (r = c * h - u) >= 0))
            if (a >= -s)
              if (a <= s) {
                var p = 1 / f;
                o =
                  (r *= p) * (r + c * (a *= p) + 2 * u) +
                  a * (c * r + a + 2 * h) +
                  d;
              } else
                (a = l),
                  (o =
                    -(r = Math.max(0, -(c * a + u))) * r + a * (a + 2 * h) + d);
            else
              (a = -l),
                (o =
                  -(r = Math.max(0, -(c * a + u))) * r + a * (a + 2 * h) + d);
          else
            a <= -s
              ? (o =
                  -(r = Math.max(0, -(-c * l + u))) * r +
                  (a = r > 0 ? -l : Math.min(Math.max(-l, -h), l)) *
                    (a + 2 * h) +
                  d)
              : a <= s
              ? ((r = 0),
                (o = (a = Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d))
              : (o =
                  -(r = Math.max(0, -(c * l + u))) * r +
                  (a = r > 0 ? l : Math.min(Math.max(-l, -h), l)) *
                    (a + 2 * h) +
                  d);
        else
          (a = c > 0 ? -l : l),
            (o = -(r = Math.max(0, -(c * a + u))) * r + a * (a + 2 * h) + d);
        return (
          n && n.copy(this.direction).multiplyScalar(r).add(this.origin),
          i && i.copy(et).multiplyScalar(a).add($e),
          o
        );
      },
      intersectSphere: function (e, t) {
        Ke.subVectors(e.center, this.origin);
        var n = Ke.dot(this.direction),
          i = Ke.dot(Ke) - n * n,
          r = e.radius * e.radius;
        if (i > r) return null;
        var a = Math.sqrt(r - i),
          o = n - a,
          s = n + a;
        return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
      },
      intersectsSphere: function (e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
      },
      distanceToPlane: function (e) {
        var t = e.normal.dot(this.direction);
        if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        var n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null;
      },
      intersectPlane: function (e, t) {
        var n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t);
      },
      intersectsPlane: function (e) {
        var t = e.distanceToPoint(this.origin);
        return 0 === t || e.normal.dot(this.direction) * t < 0;
      },
      intersectBox: function (e, t) {
        var n,
          i,
          r,
          a,
          o,
          s,
          l = 1 / this.direction.x,
          c = 1 / this.direction.y,
          u = 1 / this.direction.z,
          h = this.origin;
        return (
          l >= 0
            ? ((n = (e.min.x - h.x) * l), (i = (e.max.x - h.x) * l))
            : ((n = (e.max.x - h.x) * l), (i = (e.min.x - h.x) * l)),
          c >= 0
            ? ((r = (e.min.y - h.y) * c), (a = (e.max.y - h.y) * c))
            : ((r = (e.max.y - h.y) * c), (a = (e.min.y - h.y) * c)),
          n > a || r > i
            ? null
            : ((r > n || n != n) && (n = r),
              (a < i || i != i) && (i = a),
              u >= 0
                ? ((o = (e.min.z - h.z) * u), (s = (e.max.z - h.z) * u))
                : ((o = (e.max.z - h.z) * u), (s = (e.min.z - h.z) * u)),
              n > s || o > i
                ? null
                : ((o > n || n != n) && (n = o),
                  (s < i || i != i) && (i = s),
                  i < 0 ? null : this.at(n >= 0 ? n : i, t)))
        );
      },
      intersectsBox: function (e) {
        return null !== this.intersectBox(e, Ke);
      },
      intersectTriangle: function (e, t, n, i, r) {
        nt.subVectors(t, e), it.subVectors(n, e), rt.crossVectors(nt, it);
        var a,
          o = this.direction.dot(rt);
        if (o > 0) {
          if (i) return null;
          a = 1;
        } else {
          if (!(o < 0)) return null;
          (a = -1), (o = -o);
        }
        tt.subVectors(this.origin, e);
        var s = a * this.direction.dot(it.crossVectors(tt, it));
        if (s < 0) return null;
        var l = a * this.direction.dot(nt.cross(tt));
        if (l < 0) return null;
        if (s + l > o) return null;
        var c = -a * tt.dot(rt);
        return c < 0 ? null : this.at(c / o, r);
      },
      applyMatrix4: function (e) {
        return (
          this.origin.applyMatrix4(e),
          this.direction.transformDirection(e),
          this
        );
      },
      equals: function (e) {
        return (
          e.origin.equals(this.origin) && e.direction.equals(this.direction)
        );
      },
    });
    var ot = new d.a(),
      st = new d.a(),
      lt = new d.a(),
      ct = new d.a(),
      ut = new d.a(),
      ht = new d.a(),
      dt = new d.a(),
      ft = new d.a(),
      pt = new d.a(),
      mt = new d.a();
    function gt(e, t, n) {
      (this.a = void 0 !== e ? e : new d.a()),
        (this.b = void 0 !== t ? t : new d.a()),
        (this.c = void 0 !== n ? n : new d.a());
    }
    function vt(e) {
      Je.call(this),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Y.a(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        this.setValues(e);
    }
    Object.assign(gt, {
      getNormal: function (e, t, n, i) {
        void 0 === i &&
          (console.warn("THREE.Triangle: .getNormal() target is now required"),
          (i = new d.a())),
          i.subVectors(n, t),
          ot.subVectors(e, t),
          i.cross(ot);
        var r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
      },
      getBarycoord: function (e, t, n, i, r) {
        ot.subVectors(i, t), st.subVectors(n, t), lt.subVectors(e, t);
        var a = ot.dot(ot),
          o = ot.dot(st),
          s = ot.dot(lt),
          l = st.dot(st),
          c = st.dot(lt),
          u = a * l - o * o;
        if (
          (void 0 === r &&
            (console.warn(
              "THREE.Triangle: .getBarycoord() target is now required"
            ),
            (r = new d.a())),
          0 === u)
        )
          return r.set(-2, -1, -1);
        var h = 1 / u,
          f = (l * s - o * c) * h,
          p = (a * c - o * s) * h;
        return r.set(1 - f - p, p, f);
      },
      containsPoint: function (e, t, n, i) {
        return (
          gt.getBarycoord(e, t, n, i, ct),
          ct.x >= 0 && ct.y >= 0 && ct.x + ct.y <= 1
        );
      },
      getUV: function (e, t, n, i, r, a, o, s) {
        return (
          this.getBarycoord(e, t, n, i, ct),
          s.set(0, 0),
          s.addScaledVector(r, ct.x),
          s.addScaledVector(a, ct.y),
          s.addScaledVector(o, ct.z),
          s
        );
      },
      isFrontFacing: function (e, t, n, i) {
        return (
          ot.subVectors(n, t), st.subVectors(e, t), ot.cross(st).dot(i) < 0
        );
      },
    }),
      Object.assign(gt.prototype, {
        set: function (e, t, n) {
          return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
        },
        setFromPointsAndIndices: function (e, t, n, i) {
          return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        copy: function (e) {
          return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
        },
        getArea: function () {
          return (
            ot.subVectors(this.c, this.b),
            st.subVectors(this.a, this.b),
            0.5 * ot.cross(st).length()
          );
        },
        getMidpoint: function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "THREE.Triangle: .getMidpoint() target is now required"
              ),
              (e = new d.a())),
            e
              .addVectors(this.a, this.b)
              .add(this.c)
              .multiplyScalar(1 / 3)
          );
        },
        getNormal: function (e) {
          return gt.getNormal(this.a, this.b, this.c, e);
        },
        getPlane: function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "THREE.Triangle: .getPlane() target is now required"
              ),
              (e = new C())),
            e.setFromCoplanarPoints(this.a, this.b, this.c)
          );
        },
        getBarycoord: function (e, t) {
          return gt.getBarycoord(e, this.a, this.b, this.c, t);
        },
        getUV: function (e, t, n, i, r) {
          return gt.getUV(e, this.a, this.b, this.c, t, n, i, r);
        },
        containsPoint: function (e) {
          return gt.containsPoint(e, this.a, this.b, this.c);
        },
        isFrontFacing: function (e) {
          return gt.isFrontFacing(this.a, this.b, this.c, e);
        },
        intersectsBox: function (e) {
          return e.intersectsTriangle(this);
        },
        closestPointToPoint: function (e, t) {
          void 0 === t &&
            (console.warn(
              "THREE.Triangle: .closestPointToPoint() target is now required"
            ),
            (t = new d.a()));
          var n,
            i,
            r = this.a,
            a = this.b,
            o = this.c;
          ut.subVectors(a, r), ht.subVectors(o, r), ft.subVectors(e, r);
          var s = ut.dot(ft),
            l = ht.dot(ft);
          if (s <= 0 && l <= 0) return t.copy(r);
          pt.subVectors(e, a);
          var c = ut.dot(pt),
            u = ht.dot(pt);
          if (c >= 0 && u <= c) return t.copy(a);
          var h = s * u - c * l;
          if (h <= 0 && s >= 0 && c <= 0)
            return (n = s / (s - c)), t.copy(r).addScaledVector(ut, n);
          mt.subVectors(e, o);
          var f = ut.dot(mt),
            p = ht.dot(mt);
          if (p >= 0 && f <= p) return t.copy(o);
          var m = f * l - s * p;
          if (m <= 0 && l >= 0 && p <= 0)
            return (i = l / (l - p)), t.copy(r).addScaledVector(ht, i);
          var g = c * p - f * u;
          if (g <= 0 && u - c >= 0 && f - p >= 0)
            return (
              dt.subVectors(o, a),
              (i = (u - c) / (u - c + (f - p))),
              t.copy(a).addScaledVector(dt, i)
            );
          var v = 1 / (g + m + h);
          return (
            (n = m * v),
            (i = h * v),
            t.copy(r).addScaledVector(ut, n).addScaledVector(ht, i)
          );
        },
        equals: function (e) {
          return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
        },
      }),
      (vt.prototype = Object.create(Je.prototype)),
      (vt.prototype.constructor = vt),
      (vt.prototype.isMeshBasicMaterial = !0),
      (vt.prototype.copy = function (e) {
        return (
          Je.prototype.copy.call(this, e),
          this.color.copy(e.color),
          (this.map = e.map),
          (this.lightMap = e.lightMap),
          (this.lightMapIntensity = e.lightMapIntensity),
          (this.aoMap = e.aoMap),
          (this.aoMapIntensity = e.aoMapIntensity),
          (this.specularMap = e.specularMap),
          (this.alphaMap = e.alphaMap),
          (this.envMap = e.envMap),
          (this.combine = e.combine),
          (this.reflectivity = e.reflectivity),
          (this.refractionRatio = e.refractionRatio),
          (this.wireframe = e.wireframe),
          (this.wireframeLinewidth = e.wireframeLinewidth),
          (this.wireframeLinecap = e.wireframeLinecap),
          (this.wireframeLinejoin = e.wireframeLinejoin),
          (this.skinning = e.skinning),
          (this.morphTargets = e.morphTargets),
          this
        );
      });
    var _t = new W(),
      xt = new at(),
      yt = new R(),
      Mt = new d.a(),
      bt = new d.a(),
      wt = new d.a(),
      Et = new d.a(),
      Tt = new d.a(),
      St = new d.a(),
      At = new d.a(),
      Lt = new d.a(),
      Rt = new d.a(),
      Pt = new o.a(),
      Nt = new o.a(),
      Dt = new o.a(),
      Ct = new d.a(),
      It = new d.a();
    function Ut(e, t) {
      me.call(this),
        (this.type = "Mesh"),
        (this.geometry = void 0 !== e ? e : new je()),
        (this.material =
          void 0 !== t ? t : new vt({ color: 16777215 * Math.random() })),
        this.updateMorphTargets();
    }
    function Ft(e, t, n, i, r, a, o, s) {
      if (
        null ===
        (1 === t.side
          ? i.intersectTriangle(o, a, r, !0, s)
          : i.intersectTriangle(r, a, o, 2 !== t.side, s))
      )
        return null;
      It.copy(s), It.applyMatrix4(e.matrixWorld);
      var l = n.ray.origin.distanceTo(It);
      return l < n.near || l > n.far
        ? null
        : { distance: l, point: It.clone(), object: e };
    }
    function Ot(e, t, n, i, r, a, s, l, c, u, h, d) {
      Mt.fromBufferAttribute(r, u),
        bt.fromBufferAttribute(r, h),
        wt.fromBufferAttribute(r, d);
      var f = e.morphTargetInfluences;
      if (t.morphTargets && a && f) {
        At.set(0, 0, 0), Lt.set(0, 0, 0), Rt.set(0, 0, 0);
        for (var p = 0, m = a.length; p < m; p++) {
          var g = f[p],
            v = a[p];
          0 !== g &&
            (Et.fromBufferAttribute(v, u),
            Tt.fromBufferAttribute(v, h),
            St.fromBufferAttribute(v, d),
            s
              ? (At.addScaledVector(Et, g),
                Lt.addScaledVector(Tt, g),
                Rt.addScaledVector(St, g))
              : (At.addScaledVector(Et.sub(Mt), g),
                Lt.addScaledVector(Tt.sub(bt), g),
                Rt.addScaledVector(St.sub(wt), g)));
        }
        Mt.add(At), bt.add(Lt), wt.add(Rt);
      }
      var _ = Ft(e, t, n, i, Mt, bt, wt, Ct);
      if (_) {
        l &&
          (Pt.fromBufferAttribute(l, u),
          Nt.fromBufferAttribute(l, h),
          Dt.fromBufferAttribute(l, d),
          (_.uv = gt.getUV(Ct, Mt, bt, wt, Pt, Nt, Dt, new o.a()))),
          c &&
            (Pt.fromBufferAttribute(c, u),
            Nt.fromBufferAttribute(c, h),
            Dt.fromBufferAttribute(c, d),
            (_.uv2 = gt.getUV(Ct, Mt, bt, wt, Pt, Nt, Dt, new o.a())));
        var x = new xe(u, h, d);
        gt.getNormal(Mt, bt, wt, x.normal), (_.face = x);
      }
      return _;
    }
    function zt(e, t, n, i) {
      var r,
        a,
        o = new Y.a(0),
        s = 0,
        l = null,
        c = 0;
      function u(e, n) {
        t.buffers.color.setClear(e.r, e.g, e.b, n, i);
      }
      return {
        getClearColor: function () {
          return o;
        },
        setClearColor: function (e, t) {
          o.set(e), u(o, (s = void 0 !== t ? t : 1));
        },
        getClearAlpha: function () {
          return s;
        },
        setClearAlpha: function (e) {
          u(o, (s = e));
        },
        render: function (t, i, h, d) {
          var f = i.background,
            p = e.xr,
            m = p.getSession && p.getSession();
          if (
            (m && "additive" === m.environmentBlendMode && (f = null),
            null === f
              ? (u(o, s), (l = null), (c = 0))
              : f && f.isColor && (u(f, 1), (d = !0), (l = null), (c = 0)),
            (e.autoClear || d) &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            f &&
              (f.isCubeTexture ||
                f.isWebGLRenderTargetCube ||
                306 === f.mapping))
          ) {
            void 0 === a &&
              ((a = new Ut(
                new Xe(1, 1, 1),
                new Qe({
                  type: "BackgroundCubeMaterial",
                  uniforms: Object(X.b)(Z.cube.uniforms),
                  vertexShader: Z.cube.vertexShader,
                  fragmentShader: Z.cube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )).geometry.deleteAttribute("normal"),
              a.geometry.deleteAttribute("uv"),
              (a.onBeforeRender = function (e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld);
              }),
              Object.defineProperty(a.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              n.update(a));
            var g = f.isWebGLRenderTargetCube ? f.texture : f;
            (a.material.uniforms.envMap.value = g),
              (a.material.uniforms.flipEnvMap.value = g.isCubeTexture ? -1 : 1),
              (l === f && c === g.version) ||
                ((a.material.needsUpdate = !0), (l = f), (c = g.version)),
              t.unshift(a, a.geometry, a.material, 0, 0, null);
          } else
            f &&
              f.isTexture &&
              (void 0 === r &&
                ((r = new Ut(
                  new Ye(2, 2),
                  new Qe({
                    type: "BackgroundMaterial",
                    uniforms: Object(X.b)(Z.background.uniforms),
                    vertexShader: Z.background.vertexShader,
                    fragmentShader: Z.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )).geometry.deleteAttribute("normal"),
                Object.defineProperty(r.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                n.update(r)),
              (r.material.uniforms.t2D.value = f),
              !0 === f.matrixAutoUpdate && f.updateMatrix(),
              r.material.uniforms.uvTransform.value.copy(f.matrix),
              (l === f && c === f.version) ||
                ((r.material.needsUpdate = !0), (l = f), (c = f.version)),
              t.unshift(r, r.geometry, r.material, 0, 0, null));
        },
      };
    }
    function Bt(e, t, n, i) {
      var r,
        a = i.isWebGL2;
      (this.setMode = function (e) {
        r = e;
      }),
        (this.render = function (t, i) {
          e.drawArrays(r, t, i), n.update(i, r);
        }),
        (this.renderInstances = function (i, o, s, l) {
          if (0 !== l) {
            var c, u;
            if (a) (c = e), (u = "drawArraysInstanced");
            else if (
              ((u = "drawArraysInstancedANGLE"),
              null === (c = t.get("ANGLE_instanced_arrays")))
            )
              return void console.error(
                "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            c[u](r, o, s, l), n.update(s, r, l);
          }
        });
    }
    function Gt(e, t, n) {
      var i;
      function r(t) {
        if ("highp" === t) {
          if (
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT)
              .precision > 0 &&
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
              .precision > 0
          )
            return "highp";
          t = "mediump";
        }
        return "mediump" === t &&
          e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
            .precision > 0 &&
          e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
            .precision > 0
          ? "mediump"
          : "lowp";
      }
      var a =
          ("undefined" != typeof WebGL2RenderingContext &&
            e instanceof WebGL2RenderingContext) ||
          ("undefined" != typeof WebGL2ComputeRenderingContext &&
            e instanceof WebGL2ComputeRenderingContext),
        o = void 0 !== n.precision ? n.precision : "highp",
        s = r(o);
      s !== o &&
        (console.warn(
          "THREE.WebGLRenderer:",
          o,
          "not supported, using",
          s,
          "instead."
        ),
        (o = s));
      var l = !0 === n.logarithmicDepthBuffer,
        c = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
        u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        h = e.getParameter(e.MAX_TEXTURE_SIZE),
        d = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
        f = e.getParameter(e.MAX_VERTEX_ATTRIBS),
        p = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
        m = e.getParameter(e.MAX_VARYING_VECTORS),
        g = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
        v = u > 0,
        _ = a || !!t.get("OES_texture_float");
      return {
        isWebGL2: a,
        getMaxAnisotropy: function () {
          if (void 0 !== i) return i;
          var n = t.get("EXT_texture_filter_anisotropic");
          return (i =
            null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
        },
        getMaxPrecision: r,
        precision: o,
        logarithmicDepthBuffer: l,
        maxTextures: c,
        maxVertexTextures: u,
        maxTextureSize: h,
        maxCubemapSize: d,
        maxAttributes: f,
        maxVertexUniforms: p,
        maxVaryings: m,
        maxFragmentUniforms: g,
        vertexTextures: v,
        floatFragmentTextures: _,
        floatVertexTextures: v && _,
        maxSamples: a ? e.getParameter(e.MAX_SAMPLES) : 0,
      };
    }
    function Vt() {
      var e = this,
        t = null,
        n = 0,
        i = !1,
        r = !1,
        a = new C(),
        o = new s.a(),
        l = { value: null, needsUpdate: !1 };
      function c() {
        l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
          (e.numPlanes = n),
          (e.numIntersection = 0);
      }
      function u(t, n, i, r) {
        var s = null !== t ? t.length : 0,
          c = null;
        if (0 !== s) {
          if (((c = l.value), !0 !== r || null === c)) {
            var u = i + 4 * s,
              h = n.matrixWorldInverse;
            o.getNormalMatrix(h),
              (null === c || c.length < u) && (c = new Float32Array(u));
            for (var d = 0, f = i; d !== s; ++d, f += 4)
              a.copy(t[d]).applyMatrix4(h, o),
                a.normal.toArray(c, f),
                (c[f + 3] = a.constant);
          }
          (l.value = c), (l.needsUpdate = !0);
        }
        return (e.numPlanes = s), c;
      }
      (this.uniform = l),
        (this.numPlanes = 0),
        (this.numIntersection = 0),
        (this.init = function (e, r, a) {
          var o = 0 !== e.length || r || 0 !== n || i;
          return (i = r), (t = u(e, a, 0)), (n = e.length), o;
        }),
        (this.beginShadows = function () {
          (r = !0), u(null);
        }),
        (this.endShadows = function () {
          (r = !1), c();
        }),
        (this.setState = function (e, a, o, s, h, d) {
          if (!i || null === e || 0 === e.length || (r && !o))
            r ? u(null) : c();
          else {
            var f = r ? 0 : n,
              p = 4 * f,
              m = h.clippingState || null;
            (l.value = m), (m = u(e, s, p, d));
            for (var g = 0; g !== p; ++g) m[g] = t[g];
            (h.clippingState = m),
              (this.numIntersection = a ? this.numPlanes : 0),
              (this.numPlanes += f);
          }
        });
    }
    function Ht(e) {
      var t = {};
      return {
        get: function (n) {
          if (void 0 !== t[n]) return t[n];
          var i;
          switch (n) {
            case "WEBGL_depth_texture":
              i =
                e.getExtension("WEBGL_depth_texture") ||
                e.getExtension("MOZ_WEBGL_depth_texture") ||
                e.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i =
                e.getExtension("EXT_texture_filter_anisotropic") ||
                e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i =
                e.getExtension("WEBGL_compressed_texture_s3tc") ||
                e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i =
                e.getExtension("WEBGL_compressed_texture_pvrtc") ||
                e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = e.getExtension(n);
          }
          return (
            null === i &&
              console.warn(
                "THREE.WebGLRenderer: " + n + " extension not supported."
              ),
            (t[n] = i),
            i
          );
        },
      };
    }
    function kt(e, t, n) {
      var i = new WeakMap(),
        r = new WeakMap();
      function a(e) {
        var o = e.target,
          s = i.get(o);
        for (var l in (null !== s.index && t.remove(s.index), s.attributes))
          t.remove(s.attributes[l]);
        o.removeEventListener("dispose", a), i.delete(o);
        var c = r.get(s);
        c && (t.remove(c), r.delete(s)), n.memory.geometries--;
      }
      function o(n) {
        var i = [],
          a = n.index,
          o = n.attributes.position,
          s = 0;
        if (null !== a) {
          var l = a.array;
          s = a.version;
          for (var c = 0, u = l.length; c < u; c += 3) {
            var h = l[c + 0],
              d = l[c + 1],
              f = l[c + 2];
            i.push(h, d, d, f, f, h);
          }
        } else {
          l = o.array;
          s = o.version;
          for (c = 0, u = l.length / 3 - 1; c < u; c += 3) {
            (h = c + 0), (d = c + 1), (f = c + 2);
            i.push(h, d, d, f, f, h);
          }
        }
        var p = new (Oe(i) > 65535 ? Ce : Ne)(i, 1);
        (p.version = s), t.update(p, e.ELEMENT_ARRAY_BUFFER);
        var m = r.get(n);
        m && t.remove(m), r.set(n, p);
      }
      return {
        get: function (e, t) {
          var r = i.get(t);
          return (
            r ||
            (t.addEventListener("dispose", a),
            t.isBufferGeometry
              ? (r = t)
              : t.isGeometry &&
                (void 0 === t._bufferGeometry &&
                  (t._bufferGeometry = new je().setFromObject(e)),
                (r = t._bufferGeometry)),
            i.set(t, r),
            n.memory.geometries++,
            r)
          );
        },
        update: function (n) {
          var i = n.index,
            r = n.attributes;
          for (var a in (null !== i && t.update(i, e.ELEMENT_ARRAY_BUFFER), r))
            t.update(r[a], e.ARRAY_BUFFER);
          var o = n.morphAttributes;
          for (var a in o)
            for (var s = o[a], l = 0, c = s.length; l < c; l++)
              t.update(s[l], e.ARRAY_BUFFER);
        },
        getWireframeAttribute: function (e) {
          var t = r.get(e);
          if (t) {
            var n = e.index;
            null !== n && t.version < n.version && o(e);
          } else o(e);
          return r.get(e);
        },
      };
    }
    function Wt(e, t, n, i) {
      var r,
        a,
        o,
        s = i.isWebGL2;
      (this.setMode = function (e) {
        r = e;
      }),
        (this.setIndex = function (e) {
          (a = e.type), (o = e.bytesPerElement);
        }),
        (this.render = function (t, i) {
          e.drawElements(r, i, a, t * o), n.update(i, r);
        }),
        (this.renderInstances = function (i, l, c, u) {
          if (0 !== u) {
            var h, d;
            if (s) (h = e), (d = "drawElementsInstanced");
            else if (
              ((d = "drawElementsInstancedANGLE"),
              null === (h = t.get("ANGLE_instanced_arrays")))
            )
              return void console.error(
                "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            h[d](r, c, a, l * o, u), n.update(c, r, u);
          }
        });
    }
    function jt(e) {
      var t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
      return {
        memory: { geometries: 0, textures: 0 },
        render: t,
        programs: null,
        autoReset: !0,
        reset: function () {
          t.frame++,
            (t.calls = 0),
            (t.triangles = 0),
            (t.points = 0),
            (t.lines = 0);
        },
        update: function (n, i, r) {
          switch (((r = r || 1), t.calls++, i)) {
            case e.TRIANGLES:
              t.triangles += r * (n / 3);
              break;
            case e.LINES:
              t.lines += r * (n / 2);
              break;
            case e.LINE_STRIP:
              t.lines += r * (n - 1);
              break;
            case e.LINE_LOOP:
              t.lines += r * n;
              break;
            case e.POINTS:
              t.points += r * n;
              break;
            default:
              console.error("THREE.WebGLInfo: Unknown draw mode:", i);
          }
        },
      };
    }
    function Xt(e, t) {
      return Math.abs(t[1]) - Math.abs(e[1]);
    }
    function qt(e) {
      var t = {},
        n = new Float32Array(8);
      return {
        update: function (i, r, a, o) {
          var s = i.morphTargetInfluences,
            l = void 0 === s ? 0 : s.length,
            c = t[r.id];
          if (void 0 === c) {
            c = [];
            for (var u = 0; u < l; u++) c[u] = [u, 0];
            t[r.id] = c;
          }
          var h = a.morphTargets && r.morphAttributes.position,
            d = a.morphNormals && r.morphAttributes.normal;
          for (u = 0; u < l; u++) {
            0 !== (p = c[u])[1] &&
              (h && r.deleteAttribute("morphTarget" + u),
              d && r.deleteAttribute("morphNormal" + u));
          }
          for (u = 0; u < l; u++) {
            ((p = c[u])[0] = u), (p[1] = s[u]);
          }
          c.sort(Xt);
          var f = 0;
          for (u = 0; u < 8; u++) {
            var p;
            if ((p = c[u])) {
              var m = p[0],
                g = p[1];
              if (g) {
                h && r.setAttribute("morphTarget" + u, h[m]),
                  d && r.setAttribute("morphNormal" + u, d[m]),
                  (n[u] = g),
                  (f += g);
                continue;
              }
            }
            n[u] = 0;
          }
          var v = r.morphTargetsRelative ? 1 : 1 - f;
          o.getUniforms().setValue(e, "morphTargetBaseInfluence", v),
            o.getUniforms().setValue(e, "morphTargetInfluences", n);
        },
      };
    }
    function Yt(e, t, n, i) {
      var r = {};
      return {
        update: function (a) {
          var o = i.render.frame,
            s = a.geometry,
            l = t.get(a, s);
          return (
            r[l.id] !== o &&
              (s.isGeometry && l.updateFromObject(a),
              t.update(l),
              (r[l.id] = o)),
            a.isInstancedMesh && n.update(a.instanceMatrix, e.ARRAY_BUFFER),
            l
          );
        },
        dispose: function () {
          r = {};
        },
      };
    }
    function Zt(e, t, n, i, r, a, o, s, l, c) {
      (e = void 0 !== e ? e : []),
        (t = void 0 !== t ? t : 301),
        (o = void 0 !== o ? o : 1022),
        u.call(this, e, t, n, i, r, a, o, s, l, c),
        (this.flipY = !1);
    }
    function Jt(e, t, n, i) {
      u.call(this, null),
        (this.image = {
          data: e || null,
          width: t || 1,
          height: n || 1,
          depth: i || 1,
        }),
        (this.magFilter = 1003),
        (this.minFilter = 1003),
        (this.wrapR = 1001),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.needsUpdate = !0);
    }
    function Qt(e, t, n, i) {
      u.call(this, null),
        (this.image = {
          data: e || null,
          width: t || 1,
          height: n || 1,
          depth: i || 1,
        }),
        (this.magFilter = 1003),
        (this.minFilter = 1003),
        (this.wrapR = 1001),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.needsUpdate = !0);
    }
    (Ut.prototype = Object.assign(Object.create(me.prototype), {
      constructor: Ut,
      isMesh: !0,
      copy: function (e) {
        return (
          me.prototype.copy.call(this, e),
          void 0 !== e.morphTargetInfluences &&
            (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
          void 0 !== e.morphTargetDictionary &&
            (this.morphTargetDictionary = Object.assign(
              {},
              e.morphTargetDictionary
            )),
          this
        );
      },
      updateMorphTargets: function () {
        var e,
          t,
          n,
          i = this.geometry;
        if (i.isBufferGeometry) {
          var r = i.morphAttributes,
            a = Object.keys(r);
          if (a.length > 0) {
            var o = r[a[0]];
            if (void 0 !== o)
              for (
                this.morphTargetInfluences = [],
                  this.morphTargetDictionary = {},
                  e = 0,
                  t = o.length;
                e < t;
                e++
              )
                (n = o[e].name || String(e)),
                  this.morphTargetInfluences.push(0),
                  (this.morphTargetDictionary[n] = e);
          }
        } else {
          var s = i.morphTargets;
          void 0 !== s &&
            s.length > 0 &&
            console.error(
              "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
            );
        }
      },
      raycast: function (e, t) {
        var n,
          i = this.geometry,
          r = this.material,
          a = this.matrixWorld;
        if (
          void 0 !== r &&
          (null === i.boundingSphere && i.computeBoundingSphere(),
          yt.copy(i.boundingSphere),
          yt.applyMatrix4(a),
          !1 !== e.ray.intersectsSphere(yt) &&
            (_t.getInverse(a),
            xt.copy(e.ray).applyMatrix4(_t),
            null === i.boundingBox || !1 !== xt.intersectsBox(i.boundingBox)))
        )
          if (i.isBufferGeometry) {
            var s,
              l,
              c,
              u,
              h,
              d,
              f,
              p,
              m,
              g = i.index,
              v = i.attributes.position,
              _ = i.morphAttributes.position,
              x = i.morphTargetsRelative,
              y = i.attributes.uv,
              M = i.attributes.uv2,
              b = i.groups,
              w = i.drawRange;
            if (null !== g)
              if (Array.isArray(r))
                for (u = 0, d = b.length; u < d; u++)
                  for (
                    m = r[(p = b[u]).materialIndex],
                      h = Math.max(p.start, w.start),
                      f = Math.min(p.start + p.count, w.start + w.count);
                    h < f;
                    h += 3
                  )
                    (s = g.getX(h)),
                      (l = g.getX(h + 1)),
                      (c = g.getX(h + 2)),
                      (n = Ot(this, m, e, xt, v, _, x, y, M, s, l, c)) &&
                        ((n.faceIndex = Math.floor(h / 3)),
                        (n.face.materialIndex = p.materialIndex),
                        t.push(n));
              else
                for (
                  u = Math.max(0, w.start),
                    d = Math.min(g.count, w.start + w.count);
                  u < d;
                  u += 3
                )
                  (s = g.getX(u)),
                    (l = g.getX(u + 1)),
                    (c = g.getX(u + 2)),
                    (n = Ot(this, r, e, xt, v, _, x, y, M, s, l, c)) &&
                      ((n.faceIndex = Math.floor(u / 3)), t.push(n));
            else if (void 0 !== v)
              if (Array.isArray(r))
                for (u = 0, d = b.length; u < d; u++)
                  for (
                    m = r[(p = b[u]).materialIndex],
                      h = Math.max(p.start, w.start),
                      f = Math.min(p.start + p.count, w.start + w.count);
                    h < f;
                    h += 3
                  )
                    (n = Ot(
                      this,
                      m,
                      e,
                      xt,
                      v,
                      _,
                      x,
                      y,
                      M,
                      (s = h),
                      (l = h + 1),
                      (c = h + 2)
                    )) &&
                      ((n.faceIndex = Math.floor(h / 3)),
                      (n.face.materialIndex = p.materialIndex),
                      t.push(n));
              else
                for (
                  u = Math.max(0, w.start),
                    d = Math.min(v.count, w.start + w.count);
                  u < d;
                  u += 3
                )
                  (n = Ot(
                    this,
                    r,
                    e,
                    xt,
                    v,
                    _,
                    x,
                    y,
                    M,
                    (s = u),
                    (l = u + 1),
                    (c = u + 2)
                  )) && ((n.faceIndex = Math.floor(u / 3)), t.push(n));
          } else if (i.isGeometry) {
            var E,
              T,
              S,
              A,
              L = Array.isArray(r),
              R = i.vertices,
              P = i.faces,
              N = i.faceVertexUvs[0];
            N.length > 0 && (A = N);
            for (var D = 0, C = P.length; D < C; D++) {
              var I = P[D],
                U = L ? r[I.materialIndex] : r;
              if (
                void 0 !== U &&
                ((E = R[I.a]),
                (T = R[I.b]),
                (S = R[I.c]),
                (n = Ft(this, U, e, xt, E, T, S, Ct)))
              ) {
                if (A && A[D]) {
                  var F = A[D];
                  Pt.copy(F[0]),
                    Nt.copy(F[1]),
                    Dt.copy(F[2]),
                    (n.uv = gt.getUV(Ct, E, T, S, Pt, Nt, Dt, new o.a()));
                }
                (n.face = I), (n.faceIndex = D), t.push(n);
              }
            }
          }
      },
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this);
      },
    })),
      (Zt.prototype = Object.create(u.prototype)),
      (Zt.prototype.constructor = Zt),
      (Zt.prototype.isCubeTexture = !0),
      Object.defineProperty(Zt.prototype, "images", {
        get: function () {
          return this.image;
        },
        set: function (e) {
          this.image = e;
        },
      }),
      (Jt.prototype = Object.create(u.prototype)),
      (Jt.prototype.constructor = Jt),
      (Jt.prototype.isDataTexture2DArray = !0),
      (Qt.prototype = Object.create(u.prototype)),
      (Qt.prototype.constructor = Qt),
      (Qt.prototype.isDataTexture3D = !0);
    var Kt = new u(),
      $t = new Jt(),
      en = new Qt(),
      tn = new Zt(),
      nn = [],
      rn = [],
      an = new Float32Array(16),
      on = new Float32Array(9),
      sn = new Float32Array(4);
    function ln(e, t, n) {
      var i = e[0];
      if (i <= 0 || i > 0) return e;
      var r = t * n,
        a = nn[r];
      if ((void 0 === a && ((a = new Float32Array(r)), (nn[r] = a)), 0 !== t)) {
        i.toArray(a, 0);
        for (var o = 1, s = 0; o !== t; ++o) (s += n), e[o].toArray(a, s);
      }
      return a;
    }
    function cn(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function un(e, t) {
      for (var n = 0, i = t.length; n < i; n++) e[n] = t[n];
    }
    function hn(e, t) {
      var n = rn[t];
      void 0 === n && ((n = new Int32Array(t)), (rn[t] = n));
      for (var i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
      return n;
    }
    function dn(e, t) {
      var n = this.cache;
      n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
    }
    function fn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x)
        (n[0] === t.x && n[1] === t.y) ||
          (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
      else {
        if (cn(n, t)) return;
        e.uniform2fv(this.addr, t), un(n, t);
      }
    }
    function pn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x)
        (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
          (e.uniform3f(this.addr, t.x, t.y, t.z),
          (n[0] = t.x),
          (n[1] = t.y),
          (n[2] = t.z));
      else if (void 0 !== t.r)
        (n[0] === t.r && n[1] === t.g && n[2] === t.b) ||
          (e.uniform3f(this.addr, t.r, t.g, t.b),
          (n[0] = t.r),
          (n[1] = t.g),
          (n[2] = t.b));
      else {
        if (cn(n, t)) return;
        e.uniform3fv(this.addr, t), un(n, t);
      }
    }
    function mn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x)
        (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
          (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
          (n[0] = t.x),
          (n[1] = t.y),
          (n[2] = t.z),
          (n[3] = t.w));
      else {
        if (cn(n, t)) return;
        e.uniform4fv(this.addr, t), un(n, t);
      }
    }
    function gn(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (cn(n, t)) return;
        e.uniformMatrix2fv(this.addr, !1, t), un(n, t);
      } else {
        if (cn(n, i)) return;
        sn.set(i), e.uniformMatrix2fv(this.addr, !1, sn), un(n, i);
      }
    }
    function vn(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (cn(n, t)) return;
        e.uniformMatrix3fv(this.addr, !1, t), un(n, t);
      } else {
        if (cn(n, i)) return;
        on.set(i), e.uniformMatrix3fv(this.addr, !1, on), un(n, i);
      }
    }
    function _n(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (cn(n, t)) return;
        e.uniformMatrix4fv(this.addr, !1, t), un(n, t);
      } else {
        if (cn(n, i)) return;
        an.set(i), e.uniformMatrix4fv(this.addr, !1, an), un(n, i);
      }
    }
    function xn(e, t, n) {
      var i = this.cache,
        r = n.allocateTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
        n.safeSetTexture2D(t || Kt, r);
    }
    function yn(e, t, n) {
      var i = this.cache,
        r = n.allocateTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
        n.setTexture2DArray(t || $t, r);
    }
    function Mn(e, t, n) {
      var i = this.cache,
        r = n.allocateTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
        n.setTexture3D(t || en, r);
    }
    function bn(e, t, n) {
      var i = this.cache,
        r = n.allocateTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
        n.safeSetTextureCube(t || tn, r);
    }
    function wn(e, t) {
      var n = this.cache;
      n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
    }
    function En(e, t) {
      var n = this.cache;
      cn(n, t) || (e.uniform2iv(this.addr, t), un(n, t));
    }
    function Tn(e, t) {
      var n = this.cache;
      cn(n, t) || (e.uniform3iv(this.addr, t), un(n, t));
    }
    function Sn(e, t) {
      var n = this.cache;
      cn(n, t) || (e.uniform4iv(this.addr, t), un(n, t));
    }
    function An(e, t) {
      e.uniform1fv(this.addr, t);
    }
    function Ln(e, t) {
      e.uniform1iv(this.addr, t);
    }
    function Rn(e, t) {
      e.uniform2iv(this.addr, t);
    }
    function Pn(e, t) {
      e.uniform3iv(this.addr, t);
    }
    function Nn(e, t) {
      e.uniform4iv(this.addr, t);
    }
    function Dn(e, t) {
      var n = ln(t, this.size, 2);
      e.uniform2fv(this.addr, n);
    }
    function Cn(e, t) {
      var n = ln(t, this.size, 3);
      e.uniform3fv(this.addr, n);
    }
    function In(e, t) {
      var n = ln(t, this.size, 4);
      e.uniform4fv(this.addr, n);
    }
    function Un(e, t) {
      var n = ln(t, this.size, 4);
      e.uniformMatrix2fv(this.addr, !1, n);
    }
    function Fn(e, t) {
      var n = ln(t, this.size, 9);
      e.uniformMatrix3fv(this.addr, !1, n);
    }
    function On(e, t) {
      var n = ln(t, this.size, 16);
      e.uniformMatrix4fv(this.addr, !1, n);
    }
    function zn(e, t, n) {
      var i = t.length,
        r = hn(n, i);
      e.uniform1iv(this.addr, r);
      for (var a = 0; a !== i; ++a) n.safeSetTexture2D(t[a] || Kt, r[a]);
    }
    function Bn(e, t, n) {
      var i = t.length,
        r = hn(n, i);
      e.uniform1iv(this.addr, r);
      for (var a = 0; a !== i; ++a) n.safeSetTextureCube(t[a] || tn, r[a]);
    }
    function Gn(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.setValue = (function (e) {
          switch (e) {
            case 5126:
              return dn;
            case 35664:
              return fn;
            case 35665:
              return pn;
            case 35666:
              return mn;
            case 35674:
              return gn;
            case 35675:
              return vn;
            case 35676:
              return _n;
            case 35678:
            case 36198:
              return xn;
            case 35679:
              return Mn;
            case 35680:
              return bn;
            case 36289:
              return yn;
            case 5124:
            case 35670:
              return wn;
            case 35667:
            case 35671:
              return En;
            case 35668:
            case 35672:
              return Tn;
            case 35669:
            case 35673:
              return Sn;
          }
        })(t.type));
    }
    function Vn(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.size = t.size),
        (this.setValue = (function (e) {
          switch (e) {
            case 5126:
              return An;
            case 35664:
              return Dn;
            case 35665:
              return Cn;
            case 35666:
              return In;
            case 35674:
              return Un;
            case 35675:
              return Fn;
            case 35676:
              return On;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
              return zn;
            case 35680:
            case 36300:
            case 36308:
              return Bn;
            case 5124:
            case 35670:
              return Ln;
            case 35667:
            case 35671:
              return Rn;
            case 35668:
            case 35672:
              return Pn;
            case 35669:
            case 35673:
              return Nn;
          }
        })(t.type));
    }
    function Hn(e) {
      (this.id = e), (this.seq = []), (this.map = {});
    }
    (Vn.prototype.updateCache = function (e) {
      var t = this.cache;
      e instanceof Float32Array &&
        t.length !== e.length &&
        (this.cache = new Float32Array(e.length)),
        un(t, e);
    }),
      (Hn.prototype.setValue = function (e, t, n) {
        for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
          var o = i[r];
          o.setValue(e, t[o.id], n);
        }
      });
    var kn = /([\w\d_]+)(\])?(\[|\.)?/g;
    function Wn(e, t) {
      e.seq.push(t), (e.map[t.id] = t);
    }
    function jn(e, t, n) {
      var i = e.name,
        r = i.length;
      for (kn.lastIndex = 0; ; ) {
        var a = kn.exec(i),
          o = kn.lastIndex,
          s = a[1],
          l = "]" === a[2],
          c = a[3];
        if ((l && (s |= 0), void 0 === c || ("[" === c && o + 2 === r))) {
          Wn(n, void 0 === c ? new Gn(s, e, t) : new Vn(s, e, t));
          break;
        }
        var u = n.map[s];
        void 0 === u && Wn(n, (u = new Hn(s))), (n = u);
      }
    }
    function Xn(e, t) {
      (this.seq = []), (this.map = {});
      for (
        var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), i = 0;
        i < n;
        ++i
      ) {
        var r = e.getActiveUniform(t, i);
        jn(r, e.getUniformLocation(t, r.name), this);
      }
    }
    function qn(e, t, n) {
      var i = e.createShader(t);
      return e.shaderSource(i, n), e.compileShader(i), i;
    }
    (Xn.prototype.setValue = function (e, t, n, i) {
      var r = this.map[t];
      void 0 !== r && r.setValue(e, n, i);
    }),
      (Xn.prototype.setOptional = function (e, t, n) {
        var i = t[n];
        void 0 !== i && this.setValue(e, n, i);
      }),
      (Xn.upload = function (e, t, n, i) {
        for (var r = 0, a = t.length; r !== a; ++r) {
          var o = t[r],
            s = n[o.id];
          !1 !== s.needsUpdate && o.setValue(e, s.value, i);
        }
      }),
      (Xn.seqWithValue = function (e, t) {
        for (var n = [], i = 0, r = e.length; i !== r; ++i) {
          var a = e[i];
          a.id in t && n.push(a);
        }
        return n;
      });
    var Yn = 0;
    function Zn(e) {
      switch (e) {
        case 3e3:
          return ["Linear", "( value )"];
        case 3001:
          return ["sRGB", "( value )"];
        case 3002:
          return ["RGBE", "( value )"];
        case 3004:
          return ["RGBM", "( value, 7.0 )"];
        case 3005:
          return ["RGBM", "( value, 16.0 )"];
        case 3006:
          return ["RGBD", "( value, 256.0 )"];
        case 3007:
          return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003:
          return ["LogLuv", "( value )"];
        default:
          throw new Error("unsupported encoding: " + e);
      }
    }
    function Jn(e, t, n) {
      var i = e.getShaderParameter(t, e.COMPILE_STATUS),
        r = e.getShaderInfoLog(t).trim();
      return i && "" === r
        ? ""
        : "THREE.WebGLShader: gl.getShaderInfoLog() " +
            n +
            "\n" +
            r +
            (function (e) {
              for (var t = e.split("\n"), n = 0; n < t.length; n++)
                t[n] = n + 1 + ": " + t[n];
              return t.join("\n");
            })(e.getShaderSource(t));
    }
    function Qn(e, t) {
      var n = Zn(t);
      return (
        "vec4 " +
        e +
        "( vec4 value ) { return " +
        n[0] +
        "ToLinear" +
        n[1] +
        "; }"
      );
    }
    function Kn(e, t) {
      var n;
      switch (t) {
        case 1:
          n = "Linear";
          break;
        case 2:
          n = "Reinhard";
          break;
        case 3:
          n = "Uncharted2";
          break;
        case 4:
          n = "OptimizedCineon";
          break;
        case 5:
          n = "ACESFilmic";
          break;
        default:
          throw new Error("unsupported toneMapping: " + t);
      }
      return (
        "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
      );
    }
    function $n(e) {
      return "" !== e;
    }
    function ei(e, t) {
      return e
        .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
        .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
        .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
        .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
        .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
        .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
        .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
        .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
    }
    function ti(e, t) {
      return e
        .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
        .replace(
          /UNION_CLIPPING_PLANES/g,
          t.numClippingPlanes - t.numClipIntersection
        );
    }
    var ni = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function ii(e) {
      return e.replace(ni, ri);
    }
    function ri(e, t) {
      var n = j[t];
      if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
      return ii(n);
    }
    var ai =
      /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
    function oi(e) {
      return e.replace(ai, si);
    }
    function si(e, t, n, i) {
      for (var r = "", a = parseInt(t); a < parseInt(n); a++)
        r += i
          .replace(/\[ i \]/g, "[ " + a + " ]")
          .replace(/UNROLLED_LOOP_INDEX/g, a);
      return r;
    }
    function li(e) {
      var t =
        "precision " +
        e.precision +
        " float;\nprecision " +
        e.precision +
        " int;";
      return (
        "highp" === e.precision
          ? (t += "\n#define HIGH_PRECISION")
          : "mediump" === e.precision
          ? (t += "\n#define MEDIUM_PRECISION")
          : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
        t
      );
    }
    function ci(e, t, n, i, r, a) {
      var o,
        s,
        l,
        c,
        u,
        h = e.getContext(),
        d = i.defines,
        f = r.vertexShader,
        p = r.fragmentShader,
        m = (function (e) {
          var t = "SHADOWMAP_TYPE_BASIC";
          return (
            1 === e.shadowMapType
              ? (t = "SHADOWMAP_TYPE_PCF")
              : 2 === e.shadowMapType
              ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
              : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
            t
          );
        })(a),
        g = (function (e) {
          var t = "ENVMAP_TYPE_CUBE";
          if (e.envMap)
            switch (e.envMapMode) {
              case 301:
              case 302:
                t = "ENVMAP_TYPE_CUBE";
                break;
              case 306:
              case 307:
                t = "ENVMAP_TYPE_CUBE_UV";
                break;
              case 303:
              case 304:
                t = "ENVMAP_TYPE_EQUIREC";
                break;
              case 305:
                t = "ENVMAP_TYPE_SPHERE";
            }
          return t;
        })(a),
        v = (function (e) {
          var t = "ENVMAP_MODE_REFLECTION";
          if (e.envMap)
            switch (e.envMapMode) {
              case 302:
              case 304:
                t = "ENVMAP_MODE_REFRACTION";
            }
          return t;
        })(a),
        _ = (function (e) {
          var t = "ENVMAP_BLENDING_NONE";
          if (e.envMap)
            switch (e.combine) {
              case 0:
                t = "ENVMAP_BLENDING_MULTIPLY";
                break;
              case 1:
                t = "ENVMAP_BLENDING_MIX";
                break;
              case 2:
                t = "ENVMAP_BLENDING_ADD";
            }
          return t;
        })(a),
        x = e.gammaFactor > 0 ? e.gammaFactor : 1,
        y = a.isWebGL2
          ? ""
          : (function (e, t, n) {
              return [
                (e = e || {}).derivatives ||
                t.envMapCubeUV ||
                t.bumpMap ||
                t.tangentSpaceNormalMap ||
                t.clearcoatNormalMap ||
                t.flatShading ||
                "physical" === t.shaderID
                  ? "#extension GL_OES_standard_derivatives : enable"
                  : "",
                (e.fragDepth || t.logarithmicDepthBuffer) &&
                n.get("EXT_frag_depth")
                  ? "#extension GL_EXT_frag_depth : enable"
                  : "",
                e.drawBuffers && n.get("WEBGL_draw_buffers")
                  ? "#extension GL_EXT_draw_buffers : require"
                  : "",
                (e.shaderTextureLOD || t.envMap) &&
                n.get("EXT_shader_texture_lod")
                  ? "#extension GL_EXT_shader_texture_lod : enable"
                  : "",
              ]
                .filter($n)
                .join("\n");
            })(i.extensions, a, t),
        M = (function (e) {
          var t = [];
          for (var n in e) {
            var i = e[n];
            !1 !== i && t.push("#define " + n + " " + i);
          }
          return t.join("\n");
        })(d),
        b = h.createProgram(),
        w = a.numMultiviewViews;
      if (
        (i.isRawShaderMaterial
          ? ((o = [M].filter($n).join("\n")).length > 0 && (o += "\n"),
            (s = [y, M].filter($n).join("\n")).length > 0 && (s += "\n"))
          : ((o = [
              li(a),
              "#define SHADER_NAME " + r.name,
              M,
              a.instancing ? "#define USE_INSTANCING" : "",
              a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
              "#define GAMMA_FACTOR " + x,
              "#define MAX_BONES " + a.maxBones,
              a.useFog && a.fog ? "#define USE_FOG" : "",
              a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
              a.map ? "#define USE_MAP" : "",
              a.envMap ? "#define USE_ENVMAP" : "",
              a.envMap ? "#define " + v : "",
              a.lightMap ? "#define USE_LIGHTMAP" : "",
              a.aoMap ? "#define USE_AOMAP" : "",
              a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              a.bumpMap ? "#define USE_BUMPMAP" : "",
              a.normalMap ? "#define USE_NORMALMAP" : "",
              a.normalMap && a.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              a.normalMap && a.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              a.displacementMap && a.supportsVertexTextures
                ? "#define USE_DISPLACEMENTMAP"
                : "",
              a.specularMap ? "#define USE_SPECULARMAP" : "",
              a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              a.metalnessMap ? "#define USE_METALNESSMAP" : "",
              a.alphaMap ? "#define USE_ALPHAMAP" : "",
              a.vertexTangents ? "#define USE_TANGENT" : "",
              a.vertexColors ? "#define USE_COLOR" : "",
              a.vertexUvs ? "#define USE_UV" : "",
              a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              a.flatShading ? "#define FLAT_SHADED" : "",
              a.skinning ? "#define USE_SKINNING" : "",
              a.useVertexTexture ? "#define BONE_TEXTURE" : "",
              a.morphTargets ? "#define USE_MORPHTARGETS" : "",
              a.morphNormals && !1 === a.flatShading
                ? "#define USE_MORPHNORMALS"
                : "",
              a.doubleSided ? "#define DOUBLE_SIDED" : "",
              a.flipSided ? "#define FLIP_SIDED" : "",
              a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              a.shadowMapEnabled ? "#define " + m : "",
              a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
              a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              a.logarithmicDepthBuffer &&
              (a.isWebGL2 || t.get("EXT_frag_depth"))
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              "uniform mat4 modelMatrix;",
              "uniform mat4 modelViewMatrix;",
              "uniform mat4 projectionMatrix;",
              "uniform mat4 viewMatrix;",
              "uniform mat3 normalMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              "#ifdef USE_INSTANCING",
              " attribute mat4 instanceMatrix;",
              "#endif",
              "attribute vec3 position;",
              "attribute vec3 normal;",
              "attribute vec2 uv;",
              "#ifdef USE_TANGENT",
              "\tattribute vec4 tangent;",
              "#endif",
              "#ifdef USE_COLOR",
              "\tattribute vec3 color;",
              "#endif",
              "#ifdef USE_MORPHTARGETS",
              "\tattribute vec3 morphTarget0;",
              "\tattribute vec3 morphTarget1;",
              "\tattribute vec3 morphTarget2;",
              "\tattribute vec3 morphTarget3;",
              "\t#ifdef USE_MORPHNORMALS",
              "\t\tattribute vec3 morphNormal0;",
              "\t\tattribute vec3 morphNormal1;",
              "\t\tattribute vec3 morphNormal2;",
              "\t\tattribute vec3 morphNormal3;",
              "\t#else",
              "\t\tattribute vec3 morphTarget4;",
              "\t\tattribute vec3 morphTarget5;",
              "\t\tattribute vec3 morphTarget6;",
              "\t\tattribute vec3 morphTarget7;",
              "\t#endif",
              "#endif",
              "#ifdef USE_SKINNING",
              "\tattribute vec4 skinIndex;",
              "\tattribute vec4 skinWeight;",
              "#endif",
              "\n",
            ]
              .filter($n)
              .join("\n")),
            (s = [
              y,
              li(a),
              "#define SHADER_NAME " + r.name,
              M,
              a.alphaTest
                ? "#define ALPHATEST " +
                  a.alphaTest +
                  (a.alphaTest % 1 ? "" : ".0")
                : "",
              "#define GAMMA_FACTOR " + x,
              a.useFog && a.fog ? "#define USE_FOG" : "",
              a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "",
              a.map ? "#define USE_MAP" : "",
              a.matcap ? "#define USE_MATCAP" : "",
              a.envMap ? "#define USE_ENVMAP" : "",
              a.envMap ? "#define " + g : "",
              a.envMap ? "#define " + v : "",
              a.envMap ? "#define " + _ : "",
              a.lightMap ? "#define USE_LIGHTMAP" : "",
              a.aoMap ? "#define USE_AOMAP" : "",
              a.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              a.bumpMap ? "#define USE_BUMPMAP" : "",
              a.normalMap ? "#define USE_NORMALMAP" : "",
              a.normalMap && a.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              a.normalMap && a.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              a.specularMap ? "#define USE_SPECULARMAP" : "",
              a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              a.metalnessMap ? "#define USE_METALNESSMAP" : "",
              a.alphaMap ? "#define USE_ALPHAMAP" : "",
              a.sheen ? "#define USE_SHEEN" : "",
              a.vertexTangents ? "#define USE_TANGENT" : "",
              a.vertexColors ? "#define USE_COLOR" : "",
              a.vertexUvs ? "#define USE_UV" : "",
              a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              a.gradientMap ? "#define USE_GRADIENTMAP" : "",
              a.flatShading ? "#define FLAT_SHADED" : "",
              a.doubleSided ? "#define DOUBLE_SIDED" : "",
              a.flipSided ? "#define FLIP_SIDED" : "",
              a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              a.shadowMapEnabled ? "#define " + m : "",
              a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
              a.physicallyCorrectLights
                ? "#define PHYSICALLY_CORRECT_LIGHTS"
                : "",
              a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              a.logarithmicDepthBuffer &&
              (a.isWebGL2 || t.get("EXT_frag_depth"))
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              ((i.extensions && i.extensions.shaderTextureLOD) || a.envMap) &&
              (a.isWebGL2 || t.get("EXT_shader_texture_lod"))
                ? "#define TEXTURE_LOD_EXT"
                : "",
              "uniform mat4 viewMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              0 !== a.toneMapping ? "#define TONE_MAPPING" : "",
              0 !== a.toneMapping ? j.tonemapping_pars_fragment : "",
              0 !== a.toneMapping ? Kn("toneMapping", a.toneMapping) : "",
              a.dithering ? "#define DITHERING" : "",
              a.outputEncoding ||
              a.mapEncoding ||
              a.matcapEncoding ||
              a.envMapEncoding ||
              a.emissiveMapEncoding ||
              a.lightMapEncoding
                ? j.encodings_pars_fragment
                : "",
              a.mapEncoding ? Qn("mapTexelToLinear", a.mapEncoding) : "",
              a.matcapEncoding
                ? Qn("matcapTexelToLinear", a.matcapEncoding)
                : "",
              a.envMapEncoding
                ? Qn("envMapTexelToLinear", a.envMapEncoding)
                : "",
              a.emissiveMapEncoding
                ? Qn("emissiveMapTexelToLinear", a.emissiveMapEncoding)
                : "",
              a.lightMapEncoding
                ? Qn("lightMapTexelToLinear", a.lightMapEncoding)
                : "",
              a.outputEncoding
                ? ((l = "linearToOutputTexel"),
                  (c = a.outputEncoding),
                  (u = Zn(c)),
                  "vec4 " +
                    l +
                    "( vec4 value ) { return LinearTo" +
                    u[0] +
                    u[1] +
                    "; }")
                : "",
              a.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "",
              "\n",
            ]
              .filter($n)
              .join("\n"))),
        (f = ti((f = ei((f = ii(f)), a)), a)),
        (p = ti((p = ei((p = ii(p)), a)), a)),
        (f = oi(f)),
        (p = oi(p)),
        a.isWebGL2 && !i.isRawShaderMaterial)
      ) {
        var E = !1,
          T = /^\s*#version\s+300\s+es\s*\n/;
        i.isShaderMaterial &&
          null !== f.match(T) &&
          null !== p.match(T) &&
          ((E = !0), (f = f.replace(T, "")), (p = p.replace(T, ""))),
          (o =
            [
              "#version 300 es\n",
              "#define attribute in",
              "#define varying out",
              "#define texture2D texture",
            ].join("\n") +
            "\n" +
            o),
          (s =
            [
              "#version 300 es\n",
              "#define varying in",
              E ? "" : "out highp vec4 pc_fragColor;",
              E ? "" : "#define gl_FragColor pc_fragColor",
              "#define gl_FragDepthEXT gl_FragDepth",
              "#define texture2D texture",
              "#define textureCube texture",
              "#define texture2DProj textureProj",
              "#define texture2DLodEXT textureLod",
              "#define texture2DProjLodEXT textureProjLod",
              "#define textureCubeLodEXT textureLod",
              "#define texture2DGradEXT textureGrad",
              "#define texture2DProjGradEXT textureProjGrad",
              "#define textureCubeGradEXT textureGrad",
            ].join("\n") +
            "\n" +
            s),
          w > 0 &&
            ((o = (o = o.replace(
              "#version 300 es\n",
              [
                "#version 300 es\n",
                "#extension GL_OVR_multiview2 : require",
                "layout(num_views = " + w + ") in;",
                "#define VIEW_ID gl_ViewID_OVR",
              ].join("\n")
            )).replace(
              [
                "uniform mat4 modelViewMatrix;",
                "uniform mat4 projectionMatrix;",
                "uniform mat4 viewMatrix;",
                "uniform mat3 normalMatrix;",
              ].join("\n"),
              [
                "uniform mat4 modelViewMatrices[" + w + "];",
                "uniform mat4 projectionMatrices[" + w + "];",
                "uniform mat4 viewMatrices[" + w + "];",
                "uniform mat3 normalMatrices[" + w + "];",
                "#define modelViewMatrix modelViewMatrices[VIEW_ID]",
                "#define projectionMatrix projectionMatrices[VIEW_ID]",
                "#define viewMatrix viewMatrices[VIEW_ID]",
                "#define normalMatrix normalMatrices[VIEW_ID]",
              ].join("\n")
            )),
            (s = (s = s.replace(
              "#version 300 es\n",
              [
                "#version 300 es\n",
                "#extension GL_OVR_multiview2 : require",
                "#define VIEW_ID gl_ViewID_OVR",
              ].join("\n")
            )).replace(
              "uniform mat4 viewMatrix;",
              [
                "uniform mat4 viewMatrices[" + w + "];",
                "#define viewMatrix viewMatrices[VIEW_ID]",
              ].join("\n")
            )));
      }
      var S,
        A,
        L = o + f,
        R = s + p,
        P = qn(h, h.VERTEX_SHADER, L),
        N = qn(h, h.FRAGMENT_SHADER, R);
      if (
        (h.attachShader(b, P),
        h.attachShader(b, N),
        void 0 !== i.index0AttributeName
          ? h.bindAttribLocation(b, 0, i.index0AttributeName)
          : !0 === a.morphTargets && h.bindAttribLocation(b, 0, "position"),
        h.linkProgram(b),
        e.debug.checkShaderErrors)
      ) {
        var D = h.getProgramInfoLog(b).trim(),
          C = h.getShaderInfoLog(P).trim(),
          I = h.getShaderInfoLog(N).trim(),
          U = !0,
          F = !0;
        if (!1 === h.getProgramParameter(b, h.LINK_STATUS)) {
          U = !1;
          var O = Jn(h, P, "vertex"),
            z = Jn(h, N, "fragment");
          console.error(
            "THREE.WebGLProgram: shader error: ",
            h.getError(),
            "gl.VALIDATE_STATUS",
            h.getProgramParameter(b, h.VALIDATE_STATUS),
            "gl.getProgramInfoLog",
            D,
            O,
            z
          );
        } else
          "" !== D
            ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", D)
            : ("" !== C && "" !== I) || (F = !1);
        F &&
          (this.diagnostics = {
            runnable: U,
            material: i,
            programLog: D,
            vertexShader: { log: C, prefix: o },
            fragmentShader: { log: I, prefix: s },
          });
      }
      return (
        h.deleteShader(P),
        h.deleteShader(N),
        (this.getUniforms = function () {
          return void 0 === S && (S = new Xn(h, b)), S;
        }),
        (this.getAttributes = function () {
          return (
            void 0 === A &&
              (A = (function (e, t) {
                for (
                  var n = {},
                    i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES),
                    r = 0;
                  r < i;
                  r++
                ) {
                  var a = e.getActiveAttrib(t, r).name;
                  n[a] = e.getAttribLocation(t, a);
                }
                return n;
              })(h, b)),
            A
          );
        }),
        (this.destroy = function () {
          h.deleteProgram(b), (this.program = void 0);
        }),
        (this.name = r.name),
        (this.id = Yn++),
        (this.cacheKey = n),
        (this.usedTimes = 1),
        (this.program = b),
        (this.vertexShader = P),
        (this.fragmentShader = N),
        (this.numMultiviewViews = w),
        this
      );
    }
    function ui(e, t, n) {
      var i = [],
        r = n.isWebGL2,
        a = n.logarithmicDepthBuffer,
        o = n.floatVertexTextures,
        s = n.precision,
        l = n.maxVertexUniforms,
        c = n.vertexTextures,
        u = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite",
        },
        h = [
          "precision",
          "isWebGL2",
          "supportsVertexTextures",
          "outputEncoding",
          "instancing",
          "numMultiviewViews",
          "map",
          "mapEncoding",
          "matcap",
          "matcapEncoding",
          "envMap",
          "envMapMode",
          "envMapEncoding",
          "envMapCubeUV",
          "lightMap",
          "lightMapEncoding",
          "aoMap",
          "emissiveMap",
          "emissiveMapEncoding",
          "bumpMap",
          "normalMap",
          "objectSpaceNormalMap",
          "tangentSpaceNormalMap",
          "clearcoatNormalMap",
          "displacementMap",
          "specularMap",
          "roughnessMap",
          "metalnessMap",
          "gradientMap",
          "alphaMap",
          "combine",
          "vertexColors",
          "vertexTangents",
          "vertexUvs",
          "uvsVertexOnly",
          "fog",
          "useFog",
          "fogExp2",
          "flatShading",
          "sizeAttenuation",
          "logarithmicDepthBuffer",
          "skinning",
          "maxBones",
          "useVertexTexture",
          "morphTargets",
          "morphNormals",
          "maxMorphTargets",
          "maxMorphNormals",
          "premultipliedAlpha",
          "numDirLights",
          "numPointLights",
          "numSpotLights",
          "numHemiLights",
          "numRectAreaLights",
          "numDirLightShadows",
          "numPointLightShadows",
          "numSpotLightShadows",
          "shadowMapEnabled",
          "shadowMapType",
          "toneMapping",
          "physicallyCorrectLights",
          "alphaTest",
          "doubleSided",
          "flipSided",
          "numClippingPlanes",
          "numClipIntersection",
          "depthPacking",
          "dithering",
          "sheen",
        ];
      function d(e) {
        var t;
        return (
          e
            ? e.isTexture
              ? (t = e.encoding)
              : e.isWebGLRenderTarget &&
                (console.warn(
                  "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
                ),
                (t = e.texture.encoding))
            : (t = 3e3),
          t
        );
      }
      (this.getParameters = function (t, i, h, f, p, m, g) {
        var v = f.fog,
          _ = t.isMeshStandardMaterial ? f.environment : null,
          x = t.envMap || _,
          y = u[t.type],
          M = g.isSkinnedMesh
            ? (function (e) {
                var t = e.skeleton.bones;
                if (o) return 1024;
                var n = l,
                  i = Math.floor((n - 20) / 4),
                  r = Math.min(i, t.length);
                return r < t.length
                  ? (console.warn(
                      "THREE.WebGLRenderer: Skeleton has " +
                        t.length +
                        " bones. This GPU supports " +
                        r +
                        "."
                    ),
                    0)
                  : r;
              })(g)
            : 0;
        null !== t.precision &&
          (s = n.getMaxPrecision(t.precision)) !== t.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            t.precision,
            "not supported, using",
            s,
            "instead."
          );
        var b = e.getRenderTarget(),
          w = b && b.isWebGLMultiviewRenderTarget ? b.numViews : 0;
        return {
          isWebGL2: r,
          shaderID: y,
          precision: s,
          instancing: !0 === g.isInstancedMesh,
          supportsVertexTextures: c,
          numMultiviewViews: w,
          outputEncoding: null !== b ? d(b.texture) : e.outputEncoding,
          map: !!t.map,
          mapEncoding: d(t.map),
          matcap: !!t.matcap,
          matcapEncoding: d(t.matcap),
          envMap: !!x,
          envMapMode: x && x.mapping,
          envMapEncoding: d(x),
          envMapCubeUV: !!x && (306 === x.mapping || 307 === x.mapping),
          lightMap: !!t.lightMap,
          lightMapEncoding: d(t.lightMap),
          aoMap: !!t.aoMap,
          emissiveMap: !!t.emissiveMap,
          emissiveMapEncoding: d(t.emissiveMap),
          bumpMap: !!t.bumpMap,
          normalMap: !!t.normalMap,
          objectSpaceNormalMap: 1 === t.normalMapType,
          tangentSpaceNormalMap: 0 === t.normalMapType,
          clearcoatNormalMap: !!t.clearcoatNormalMap,
          displacementMap: !!t.displacementMap,
          roughnessMap: !!t.roughnessMap,
          metalnessMap: !!t.metalnessMap,
          specularMap: !!t.specularMap,
          alphaMap: !!t.alphaMap,
          gradientMap: !!t.gradientMap,
          sheen: !!t.sheen,
          combine: t.combine,
          vertexTangents: t.normalMap && t.vertexTangents,
          vertexColors: t.vertexColors,
          vertexUvs: !!(
            t.map ||
            t.bumpMap ||
            t.normalMap ||
            t.specularMap ||
            t.alphaMap ||
            t.emissiveMap ||
            t.roughnessMap ||
            t.metalnessMap ||
            t.clearcoatNormalMap ||
            t.displacementMap
          ),
          uvsVertexOnly: !(
            t.map ||
            t.bumpMap ||
            t.normalMap ||
            t.specularMap ||
            t.alphaMap ||
            t.emissiveMap ||
            t.roughnessMap ||
            t.metalnessMap ||
            t.clearcoatNormalMap ||
            !t.displacementMap
          ),
          fog: !!v,
          useFog: t.fog,
          fogExp2: v && v.isFogExp2,
          flatShading: t.flatShading,
          sizeAttenuation: t.sizeAttenuation,
          logarithmicDepthBuffer: a,
          skinning: t.skinning && M > 0,
          maxBones: M,
          useVertexTexture: o,
          morphTargets: t.morphTargets,
          morphNormals: t.morphNormals,
          maxMorphTargets: e.maxMorphTargets,
          maxMorphNormals: e.maxMorphNormals,
          numDirLights: i.directional.length,
          numPointLights: i.point.length,
          numSpotLights: i.spot.length,
          numRectAreaLights: i.rectArea.length,
          numHemiLights: i.hemi.length,
          numDirLightShadows: i.directionalShadowMap.length,
          numPointLightShadows: i.pointShadowMap.length,
          numSpotLightShadows: i.spotShadowMap.length,
          numClippingPlanes: p,
          numClipIntersection: m,
          dithering: t.dithering,
          shadowMapEnabled: e.shadowMap.enabled && h.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: t.toneMapped ? e.toneMapping : 0,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: t.premultipliedAlpha,
          alphaTest: t.alphaTest,
          doubleSided: 2 === t.side,
          flipSided: 1 === t.side,
          depthPacking: void 0 !== t.depthPacking && t.depthPacking,
        };
      }),
        (this.getProgramCacheKey = function (t, n) {
          var i = [];
          if (
            (n.shaderID
              ? i.push(n.shaderID)
              : (i.push(t.fragmentShader), i.push(t.vertexShader)),
            void 0 !== t.defines)
          )
            for (var r in t.defines) i.push(r), i.push(t.defines[r]);
          if (void 0 === t.isRawShaderMaterial) {
            for (var a = 0; a < h.length; a++) i.push(n[h[a]]);
            i.push(e.outputEncoding), i.push(e.gammaFactor);
          }
          return i.push(t.onBeforeCompile.toString()), i.join();
        }),
        (this.acquireProgram = function (n, r, a, o) {
          for (var s, l = 0, c = i.length; l < c; l++) {
            var u = i[l];
            if (u.cacheKey === o) {
              ++(s = u).usedTimes;
              break;
            }
          }
          return void 0 === s && ((s = new ci(e, t, o, n, r, a)), i.push(s)), s;
        }),
        (this.releaseProgram = function (e) {
          if (0 == --e.usedTimes) {
            var t = i.indexOf(e);
            (i[t] = i[i.length - 1]), i.pop(), e.destroy();
          }
        }),
        (this.programs = i);
    }
    function hi() {
      var e = new WeakMap();
      return {
        get: function (t) {
          var n = e.get(t);
          return void 0 === n && ((n = {}), e.set(t, n)), n;
        },
        remove: function (t) {
          e.delete(t);
        },
        update: function (t, n, i) {
          e.get(t)[n] = i;
        },
        dispose: function () {
          e = new WeakMap();
        },
      };
    }
    function di(e, t) {
      return e.groupOrder !== t.groupOrder
        ? e.groupOrder - t.groupOrder
        : e.renderOrder !== t.renderOrder
        ? e.renderOrder - t.renderOrder
        : e.program !== t.program
        ? e.program.id - t.program.id
        : e.material.id !== t.material.id
        ? e.material.id - t.material.id
        : e.z !== t.z
        ? e.z - t.z
        : e.id - t.id;
    }
    function fi(e, t) {
      return e.groupOrder !== t.groupOrder
        ? e.groupOrder - t.groupOrder
        : e.renderOrder !== t.renderOrder
        ? e.renderOrder - t.renderOrder
        : e.z !== t.z
        ? t.z - e.z
        : e.id - t.id;
    }
    function pi() {
      var e = [],
        t = 0,
        n = [],
        i = [],
        r = { id: -1 };
      function a(n, i, a, o, s, l) {
        var c = e[t];
        return (
          void 0 === c
            ? ((c = {
                id: n.id,
                object: n,
                geometry: i,
                material: a,
                program: a.program || r,
                groupOrder: o,
                renderOrder: n.renderOrder,
                z: s,
                group: l,
              }),
              (e[t] = c))
            : ((c.id = n.id),
              (c.object = n),
              (c.geometry = i),
              (c.material = a),
              (c.program = a.program || r),
              (c.groupOrder = o),
              (c.renderOrder = n.renderOrder),
              (c.z = s),
              (c.group = l)),
          t++,
          c
        );
      }
      return {
        opaque: n,
        transparent: i,
        init: function () {
          (t = 0), (n.length = 0), (i.length = 0);
        },
        push: function (e, t, r, o, s, l) {
          var c = a(e, t, r, o, s, l);
          (!0 === r.transparent ? i : n).push(c);
        },
        unshift: function (e, t, r, o, s, l) {
          var c = a(e, t, r, o, s, l);
          (!0 === r.transparent ? i : n).unshift(c);
        },
        sort: function (e, t) {
          n.length > 1 && n.sort(e || di), i.length > 1 && i.sort(t || fi);
        },
      };
    }
    function mi() {
      var e = new WeakMap();
      function t(n) {
        var i = n.target;
        i.removeEventListener("dispose", t), e.delete(i);
      }
      return {
        get: function (n, i) {
          var r,
            a = e.get(n);
          return (
            void 0 === a
              ? ((r = new pi()),
                e.set(n, new WeakMap()),
                e.get(n).set(i, r),
                n.addEventListener("dispose", t))
              : void 0 === (r = a.get(i)) && ((r = new pi()), a.set(i, r)),
            r
          );
        },
        dispose: function () {
          e = new WeakMap();
        },
      };
    }
    function gi() {
      var e = {};
      return {
        get: function (t) {
          if (void 0 !== e[t.id]) return e[t.id];
          var n;
          switch (t.type) {
            case "DirectionalLight":
              n = {
                direction: new d.a(),
                color: new Y.a(),
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new o.a(),
              };
              break;
            case "SpotLight":
              n = {
                position: new d.a(),
                direction: new d.a(),
                color: new Y.a(),
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new o.a(),
              };
              break;
            case "PointLight":
              n = {
                position: new d.a(),
                color: new Y.a(),
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new o.a(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
              break;
            case "HemisphereLight":
              n = {
                direction: new d.a(),
                skyColor: new Y.a(),
                groundColor: new Y.a(),
              };
              break;
            case "RectAreaLight":
              n = {
                color: new Y.a(),
                position: new d.a(),
                halfWidth: new d.a(),
                halfHeight: new d.a(),
              };
          }
          return (e[t.id] = n), n;
        },
      };
    }
    var vi = 0;
    function _i(e, t) {
      return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
    }
    function xi() {
      for (
        var e = new gi(),
          t = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
          },
          n = 0;
        n < 9;
        n++
      )
        t.probe.push(new d.a());
      var i = new d.a(),
        r = new W(),
        a = new W();
      return {
        setup: function (n, o, s) {
          for (var l = 0, c = 0, u = 0, h = 0; h < 9; h++)
            t.probe[h].set(0, 0, 0);
          var d = 0,
            f = 0,
            p = 0,
            m = 0,
            g = 0,
            v = 0,
            _ = 0,
            x = 0,
            y = s.matrixWorldInverse;
          n.sort(_i), (h = 0);
          for (var M = n.length; h < M; h++) {
            var b = n[h],
              w = b.color,
              E = b.intensity,
              T = b.distance,
              S = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
            if (b.isAmbientLight)
              (l += w.r * E), (c += w.g * E), (u += w.b * E);
            else if (b.isLightProbe)
              for (var A = 0; A < 9; A++)
                t.probe[A].addScaledVector(b.sh.coefficients[A], E);
            else if (b.isDirectionalLight) {
              if (
                ((R = e.get(b)).color.copy(b.color).multiplyScalar(b.intensity),
                R.direction.setFromMatrixPosition(b.matrixWorld),
                i.setFromMatrixPosition(b.target.matrixWorld),
                R.direction.sub(i),
                R.direction.transformDirection(y),
                (R.shadow = b.castShadow),
                b.castShadow)
              ) {
                var L = b.shadow;
                (R.shadowBias = L.bias),
                  (R.shadowRadius = L.radius),
                  (R.shadowMapSize = L.mapSize),
                  (t.directionalShadowMap[d] = S),
                  (t.directionalShadowMatrix[d] = b.shadow.matrix),
                  v++;
              }
              (t.directional[d] = R), d++;
            } else if (b.isSpotLight) {
              if (
                ((R = e.get(b)).position.setFromMatrixPosition(b.matrixWorld),
                R.position.applyMatrix4(y),
                R.color.copy(w).multiplyScalar(E),
                (R.distance = T),
                R.direction.setFromMatrixPosition(b.matrixWorld),
                i.setFromMatrixPosition(b.target.matrixWorld),
                R.direction.sub(i),
                R.direction.transformDirection(y),
                (R.coneCos = Math.cos(b.angle)),
                (R.penumbraCos = Math.cos(b.angle * (1 - b.penumbra))),
                (R.decay = b.decay),
                (R.shadow = b.castShadow),
                b.castShadow)
              ) {
                L = b.shadow;
                (R.shadowBias = L.bias),
                  (R.shadowRadius = L.radius),
                  (R.shadowMapSize = L.mapSize),
                  (t.spotShadowMap[p] = S),
                  (t.spotShadowMatrix[p] = b.shadow.matrix),
                  x++;
              }
              (t.spot[p] = R), p++;
            } else if (b.isRectAreaLight) {
              (R = e.get(b)).color.copy(w).multiplyScalar(E),
                R.position.setFromMatrixPosition(b.matrixWorld),
                R.position.applyMatrix4(y),
                a.identity(),
                r.copy(b.matrixWorld),
                r.premultiply(y),
                a.extractRotation(r),
                R.halfWidth.set(0.5 * b.width, 0, 0),
                R.halfHeight.set(0, 0.5 * b.height, 0),
                R.halfWidth.applyMatrix4(a),
                R.halfHeight.applyMatrix4(a),
                (t.rectArea[m] = R),
                m++;
            } else if (b.isPointLight) {
              if (
                ((R = e.get(b)).position.setFromMatrixPosition(b.matrixWorld),
                R.position.applyMatrix4(y),
                R.color.copy(b.color).multiplyScalar(b.intensity),
                (R.distance = b.distance),
                (R.decay = b.decay),
                (R.shadow = b.castShadow),
                b.castShadow)
              ) {
                L = b.shadow;
                (R.shadowBias = L.bias),
                  (R.shadowRadius = L.radius),
                  (R.shadowMapSize = L.mapSize),
                  (R.shadowCameraNear = L.camera.near),
                  (R.shadowCameraFar = L.camera.far),
                  (t.pointShadowMap[f] = S),
                  (t.pointShadowMatrix[f] = b.shadow.matrix),
                  _++;
              }
              (t.point[f] = R), f++;
            } else if (b.isHemisphereLight) {
              var R;
              (R = e.get(b)).direction.setFromMatrixPosition(b.matrixWorld),
                R.direction.transformDirection(y),
                R.direction.normalize(),
                R.skyColor.copy(b.color).multiplyScalar(E),
                R.groundColor.copy(b.groundColor).multiplyScalar(E),
                (t.hemi[g] = R),
                g++;
            }
          }
          (t.ambient[0] = l), (t.ambient[1] = c), (t.ambient[2] = u);
          var P = t.hash;
          (P.directionalLength === d &&
            P.pointLength === f &&
            P.spotLength === p &&
            P.rectAreaLength === m &&
            P.hemiLength === g &&
            P.numDirectionalShadows === v &&
            P.numPointShadows === _ &&
            P.numSpotShadows === x) ||
            ((t.directional.length = d),
            (t.spot.length = p),
            (t.rectArea.length = m),
            (t.point.length = f),
            (t.hemi.length = g),
            (t.directionalShadowMap.length = v),
            (t.pointShadowMap.length = _),
            (t.spotShadowMap.length = x),
            (t.directionalShadowMatrix.length = v),
            (t.pointShadowMatrix.length = _),
            (t.spotShadowMatrix.length = x),
            (P.directionalLength = d),
            (P.pointLength = f),
            (P.spotLength = p),
            (P.rectAreaLength = m),
            (P.hemiLength = g),
            (P.numDirectionalShadows = v),
            (P.numPointShadows = _),
            (P.numSpotShadows = x),
            (t.version = vi++));
        },
        state: t,
      };
    }
    function yi() {
      var e = new xi(),
        t = [],
        n = [];
      return {
        init: function () {
          (t.length = 0), (n.length = 0);
        },
        state: { lightsArray: t, shadowsArray: n, lights: e },
        setupLights: function (i) {
          e.setup(t, n, i);
        },
        pushLight: function (e) {
          t.push(e);
        },
        pushShadow: function (e) {
          n.push(e);
        },
      };
    }
    function Mi() {
      var e = new WeakMap();
      function t(n) {
        var i = n.target;
        i.removeEventListener("dispose", t), e.delete(i);
      }
      return {
        get: function (n, i) {
          var r;
          return (
            !1 === e.has(n)
              ? ((r = new yi()),
                e.set(n, new WeakMap()),
                e.get(n).set(i, r),
                n.addEventListener("dispose", t))
              : !1 === e.get(n).has(i)
              ? ((r = new yi()), e.get(n).set(i, r))
              : (r = e.get(n).get(i)),
            r
          );
        },
        dispose: function () {
          e = new WeakMap();
        },
      };
    }
    function bi(e, t, n) {
      (this.width = e),
        (this.height = t),
        (this.scissor = new J(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new J(0, 0, e, t)),
        (n = n || {}),
        (this.texture = new u(
          void 0,
          void 0,
          n.wrapS,
          n.wrapT,
          n.magFilter,
          n.minFilter,
          n.format,
          n.type,
          n.anisotropy,
          n.encoding
        )),
        (this.texture.image = {}),
        (this.texture.image.width = e),
        (this.texture.image.height = t),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
    }
    function wi(e) {
      Je.call(this),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        this.setValues(e);
    }
    function Ei(e) {
      Je.call(this),
        (this.type = "MeshDistanceMaterial"),
        (this.referencePosition = new d.a()),
        (this.nearDistance = 1),
        (this.farDistance = 1e3),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.fog = !1),
        this.setValues(e);
    }
    (bi.prototype = Object.assign(Object.create(r.prototype), {
      constructor: bi,
      isWebGLRenderTarget: !0,
      setSize: function (e, t) {
        (this.width === e && this.height === t) ||
          ((this.width = e),
          (this.height = t),
          (this.texture.image.width = e),
          (this.texture.image.height = t),
          this.dispose()),
          this.viewport.set(0, 0, e, t),
          this.scissor.set(0, 0, e, t);
      },
      clone: function () {
        return new this.constructor().copy(this);
      },
      copy: function (e) {
        return (
          (this.width = e.width),
          (this.height = e.height),
          this.viewport.copy(e.viewport),
          (this.texture = e.texture.clone()),
          (this.depthBuffer = e.depthBuffer),
          (this.stencilBuffer = e.stencilBuffer),
          (this.depthTexture = e.depthTexture),
          this
        );
      },
      dispose: function () {
        this.dispatchEvent({ type: "dispose" });
      },
    })),
      (wi.prototype = Object.create(Je.prototype)),
      (wi.prototype.constructor = wi),
      (wi.prototype.isMeshDepthMaterial = !0),
      (wi.prototype.copy = function (e) {
        return (
          Je.prototype.copy.call(this, e),
          (this.depthPacking = e.depthPacking),
          (this.skinning = e.skinning),
          (this.morphTargets = e.morphTargets),
          (this.map = e.map),
          (this.alphaMap = e.alphaMap),
          (this.displacementMap = e.displacementMap),
          (this.displacementScale = e.displacementScale),
          (this.displacementBias = e.displacementBias),
          (this.wireframe = e.wireframe),
          (this.wireframeLinewidth = e.wireframeLinewidth),
          this
        );
      }),
      (Ei.prototype = Object.create(Je.prototype)),
      (Ei.prototype.constructor = Ei),
      (Ei.prototype.isMeshDistanceMaterial = !0),
      (Ei.prototype.copy = function (e) {
        return (
          Je.prototype.copy.call(this, e),
          this.referencePosition.copy(e.referencePosition),
          (this.nearDistance = e.nearDistance),
          (this.farDistance = e.farDistance),
          (this.skinning = e.skinning),
          (this.morphTargets = e.morphTargets),
          (this.map = e.map),
          (this.alphaMap = e.alphaMap),
          (this.displacementMap = e.displacementMap),
          (this.displacementScale = e.displacementScale),
          (this.displacementBias = e.displacementBias),
          this
        );
      });
    function Ti(e, t, n) {
      var i = new F(),
        r = new o.a(),
        a = new o.a(),
        s = new J(),
        l = [],
        c = [],
        u = {},
        h = { 0: 1, 1: 0, 2: 2 },
        d = new Qe({
          defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 1 / 8 },
          uniforms: {
            shadow_pass: { value: null },
            resolution: { value: new o.a() },
            radius: { value: 4 },
          },
          vertexShader:
            "\n\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n\n",
          fragmentShader:
            "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\n\t// This seems totally useless but it's a crazy work around for a Adreno compiler bug\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\n    #ifdef HORIZONAL_PASS\n\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n    #else\n\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n\n    #endif\n\n  }\n\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n\n  float std_dev = sqrt( squared_mean - mean * mean );\n\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n",
        }),
        f = d.clone();
      f.defines.HORIZONAL_PASS = 1;
      var p = new je();
      p.setAttribute(
        "position",
        new Se(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
      );
      var m = new Ut(p, d),
        g = this;
      function v(n, i) {
        var r = t.update(m);
        (d.uniforms.shadow_pass.value = n.map.texture),
          (d.uniforms.resolution.value = n.mapSize),
          (d.uniforms.radius.value = n.radius),
          e.setRenderTarget(n.mapPass),
          e.clear(),
          e.renderBufferDirect(i, null, r, d, m, null),
          (f.uniforms.shadow_pass.value = n.mapPass.texture),
          (f.uniforms.resolution.value = n.mapSize),
          (f.uniforms.radius.value = n.radius),
          e.setRenderTarget(n.map),
          e.clear(),
          e.renderBufferDirect(i, null, r, f, m, null);
      }
      function _(e, t, n) {
        var i = (e << 0) | (t << 1) | (n << 2),
          r = l[i];
        return (
          void 0 === r &&
            ((r = new wi({ depthPacking: 3201, morphTargets: e, skinning: t })),
            (l[i] = r)),
          r
        );
      }
      function x(e, t, n) {
        var i = (e << 0) | (t << 1) | (n << 2),
          r = c[i];
        return (
          void 0 === r &&
            ((r = new Ei({ morphTargets: e, skinning: t })), (c[i] = r)),
          r
        );
      }
      function y(t, n, i, r, a, o) {
        var s = t.geometry,
          l = null,
          c = _,
          d = t.customDepthMaterial;
        if (
          (!0 === i.isPointLight && ((c = x), (d = t.customDistanceMaterial)),
          void 0 === d)
        ) {
          var f = !1;
          !0 === n.morphTargets &&
            (!0 === s.isBufferGeometry
              ? (f =
                  s.morphAttributes &&
                  s.morphAttributes.position &&
                  s.morphAttributes.position.length > 0)
              : !0 === s.isGeometry &&
                (f = s.morphTargets && s.morphTargets.length > 0));
          var p = !1;
          !0 === t.isSkinnedMesh &&
            (!0 === n.skinning
              ? (p = !0)
              : console.warn(
                  "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
                  t
                )),
            (l = c(f, p, !0 === t.isInstancedMesh));
        } else l = d;
        if (
          e.localClippingEnabled &&
          !0 === n.clipShadows &&
          0 !== n.clippingPlanes.length
        ) {
          var m = l.uuid,
            g = n.uuid,
            v = u[m];
          void 0 === v && ((v = {}), (u[m] = v));
          var y = v[g];
          void 0 === y && ((y = l.clone()), (v[g] = y)), (l = y);
        }
        return (
          (l.visible = n.visible),
          (l.wireframe = n.wireframe),
          (l.side =
            3 === o
              ? null !== n.shadowSide
                ? n.shadowSide
                : n.side
              : null !== n.shadowSide
              ? n.shadowSide
              : h[n.side]),
          (l.clipShadows = n.clipShadows),
          (l.clippingPlanes = n.clippingPlanes),
          (l.clipIntersection = n.clipIntersection),
          (l.wireframeLinewidth = n.wireframeLinewidth),
          (l.linewidth = n.linewidth),
          !0 === i.isPointLight &&
            !0 === l.isMeshDistanceMaterial &&
            (l.referencePosition.setFromMatrixPosition(i.matrixWorld),
            (l.nearDistance = r),
            (l.farDistance = a)),
          l
        );
      }
      function M(n, r, a, o, s) {
        if (!1 !== n.visible) {
          if (
            n.layers.test(r.layers) &&
            (n.isMesh || n.isLine || n.isPoints) &&
            (n.castShadow || (n.receiveShadow && 3 === s)) &&
            (!n.frustumCulled || i.intersectsObject(n))
          ) {
            n.modelViewMatrix.multiplyMatrices(
              a.matrixWorldInverse,
              n.matrixWorld
            );
            var l = t.update(n),
              c = n.material;
            if (Array.isArray(c))
              for (var u = l.groups, h = 0, d = u.length; h < d; h++) {
                var f = u[h],
                  p = c[f.materialIndex];
                if (p && p.visible) {
                  var m = y(n, p, o, a.near, a.far, s);
                  e.renderBufferDirect(a, null, l, m, n, f);
                }
              }
            else if (c.visible) {
              m = y(n, c, o, a.near, a.far, s);
              e.renderBufferDirect(a, null, l, m, n, null);
            }
          }
          for (var g = n.children, v = 0, _ = g.length; v < _; v++)
            M(g[v], r, a, o, s);
        }
      }
      (this.enabled = !1),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this.type = 1),
        (this.render = function (t, o, l) {
          if (
            !1 !== g.enabled &&
            (!1 !== g.autoUpdate || !1 !== g.needsUpdate) &&
            0 !== t.length
          ) {
            var c = e.getRenderTarget(),
              u = e.getActiveCubeFace(),
              h = e.getActiveMipmapLevel(),
              d = e.state;
            d.setBlending(0),
              d.buffers.color.setClear(1, 1, 1, 1),
              d.buffers.depth.setTest(!0),
              d.setScissorTest(!1);
            for (var f = 0, p = t.length; f < p; f++) {
              var m = t[f],
                _ = m.shadow;
              if (void 0 !== _) {
                r.copy(_.mapSize);
                var x = _.getFrameExtents();
                if (
                  (r.multiply(x),
                  a.copy(_.mapSize),
                  (r.x > n || r.y > n) &&
                    (console.warn(
                      "THREE.WebGLShadowMap:",
                      m,
                      "has shadow exceeding max texture size, reducing"
                    ),
                    r.x > n &&
                      ((a.x = Math.floor(n / x.x)),
                      (r.x = a.x * x.x),
                      (_.mapSize.x = a.x)),
                    r.y > n &&
                      ((a.y = Math.floor(n / x.y)),
                      (r.y = a.y * x.y),
                      (_.mapSize.y = a.y))),
                  null === _.map && !_.isPointLightShadow && 3 === this.type)
                ) {
                  var y = { minFilter: 1006, magFilter: 1006, format: 1023 };
                  (_.map = new bi(r.x, r.y, y)),
                    (_.map.texture.name = m.name + ".shadowMap"),
                    (_.mapPass = new bi(r.x, r.y, y)),
                    _.camera.updateProjectionMatrix();
                }
                if (null === _.map) {
                  y = { minFilter: 1003, magFilter: 1003, format: 1023 };
                  (_.map = new bi(r.x, r.y, y)),
                    (_.map.texture.name = m.name + ".shadowMap"),
                    _.camera.updateProjectionMatrix();
                }
                e.setRenderTarget(_.map), e.clear();
                for (var b = _.getViewportCount(), w = 0; w < b; w++) {
                  var E = _.getViewport(w);
                  s.set(a.x * E.x, a.y * E.y, a.x * E.z, a.y * E.w),
                    d.viewport(s),
                    _.updateMatrices(m, w),
                    (i = _.getFrustum()),
                    M(o, l, _.camera, m, this.type);
                }
                _.isPointLightShadow || 3 !== this.type || v(_, l);
              } else console.warn("THREE.WebGLShadowMap:", m, "has no shadow.");
            }
            (g.needsUpdate = !1), e.setRenderTarget(c, u, h);
          }
        });
    }
    function Si(e, t, n) {
      var i = n.isWebGL2;
      var r = new (function () {
          var t = !1,
            n = new J(),
            i = null,
            r = new J(0, 0, 0, 0);
          return {
            setMask: function (n) {
              i === n || t || (e.colorMask(n, n, n, n), (i = n));
            },
            setLocked: function (e) {
              t = e;
            },
            setClear: function (t, i, a, o, s) {
              !0 === s && ((t *= o), (i *= o), (a *= o)),
                n.set(t, i, a, o),
                !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n));
            },
            reset: function () {
              (t = !1), (i = null), r.set(-1, 0, 0, 0);
            },
          };
        })(),
        a = new (function () {
          var t = !1,
            n = null,
            i = null,
            r = null;
          return {
            setTest: function (t) {
              t ? z(e.DEPTH_TEST) : B(e.DEPTH_TEST);
            },
            setMask: function (i) {
              n === i || t || (e.depthMask(i), (n = i));
            },
            setFunc: function (t) {
              if (i !== t) {
                if (t)
                  switch (t) {
                    case 0:
                      e.depthFunc(e.NEVER);
                      break;
                    case 1:
                      e.depthFunc(e.ALWAYS);
                      break;
                    case 2:
                      e.depthFunc(e.LESS);
                      break;
                    case 3:
                      e.depthFunc(e.LEQUAL);
                      break;
                    case 4:
                      e.depthFunc(e.EQUAL);
                      break;
                    case 5:
                      e.depthFunc(e.GEQUAL);
                      break;
                    case 6:
                      e.depthFunc(e.GREATER);
                      break;
                    case 7:
                      e.depthFunc(e.NOTEQUAL);
                      break;
                    default:
                      e.depthFunc(e.LEQUAL);
                  }
                else e.depthFunc(e.LEQUAL);
                i = t;
              }
            },
            setLocked: function (e) {
              t = e;
            },
            setClear: function (t) {
              r !== t && (e.clearDepth(t), (r = t));
            },
            reset: function () {
              (t = !1), (n = null), (i = null), (r = null);
            },
          };
        })(),
        o = new (function () {
          var t = !1,
            n = null,
            i = null,
            r = null,
            a = null,
            o = null,
            s = null,
            l = null,
            c = null;
          return {
            setTest: function (n) {
              t || (n ? z(e.STENCIL_TEST) : B(e.STENCIL_TEST));
            },
            setMask: function (i) {
              n === i || t || (e.stencilMask(i), (n = i));
            },
            setFunc: function (t, n, o) {
              (i === t && r === n && a === o) ||
                (e.stencilFunc(t, n, o), (i = t), (r = n), (a = o));
            },
            setOp: function (t, n, i) {
              (o === t && s === n && l === i) ||
                (e.stencilOp(t, n, i), (o = t), (s = n), (l = i));
            },
            setLocked: function (e) {
              t = e;
            },
            setClear: function (t) {
              c !== t && (e.clearStencil(t), (c = t));
            },
            reset: function () {
              (t = !1),
                (n = null),
                (i = null),
                (r = null),
                (a = null),
                (o = null),
                (s = null),
                (l = null),
                (c = null);
            },
          };
        })(),
        s = e.getParameter(e.MAX_VERTEX_ATTRIBS),
        l = new Uint8Array(s),
        c = new Uint8Array(s),
        u = new Uint8Array(s),
        h = {},
        d = null,
        f = null,
        p = null,
        m = null,
        g = null,
        v = null,
        _ = null,
        x = null,
        y = null,
        M = !1,
        b = null,
        w = null,
        E = null,
        T = null,
        S = null,
        A = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        L = !1,
        R = 0,
        P = e.getParameter(e.VERSION);
      -1 !== P.indexOf("WebGL")
        ? ((R = parseFloat(/^WebGL\ ([0-9])/.exec(P)[1])), (L = R >= 1))
        : -1 !== P.indexOf("OpenGL ES") &&
          ((R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(P)[1])), (L = R >= 2));
      var N = null,
        D = {},
        C = new J(),
        I = new J();
      function U(t, n, i) {
        var r = new Uint8Array(4),
          a = e.createTexture();
        e.bindTexture(t, a),
          e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
          e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
        for (var o = 0; o < i; o++)
          e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
        return a;
      }
      var F = {};
      function O(n, r) {
        ((l[n] = 1),
        0 === c[n] && (e.enableVertexAttribArray(n), (c[n] = 1)),
        u[n] !== r) &&
          ((i ? e : t.get("ANGLE_instanced_arrays"))[
            i ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
          ](n, r),
          (u[n] = r));
      }
      function z(t) {
        !0 !== h[t] && (e.enable(t), (h[t] = !0));
      }
      function B(t) {
        !1 !== h[t] && (e.disable(t), (h[t] = !1));
      }
      (F[e.TEXTURE_2D] = U(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
        (F[e.TEXTURE_CUBE_MAP] = U(
          e.TEXTURE_CUBE_MAP,
          e.TEXTURE_CUBE_MAP_POSITIVE_X,
          6
        )),
        r.setClear(0, 0, 0, 1),
        a.setClear(1),
        o.setClear(0),
        z(e.DEPTH_TEST),
        a.setFunc(3),
        W(!1),
        j(1),
        z(e.CULL_FACE),
        k(0);
      var G = {
        100: e.FUNC_ADD,
        101: e.FUNC_SUBTRACT,
        102: e.FUNC_REVERSE_SUBTRACT,
      };
      if (i) (G[103] = e.MIN), (G[104] = e.MAX);
      else {
        var V = t.get("EXT_blend_minmax");
        null !== V && ((G[103] = V.MIN_EXT), (G[104] = V.MAX_EXT));
      }
      var H = {
        200: e.ZERO,
        201: e.ONE,
        202: e.SRC_COLOR,
        204: e.SRC_ALPHA,
        210: e.SRC_ALPHA_SATURATE,
        208: e.DST_COLOR,
        206: e.DST_ALPHA,
        203: e.ONE_MINUS_SRC_COLOR,
        205: e.ONE_MINUS_SRC_ALPHA,
        209: e.ONE_MINUS_DST_COLOR,
        207: e.ONE_MINUS_DST_ALPHA,
      };
      function k(t, n, i, r, a, o, s, l) {
        if (0 !== t) {
          if ((f || (z(e.BLEND), (f = !0)), 5 === t))
            (a = a || n),
              (o = o || i),
              (s = s || r),
              (n === m && a === _) ||
                (e.blendEquationSeparate(G[n], G[a]), (m = n), (_ = a)),
              (i === g && r === v && o === x && s === y) ||
                (e.blendFuncSeparate(H[i], H[r], H[o], H[s]),
                (g = i),
                (v = r),
                (x = o),
                (y = s)),
              (p = t),
              (M = null);
          else if (t !== p || l !== M) {
            if (
              ((100 === m && 100 === _) ||
                (e.blendEquation(e.FUNC_ADD), (m = 100), (_ = 100)),
              l)
            )
              switch (t) {
                case 1:
                  e.blendFuncSeparate(
                    e.ONE,
                    e.ONE_MINUS_SRC_ALPHA,
                    e.ONE,
                    e.ONE_MINUS_SRC_ALPHA
                  );
                  break;
                case 2:
                  e.blendFunc(e.ONE, e.ONE);
                  break;
                case 3:
                  e.blendFuncSeparate(
                    e.ZERO,
                    e.ZERO,
                    e.ONE_MINUS_SRC_COLOR,
                    e.ONE_MINUS_SRC_ALPHA
                  );
                  break;
                case 4:
                  e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", t);
              }
            else
              switch (t) {
                case 1:
                  e.blendFuncSeparate(
                    e.SRC_ALPHA,
                    e.ONE_MINUS_SRC_ALPHA,
                    e.ONE,
                    e.ONE_MINUS_SRC_ALPHA
                  );
                  break;
                case 2:
                  e.blendFunc(e.SRC_ALPHA, e.ONE);
                  break;
                case 3:
                  e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR);
                  break;
                case 4:
                  e.blendFunc(e.ZERO, e.SRC_COLOR);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", t);
              }
            (g = null), (v = null), (x = null), (y = null), (p = t), (M = l);
          }
        } else f && (B(e.BLEND), (f = !1));
      }
      function W(t) {
        b !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), (b = t));
      }
      function j(t) {
        0 !== t
          ? (z(e.CULL_FACE),
            t !== w &&
              (1 === t
                ? e.cullFace(e.BACK)
                : 2 === t
                ? e.cullFace(e.FRONT)
                : e.cullFace(e.FRONT_AND_BACK)))
          : B(e.CULL_FACE),
          (w = t);
      }
      function X(t, n, i) {
        t
          ? (z(e.POLYGON_OFFSET_FILL),
            (T === n && S === i) || (e.polygonOffset(n, i), (T = n), (S = i)))
          : B(e.POLYGON_OFFSET_FILL);
      }
      function q(t) {
        void 0 === t && (t = e.TEXTURE0 + A - 1),
          N !== t && (e.activeTexture(t), (N = t));
      }
      return {
        buffers: { color: r, depth: a, stencil: o },
        initAttributes: function () {
          for (var e = 0, t = l.length; e < t; e++) l[e] = 0;
        },
        enableAttribute: function (e) {
          O(e, 0);
        },
        enableAttributeAndDivisor: O,
        disableUnusedAttributes: function () {
          for (var t = 0, n = c.length; t !== n; ++t)
            c[t] !== l[t] && (e.disableVertexAttribArray(t), (c[t] = 0));
        },
        enable: z,
        disable: B,
        useProgram: function (t) {
          return d !== t && (e.useProgram(t), (d = t), !0);
        },
        setBlending: k,
        setMaterial: function (t, n) {
          2 === t.side ? B(e.CULL_FACE) : z(e.CULL_FACE);
          var i = 1 === t.side;
          n && (i = !i),
            W(i),
            1 === t.blending && !1 === t.transparent
              ? k(0)
              : k(
                  t.blending,
                  t.blendEquation,
                  t.blendSrc,
                  t.blendDst,
                  t.blendEquationAlpha,
                  t.blendSrcAlpha,
                  t.blendDstAlpha,
                  t.premultipliedAlpha
                ),
            a.setFunc(t.depthFunc),
            a.setTest(t.depthTest),
            a.setMask(t.depthWrite),
            r.setMask(t.colorWrite);
          var s = t.stencilWrite;
          o.setTest(s),
            s &&
              (o.setMask(t.stencilWriteMask),
              o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
              o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
            X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
        },
        setFlipSided: W,
        setCullFace: j,
        setLineWidth: function (t) {
          t !== E && (L && e.lineWidth(t), (E = t));
        },
        setPolygonOffset: X,
        setScissorTest: function (t) {
          t ? z(e.SCISSOR_TEST) : B(e.SCISSOR_TEST);
        },
        activeTexture: q,
        bindTexture: function (t, n) {
          null === N && q();
          var i = D[N];
          void 0 === i && ((i = { type: void 0, texture: void 0 }), (D[N] = i)),
            (i.type === t && i.texture === n) ||
              (e.bindTexture(t, n || F[t]), (i.type = t), (i.texture = n));
        },
        unbindTexture: function () {
          var t = D[N];
          void 0 !== t &&
            void 0 !== t.type &&
            (e.bindTexture(t.type, null),
            (t.type = void 0),
            (t.texture = void 0));
        },
        compressedTexImage2D: function () {
          try {
            e.compressedTexImage2D.apply(e, arguments);
          } catch (e) {
            console.error("THREE.WebGLState:", e);
          }
        },
        texImage2D: function () {
          try {
            e.texImage2D.apply(e, arguments);
          } catch (e) {
            console.error("THREE.WebGLState:", e);
          }
        },
        texImage3D: function () {
          try {
            e.texImage3D.apply(e, arguments);
          } catch (e) {
            console.error("THREE.WebGLState:", e);
          }
        },
        scissor: function (t) {
          !1 === C.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), C.copy(t));
        },
        viewport: function (t) {
          !1 === I.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), I.copy(t));
        },
        reset: function () {
          for (var t = 0; t < c.length; t++)
            1 === c[t] && (e.disableVertexAttribArray(t), (c[t] = 0));
          (h = {}),
            (N = null),
            (D = {}),
            (d = null),
            (p = null),
            (b = null),
            (w = null),
            r.reset(),
            a.reset(),
            o.reset();
        },
      };
    }
    function Ai(e, t, n, r, a, o, s) {
      var l,
        c = a.isWebGL2,
        u = a.maxTextures,
        h = a.maxCubemapSize,
        d = a.maxTextureSize,
        f = a.maxSamples,
        p = new WeakMap(),
        m = !1;
      try {
        m =
          "undefined" != typeof OffscreenCanvas &&
          null !== new OffscreenCanvas(1, 1).getContext("2d");
      } catch (e) {}
      function g(e, t) {
        return m
          ? new OffscreenCanvas(e, t)
          : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      }
      function v(e, t, n, r) {
        var a = 1;
        if (
          ((e.width > r || e.height > r) &&
            (a = r / Math.max(e.width, e.height)),
          a < 1 || !0 === t)
        ) {
          if (
            ("undefined" != typeof HTMLImageElement &&
              e instanceof HTMLImageElement) ||
            ("undefined" != typeof HTMLCanvasElement &&
              e instanceof HTMLCanvasElement) ||
            ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
          ) {
            var o = t ? i.a.floorPowerOfTwo : Math.floor,
              s = o(a * e.width),
              c = o(a * e.height);
            void 0 === l && (l = g(s, c));
            var u = n ? g(s, c) : l;
            return (
              (u.width = s),
              (u.height = c),
              u.getContext("2d").drawImage(e, 0, 0, s, c),
              console.warn(
                "THREE.WebGLRenderer: Texture has been resized from (" +
                  e.width +
                  "x" +
                  e.height +
                  ") to (" +
                  s +
                  "x" +
                  c +
                  ")."
              ),
              u
            );
          }
          return (
            "data" in e &&
              console.warn(
                "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                  e.width +
                  "x" +
                  e.height +
                  ")."
              ),
            e
          );
        }
        return e;
      }
      function _(e) {
        return i.a.isPowerOfTwo(e.width) && i.a.isPowerOfTwo(e.height);
      }
      function x(e, t) {
        return (
          e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
        );
      }
      function y(t, n, i, a) {
        e.generateMipmap(t),
          (r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E);
      }
      function M(n, i, r) {
        if (!1 === c) return i;
        if (null !== n) {
          if (void 0 !== e[n]) return e[n];
          console.warn(
            "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
              n +
              "'"
          );
        }
        var a = i;
        return (
          i === e.RED &&
            (r === e.FLOAT && (a = e.R32F),
            r === e.HALF_FLOAT && (a = e.R16F),
            r === e.UNSIGNED_BYTE && (a = e.R8)),
          i === e.RGB &&
            (r === e.FLOAT && (a = e.RGB32F),
            r === e.HALF_FLOAT && (a = e.RGB16F),
            r === e.UNSIGNED_BYTE && (a = e.RGB8)),
          i === e.RGBA &&
            (r === e.FLOAT && (a = e.RGBA32F),
            r === e.HALF_FLOAT && (a = e.RGBA16F),
            r === e.UNSIGNED_BYTE && (a = e.RGBA8)),
          a === e.R16F || a === e.R32F || a === e.RGBA16F || a === e.RGBA32F
            ? t.get("EXT_color_buffer_float")
            : (a !== e.RGB16F && a !== e.RGB32F) ||
              console.warn(
                "THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."
              ),
          a
        );
      }
      function b(t) {
        return 1003 === t || 1004 === t || 1005 === t ? e.NEAREST : e.LINEAR;
      }
      function w(t) {
        var n = t.target;
        n.removeEventListener("dispose", w),
          (function (t) {
            var n = r.get(t);
            if (void 0 === n.__webglInit) return;
            e.deleteTexture(n.__webglTexture), r.remove(t);
          })(n),
          n.isVideoTexture && p.delete(n),
          s.memory.textures--;
      }
      function E(t) {
        var n = t.target;
        n.removeEventListener("dispose", E),
          (function (t) {
            var n = r.get(t),
              i = r.get(t.texture);
            if (!t) return;
            void 0 !== i.__webglTexture && e.deleteTexture(i.__webglTexture);
            t.depthTexture && t.depthTexture.dispose();
            if (t.isWebGLRenderTargetCube)
              for (var a = 0; a < 6; a++)
                e.deleteFramebuffer(n.__webglFramebuffer[a]),
                  n.__webglDepthbuffer &&
                    e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
            else
              e.deleteFramebuffer(n.__webglFramebuffer),
                n.__webglDepthbuffer &&
                  e.deleteRenderbuffer(n.__webglDepthbuffer);
            if (t.isWebGLMultiviewRenderTarget) {
              e.deleteTexture(n.__webglColorTexture),
                e.deleteTexture(n.__webglDepthStencilTexture),
                (s.memory.textures -= 2);
              a = 0;
              for (var o = n.__webglViewFramebuffers.length; a < o; a++)
                e.deleteFramebuffer(n.__webglViewFramebuffers[a]);
            }
            r.remove(t.texture), r.remove(t);
          })(n),
          s.memory.textures--;
      }
      var T = 0;
      function S(t, i) {
        var a = r.get(t);
        if (
          (t.isVideoTexture &&
            (function (e) {
              var t = s.render.frame;
              p.get(e) !== t && (p.set(e, t), e.update());
            })(t),
          t.version > 0 && a.__version !== t.version)
        ) {
          var o = t.image;
          if (void 0 === o)
            console.warn(
              "THREE.WebGLRenderer: Texture marked for update but image is undefined"
            );
          else {
            if (!1 !== o.complete) return void C(a, t, i);
            console.warn(
              "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
            );
          }
        }
        n.activeTexture(e.TEXTURE0 + i),
          n.bindTexture(e.TEXTURE_2D, a.__webglTexture);
      }
      function A(t, i) {
        if (6 === t.image.length) {
          var a = r.get(t);
          if (t.version > 0 && a.__version !== t.version) {
            D(a, t),
              n.activeTexture(e.TEXTURE0 + i),
              n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
            for (
              var s = t && t.isCompressedTexture,
                l = t.image[0] && t.image[0].isDataTexture,
                u = [],
                d = 0;
              d < 6;
              d++
            )
              u[d] =
                s || l
                  ? l
                    ? t.image[d].image
                    : t.image[d]
                  : v(t.image[d], !1, !0, h);
            var f,
              p = u[0],
              m = _(p) || c,
              g = o.convert(t.format),
              b = o.convert(t.type),
              w = M(t.internalFormat, g, b);
            if ((N(e.TEXTURE_CUBE_MAP, t, m), s)) {
              for (d = 0; d < 6; d++) {
                f = u[d].mipmaps;
                for (var E = 0; E < f.length; E++) {
                  var T = f[E];
                  1023 !== t.format && 1022 !== t.format
                    ? null !== g
                      ? n.compressedTexImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                          E,
                          w,
                          T.width,
                          T.height,
                          0,
                          T.data
                        )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : n.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                        E,
                        w,
                        T.width,
                        T.height,
                        0,
                        g,
                        b,
                        T.data
                      );
                }
              }
              a.__maxMipLevel = f.length - 1;
            } else {
              f = t.mipmaps;
              for (d = 0; d < 6; d++)
                if (l) {
                  n.texImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                    0,
                    w,
                    u[d].width,
                    u[d].height,
                    0,
                    g,
                    b,
                    u[d].data
                  );
                  for (E = 0; E < f.length; E++) {
                    var S = (T = f[E]).image[d].image;
                    n.texImage2D(
                      e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                      E + 1,
                      w,
                      S.width,
                      S.height,
                      0,
                      g,
                      b,
                      S.data
                    );
                  }
                } else {
                  n.texImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                    0,
                    w,
                    g,
                    b,
                    u[d]
                  );
                  for (E = 0; E < f.length; E++) {
                    T = f[E];
                    n.texImage2D(
                      e.TEXTURE_CUBE_MAP_POSITIVE_X + d,
                      E + 1,
                      w,
                      g,
                      b,
                      T.image[d]
                    );
                  }
                }
              a.__maxMipLevel = f.length;
            }
            x(t, m) && y(e.TEXTURE_CUBE_MAP, t, p.width, p.height),
              (a.__version = t.version),
              t.onUpdate && t.onUpdate(t);
          } else
            n.activeTexture(e.TEXTURE0 + i),
              n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture);
        }
      }
      function L(t, i) {
        n.activeTexture(e.TEXTURE0 + i),
          n.bindTexture(e.TEXTURE_CUBE_MAP, r.get(t).__webglTexture);
      }
      var R = { 1e3: e.REPEAT, 1001: e.CLAMP_TO_EDGE, 1002: e.MIRRORED_REPEAT },
        P = {
          1003: e.NEAREST,
          1004: e.NEAREST_MIPMAP_NEAREST,
          1005: e.NEAREST_MIPMAP_LINEAR,
          1006: e.LINEAR,
          1007: e.LINEAR_MIPMAP_NEAREST,
          1008: e.LINEAR_MIPMAP_LINEAR,
        };
      function N(n, i, o) {
        o
          ? (e.texParameteri(n, e.TEXTURE_WRAP_S, R[i.wrapS]),
            e.texParameteri(n, e.TEXTURE_WRAP_T, R[i.wrapT]),
            (n !== e.TEXTURE_3D && n !== e.TEXTURE_2D_ARRAY) ||
              e.texParameteri(n, e.TEXTURE_WRAP_R, R[i.wrapR]),
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, P[i.magFilter]),
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, P[i.minFilter]))
          : (e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            (n !== e.TEXTURE_3D && n !== e.TEXTURE_2D_ARRAY) ||
              e.texParameteri(n, e.TEXTURE_WRAP_R, e.CLAMP_TO_EDGE),
            (1001 === i.wrapS && 1001 === i.wrapT) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, b(i.magFilter)),
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, b(i.minFilter)),
            1003 !== i.minFilter &&
              1006 !== i.minFilter &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              ));
        var s = t.get("EXT_texture_filter_anisotropic");
        if (s) {
          if (1015 === i.type && null === t.get("OES_texture_float_linear"))
            return;
          if (
            1016 === i.type &&
            null === (c || t.get("OES_texture_half_float_linear"))
          )
            return;
          (i.anisotropy > 1 || r.get(i).__currentAnisotropy) &&
            (e.texParameterf(
              n,
              s.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(i.anisotropy, a.getMaxAnisotropy())
            ),
            (r.get(i).__currentAnisotropy = i.anisotropy));
        }
      }
      function D(t, n) {
        void 0 === t.__webglInit &&
          ((t.__webglInit = !0),
          n.addEventListener("dispose", w),
          (t.__webglTexture = e.createTexture()),
          s.memory.textures++);
      }
      function C(t, i, r) {
        var a = e.TEXTURE_2D;
        i.isDataTexture2DArray && (a = e.TEXTURE_2D_ARRAY),
          i.isDataTexture3D && (a = e.TEXTURE_3D),
          D(t, i),
          n.activeTexture(e.TEXTURE0 + r),
          n.bindTexture(a, t.__webglTexture),
          e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY),
          e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
          e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment);
        var s =
            (function (e) {
              return (
                !c &&
                (1001 !== e.wrapS ||
                  1001 !== e.wrapT ||
                  (1003 !== e.minFilter && 1006 !== e.minFilter))
              );
            })(i) && !1 === _(i.image),
          l = v(i.image, s, !1, d),
          u = _(l) || c,
          h = o.convert(i.format),
          f = o.convert(i.type),
          p = M(i.internalFormat, h, f);
        N(a, i, u);
        var m,
          g = i.mipmaps;
        if (i.isDepthTexture) {
          if (((p = e.DEPTH_COMPONENT), 1015 === i.type)) {
            if (!1 === c)
              throw new Error("Float Depth Texture only supported in WebGL2.0");
            p = e.DEPTH_COMPONENT32F;
          } else c && (p = e.DEPTH_COMPONENT16);
          1026 === i.format &&
            p === e.DEPTH_COMPONENT &&
            1012 !== i.type &&
            1014 !== i.type &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (i.type = 1012),
            (f = o.convert(i.type))),
            1027 === i.format &&
              ((p = e.DEPTH_STENCIL),
              1020 !== i.type &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (i.type = 1020),
                (f = o.convert(i.type)))),
            n.texImage2D(e.TEXTURE_2D, 0, p, l.width, l.height, 0, h, f, null);
        } else if (i.isDataTexture)
          if (g.length > 0 && u) {
            for (var b = 0, w = g.length; b < w; b++)
              (m = g[b]),
                n.texImage2D(
                  e.TEXTURE_2D,
                  b,
                  p,
                  m.width,
                  m.height,
                  0,
                  h,
                  f,
                  m.data
                );
            (i.generateMipmaps = !1), (t.__maxMipLevel = g.length - 1);
          } else
            n.texImage2D(
              e.TEXTURE_2D,
              0,
              p,
              l.width,
              l.height,
              0,
              h,
              f,
              l.data
            ),
              (t.__maxMipLevel = 0);
        else if (i.isCompressedTexture) {
          for (b = 0, w = g.length; b < w; b++)
            (m = g[b]),
              1023 !== i.format && 1022 !== i.format
                ? null !== h
                  ? n.compressedTexImage2D(
                      e.TEXTURE_2D,
                      b,
                      p,
                      m.width,
                      m.height,
                      0,
                      m.data
                    )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    b,
                    p,
                    m.width,
                    m.height,
                    0,
                    h,
                    f,
                    m.data
                  );
          t.__maxMipLevel = g.length - 1;
        } else if (i.isDataTexture2DArray)
          n.texImage3D(
            e.TEXTURE_2D_ARRAY,
            0,
            p,
            l.width,
            l.height,
            l.depth,
            0,
            h,
            f,
            l.data
          ),
            (t.__maxMipLevel = 0);
        else if (i.isDataTexture3D)
          n.texImage3D(
            e.TEXTURE_3D,
            0,
            p,
            l.width,
            l.height,
            l.depth,
            0,
            h,
            f,
            l.data
          ),
            (t.__maxMipLevel = 0);
        else if (g.length > 0 && u) {
          for (b = 0, w = g.length; b < w; b++)
            (m = g[b]), n.texImage2D(e.TEXTURE_2D, b, p, h, f, m);
          (i.generateMipmaps = !1), (t.__maxMipLevel = g.length - 1);
        } else n.texImage2D(e.TEXTURE_2D, 0, p, h, f, l), (t.__maxMipLevel = 0);
        x(i, u) && y(a, i, l.width, l.height),
          (t.__version = i.version),
          i.onUpdate && i.onUpdate(i);
      }
      function I(t, i, a, s) {
        var l = o.convert(i.texture.format),
          c = o.convert(i.texture.type),
          u = M(i.texture.internalFormat, l, c);
        n.texImage2D(s, 0, u, i.width, i.height, 0, l, c, null),
          e.bindFramebuffer(e.FRAMEBUFFER, t),
          e.framebufferTexture2D(
            e.FRAMEBUFFER,
            a,
            s,
            r.get(i.texture).__webglTexture,
            0
          ),
          e.bindFramebuffer(e.FRAMEBUFFER, null);
      }
      function U(t, n, i) {
        if (
          (e.bindRenderbuffer(e.RENDERBUFFER, t),
          n.depthBuffer && !n.stencilBuffer)
        ) {
          if (i) {
            var r = O(n);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              r,
              e.DEPTH_COMPONENT16,
              n.width,
              n.height
            );
          } else
            e.renderbufferStorage(
              e.RENDERBUFFER,
              e.DEPTH_COMPONENT16,
              n.width,
              n.height
            );
          e.framebufferRenderbuffer(
            e.FRAMEBUFFER,
            e.DEPTH_ATTACHMENT,
            e.RENDERBUFFER,
            t
          );
        } else if (n.depthBuffer && n.stencilBuffer) {
          if (i) {
            r = O(n);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              r,
              e.DEPTH24_STENCIL8,
              n.width,
              n.height
            );
          } else
            e.renderbufferStorage(
              e.RENDERBUFFER,
              e.DEPTH_STENCIL,
              n.width,
              n.height
            );
          e.framebufferRenderbuffer(
            e.FRAMEBUFFER,
            e.DEPTH_STENCIL_ATTACHMENT,
            e.RENDERBUFFER,
            t
          );
        } else {
          var a = o.convert(n.texture.format),
            s = o.convert(n.texture.type),
            l = M(n.texture.internalFormat, a, s);
          if (i) {
            r = O(n);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              r,
              l,
              n.width,
              n.height
            );
          } else e.renderbufferStorage(e.RENDERBUFFER, l, n.width, n.height);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null);
      }
      function F(t) {
        var n = r.get(t),
          i = !0 === t.isWebGLRenderTargetCube;
        if (t.depthTexture) {
          if (i)
            throw new Error(
              "target.depthTexture not supported in Cube render targets"
            );
          !(function (t, n) {
            if (n && n.isWebGLRenderTargetCube)
              throw new Error(
                "Depth Texture with cube render targets is not supported"
              );
            if (
              (e.bindFramebuffer(e.FRAMEBUFFER, t),
              !n.depthTexture || !n.depthTexture.isDepthTexture)
            )
              throw new Error(
                "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
              );
            (r.get(n.depthTexture).__webglTexture &&
              n.depthTexture.image.width === n.width &&
              n.depthTexture.image.height === n.height) ||
              ((n.depthTexture.image.width = n.width),
              (n.depthTexture.image.height = n.height),
              (n.depthTexture.needsUpdate = !0)),
              S(n.depthTexture, 0);
            var i = r.get(n.depthTexture).__webglTexture;
            if (1026 === n.depthTexture.format)
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                i,
                0
              );
            else {
              if (1027 !== n.depthTexture.format)
                throw new Error("Unknown depthTexture format");
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                i,
                0
              );
            }
          })(n.__webglFramebuffer, t);
        } else if (i) {
          n.__webglDepthbuffer = [];
          for (var a = 0; a < 6; a++)
            e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[a]),
              (n.__webglDepthbuffer[a] = e.createRenderbuffer()),
              U(n.__webglDepthbuffer[a], t);
        } else
          e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer),
            (n.__webglDepthbuffer = e.createRenderbuffer()),
            U(n.__webglDepthbuffer, t);
        e.bindFramebuffer(e.FRAMEBUFFER, null);
      }
      function O(e) {
        return c && e.isWebGLMultisampleRenderTarget
          ? Math.min(f, e.samples)
          : 0;
      }
      var z = !1,
        B = !1;
      (this.allocateTextureUnit = function () {
        var e = T;
        return (
          e >= u &&
            console.warn(
              "THREE.WebGLTextures: Trying to use " +
                e +
                " texture units while this GPU supports only " +
                u
            ),
          (T += 1),
          e
        );
      }),
        (this.resetTextureUnits = function () {
          T = 0;
        }),
        (this.setTexture2D = S),
        (this.setTexture2DArray = function (t, i) {
          var a = r.get(t);
          t.version > 0 && a.__version !== t.version
            ? C(a, t, i)
            : (n.activeTexture(e.TEXTURE0 + i),
              n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture));
        }),
        (this.setTexture3D = function (t, i) {
          var a = r.get(t);
          t.version > 0 && a.__version !== t.version
            ? C(a, t, i)
            : (n.activeTexture(e.TEXTURE0 + i),
              n.bindTexture(e.TEXTURE_3D, a.__webglTexture));
        }),
        (this.setTextureCube = A),
        (this.setTextureCubeDynamic = L),
        (this.setupRenderTarget = function (i) {
          var a = r.get(i),
            l = r.get(i.texture);
          i.addEventListener("dispose", E),
            (l.__webglTexture = e.createTexture()),
            s.memory.textures++;
          var u = !0 === i.isWebGLRenderTargetCube,
            h = !0 === i.isWebGLMultisampleRenderTarget,
            d = !0 === i.isWebGLMultiviewRenderTarget,
            f = _(i) || c;
          if (u) {
            a.__webglFramebuffer = [];
            for (var p = 0; p < 6; p++)
              a.__webglFramebuffer[p] = e.createFramebuffer();
          } else if (((a.__webglFramebuffer = e.createFramebuffer()), h))
            if (c) {
              (a.__webglMultisampledFramebuffer = e.createFramebuffer()),
                (a.__webglColorRenderbuffer = e.createRenderbuffer()),
                e.bindRenderbuffer(e.RENDERBUFFER, a.__webglColorRenderbuffer);
              var m = o.convert(i.texture.format),
                g = o.convert(i.texture.type),
                v = M(i.texture.internalFormat, m, g),
                b = O(i);
              e.renderbufferStorageMultisample(
                e.RENDERBUFFER,
                b,
                v,
                i.width,
                i.height
              ),
                e.bindFramebuffer(
                  e.FRAMEBUFFER,
                  a.__webglMultisampledFramebuffer
                ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0,
                  e.RENDERBUFFER,
                  a.__webglColorRenderbuffer
                ),
                e.bindRenderbuffer(e.RENDERBUFFER, null),
                i.depthBuffer &&
                  ((a.__webglDepthRenderbuffer = e.createRenderbuffer()),
                  U(a.__webglDepthRenderbuffer, i, !0)),
                e.bindFramebuffer(e.FRAMEBUFFER, null);
            } else
              console.warn(
                "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
              );
          else if (d) {
            var w = i.width,
              T = i.height,
              S = i.numViews;
            e.bindFramebuffer(e.FRAMEBUFFER, a.__webglFramebuffer);
            var A = t.get("OVR_multiview2");
            s.memory.textures += 2;
            var L = e.createTexture();
            e.bindTexture(e.TEXTURE_2D_ARRAY, L),
              e.texParameteri(
                e.TEXTURE_2D_ARRAY,
                e.TEXTURE_MAG_FILTER,
                e.NEAREST
              ),
              e.texParameteri(
                e.TEXTURE_2D_ARRAY,
                e.TEXTURE_MIN_FILTER,
                e.NEAREST
              ),
              e.texImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                e.RGBA8,
                w,
                T,
                S,
                0,
                e.RGBA,
                e.UNSIGNED_BYTE,
                null
              ),
              A.framebufferTextureMultiviewOVR(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                L,
                0,
                0,
                S
              );
            var R = e.createTexture();
            e.bindTexture(e.TEXTURE_2D_ARRAY, R),
              e.texParameteri(
                e.TEXTURE_2D_ARRAY,
                e.TEXTURE_MAG_FILTER,
                e.NEAREST
              ),
              e.texParameteri(
                e.TEXTURE_2D_ARRAY,
                e.TEXTURE_MIN_FILTER,
                e.NEAREST
              ),
              e.texImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                e.DEPTH24_STENCIL8,
                w,
                T,
                S,
                0,
                e.DEPTH_STENCIL,
                e.UNSIGNED_INT_24_8,
                null
              ),
              A.framebufferTextureMultiviewOVR(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                R,
                0,
                0,
                S
              );
            var P = new Array(S);
            for (p = 0; p < S; ++p)
              (P[p] = e.createFramebuffer()),
                e.bindFramebuffer(e.FRAMEBUFFER, P[p]),
                e.framebufferTextureLayer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0,
                  L,
                  0,
                  p
                );
            (a.__webglColorTexture = L),
              (a.__webglDepthStencilTexture = R),
              (a.__webglViewFramebuffers = P),
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              e.bindTexture(e.TEXTURE_2D_ARRAY, null);
          }
          if (u) {
            n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture),
              N(e.TEXTURE_CUBE_MAP, i.texture, f);
            for (p = 0; p < 6; p++)
              I(
                a.__webglFramebuffer[p],
                i,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_CUBE_MAP_POSITIVE_X + p
              );
            x(i.texture, f) &&
              y(e.TEXTURE_CUBE_MAP, i.texture, i.width, i.height),
              n.bindTexture(e.TEXTURE_CUBE_MAP, null);
          } else
            d ||
              (n.bindTexture(e.TEXTURE_2D, l.__webglTexture),
              N(e.TEXTURE_2D, i.texture, f),
              I(a.__webglFramebuffer, i, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
              x(i.texture, f) && y(e.TEXTURE_2D, i.texture, i.width, i.height),
              n.bindTexture(e.TEXTURE_2D, null));
          i.depthBuffer && F(i);
        }),
        (this.updateRenderTargetMipmap = function (t) {
          var i = t.texture;
          if (x(i, _(t) || c)) {
            var a = t.isWebGLRenderTargetCube
                ? e.TEXTURE_CUBE_MAP
                : e.TEXTURE_2D,
              o = r.get(i).__webglTexture;
            n.bindTexture(a, o),
              y(a, i, t.width, t.height),
              n.bindTexture(a, null);
          }
        }),
        (this.updateMultisampleRenderTarget = function (t) {
          if (t.isWebGLMultisampleRenderTarget)
            if (c) {
              var n = r.get(t);
              e.bindFramebuffer(
                e.READ_FRAMEBUFFER,
                n.__webglMultisampledFramebuffer
              ),
                e.bindFramebuffer(e.DRAW_FRAMEBUFFER, n.__webglFramebuffer);
              var i = t.width,
                a = t.height,
                o = e.COLOR_BUFFER_BIT;
              t.depthBuffer && (o |= e.DEPTH_BUFFER_BIT),
                t.stencilBuffer && (o |= e.STENCIL_BUFFER_BIT),
                e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, e.NEAREST);
            } else
              console.warn(
                "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
              );
        }),
        (this.safeSetTexture2D = function (e, t) {
          e &&
            e.isWebGLRenderTarget &&
            (!1 === z &&
              (console.warn(
                "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
              ),
              (z = !0)),
            (e = e.texture)),
            S(e, t);
        }),
        (this.safeSetTextureCube = function (e, t) {
          e &&
            e.isWebGLRenderTargetCube &&
            (!1 === B &&
              (console.warn(
                "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
              ),
              (B = !0)),
            (e = e.texture)),
            (e && e.isCubeTexture) ||
            (Array.isArray(e.image) && 6 === e.image.length)
              ? A(e, t)
              : L(e, t);
        });
    }
    function Li(e, t, n) {
      var i = n.isWebGL2;
      return {
        convert: function (n) {
          var r;
          if (1009 === n) return e.UNSIGNED_BYTE;
          if (1017 === n) return e.UNSIGNED_SHORT_4_4_4_4;
          if (1018 === n) return e.UNSIGNED_SHORT_5_5_5_1;
          if (1019 === n) return e.UNSIGNED_SHORT_5_6_5;
          if (1010 === n) return e.BYTE;
          if (1011 === n) return e.SHORT;
          if (1012 === n) return e.UNSIGNED_SHORT;
          if (1013 === n) return e.INT;
          if (1014 === n) return e.UNSIGNED_INT;
          if (1015 === n) return e.FLOAT;
          if (1016 === n)
            return i
              ? e.HALF_FLOAT
              : null !== (r = t.get("OES_texture_half_float"))
              ? r.HALF_FLOAT_OES
              : null;
          if (1021 === n) return e.ALPHA;
          if (1022 === n) return e.RGB;
          if (1023 === n) return e.RGBA;
          if (1024 === n) return e.LUMINANCE;
          if (1025 === n) return e.LUMINANCE_ALPHA;
          if (1026 === n) return e.DEPTH_COMPONENT;
          if (1027 === n) return e.DEPTH_STENCIL;
          if (1028 === n) return e.RED;
          if (1029 === n) return e.RED_INTEGER;
          if (1030 === n) return e.RG;
          if (1031 === n) return e.RG_INTEGER;
          if (1032 === n) return e.RGB_INTEGER;
          if (1033 === n) return e.RGBA_INTEGER;
          if (33776 === n || 33777 === n || 33778 === n || 33779 === n) {
            if (null === (r = t.get("WEBGL_compressed_texture_s3tc")))
              return null;
            if (33776 === n) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (33777 === n) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (33778 === n) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (33779 === n) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
          if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
            if (null === (r = t.get("WEBGL_compressed_texture_pvrtc")))
              return null;
            if (35840 === n) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (35841 === n) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (35842 === n) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (35843 === n) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          }
          return 36196 === n
            ? null !== (r = t.get("WEBGL_compressed_texture_etc1"))
              ? r.COMPRESSED_RGB_ETC1_WEBGL
              : null
            : 37808 === n ||
              37809 === n ||
              37810 === n ||
              37811 === n ||
              37812 === n ||
              37813 === n ||
              37814 === n ||
              37815 === n ||
              37816 === n ||
              37817 === n ||
              37818 === n ||
              37819 === n ||
              37820 === n ||
              37821 === n
            ? null !== (r = t.get("WEBGL_compressed_texture_astc"))
              ? n
              : null
            : 1020 === n
            ? i
              ? e.UNSIGNED_INT_24_8
              : null !== (r = t.get("WEBGL_depth_texture"))
              ? r.UNSIGNED_INT_24_8_WEBGL
              : null
            : void 0;
        },
      };
    }
    function Ri(e, t, n, i) {
      bi.call(this, e, t, i),
        (this.depthBuffer = !1),
        (this.stencilBuffer = !1),
        (this.numViews = n);
    }
    function Pi(e, t) {
      var n,
        i,
        r,
        a,
        l,
        c,
        u,
        h = e.extensions,
        d = e.properties,
        f = 0;
      function p(e) {
        return e.isArrayCamera ? e.cameras : ((l[0] = e), l);
      }
      (this.isAvailable = function () {
        if (void 0 === u) {
          var e = h.get("OVR_multiview2");
          if ((u = null !== e && !1 === t.getContextAttributes().antialias)) {
            (f = t.getParameter(e.MAX_VIEWS_OVR)),
              (n = new Ri(0, 0, 2)),
              (c = new o.a()),
              (a = []),
              (r = []),
              (l = []);
            for (var i = 0; i < f; i++) (a[i] = new W()), (r[i] = new s.a());
          }
        }
        return u;
      }),
        (this.attachCamera = function (t) {
          !1 !==
            (function (e) {
              if (void 0 === e.isArrayCamera) return !0;
              var t = e.cameras;
              if (t.length > f) return !1;
              for (var n = 1, i = t.length; n < i; n++)
                if (
                  t[0].viewport.z !== t[n].viewport.z ||
                  t[0].viewport.w !== t[n].viewport.w
                )
                  return !1;
              return !0;
            })(t) &&
            ((i = e.getRenderTarget()),
            (function (t) {
              if (
                (i ? c.set(i.width, i.height) : e.getDrawingBufferSize(c),
                t.isArrayCamera)
              ) {
                var r = t.cameras[0].viewport;
                n.setSize(r.z, r.w), n.setNumViews(t.cameras.length);
              } else n.setSize(c.x, c.y), n.setNumViews(2);
            })(t),
            e.setRenderTarget(n));
        }),
        (this.detachCamera = function (r) {
          n === e.getRenderTarget() &&
            (e.setRenderTarget(i),
            (function (e) {
              var i = n,
                r = i.numViews,
                a = d.get(i).__webglViewFramebuffers,
                o = i.width,
                s = i.height;
              if (e.isArrayCamera)
                for (var l = 0; l < r; l++) {
                  var u = e.cameras[l].viewport,
                    h = u.x,
                    f = u.y,
                    p = h + u.z,
                    m = f + u.w;
                  t.bindFramebuffer(t.READ_FRAMEBUFFER, a[l]),
                    t.blitFramebuffer(
                      0,
                      0,
                      o,
                      s,
                      h,
                      f,
                      p,
                      m,
                      t.COLOR_BUFFER_BIT,
                      t.NEAREST
                    );
                }
              else
                t.bindFramebuffer(t.READ_FRAMEBUFFER, a[0]),
                  t.blitFramebuffer(
                    0,
                    0,
                    o,
                    s,
                    0,
                    0,
                    c.x,
                    c.y,
                    t.COLOR_BUFFER_BIT,
                    t.NEAREST
                  );
            })(r));
        }),
        (this.updateCameraProjectionMatricesUniform = function (e, n) {
          for (var i = p(e), r = 0; r < i.length; r++)
            a[r].copy(i[r].projectionMatrix);
          n.setValue(t, "projectionMatrices", a);
        }),
        (this.updateCameraViewMatricesUniform = function (e, n) {
          for (var i = p(e), r = 0; r < i.length; r++)
            a[r].copy(i[r].matrixWorldInverse);
          n.setValue(t, "viewMatrices", a);
        }),
        (this.updateObjectMatricesUniforms = function (e, n, i) {
          for (var o = p(n), s = 0; s < o.length; s++)
            a[s].multiplyMatrices(o[s].matrixWorldInverse, e.matrixWorld),
              r[s].getNormalMatrix(a[s]);
          i.setValue(t, "modelViewMatrices", a),
            i.setValue(t, "normalMatrices", r);
        });
    }
    function Ni() {
      me.call(this),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new W()),
        (this.projectionMatrix = new W()),
        (this.projectionMatrixInverse = new W());
    }
    function Di(e, t, n, i) {
      Ni.call(this),
        (this.type = "PerspectiveCamera"),
        (this.fov = void 0 !== e ? e : 50),
        (this.zoom = 1),
        (this.near = void 0 !== n ? n : 0.1),
        (this.far = void 0 !== i ? i : 2e3),
        (this.focus = 10),
        (this.aspect = void 0 !== t ? t : 1),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    function Ci(e) {
      Di.call(this), (this.cameras = e || []);
    }
    function Ii() {
      me.call(this), (this.type = "Group");
    }
    function Ui(e, t) {
      var n = this,
        i = null,
        r = null,
        a = "local-floor",
        o = null,
        s = [],
        l = new Map(),
        c = new Di();
      c.layers.enable(1), (c.viewport = new J());
      var u = new Di();
      u.layers.enable(2), (u.viewport = new J());
      var h = new Ci([c, u]);
      function f(e) {
        var t = l.get(e.inputSource);
        t && t.dispatchEvent({ type: e.type });
      }
      function p() {
        l.forEach(function (e, t) {
          e.dispatchEvent({ type: "disconnected", data: t }), (e.visible = !1);
        }),
          l.clear(),
          e.setFramebuffer(null),
          e.setRenderTarget(e.getRenderTarget()),
          M.stop(),
          n.dispatchEvent({ type: "sessionend" }),
          (n.isPresenting = !1);
      }
      function m(e) {
        (r = e),
          M.setContext(i),
          M.start(),
          n.dispatchEvent({ type: "sessionstart" }),
          (n.isPresenting = !0);
      }
      function g(e) {
        for (var t = i.inputSources, n = 0; n < s.length; n++)
          l.set(t[n], s[n]);
        for (n = 0; n < e.removed.length; n++) {
          var r = e.removed[n];
          (a = l.get(r)) &&
            (a.dispatchEvent({ type: "disconnected", data: r }), l.delete(r));
        }
        for (n = 0; n < e.added.length; n++) {
          var a;
          r = e.added[n];
          (a = l.get(r)) && a.dispatchEvent({ type: "connected", data: r });
        }
      }
      h.layers.enable(1),
        h.layers.enable(2),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (e) {
          var t = s[e];
          return (
            void 0 === t &&
              (((t = new Ii()).matrixAutoUpdate = !1),
              (t.visible = !1),
              (s[e] = t)),
            t
          );
        }),
        (this.setFramebufferScaleFactor = function () {}),
        (this.setReferenceSpaceType = function (e) {
          a = e;
        }),
        (this.getReferenceSpace = function () {
          return r;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = function (e) {
          if (null !== (i = e)) {
            i.addEventListener("select", f),
              i.addEventListener("selectstart", f),
              i.addEventListener("selectend", f),
              i.addEventListener("squeeze", f),
              i.addEventListener("squeezestart", f),
              i.addEventListener("squeezeend", f),
              i.addEventListener("end", p);
            var n = t.getContextAttributes(),
              r = {
                antialias: n.antialias,
                alpha: n.alpha,
                depth: n.depth,
                stencil: n.stencil,
              },
              o = new XRWebGLLayer(i, t, r);
            i.updateRenderState({ baseLayer: o }),
              i.requestReferenceSpace(a).then(m),
              i.addEventListener("inputsourceschange", g);
          }
        });
      var v = new d.a(),
        _ = new d.a();
      function x(e, t) {
        null === t
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.getInverse(e.matrixWorld);
      }
      this.getCamera = function (e) {
        var t = e.parent,
          n = h.cameras;
        x(h, t);
        for (var i = 0; i < n.length; i++) x(n[i], t);
        e.matrixWorld.copy(h.matrixWorld);
        for (var r = e.children, a = ((i = 0), r.length); i < a; i++)
          r[i].updateMatrixWorld(!0);
        return (
          (function (e, t, n) {
            v.setFromMatrixPosition(t.matrixWorld),
              _.setFromMatrixPosition(n.matrixWorld);
            var i = v.distanceTo(_),
              r = t.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              o = r[14] / (r[10] - 1),
              s = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              u = (r[8] - 1) / r[0],
              h = (a[8] + 1) / a[0],
              d = o * u,
              f = o * h,
              p = i / (-u + h),
              m = p * -u;
            t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(m),
              e.translateZ(p),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.getInverse(e.matrixWorld);
            var g = o + p,
              x = s + p,
              y = d - m,
              M = f + (i - m),
              b = ((l * s) / x) * g,
              w = ((c * s) / x) * g;
            e.projectionMatrix.makePerspective(y, M, b, w, g, x);
          })(h, c, u),
          h
        );
      };
      var y = null;
      var M = new ve();
      M.setAnimationLoop(function (t, n) {
        if (null !== (o = n.getViewerPose(r))) {
          var a = o.views,
            l = i.renderState.baseLayer;
          e.setFramebuffer(l.framebuffer);
          for (var c = 0; c < a.length; c++) {
            var u = a[c],
              d = l.getViewport(u),
              f = u.transform.inverse.matrix,
              p = h.cameras[c];
            p.matrix.fromArray(f).getInverse(p.matrix),
              p.projectionMatrix.fromArray(u.projectionMatrix),
              p.viewport.set(d.x, d.y, d.width, d.height),
              0 === c && h.matrix.copy(p.matrix);
          }
        }
        var m = i.inputSources;
        for (c = 0; c < s.length; c++) {
          var g = s[c],
            v = m[c];
          if (v) {
            var _ = n.getPose(v.targetRaySpace, r);
            if (null !== _) {
              g.matrix.fromArray(_.transform.matrix),
                g.matrix.decompose(g.position, g.rotation, g.scale),
                (g.visible = !0);
              continue;
            }
          }
          g.visible = !1;
        }
        y && y(t, n);
      }),
        (this.setAnimationLoop = function (e) {
          y = e;
        }),
        (this.dispose = function () {});
    }
    function Fi() {
      je.call(this),
        (this.type = "InstancedBufferGeometry"),
        (this.maxInstancedCount = void 0);
    }
    function Oi(e, t, n, i) {
      "number" == typeof n &&
        ((i = n),
        (n = !1),
        console.error(
          "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
        )),
        Se.call(this, e, t, n),
        (this.meshPerAttribute = i || 1);
    }
    (Ri.prototype = Object.assign(Object.create(bi.prototype), {
      constructor: Ri,
      isWebGLMultiviewRenderTarget: !0,
      copy: function (e) {
        return (
          bi.prototype.copy.call(this, e), (this.numViews = e.numViews), this
        );
      },
      setNumViews: function (e) {
        return (
          this.numViews !== e && ((this.numViews = e), this.dispose()), this
        );
      },
    })),
      (Ni.prototype = Object.assign(Object.create(me.prototype), {
        constructor: Ni,
        isCamera: !0,
        copy: function (e, t) {
          return (
            me.prototype.copy.call(this, e, t),
            this.matrixWorldInverse.copy(e.matrixWorldInverse),
            this.projectionMatrix.copy(e.projectionMatrix),
            this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            this
          );
        },
        getWorldDirection: function (e) {
          void 0 === e &&
            (console.warn(
              "THREE.Camera: .getWorldDirection() target is now required"
            ),
            (e = new d.a())),
            this.updateMatrixWorld(!0);
          var t = this.matrixWorld.elements;
          return e.set(-t[8], -t[9], -t[10]).normalize();
        },
        updateMatrixWorld: function (e) {
          me.prototype.updateMatrixWorld.call(this, e),
            this.matrixWorldInverse.getInverse(this.matrixWorld);
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
      })),
      (Di.prototype = Object.assign(Object.create(Ni.prototype), {
        constructor: Di,
        isPerspectiveCamera: !0,
        copy: function (e, t) {
          return (
            Ni.prototype.copy.call(this, e, t),
            (this.fov = e.fov),
            (this.zoom = e.zoom),
            (this.near = e.near),
            (this.far = e.far),
            (this.focus = e.focus),
            (this.aspect = e.aspect),
            (this.view = null === e.view ? null : Object.assign({}, e.view)),
            (this.filmGauge = e.filmGauge),
            (this.filmOffset = e.filmOffset),
            this
          );
        },
        setFocalLength: function (e) {
          var t = (0.5 * this.getFilmHeight()) / e;
          (this.fov = 2 * i.a.RAD2DEG * Math.atan(t)),
            this.updateProjectionMatrix();
        },
        getFocalLength: function () {
          var e = Math.tan(0.5 * i.a.DEG2RAD * this.fov);
          return (0.5 * this.getFilmHeight()) / e;
        },
        getEffectiveFOV: function () {
          return (
            2 *
            i.a.RAD2DEG *
            Math.atan(Math.tan(0.5 * i.a.DEG2RAD * this.fov) / this.zoom)
          );
        },
        getFilmWidth: function () {
          return this.filmGauge * Math.min(this.aspect, 1);
        },
        getFilmHeight: function () {
          return this.filmGauge / Math.max(this.aspect, 1);
        },
        setViewOffset: function (e, t, n, i, r, a) {
          (this.aspect = e / t),
            null === this.view &&
              (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
              }),
            (this.view.enabled = !0),
            (this.view.fullWidth = e),
            (this.view.fullHeight = t),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        },
        clearViewOffset: function () {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function () {
          var e = this.near,
            t = (e * Math.tan(0.5 * i.a.DEG2RAD * this.fov)) / this.zoom,
            n = 2 * t,
            r = this.aspect * n,
            a = -0.5 * r,
            o = this.view;
          if (null !== this.view && this.view.enabled) {
            var s = o.fullWidth,
              l = o.fullHeight;
            (a += (o.offsetX * r) / s),
              (t -= (o.offsetY * n) / l),
              (r *= o.width / s),
              (n *= o.height / l);
          }
          var c = this.filmOffset;
          0 !== c && (a += (e * c) / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(
              a,
              a + r,
              t,
              t - n,
              e,
              this.far
            ),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix);
        },
        toJSON: function (e) {
          var t = me.prototype.toJSON.call(this, e);
          return (
            (t.object.fov = this.fov),
            (t.object.zoom = this.zoom),
            (t.object.near = this.near),
            (t.object.far = this.far),
            (t.object.focus = this.focus),
            (t.object.aspect = this.aspect),
            null !== this.view &&
              (t.object.view = Object.assign({}, this.view)),
            (t.object.filmGauge = this.filmGauge),
            (t.object.filmOffset = this.filmOffset),
            t
          );
        },
      })),
      (Ci.prototype = Object.assign(Object.create(Di.prototype), {
        constructor: Ci,
        isArrayCamera: !0,
      })),
      (Ii.prototype = Object.assign(Object.create(me.prototype), {
        constructor: Ii,
        isGroup: !0,
      })),
      Object.assign(Ui.prototype, r.prototype),
      (Fi.prototype = Object.assign(Object.create(je.prototype), {
        constructor: Fi,
        isInstancedBufferGeometry: !0,
        copy: function (e) {
          return (
            je.prototype.copy.call(this, e),
            (this.maxInstancedCount = e.maxInstancedCount),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        toJSON: function () {
          var e = je.prototype.toJSON.call(this);
          return (
            (e.maxInstancedCount = this.maxInstancedCount),
            (e.isInstancedBufferGeometry = !0),
            e
          );
        },
      })),
      (Oi.prototype = Object.assign(Object.create(Se.prototype), {
        constructor: Oi,
        isInstancedBufferAttribute: !0,
        copy: function (e) {
          return (
            Se.prototype.copy.call(this, e),
            (this.meshPerAttribute = e.meshPerAttribute),
            this
          );
        },
        toJSON: function () {
          var e = Se.prototype.toJSON.call(this);
          return (
            (e.meshPerAttribute = this.meshPerAttribute),
            (e.isInstancedBufferAttribute = !0),
            e
          );
        },
      }));
    var zi = new W(),
      Bi = new W(),
      Gi = [],
      Vi = new Ut();
    function Hi(e, t, n) {
      Ut.call(this, e, t),
        (this.instanceMatrix = new Se(new Float32Array(16 * n), 16)),
        (this.count = n);
    }
    function ki(e, t, n, i) {
      (this.ray = new at(e, t)),
        (this.near = n || 0),
        (this.far = i || 1 / 0),
        (this.camera = null),
        (this.params = {
          Mesh: {},
          Line: {},
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }),
        Object.defineProperties(this.params, {
          PointCloud: {
            get: function () {
              return (
                console.warn(
                  "THREE.Raycaster: params.PointCloud has been renamed to params.Points."
                ),
                this.Points
              );
            },
          },
        });
    }
    function Wi(e, t) {
      return e.distance - t.distance;
    }
    function ji(e, t, n, i) {
      if (!1 !== e.visible && (e.raycast(t, n), !0 === i))
        for (var r = e.children, a = 0, o = r.length; a < o; a++)
          ji(r[a], t, n, !0);
    }
    function Xi(e, t) {
      me.call(this),
        (this.type = "Light"),
        (this.color = new Y.a(e)),
        (this.intensity = void 0 !== t ? t : 1),
        (this.receiveShadow = void 0);
    }
    function qi(e) {
      (this.camera = e),
        (this.bias = 0),
        (this.radius = 1),
        (this.mapSize = new o.a(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new W()),
        (this._frustum = new F()),
        (this._frameExtents = new o.a(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new J(0, 0, 1, 1)]);
    }
    function Yi(e, t, n, i, r, a) {
      Ni.call(this),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = void 0 !== e ? e : -1),
        (this.right = void 0 !== t ? t : 1),
        (this.top = void 0 !== n ? n : 1),
        (this.bottom = void 0 !== i ? i : -1),
        (this.near = void 0 !== r ? r : 0.1),
        (this.far = void 0 !== a ? a : 2e3),
        this.updateProjectionMatrix();
    }
    function Zi() {
      qi.call(this, new Yi(-5, 5, 5, -5, 0.5, 500));
    }
    function Ji(e, t) {
      Xi.call(this, e, t),
        (this.type = "DirectionalLight"),
        this.position.copy(me.DefaultUp),
        this.updateMatrix(),
        (this.target = new me()),
        (this.shadow = new Zi());
    }
    function Qi(e) {
      Je.call(this),
        (this.type = "LineBasicMaterial"),
        (this.color = new Y.a(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        this.setValues(e);
    }
    (Hi.prototype = Object.assign(Object.create(Ut.prototype), {
      constructor: Hi,
      isInstancedMesh: !0,
      getMatrixAt: function (e, t) {
        t.fromArray(this.instanceMatrix.array, 16 * e);
      },
      raycast: function (e, t) {
        var n = this.matrixWorld,
          i = this.count;
        if (
          ((Vi.geometry = this.geometry),
          (Vi.material = this.material),
          void 0 !== Vi.material)
        )
          for (var r = 0; r < i; r++)
            this.getMatrixAt(r, zi),
              Bi.multiplyMatrices(n, zi),
              (Vi.matrixWorld = Bi),
              Vi.raycast(e, Gi),
              Gi.length > 0 &&
                ((Gi[0].instanceId = r),
                (Gi[0].object = this),
                t.push(Gi[0]),
                (Gi.length = 0));
      },
      setMatrixAt: function (e, t) {
        t.toArray(this.instanceMatrix.array, 16 * e);
      },
      updateMorphTargets: function () {},
    })),
      Object.assign(ki.prototype, {
        linePrecision: 1,
        set: function (e, t) {
          this.ray.set(e, t);
        },
        setFromCamera: function (e, t) {
          t && t.isPerspectiveCamera
            ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
              this.ray.direction
                .set(e.x, e.y, 0.5)
                .unproject(t)
                .sub(this.ray.origin)
                .normalize(),
              (this.camera = t))
            : t && t.isOrthographicCamera
            ? (this.ray.origin
                .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
                .unproject(t),
              this.ray.direction
                .set(0, 0, -1)
                .transformDirection(t.matrixWorld),
              (this.camera = t))
            : console.error("THREE.Raycaster: Unsupported camera type.");
        },
        intersectObject: function (e, t, n) {
          var i = n || [];
          return ji(e, this, i, t), i.sort(Wi), i;
        },
        intersectObjects: function (e, t, n) {
          var i = n || [];
          if (!1 === Array.isArray(e))
            return (
              console.warn(
                "THREE.Raycaster.intersectObjects: objects is not an Array."
              ),
              i
            );
          for (var r = 0, a = e.length; r < a; r++) ji(e[r], this, i, t);
          return i.sort(Wi), i;
        },
      }),
      (Xi.prototype = Object.assign(Object.create(me.prototype), {
        constructor: Xi,
        isLight: !0,
        copy: function (e) {
          return (
            me.prototype.copy.call(this, e),
            this.color.copy(e.color),
            (this.intensity = e.intensity),
            this
          );
        },
        toJSON: function (e) {
          var t = me.prototype.toJSON.call(this, e);
          return (
            (t.object.color = this.color.getHex()),
            (t.object.intensity = this.intensity),
            void 0 !== this.groundColor &&
              (t.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (t.object.distance = this.distance),
            void 0 !== this.angle && (t.object.angle = this.angle),
            void 0 !== this.decay && (t.object.decay = this.decay),
            void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
            t
          );
        },
      })),
      Object.assign(qi.prototype, {
        _projScreenMatrix: new W(),
        _lightPositionWorld: new d.a(),
        _lookTarget: new d.a(),
        getViewportCount: function () {
          return this._viewportCount;
        },
        getFrustum: function () {
          return this._frustum;
        },
        updateMatrices: function (e) {
          var t = this.camera,
            n = this.matrix,
            i = this._projScreenMatrix,
            r = this._lookTarget,
            a = this._lightPositionWorld;
          a.setFromMatrixPosition(e.matrixWorld),
            t.position.copy(a),
            r.setFromMatrixPosition(e.target.matrixWorld),
            t.lookAt(r),
            t.updateMatrixWorld(),
            i.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            this._frustum.setFromMatrix(i),
            n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
            n.multiply(t.projectionMatrix),
            n.multiply(t.matrixWorldInverse);
        },
        getViewport: function (e) {
          return this._viewports[e];
        },
        getFrameExtents: function () {
          return this._frameExtents;
        },
        copy: function (e) {
          return (
            (this.camera = e.camera.clone()),
            (this.bias = e.bias),
            (this.radius = e.radius),
            this.mapSize.copy(e.mapSize),
            this
          );
        },
        clone: function () {
          return new this.constructor().copy(this);
        },
        toJSON: function () {
          var e = {};
          return (
            0 !== this.bias && (e.bias = this.bias),
            1 !== this.radius && (e.radius = this.radius),
            (512 === this.mapSize.x && 512 === this.mapSize.y) ||
              (e.mapSize = this.mapSize.toArray()),
            (e.camera = this.camera.toJSON(!1).object),
            delete e.camera.matrix,
            e
          );
        },
      }),
      (Yi.prototype = Object.assign(Object.create(Ni.prototype), {
        constructor: Yi,
        isOrthographicCamera: !0,
        copy: function (e, t) {
          return (
            Ni.prototype.copy.call(this, e, t),
            (this.left = e.left),
            (this.right = e.right),
            (this.top = e.top),
            (this.bottom = e.bottom),
            (this.near = e.near),
            (this.far = e.far),
            (this.zoom = e.zoom),
            (this.view = null === e.view ? null : Object.assign({}, e.view)),
            this
          );
        },
        setViewOffset: function (e, t, n, i, r, a) {
          null === this.view &&
            (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1,
            }),
            (this.view.enabled = !0),
            (this.view.fullWidth = e),
            (this.view.fullHeight = t),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        },
        clearViewOffset: function () {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        },
        updateProjectionMatrix: function () {
          var e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2,
            r = n - e,
            a = n + e,
            o = i + t,
            s = i - t;
          if (null !== this.view && this.view.enabled) {
            var l = this.zoom / (this.view.width / this.view.fullWidth),
              c = this.zoom / (this.view.height / this.view.fullHeight),
              u = (this.right - this.left) / this.view.width,
              h = (this.top - this.bottom) / this.view.height;
            (a =
              (r += u * (this.view.offsetX / l)) + u * (this.view.width / l)),
              (s =
                (o -= h * (this.view.offsetY / c)) -
                h * (this.view.height / c));
          }
          this.projectionMatrix.makeOrthographic(
            r,
            a,
            o,
            s,
            this.near,
            this.far
          ),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix);
        },
        toJSON: function (e) {
          var t = me.prototype.toJSON.call(this, e);
          return (
            (t.object.zoom = this.zoom),
            (t.object.left = this.left),
            (t.object.right = this.right),
            (t.object.top = this.top),
            (t.object.bottom = this.bottom),
            (t.object.near = this.near),
            (t.object.far = this.far),
            null !== this.view &&
              (t.object.view = Object.assign({}, this.view)),
            t
          );
        },
      })),
      (Zi.prototype = Object.assign(Object.create(qi.prototype), {
        constructor: Zi,
        isDirectionalLightShadow: !0,
        updateMatrices: function (e) {
          qi.prototype.updateMatrices.call(this, e);
        },
      })),
      (Ji.prototype = Object.assign(Object.create(Xi.prototype), {
        constructor: Ji,
        isDirectionalLight: !0,
        copy: function (e) {
          return (
            Xi.prototype.copy.call(this, e),
            (this.target = e.target.clone()),
            (this.shadow = e.shadow.clone()),
            this
          );
        },
      })),
      (Qi.prototype = Object.create(Je.prototype)),
      (Qi.prototype.constructor = Qi),
      (Qi.prototype.isLineBasicMaterial = !0),
      (Qi.prototype.copy = function (e) {
        return (
          Je.prototype.copy.call(this, e),
          this.color.copy(e.color),
          (this.linewidth = e.linewidth),
          (this.linecap = e.linecap),
          (this.linejoin = e.linejoin),
          this
        );
      });
    var Ki = new d.a(),
      $i = new d.a(),
      er = new W(),
      tr = new at(),
      nr = new R();
    function ir(e, t, n) {
      1 === n &&
        console.error(
          "THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."
        ),
        me.call(this),
        (this.type = "Line"),
        (this.geometry = void 0 !== e ? e : new je()),
        (this.material =
          void 0 !== t ? t : new Qi({ color: 16777215 * Math.random() }));
    }
    function rr(e, t) {
      ir.call(this, e, t), (this.type = "LineLoop");
    }
    function ar(e, t, n, i) {
      Ee.call(this),
        (this.type = "CircleGeometry"),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: i,
        }),
        this.fromBufferGeometry(new or(e, t, n, i)),
        this.mergeVertices();
    }
    function or(e, t, n, i) {
      je.call(this),
        (this.type = "CircleBufferGeometry"),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: i,
        }),
        (e = e || 1),
        (t = void 0 !== t ? Math.max(3, t) : 8),
        (n = void 0 !== n ? n : 0),
        (i = void 0 !== i ? i : 2 * Math.PI);
      var r,
        a,
        s = [],
        l = [],
        c = [],
        u = [],
        h = new d.a(),
        f = new o.a();
      for (
        l.push(0, 0, 0), c.push(0, 0, 1), u.push(0.5, 0.5), a = 0, r = 3;
        a <= t;
        a++, r += 3
      ) {
        var p = n + (a / t) * i;
        (h.x = e * Math.cos(p)),
          (h.y = e * Math.sin(p)),
          l.push(h.x, h.y, h.z),
          c.push(0, 0, 1),
          (f.x = (l[r] / e + 1) / 2),
          (f.y = (l[r + 1] / e + 1) / 2),
          u.push(f.x, f.y);
      }
      for (r = 1; r <= t; r++) s.push(r, r + 1, 0);
      this.setIndex(s),
        this.setAttribute("position", new Ie(l, 3)),
        this.setAttribute("normal", new Ie(c, 3)),
        this.setAttribute("uv", new Ie(u, 2));
    }
    function sr(e, t, n, i) {
      Ee.call(this),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: i }),
        this.fromBufferGeometry(new lr(e, t, n, i)),
        this.mergeVertices();
    }
    function lr(e, t, n, i) {
      je.call(this),
        (this.type = "PolyhedronBufferGeometry"),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: i }),
        (n = n || 1);
      var r = [],
        a = [];
      function s(e, t, n, i) {
        var r,
          a,
          o = Math.pow(2, i),
          s = [];
        for (r = 0; r <= o; r++) {
          s[r] = [];
          var c = e.clone().lerp(n, r / o),
            u = t.clone().lerp(n, r / o),
            h = o - r;
          for (a = 0; a <= h; a++)
            s[r][a] = 0 === a && r === o ? c : c.clone().lerp(u, a / h);
        }
        for (r = 0; r < o; r++)
          for (a = 0; a < 2 * (o - r) - 1; a++) {
            var d = Math.floor(a / 2);
            a % 2 == 0
              ? (l(s[r][d + 1]), l(s[r + 1][d]), l(s[r][d]))
              : (l(s[r][d + 1]), l(s[r + 1][d + 1]), l(s[r + 1][d]));
          }
      }
      function l(e) {
        r.push(e.x, e.y, e.z);
      }
      function c(t, n) {
        var i = 3 * t;
        (n.x = e[i + 0]), (n.y = e[i + 1]), (n.z = e[i + 2]);
      }
      function u(e, t, n, i) {
        i < 0 && 1 === e.x && (a[t] = e.x - 1),
          0 === n.x && 0 === n.z && (a[t] = i / 2 / Math.PI + 0.5);
      }
      function h(e) {
        return Math.atan2(e.z, -e.x);
      }
      !(function (e) {
        for (
          var n = new d.a(), i = new d.a(), r = new d.a(), a = 0;
          a < t.length;
          a += 3
        )
          c(t[a + 0], n), c(t[a + 1], i), c(t[a + 2], r), s(n, i, r, e);
      })((i = i || 0)),
        (function (e) {
          for (var t = new d.a(), n = 0; n < r.length; n += 3)
            (t.x = r[n + 0]),
              (t.y = r[n + 1]),
              (t.z = r[n + 2]),
              t.normalize().multiplyScalar(e),
              (r[n + 0] = t.x),
              (r[n + 1] = t.y),
              (r[n + 2] = t.z);
        })(n),
        (function () {
          for (var e = new d.a(), t = 0; t < r.length; t += 3) {
            (e.x = r[t + 0]), (e.y = r[t + 1]), (e.z = r[t + 2]);
            var n = h(e) / 2 / Math.PI + 0.5,
              i =
                ((s = e),
                Math.atan2(-s.y, Math.sqrt(s.x * s.x + s.z * s.z)) / Math.PI +
                  0.5);
            a.push(n, 1 - i);
          }
          var s;
          (function () {
            for (
              var e = new d.a(),
                t = new d.a(),
                n = new d.a(),
                i = new d.a(),
                s = new o.a(),
                l = new o.a(),
                c = new o.a(),
                f = 0,
                p = 0;
              f < r.length;
              f += 9, p += 6
            ) {
              e.set(r[f + 0], r[f + 1], r[f + 2]),
                t.set(r[f + 3], r[f + 4], r[f + 5]),
                n.set(r[f + 6], r[f + 7], r[f + 8]),
                s.set(a[p + 0], a[p + 1]),
                l.set(a[p + 2], a[p + 3]),
                c.set(a[p + 4], a[p + 5]),
                i.copy(e).add(t).add(n).divideScalar(3);
              var m = h(i);
              u(s, p + 0, e, m), u(l, p + 2, t, m), u(c, p + 4, n, m);
            }
          })(),
            (function () {
              for (var e = 0; e < a.length; e += 6) {
                var t = a[e + 0],
                  n = a[e + 2],
                  i = a[e + 4],
                  r = Math.max(t, n, i),
                  o = Math.min(t, n, i);
                r > 0.9 &&
                  o < 0.1 &&
                  (t < 0.2 && (a[e + 0] += 1),
                  n < 0.2 && (a[e + 2] += 1),
                  i < 0.2 && (a[e + 4] += 1));
              }
            })();
        })(),
        this.setAttribute("position", new Ie(r, 3)),
        this.setAttribute("normal", new Ie(r.slice(), 3)),
        this.setAttribute("uv", new Ie(a, 2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    function cr(e, t) {
      Ee.call(this),
        (this.type = "IcosahedronGeometry"),
        (this.parameters = { radius: e, detail: t }),
        this.fromBufferGeometry(new ur(e, t)),
        this.mergeVertices();
    }
    function ur(e, t) {
      var n = (1 + Math.sqrt(5)) / 2,
        i = [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ];
      lr.call(
        this,
        i,
        [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
          11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
          8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ],
        e,
        t
      ),
        (this.type = "IcosahedronBufferGeometry"),
        (this.parameters = { radius: e, detail: t });
    }
    (ir.prototype = Object.assign(Object.create(me.prototype), {
      constructor: ir,
      isLine: !0,
      computeLineDistances: function () {
        var e = this.geometry;
        if (e.isBufferGeometry)
          if (null === e.index) {
            for (
              var t = e.attributes.position, n = [0], i = 1, r = t.count;
              i < r;
              i++
            )
              Ki.fromBufferAttribute(t, i - 1),
                $i.fromBufferAttribute(t, i),
                (n[i] = n[i - 1]),
                (n[i] += Ki.distanceTo($i));
            e.setAttribute("lineDistance", new Ie(n, 1));
          } else
            console.warn(
              "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
            );
        else if (e.isGeometry) {
          var a = e.vertices;
          (n = e.lineDistances)[0] = 0;
          for (i = 1, r = a.length; i < r; i++)
            (n[i] = n[i - 1]), (n[i] += a[i - 1].distanceTo(a[i]));
        }
        return this;
      },
      raycast: function (e, t) {
        var n = e.linePrecision,
          i = this.geometry,
          r = this.matrixWorld;
        if (
          (null === i.boundingSphere && i.computeBoundingSphere(),
          nr.copy(i.boundingSphere),
          nr.applyMatrix4(r),
          (nr.radius += n),
          !1 !== e.ray.intersectsSphere(nr))
        ) {
          er.getInverse(r), tr.copy(e.ray).applyMatrix4(er);
          var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            s = new d.a(),
            l = new d.a(),
            c = new d.a(),
            u = new d.a(),
            h = this && this.isLineSegments ? 2 : 1;
          if (i.isBufferGeometry) {
            var f = i.index,
              p = i.attributes.position.array;
            if (null !== f)
              for (var m = f.array, g = 0, v = m.length - 1; g < v; g += h) {
                var _ = m[g],
                  x = m[g + 1];
                if (
                  (s.fromArray(p, 3 * _),
                  l.fromArray(p, 3 * x),
                  !(tr.distanceSqToSegment(s, l, u, c) > o))
                )
                  u.applyMatrix4(this.matrixWorld),
                    (b = e.ray.origin.distanceTo(u)) < e.near ||
                      b > e.far ||
                      t.push({
                        distance: b,
                        point: c.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null,
                        faceIndex: null,
                        object: this,
                      });
              }
            else
              for (g = 0, v = p.length / 3 - 1; g < v; g += h) {
                if (
                  (s.fromArray(p, 3 * g),
                  l.fromArray(p, 3 * g + 3),
                  !(tr.distanceSqToSegment(s, l, u, c) > o))
                )
                  u.applyMatrix4(this.matrixWorld),
                    (b = e.ray.origin.distanceTo(u)) < e.near ||
                      b > e.far ||
                      t.push({
                        distance: b,
                        point: c.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null,
                        faceIndex: null,
                        object: this,
                      });
              }
          } else if (i.isGeometry) {
            var y = i.vertices,
              M = y.length;
            for (g = 0; g < M - 1; g += h) {
              var b;
              if (!(tr.distanceSqToSegment(y[g], y[g + 1], u, c) > o))
                u.applyMatrix4(this.matrixWorld),
                  (b = e.ray.origin.distanceTo(u)) < e.near ||
                    b > e.far ||
                    t.push({
                      distance: b,
                      point: c.clone().applyMatrix4(this.matrixWorld),
                      index: g,
                      face: null,
                      faceIndex: null,
                      object: this,
                    });
            }
          }
        }
      },
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this);
      },
    })),
      (rr.prototype = Object.assign(Object.create(ir.prototype), {
        constructor: rr,
        isLineLoop: !0,
      })),
      (ar.prototype = Object.create(Ee.prototype)),
      (ar.prototype.constructor = ar),
      (or.prototype = Object.create(je.prototype)),
      (or.prototype.constructor = or),
      (sr.prototype = Object.create(Ee.prototype)),
      (sr.prototype.constructor = sr),
      (lr.prototype = Object.create(je.prototype)),
      (lr.prototype.constructor = lr),
      (cr.prototype = Object.create(Ee.prototype)),
      (cr.prototype.constructor = cr),
      (ur.prototype = Object.create(lr.prototype)),
      (ur.prototype.constructor = ur);
    const hr =
        !!navigator.platform.match(/iPhone|iPod/) ||
        !!window.matchMedia("(max-width: 736px)").matches,
      dr = { physical: n(8).CustomMeshPhysicalShader },
      fr = document.querySelector(".canvas-container");
    function pr() {
      return fr.offsetHeight;
    }
    var mr = new ge(),
      gr = new Di(10, window.innerWidth / pr(), 10, 50);
    gr.position.z = 30;
    var vr = new (function (e) {
      var t =
          void 0 !== (e = e || {}).canvas
            ? e.canvas
            : document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              ),
        n = void 0 !== e.context ? e.context : null,
        r = void 0 !== e.alpha && e.alpha,
        a = void 0 === e.depth || e.depth,
        s = void 0 === e.stencil || e.stencil,
        l = void 0 !== e.antialias && e.antialias,
        c = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
        u = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
        f = void 0 !== e.powerPreference ? e.powerPreference : "default",
        p =
          void 0 !== e.failIfMajorPerformanceCaveat &&
          e.failIfMajorPerformanceCaveat,
        m = null,
        g = null;
      (this.domElement = t),
        (this.debug = { checkShaderErrors: !0 }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this.gammaFactor = 2),
        (this.outputEncoding = 3e3),
        (this.physicallyCorrectLights = !1),
        (this.toneMapping = 1),
        (this.toneMappingExposure = 1),
        (this.toneMappingWhitePoint = 1),
        (this.maxMorphTargets = 8),
        (this.maxMorphNormals = 4);
      var v,
        _,
        x,
        y,
        M,
        b,
        w,
        E,
        T,
        S,
        A,
        L,
        R,
        P,
        N,
        D,
        C,
        I,
        U = this,
        O = !1,
        z = null,
        B = 0,
        G = 0,
        V = null,
        H = null,
        k = -1,
        j = { geometry: null, program: null, wireframe: !1 },
        Y = null,
        Q = null,
        K = new J(),
        $ = new J(),
        ee = null,
        te = t.width,
        ne = t.height,
        ie = 1,
        re = null,
        ae = null,
        oe = new J(0, 0, te, ne),
        se = new J(0, 0, te, ne),
        le = !1,
        ce = new F(),
        ue = new Vt(),
        he = !1,
        de = !1,
        fe = new W(),
        pe = new d.a();
      function me() {
        return null === V ? ie : 1;
      }
      try {
        var xe = {
          alpha: r,
          depth: a,
          stencil: s,
          antialias: l,
          premultipliedAlpha: c,
          preserveDrawingBuffer: u,
          powerPreference: f,
          failIfMajorPerformanceCaveat: p,
          xrCompatible: !0,
        };
        if (
          (t.addEventListener("webglcontextlost", Ee, !1),
          t.addEventListener("webglcontextrestored", Te, !1),
          null ===
            (v =
              n ||
              t.getContext("webgl", xe) ||
              t.getContext("experimental-webgl", xe)))
        )
          throw null !== t.getContext("webgl")
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
        void 0 === v.getShaderPrecisionFormat &&
          (v.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
      } catch (e) {
        throw (console.error("THREE.WebGLRenderer: " + e.message), e);
      }
      function ye() {
        (_ = new Ht(v)),
          !1 === (x = new Gt(v, _, e)).isWebGL2 &&
            (_.get("WEBGL_depth_texture"),
            _.get("OES_texture_float"),
            _.get("OES_texture_half_float"),
            _.get("OES_texture_half_float_linear"),
            _.get("OES_standard_derivatives"),
            _.get("OES_element_index_uint"),
            _.get("ANGLE_instanced_arrays")),
          _.get("OES_texture_float_linear"),
          (I = new Li(v, _, x)),
          (y = new Si(v, _, x)).scissor($.copy(se).multiplyScalar(ie).floor()),
          y.viewport(K.copy(oe).multiplyScalar(ie).floor()),
          (M = new jt(v)),
          (b = new hi()),
          (w = new Ai(v, _, y, b, x, I, M)),
          (E = new _e(v)),
          (T = new kt(v, E, M)),
          (S = new Yt(v, T, E, M)),
          (N = new qt(v)),
          (A = new ui(U, _, x)),
          (L = new mi()),
          (R = new Mi()),
          (P = new zt(U, y, S, c)),
          (D = new Bt(v, _, M, x)),
          (C = new Wt(v, _, M, x)),
          (M.programs = A.programs),
          (U.capabilities = x),
          (U.extensions = _),
          (U.properties = b),
          (U.renderLists = L),
          (U.state = y),
          (U.info = M);
      }
      ye();
      var Me = new Ui(U, v);
      this.xr = Me;
      var be = new Pi(U, v),
        we = new Ti(U, S, x.maxTextureSize);
      function Ee(e) {
        e.preventDefault(),
          console.log("THREE.WebGLRenderer: Context Lost."),
          (O = !0);
      }
      function Te() {
        console.log("THREE.WebGLRenderer: Context Restored."), (O = !1), ye();
      }
      function Se(e) {
        var t = e.target;
        t.removeEventListener("dispose", Se),
          (function (e) {
            Ae(e), b.remove(e);
          })(t);
      }
      function Ae(e) {
        var t = b.get(e).program;
        (e.program = void 0), void 0 !== t && A.releaseProgram(t);
      }
      (this.shadowMap = we),
        (this.getContext = function () {
          return v;
        }),
        (this.getContextAttributes = function () {
          return v.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          var e = _.get("WEBGL_lose_context");
          e && e.loseContext();
        }),
        (this.forceContextRestore = function () {
          var e = _.get("WEBGL_lose_context");
          e && e.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return ie;
        }),
        (this.setPixelRatio = function (e) {
          void 0 !== e && ((ie = e), this.setSize(te, ne, !1));
        }),
        (this.getSize = function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
              ),
              (e = new o.a())),
            e.set(te, ne)
          );
        }),
        (this.setSize = function (e, n, i) {
          Me.isPresenting
            ? console.warn(
                "THREE.WebGLRenderer: Can't change size while VR device is presenting."
              )
            : ((te = e),
              (ne = n),
              (t.width = Math.floor(e * ie)),
              (t.height = Math.floor(n * ie)),
              !1 !== i &&
                ((t.style.width = e + "px"), (t.style.height = n + "px")),
              this.setViewport(0, 0, e, n));
        }),
        (this.getDrawingBufferSize = function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
              ),
              (e = new o.a())),
            e.set(te * ie, ne * ie).floor()
          );
        }),
        (this.setDrawingBufferSize = function (e, n, i) {
          (te = e),
            (ne = n),
            (ie = i),
            (t.width = Math.floor(e * i)),
            (t.height = Math.floor(n * i)),
            this.setViewport(0, 0, e, n);
        }),
        (this.getCurrentViewport = function (e) {
          return (
            void 0 === e &&
              (console.warn(
                "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
              ),
              (e = new J())),
            e.copy(K)
          );
        }),
        (this.getViewport = function (e) {
          return e.copy(oe);
        }),
        (this.setViewport = function (e, t, n, i) {
          e.isVector4 ? oe.set(e.x, e.y, e.z, e.w) : oe.set(e, t, n, i),
            y.viewport(K.copy(oe).multiplyScalar(ie).floor());
        }),
        (this.getScissor = function (e) {
          return e.copy(se);
        }),
        (this.setScissor = function (e, t, n, i) {
          e.isVector4 ? se.set(e.x, e.y, e.z, e.w) : se.set(e, t, n, i),
            y.scissor($.copy(se).multiplyScalar(ie).floor());
        }),
        (this.getScissorTest = function () {
          return le;
        }),
        (this.setScissorTest = function (e) {
          y.setScissorTest((le = e));
        }),
        (this.setOpaqueSort = function (e) {
          re = e;
        }),
        (this.setTransparentSort = function (e) {
          ae = e;
        }),
        (this.getClearColor = function () {
          return P.getClearColor();
        }),
        (this.setClearColor = function () {
          P.setClearColor.apply(P, arguments);
        }),
        (this.getClearAlpha = function () {
          return P.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          P.setClearAlpha.apply(P, arguments);
        }),
        (this.clear = function (e, t, n) {
          var i = 0;
          (void 0 === e || e) && (i |= v.COLOR_BUFFER_BIT),
            (void 0 === t || t) && (i |= v.DEPTH_BUFFER_BIT),
            (void 0 === n || n) && (i |= v.STENCIL_BUFFER_BIT),
            v.clear(i);
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.dispose = function () {
          t.removeEventListener("webglcontextlost", Ee, !1),
            t.removeEventListener("webglcontextrestored", Te, !1),
            L.dispose(),
            R.dispose(),
            b.dispose(),
            S.dispose(),
            Me.dispose(),
            Pe.stop();
        }),
        (this.renderBufferImmediate = function (e, t) {
          y.initAttributes();
          var n = b.get(e);
          e.hasPositions && !n.position && (n.position = v.createBuffer()),
            e.hasNormals && !n.normal && (n.normal = v.createBuffer()),
            e.hasUvs && !n.uv && (n.uv = v.createBuffer()),
            e.hasColors && !n.color && (n.color = v.createBuffer());
          var i = t.getAttributes();
          e.hasPositions &&
            (v.bindBuffer(v.ARRAY_BUFFER, n.position),
            v.bufferData(v.ARRAY_BUFFER, e.positionArray, v.DYNAMIC_DRAW),
            y.enableAttribute(i.position),
            v.vertexAttribPointer(i.position, 3, v.FLOAT, !1, 0, 0)),
            e.hasNormals &&
              (v.bindBuffer(v.ARRAY_BUFFER, n.normal),
              v.bufferData(v.ARRAY_BUFFER, e.normalArray, v.DYNAMIC_DRAW),
              y.enableAttribute(i.normal),
              v.vertexAttribPointer(i.normal, 3, v.FLOAT, !1, 0, 0)),
            e.hasUvs &&
              (v.bindBuffer(v.ARRAY_BUFFER, n.uv),
              v.bufferData(v.ARRAY_BUFFER, e.uvArray, v.DYNAMIC_DRAW),
              y.enableAttribute(i.uv),
              v.vertexAttribPointer(i.uv, 2, v.FLOAT, !1, 0, 0)),
            e.hasColors &&
              (v.bindBuffer(v.ARRAY_BUFFER, n.color),
              v.bufferData(v.ARRAY_BUFFER, e.colorArray, v.DYNAMIC_DRAW),
              y.enableAttribute(i.color),
              v.vertexAttribPointer(i.color, 3, v.FLOAT, !1, 0, 0)),
            y.disableUnusedAttributes(),
            v.drawArrays(v.TRIANGLES, 0, e.count),
            (e.count = 0);
        });
      var Le = new ge();
      (this.renderBufferDirect = function (e, t, n, i, r, a) {
        null === t && (t = Le);
        var o = r.isMesh && r.matrixWorld.determinant() < 0,
          s = Ue(e, t, i, r);
        y.setMaterial(i, o);
        var l = !1;
        (j.geometry === n.id &&
          j.program === s.id &&
          j.wireframe === (!0 === i.wireframe)) ||
          ((j.geometry = n.id),
          (j.program = s.id),
          (j.wireframe = !0 === i.wireframe),
          (l = !0)),
          (i.morphTargets || i.morphNormals) &&
            (N.update(r, n, i, s), (l = !0));
        var c = n.index,
          u = n.attributes.position;
        if (null === c) {
          if (void 0 === u || 0 === u.count) return;
        } else if (0 === c.count) return;
        var h,
          d = 1;
        !0 === i.wireframe && ((c = T.getWireframeAttribute(n)), (d = 2));
        var f = D;
        null !== c && ((h = E.get(c)), (f = C).setIndex(h)),
          l &&
            (!(function (e, t, n, i) {
              if (
                !1 === x.isWebGL2 &&
                (e.isInstancedMesh || t.isInstancedBufferGeometry) &&
                null === _.get("ANGLE_instanced_arrays")
              )
                return;
              y.initAttributes();
              var r = t.attributes,
                a = i.getAttributes(),
                o = n.defaultAttributeValues;
              for (var s in a) {
                var l = a[s];
                if (l >= 0) {
                  var c = r[s];
                  if (void 0 !== c) {
                    var u = c.normalized,
                      h = c.itemSize;
                    if (void 0 === (b = E.get(c))) continue;
                    var d = b.buffer,
                      f = b.type,
                      p = b.bytesPerElement;
                    if (c.isInterleavedBufferAttribute) {
                      var m = c.data,
                        g = m.stride,
                        M = c.offset;
                      m && m.isInstancedInterleavedBuffer
                        ? (y.enableAttributeAndDivisor(l, m.meshPerAttribute),
                          void 0 === t.maxInstancedCount &&
                            (t.maxInstancedCount =
                              m.meshPerAttribute * m.count))
                        : y.enableAttribute(l),
                        v.bindBuffer(v.ARRAY_BUFFER, d),
                        v.vertexAttribPointer(l, h, f, u, g * p, M * p);
                    } else
                      c.isInstancedBufferAttribute
                        ? (y.enableAttributeAndDivisor(l, c.meshPerAttribute),
                          void 0 === t.maxInstancedCount &&
                            (t.maxInstancedCount =
                              c.meshPerAttribute * c.count))
                        : y.enableAttribute(l),
                        v.bindBuffer(v.ARRAY_BUFFER, d),
                        v.vertexAttribPointer(l, h, f, u, 0, 0);
                  } else if ("instanceMatrix" === s) {
                    var b;
                    if (void 0 === (b = E.get(e.instanceMatrix))) continue;
                    (d = b.buffer), (f = b.type);
                    y.enableAttributeAndDivisor(l + 0, 1),
                      y.enableAttributeAndDivisor(l + 1, 1),
                      y.enableAttributeAndDivisor(l + 2, 1),
                      y.enableAttributeAndDivisor(l + 3, 1),
                      v.bindBuffer(v.ARRAY_BUFFER, d),
                      v.vertexAttribPointer(l + 0, 4, f, !1, 64, 0),
                      v.vertexAttribPointer(l + 1, 4, f, !1, 64, 16),
                      v.vertexAttribPointer(l + 2, 4, f, !1, 64, 32),
                      v.vertexAttribPointer(l + 3, 4, f, !1, 64, 48);
                  } else if (void 0 !== o) {
                    var w = o[s];
                    if (void 0 !== w)
                      switch (w.length) {
                        case 2:
                          v.vertexAttrib2fv(l, w);
                          break;
                        case 3:
                          v.vertexAttrib3fv(l, w);
                          break;
                        case 4:
                          v.vertexAttrib4fv(l, w);
                          break;
                        default:
                          v.vertexAttrib1fv(l, w);
                      }
                  }
                }
              }
              y.disableUnusedAttributes();
            })(r, n, i, s),
            null !== c && v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, h.buffer));
        var p = null !== c ? c.count : u.count,
          m = n.drawRange.start * d,
          g = n.drawRange.count * d,
          M = null !== a ? a.start * d : 0,
          b = null !== a ? a.count * d : 1 / 0,
          w = Math.max(m, M),
          S = Math.min(p, m + g, M + b) - 1,
          A = Math.max(0, S - w + 1);
        if (0 !== A) {
          if (r.isMesh)
            !0 === i.wireframe
              ? (y.setLineWidth(i.wireframeLinewidth * me()),
                f.setMode(v.LINES))
              : f.setMode(v.TRIANGLES);
          else if (r.isLine) {
            var L = i.linewidth;
            void 0 === L && (L = 1),
              y.setLineWidth(L * me()),
              r.isLineSegments
                ? f.setMode(v.LINES)
                : r.isLineLoop
                ? f.setMode(v.LINE_LOOP)
                : f.setMode(v.LINE_STRIP);
          } else
            r.isPoints
              ? f.setMode(v.POINTS)
              : r.isSprite && f.setMode(v.TRIANGLES);
          r.isInstancedMesh
            ? f.renderInstances(n, w, A, r.count)
            : n.isInstancedBufferGeometry
            ? f.renderInstances(n, w, A, n.maxInstancedCount)
            : f.render(w, A);
        }
      }),
        (this.compile = function (e, t) {
          (g = R.get(e, t)).init(),
            e.traverse(function (e) {
              e.isLight && (g.pushLight(e), e.castShadow && g.pushShadow(e));
            }),
            g.setupLights(t),
            e.traverse(function (t) {
              if (t.material)
                if (Array.isArray(t.material))
                  for (var n = 0; n < t.material.length; n++)
                    Ie(t.material[n], e, t);
                else Ie(t.material, e, t);
            });
        });
      var Re = null,
        Pe = new ve();
      function Ne(e, t, n, i) {
        if (!1 !== e.visible) {
          if (e.layers.test(t.layers))
            if (e.isGroup) n = e.renderOrder;
            else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
            else if (e.isLight) g.pushLight(e), e.castShadow && g.pushShadow(e);
            else if (e.isSprite) {
              if (!e.frustumCulled || ce.intersectsSprite(e)) {
                i && pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe);
                var r = S.update(e);
                (a = e.material).visible && m.push(e, r, a, n, pe.z, null);
              }
            } else if (e.isImmediateRenderObject)
              i && pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe),
                m.push(e, null, e.material, n, pe.z, null);
            else if (
              (e.isMesh || e.isLine || e.isPoints) &&
              (e.isSkinnedMesh &&
                e.skeleton.frame !== M.render.frame &&
                (e.skeleton.update(), (e.skeleton.frame = M.render.frame)),
              !e.frustumCulled || ce.intersectsObject(e))
            ) {
              i && pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe);
              r = S.update(e);
              var a = e.material;
              if (Array.isArray(a))
                for (var o = r.groups, s = 0, l = o.length; s < l; s++) {
                  var c = o[s],
                    u = a[c.materialIndex];
                  u && u.visible && m.push(e, r, u, n, pe.z, c);
                }
              else a.visible && m.push(e, r, a, n, pe.z, null);
            }
          var h = e.children;
          for (s = 0, l = h.length; s < l; s++) Ne(h[s], t, n, i);
        }
      }
      function De(e, t, n, i) {
        for (var r = 0, a = e.length; r < a; r++) {
          var o = e[r],
            s = o.object,
            l = o.geometry,
            c = void 0 === i ? o.material : i,
            u = o.group;
          if (n.isArrayCamera)
            if (((Q = n), Me.enabled && be.isAvailable())) Ce(s, t, n, l, c, u);
            else
              for (var h = n.cameras, d = 0, f = h.length; d < f; d++) {
                var p = h[d];
                s.layers.test(p.layers) &&
                  (y.viewport(K.copy(p.viewport)),
                  g.setupLights(p),
                  Ce(s, t, p, l, c, u));
              }
          else (Q = null), Ce(s, t, n, l, c, u);
        }
      }
      function Ce(e, t, n, i, r, a) {
        if (
          (e.onBeforeRender(U, t, n, i, r, a),
          (g = R.get(t, Q || n)),
          e.modelViewMatrix.multiplyMatrices(
            n.matrixWorldInverse,
            e.matrixWorld
          ),
          e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
          e.isImmediateRenderObject)
        ) {
          var o = Ue(n, t, r, e);
          y.setMaterial(r),
            (j.geometry = null),
            (j.program = null),
            (j.wireframe = !1),
            (function (e, t) {
              e.render(function (e) {
                U.renderBufferImmediate(e, t);
              });
            })(e, o);
        } else U.renderBufferDirect(n, t, i, r, e, a);
        e.onAfterRender(U, t, n, i, r, a), (g = R.get(t, Q || n));
      }
      function Ie(e, t, n) {
        var i = b.get(e),
          r = g.state.lights,
          a = g.state.shadowsArray,
          o = r.state.version,
          s = A.getParameters(
            e,
            r.state,
            a,
            t,
            ue.numPlanes,
            ue.numIntersection,
            n
          ),
          l = A.getProgramCacheKey(e, s),
          c = i.program,
          u = !0;
        if (void 0 === c) e.addEventListener("dispose", Se);
        else if (c.cacheKey !== l) Ae(e);
        else if (i.lightsStateVersion !== o)
          (i.lightsStateVersion = o), (u = !1);
        else {
          if (void 0 !== s.shaderID) return;
          u = !1;
        }
        if (u) {
          if (s.shaderID) {
            var h = Z[s.shaderID];
            i.shader = {
              name: e.type,
              uniforms: Object(X.b)(h.uniforms),
              vertexShader: h.vertexShader,
              fragmentShader: h.fragmentShader,
            };
          } else
            i.shader = {
              name: e.type,
              uniforms: e.uniforms,
              vertexShader: e.vertexShader,
              fragmentShader: e.fragmentShader,
            };
          e.onBeforeCompile(i.shader, U),
            (l = A.getProgramCacheKey(e, s)),
            (c = A.acquireProgram(e, i.shader, s, l)),
            (i.program = c),
            (i.environment = e.isMeshStandardMaterial ? t.environment : null),
            (i.outputEncoding = U.outputEncoding),
            (e.program = c);
        }
        var d = c.getAttributes();
        if (e.morphTargets) {
          e.numSupportedMorphTargets = 0;
          for (var f = 0; f < U.maxMorphTargets; f++)
            d["morphTarget" + f] >= 0 && e.numSupportedMorphTargets++;
        }
        if (e.morphNormals) {
          e.numSupportedMorphNormals = 0;
          for (f = 0; f < U.maxMorphNormals; f++)
            d["morphNormal" + f] >= 0 && e.numSupportedMorphNormals++;
        }
        var p = i.shader.uniforms;
        ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
          ((i.numClippingPlanes = ue.numPlanes),
          (i.numIntersection = ue.numIntersection),
          (p.clippingPlanes = ue.uniform)),
          (i.fog = t.fog),
          (i.needsLights = (function (e) {
            return (
              e.isMeshLambertMaterial ||
              e.isMeshToonMaterial ||
              e.isMeshPhongMaterial ||
              e.isMeshStandardMaterial ||
              e.isShadowMaterial ||
              (e.isShaderMaterial && !0 === e.lights)
            );
          })(e)),
          (i.lightsStateVersion = o),
          i.needsLights &&
            ((p.ambientLightColor.value = r.state.ambient),
            (p.lightProbe.value = r.state.probe),
            (p.directionalLights.value = r.state.directional),
            (p.spotLights.value = r.state.spot),
            (p.rectAreaLights.value = r.state.rectArea),
            (p.pointLights.value = r.state.point),
            (p.hemisphereLights.value = r.state.hemi),
            (p.directionalShadowMap.value = r.state.directionalShadowMap),
            (p.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
            (p.spotShadowMap.value = r.state.spotShadowMap),
            (p.spotShadowMatrix.value = r.state.spotShadowMatrix),
            (p.pointShadowMap.value = r.state.pointShadowMap),
            (p.pointShadowMatrix.value = r.state.pointShadowMatrix));
        var m = i.program.getUniforms(),
          v = Xn.seqWithValue(m.seq, p);
        i.uniformsList = v;
      }
      function Ue(e, t, n, r) {
        w.resetTextureUnits();
        var a = t.fog,
          o = n.isMeshStandardMaterial ? t.environment : null,
          s = b.get(n),
          l = g.state.lights;
        if (he && (de || e !== Y)) {
          var c = e === Y && n.id === k;
          ue.setState(
            n.clippingPlanes,
            n.clipIntersection,
            n.clipShadows,
            e,
            s,
            c
          );
        }
        n.version === s.__version &&
          (void 0 === s.program
            ? (n.needsUpdate = !0)
            : n.fog && s.fog !== a
            ? (n.needsUpdate = !0)
            : s.environment !== o
            ? (n.needsUpdate = !0)
            : s.needsLights && s.lightsStateVersion !== l.state.version
            ? (n.needsUpdate = !0)
            : void 0 === s.numClippingPlanes ||
              (s.numClippingPlanes === ue.numPlanes &&
                s.numIntersection === ue.numIntersection)
            ? s.outputEncoding !== U.outputEncoding && (n.needsUpdate = !0)
            : (n.needsUpdate = !0)),
          n.version !== s.__version && (Ie(n, t, r), (s.__version = n.version));
        var u,
          d,
          f = !1,
          p = !1,
          m = !1,
          _ = s.program,
          M = _.getUniforms(),
          E = s.shader.uniforms;
        if (
          (y.useProgram(_.program) && ((f = !0), (p = !0), (m = !0)),
          n.id !== k && ((k = n.id), (p = !0)),
          f || Y !== e)
        ) {
          if (
            (_.numMultiviewViews > 0
              ? be.updateCameraProjectionMatricesUniform(e, M)
              : M.setValue(v, "projectionMatrix", e.projectionMatrix),
            x.logarithmicDepthBuffer &&
              M.setValue(
                v,
                "logDepthBufFC",
                2 / (Math.log(e.far + 1) / Math.LN2)
              ),
            Y !== e && ((Y = e), (p = !0), (m = !0)),
            n.isShaderMaterial ||
              n.isMeshPhongMaterial ||
              n.isMeshToonMaterial ||
              n.isMeshStandardMaterial ||
              n.envMap)
          ) {
            var T = M.map.cameraPosition;
            void 0 !== T &&
              T.setValue(v, pe.setFromMatrixPosition(e.matrixWorld));
          }
          (n.isMeshPhongMaterial ||
            n.isMeshToonMaterial ||
            n.isMeshLambertMaterial ||
            n.isMeshBasicMaterial ||
            n.isMeshStandardMaterial ||
            n.isShaderMaterial) &&
            M.setValue(v, "isOrthographic", !0 === e.isOrthographicCamera),
            (n.isMeshPhongMaterial ||
              n.isMeshToonMaterial ||
              n.isMeshLambertMaterial ||
              n.isMeshBasicMaterial ||
              n.isMeshStandardMaterial ||
              n.isShaderMaterial ||
              n.skinning) &&
              (_.numMultiviewViews > 0
                ? be.updateCameraViewMatricesUniform(e, M)
                : M.setValue(v, "viewMatrix", e.matrixWorldInverse));
        }
        if (n.skinning) {
          M.setOptional(v, r, "bindMatrix"),
            M.setOptional(v, r, "bindMatrixInverse");
          var S = r.skeleton;
          if (S) {
            var A = S.bones;
            if (x.floatVertexTextures) {
              if (void 0 === S.boneTexture) {
                var L = Math.sqrt(4 * A.length);
                (L = i.a.ceilPowerOfTwo(L)), (L = Math.max(L, 4));
                var R = new Float32Array(L * L * 4);
                R.set(S.boneMatrices);
                var P = new h(R, L, L, 1023, 1015);
                (S.boneMatrices = R),
                  (S.boneTexture = P),
                  (S.boneTextureSize = L);
              }
              M.setValue(v, "boneTexture", S.boneTexture, w),
                M.setValue(v, "boneTextureSize", S.boneTextureSize);
            } else M.setOptional(v, S, "boneMatrices");
          }
        }
        return (
          (p || s.receiveShadow !== r.receiveShadow) &&
            ((s.receiveShadow = r.receiveShadow),
            M.setValue(v, "receiveShadow", r.receiveShadow)),
          p &&
            (M.setValue(v, "toneMappingExposure", U.toneMappingExposure),
            M.setValue(v, "toneMappingWhitePoint", U.toneMappingWhitePoint),
            s.needsLights &&
              ((d = m),
              ((u = E).ambientLightColor.needsUpdate = d),
              (u.lightProbe.needsUpdate = d),
              (u.directionalLights.needsUpdate = d),
              (u.pointLights.needsUpdate = d),
              (u.spotLights.needsUpdate = d),
              (u.rectAreaLights.needsUpdate = d),
              (u.hemisphereLights.needsUpdate = d)),
            a &&
              n.fog &&
              (function (e, t) {
                e.fogColor.value.copy(t.color),
                  t.isFog
                    ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
                    : t.isFogExp2 && (e.fogDensity.value = t.density);
              })(E, a),
            n.isMeshBasicMaterial
              ? Fe(E, n)
              : n.isMeshLambertMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                })(E, n))
              : n.isMeshToonMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  e.specular.value.copy(t.specular),
                    (e.shininess.value = Math.max(t.shininess, 1e-4)),
                    t.gradientMap && (e.gradientMap.value = t.gradientMap);
                  t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                  t.bumpMap &&
                    ((e.bumpMap.value = t.bumpMap),
                    (e.bumpScale.value = t.bumpScale),
                    1 === t.side && (e.bumpScale.value *= -1));
                  t.normalMap &&
                    ((e.normalMap.value = t.normalMap),
                    e.normalScale.value.copy(t.normalScale),
                    1 === t.side && e.normalScale.value.negate());
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                })(E, n))
              : n.isMeshPhongMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  e.specular.value.copy(t.specular),
                    (e.shininess.value = Math.max(t.shininess, 1e-4)),
                    t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                  t.bumpMap &&
                    ((e.bumpMap.value = t.bumpMap),
                    (e.bumpScale.value = t.bumpScale),
                    1 === t.side && (e.bumpScale.value *= -1));
                  t.normalMap &&
                    ((e.normalMap.value = t.normalMap),
                    e.normalScale.value.copy(t.normalScale),
                    1 === t.side && e.normalScale.value.negate());
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                })(E, n))
              : n.isMeshStandardMaterial
              ? (Fe(E, n, o),
                n.isMeshPhysicalMaterial
                  ? (function (e, t, n) {
                      Oe(e, t, n),
                        (e.reflectivity.value = t.reflectivity),
                        (e.clearcoat.value = t.clearcoat),
                        (e.clearcoatRoughness.value = t.clearcoatRoughness),
                        t.sheen && e.sheen.value.copy(t.sheen);
                      t.clearcoatNormalMap &&
                        (e.clearcoatNormalScale.value.copy(
                          t.clearcoatNormalScale
                        ),
                        (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                        1 === t.side && e.clearcoatNormalScale.value.negate());
                      e.transparency.value = t.transparency;
                    })(E, n, o)
                  : Oe(E, n, o))
              : n.isMeshMatcapMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  t.matcap && (e.matcap.value = t.matcap);
                  t.bumpMap &&
                    ((e.bumpMap.value = t.bumpMap),
                    (e.bumpScale.value = t.bumpScale),
                    1 === t.side && (e.bumpScale.value *= -1));
                  t.normalMap &&
                    ((e.normalMap.value = t.normalMap),
                    e.normalScale.value.copy(t.normalScale),
                    1 === t.side && e.normalScale.value.negate());
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                })(E, n))
              : n.isMeshDepthMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                })(E, n))
              : n.isMeshDistanceMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                  e.referencePosition.value.copy(t.referencePosition),
                    (e.nearDistance.value = t.nearDistance),
                    (e.farDistance.value = t.farDistance);
                })(E, n))
              : n.isMeshNormalMaterial
              ? (Fe(E, n),
                (function (e, t) {
                  t.bumpMap &&
                    ((e.bumpMap.value = t.bumpMap),
                    (e.bumpScale.value = t.bumpScale),
                    1 === t.side && (e.bumpScale.value *= -1));
                  t.normalMap &&
                    ((e.normalMap.value = t.normalMap),
                    e.normalScale.value.copy(t.normalScale),
                    1 === t.side && e.normalScale.value.negate());
                  t.displacementMap &&
                    ((e.displacementMap.value = t.displacementMap),
                    (e.displacementScale.value = t.displacementScale),
                    (e.displacementBias.value = t.displacementBias));
                })(E, n))
              : n.isLineBasicMaterial
              ? ((function (e, t) {
                  e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
                })(E, n),
                n.isLineDashedMaterial &&
                  (function (e, t) {
                    (e.dashSize.value = t.dashSize),
                      (e.totalSize.value = t.dashSize + t.gapSize),
                      (e.scale.value = t.scale);
                  })(E, n))
              : n.isPointsMaterial
              ? (function (e, t) {
                  e.diffuse.value.copy(t.color),
                    (e.opacity.value = t.opacity),
                    (e.size.value = t.size * ie),
                    (e.scale.value = 0.5 * ne),
                    t.map && (e.map.value = t.map);
                  t.alphaMap && (e.alphaMap.value = t.alphaMap);
                  var n;
                  t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap);
                  void 0 !== n &&
                    (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    e.uvTransform.value.copy(n.matrix));
                })(E, n)
              : n.isSpriteMaterial
              ? (function (e, t) {
                  e.diffuse.value.copy(t.color),
                    (e.opacity.value = t.opacity),
                    (e.rotation.value = t.rotation),
                    t.map && (e.map.value = t.map);
                  t.alphaMap && (e.alphaMap.value = t.alphaMap);
                  var n;
                  t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap);
                  void 0 !== n &&
                    (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    e.uvTransform.value.copy(n.matrix));
                })(E, n)
              : n.isShadowMaterial &&
                (E.color.value.copy(n.color), (E.opacity.value = n.opacity)),
            void 0 !== E.ltc_1 && (E.ltc_1.value = q.a.LTC_1),
            void 0 !== E.ltc_2 && (E.ltc_2.value = q.a.LTC_2),
            Xn.upload(v, s.uniformsList, E, w),
            n.isShaderMaterial && (n.uniformsNeedUpdate = !1)),
          n.isShaderMaterial &&
            !0 === n.uniformsNeedUpdate &&
            (Xn.upload(v, s.uniformsList, E, w), (n.uniformsNeedUpdate = !1)),
          n.isSpriteMaterial && M.setValue(v, "center", r.center),
          _.numMultiviewViews > 0
            ? be.updateObjectMatricesUniforms(r, e, M)
            : (M.setValue(v, "modelViewMatrix", r.modelViewMatrix),
              M.setValue(v, "normalMatrix", r.normalMatrix)),
          M.setValue(v, "modelMatrix", r.matrixWorld),
          _
        );
      }
      function Fe(e, t, n) {
        (e.opacity.value = t.opacity),
          t.color && e.diffuse.value.copy(t.color),
          t.emissive &&
            e.emissive.value
              .copy(t.emissive)
              .multiplyScalar(t.emissiveIntensity),
          t.map && (e.map.value = t.map),
          t.alphaMap && (e.alphaMap.value = t.alphaMap),
          t.specularMap && (e.specularMap.value = t.specularMap);
        var i,
          r,
          a = t.envMap || n;
        a &&
          ((e.envMap.value = a),
          (e.flipEnvMap.value = a.isCubeTexture ? -1 : 1),
          (e.reflectivity.value = t.reflectivity),
          (e.refractionRatio.value = t.refractionRatio),
          (e.maxMipLevel.value = b.get(a).__maxMipLevel)),
          t.lightMap &&
            ((e.lightMap.value = t.lightMap),
            (e.lightMapIntensity.value = t.lightMapIntensity)),
          t.aoMap &&
            ((e.aoMap.value = t.aoMap),
            (e.aoMapIntensity.value = t.aoMapIntensity)),
          t.map
            ? (i = t.map)
            : t.specularMap
            ? (i = t.specularMap)
            : t.displacementMap
            ? (i = t.displacementMap)
            : t.normalMap
            ? (i = t.normalMap)
            : t.bumpMap
            ? (i = t.bumpMap)
            : t.roughnessMap
            ? (i = t.roughnessMap)
            : t.metalnessMap
            ? (i = t.metalnessMap)
            : t.alphaMap
            ? (i = t.alphaMap)
            : t.emissiveMap && (i = t.emissiveMap),
          void 0 !== i &&
            (i.isWebGLRenderTarget && (i = i.texture),
            !0 === i.matrixAutoUpdate && i.updateMatrix(),
            e.uvTransform.value.copy(i.matrix)),
          t.aoMap ? (r = t.aoMap) : t.lightMap && (r = t.lightMap),
          void 0 !== r &&
            (r.isWebGLRenderTarget && (r = r.texture),
            !0 === r.matrixAutoUpdate && r.updateMatrix(),
            e.uv2Transform.value.copy(r.matrix));
      }
      function Oe(e, t, n) {
        (e.roughness.value = t.roughness),
          (e.metalness.value = t.metalness),
          t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
          t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
          t.bumpMap &&
            ((e.bumpMap.value = t.bumpMap),
            (e.bumpScale.value = t.bumpScale),
            1 === t.side && (e.bumpScale.value *= -1)),
          t.normalMap &&
            ((e.normalMap.value = t.normalMap),
            e.normalScale.value.copy(t.normalScale),
            1 === t.side && e.normalScale.value.negate()),
          t.displacementMap &&
            ((e.displacementMap.value = t.displacementMap),
            (e.displacementScale.value = t.displacementScale),
            (e.displacementBias.value = t.displacementBias)),
          (t.envMap || n) && (e.envMapIntensity.value = t.envMapIntensity);
      }
      Pe.setAnimationLoop(function (e) {
        Me.isPresenting || (Re && Re(e));
      }),
        "undefined" != typeof window && Pe.setContext(window),
        (this.setAnimationLoop = function (e) {
          (Re = e), Me.setAnimationLoop(e), Pe.start();
        }),
        (this.render = function (e, t) {
          var n, i;
          if (
            (void 0 !== arguments[2] &&
              (console.warn(
                "THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
              ),
              (n = arguments[2])),
            void 0 !== arguments[3] &&
              (console.warn(
                "THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
              ),
              (i = arguments[3])),
            t && t.isCamera)
          ) {
            if (!O) {
              (j.geometry = null),
                (j.program = null),
                (j.wireframe = !1),
                (k = -1),
                (Y = null),
                !0 === e.autoUpdate && e.updateMatrixWorld(),
                null === t.parent && t.updateMatrixWorld(),
                Me.enabled && Me.isPresenting && (t = Me.getCamera(t)),
                (g = R.get(e, t)).init(),
                e.onBeforeRender(U, e, t, n || V),
                fe.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
                ce.setFromMatrix(fe),
                (de = this.localClippingEnabled),
                (he = ue.init(this.clippingPlanes, de, t)),
                (m = L.get(e, t)).init(),
                Ne(e, t, 0, U.sortObjects),
                !0 === U.sortObjects && m.sort(re, ae),
                he && ue.beginShadows();
              var r = g.state.shadowsArray;
              we.render(r, e, t),
                g.setupLights(t),
                he && ue.endShadows(),
                this.info.autoReset && this.info.reset(),
                void 0 !== n && this.setRenderTarget(n),
                Me.enabled && be.isAvailable() && be.attachCamera(t),
                P.render(m, e, t, i);
              var a = m.opaque,
                o = m.transparent;
              if (e.overrideMaterial) {
                var s = e.overrideMaterial;
                a.length && De(a, e, t, s), o.length && De(o, e, t, s);
              } else a.length && De(a, e, t), o.length && De(o, e, t);
              e.onAfterRender(U, e, t),
                null !== V &&
                  (w.updateRenderTargetMipmap(V),
                  w.updateMultisampleRenderTarget(V)),
                y.buffers.depth.setTest(!0),
                y.buffers.depth.setMask(!0),
                y.buffers.color.setMask(!0),
                y.setPolygonOffset(!1),
                Me.enabled && be.isAvailable() && be.detachCamera(t),
                (m = null),
                (g = null);
            }
          } else
            console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
            );
        }),
        (this.setFramebuffer = function (e) {
          z !== e && null === V && v.bindFramebuffer(v.FRAMEBUFFER, e), (z = e);
        }),
        (this.getActiveCubeFace = function () {
          return B;
        }),
        (this.getActiveMipmapLevel = function () {
          return G;
        }),
        (this.getRenderTarget = function () {
          return V;
        }),
        (this.setRenderTarget = function (e, t, n) {
          (V = e),
            (B = t),
            (G = n),
            e &&
              void 0 === b.get(e).__webglFramebuffer &&
              w.setupRenderTarget(e);
          var i = z,
            r = !1;
          if (e) {
            var a = b.get(e).__webglFramebuffer;
            e.isWebGLRenderTargetCube
              ? ((i = a[t || 0]), (r = !0))
              : (i = e.isWebGLMultisampleRenderTarget
                  ? b.get(e).__webglMultisampledFramebuffer
                  : a),
              K.copy(e.viewport),
              $.copy(e.scissor),
              (ee = e.scissorTest);
          } else
            K.copy(oe).multiplyScalar(ie).floor(),
              $.copy(se).multiplyScalar(ie).floor(),
              (ee = le);
          if (
            (H !== i && (v.bindFramebuffer(v.FRAMEBUFFER, i), (H = i)),
            y.viewport(K),
            y.scissor($),
            y.setScissorTest(ee),
            r)
          ) {
            var o = b.get(e.texture);
            v.framebufferTexture2D(
              v.FRAMEBUFFER,
              v.COLOR_ATTACHMENT0,
              v.TEXTURE_CUBE_MAP_POSITIVE_X + (t || 0),
              o.__webglTexture,
              n || 0
            );
          }
        }),
        (this.readRenderTargetPixels = function (e, t, n, i, r, a, o) {
          if (e && e.isWebGLRenderTarget) {
            var s = b.get(e).__webglFramebuffer;
            if ((e.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]), s)) {
              var l = !1;
              s !== H && (v.bindFramebuffer(v.FRAMEBUFFER, s), (l = !0));
              try {
                var c = e.texture,
                  u = c.format,
                  h = c.type;
                if (
                  1023 !== u &&
                  I.convert(u) !==
                    v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)
                )
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  );
                if (
                  !(
                    1009 === h ||
                    I.convert(h) ===
                      v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE) ||
                    (1015 === h &&
                      (x.isWebGL2 ||
                        _.get("OES_texture_float") ||
                        _.get("WEBGL_color_buffer_float"))) ||
                    (1016 === h &&
                      (x.isWebGL2
                        ? _.get("EXT_color_buffer_float")
                        : _.get("EXT_color_buffer_half_float")))
                  )
                )
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                v.checkFramebufferStatus(v.FRAMEBUFFER) ===
                v.FRAMEBUFFER_COMPLETE
                  ? t >= 0 &&
                    t <= e.width - i &&
                    n >= 0 &&
                    n <= e.height - r &&
                    v.readPixels(t, n, i, r, I.convert(u), I.convert(h), a)
                  : console.error(
                      "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                    );
              } finally {
                l && v.bindFramebuffer(v.FRAMEBUFFER, H);
              }
            }
          } else
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
            );
        }),
        (this.copyFramebufferToTexture = function (e, t, n) {
          void 0 === n && (n = 0);
          var i = Math.pow(2, -n),
            r = Math.floor(t.image.width * i),
            a = Math.floor(t.image.height * i),
            o = I.convert(t.format);
          w.setTexture2D(t, 0),
            v.copyTexImage2D(v.TEXTURE_2D, n, o, e.x, e.y, r, a, 0),
            y.unbindTexture();
        }),
        (this.copyTextureToTexture = function (e, t, n, i) {
          var r = t.image.width,
            a = t.image.height,
            o = I.convert(n.format),
            s = I.convert(n.type);
          w.setTexture2D(n, 0),
            t.isDataTexture
              ? v.texSubImage2D(
                  v.TEXTURE_2D,
                  i || 0,
                  e.x,
                  e.y,
                  r,
                  a,
                  o,
                  s,
                  t.image.data
                )
              : v.texSubImage2D(v.TEXTURE_2D, i || 0, e.x, e.y, o, s, t.image),
            y.unbindTexture();
        }),
        (this.initTexture = function (e) {
          w.setTexture2D(e, 0), y.unbindTexture();
        }),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    })({
      alpha: !0,
      premultipliedAlpha: !1,
      powerPreference: "high-performance",
      precision: "lowp",
      depth: !1,
      antialias: !0,
    });
    vr.setSize(window.innerWidth, pr()),
      (vr.shadowMap.enabled = !0),
      (vr.shadowMap.type = 0),
      (vr.toneMapping = 2),
      (vr.toneMappingExposure = 3),
      (vr.physicallyCorrectLights = !0),
      (
        vr.domElement.getContext("webgl") ||
        vr.domElement.getContext("experimental-webgl")
      ).getExtension("OES_standard_derivatives"),
      fr.appendChild(vr.domElement);
    const _r = new Worker("./js/worker.js"),
      xr = Math.round(
        ((yr = window.innerWidth),
        (br = 5) + ((yr - (Mr = 300)) * (30 - br)) / (2e3 - Mr))
      );
    var yr, Mr, br;
    let wr,
      Er = {
        positions: new Float32Array(3 * xr),
        quaternions: new Float32Array(4 * xr),
        scales: new Float32Array(4 * xr),
      },
      Tr = {
        positions: new Float32Array(3 * xr),
        quaternions: new Float32Array(4 * xr),
        scales: new Float32Array(4 * xr),
      },
      Sr = !1,
      Ar = !0;
    function Lr() {
      Ar &&
        ((Ar = !1),
        (wr = Date.now()),
        _r.postMessage(
          {
            create: Sr,
            N: Pr.length,
            dt: 1 / 60,
            positions: Er.positions,
            quaternions: Er.quaternions,
            scales: Er.scales,
            mouse: Jr,
          },
          [Er.positions.buffer, Er.quaternions.buffer, Er.scales.buffer]
        ),
        (Sr = !1));
    }
    _r.onmessage = function (e) {
      (Er.positions = e.data.positions),
        (Er.quaternions = e.data.quaternions),
        (Er.scales = e.data.scales),
        Tr.positions.set(Er.positions),
        Tr.quaternions.set(Er.quaternions),
        Tr.scales.set(Er.scales),
        (Ar = !0),
        setTimeout(Lr, Math.max((1 / 60) * 1e3 - (Date.now() - wr), 0));
    };
    const Rr = new me();
    mr.add(Rr);
    let Pr = [];
    var Nr = new Fi(),
      Dr = new ur(1, 3);
    Nr.copy(Dr);
    let Cr = new Oi(
      new Float32Array(xr).map((e) => Math.random()),
      1
    );
    Nr.setAttribute("instanceRandom", Cr);
    let Ir = new Oi(
      new Float32Array(xr).map((e, t) => Tr.scales[4 * t + 4]),
      1
    ).setUsage(35048);
    Nr.setAttribute("instanceScale", Ir);
    let Ur = new (class {
        constructor(e) {
          (this.uniforms = X.a.clone(dr.physical.uniforms)),
            (this.vertex = dr.physical.vertexShader),
            (this.fragment = dr.physical.fragmentShader),
            (this.uniforms.uTime = { value: 1 }),
            (this.uniforms.uRandom = { value: Math.random() }),
            (this.uniforms.uScale = { value: 0.001 }),
            (this.material = new Qe({
              uniforms: this.uniforms,
              vertexShader: this.vertex,
              fragmentShader: this.fragment,
              lights: !0,
            }));
        }
        update(e) {
          (this.uniforms.uTime.value += 0.01),
            (this.uniforms.uScale.value = e.scale.x * Math.max(1 - Qr, 0.25)),
            e.scale.x <= 0.001 && (this.uniforms.uRandom.value = Math.random());
        }
      })(1).material,
      Fr = new Hi(Nr, Ur, xr);
    Rr.add(Fr), (Fr.castShadow = !0), (Fr.receiveShadow = !0);
    let Or = new ar(1, 10);
    Or.vertices.shift();
    let zr = new rr(
      Or,
      new Qi({
        color: getComputedStyle(document.documentElement)
          .getPropertyValue("--c-primary")
          .trim(),
      })
    );
    hr || mr.add(zr);
    var Br = new Ji(16777215, 3);
    Br.color.setHSL(0.1, 1, 0.95),
      Br.position.set(-1, 1.75, 1),
      Br.position.multiplyScalar(2),
      mr.add(Br),
      (Br.castShadow = !0),
      (Br.shadow.mapSize.width = Br.shadow.mapSize.height = 2048);
    (Br.shadow.camera.left = -4),
      (Br.shadow.camera.right = 4),
      (Br.shadow.camera.top = 4),
      (Br.shadow.camera.bottom = -4),
      (Br.shadow.camera.far = 8);
    let Gr = 0;
    var Vr = document.documentElement,
      Hr = Vr.clientHeight,
      kr = Vr.scrollHeight;
    const Wr = new C(new d.a(0, 0, 1), 0),
      jr = new ki();
    let Xr = new o.a(0, -2),
      qr = new o.a(0, 0),
      Yr = new d.a(),
      Zr = !1,
      Jr = new d.a();
    var Qr = 0,
      Kr = Vr.scrollTop / (kr - Hr),
      $r = new W();
    let ea = new d.a(),
      ta = new Q.a(),
      na = new d.a(),
      ia = 0;
    var ra = function () {
      (ia += 0.01),
        Gr++,
        requestAnimationFrame(ra),
        Pr.length < xr && Gr > 5 && ((Sr = !0), Pr.push(1), (Gr = 0)),
        Pr.forEach((e, t) => {
          ea.set(
            Tr.positions[3 * t + 0],
            Tr.positions[3 * t + 1],
            Tr.positions[3 * t + 2]
          ),
            ta.set(
              Tr.quaternions[4 * t + 0],
              Tr.quaternions[4 * t + 1],
              Tr.quaternions[4 * t + 2],
              Tr.quaternions[4 * t + 3]
            ),
            na.setScalar(Tr.scales[4 * t + 0]),
            $r.compose(ea, ta, na),
            Fr.setMatrixAt(t, $r),
            Ir.setX(t, Tr.scales[4 * t + 3] / 4);
        }),
        (Ir.needsUpdate = !0),
        Nr.setAttribute("instanceScale", Ir),
        (Fr.instanceMatrix.needsUpdate = !0),
        (Kr = Vr.scrollTop / (kr - Hr)),
        (Qr += 0.01 * (Kr - Qr)),
        hr && qr.set(0.25 * Math.cos(ia * Math.PI), 0.5 * Math.cos(ia)),
        Xr.lerp(qr, 0.15),
        jr.setFromCamera(Xr, gr),
        jr.ray.intersectPlane(Wr, Jr),
        zr.position.copy(Jr),
        Yr.setScalar(Zr ? 0.25 + 0.5 * Xr.distanceToSquared(qr) : 0.1),
        zr.rotateZ(-0.2 * zr.scale.x),
        zr.scale.lerp(Yr, 0.06),
        vr.render(mr, gr);
    };
    function aa(e) {
      if (hr) return qr.set(0, 0), e;
      (Zr = !("a" != e.target.nodeName.toLowerCase())),
        qr.set(
          (e.clientX / window.innerWidth) * 2 - 1,
          (-e.clientY / pr()) * 2 + 1
        );
    }
    Lr(),
      ra(),
      (window.onresize = function () {
        var e = window.innerWidth / pr();
        (Hr = Vr.clientHeight),
          (kr = Vr.scrollHeight),
          (gr.aspect = e),
          gr.updateProjectionMatrix(),
          vr.setSize(window.innerWidth, pr());
      }),
      window.PointerEvent
        ? document.addEventListener("pointermove", aa, !1)
        : document.addEventListener("mousemove", aa, !1),
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.documentElement.classList.add("loaded");
        },
        !1
      )
  },
]);