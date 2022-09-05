import { respondeModel } from "./respondeModel";

export interface ListResponseModel<T> extends respondeModel{
    data :T[];
}