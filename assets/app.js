document.addEventListener('DOMContentLoaded', function () {
  console.log('Starting app')

  const searchbar = document.querySelector('input#searchbar')
  searchbar.addEventListener('input', (event) => {
    filterTools(searchbar.value)
  })
})



function filterTools (query) {
  const descriptors = [...document.querySelectorAll('div.tool-descriptor')]

  if (query.trim() === '') {
    // Unhide all
    for (const d of descriptors) {
      d.style.display = ''
    }
    return // No filtering
  }

  // Hide all
  for (const d of descriptors) {
    d.style.display = 'none'
  }

  // Match descriptors
  const results = fuzzy.filter(query, descriptors, {
    extract (d) {
      // Must return the value for which to match
      return d.querySelector('h2.name').textContent
    }
  })

  // Show matches
  for (const r of results) {
    descriptors[r.index].style.display = ''
  }
}
