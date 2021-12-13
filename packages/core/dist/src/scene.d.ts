import { Entity } from './shape';
export declare class Scene {
    entityList: Array<Entity>;
    add(entity: Entity): void;
    remove(id: string | number | symbol): void;
}
