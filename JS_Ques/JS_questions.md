Important list of questions to prepare for JavaScript in## Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'erviews.

How JS works ?

\*\* **w**hen we run a script, then js interperor runs it and if it founds any async code ,den webApis me full async code jaata , and webAPis after completion bas async function ka andar ka code jo ki callback hai usko task Quue me push kr deta .phir event-loop as per micro or macro task utna k call Stack me forward krta ...\*\*

## Web Accessibility ?

    To ensuring that websites and web applications are usable by everyone, including people with disabilities.
    Here are some key things to consider for web accessibility:

    - Semantic HTML
        - adding alt text in image`<img src="" alt="">`
        - Contrast and Colors
        - Accessible Forms: using label, htmlFor  `<label htmlFor="username"></label>`
        - ARIA (Accessible Rich Internet Applications)

    - using aria to provide details
            - using role , like in wrting test cases we can use role attribute

    `<button aria-controls="details" aria-expanded="false" onclick="toggleContent()">`Toggle Details `</button>`
            `<div id="details" role="region" aria-hidden="true" style="display:none;">`
                Here are more details about the product.
            `</div>`

## What is event delegation, and how does it function in JavaScript?

    - In JS Event delegation is a technique in JavaScript for handling events efficiently by taking advantage of the event bubbling mechanism. Instead of assigning event listeners directly to individual elements, you attach a single event listener to a common parent of those elements. Then, when the event occurs on any of the child elements, the event bubbles up to the parent, where it's handled. https://www.youtube.com/watch?v=pKzf80F3O0U

    - In React implements its own event system called the synthetic event system. When you attach an event handler in a React component, you're actually attaching it to a virtual representation of the DOM element, not the real DOM element itself. React wraps native browser events into instances of synthetic events to ensure events have consistent properties and behaviors across different browsers.

## Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript? - https://www.youtube.com/watch?v=rv7Q11KWmKU&ab_channel=RoadsideCoder

    Defn:

    "this" inherits the global objects i.e window,
    but it behaves differently in some cases lyk when we call inside an obj, this represents the current object not the window

    OR

    "this" keyword represent window object, but it behave differently in the case of object.
    so if we define this, inside an object it target the parent as the object. because of this reason like in react class component , we can able to use like this.state and this.methodName

## Explain the concept of prototypal inheritance.

    - https://www.youtube.com/watch?v=eDxrLEQbLv0&ab_channel=CodeWithHarry
    - https://www.youtube.com/watch?v=AOPmqw9scfc

    - prototype inhertirence if, lets say we create an object a and from that object we create an another object , using b = object.create(a), then b doesnt hv its own keys but if we check in__proto__ it has keys of a . so this we called as prototypr inheritence .

    - and Wrapper class means , supose we create a string called a = 'sdfff', then we can able to do like a.at(2), so here we r creating string , but under the hood , it is creating like a = new String('sdff').
    so here it is usig wrapper class i.e  String .

    prototype is used by functions, and prototypal inheritance is used by objects 🔥

## Differentiate between a variable that is null, undefined, or undeclared.

## Define what a closure is and describe its uses and advantages.

    - A closure in JavaScript is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing. In other words, a closure "closes over" its surrounding lexical scope, allowing it to retain access to the variables, parameters, and functions of that outer scope.

    function outerFunction(x) {
    // Outer function scope
    return function innerFunction(y) {
        // Inner function scope
        return x + y; // The inner function can access 'x' from the outer function
    };
    }

## Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.

## What is a common scenario for employing anonymous functions?

## Distinguish between host objects and native objects.

🔍 Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()

## Can you elucidate the purposes of Function.call and Function.apply, along with their notable differences?

## Describe the Function.prototype.bind method.

    function greet() {
        console.log("Hello, " + this.name);
    }

    let person = {name: "Alice"};
    let boundGreet = greet.bind(person);

    boundGreet();  // Output: "Hello, Alice"

