import { Product } from "./product";
import { respondeModel } from "./respondeModel";

export interface ProductResponseModel extends respondeModel{
    data : Product[]
}