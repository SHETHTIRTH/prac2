console.log("task 1: create a task list ");
const task =[
    { task:"sing",duetime:5,priority:2},
    { task:"dance", duetime:8,priority:5},
    { task:"skit",duetime:10,priority:4},
];
console.log(task);



console.log("task 2: add new task");
const add=(list,n)=>{
    list.push(n);
}
add (task ,{task:"play",duetime:11,priority:6});
console.log(task);


console.log("task 3: sorted list");
const sortlist=(list)=>{
    return list.sort((a,b) => a.priority - b.priority);
}
sortlist(task);
console.log(task);



console.log("Display tasks due within a certain timeframe (e.g., next 10 minutes)")
const duetask=(list,time)=>
{
    return list.filter(obj=>(obj.duetime <= time));
}
console.log(duetask(task,10));



task.forEach(tasks=>{
    setTimeout(()=>{
        console.log(`remider task ${tasks.task} running now`);
    },tasks.duetime*1000);
})