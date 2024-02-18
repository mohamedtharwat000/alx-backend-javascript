var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: './js/main.ts',
    devtool: 'inline-source-map',
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
/// <reference path="Teacher.ts" />
var Subjects;
/// <reference path="Teacher.ts" />
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject(_teacher) {
            this._teacher = _teacher;
        }
        Object.defineProperty(Subject.prototype, "teacher", {
            get: function () {
                return this._teacher;
            },
            enumerable: false,
            configurable: true
        });
        Subject.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
/// <reference path="Subject.ts" />
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp(_teacher) {
            return _super.call(this, _teacher) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            var _a;
            if ((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
/// <reference path="Subject.ts" />
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            var _a;
            if ((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingJava) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
/// <reference path="Subject.ts" />
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            var _a;
            if ((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingReact) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var Subjects;
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
(function (Subjects) {
    var teacher = {
        firstName: 'mohamed',
        lastName: 'mohamed',
        experienceTeachingC: 5,
        experienceTeachingJava: 7,
        experienceTeachingReact: 9,
    };
    var cpp = new Subjects.Cpp();
    var java = new Subjects.Java();
    var react = new Subjects.React();
    var subject = new Subjects.Subject(teacher);
    console.log(subject);
    console.log('C++');
    cpp.setTeacher(teacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    console.log('Java');
    java.setTeacher(teacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    console.log('React');
    react.setTeacher(teacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
//# sourceMappingURL=bundle.js.map