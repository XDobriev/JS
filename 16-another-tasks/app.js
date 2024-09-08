const ToDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        }
    ],
    addTask: function (title, priority) {
        const newId = Math.max(...this.tasks.map(task => task.id)) + 1;
        const newTask = {
            title: title,
            id: newId,
            priority: priority
        };
       
        this.tasks.push(newTask);
        return newTask;
    },
    deleteById: function (id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        return this.tasks;
    },
    updateById: function(id, newData) {
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
    sortTaskByPriority: function(sortBy, ascending = true) {
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
};

// Создаем новый объект, который будет содержать задачи и методы из ToDoList
const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }],
    // Копируем методы из ToDoList
    addTask: ToDoList.addTask,
    deleteById: ToDoList.deleteById,
    updateById: ToDoList.updateById,
    sortTaskByPriority: ToDoList.sortTaskByPriority
};

// Привязываем методы к новому объекту
Object.keys(newTask).forEach(key => {
    if (typeof newTask[key] === 'function') {
        newTask[key] = newTask[key].bind(newTask);
    }
});

// Применение методов к новому объекту
newTask.addTask('Новая задача', 2);
console.log(newTask.tasks); // Добавление задачи

newTask.updateById(1, { name: 'Обновленный тест' });
console.log(newTask.tasks); // Обновление задачи

newTask.deleteById(1);
console.log(newTask.tasks); // Удаление задачи

newTask.sortTaskByPriority('order', true);
console.log(newTask.tasks); // Сортировка задач по приоритету
