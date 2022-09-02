import { Category } from "./category";
import { respondeModel } from "./respondeModel";

export interface CategoryResponseModel extends respondeModel{
    data : Category[];
}