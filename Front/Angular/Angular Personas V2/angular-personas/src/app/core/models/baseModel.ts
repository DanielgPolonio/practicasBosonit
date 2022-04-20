export abstract class BaseModel {
  public populate(params: ObjectType): this {
    for (let param of Object.keys(params)) {
      const propDescriptor = Object.getOwnPropertyDescriptor(this, param);
      
      if (propDescriptor !== undefined && propDescriptor?.writable) {
        try {
          //TODO Check alternative without ts-ignore
          //@ts-ignore
          this[param] = params[param];
        } catch (error) {
          console.log("error");
        }
      }
    }
    return this;
  }
}
export abstract class BaseModelId extends BaseModel {
  public id: number;
}

export interface ObjectType < T = any> {
  [Params: string]: T;
}
