class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function concatenarListasOrdenadas(head1, head2) {
    const head = new ListNode(null);
    let current = head;
  
    let valor1 = head1;
    let valor2 = head2;
  
    while (valor1 !== null && valor2 !== null) {
      if (valor1.value <= valor2.value) {
        current.next = new ListNode(valor1.value);
        valor1 = valor1.next;
      } else {
        current.next = new ListNode(valor2.value);
        valor2 = valor2.next;
      }
      current = current.next;
    }
  

    if (valor1 !== null) {
      current.next = valor1;
    }
    if (valor2 !== null) {
      current.next = valor2;
    }
  
    return head.next;
  }
  
  const head1 = new ListNode(1);
  head1.next = new ListNode(3);

  
  const head2 = new ListNode(2);
  head2.next = new ListNode(4);

  
  const head = concatenarListasOrdenadas(head1, head2);
  console.log(
    head.value,
    head.next.value,
    head.next.next.value,
    head.next.next.next.value
  );
  