// const questions = [
//     {
//         id: 1,
//         question : "Javascript is an _______ language",
//         options : [
//             'Object-Oriented',
//             'Object-Based',
//             'Procedural',
//         ]
//     },
//     {
//         id: 2,
//         question : "Following methods can be used to display data in some form using Javascript",
//         options : [
//             'document.write()',
//             'console.log()',
//             'window.alert()',
//         ]
//     },
//     {
//         id: 3,
//         question : "When an operator value is NULL, the typeof returned by the unary operator is:",
//         options : [
//             'Boolean',
//             'Undefined',
//             'Object',
//         ]
//     },
//     {
//         id: 4,
//         question : "What does the toString() method return?",
//         options : [
//             'Return Object',
//             'Return String',
//             'Return Integer'
//         ]
//     },
//     {
//         id: 5,
//         question : "Which function is used to serialize an object into a JSON string?",
//         options : [
//             'stringify()',
//             'parse()',
//             'convert()',
//         ]
//     }
// ];

// const answers = [0, 1, 2, 1, 0];

// module.exports = { questions, answers };

export const questions = [
    {
        category: "CSS",
        questions: [
            {
                id: 1,
                question: "Which property is used to change the background color?",
                options: [
                    'background-color',
                    'color',
                    'bgcolor',
                ]
            },
            {
                id: 2,
                question: "How do you add a comment in CSS?",
                options: [
                    '/* this is a comment */',
                    '// this is a comment',
                    '<!-- this is a comment -->',
                ]
            },
            {
                id: 3,
                question: "Which property is used to change the font of an element?",
                options: [
                    'font-family',
                    'font-style',
                    'font-weight',
                ]
            },
            {
                id: 4,
                question: "How do you make a list that lists its items with squares?",
                options: [
                    'list-style-type: square;',
                    'list-type: square;',
                    'list: square;',
                ]
            }
        ]
    },
    {
        category: "Git",
        questions: [
            {
                id: 5,
                question: "Which command is used to stage changes for the next commit?",
                options: [
                    'git add',
                    'git commit',
                    'git push',
                ]
            },
            {
                id: 6,
                question: "Which command is used to create a new branch?",
                options: [
                    'git branch',
                    'git checkout',
                    'git merge',
                ]
            },
            {
                id: 7,
                question: "How do you remove a file from the staging area?",
                options: [
                    'git reset HEAD <file>',
                    'git rm --cached <file>',
                    'git remove <file>',
                ]
            },
            {
                id: 8,
                question: "Which command is used to clone a repository?",
                options: [
                    'git clone',
                    'git fork',
                    'git pull',
                ]
            }
        ]
    },
    {
        category: "JavaScript",
        questions: [
            {
                id: 9,
                question: "Javascript is an _______ language",
                options: [
                    'Object-Oriented',
                    'Object-Based',
                    'Procedural',
                ]
            },
            {
                id: 10,
                question: "Following methods can be used to display data in some form using Javascript",
                options: [
                    'document.write()',
                    'console.log()',
                    'window.alert()',
                ]
            },
            {
                id: 11,
                question: "When an operator value is NULL, the typeof returned by the unary operator is:",
                options: [
                    'Boolean',
                    'Undefined',
                    'Object',
                ]
            },
            {
                id: 12,
                question: "What does the toString() method return?",
                options: [
                    'Return Object',
                    'Return String',
                    'Return Integer'
                ]
            }
        ]
    }
];

export const answers = [
    { category: "CSS", answers: [0, 0, 0, 0] },
    { category: "Git", answers: [0, 0, 0, 0] },
    { category: "JavaScript", answers: [0, 1, 2, 1] }
];


