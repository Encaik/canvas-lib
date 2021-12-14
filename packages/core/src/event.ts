import { EventType } from "..";

export class Event {
    public type: EventType;
    public data: any;

    constructor(type: EventType, data: any) {
        this.type = type;
        this.data = data;
    }
}