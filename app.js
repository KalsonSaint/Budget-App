const budgetController = (() => {
    
})();

const UIController = (() => {
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: () => {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // either inc or exp
                descriiption: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMString: () => {
            return DOMStrings;
        }
    };
})();

const appController = ((budgetCtrl, UICtrl) => {
    const setEventListeners = () => {
        let DOM = UICtrl.getDOMString();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e)=>{
            if(e.keycode === 13 || e.which === 13){
                ctrlAddItem();
            }
        });
    };

    const ctrlAddItem = () => {
         // Get field input data
        let input = UICtrl.getInput();
        console.log(input);
        
        // Add item to budget controller

        //  Add item to UI
 
        // Calculate the budget

    };
})(budgetController, UIController);
