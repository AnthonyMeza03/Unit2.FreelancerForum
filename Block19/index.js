const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  function calculateAveragePrice() {
    let totalStartingPrice = 0;
    for (let i = 0; i < freelancers.length; i++) {
      totalStartingPrice += freelancers[i].price;
    }
    const averagePrice = totalStartingPrice / freelancers.length;
    document.getElementById('averagePrice').textContent = averagePrice.toFixed(2);
  }
  
  function renderFreelancers() {
    const freelancersDiv = document.getElementById('freelancers');
    freelancersDiv.innerHTML = '';
    for (let i = 0; i < freelancers.length; i++) {
      const freelancerDiv = document.createElement('div');
      freelancerDiv.classList.add('freelancer');
      freelancerDiv.innerHTML = `
        <strong>${freelancers[i].name}</strong> - ${freelancers[i].occupation}<br>
        Starting Price: $${freelancers[i].price}
      `;
      freelancersDiv.appendChild(freelancerDiv);
    }
    calculateAveragePrice();
  }
  
  renderFreelancers();
  
  setInterval(() => {
    const newFreelancer = { name: "Dr. Flare", price: Math.floor(Math.random() * 100) + 1, occupation: "painter" };
    freelancers.push(newFreelancer);
    renderFreelancers();
  }, 5000);