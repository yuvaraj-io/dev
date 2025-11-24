const origin = (url) => {
    return `https://${url}.yuvaraj.io`
}
export const socials = {
    github: 'https://github.com/yuvaraj-io',
    linkedin: 'https://www.linkedin.com/in/yuvaraj-s-32326b176/',
    instagram: 'https://www.instagram.com/code.yuvaraj/',
    medium: 'https://medium.com/@yuvidev/',
    stackblitz: 'https://stackblitz.com/@yuvaraj.io/collections/'
}

export const featured = {
    tred: {
        link: origin('tred'),
        img: '/assets/small-projects/tred.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Tred',
        subtitle: 'Tred, the attrendance application built on top of javascript localstorage',
    },
    pitchpro: {
        link: origin('pitchpro'),
        img: '/assets/portfolio/pitchpro.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Pitchpro',
        subtitle: 'A website for startup that does pitch proposals, Help them and connect to appropriate connections',
    },
    yuvidev: {
        link: origin('old'),
        img: '/assets/portfolio/yuvaraj.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Yuvidev',
        subtitle: "Ohh, it's my old website. Just a basic website :)",
    },
}

export const portfolios = [
    {
        link: origin('pitchpro'),
        img: '/assets/portfolio/pitchpro.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Pitchpro',
        subtitle: 'A website for startup that does pitch proposals, Help them and connect to appropriate connections',
    },
    {
        link: origin('old'),
        img: '/assets/portfolio/yuvaraj.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Yuvidev',
        subtitle: "Ohh, it's my old website. Just a basic website :)",
    },
    {
        link: origin('fotofactory'),
        img: '/assets/portfolio/fotofactory.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Fotofactory',
        subtitle: "Website to my friend, to reach out customers for photoshoots",
    },
    {
        link: origin('ganesha'),
        img: '/assets/portfolio/ganesha.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Ganesh Idols',
        subtitle: "Created page UI, to attract customers for my seasonal small business",
    },
    {
        link: origin('guruguide'),
        img: '/assets/portfolio/guruguide.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Guruguide',
        subtitle: "To spread knowledge on interviews, built this to get leads from students",
    },
    {
        link: origin('getnewfiber'),
        img: '/assets/portfolio/getnewfiber.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Getnewfiber',
        subtitle: "Lead generation website for local fibernet services",
    }
];