## Explain the differences between feature detection, feature inference, and utilizing the User Agent (UA) string.

    1. Feature Detection:
        What it is: Feature detection involves checking directly whether a specific feature or method is supported in the browser/runtime environment.

    if ('querySelector' in document) {
            document.querySelector("#id");
        } else {
            document.getElementById("id");
        }

    2. Feature Inference:
        What it is: Feature inference is about making an assumption that if one feature exists, another related feature probably exists too.

    if (document.querySelector) {
            // If querySelector exists, then probably querySelectorAll also exists
            var elements = document.querySelectorAll(".class");
        }

    3 - 3. Using the User Agent (UA) String:
        What it is: The User Agent string is a text identifier sent with the HTTP headers that provides information about the browser, its version, and the operating system.

    if (navigator.userAgent.indexOf("MSIE") !== -1) {
            // Code specific to Internet Explorer
        }

## Define the concept of "hoisting." - Its a way of moving variables and function to the top of the scope, so the compiler can understand properly like where they belong.

But ther is a caveat like the hoisting behaves differently for var, let n const.
So if we r using var, it moves to the top and before ny code executes, it will assign the value as undefined.
But in the case of let n const , they will hoist to the top but they will wait for reinitialozation or redifing.
So this waiting phase we clled as temporal dead zone.
So because of this , if we r trying to get the values or result of var before initializing we get an undefined, but in let and const
we get a reference error .

## What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code?

## Describe event bubbling and event capturing.

## What distinguishes an "attribute" from a "property"?

## List the advantages and disadvantages of extending built-in JavaScript objects.

## Explain the differences between == and ===.

## Discuss the same-origin policy's implications for JavaScript.

## Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?

## Define strict mode and outline some of its advantages and disadvantages.

## Analyze the pros and cons of writing JavaScript code in a language that compiles to JavaScript.

## What tools and techniques do you employ for debugging JavaScript code?

## Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.

## Differentiate between synchronous and asynchronous functions and elucidate the event loop.

## Explain the disparities between variables created using let, var, or const.

## Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow (=>) function syntax.

## Describe the advantages of using the arrow syntax for methods in constructors.

## Define a higher-order function and provide an example of object or array destructuring.

## Give an example of generating a string using ES6 Template Literals and explain their benefits.

## Provide an example of a curry function and clarify why this syntax can be advantageous.

    function currying(...args) {
            const add = (...newArgs) => {
                if (newArgs.length === 0) {
                    return args.reduce((a, b) => a + b, 0);
                } else {
                    return currying(...args, ...newArgs);
                }
            };

    return add;
        }

    var addOne = a => b => b ? addOne(a + b) : a;

    const result = currying(4)(5)(6)(7)();
        console.log(result); // Output: 22

## Discuss the benefits of using spread syntax and differentiate it from rest syntax. - Spread ( cloning )

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

    - Rest

    //Collecting Remaining Arguments:
        - function sum(...args) {
            return args.reduce((total, num) => total + num, 0);
          }

    //Collecting Remaining Array Elements:
        - const [first, second, ...rest] = [1, 2, 3, 4, 5];

## Explain how code sharing between files can be accomplished.

## Define what a promise is and describe its applications. ( https://www.youtube.com/watch?v=59PZr-2Mi90&ab_channel=RethinkingUI )

## callback, Promises, Async/Await. ( https://www.youtube.com/watch?v=_pK6TRpA6qY )

## Define request lifecycle of a web server ??

    Certainly! Here's a simplified ASCII diagram illustrating the basic request lifecycle of a web server:

```
Client (e.g., Web Browser)              Web Server (e.g., Node.js, Apache, Nginx)

  |              HTTP Request               |
  | --------------------------------------> |
  |                                          |
  |          Routing and Middleware          |
  | --------------------------------------> |
  |                                          |
  |        Request Handling (Controller)     |
  | --------------------------------------> |
  |                                          |
  |           Response Generation            |
  | <-------------------------------------- |
  |                                          |
  |          Sending HTTP Response           |
  | <-------------------------------------- |
  |                                          |
  |        Client Processing (Browser)       |
  |                                          |
  |               Request Lifecycle Complete |
  |                                          |
```

Explanation:

