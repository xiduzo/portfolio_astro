declare module 'typewriter-effect/dist/core' {
    interface Options {
        /**
         * Strings to type out when using autoStart option
         * @default null
         */
        strings: string | string[];
        /**
         * String value to use as the cursor.
         * @default '|'
         */
        cursor: string;
        /**
         * The delay between each key when typing.
         * @default 'natural'
         */
        delay: "natural" | number;
        /**
         * The delay between deleting each character.
         * @default 'natural'
         */
        deleteSpeed: "natural" | number;
        /**
         * Whether to keep looping or not.
         * @default false
         */
        loop: boolean;
        /**
         * Whether to autostart typing strings or not. You are required to provide strings option.
         * @default false
         */
        autoStart: boolean;
        /**
         * The pause duration after a string is typed when using autostart mode
         * @default 1500
         */
        pauseFor: number;
        /**
         * Whether or not to display console logs.
         * @default false
         */
        devMode: boolean;
        /**
         * @default Skip adding default typewriter css styles.
         */
        skipAddStyles: boolean;
        /**
         * Class name for the wrapper element.
         * @default 'Typewriter__wrapper'
         */
        wrapperClassName: string;
        /**
         * Class name for the cursor element.
         * @default 'Typewriter__cursor'
         */
        cursorClassName: string;
        /**
         * 
         * @param text 
         * @returns 
         * @default String splitter function, can be used to split emoji's
         */
        stringSplitter: (text: string) => string[];
        /**
         * Callback function to replace the internal method which creates a text node for the character before adding it to the DOM. If you return null, then it will not add anything to the DOM and so it is up to you to handle it.
         * @param text 
         * @returns 
         * @default null
         */
        onCreateTextNode: (text: string) => void;
        /**
         * Callback function when a node is about to be removed. First param will be an object { node: HTMLNode, charater: string }
         * @param node 
         * @default null
         */
        onRemoveNode: (node: Node) => void;
    }

    export default class Typewriter {
        constructor(element: HTMLElement, options?: Partial<Options>);
        /**
         * Start the typewriter effect.
         */
        start(): Typewriter;
        /**
         * Stop the typewriter effect.
         */
        stop(): Typewriter;
        /**
         * Pause for milliseconds
         * @param ms Time to pause for in milliseconds
         */
        pauseFor(ms: number): Typewriter;
        /**
         * Type out a string using the typewriter effect.
         * @param text string String to type out, it can contain HTML tags
         */
        typeString(text: string): Typewriter;
        /**
         * Paste out a string.
         * @param text string String to paste out, it can contain HTML tags
         */
        parseString(text: string): Typewriter;
        /**
         * Delete everything that is visible inside of the typewriter wrapper element.
         * @param speed Speed to delete all visibles nodes, can be number or 'natural'
         */
        deleteAll(speed: number): Typewriter;
        /**
         * Delete and amount of characters, starting at the end of the visible string.
         * @param amount Number of characters
         */
        deleteChars(amount: number): Typewriter;
        /**
         * Call a callback function. The first parameter to the callback elements which contains all DOM nodes used in the typewriter effect.
         * @param fn Callback, thisArg this Object to bind to the callback function
         */
        callFunction(fn: Function): Typewriter;
        /**
         * The speed at which to delete the characters, lower number is faster.
         * @param speed number or 'natural'
         */
        changeDeleteSpeed(speed: 'natural' | number): Typewriter;
        /**
         * Change the delay when typing out each character
         * @param speed number or 'natural'
         */
        changeDelay(speed: 'natural' | number): Typewriter;
    }
}