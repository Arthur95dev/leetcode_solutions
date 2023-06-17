var removeNthFromEnd = function(head, n) {
    let nodeValueArr = []

    const getValue = (node) => {
        if (!node) return
        if (node.val === undefined) node.val = 0
        nodeValueArr.push(node.val)
        getValue(node.next)
    }

    getValue(head)

    let iter = nodeValueArr.length - n

    nodeValueArr = nodeValueArr.map(num => new ListNode(num))
    nodeValueArr.splice(iter, 1)

    if (nodeValueArr.length === 0) return null
    for (let i = 0; i < nodeValueArr.length - 1; i++) {
        nodeValueArr[i].next = nodeValueArr[i + 1]
    }
    return nodeValueArr[0]
};
