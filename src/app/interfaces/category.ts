export class Category {
   _id?: string;
   name: string;

   constructor(name: string, _id?: string) {
      this.name = name;
      this._id = _id;
   }
}
