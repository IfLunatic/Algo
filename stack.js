//Напишіть функцію, яка перевіряє балансування дужок у виразі за допомогою стеку.

function isBalanced(expression) {
    let stack = [];
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let closedBrackets = Object.values(brackets);

    for (let i = 0; i < expression.length; i++) {
        if (brackets[expression[i]]) {
            stack.push(expression[i]);
        } else if (closedBrackets.includes(expression[i])) {
            if (stack.length === 0 || brackets[stack.pop()] !== expression[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced('(){}[]')); // true
console.log(isBalanced('({[]})')); // true
console.log(isBalanced('({[}])')); // false
console.log(isBalanced('({}{[])}')); // false