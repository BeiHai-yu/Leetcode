import ListNode from "./ListNode.js";

let root3 = new ListNode(3), root2 = new ListNode(2, root3), root = new ListNode(1, root2);
var reverseList = function(head) {
    let pre = null;
    while(head !== null) {
        let temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }
    return pre;
};
console.log(reverseList(root));