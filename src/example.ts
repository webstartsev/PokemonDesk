// ## Работа с интерфейсами
type ConcatFn = (str1: string, str2: string) => string

const concat: ConcatFn = (str1, str2) => {
    return str1 + str2;
};

concat("Hello ", "World"); // -> Hello World;


// ## Работа с интерфейсами
interface IMyHometaskWithData {
    howIDoIt: string;
    simeArray: Array<string | number>
    withData?: Array<IMyHometaskWithData>
}

const MyHometask: IMyHometaskWithData = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// ## Типизация функций, используя Generic
interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (acc: U, cur: T, index: number, array: U[]) => U, initial: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];
tsArr.reduce((acc, cur) => acc + cur, "");



