const isPrime = () => {return true};

test("fizzbuzz return Fizz when divisible by 3", () => {
  //* Arrange = > setup

  const num = 11;

  //* Act = > call the function
  const result = isPrime(num);

  //* Assert => eyeball the result
  console.log("result", result);
  expect(result).toBe(true);


  
});

test("isPrime returns false when arg is 2", () => {
    //* Arrange => setup
    const num = 2;
  
    //* Act =>. call the function
    const result = isPrime(num);
  
    //* Assert => eyeball the result
    // console.log("result", result);
    expect(result).toBe(false);})

    const reverse =() => {
        return 321

    }

    test("returns the reverse of a number", () =>{
        const num = 123

        const result =reverse(num)

       expect(result).toBe(321)
    })

    test("reverse 120 to give 21", () =>{
        const num = 120

        const result =reverse(num)

       expect(result).toBe(21)

    })