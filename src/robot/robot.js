"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot_communication_1 = require("./robot-communication");
var id_generator_1 = require("../services/id-generator");
var robotIdGenerator = new id_generator_1.Services.IdGenerator();
var Robot = (function () {
    function Robot() {
        var id = robotIdGenerator.nextId();
        this.getId = function () {
            return id;
        };
        this.communication = new robot_communication_1.RobotCommunication(id);
    }
    return Robot;
}());
exports.Robot = Robot;
//# sourceMappingURL=robot.js.map