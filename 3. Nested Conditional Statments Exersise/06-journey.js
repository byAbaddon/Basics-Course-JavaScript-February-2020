function journey(arg) {
  [budget, seaseon] = [+arg[0], arg[1]]
  country = ''
  place = ''

  switch (true) {
    case budget <= 100:
      country = 'Bulgaria'
      if (seaseon === 'summer') {
        place = 'Camp'
        budget -= budget * 0.70
      } else {
        place = 'Hotel'
        budget -= budget * 0.30
      }
      break;
    case budget > 100 && budget <= 1000:
      country = 'Balkans'
      if (seaseon === 'summer') {
        place = 'Camp'
        budget -= budget * 0.60
      } else {
        place = 'Hotel'
        budget -= budget * 0.20
      }
      break;

    case budget > 1000:
      country = 'Europe'
      place = 'Hotel'
      budget -= budget * 0.10
      break;
  }

  console.log(`Somewhere in ${country}\n${place} - ${budget.toFixed(2)}`);
}

// journey(['50', 'summer'])
//journey(['1500', 'summer'])