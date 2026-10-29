// Shared progress tracking used across category, task-list, and challenge pages.
// Completed task ids are stored per category in localStorage so progress persists
// between page loads (e.g. "jsc_progress_variables" -> ["hello-world", ...]).

function jscGetCompleted(categoryId) {
    try {
        const completed = JSON.parse(localStorage.getItem('jsc_progress_' + categoryId) || '[]');
        const retiredVariableLessons = [
            'console-and-intro-to-variables',
            'create-variables-with-const',
            'javascript-comments',
        ];

        if (categoryId !== 'variables' || !Array.isArray(completed)
            || !completed.some((taskId) => retiredVariableLessons.includes(taskId))) {
            return completed;
        }

        const migrated = completed.filter((taskId) => !retiredVariableLessons.includes(taskId));
        if (migrated.indexOf('variables-introduction') === -1) {
            migrated.push('variables-introduction');
        }
        localStorage.setItem('jsc_progress_variables', JSON.stringify(migrated));
        return migrated;
    } catch (e) {
        return [];
    }
}

function jscIsCompleted(categoryId, taskId) {
    return jscGetCompleted(categoryId).indexOf(taskId) !== -1;
}

function jscMarkCompleted(categoryId, taskId) {
    const completed = jscGetCompleted(categoryId);
    if (completed.indexOf(taskId) === -1) {
        completed.push(taskId);
        localStorage.setItem('jsc_progress_' + categoryId, JSON.stringify(completed));
    }
}

// Adds the "is-completed" class to every element carrying a [data-task-id]
// attribute whose task has already been completed for the given category.
// Used on the category task-list page and on each task page's sidebar nav.
function jscRenderTaskCheckmarks(categoryId) {
    document.querySelectorAll('[data-task-id]').forEach((el) => {
        const taskId = el.getAttribute('data-task-id');
        if (jscIsCompleted(categoryId, taskId)) {
            el.classList.add('is-completed');
        }
    });
}

// Updates every "completed/total" counter on the overview page that carries
// [data-category] and [data-category-total] attributes. Roadmap circles also
// get a --progress custom property so their conic-gradient ring fills to
// match the completed proportion.
function jscRenderCategoryCounts() {
    document.querySelectorAll('[data-category]').forEach((el) => {
        const categoryId = el.getAttribute('data-category');
        const total = parseInt(el.getAttribute('data-category-total'), 10) || 0;
        const completed = jscGetCompleted(categoryId).length;
        const label = completed + '/' + total;
        const valueEl = el.querySelector('.roadmap-circle-value');
        if (valueEl) {
            valueEl.textContent = label;
            const percent = total > 0 ? Math.min(100, (completed / total) * 100) : 0;
            el.style.setProperty('--progress', percent + '%');
        } else {
            el.textContent = label;
        }
    });
}
