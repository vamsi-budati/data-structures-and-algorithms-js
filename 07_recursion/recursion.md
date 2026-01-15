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