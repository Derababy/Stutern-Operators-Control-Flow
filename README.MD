
1)  Arithmetic Operators (+, -, *, /, **, %, ++, --)
    Assignment Operators (=, -=, +=, *=, /=, **=, %==)
    Comparison Operators (<, >, <=, >=, ==, ===, !=, !==)
    Logical Operators (&&, ||, !)
    Bitwise Operators (&, |, ^, ~, <<, >>, >>>)

2i) Arithmetic Operators (+, -, *, /, **, %, ++, --)
        let a = 10;
        let b = 5;

        console.log(a + b); //return 15
        console.log(a - b); //return 5
        console.log(a * b); //return 50
        console.log(a / b); //return 2
        console.log(a ** b); //return 100000
        console.log(a % b); //return 0
        console.log(a++); //return 10
        console.log(b--); //return 5
        console.log(++a); //return 11
        console.log(--b); //return 4

2ii) Assignment Operators (=, +=, -=, *=, /=, **=, %=)
        let x = 10;
        let y = 5;
    
        console.log(x = 10); //return 10
        console.log(x += y); //return 15
        console.log(x -= y); //return 5
        console.log(x *= y); //return 50
        console.log(x /= y); //return 2
        console.log(x **= y); //return 100000
        console.log(x %= y); //return 0

2iii) Comparison Operators (<, >, <=, >=, ==, ===, !=, !==)
        let a = 10;
        let b = 5;
        let c = 10;

        console.log(a < b); //return false
        console.log(a > b); //return true
        console.log(a <= b); //return false
        console.log(a >= b); //return true
        console.log(a == b); //return false
        console.log(a === c); //return true
        console.log(a != 4); //return true
        console.log(b !== 5); //return false


2iv) Logical Operators (&&, ||, !)
        let a = true;
        let b = false;

        console.log(a && b); //return false
        console.log(a && a); //return true
        console.log(a || b); //return true
        console.log(b || b); //return false
        console.log(!a); //return false
        console.log(!b); //return true

2v)  Bitwise Operators (&, |, ^, ~, <<, >>, >>>)
        let a = 5;
        let b = 1;

        console.log(a & b); //return 1
        console.log(a | b); //return 5
        console.log(a ^ b); //return 4
        console.log(~a); //return -6
        console.log(a << b); //return 10
        console.log(a >> b); //return 2
        console.log(a >>> b); //return 2

4)  for (let i = 1; i < 20; i += 7) {
        console.log(i);
    }
    //return (1, 8, 15)