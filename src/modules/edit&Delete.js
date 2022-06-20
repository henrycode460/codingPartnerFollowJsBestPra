 const deleteItem = () => {
    const i = parseInt(list.id, 10) - 1;
    form.removeChild(list);
    array.splice(i, 1);
    for (let i; i < array.length; i += 1) {
      array[i].index = i + 1;
      form.children[i + 1].id = i + 1;
    }

    addToLocalStorage();
  };

  export default {deleteItem}