// Features of es6
// 1.  let, const
// 2.destructring of objects and array
//3. async await
// 4. rest and spread operator
// 5. promises
// 6.arrow function
// 7. classes
// 8. module export import
// 9.object methods
// default parameter in function

// Debounce function
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        // Clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage
const logMessage = () => {
    console.log("Debounced function executed!");
};

// Create a debounced version of the logMessage function
const debouncedLogMessage = debounce(logMessage, 1000);

// Simulate rapid calls to the debounced function
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage();

// Only one message will be logged after 1 second


