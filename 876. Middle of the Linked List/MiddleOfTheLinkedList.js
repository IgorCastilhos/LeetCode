var middleNode = function(head) {
    var p1 = head;
    var p2 = head;
    while(p2 != null && p2.next != null){
        // Em cada iteração, moveremos p1 um nó para frente e moveremos p2 dois nós para frente...
        p1 = p1.next;
        p2 = p2.next.next;
    }
    // Quando p2 alcançar o último nó, p1 estará exatamente no ponto do meio...
    return p1;
};
// Tempo O(n) - Linear
// Espaço O(1) - Constante