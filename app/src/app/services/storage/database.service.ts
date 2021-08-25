import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { IImageTable } from 'src/app/interfaces/database/IImageTable';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie{
  public images: Dexie.Table<IImageTable, any>; // id is number in this case

  constructor() {
      super("JupiterWebService");
    console.log("COUNT")
      this.version(1).stores({
          images: "++id,imageId,imageUrl"
      });

      this.images = this.table("images");
   }
}
