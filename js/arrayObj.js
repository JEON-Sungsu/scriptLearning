var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  const cardContent = document.querySelectorAll('.card-body');

  cardContent.forEach(function(el, index) {
    const cardTitle = el.children[0];
    const cardPrice = el.children[1];
    cardTitle.innerHTML = products[index].title;
    cardPrice.innerHTML = products[index].price;
  })