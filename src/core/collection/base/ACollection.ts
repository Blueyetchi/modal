/**
 * @abstract Contract for Key collection
 */
import {error} from "../../../helpers";
import constants from "../../../constants";

export default abstract class ACollection<DATA_ITEM> {

    /******************************************************************************* | Properties
     * @desc contains all the data of collection
     */
    protected _data: {[key: string]: DATA_ITEM[]} = {};

    /******************************************************************************* | Public methods
     * @desc Add a key to the collection if it doesn't exist
     * @throws Error
     */
    public addKey(key: string) {
        if (this.hasKey(key)) {
            error.throwError(
                constants.error.ACTION_NAME.COLLECTION_ADD_KEY,
                `The key ${key} already exists in the collection.`
            );
        }

        this._data[key] = [];
    }

    /**
     * @desc Check if the collection contains an item
     */
    public contains(key: string, item: DATA_ITEM): boolean {
        if (this.hasKey(key)) {
            return this._data[key].includes(item);
        }

        return false;
    }

    /**
     * @desc Return data of collection
     */
    public getData(): {[key: string]: DATA_ITEM[]} {
        return this._data;
    }

    /**
     * @desc Check if the collection has the key
     */
    public hasKey(key: string): boolean {
        return this._data.hasOwnProperty(key);
    }

    /******************************************************************************* | Abstract methods
     * @desc Add item into collection
     * @throws Error
     */
    public abstract push(key: string, item: DATA_ITEM): void;

    /**
     * @desc Remove an item of the collection
     * @throws Error
     */
    public abstract remove(key: string, item: DATA_ITEM): void;
}