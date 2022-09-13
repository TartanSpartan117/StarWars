const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  if (value === "films") {
    data.results.forEach((item) => {
      output += `
        <div class="card p-3 m-3" style="opacity:.8">
           <h4 class="card-title text-center">${item.title}</h4>
           <div class="card-content">
              <span style="text-decoration:underline">Producer</span>: ${item.producer}<br>
              <span style="text-decoration:underline">Director</span>: ${item.director}<br>
              <span style="text-decoration:underline">Release Date</span>: ${item.release_date}<br><br>
              <p class=""text-center> ${item.opening_crawl}</p>
           </div>
        </div>
      `;
    });
  }

  if (value === "people") {
    data.results.forEach((item) => {
      output += `
        <div class="card p-3 m-3" style="opacity:.8">
          <h4 class="card-title text-center">${item.name}</h4>
          <div class="card-content">
            <span style="text-decoration:underline">Birth Year</span>: ${item.birth_year}<br>
            <span style="text-decoration:underline">Skin Color</span>: ${item.skin_color}<br>
            <span style="text-decoration:underline">Hair Color</span>: ${item.hair_color}<br>
            <span style="text-decoration:underline">Eye Color</span>: ${item.eye_color}<br>
            <span style="text-decoration:underline">Height</span>: ${item.height}<br>
            <span style="text-decoration:underline">Gender</span>: ${item.gender}<br>
          </div>
        </div>
      `;
    });
  }

  if (value === "planets") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
      <h4 class="card-title text-center">${item.name}</h4>
      <div class="card-content">
        <span style="text-decoration:underline">Climate</span>: ${item.climate}<br>
        <span style="text-decoration:underline">Diameter</span>: ${item.diameter}<br>
        <span style="text-decoration:underline">Orbital Period</span>: ${item.orbital_period}<br>
        <span style="text-decoration:underline">Population</span>: ${item.population}<br>
        <span style="text-decoration:underline">Terrain</span>: ${item.terrain}<br>
      </div>
    </div>
      `;
    });
  }

  if (value === "starships") {
    data.results.forEach((item) => {
      output += `
        <div class="card p-3 m-3" style="opacity:.8">
          <h4 class="card-title text-center">${item.name}</h4>
          <div class="card-content">
            <span style="text-decoration:underline">Model</span>: ${item.model}<br>
            <span style="text-decoration:underline">MGLT</span>: ${item.MGLT}<br>
            <span style="text-decoration:underline">Hyperdrive Rating</span>: ${item.hyperdrive_rating}<br>
            <span style="text-decoration:underline">Cargo Capacity</span>: ${item.cargo_capacity}<br>
            <span style="text-decoration:underline">Consumables</span>: ${item.consumables}<br>
            <span style="text-decoration:underline">Cost In Credits</span>: ${item.cost_in_credits}<br>
            <span style="text-decoration:underline">Crew</span>: ${item.crew}<br>
            <span style="text-decoration:underline">Passengers</span>: ${item.passengers}<br>
          </div>
        </div>
      `;
    });
  }

  if (value === "vehicles") {
    data.results.forEach((item) => {
      output += `
        <div class="card p-3 m-3" style="opacity:.8">
          <h4 class="card-title text-center">${item.name}</h4>
        <div class="card-body">
          <div class="card-content">
            <span style="text-decoration:underline">Model</span>: ${item.model}<br>
            <span style="text-decoration:underline">Vehicle Class</span>: ${item.vehicle_class}<br>
            <span style="text-decoration:underline">Cargo Capacity</span>: ${item.cargo_capacity}<br>
            <span style="text-decoration:underline">Consumables</span>: ${item.consumables}<br>
            <span style="text-decoration:underline">Cost In Credits</span>: ${item.cost_in_credits}<br>
            <span style="text-decoration:underline">Crew</span>: ${item.crew}<br>
            <span style="text-decoration:underline">Passengers</span>: ${item.passengers}<br>
          </div>
          </div>
        </div>
      `;
    });
  }

  results.innerHTML = output;
}

//event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
