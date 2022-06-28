 export class ToDoList {
     constructor() {
         this.toDoList = [];
     }
     addToDo(todo) {
         this.toDoList.push(todo);
     }

     removeToDo(index) {
         //  console.log(index);
         this.toDoList.splice(index, 1);
     }
     renderToDo() {
         let content = "";
         // Duyệt mảng từ phải qua trái ( bắt đầu từ phần tử cuối cùng của mảng )
         content = this.toDoList.reduceRight((tdContent, item, index) => {

             // tdContent = tdContent(Ndung cũ ) + "noidungmoi"; 
             tdContent += `
<li>
<span>${item.textToDo}</span>
<div class="buttons">
 <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
 <i class="fa fa-trash-alt"></i>
 </button>
 <button class="complete" data-index="${index}" data-status="${item.status}" onclick="CompleteToDo(event)">
 <i class="far fa-check-circle"></i>
 <i class="fas fa-check-circle"></i>
 </button>
</div>

</li>
`;
             return tdContent;
         }, '');
         return content;
     }

     sortToDoList(isDES) {
         this.toDoList.sort((todo, nextodo) => {
             const textA = todo.textToDo.toLowerCase();
             const textB = nextodo.textToDo.toLowerCase();
             return textB.localeCompare(textA);
         }, );
         if (isDES) {
             this.toDoList.reverse();
         }
     }
 }