export const projects = [
    {
        link:  origin('debug'),
        img: '/assets/small-projects/debugger.png',
        skills: ['HTML','CSS', 'JAVASCRIPT'],
        mainHeading: 'Debugger',
        subtitle: 'App that generates a debugger for javascript functions to understand application efficiency',
    },
    {
        link:  origin('dice'),
        img: '/assets/small-projects/dice.png',
        skills: ['HTML','CSS', 'JAVASCRIPT'],
        mainHeading: 'Dice',
        subtitle: 'Mini project to generate random dice number to play',
    },
    {
        link: origin('rem'),
        img: '/assets/small-projects/rem.png',
        skills: ['HTML','CSS', 'JAVASCRIPT'],
        mainHeading: 'Rem',
        subtitle: 'Todo list app for grouping the list to track',
    },
    {
        link: origin('snake'),
        img: '/assets/small-projects/rem.png',
        skills: ['VUE 3.0', 'CSS'],
        mainHeading: 'Snake and Ladders',
        subtitle: 'Snake and ladder game to play with group',
    },
    {
        link:  origin('tred'),
        img: '/assets/small-projects/tred.png',
        skills: ['HTML','CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        mainHeading: 'Tred',
        subtitle: 'Tred, the attrendance application built on top of javascript localstorage',
    },
]


export const skills = {
   language: {
        heading: 'Languages',
        skills :['HTML','CSS', 'JAVASCRIPT', 'TYPESCRIPT']
    },
   framework: {
        heading: 'Languages',
        skills : ['ANGULAR','REACT', 'VUE']
    },
    database: {
        heading: 'Database Familiar',
        skills : ['SQL','POSTGRESQL', 'MONGO']
    },
    npm:{
        heading: 'npm packages',
        skills : ['lodash','chartjs', 'express', 'axios', 'rxjs', 'redux']
    },
    tools: {
        heading: 'Tools',
        skills : ['FIGMA','VSCODE', 'GIT']
    },

}


export const medium = {
    angular: [
        {
            "title": "Angular Component 01: Creating Components",
            "medium": "https://medium.com/@yuvidev/lesson-1-basics-of-components-131dee1dae44",
            "content": "🔹 What’s a Component? Think of a component as a self-contained module that defines a certain part of your webpage. It’s like a Lego brick — you put them together to create something bigger and functional.",
            "stackblitz": "https://stackblitz.com/edit/angular-ivy-component1"
        },
        {
            "title": "Angular Components 02: Input decorator databinding",
            "medium":"https://medium.com/@yuvidev/i-have-created-component-server-display-6e7021746f85",
            "content": "In Angular🚀, components often need to communicate with each other, and one powerful way to achieve this is through the @Input decorator. 📨📦 This decorator allows you to pass data from a parent component to a child component, enabling seamless interaction and dynamic content updates.",
            "stackblitz": "https://stackblitz.com/edit/angular-ivy-component2-inputdecorator"
        },
        {
            "title": "Angular Components 03 : Components Output decorator",
            "medium":"https://medium.com/@yuvidev/lesson-3-components-output-decorator-590750d5b6",
            "content": "Notice inside EventEmitter the type should be in string not String. So we are emiting this value using event emitter. Taking value from html file.",
            "stackblitz": "https://stackblitz.com/edit/angular-ivy-component3-outputdecorator"
        },
        {
            "title": "Angular Components 04: components @viewchild reference",
            "medium":"https://medium.com/@yuvidev/lesson-3-components-output-decorator-590750d5b6",
            "content": "Notice inside EventEmitter the type should be in string not String. So we are emiting this value using event emitter. Taking value from html file.",
            "stackblitz": "https://stackblitz.com/edit/angular-ivy-component3-outputdecorator"
        },
    ],
    react: [
        {
            "title": "React 01: JSX and Printing Value in JSX",
            "medium": "https://medium.com/@yuvidev/react-01-jsx-and-printing-value-in-jsx-99c8a4be51f1",
            "content": "JSX, or JavaScript XML, is a syntax extension for JavaScript. It allows you to write HTML directly within JavaScript, which makes it easier to create and render React components. With JSX, you can structure component render outputs using syntax that looks similar to HTML, making the code more readable and expressive. Under the hood, JSX gets compiled to React.createElement() calls, which produce React “elements” — JavaScript objects that describe a component’s structure.",
            "stackblitz": "https://stackblitz.com/edit/react-ne3gqu"
        },
        {
            "title": "React 02: React Components and Props 🚀",
            "medium": "https://medium.com/@yuvidev/react-02-react-components-and-props-d2d74214052f",
            "content": "A React component is a reusable piece of UI that can be composed to build more complex interfaces. There are two types of components in React: functional components and class components. In this blog, we’ll focus on functional components, which are simpler and more commonly used in modern React development. 💻",
            "stackblitz": "https://stackblitz.com/edit/react-components-prop"
        },
        {
            "title": "React 03: Passing Data from Child to Parent Component in React 🚀",
            "medium": "https://medium.com/@yuvidev/react-03-passing-data-from-child-to-parent-component-in-react-9ef5c5c2e7a2",
            "content": "Props in React are typically used to pass data from parent components to child components. However, there are scenarios where you need to pass data from a child component back to its parent. This is achieved through callback functions passed as props. Let’s break down how this works with an example! 📚",
            "stackblitz": "https://stackblitz.com/edit/react-child-to-parent-component"
        },
        {
            "title": "React 04: Understanding the children Prop in React 🌟",
            "medium": "https://medium.com/@yuvidev/react-04-understanding-the-children-prop-in-react-928967f53901",
            "content": "In React, the children prop is a special prop that allows you to pass components or elements as children to other components. This feature is particularly useful for creating reusable and flexible UI components. In this blog, we'll explore how the children prop works and provide a practical example to illustrate its use. Let's dive in! 🚀",
            "stackblitz": "https://stackblitz.com/edit/react-children-prop"
        }
    ],
    rxjs:[
        {
            "title": "RXJS Operator 01: Of Operator",
            "medium": "https://medium.com/@yuvidev/rxjs-operator-01-of-operator-dcdf7690e9f8",
            "content": "As our definition says, “Of” operator takes the argument as it can take string, number, array, HTML document, Object as an argument. And then it converts into a stream of data.",
            "stackblitz": "https://stackblitz.com/edit/rxjs-operator-of"
        },
        {
            "title": "RXJS Operator 02: Ajax Operator",
            "medium": "https://medium.com/@yuvidev/rxjs-operator-02-ajax-operator-f10ef683319f",
            "content": "The ajax operator, available in the RxJS library, makes it easy to create an observable for an Ajax request by taking in a request object with the necessary URL, headers, and other options. This makes it simple to manage asynchronous data streams and handle responses from the server in a clean and organized way.",
            "stackblitz": "https://stackblitz.com/edit/rxjs-operator-ajax"
        },
        {
            "title": "RXJS Operator 03: From Operator",
            "medium": "https://medium.com/@yuvidev/rxjs-operator-03-from-operator-85b625303632",
            "content": "The from operator is a way to create an observable sequence from an array, an iterable, a promise, an array-like object, or an event. It can be used to convert various types of data into an observable stream that can be subscribed to and processed using RxJS operators. Basically, we give a input in an array format.",
            "stackblitz": "https://stackblitz.com/edit/rxjs-operator-from"
        },
        {
            "title": "RXJS Operator 04: fromEvent Operator",
            "medium": "https://medium.com/@yuvidev/rxjs-operator-03-fromevent-operator-8c0e06cf1958",
            "content": "fromEvent is one of the creation operators. fromEvent operator is used to creating an observable from an event-emitting DOM element, an event type, and a selector function to extract the arguments from the event object that the observable will emit.",
            "stackblitz": "https://stackblitz.com/edit/rxjs-operator-fromevent"
        }
    ],
    javascript:[
        {
            "title": "Lesson 01: Setting Up your Javascript",
            "medium": "https://medium.com/@yuvaraj.io/javascript-01-setting-up-your-javascript-136fe7c174cc",
            "content": "JavaScript is a high-level, dynamic scripting language used to build interactive web applications.",
            // "stackblitz": "https://stackblitz.com/edit/rxjs-operator-of"
        },
        {
            "title": "Lesson 02: Understanding Javscript syntax",
            "medium": "https://medium.com/@yuvaraj.io/lesson-2-understanding-javscript-syntax-e0e4e07447fd",
            "content": `Now that you’re all set up and ready, it’s time to take the next exciting step:- ✨ Understanding JavaScript’s syntax — the rules of the game!`,
            "stackblitz": "https://stackblitz.com/edit/lesson-2-understanding-javscript-syntax?file=script.js"
        },
        {
            "title": "Lesson 03: Comments in JavaScript",
            "medium": "https://medium.com/@yuvaraj.io/lesson-3-comments-in-javascript-8e35e17f8a4b",
            "content": `Comments are nothing but the code/text that gets ignored. “Oh that’s concerning right, why do we need ignored code while writing”,So it’s just for help developers make their code more readable, maintaining, remembering what the block of code is about.`,
            "stackblitz": "https://stackblitz.com/edit/lesson-3-comments-in-javascript?file=script.js"
        },
        {
            "title": "Lesson 04: Variables in JavaScript — var, let, and const",
            "medium": "https://medium.com/@yuvaraj.io/lesson-4-variables-in-javascript-var-let-and-const-6e47ce5dcc4e",
            "content": "Variables are the heart of any program — they let you store, update, and use data as your app runs. With the arrival of ES6 (ECMAScript 2015), JavaScript gave us three ways to declare variables: var, let, and const.",
            "stackblitz": "https://stackblitz.com/edit/lesson-4-variables-in-javascript-var-let-and-const?file=script.js"
        }
    ]

}


export const stackblitz = {
    "angular": [
        {
            title: "Angular v17 - features",
            description: 'Learn about the latest features of Angular, including the introduction of Angular Material, Angular Flex-Layout, and Angular CDK.',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/angular-v17-features'
        },
        {
            title: 'Angular 01: Component',
            description: 'Explore reusable, modular components that form the building blocks of Angular applications, enhancing code maintainability and scalability.',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/angular-component'
        },
        {
            title: 'Angular 02: Directives',
            description: "Dive into Angular's powerful directives, which allow you to manipulate the DOM and extend HTML functionality, enabling dynamic and reusable templates.",
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-02-directives'
        },
        {
            title: 'Angular 03: Services',
            description: 'Learn how to create services to manage shared data, logic, and functionality across multiple components in an Angular application.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-03-services'
        },
        {
            title: 'Angular 04: Routing',
            description: 'Implement routing in your Angular application to navigate between different views and components.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-routing'
        },
        {
            title: 'Angular 05 : Template Driven Forms',
            description: 'Learn how to create forms using Angular\'s template-driven approach, enabling user input validation and error handling.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-05-template-driven-forms'
        },
        {
            title: 'Angular 06 : Reactive Form',
            description: 'Learn how to create forms using Angular\'s reactive approach, enabling user input validation and error handling.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-reactive-form'
        },
        {
            title: 'Angular 07 : Pipes',
            description: 'Dive into Angular\'s powerful pipes, which transform and format data in your templates.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-pipes'
        },
        {
            title: 'Angular 08: Http',
            description: 'Learn how to make HTTP requests in your Angular application using HttpClient, handling errors, and optimizing performance.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-http'
        },
        {
            title: 'Angular 09: Signals',
            description: 'Learn how to create and manage signals in Angular, enabling communication between components and services.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-09-signals'
        },
        {
            title: 'Angular NGRX',
            description: 'State management library NGRX, enabling efficient and scalable state management in your Angular applications.',
            url:'https://stackblitz.com/@yuvaraj.io/collections/angular-ngrx'
        }
    ],
    "react": [
        {
            title: 'React',
            description: 'React core concepts and hooks',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/react'
        },
        {
            title: 'React Router',
            description: 'React Router Dom, npm package to change and manage route navigations',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/react-01-components'
        },
        {
            title: 'React Axios',
            description: 'Manage interceptors, http requests, implement configuration with axios',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/react-axios'
        },
        {
            title: 'React Redux',
            description: 'Redux and React-Redux, state management library',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/react-redux'
        },
        {
            title: 'Redux Toolkit',
            description: 'Redux Toolkit, official Redux utilities for Redux',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/redux-toolkit'
        }
    ],
    "vue": [
        {
           title: 'Vue Js',
           description: 'Learn Vue.js core concepts with plain html, css, and javascript',
           url: 'https://stackblitz.com/@yuvaraj.io/collections/vue-js'
        },
        {
            title: 'Vue 3.0',
            description: 'Checkot latest Vue 3.0 concepts and features',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/vue-3-0'
        },
        {
            title: 'Vuetify',
            description: 'Vuetify, a Vue.js Material Design component framework',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/vuetify'
        }
    ],
    "rxjs": [
        {
            title: 'RXJS Fundamentals',
            description: 'Rxjs core fundamentals to get started',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/rxjs-fundamentals'
        },
        {
           title: 'RXJS 01: Creation Operator',
           description: 'Learn about creation operators like of, from, fromEvent etc.',
           url: 'https://stackblitz.com/@yuvaraj.io/collections/rxjs-series'
        },
        {
            title: 'RXJS 02: Pipable Operators',
            description: 'Rxjs pipable operators like combineLatest, take, takeLast etc',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/rxjs-02-pipable-operators'
         }
    ],
    "js":[
        {
            title: 'Javascript Learn',
            description: 'To Understand and Learn Javascript!',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/javascript-learn'
        },
        {
            title: 'Javascript Concepts',
            description: 'To refresh your javascript core concepts. Yayy!',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/javascript-tasks-and-concepts'
        },
        {
            title: 'Javascript Common Methods',
            description: 'Some of the common methods to help you while coding',
            url: 'https://stackblitz.com/@yuvaraj.io/collections/javascript-common-methods'
        }
    ]
};