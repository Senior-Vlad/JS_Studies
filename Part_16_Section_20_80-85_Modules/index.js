//Modules ES6 export/import export... import...
export const myVariable = 42;
export function myFunction() {
  console.log("Hello from myFunction!");
}

/*
Rules for using ES6 Modules
1. Use `export` to expose variables/functions from a module.
2. Use `import` to bring in variables/functions from other modules.
3. Use named exports for multiple exports from a module.
4. Use default exports for a single export from a module.

1. Modules have to be single-purpose and focused on a specific task.
2. Locate all export instructions at the bottom of the file.
3. Locate all import instructions at the top of the file.
4. If possible, use export default. (for a single export from a module.)
5. Avoid circular dependencies between modules.
6. Use absolute paths for imports when possible.
 */
