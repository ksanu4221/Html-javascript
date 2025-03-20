// debounce
// a function runs only once after a specified delay.
// useCase :search box input


// throttle:Ensures that a function runs at most once in a specified time 
// interval, even if the event keeps triggering.
// live example : event scrolling
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
const searchInput = document.getElementById("search");

function fetchResults(query) {
  console.log("Fetching results for:", query);
}
const debouncedFetchResults = debounce(fetchResults, 500);

searchInput.addEventListener("input", (event) => {
  debouncedFetchResults(event.target.value);
});
