import sum from "./sum";

// test("testing for sum function", () => {
//     expect(sum(10, 10)).toBe(20); 
// })

test("testing for sum function", () => {
    let a = 10;
    let b = 20;
    let output = 30;

    expect(sum(a, b)).toBe(output);
})

/**
 * expect run the sum function pass the parameters and expect the given output.
 */