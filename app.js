const budgetController = (() => {
  const Expense = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: (type, des, val) => {
      let newItem, ID;
      //   Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      //   Create new item 'inc' or 'exp'
      if (newItem === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (newItem === "inc") {
        newItem = new Income(ID, des, val);
      }
      //   push it to data structure
      data.allItems[type].push(newItem);

      //   return new element
      return newItem;
    },
    testing: () => {
      console.log(data);
    }
  };
})();

const UIController = (() => {
  let DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // either inc or exp
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
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", e => {
      if (e.keycode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

  const ctrlAddItem = () => {
    let input, newItem;
    // Get field input data
    input = UICtrl.getInput();

    // Add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.des, input.value);
    //  Add item to UI

    // Calculate the budget
  };

  return {
    init: () => {
      console.log("Application Started...");
      setEventListeners();
    }
  };
})(budgetController, UIController);

appController.init();
