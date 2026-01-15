# Recursion

- Its more of a concept than algorithm
- Common topic in interviews

**What is recursion?**

When you want to search for some file in your computer, it applies recursion

**Simply its a function that refers to itself.**

```
function recurstionFn(exec) {
    let execute = exec;
    while(execute) {
        execute = !execute;
        recurstionFn(execute);
    }
}

recurstionFn(true);
```

Its good for tasks that has repeated tasks

**Usecases:**
- Nested objects
- DOM tree
- File system traverse

**Downsides**
- You have to be very careful to break the recursion upon meeting the criteria, otherwise it leads to stackoverflow as it ends up running infinite times.


**Anythig you do with recursion, that can be done in iterative(loop) approach**

https://2ality.com/2015/06/tail-call-optimization.html

**Though recursion gives us advantage of code readability, it consumes memory(call stack), high time complexity and if not handled properly it could lead stackoverflow**


**When to use Recursion?**

Everytime you are using a tree or converting something into tree, consider recursion.

Divide and conquer using Recursion.
