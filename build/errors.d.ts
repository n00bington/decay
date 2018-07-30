/** New error type for not checking if optional has something. */
declare class UncheckedOptionError extends Error {
    constructor();
}
/** New error type for not checking if resulting has something. */
declare class UncheckedResultError extends Error {
    constructor();
}
export { UncheckedOptionError, UncheckedResultError };
