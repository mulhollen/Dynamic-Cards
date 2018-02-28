# Dynamic-Cards

Instructions
    
    1. Create an HTML page that contains a text area and a button labeled Create.
    
    2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
    
    3. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
Notes
    
    1. In order to know which delete button the user clicked on, each one must have a unique value in its id attribute.
    
    2. Remember your factory and generator functions. Generator should yield a unique identifier. Factory should generate DOM string.
    
    3. You can't attach an event listener to an element until it has been added to the DOM.