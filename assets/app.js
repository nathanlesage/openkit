document.addEventListener('DOMContentLoaded', function () {
  const searchbar = document.querySelector('input#searchbar')

  // Maybe prefill the searchbar
  const search = new URLSearchParams(window.location.search)
  const query = search.get('q')
  if (query !== null) {
    searchbar.value = query
    filterTools(searchbar.value)
  }

  searchbar.addEventListener('input', (event) => {
    setQuery(searchbar.value)
    filterTools(searchbar.value)
  })
})

function setQuery (q) {
  // Overwrite the history to save the current search field to the URL
  const url = new URL(window.location.toString())
  url.search = q.length > 0 ? '?q=' + encodeURIComponent(q) : ''
  window.history.replaceState({ q }, q, url.toString())
}

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
      return d.querySelector('h2.name').textContent + " " + d.querySelector('span.tags').textContent
    }
  })

  // Show matches
  for (const r of results) {
    descriptors[r.index].style.display = ''
  }
}
