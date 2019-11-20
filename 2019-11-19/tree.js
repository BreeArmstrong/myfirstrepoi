class Node {
    constructor (val, left, right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
    printVal(val, left, right){
        console.log(`This value is ${this.val} and the left child node is ${this.left}, the right child node is ${this.right} `)
    };
    static printTree(root) {
        const nodeArr = [root];
        // Take in root and consider the child nodes
        console.log(root.val);
        let nodeLevel = 0;
          if (nodeLevel == 1){
            newRoot = root.left
                }
        while (root.left !== null && root.right !== null){

            const childNode = [];
            {
                childNode.push(root.left);
                childNode.push(root.right);
                console.log(childNode);
                return childNode;
                nodeArr.push[childNode];
            }
            nodeLevel += 1;

        }
        console.log(nodeArr);


        //push them into a queue

        //pop it out of a queue and print
    }
}

const root = new Node(40, 30, 50);
const child1 = new Node(30, 25,35);
const sibling1 = new Node(50, 45,55);
const child2 = new Node(25, null, null);
Node.printTree(root);


// root.printVal();
// child1.printVal();
// sibling1.printVal();
// child2.printVal();