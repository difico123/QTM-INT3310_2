'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'topics',
            [
                {
                    title: 'React Tutorial',
                    description:
                        'React is a JavaScript library for building user interfaces.\n\nReact is used to build single-page applications.\n\nReact allows us to create reusable UI components.',
                    content:
                        '<h2>Learning by Examples</h2><p>Our "Show React" tool makes it easy to demonstrate React. It shows both the code and the result.</p><h3>Example:</h3><pre class="ql-syntax" spellcheck="false">import React from \'react\';\nimport ReactDOM from \'react-dom\';\n\nfunction Hello(props) {\n  return &lt;h1&gt;Hello World!&lt;/h1&gt;;\n}\n\nReactDOM.render(&lt;Hello /&gt;, document.getElementById(\'root\'));\n</pre><h2>Create React App</h2><p>To learn and test React, you should set up a React Environment on your computer.</p><p>This tutorial uses the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>.</p><p>The&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;tool is an officially supported way to create React applications.</p><p><a href="https://nodejs.org/" rel="noopener noreferrer" target="_blank" style="color: inherit; background-color: transparent;">Node.js</a>&nbsp;is required to use&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>.</p><p>Open your terminal in the directory you would like to create your application.</p><p>Run this command to create a React application named&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">my-react-app</span>:</p><p>npx create-react-app my-react-app</p><p><span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;will set up everything you need to run a React application.</p><p><strong>Note:</strong>&nbsp;If you\'ve previously installed&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>. To uninstall, run this command:&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">npm uninstall -g create-react-app</span>.</p><h2>Run the React Application</h2><p>Run this command to move to the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">my-react-app</span>&nbsp;directory:</p><p>cd my-react-app</p><p>Run this command to execute the React application&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">my-react-app</span>:</p><p>npm start</p><p>A new browser window will pop up with your newly created React App! If not, open your browser and type&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">localhost:3000</span>&nbsp;in the address bar.</p><p>The result:</p><p><img src="https://www.w3schools.com/react/screenshot_myfirstreact.png"></p><p><br></p><p>You will learn more about the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;in the&nbsp;<a href="https://www.w3schools.com/react/react_getstarted.asp" rel="noopener noreferrer" target="_blank" style="color: inherit; background-color: transparent;">React Get Started</a>&nbsp;chapter.</p><h2>What You Should Already Know</h2><p>Before starting with React.JS, you should have intermediate experience in:</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p>You should also have some experience with the new JavaScript features introduced in ECMAScript 6 (ES6), you will learn about them in the&nbsp;<a href="https://www.w3schools.com/react/react_es6.asp" rel="noopener noreferrer" target="_blank" style="color: inherit; background-color: transparent;">React ES6</a>&nbsp;chapter.</p>',
                    courseId: 4,
                },
                {
                    title: 'React Introduction',
                    description:
                        'What is React?\nReact, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.\n\nReact is a tool for building UI components.',
                    content:
                        '<h2>How does React Work?</h2><p>React creates a VIRTUAL DOM in memory.</p><p>Instead of manipulating the browser\'s DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p><p>React only changes what needs to be changed!</p><p>React finds out what changes have been made, and changes&nbsp;<strong>only</strong>&nbsp;what needs to be changed.</p><p>You will learn the various aspects of how React does this in the rest of this tutorial.</p><h2>React.JS History</h2><p>Current version of React.JS is V17.0.2 (August 2021).</p><p>Initial Release to the Public (V0.3.0) was in July 2013.</p><p>React.JS was first used in 2011 for Facebook\'s Newsfeed feature.</p><p>Facebook Software Engineer, Jordan Walke, created it.</p><p>Current version of&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;is v4.0.3 (August 2021).</p><p><span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">create-react-app</span>&nbsp;includes built tools such as webpack, Babel, and ESLint.</p>',
                    courseId: 4,
                },
                {
                    title: 'React Render HTML',
                    description:
                        "React's goal is in many ways to render HTML in a web page.\n\nReact renders HTML to the web page by using a function called ReactDOM.render().",
                    content:
                        '<h2>The Render Function</h2><p>The&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">ReactDOM.render()</span>&nbsp;function takes two arguments, HTML code and an HTML element.</p><p>The purpose of the function is to display the specified HTML code inside the specified HTML element.</p><p>But render where?</p><p>There is another folder in the root directory of your React project, named "public". In this folder, there is an&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">index.html</span>&nbsp;file.</p><p>You\'ll notice a single&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;div&gt;</span>&nbsp;in the body of this file. This is where our React application will be rendered.</p><h3>Example</h3><p>Display a paragraph inside an element with the id of "root":</p><pre class="ql-syntax" spellcheck="false">ReactDOM.render(&lt;p&gt;Hello&lt;/p&gt;, document.getElementById(\'root\'));\n</pre><p>The result is displayed in the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;div id="root"&gt;</span>&nbsp;element:</p><pre class="ql-syntax" spellcheck="false">&lt;body&gt;\n  &lt;div id="root"&gt;&lt;/div&gt;\n&lt;/body&gt;\n</pre><h2>The HTML Code</h2><p>The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:</p><p>Do not worry if the syntax is unfamiliar, you will learn more about JSX in the next chapter.</p><h3>Example</h3><p>Create a variable that contains HTML code and display it in the "root" node:</p><pre class="ql-syntax" spellcheck="false">const myelement = (\n  &lt;table&gt;\n    &lt;tr&gt;\n      &lt;th&gt;Name&lt;/th&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;John&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;Elsa&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/table&gt;\n);\n\nReactDOM.render(myelement, document.getElementById(\'root\'));\n</pre><h2>The Root Node</h2><p>The root node is the HTML element where you want to display the result.</p><p>It is like a&nbsp;<em>container</em>&nbsp;for content managed by React.</p><p>It does NOT have to be a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;div&gt;</span>&nbsp;element and it does NOT have to have the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">id=\'root\'</span>:</p><h3>Example</h3><p>The root node can be called whatever you like:</p><pre class="ql-syntax" spellcheck="false">&lt;body&gt;\n\n  &lt;header id="sandy"&gt;&lt;/header&gt;\n\n&lt;/body&gt;\n</pre><p>Display the result in the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;header id="sandy"&gt;</span>&nbsp;element:</p><pre class="ql-syntax" spellcheck="false">ReactDOM.render(&lt;p&gt;Hallo&lt;/p&gt;, document.getElementById(\'sandy\'));\n</pre><p><br></p>',
                    courseId: 4,
                },
                {
                    title: 'React  JSX',
                    description:
                        'What is JSX?\nJSX stands for JavaScript XML.\nJSX allows us to write HTML in React.\nJSX makes it easier to write and add HTML in React.Coding JSX\nJSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/o',
                    content:
                        '<p>Here are two examples. The first uses JSX and the second does not:</p><h3>Example 1</h3><p>JSX:</p><pre class="ql-syntax" spellcheck="false">const myelement = &lt;h1&gt;I Love JSX!&lt;/h1&gt;;\n\nReactDOM.render(myelement, document.getElementById(\'root\'));\n</pre><p><br></p><h3>Example 2</h3><p>Without JSX:</p><pre class="ql-syntax" spellcheck="false">const myelement = React.createElement(\'h1\', {}, \'I do not use JSX!\');\n\nReactDOM.render(myelement, document.getElementById(\'root\'));\n</pre><p><br></p><p>As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.</p><p>JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.</p><h2>Expressions in JSX</h2><p>With JSX you can write expressions inside curly braces&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">{ }</span>.</p><p>The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:</p><h3>Example</h3><p>Execute the expression&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">5 + 5</span>:</p><pre class="ql-syntax" spellcheck="false">const myelement = &lt;h1&gt;React is {5 + 5} times better with JSX&lt;/h1&gt;;\n</pre><p><br></p><h2>Inserting a Large Block of HTML</h2><p>To write HTML on multiple lines, put the HTML inside parentheses:</p><h3>Example</h3><p>Create a list with three list items:</p><pre class="ql-syntax" spellcheck="false">const myelement = (\n  &lt;ul&gt;\n    &lt;li&gt;Apples&lt;/li&gt;\n    &lt;li&gt;Bananas&lt;/li&gt;\n    &lt;li&gt;Cherries&lt;/li&gt;\n  &lt;/ul&gt;\n);\n</pre><p><br></p><h2>One Top Level Element</h2><p>The HTML code must be wrapped in&nbsp;<em>ONE</em>&nbsp;top level element.</p><p>So if you like to write&nbsp;<em>two</em>&nbsp;paragraphs, you must put them inside a parent element, like a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">div</span>&nbsp;element.</p><h3>Example</h3><p>Wrap two paragraphs inside one DIV element:</p><pre class="ql-syntax" spellcheck="false">const myelement = (\n  &lt;div&gt;\n    &lt;p&gt;I am a paragraph.&lt;/p&gt;\n    &lt;p&gt;I am a paragraph too.&lt;/p&gt;\n  &lt;/div&gt;\n);\n</pre><p>JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.</p><p>Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.</p><p>A fragment looks like an empty HTML tag:&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;&gt;&lt;/&gt;</span>.</p><h3>Example</h3><p>Wrap two paragraphs inside a fragment:</p><pre class="ql-syntax" spellcheck="false">const myelement = (\n  &lt;&gt;\n    &lt;p&gt;I am a paragraph.&lt;/p&gt;\n    &lt;p&gt;I am a paragraph too.&lt;/p&gt;\n  &lt;/&gt;\n);\n</pre><p><br></p><h2>Elements Must be Closed</h2><p>JSX follows XML rules, and therefore HTML elements must be properly closed.</p><h3>Example</h3><p>Close empty elements with&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">/&gt;</span></p><pre class="ql-syntax" spellcheck="false">const myelement = &lt;input type="text" /&gt;;\n</pre><p><br></p><p>JSX will throw an error if the HTML is not properly closed.</p><h2>Attribute class = className</h2><p>The&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">class</span>&nbsp;attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">class</span>&nbsp;keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.</p><p>Use attribute&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">className</span>&nbsp;instead.</p><p>JSX solved this by using&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">className</span>&nbsp;instead. When JSX is rendered, it translates&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">className</span>&nbsp;attributes into&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">class</span>&nbsp;attributes.</p><h3>Example</h3><p>Use attribute&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">className</span>&nbsp;instead of&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">class</span>&nbsp;in JSX:</p><pre class="ql-syntax" spellcheck="false">const myelement = &lt;h1 className="myclass"&gt;Hello World&lt;/h1&gt;;\n</pre><p><br></p><h2>Conditions - if statements</h2><p>React supports&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">if</span>&nbsp;statements, but not&nbsp;<em>inside&nbsp;</em>JSX.</p><p>To be able to use conditional statements in JSX, you should put the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">if</span>&nbsp;statements outside of the JSX, or you could use a ternary expression instead:</p><h4>Option 1:</h4><p>Write&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">if</span>&nbsp;statements outside of the JSX code:</p><h3>Example</h3><p>Write "Hello" if&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">x</span>&nbsp;is less than 10, otherwise "Goodbye":</p><pre class="ql-syntax" spellcheck="false">const x = 5;\nlet text = "Goodbye";\nif (x &lt; 10) {\n  text = "Hello";\n}\n\nconst myelement = &lt;h1&gt;{text}&lt;/h1&gt;;\n</pre><p><br></p><h4>Option 2:</h4><p>Use ternary expressions instead:</p><h3>Example</h3><p>Write "Hello" if&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">x</span>&nbsp;is less than 10, otherwise "Goodbye":</p><pre class="ql-syntax" spellcheck="false">const x = 5;\n\nconst myelement = &lt;h1&gt;{(x) &lt; 10 ? "Hello" : "Goodbye"}&lt;/h1&gt;;\n\n</pre><p><strong>Note</strong>&nbsp;that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces,&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">{}</span>.</p><h2>Test Yourself With Exercises</h2><h2>Exercise:</h2><p>Render a &lt;p&gt; element without using JSX.</p><pre class="ql-syntax" spellcheck="false">const paragraph = React.createElement(, {}, \'This is a paragraph without using JSX!\');\n\nReactDOM.render(paragraph, document.getElementById(\'root\'));\n</pre><p><br></p>',
                    courseId: 4,
                },
                {
                    title: 'React Components',
                    description:
                        'React Components\nComponents are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.\n\nComponents come in two types, Class components and Function components, in this tutorial we',
                    content:
                        '<h2><span style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">Create Your First Component</span></h2><p>When creating a React component, the component\'s name&nbsp;<em>MUST</em>&nbsp;start with an upper case letter.</p><h3>Class Component</h3><p>A class component must include the&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">extends React.Component</span>&nbsp;statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component\'s functions.</p><p>The component also requires a&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">render()</span>&nbsp;method, this method returns HTML.</p><h3>Example</h3><p>Create a Class component called&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">Car</span></p><pre class="ql-syntax" spellcheck="false">class Car extends React.Component {\n  render() {\n    return &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;\n  }\n}\n</pre><p><br></p><h3>Function Component</h3><p>Here is the same example as above, but created using a Function component instead.</p><p>A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.</p><h3>Example</h3><p>Create a Function component called&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">Car</span></p><pre class="ql-syntax" spellcheck="false">function Car() {\n  return &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;\n}\n</pre><p><br></p><h2>Get Certified!</h2><p>Complete the React modules, do the exercises, take the exam and become w3schools certified!!</p><p><br></p><h2>Rendering a Component</h2><p>Now your React application has a component called Car, which returns an&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">&lt;h2&gt;</span>&nbsp;element.</p><p>To use this component in your application, use similar syntax as normal HTML:&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">&lt;Car /&gt;</span></p><h3>Example</h3><p>Display the&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">Car</span>&nbsp;component in the "root" element:</p><pre class="ql-syntax" spellcheck="false">ReactDOM.render(&lt;Car /&gt;, document.getElementById(\'root\'));\n</pre><h2>Props</h2><p>Components can be passed as&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">props</span>, which stands for properties.</p><p>Props are like function arguments, and you send them into the component as attributes.</p><p>You will learn more about&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">props</span>&nbsp;in the next chapter.</p><h3>Example</h3><p>Use an attribute to pass a color to the Car component, and use it in the render() function:</p><pre class="ql-syntax" spellcheck="false">function Car(props) {\n  return &lt;h2&gt;I am a {props.color} Car!&lt;/h2&gt;;\n}\n\nReactDOM.render(&lt;Car color="red"/&gt;, document.getElementById(\'root\'));\n</pre><h2>Components in Components</h2><p>We can refer to components inside other components:</p><h3>Example</h3><p>Use the Car component inside the Garage component:</p><pre class="ql-syntax" spellcheck="false">function Car() {\n  return &lt;h2&gt;I am a Car!&lt;/h2&gt;;\n}\n\nfunction Garage() {\n  return (\n    &lt;&gt;\n      &lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;\n      &lt;Car /&gt;\n    &lt;/&gt;\n  );\n}\n\nReactDOM.render(&lt;Garage /&gt;, document.getElementById(\'root\'));\n</pre><h2>Components in Files</h2><p>React is all about re-using code, and it is recommended to split your components into separate files.</p><p>To do that, create a new file with a&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">.js</span>&nbsp;file extension and put the code inside it:</p><p>Note that the filename must start with an uppercase character.</p><h3>Example</h3><p>This is the new file, we named it "Car.js":</p><pre class="ql-syntax" spellcheck="false">function Car() {\n  return &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;\n}\n\nexport default Car;\n</pre><p><br></p><p>To be able to use the Car component, you have to import the file in your application.</p><h3>Example</h3><p>Now we import the "Car.js" file in the application, and we can use the&nbsp;<span style="color: crimson; background-color: rgba(222, 222, 222, 0.3);">Car</span>&nbsp;component as if it was created here.</p><pre class="ql-syntax" spellcheck="false">import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport Car from \'./Car.js\';\n\nReactDOM.render(&lt;Car /&gt;, document.getElementById(\'root\'));\n</pre><h2>Test Yourself With Exercises</h2><h2>Exercise:</h2><p>Name the following React component "person".</p><pre class="ql-syntax" spellcheck="false">function (props) {\n  return &lt;h2&gt;Hi, I\'m {props.name}&lt;/h2&gt;;\n}\n</pre><p><br></p><p>Submit Answer »</p><p><a href="https://www.w3schools.com/react/exercise.asp?filename=exercise_components1" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: inherit;">Start the Exercise</a></p>',
                    courseId: 4,
                },
                {
                    title: 'React Class Components',
                    description:
                        'Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".\n\nWith the addition of Hooks, Function components are now almost equivalent to Class components. The ',
                    content:
                        '<h2>React Components</h2><p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.</p><p>Components come in two types, Class components and Function components, in this chapter you will learn about Class components.</p><h2>Create a Class Component</h2><p>When creating a React component, the component\'s name must start with an upper case letter.</p><p>The component has to include the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">extends React.Component</span>&nbsp;statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component\'s functions.</p><p>The component also requires a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">render()</span>&nbsp;method, this method returns HTML.</p><h3>Example</h3><p>Create a Class component called&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">Car</span></p><pre class="ql-syntax" spellcheck="false">class Car extends React.Component {\n  render() {\n    return &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;\n  }\n}\n</pre><p><br></p><p>Now your React application has a component called Car, which returns a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;h2&gt;</span>&nbsp;element.</p><p>To use this component in your application, use similar syntax as normal HTML:&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&lt;Car /&gt;</span></p><h3>Example</h3><p>Display the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">Car</span>&nbsp;component in the "root" element:</p><pre class="ql-syntax" spellcheck="false">ReactDOM.render(&lt;Car /&gt;, document.getElementById(\'root\'));\n</pre><h2>Component Constructor</h2><p>If there is a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">constructor()</span>&nbsp;function in your component, this function will be called when the component gets initiated.</p><p>The constructor function is where you initiate the component\'s properties.</p><p>In React, component properties should be kept in an object called&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">state</span>.</p><p>You will learn more about&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">state</span>&nbsp;later in this tutorial.</p><p>The constructor function is also where you honor the inheritance of the parent component by including the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">super()</span>&nbsp;statement, which executes the parent component\'s constructor function, and your component has access to all the functions of the parent component (<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">React.Component</span>).</p><h3>Example</h3><p>Create a constructor function in the Car component, and add a color property:</p><pre class="ql-syntax" spellcheck="false">class Car extends React.Component {\n  constructor() {\n    super();\n    this.state = {color: "red"};\n  }\n  render() {\n    return &lt;h2&gt;I am a Car!&lt;/h2&gt;;\n  }\n}\n</pre><p><br></p><p>Use the color property in the render() function:</p><h3>Example</h3><pre class="ql-syntax" spellcheck="false">class Car extends React.Component {\n  constructor() {\n    super();\n    this.state = {color: "red"};\n  }\n  render() {\n    return &lt;h2&gt;I am a {this.state.color} Car!&lt;/h2&gt;;\n  }\n}\n</pre><h2>Props</h2><p>Another way of handling component properties is by using&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">props</span>.</p><p>Props are like function arguments, and you send them into the component as attributes.</p><p>You will learn more about&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">props</span>&nbsp;in the next chapter.</p><h3>Example</h3><p>Use an attribute to pass a color to the Car component, and use it in the render() function:</p><pre class="ql-syntax" spellcheck="false">class Car extends React.Component {\n  render() {\n    return &lt;h2&gt;I am a {this.props.color} Car!&lt;/h2&gt;;\n  }\n}\n\nReactDOM.render(&lt;Car color="red"/&gt;, document.getElementById(\'root\'));\n</pre><p><br></p>',
                    courseId: 4,
                },
                {
                    title: 'React Props',
                    description:
                        'Props are arguments passed into React components.\n\nProps are passed to components via HTML attributes.',
                    content:
                        '<h2>React Props</h2><p>React Props are like function arguments in JavaScript&nbsp;<em>and</em>&nbsp;attributes in HTML.</p><p>To send props into a component, use the same syntax as HTML attributes:</p><h3>Example</h3><p>Add a "brand" attribute to the Car element:</p><pre class="ql-syntax" spellcheck="false">const myelement = &lt;Car brand="Ford" /&gt;;\n</pre><p><br></p><p>The component receives the argument as a&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">props</span>&nbsp;object:</p><h3>Example</h3><p>Use the brand attribute in the component:</p><pre class="ql-syntax" spellcheck="false">function Car(props) {\n  return &lt;h2&gt;I am a { props.brand }!&lt;/h2&gt;;\n}\n</pre><h2>Pass Data</h2><p>Props are also how you pass data from one component to another, as parameters.</p><h3>Example</h3><p>Send the "brand" property from the Garage component to the Car component:</p><pre class="ql-syntax" spellcheck="false">function Car(props) {\n  return &lt;h2&gt;I am a { props.brand }!&lt;/h2&gt;;\n}\n\nfunction Garage() {\n  return (\n    &lt;&gt;\n      &lt;h1&gt;Who lives in my garage?&lt;/h1&gt;\n      &lt;Car brand="Ford" /&gt;\n    &lt;/&gt;\n  );\n}\n\nReactDOM.render(&lt;Garage /&gt;, document.getElementById(\'root\'));\n</pre><p>If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:</p><h3>Example</h3><p>Create a variable named&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">carName</span>&nbsp;and send it to the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">Car</span>&nbsp;component:</p><pre class="ql-syntax" spellcheck="false">function Car(props) {\n  return &lt;h2&gt;I am a { props.brand }!&lt;/h2&gt;;\n}\n\nfunction Garage() {\n  const carName = "Ford";\n  return (\n    &lt;&gt;\n      &lt;h1&gt;Who lives in my garage?&lt;/h1&gt;\n      &lt;Car brand={ carName } /&gt;\n    &lt;/&gt;\n  );\n}\n\nReactDOM.render(&lt;Garage /&gt;, document.getElementById(\'root\'));\n</pre><h3>Example</h3><p>Create an object named&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">carInfo</span>&nbsp;and send it to the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">Car</span>&nbsp;component:</p><pre class="ql-syntax" spellcheck="false">function Car(props) {\n  return &lt;h2&gt;I am a { props.brand.model }!&lt;/h2&gt;;\n}\n\nfunction Garage() {\n  const carInfo = { name: "Ford", model: "Mustang" };\n  return (\n    &lt;&gt;\n      &lt;h1&gt;Who lives in my garage?&lt;/h1&gt;\n      &lt;Car brand={ carInfo } /&gt;\n    &lt;/&gt;\n  );\n}\n\nReactDOM.render(&lt;Garage /&gt;, document.getElementById(\'root\'));\n</pre><p><br></p>',
                    courseId: 4,
                },
                {
                    title: 'React Events',
                    description:
                        'Just like HTML DOM events, React can perform actions based on user events.\n\nReact has the same events as HTML: click, change, mouseover etc.\n\n',
                    content:
                        '<h2>Adding Events</h2><p>React events are written in camelCase syntax:</p><p><span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">onClick</span>&nbsp;instead of&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">onclick</span>.</p><p>React event handlers are written inside curly braces:</p><p><span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">onClick={shoot}</span>&nbsp;instead of&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">onClick="shoot()"</span>.</p><h3>React:</h3><pre class="ql-syntax" spellcheck="false">&lt;button onClick={shoot}&gt;Take the Shot!&lt;/button&gt;\n</pre><h3>HTML:</h3><pre class="ql-syntax" spellcheck="false">&lt;button onclick="shoot()"&gt;Take the Shot!&lt;/button&gt;\n</pre><p><br></p><h3>Example:</h3><p>Put the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">shoot</span>&nbsp;function inside the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">Football</span>&nbsp;component:</p><pre class="ql-syntax" spellcheck="false">function Football() {\n  const shoot = () =&gt; {\n    alert("Great Shot!");\n  }\n\n  return (\n    &lt;button onClick={shoot}&gt;Take the shot!&lt;/button&gt;\n  );\n}\n\nReactDOM.render(&lt;Football /&gt;, document.getElementById(\'root\'));\n</pre><h2>Passing Arguments</h2><p>To pass an argument to an event handler, use an arrow function.</p><h3>Example:</h3><p>Send "Goal!" as a parameter to the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">shoot</span>&nbsp;function, using arrow function:</p><pre class="ql-syntax" spellcheck="false">function Football() {\n  const shoot = (a) =&gt; {\n    alert(a);\n  }\n\n  return (\n    &lt;button onClick={() =&gt; shoot("Goal!")}&gt;Take the shot!&lt;/button&gt;\n  );\n}\n\nReactDOM.render(&lt;Football /&gt;, document.getElementById(\'root\'));\n</pre><h2>React Event Object</h2><p>Event handlers have access to the React event that triggered the function.</p><p>In our example the event is the "click" event.</p><h3>Example:</h3><p>Arrow Function: Sending the event object manually:</p><pre class="ql-syntax" spellcheck="false">function Football() {\n  const shoot = (a, b) =&gt; {\n    alert(b.type);\n    /*\n    \'b\' represents the React event that triggered the function,\n    in this case the \'click\' event\n    */\n  }\n\n  return (\n    &lt;button onClick={(event) =&gt; shoot("Goal!", event)}&gt;Take the shot!&lt;/button&gt;\n  );\n}\n\nReactDOM.render(&lt;Football /&gt;, document.getElementById(\'root\'));\n</pre><p><br></p>',
                    courseId: 4,
                },
                {
                    title: 'React Conditional Rendering',
                    description:
                        'In React, you can conditionally render components.\n\nThere are several ways to do this.',
                    content:
                        '<h2><span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">if</span>&nbsp;Statement</h2><p>We can use the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">if</span>&nbsp;JavaScript operator to decide which component to render.</p><h3>Example:</h3><p>We\'ll use these two components:</p><pre class="ql-syntax" spellcheck="false">function MissedGoal() {\n  return &lt;h1&gt;MISSED!&lt;/h1&gt;;\n}\n\nfunction MadeGoal() {\n  return &lt;h1&gt;Goal!&lt;/h1&gt;;\n}\n</pre><h3>Example:</h3><p>Now, we\'ll create another component that chooses which component to render based on a condition:</p><pre class="ql-syntax" spellcheck="false">function Goal(props) {\n  const isGoal = props.isGoal;\n  if (isGoal) {\n    return &lt;MadeGoal/&gt;;\n  }\n  return &lt;MissedGoal/&gt;;\n}\n\nReactDOM.render(\n  &lt;Goal isGoal={false} /&gt;,\n  document.getElementById(\'root\')\n);\n</pre><p>Try changing the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">isGoal</span>&nbsp;attribute to&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">true</span>:</p><h3>Example:</h3><pre class="ql-syntax" spellcheck="false">ReactDOM.render(\n  &lt;Goal isGoal={true} /&gt;,\n  document.getElementById(\'root\')\n);\n</pre><h2>Logical&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&amp;&amp;</span>&nbsp;Operator</h2><p>Another way to conditionally render a React component is by using the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">&amp;&amp;</span>&nbsp;operator.</p><h3>Example:</h3><p>We can embed JavaScript expressions in JSX by using curly braces:</p><pre class="ql-syntax" spellcheck="false">function Garage(props) {\n  const cars = props.cars;\n  return (\n    &lt;&gt;\n      &lt;h1&gt;Garage&lt;/h1&gt;\n      {cars.length &gt; 0 &amp;&amp;\n        &lt;h2&gt;\n          You have {cars.length} cars in your garage.\n        &lt;/h2&gt;\n      }\n    &lt;/&gt;\n  );\n}\n\nconst cars = [\'Ford\', \'BMW\', \'Audi\'];\nReactDOM.render(\n  &lt;Garage cars={cars} /&gt;,\n  document.getElementById(\'root\')\n);\n</pre><h2>Ternary Operator</h2><p>Another way to conditionally render elements is by using a ternary operator.</p><pre class="ql-syntax" spellcheck="false">condition ? true : false\n</pre><p>We will go back to the goal example.</p><h3>Example:</h3><p>Return the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">MadeGoal</span>&nbsp;component if&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">isGoal</span>&nbsp;is&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">true</span>, otherwise return the&nbsp;<span style="background-color: rgba(222, 222, 222, 0.3); color: crimson;">MissedGoal</span>&nbsp;component:</p><pre class="ql-syntax" spellcheck="false">function Goal(props) {\n  const isGoal = props.isGoal;\n  return (\n    &lt;&gt;\n      { isGoal ? &lt;MadeGoal/&gt; : &lt;MissedGoal/&gt; }\n    &lt;/&gt;\n  );\n}\n\nReactDOM.render(\n  &lt;Goal isGoal={false} /&gt;,\n  document.getElementById(\'root\')\n);\n</pre><p><br></p>',
                    courseId: 4,
                },
            ],
            {},
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};