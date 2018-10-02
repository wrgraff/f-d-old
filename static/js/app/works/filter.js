var switcher = document.querySelectorAll('.works-filter');
var switcherButtons = document.querySelectorAll('.works-filter__item');
var switcherButtonsLabels = [];
for (var i = 0; i < switcherButtons.length; i++) {
    switcherButtonsLabels.push(switcherButtons[i].dataset.label);
};
var switcherButtonsIsActive = [];
for (var i = 0; i < switcherButtons.length; i++) {
    switcherButtonsIsActive.push(false);
}

var filterWorksItems = function(label, workItems) {
    // Check each item
    for (var i = 0; i < workItems.length; i++) {
        // Get item labels
        var workItemLabelsValues = [];
        var workItemLabels = workItems[i].querySelectorAll('.label');
        for (var j = 0; j < workItemLabels.length; j++) {
            workItemLabelsValues.push(workItemLabels[j].textContent);
        }
        // Hide element if selected label not similar to item label
        workItems[i].classList.add('works__item_disabled');
        for (var k = 0; k < workItemLabelsValues.length; k++) {
            if (workItemLabelsValues[k] === label) {
                workItems[i].classList.remove('works__item_disabled');
            }
        };
    };
};
var clearWorksItems = function(workItems) {
    // Remove hide class from all items
    for (var i = 0; i < workItems.length; i++) {
        workItems[i].classList.remove('works__item_disabled');
    };
};
var filterWorks = function(button, label, isActive, i) {
    // Get gallery items
    var workItems = document.querySelectorAll('.works__item');

    return function() {
        if (!isActive[i]) {
            // If pressed not active button
            // Removing active classes from all buttons
            for (var z = 0; z < switcherButtons.length; z++) {
                switcherButtons[z].classList.remove('works-filter__item_active');
            }
            // Adding active class to pressed button
            button.classList.add('works-filter__item_active');
            // Set all buttons to not active status
            for (var j = 0; j < isActive.length; j++) {
                isActive[j] = false;
            }
            // Set active status to pressed button
            isActive[i] = true;
            // Run filter for gallery items
            filterWorksItems(label, workItems);
        } else {
            // If pressed active button
            // Removing active class from pressed button
            button.classList.remove('works-filter__item_active');
            // Set pressed button to not active status
            isActive[i] = false;
            // Show all gallery items
            clearWorksItems(workItems);
        };
    };
};

var galleryListener = function() {
    for (var i = 0; i < switcherButtons.length; i++) {
        switcherButtons[i].addEventListener('click', filterWorks(switcherButtons[i], switcherButtonsLabels[i], switcherButtonsIsActive, i));
    };
};

galleryListener();
