(function () {
    const tasks = [
        {
            id: 'comparison-equal',
            title: 'Comparison operators - Equal',
            prompt: 'Use the equality operator to compare 5 and the string \'5\'.',
            starter: "const result = 5 ___ '5';\nconsole.log(result);",
            solution: "const result = 5 == '5';\nconsole.log(result);",
            expected: 'true',
            instructions: 'Complete the expression so the values compare as equal even though their types differ.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'comparison-not-equal',
            title: 'Comparison operators - Not Equal',
            prompt: 'Use the not-equal operator to compare 5 and 5.',
            starter: 'const result = 5 ___ 5;\nconsole.log(result);',
            solution: 'const result = 5 != 5;\nconsole.log(result);',
            expected: 'false',
            instructions: 'Complete the expression to check whether these two values differ.',
            choices: ['true', 'false'],
            answer: 'false',
        },
        {
            id: 'comparison-greater-than',
            title: 'Comparison operators - Greater than',
            prompt: 'Use the greater-than operator to compare 5 and 3.',
            starter: 'const result = 5 ___ 3;\nconsole.log(result);',
            solution: 'const result = 5 > 3;\nconsole.log(result);',
            expected: 'true',
            instructions: 'Complete the comparison so it is true when the left value is larger.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'comparison-less-than',
            title: 'Comparison operators - Less than',
            prompt: 'Use the less-than operator to compare 3 and 5.',
            starter: 'const result = 3 ___ 5;\nconsole.log(result);',
            solution: 'const result = 3 < 5;\nconsole.log(result);',
            expected: 'true',
            instructions: 'Complete the comparison so it is true when the left value is smaller.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'comparison-greater-than-or-equal',
            title: 'Comparison operators - Greater than or equal',
            prompt: 'Use the greater-than-or-equal operator to compare 5 and 5.',
            starter: 'const result = 5 ___ 5;\nconsole.log(result);',
            solution: 'const result = 5 >= 5;\nconsole.log(result);',
            expected: 'true',
            instructions: 'Complete the comparison so it is true when the left value is larger or the values are equal.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'comparison-less-than-or-equal',
            title: 'Comparison operators - Less than or equal',
            prompt: 'Use the less-than-or-equal operator to compare 4 and 4.',
            starter: 'const result = 4 ___ 4;\nconsole.log(result);',
            solution: 'const result = 4 <= 4;\nconsole.log(result);',
            expected: 'true',
            instructions: 'Complete the comparison so it is true when the left value is smaller or the values are equal.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'comparison-strict-equality',
            title: 'Comparison operators - Strict equality',
            prompt: 'Use strict equality to compare the number 5 and the string \'5\'.',
            starter: "const result = 5 ___ '5';\nconsole.log(result);",
            solution: "const result = 5 === '5';\nconsole.log(result);",
            expected: 'false',
            instructions: 'Complete the comparison so equality requires both the value and the type to match.',
            choices: ['true', 'false'],
            answer: 'false',
        },
        {
            id: 'comparison-strict-inequality',
            title: 'Comparison operators - Strict inequality',
            prompt: 'Use strict inequality to compare the number 5 and the string \'5\'.',
            starter: "const result = 5 ___ '5';\nconsole.log(result);",
            solution: "const result = 5 !== '5';\nconsole.log(result);",
            expected: 'true',
            instructions: 'Complete the comparison so it detects a difference in either value or type.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'logical-and',
            title: 'Logical operators - AND',
            prompt: 'Use the AND operator to combine true and false.',
            starter: 'const result = true ___ false;\nconsole.log(result);',
            solution: 'const result = true && false;\nconsole.log(result);',
            expected: 'false',
            instructions: 'Combine the values so the result is true only when both conditions are true.',
            choices: ['true', 'false'],
            answer: 'false',
        },
        {
            id: 'logical-or',
            title: 'Logical operators - OR',
            prompt: 'Use the OR operator to combine false and true.',
            starter: 'const result = false ___ true;\nconsole.log(result);',
            solution: 'const result = false || true;\nconsole.log(result);',
            expected: 'true',
            instructions: 'Combine the values so the result is true when at least one condition is true.',
            choices: ['true', 'false'],
            answer: 'true',
        },
        {
            id: 'arithmetic-addition',
            title: 'Arithmetic operators - Addition',
            prompt: 'Add 5 and 3.',
            starter: 'const result = 5 ___ 3;\nconsole.log(result);',
            solution: 'const result = 5 + 3;\nconsole.log(result);',
            expected: '8',
            instructions: 'Complete the expression to find the total of the two numbers.',
            choices: ['8', '2', '15'],
            answer: '8',
        },
        {
            id: 'arithmetic-subtraction',
            title: 'Arithmetic operators - Subtraction',
            prompt: 'Subtract 3 from 5.',
            starter: 'const result = 5 ___ 3;\nconsole.log(result);',
            solution: 'const result = 5 - 3;\nconsole.log(result);',
            expected: '2',
            instructions: 'Complete the expression to find the difference between the first number and the second.',
            choices: ['8', '2', '15'],
            answer: '2',
        },
        {
            id: 'arithmetic-multiplication',
            title: 'Arithmetic operators - Multiplication',
            prompt: 'Multiply 3 by 4.',
            starter: 'const result = 3 ___ 4;\nconsole.log(result);',
            solution: 'const result = 3 * 4;\nconsole.log(result);',
            expected: '12',
            instructions: 'Complete the expression to find the product of the two numbers.',
            choices: ['7', '12', '1'],
            answer: '12',
        },
        {
            id: 'arithmetic-division',
            title: 'Arithmetic operators - Division',
            prompt: 'Divide 12 by 3.',
            starter: 'const result = 12 ___ 3;\nconsole.log(result);',
            solution: 'const result = 12 / 3;\nconsole.log(result);',
            expected: '4',
            instructions: 'Complete the expression to split the first number into equal groups of the second number.',
            choices: ['36', '4', '9'],
            answer: '4',
        },
        {
            id: 'arithmetic-exponential',
            title: 'Arithmetic operators - Exponential',
            prompt: 'Raise 2 to the power of 3.',
            starter: 'const result = 2 ___ 3;\nconsole.log(result);',
            solution: 'const result = 2 ** 3;\nconsole.log(result);',
            expected: '8',
            instructions: 'Complete the expression to multiply 2 by itself 3 times.',
            choices: ['6', '8', '9'],
            answer: '8',
        },
        {
            id: 'arithmetic-remainder',
            title: 'Arithmetic operators - Remainder',
            prompt: 'Find the remainder when 10 is divided by 3.',
            starter: 'const result = 10 ___ 3;\nconsole.log(result);',
            solution: 'const result = 10 % 3;\nconsole.log(result);',
            expected: '1',
            instructions: 'Complete the expression to find what remains after dividing 10 into groups of 3.',
            choices: ['3', '1', '0'],
            answer: '1',
        },
    ];

    window.jscOperatorTasks = tasks;

    function renderTaskNavigation(nav, activeId) {
        const lessonItem = document.createElement('li');
        const lessonLink = document.createElement('a');
        const lessonIcon = document.createElement('span');
        const lessonLabel = document.createElement('span');
        const lessonCheck = document.createElement('span');
        lessonLink.href = 'lesson.html';
        lessonLink.className = 'sidebar-task sidebar-task--lesson' + (activeId === 'operators-introduction' ? ' active' : '');
        lessonLink.setAttribute('data-task-id', 'operators-introduction');
        lessonIcon.className = 'sidebar-task-icon';
        lessonIcon.textContent = 'L';
        lessonLabel.className = 'sidebar-task-label';
        lessonLabel.textContent = 'Introduction to Operators';
        lessonCheck.className = 'sidebar-task-check';
        lessonCheck.textContent = '\u2713';
        lessonLink.append(lessonIcon, lessonLabel, lessonCheck);
        lessonItem.append(lessonLink);
        nav.append(lessonItem);

        tasks.forEach(function (item) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            const icon = document.createElement('span');
            const label = document.createElement('span');
            const check = document.createElement('span');
            link.href = 'challenge.html?task=' + encodeURIComponent(item.id);
            link.className = 'sidebar-task' + (item.id === activeId ? ' active' : '');
            link.setAttribute('data-task-id', item.id);
            icon.className = 'sidebar-task-icon';
            icon.textContent = 'C';
            label.className = 'sidebar-task-label';
            label.textContent = item.title;
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
        examLink.href = 'test-javascript-operators.html';
        examLink.className = 'sidebar-task sidebar-task--exam' + (activeId === 'test-javascript-operators' ? ' active' : '');
        examLink.setAttribute('data-task-id', 'test-javascript-operators');
        examIcon.className = 'sidebar-task-icon';
        examIcon.textContent = 'E';
        examLabel.className = 'sidebar-task-label';
        examLabel.textContent = 'Test: JavaScript Operators';
        examCheck.className = 'sidebar-task-check';
        examCheck.textContent = '\u2713';
        examLink.append(examIcon, examLabel, examCheck);
        examItem.append(examLink);
        nav.append(examItem);
    }

    window.jscInitOperatorLesson = function () {
        renderTaskNavigation(document.getElementById('operator-task-nav'), 'operators-introduction');
        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('operators');
        }
    };

    window.jscInitOperatorChallenge = function () {
        const requestedId = new URLSearchParams(window.location.search).get('task');
        const task = tasks.find(function (item) { return item.id === requestedId; }) || tasks[0];
        const editor = document.getElementById('code-editor');
        const nav = document.getElementById('operator-task-nav');

        document.body.setAttribute('data-task-id', task.id);
        document.body.setAttribute('data-expected-output', task.expected);
        document.title = 'CodeCraft - ' + task.title;
        document.getElementById('task-title').textContent = task.title;
        document.getElementById('task-instructions').textContent = task.instructions;
        editor.defaultValue = task.starter;
        editor.value = task.starter;

        renderTaskNavigation(nav, task.id);

        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('operators');
        }
    };

    window.jscInitOperatorQuiz = function () {
        renderTaskNavigation(document.getElementById('operator-task-nav'), 'test-javascript-operators');
        if (typeof jscRenderTaskCheckmarks === 'function') {
            jscRenderTaskCheckmarks('operators');
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
            questionPrompt.textContent = task.prompt;
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
                feedback.textContent = 'Not quite. Review the expression and try again.';
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
                    jscMarkCompleted('operators', 'test-javascript-operators');
                    jscRenderTaskCheckmarks('operators');
                }
            }
        });

        renderQuestion();
    };
})();
