const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		toDoList: ["Make the bed", "Walk the dog"],
	  },
	  actions: {
		addTask: (task) => {
		  //get the store
		  const store = getStore();
		  store.toDoList.push(task)
		},
  
		deleteTask: (i) => {
		  //get the store
		  const store = getStore();
		  setStore({
			...store,
			toDoList: store.toDoList.filter((_, index) => {
			  return index != i;
			}),
		  });
		},
	  },
	};
  };
  
  export default getState;