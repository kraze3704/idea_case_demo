import Category from "./Cateogry";

const TEST_DATA_NUMBER = 5;

export default function fetchTestCategories() {
    let TEST_DATA = [];

    for(let i = 0 ; i < TEST_DATA_NUMBER ; i++){
        TEST_DATA[i] = new Category(i, `testdata${i}`, `testdataBudget${i}`);
    }

    return TEST_DATA;
};

