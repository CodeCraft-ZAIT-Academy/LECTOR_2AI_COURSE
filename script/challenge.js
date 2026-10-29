// Runs the code typed into the editor and prints console output to the on-page console.
// If the page defines an expected result (via data-expected-output on <body>), the
// actual output is compared against it and the task is marked completed on a match.
function runCode() {
    const editor = document.getElementById('code-editor');
    const output = document.getElementById('console-output');
    const statusEl = document.getElementById('result-status');
    if (!editor || !output) {
        return;
    }

    const lines = [];
    const formatArg = (arg) => {
        if (typeof arg === 'object' && arg !== null) {
            try {
                return JSON.stringify(arg);
            } catch (e) {
                return String(arg);
            }
        }
        return String(arg);
    };

    const sandboxConsole = {
        log: (...args) => lines.push(args.map(formatArg).join(' ')),
        error: (...args) => lines.push('Error: ' + args.map(formatArg).join(' ')),
        warn: (...args) => lines.push('Warning: ' + args.map(formatArg).join(' ')),
        info: (...args) => lines.push(args.map(formatArg).join(' ')),
    };

    try {
        const userFunction = new Function('console', editor.value);
        userFunction(sandboxConsole);
    } catch (error) {
        lines.push('Error: ' + error.message);
    }

    output.textContent = lines.join('\n');

    checkResult(lines.join('\n'), statusEl);
}

// Restores the editor to the starter code it was loaded with, and clears the
// console output and result status.
function resetCode() {
    const editor = document.getElementById('code-editor');
    const output = document.getElementById('console-output');
    const statusEl = document.getElementById('result-status');
    if (!editor) {
        return;
    }

    editor.value = editor.defaultValue;
    if (output) {
        output.textContent = '';
    }
    if (statusEl) {
        statusEl.textContent = '';
        statusEl.className = 'result-status';
    }
    hideAuthorSolution();
}

// Compares the produced output against the page's expected result (if any) and
// marks the task as completed, refreshing the current page's sidebar checkmark.
// Supports two verification modes via data attributes on <body>:
// - data-expected-output: the output must match this exact text.
// - data-reject-output: the output must be non-empty and must NOT match this
//   text (used for open-ended tasks where any assigned value is acceptable).
function checkResult(actualOutput, statusEl) {
    const body = document.body;
    const expectedOutput = body.getAttribute('data-expected-output');
    const rejectOutput = body.getAttribute('data-reject-output');
    if ((expectedOutput === null && rejectOutput === null) || !statusEl) {
        return;
    }

    const taskId = body.getAttribute('data-task-id');
    const categoryId = body.getAttribute('data-category-id');
    const trimmedOutput = actualOutput.trim();
    const isMatch = expectedOutput !== null
        ? trimmedOutput === expectedOutput.trim()
        : trimmedOutput !== ''
            && trimmedOutput !== rejectOutput.trim()
            && !trimmedOutput.startsWith('Error:');

    if (isMatch) {
        statusEl.textContent = '✓ Correct! Task completed.';
        statusEl.className = 'result-status result-status--success';

        if (taskId && categoryId && typeof jscMarkCompleted === 'function') {
            jscMarkCompleted(categoryId, taskId);
            const navLink = document.querySelector('.sidebar-nav a[data-task-id="' + taskId + '"]');
            if (navLink) {
                navLink.classList.add('is-completed');
            }
        }

        showAuthorSolutionIfDifferent();
    } else {
        statusEl.textContent = '✗ Not quite. Check the console output and try again.';
        statusEl.className = 'result-status result-status--error';
        hideAuthorSolution();
    }
}

// Normalizes code for a loose comparison by stripping all whitespace, so that
// formatting differences (indentation, blank lines, line endings) don't count
// as a "different" solution.
function normalizeCodeForComparison(code) {
    return code.replace(/\s+/g, '');
}

// If the page provides an author's solution (in a hidden #author-solution
// element) and the submitted code differs from it, reveals the solution panel.
// If the submitted code matches the author's solution, the panel stays hidden.
function showAuthorSolutionIfDifferent() {
    const editor = document.getElementById('code-editor');
    const solutionSource = document.getElementById('author-solution');
    const solutionPanel = document.getElementById('solution-panel');
    const solutionCodeEl = document.getElementById('solution-code');
    if (!editor || !solutionSource || !solutionPanel || !solutionCodeEl) {
        return;
    }

    const submittedCode = normalizeCodeForComparison(editor.value);
    const authorCode = normalizeCodeForComparison(solutionSource.textContent);

    if (submittedCode !== authorCode) {
        solutionCodeEl.textContent = solutionSource.textContent.trim();
        solutionPanel.hidden = false;
    } else {
        solutionPanel.hidden = true;
    }
}

// Hides the author's solution panel, e.g. after a failed run.
function hideAuthorSolution() {
    const solutionPanel = document.getElementById('solution-panel');
    if (solutionPanel) {
        solutionPanel.hidden = true;
    }
}