- The process begins when the client (e.g., a web browser) sends an HTTP request to the web server.
- The web server's routing system determines how to handle the request, including which part of the application should process it. Middleware functions may also run at this stage.
- The main request handler, often referred to as a controller in web frameworks, processes the request. This step may involve accessing databases, executing business logic, or performing other tasks to generate a response.
- The server generates an HTTP response, which includes the requested content, status codes, headers, and any necessary data. This response can be in various formats (e.g., HTML, JSON).
- The server sends the response back to the client over the network.
- The client (web browser) receives the response and processes it, rendering HTML content, executing JavaScript, and handling additional resources.
- The request lifecycle is considered complete when the client has fully processed the response. Depending on the client's behavior, additional actions may follow, such as user interactions or making subsequent requests.

This diagram provides a high-level overview of the request lifecycle, illustrating the flow of data and interactions between the client and the web server during the request and response process.

## How JavaScript Works - ( https://www.youtube.com/watch?v=VaBP6_pBOgM&t=41s&ab_channel=ThapaTechnical )

    - js
            => parser ( checkig everylines, and if ny issue, stop there and throws the error, otherwise  if everything goes well move to AST )
                => AST ( Abstract Syntax Tree )
                    => Conversion to machine code
                        => code runs

## Web Components ( https://www.youtube.com/watch?v=STZA_qtm1XU&list=PLEtjGa9VEukPRU9N_qHL-OAq5PZGVunNB&index=6&ab_channel=AnujSingla )

## shadow DOM

## create slots in DOM ( reusable component like react )

## Lifecycle of Web component

## TodoList with Web component

## - ( Factory, SingleTon, Memoize, Prototype)

    - Factory Pattern ( like a creator or producer that knows how to construct various objects. ) - https://www.youtube.com/watch?v=kRHtmrqZa18&ab_channel=CodingScenes

    The Factory Pattern is a creational design pattern used in object-oriented programming. It provides a way to create objects without specifying the exact class of object that will be created. This is done by creating a separate component (the factory) whose responsibility is to encapsulate the object creation process.

    The idea is to use a factory method to manage and manipulate the creation of objects, and this method typically replaces direct object creation (using the new keyword).

## SOLID principles - https://www.youtube.com/watch?v=m2GCb-x8e5s&ab_channel=RethinkingUI - Each letter in "SOLID" stands for a different principle:

    - Single Responsibility Principle (SRP): This principle suggests that a class should have only one reason to change. In other words, a class should have a single responsibility or job. When a class has multiple responsibilities, changes to one of them can affect the others, making the code less maintainable.

    - Open-Closed Principle (OCP): The Open-Closed Principle encourages software entities (classes, modules, functions, etc.) to be open for extension but closed for modification. It means that you should be able to add new functionality to a system without changing the existing code.

    - Liskov Substitution Principle (LSP): Named after Barbara Liskov, this principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In other words, if a class is a subtype of another class, it should be able to be used in place of its parent class without breaking the code.

    - Interface Segregation Principle (ISP): This principle emphasizes that clients should not be forced to depend on interfaces they do not use. It suggests that interfaces should be specific to the needs of the clients, and classes should not be required to implement methods they don't need.

    - Dependency Inversion Principle (DIP): The Dependency Inversion Principle advocates that high-level modules should not depend on low-level modules. Both should depend on abstractions. It also encourages abstractions not to depend on details but rather the other way around.

1. ‘this’ keyword

   Defn:

   "this" inherits the global objects i.e window,
   but it behaves differently in some cases lyk when we call inside an obj, this represents the current object not the window

2. Closure chaining
3. Prototypal inheritance
4. Microtask and callback queues
5. Currying
6. Functional binding - call, apply, bind
7. Everything is ‘Objects’
   8 - First-Class Function in JS

//////MOCK
https://www.youtube.com/@Learnersbucket/playlists
https://www.youtube.com/watch?v=CPXf8Yv3I0A&list=PL8p2I9GklV45z6Cov4omIOsbptPR1kxpg
https://www.youtube.com/watch?v=FjnHF3CXEaM&ab_channel=RohanPrasad
https://www.youtube.com/watch?v=msWLFE5K1sQ&list=PLNYURJT_hZOlW-ZV1osN3fHJDYiK-Jx8A&ab_channel=CodingScenes

//////

https://azar-portfolio.vercel.app/
https://animesh-rawat.web.app/#contact

CSS

===

critical css : https://www.youtube.com/watch?v=vtb3DzXKvCs
