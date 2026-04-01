# Lesson 2: GIT & JavaScript

## GIT
**GIT have 3 states:** Working Directory; Staging Area, Repository

1. git init
2. git config user.name and git config user.mail
3. git remote add origin 
4. git add [file] or git add .
5. git commit -m "message"
    1. feat
    2. fix
    3. chore
6. git push origin main

7. **Other syntax:** git log; git status

## JavaScript

1. console.log("message")
2. node file
3. How to comment
4. Variable and constant
5. Data type: Number, string, boolean, object,...
    To check data type:
```
let x = 10;
console.log(typeof x);
```
6. Comparison Operators (Toán tử so sánh)
Recomment to use Strict Equality === (So sánh giá trị và kiểu giữ liệu)

```markdown
| Operators | Meaning |
|-------|-------|
| == | equal |
| === | strict equal |
| != | not equal|
| !== | strict not equal |

```
7. Logical Operators (Toán tử logic)
Used to combine multiple conditions and return boolean
    && (AND)
    || (OR)
8. Unary operator (toán tử 1 ngôi)
- prefix
- postfix

9. Toán tử toán học (Arithmetic Operators)
10. Condition
```
int hour = 8;

if (hour >= 6 && hour <= 11) {
    console.log("Good morning");
}
```
11. For loop
A for loop is used to repeat a block of code a specific number of times.
```
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

