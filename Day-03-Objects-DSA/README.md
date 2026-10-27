# Day 03 — JavaScript Objects (DSA)

## Topics Learned

### 1. Object Creation
- Object literals: `{}`
- `Object.create()` and prototypes
- Nested objects and arrays

### 2. Accessing Properties
- Dot notation: `user.name`
- Bracket notation: `user["name"]`
- Dynamic keys: `user[key]`

### 3. Object Methods
- `Object.keys()`
- `Object.values()`
- `Object.freeze()`

### 4. Combining Objects
- `Object.assign()`
- Spread operator: `...`

### 5. Functions in Objects
- Object methods
- The `this` keyword

### 6. Symbols
- Creating unique symbols with `Symbol()`
- Using symbols as object keys

## Example

```javascript
const student = {
  name: "Harshad",
  subject: "JavaScript",
  topic: "Objects"
};

console.log(student.name);
console.log(Object.keys(student));
console.log(Object.values(student));
```

## Key Takeaways
- Objects store related information as key-value pairs.
- Dot notation is useful for fixed property names.
- Bracket notation supports dynamic property names.
- `Object.freeze()` is shallow, so nested objects may still be modified.
- `Object.create()` can create objects with a chosen prototype.

## Practice Goal
Apply object properties, methods, loops, and frequency counting to JavaScript DSA problems.
