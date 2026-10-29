(function () {
    const tasks = [
        {
            id: 'create-a-javascript-string',
            title: 'Create a Javascript string',
            prompt: 'Create the requested greeting string and print it.',
            starter: "const message = '___';\nconsole.log(message);",
            solution: "const message = 'Hello, JavaScript!';\nconsole.log(message);",
            expected: 'Hello, JavaScript!',
            instructions: 'Replace the placeholder with the greeting so the output reads Hello, JavaScript!.',
            choices: ['Hello, JavaScript!', 'Hello, strings!', 'undefined'],
            answer: 'Hello, JavaScript!',
        },
        {
            id: 'declare-a-string-variable',
            title: 'Declare a String Variable',
            prompt: 'Give the variable a string value and print it.',
            starter: 'let language;\nconsole.log(language);',
            solution: "let language = 'JavaScript';\nconsole.log(language);",
            expected: 'JavaScript',
            instructions: 'Assign a string value to language before it is printed.',
            choices: ['JavaScript', 'undefined', 'string'],
            answer: 'JavaScript',
        },
        {
            id: 'compare-strings-with-different-quotes',
            title: 'Compare Strings with Different Quotes',
            prompt: 'Compare two strings with the same text but different quote styles.',
            starter: "const sameText = 'JavaScript' !== \"JavaScript\";\nconsole.log(sameText);",
            solution: "const sameText = 'JavaScript' === \"JavaScript\";\nconsole.log(sameText);",
            expected: 'true',
            instructions: 'Make the comparison true when both strings contain the same text, regardless of quote style.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'different-ways-to-create-javascript-strings',
            title: 'Different ways to create Javascript strings',
            prompt: 'Create and print strings using three literal styles.',
            starter: "const single = '___';\nconst double = \"___\";\nconst template = `___`;\nconsole.log(single + ',' + double + ',' + template);",
            solution: "const single = 'one';\nconst double = \"two\";\nconst template = `three`;\nconsole.log(single + ',' + double + ',' + template);",
            expected: 'one,two,three',
            instructions: 'Fill each string with its matching word: one, two, and three. Keep each value as a string.',
            choices: ['one,two,three', 'onetwothree', 'undefined'],
            answer: 'one,two,three',
        },
        {
            id: 'connect-javascript-strings-1',
            title: 'Connect Javascript strings (1)',
            prompt: 'Join the two string values into one.',
            starter: "const first = 'Code';\nconst second = 'Craft';\nconsole.log(first - second);",
            solution: "const first = 'Code';\nconst second = 'Craft';\nconsole.log(first + second);",
            expected: 'CodeCraft',
            instructions: 'Combine first and second so the output is CodeCraft.',
            choices: ['CodeCraft', 'Code Craft', 'NaN'],
            answer: 'CodeCraft',
        },
        {
            id: 'find-the-length-of-a-string',
            title: 'Find the Length of a String',
            prompt: 'Print the number of characters in the word JavaScript.',
            starter: "const word = 'JavaScript';\nconsole.log(word.length + 1);",
            solution: "const word = 'JavaScript';\nconsole.log(word.length);",
            expected: '10',
            instructions: 'Use the string property that reports the number of characters.',
            choices: ['10', '11', '9'],
            answer: '10',
        },
        {
            id: 'repeat-a-word-twice',
            title: 'Repeat a Word Twice',
            prompt: 'Print the word ha exactly two times in a row.',
            starter: "const word = 'ha';\nconsole.log(word.repeat(3));",
            solution: "const word = 'ha';\nconsole.log(word.repeat(2));",
            expected: 'haha',
            instructions: 'Adjust the repetition so the output contains exactly two copies of the word.',
            choices: ['haha', 'hahaha', 'ha'],
            answer: 'haha',
        },
        {
            id: 'is-the-string-longer-than-5',
            title: 'Is the String Longer Than 5?',
            prompt: 'Check whether the word planet contains more than five characters.',
            starter: "const text = 'planet';\nconsole.log(text.length < 5);",
            solution: "const text = 'planet';\nconsole.log(text.length > 5);",
            expected: 'true',
            instructions: 'Print true when the string has more than five characters.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'form-a-simple-sentence',
            title: 'Form a Simple Sentence',
            prompt: 'Combine the three words into a correctly spaced sentence.',
            starter: "const first = 'Strings';\nconst second = 'are';\nconst third = 'fun.';\nconsole.log(first + second + third);",
            solution: "const first = 'Strings';\nconst second = 'are';\nconst third = 'fun.';\nconsole.log(first + ' ' + second + ' ' + third);",
            expected: 'Strings are fun.',
            instructions: 'Join all three words and include spaces so they form a readable sentence.',
            choices: ['Strings are fun.', 'Stringsarefun.', 'Strings fun are.'],
            answer: 'Strings are fun.',
        },
        {
            id: 'store-the-first-character',
            title: 'Store the First Character',
            prompt: 'Store and print the first character of CodeCraft.',
            starter: "const word = 'CodeCraft';\nconst firstCharacter = word[1];\nconsole.log(firstCharacter);",
            solution: "const word = 'CodeCraft';\nconst firstCharacter = word[0];\nconsole.log(firstCharacter);",
            expected: 'C',
            instructions: 'Use the string index that refers to its first character.',
            choices: ['C', 'o', 't'],
            answer: 'C',
        },
        {
            id: 'store-the-last-character',
            title: 'Store the Last Character',
            prompt: 'Store and print the last character of CodeCraft.',
            starter: "const word = 'CodeCraft';\nconst lastCharacter = word[word.length - 2];\nconsole.log(lastCharacter);",
            solution: "const word = 'CodeCraft';\nconst lastCharacter = word[word.length - 1];\nconsole.log(lastCharacter);",
            expected: 't',
            instructions: 'Use the string length to locate the final character.',
            choices: ['t', 'f', 'C'],
            answer: 't',
        },
        {
            id: 'are-the-first-and-last-characters-the-same',
            title: 'Are the First and Last Characters the Same?',
            prompt: 'Check whether the first and last characters of level match.',
            starter: "const word = 'level';\nconsole.log(word[0] === word[1]);",
            solution: "const word = 'level';\nconsole.log(word[0] === word[word.length - 1]);",
            expected: 'true',
            instructions: 'Compare the first character with the character at the end of the word.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'get-the-character-at-a-given-index',
            title: 'Get the Character at a Given Index',
            prompt: 'Print the character in Strings at index 4.',
            starter: "const word = 'Strings';\nconst index = 4;\nconsole.log(word[index - 1]);",
            solution: "const word = 'Strings';\nconst index = 4;\nconsole.log(word[index]);",
            expected: 'n',
            instructions: 'Use index directly to access the character at the given position.',
            choices: ['n', 'i', 'g'],
            answer: 'n',
        },
        {
            id: 'case-sensitivity-in-string-comparisons',
            title: 'Case Sensitivity in String Comparisons',
            prompt: 'Compare Code and code without changing their letter case.',
            starter: "const same = 'Code'.toLowerCase() === 'code';\nconsole.log(same);",
            solution: "const same = 'Code' === 'code';\nconsole.log(same);",
            expected: 'false',
            instructions: 'Compare the original strings so the result reflects their different capitalization.',
            choices: ['false', 'true'],
            answer: 'false',
        },
        {
            id: 'connect-javascript-strings-2',
            title: 'Connect Javascript strings (2)',
            prompt: 'Join Good and morning with a space between them.',
            starter: "const first = 'Good';\nconst second = 'morning';\nconsole.log(first + second);",
            solution: "const first = 'Good';\nconst second = 'morning';\nconsole.log(first + ' ' + second);",
            expected: 'Good morning',
            instructions: 'Combine the strings and include a space between the two words.',
            choices: ['Good morning', 'Goodmorning', 'morning Good'],
            answer: 'Good morning',
        },
        {
            id: 'connect-javascript-strings-3',
            title: 'Connect Javascript strings (3)',
            prompt: 'Join the three values into a readable phrase.',
            starter: "const first = 'Learn';\nconst second = 'JavaScript';\nconst third = 'strings';\nconsole.log(first + second + third);",
            solution: "const first = 'Learn';\nconst second = 'JavaScript';\nconst third = 'strings';\nconsole.log(first + ' ' + second + ' ' + third);",
            expected: 'Learn JavaScript strings',
            instructions: 'Combine all three values with readable spacing.',
            choices: ['Learn JavaScript strings', 'LearnJavaScriptstrings', 'JavaScript Learn strings'],
            answer: 'Learn JavaScript strings',
        },
        {
            id: 'create-a-greeting-with-template-literals',
            title: 'Create a Greeting with Template Literals',
            prompt: 'Create a greeting that includes Ada’s name.',
            starter: "const name = 'Ada';\nconst greeting = 'Hello, name!';\nconsole.log(greeting);",
            solution: "const name = 'Ada';\nconst greeting = `Hello, ${name}!`;\nconsole.log(greeting);",
            expected: 'Hello, Ada!',
            instructions: 'Build the greeting so the variable value appears between Hello, and !.',
            choices: ['Hello, Ada!', 'Hello, name!', 'Hi, Ada!'],
            answer: 'Hello, Ada!',
        },
        {
            id: 'display-a-users-age-with-template-literals',
            title: "Display a User's Age with Template Literals",
            prompt: "Display Mia's age in a complete sentence.",
            starter: "const name = 'Mia';\nconst age = 12;\nconst message = 'Mia is age years old.';\nconsole.log(message);",
            solution: "const name = 'Mia';\nconst age = 12;\nconst message = `${name} is ${age} years old.`;\nconsole.log(message);",
            expected: 'Mia is 12 years old.',
            instructions: 'Create the sentence using the name and age variables so their values appear in the output.',
            choices: ['Mia is 12 years old.', 'Mia is age years old.', '12 is Mia years old.'],
            answer: 'Mia is 12 years old.',
        },
        {
            id: 'simple-math-in-a-template-literal',
            title: 'Simple Math in a Template Literal',
            prompt: 'Show the sum of 2 and 3 inside the equation.',
            starter: 'const first = 2;\nconst second = 3;\nconst equation = `${first} + ${second} = ${first}${second}`;\nconsole.log(equation);',
            solution: 'const first = 2;\nconst second = 3;\nconst equation = `${first} + ${second} = ${first + second}`;\nconsole.log(equation);',
            expected: '2 + 3 = 5',
            instructions: 'Calculate the sum inside the template literal so the equation displays its result.',
            choices: ['2 + 3 = 5', '2 + 3 = 23', '5'],
            answer: '2 + 3 = 5',
        },
        {
            id: 'convert-to-uppercase',
            title: 'Convert to Uppercase',
            prompt: 'Print javascript using uppercase letters.',
            starter: "const word = 'javascript';\nconsole.log(word.toLowerCase());",
            solution: "const word = 'javascript';\nconsole.log(word.toUpperCase());",
            expected: 'JAVASCRIPT',
            instructions: 'Transform the word so every letter is uppercase.',
            choices: ['JAVASCRIPT', 'javascript', 'JavaScript'],
            answer: 'JAVASCRIPT',
        },
        {
            id: 'convert-to-lowercase',
            title: 'Convert to Lowercase',
            prompt: 'Print JAVASCRIPT using lowercase letters.',
            starter: "const word = 'JAVASCRIPT';\nconsole.log(word.toUpperCase());",
            solution: "const word = 'JAVASCRIPT';\nconsole.log(word.toLowerCase());",
            expected: 'javascript',
            instructions: 'Transform the word so every letter is lowercase.',
            choices: ['javascript', 'JAVASCRIPT', 'JavaScript'],
            answer: 'javascript',
        },
        {
            id: 'uppercase-and-lowercase-mixed',
            title: 'Uppercase and Lowercase Mixed',
            prompt: 'Print the word once in uppercase and once in lowercase.',
            starter: "const word = 'Strings';\nconsole.log(word.toLowerCase() + ' ' + word.toUpperCase());",
            solution: "const word = 'Strings';\nconsole.log(word.toUpperCase() + ' ' + word.toLowerCase());",
            expected: 'STRINGS strings',
            instructions: 'Create one output with the uppercase form first and the lowercase form second.',
            choices: ['STRINGS strings', 'strings STRINGS', 'STRINGSSTRINGS'],
            answer: 'STRINGS strings',
        },
        {
            id: 'case-insensitive-string-comparison',
            title: 'Case-insensitive String Comparison',
            prompt: 'Check whether JavaScript and javascript match when capitalization is ignored.',
            starter: "const first = 'JavaScript';\nconst second = 'javascript';\nconsole.log(first === second);",
            solution: "const first = 'JavaScript';\nconst second = 'javascript';\nconsole.log(first.toLowerCase() === second.toLowerCase());",
            expected: 'true',
            instructions: 'Compare the strings without letting their capitalization affect the result.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'validate-email',
            title: 'Validate Email',
            prompt: 'Check that the address includes an at sign and a dot.',
            starter: "const email = 'ada@example.com';\nconsole.log(email.includes('@') && email.includes(' '));",
            solution: "const email = 'ada@example.com';\nconsole.log(email.includes('@') && email.includes('.'));",
            expected: 'true',
            instructions: 'Check that the email address contains its separator and a dot in the domain.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'case-sensitive-includes',
            title: 'Case Sensitive Includes',
            prompt: 'Search for the lowercase fragment java in JavaScript.',
            starter: "const text = 'JavaScript Strings';\nconsole.log(text.toLowerCase().includes('java'));",
            solution: "const text = 'JavaScript Strings';\nconsole.log(text.includes('java'));",
            expected: 'false',
            instructions: 'Search the original text for the lowercase fragment and keep the comparison case-sensitive.',
            choices: ['false', 'true'],
            answer: 'false',
        },
    ];

    window.jscStringTasks = tasks;

    function renderTaskNavigation(nav, activeId) {
        const lessonItem = document.createElement('li');
        const lessonLink = document.createElement('a');
        const lessonIcon = document.createElement('span');
        const lessonLabel = document.createElement('span');
        const lessonCheck = document.createElement('span');
        lessonLink.href = 'lesson.html';
        lessonLink.className = 'sidebar-task sidebar-task--lesson' + (activeId === 'strings-introduction' ? ' active' : '');
        lessonLink.setAttribute('data-task-id', 'strings-introduction');
        lessonIcon.className = 'sidebar-task-icon';
        lessonIcon.textContent = 'L';
        lessonLabel.className = 'sidebar-task-label';
        lessonLabel.textContent = 'Introduction to Strings';
        lessonCheck.className = 'sidebar-task-check';
        lessonCheck.textContent = '\u2713';
        lessonLink.append(lessonIcon, lessonLabel, lessonCheck);
        lessonItem.append(lessonLink);
        nav.append(lessonItem);

        tasks.forEach(function (task) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            const icon = document.createElement('span');
            const label = document.createElement('span');
            const check = document.createElement('span');
            link.href = 'challenge.html?task=' + encodeURIComponent(task.id);
            link.className = 'sidebar-task' + (task.id === activeId ? ' active' : '');
            link.setAttribute('data-task-id', task.id);
            icon.className = 'sidebar-task-icon';
            icon.textContent = 'C';
            label.className = 'sidebar-task-label';
            label.textContent = task.title;
            check.className = 'sidebar-task-check';
            check.textContent = '\u2713';
            link.append(icon, label, check);
            listItem.append(link);
            nav.append(listItem);
        });

        const examItem = document.createElement('li');
        const examLink = document.createElement('a');
        const examIcon = document.createElement('span');
        const examLabel = document.createElement('span');
        const examCheck = document.createElement('span');
        examLink.href = 'test-javascript-strings.html';
        examLink.className = 'sidebar-task sidebar-task--exam' + (activeId === 'test-javascript-strings' ? ' active' : '');
        examLink.setAttribute('data-task-id', 'test-javascript-strings');
        examIcon.className = 'sidebar-task-icon';
        examIcon.textContent = 'E';
        examLabel.className = 'sidebar-task-label';
        examLabel.textContent = 'Test: JavaScript Strings';
        examCheck.className = 'sidebar-task-check';
        examCheck.textContent = '\u2713';
        examLink.append(examIcon, examLabel, examCheck);
        examItem.append(examLink);
        nav.append(examItem);
    }

    window.jscInitStringLesson = function () {
        renderTaskNavigation(document.getElementById('string-task-nav'), 'strings-introduction');
        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('strings');
        }
    };

    window.jscInitStringChallenge = function () {
        const requestedId = new URLSearchParams(window.location.search).get('task');
        const task = tasks.find(function (item) { return item.id === requestedId; }) || tasks[0];
        const editor = document.getElementById('code-editor');
        const nav = document.getElementById('string-task-nav');

        document.body.setAttribute('data-task-id', task.id);
        document.body.setAttribute('data-expected-output', task.expected);
        document.title = 'CodeCraft - ' + task.title;
        document.getElementById('task-title').textContent = task.title;
        document.getElementById('task-instructions').textContent = task.instructions;
        editor.defaultValue = task.starter;
        editor.value = task.starter;
        renderTaskNavigation(nav, task.id);

        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('strings');
        }
    };

    window.jscInitStringQuiz = function () {
        renderTaskNavigation(document.getElementById('string-task-nav'), 'test-javascript-strings');
        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('strings');
        }

        const form = document.getElementById('quiz-form');
        const progressBar = document.getElementById('quiz-progress-bar');
        const progressFill = document.getElementById('quiz-progress-fill');
        const progressCount = document.getElementById('quiz-progress-count');
        const feedback = document.getElementById('quiz-feedback');
        const questionNumber = document.getElementById('quiz-question-number');
        const questionPrompt = document.getElementById('quiz-question-prompt');
        const questionCode = document.getElementById('quiz-question-code');
        const answerChoices = document.getElementById('quiz-answer-choices');
        const submitButton = document.getElementById('quiz-submit');
        let currentQuestionIndex = 0;
        let awaitingNextQuestion = false;

        function renderQuestion() {
            const task = tasks[currentQuestionIndex];
            questionNumber.textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + tasks.length;
            questionPrompt.textContent = 'What will the output be?';
            questionCode.textContent = task.solution;
            answerChoices.replaceChildren();

            task.choices.forEach(function (choice) {
                const label = document.createElement('label');
                const input = document.createElement('input');
                const answerText = document.createElement('span');
                label.className = 'quiz-answer-choice';
                input.type = 'radio';
                input.name = 'answer';
                input.value = choice;
                answerText.textContent = choice;
                label.append(input, answerText);
                answerChoices.append(label);
            });
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (awaitingNextQuestion) {
                currentQuestionIndex += 1;
                awaitingNextQuestion = false;
                submitButton.textContent = 'Submit answer';
                feedback.textContent = '';
                feedback.className = 'quiz-feedback';
                renderQuestion();
                return;
            }

            const selectedAnswer = form.querySelector('input[name="answer"]:checked');
            if (!selectedAnswer) {
                feedback.textContent = 'Choose an answer before submitting.';
                feedback.className = 'quiz-feedback quiz-feedback--error';
                return;
            }

            const task = tasks[currentQuestionIndex];
            if (selectedAnswer.value !== task.answer) {
                feedback.textContent = 'Not quite. Review the string expression and try again.';
                feedback.className = 'quiz-feedback quiz-feedback--error';
                return;
            }

            const answeredCount = currentQuestionIndex + 1;
            progressBar.setAttribute('aria-valuenow', String(answeredCount));
            progressFill.style.width = (answeredCount / tasks.length * 100) + '%';
            progressCount.textContent = answeredCount + ' of ' + tasks.length + ' answered';
            feedback.textContent = 'Correct.';
            feedback.className = 'quiz-feedback quiz-feedback--success';

            if (currentQuestionIndex < tasks.length - 1) {
                awaitingNextQuestion = true;
                submitButton.textContent = 'Next question';
            } else {
                feedback.textContent = 'Correct. Test complete.';
                submitButton.disabled = true;
                if (typeof jscMarkCompleted === 'function') {
                    jscMarkCompleted('strings', 'test-javascript-strings');
                    jscRenderTaskCheckmarks('strings');
                }
            }
        });

        renderQuestion();
    };
})();
