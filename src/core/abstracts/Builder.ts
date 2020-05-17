import {IBuilder} from "./defs";

export default abstract class Builder implements IBuilder{
    protected _implicitClass: object;

    protected constructor(implicitClass: object) {
        this._implicitClass = implicitClass;
    }

    public build(): object {
        return this._implicitClass;
    }
}