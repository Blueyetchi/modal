import {ACollection} from "./base";
import {error} from "../../helpers";
import constants from "../../constants";

/**
 * @class class ObjectCollection
 */
export default class ObjectCollection<OBJECT extends Object> extends ACollection<OBJECT>
{
    /******************************************************************************* | Public methods
     * @desc Add item into collection
     *
     * Avoid to push twice the same Object in the collection
     *
     * @throws Error
     */
    public push(key: string, item: OBJECT): void {
        if (this.hasKey(key)) {
            if (this.contains(key, item)) {
                error.throwError(
                    constants.error.ACTION_NAME.COLLECTION_PUSH_ITEM,
                    `The item ${item} is already present in the collection at key ${key}.`
                );
            }
        }
    }

    /**
     * @desc Remove an item of the collection
     */
    public remove(key: string, item: OBJECT): void {
        if (!this.hasKey(key)) {
            error.throwError(
                constants.error.ACTION_NAME.COLLECTION_REMOVE_ITEM,
                `The key ${key} doesn't exists in the collection.`
            );
        }
        if (this.contains(key, item)) {
            error.throwError(
                constants.error.ACTION_NAME.COLLECTION_REMOVE_ITEM,
                `The item ${item} is not present in the collection at key ${key}`
            );
        }
    }
}