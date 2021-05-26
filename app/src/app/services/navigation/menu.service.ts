import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {IMenu} from "../../interfaces/navigation/menu"

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu:Subject<IMenu | null> = new Subject<IMenu |  null>();
}
