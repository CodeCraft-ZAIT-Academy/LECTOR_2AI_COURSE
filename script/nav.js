// Toggles the category list under a top-level sidebar section (e.g. "JS Basics").
// Called from the section link itself, so the click both expands/collapses the
// subcategories and still follows the link to navigate to that page.
function jscToggleSidebarGroup(link, event) {
    const group = link.closest('.sidebar-group');
    if (!group) {
        return;
    }
    // If the link points to the page we're already on, following it would just
    // reload the current page, so ignore the click instead.
    if (link.pathname === window.location.pathname) {
        if (event) {
            event.preventDefault();
        }
        return;
    }
    const subnav = group.querySelector('.sidebar-subnav');
    const expanded = group.classList.toggle('is-expanded');
    if (subnav) {
        subnav.hidden = !expanded;
    }
    link.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

// Prevents clicking a sidebar link that points to the page already open,
// which would otherwise just reload the current page.
function jscGuardSamePageLink(link, event) {
    if (link.pathname === window.location.pathname) {
        if (event) {
            event.preventDefault();
        }
    }
}
