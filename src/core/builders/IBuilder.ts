/**
 * @interface IBuilder
 *
 * Builder design pattern : https://refactoring.guru/design-patterns/builder
 *
 */
export default interface IBuilder {
    /**
     * @desc Build and return the implicit class
     */
    build(): any;

    /**
     * @desc Create a new instance of implicit class and set to its property
     */
    resetImplicitClassInstance(): void;
}