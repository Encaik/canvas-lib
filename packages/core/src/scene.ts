import { Point } from './point';
import { Entity } from './shape';

export class Scene {
  public entityList: Array<Entity>;

  constructor(){
    this.initScene();
  }

  initScene(){
    this.entityList = [];
    return this;
  };

  add(entity: Entity) {
    this.entityList.push(entity);
  }

  remove(id: string | number | symbol) {
    const idx = this.entityList.findIndex((entity: Entity) => entity.id === id);
    const len = this.entityList.length;
    const temp = this.entityList[len - 1];
    this.entityList[idx] = temp;
    this.entityList.pop();
  }

  getContainsShapes(point:Point){
    let shapes = [];
    this.entityList.forEach(entity=>{
      if(entity.isContains(point)){
        shapes.push(entity)
      }
    })
    return shapes;
  }
}