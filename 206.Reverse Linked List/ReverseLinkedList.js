const reverseList = function (head) {
    // Special Case
    if (!head || !head.next) return head

    const reversed = reverseList(head.next)
    head.next.next = head
    head.next = null
    return reversed
}