export let quizSubject = "CS3 - HTML";

let questions = [
  {
    numb: 1,
    question: "Which HTML tag is used to define the title of a web page shown in the browser tab?",
    answer: "<title>",
    options: [
      "<head>",
      "<title>",
      "<body>",
      "<header>"
    ]
  },
  {
    numb: 2,
    question: "What is the correct HTML tag to display a paragraph of text?",
    answer: "<p>",
    options: [
      "<div>",
      "<p>",
      "<span>",
      "<header>"
    ]
  },
  {
    numb: 3,
    question: "Which tag is used to create a hyperlink in HTML?",
    answer: "<a>",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ]
  },
  {
    numb: 4,
    question: "What is the minimum required structure for a simple HTML5 webpage?",
    answer: "<!DOCTYPE html>, <html>, <head>, <title>, <body>",
    options: [
      "<html>, <head>, <body>",
      "<!DOCTYPE html>, <html>, <head>, <title>, <body>",
      "<html>, <title>, <body>",
      "<DOCTYPE>, <html>, <body>"
    ]
  },
  {
    numb: 5,
    question: "What does this HTML code do? &lt;h1&gt;Welcome to my page&lt;/h1&gt;",
    answer: "Displays 'Welcome to my page' as a large heading",
    options: [
      "Creates a paragraph with text",
      "Displays 'Welcome to my page' as a large heading",
      "Inserts an image",
      "Creates a link to another page"
    ]
  }
];

  
  export { questions };
  
  