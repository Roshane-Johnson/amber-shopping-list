export class Item {
   _id?: string;
   name: string;
   category: string;
   price: number;
   quantity: number;

   constructor(
      name: string,
      category: string,
      price: number,
      quantity: number,
      _id?: string
   ) {
      this._id = _id;
      this.name = name;
      this.category = category;
      this.price = price;
      this.quantity = quantity;
   }
}
