export type EventsCollection = { [key: string]: EventFunction }

export type EventFunction = () => void;