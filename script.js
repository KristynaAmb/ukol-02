const pocet = Number(prompt("Kolik triček si chcete objednat?"));


if (pocet < 50 ) {
   document.body.innerHTML = `Cena vaší objednávky je ${pocet * 300} Kč`
} else if (pocet <= 200) {
   document.body.innerHTML = `Cena vaší objednávky je ${pocet * 250} Kč`
} else if (pocet <= 500) {
   document.body.innerHTML = `Cena vaší objednávky je ${pocet * 200} Kč`
} else if (pocet <= 1000) {
   document.body.innerHTML = `Cena vaší objednávky je ${pocet * 150} Kč`
} else {
   document.body.innerHTML = `Cena vaší objednávky je ${pocet * 120} Kč`
}
