class SingleNode{
    constructor(val){
        this.value = val
        this.pointer = null
    }
}

class Single{
    constructor(){
        this.head = null; 
    }
    // method this is what the value you will sit in
    addFont(value){
        var Node = new SingleNode(value);
        Node.pointer = this.head;
        this.head = Node
        return this.head;
    }
    // no params because we are removing, 
    //we need to take the head and put it in a temp node,
    //why because if we remove the front node without setting second node as temp, it will delete everything
    removefront(){
        if(this.head == null){
            return this.head
        }
        // this var will be setting temp (holding to front node)
        var tempnode = this.head;
        // taking head and moving it over to the next
        this.head = tempnode.next;
        tempnode.next = null //disconnect from list 
        return this.head
    }
    front(){
        if(this.head == null){
            return null;
        }else{
            return this.head.value;
        }
    }
}

// to use add font we need a var to call it
    // need to link it with single to check for head
var mySLL = new Single();
mySLL.removefront();
mySLL.addFont(65);
mySLL.addFont(55);
mySLL.addFont(75);

console.log (mySLL);