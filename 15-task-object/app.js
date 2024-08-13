const ToDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        }
    ],
    addTusk: function (title, priority) {
        const newId = Math.max(...this.tasks.map(task => task.id)) + 1;
        const newTask = {
            title: title,
            id: newId,
            priority: priority
        };
       
        this.tasks.push(newTask)
        return newTask
    },
    deleteById: function (id) {
    const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    return this.tasks;
    },
    renewDataById: function(id, newData) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            const newKeys = Object.keys(newData);
            newKeys.forEach(key => {
                if (key in task) {
                    task[key] = newData[key];
                }
            });
        }
        return task;
    },
    sortTuskByPriority:function(sortBy, ascending = true) {
        // Определение функции сравнения
        function compare(a, b) {
            // Сравнение значений по полю sortBy
            if (a[sortBy] < b[sortBy]) {
                if (ascending) {
                    return -1; // Возрастание
                } else {
                    return 1; // Убывание
                }
            }
            if (a[sortBy] > b[sortBy]) {
                if (ascending) {
                    return 1; // Возрастание
                } else {
                    return -1; // Убывание
                }
            }
            return 0; // Значения равны
        }
        
        // Сортировка массива задач
        this.tasks.sort(compare);
    }
}


console.log(ToDoList.addTusk('Сделать домашку', 2));
console.log(ToDoList.addTusk('Убрать мусор', 3));
console.log(ToDoList.addTusk('Сделать 10000 шагов', 3));
console.log(ToDoList.tasks);
console.log(ToDoList.deleteById(2));
console.log(ToDoList.tasks);
ToDoList.renewDataById(1, { title: 'Обновленное название', priority: 2 });
console.log(ToDoList.tasks);
ToDoList.sortTuskByPriority('id');
ToDoList.sortTuskByPriority('priority', false);
console.log(ToDoList.tasks);



