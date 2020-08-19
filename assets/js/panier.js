var qp1 = document.getElementById('qp1');
var qp2 = document.getElementById('qp2');
var qp3 = document.getElementById('qp3');

qp1.textContent = localStorage.getItem('p1') ? localStorage.getItem('p1') : 0;
qp2.textContent = localStorage.getItem('p2') ? localStorage.getItem('p2') : 0;
qp3.textContent = localStorage.getItem('p3') ? localStorage.getItem('p3') : 0;