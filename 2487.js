//First solution
// var removeNodes = (head) => {
//     if (!head) return null;
//     if (!head.next) return head;
//     var result = [];
//     while(head) {
//         var flag = true;
//         var current = head.next;
//         var prev = head;
//         while(current) {
//             if (current.val > head.val) {
//                 head = prev;
//                 flag = false;
//                 current = null;
//             } else {
//                 prev = current;
//                 current = current.next;
//             }
//         }
//         if (flag) result.push(head);
//         head = head.next;
//     }

//     for (let i = 0; i < result.length; i++) {
//         if (i === result.length - 1) {
//             result[i].next = null;
//             break;
//         }
//         result[i].next = result[i+1];
//     }
//     return result[0];
// }

//Recursive solution 
// const removeNodes = head => {
//     if (!head.next) return head;
//     head.next = removeNodes(head.next);
//     return head.next.val > head.val ? head.next : head;
// };

//My best solution
const removeNodes = head => {
    var current = head;
    var nodes = [];

    while(current) {
        while (nodes.length && current.val > nodes[nodes.length - 1].val) {
            nodes.pop();
        }
        nodes.push(current);
        current = current.next;
    }
    for (var i = 0; i < nodes.length; i++) {
        if (i === nodes.length - 1) {
            nodes[i].next = null;
            break;
        }
        nodes[i].next = nodes[i+1];
    }
    return nodes[0];
};
