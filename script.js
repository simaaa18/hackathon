function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  // menampilkan lokasi user
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
  }
  
  // memuat properti berdasarkan lokasi user
  function loadProperties() {
    getLocation();
  }

  // Lampirkan pendengar acara ke tombol pencarian
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", loadProperties);

function handleKotaPilihanClick() {
    // Handle Kota Pilihan click
  }

  function handlePropertiBaruClick() {
    // Handle Properti Baru click 
  }

  function handleAsuransiClick() {
    // Handle Asuransi click
  }

  function handleTentangKamiClick() {
    // Handle Tentang Kami click
  }

  function handlePanduanClick() {
    // Handle Panduan click 
  }

  function handleMasukClick() {
    // Handle Masuk click
  }

  function handleDaftarClick() {
    // Handle Daftar click
  }

  function handleTypeClick() {
    // Handle type button click
    console.log('Type button clicked');
  }

  function handleLocationClick() {
    // Handle location button click 
    console.log('Location button clicked');
  }

  function handleSearchClick() {
    // Handle search button click
    console.log('Search button clicked');
  }