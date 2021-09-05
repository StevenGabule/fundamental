class Character {
  fullname: string;
  constructor(firstName: string, lastName: string) {
    this.fullname = firstName + " " + lastName
  }

  greet(name?: string) {
    if (name) {
      return "Hi" + name + "! my name is " + this.fullname
    } else {
      return "Hi! my name is " + this.fullname
    }
  }
}

var spark = new Character("Jacob", "Keyes")
var msg = spark.greet();
alert(msg); // Hi. my name is Jacob Keyes!
var msg1 = spark.greet("Dr. Halsey");
alert(msg1); // Hi! Dr. Halsey! my name is Jacob Keyes

// Interfaces
interface LoggerInterface {
  log(arg: any): void
}

class Logger implements LoggerInterface {
  log(arg) {
    if (typeof console.log === "function") {
      console.log(arg);
    } else {
      alert(arg)
    }
  }
}

interface UserInterface {
  name: string;
  password: string;
}

var user: UserInterface = {
  name: "",
  password: ""
};

// namespace Geometry {
//   interface VectorInterface {

//   }

//   export interface Vector2dInterface {

//   }

//   export interface Vector3dInterface {

//   }

//   export class Vector2d implements VectorInterface, Vector2dInterface {

//   }

//   export class Vector3d implements Vector2dInterface, Vector3dInterface {

//   }
// }

// var vector2dInstance: Geometry.Vector2dInterface = new Geometry.Vector2d();
// var vector3dInstance: Geometry.Vector3dInterface = new Geometry.Vector3d();

module Geometry {
  export interface Vector2dInterface {
    toArray(callback: (x: number[]) => void): void;
    length(): number;
    normalize();
  }

  export class Vector2d implements Vector2dInterface {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    toArray(callback: (x: number[]) => void): void {
      callback([this._x, this._y]);
    }
    length(): number {
      return Math.sqrt(this._x, * this._x + this._y * this._y);
    }
    normalize() {
      var len = 1 / this.length();
      this._x *= len;
      this._y *= len;
    }
  }
}

var vector: Geometry.Vector2dInterface = new Geometry.Vector2d(2, 3);
vector.normalize()
vector.toArray(function (vectorAsArray: number[]) {
  alert(' x :' + vectorAsArray[0] + ' y : ' + vectorAsArray[1])
})