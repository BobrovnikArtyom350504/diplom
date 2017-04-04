import {CommunicationChannel} from '../communication/communication-channel';
import {RobotCommunication} from "./robot-communication";
import {Services} from "../services/id-generator";


let robotIdGenerator = new Services.IdGenerator();

export class Robot {
    communication: RobotCommunication;
    getId: () => number;

    constructor() {
        let id = robotIdGenerator.nextId();
        this.getId = ()=> {
            return id;
        };

        this.communication = new RobotCommunication(id);
    }
}
