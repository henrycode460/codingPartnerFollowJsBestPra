 class MyObjects {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  
    get toObject() {
      return { description: this.description, completed: this.completed, index: this.index };
    }
  }

export {MyObjects}