import { EventType } from "..";

export class Event {
    public type: EventType;
    public target:any;
    public data: any;

    constructor(type: EventType,target:any, data: any) {
        this.type = type;
        this.target = target;
        this.data = data;
    }
}