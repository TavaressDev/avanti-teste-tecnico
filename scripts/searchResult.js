document.addEventListener('DOMContentLoaded', function() {
  function handleSearch(inputElement, searchIcon, isMobile) {
    searchIcon.addEventListener('click', function() {
      const searchTerm = inputElement.value.trim();
      const container = inputElement.closest(isMobile ? '.mobile-header-input' : '.input-container');
      
      const existingResult = document.querySelector('.search-result');
      if (existingResult) {
        existingResult.remove();
      }
      
      if (searchTerm) {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'search-result-container';
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'search-result';
        resultDiv.textContent = `Você procurou por: ${searchTerm}`;
        
        if (isMobile) {
          resultContainer.style.width = '100%';
          resultDiv.style.width = '100%';
          resultDiv.style.padding = '10px';
          resultDiv.style.backgroundColor = '#white';
          resultDiv.style.borderRadius = '4px';
          resultDiv.style.marginTop = '1px';
        } 
        else {
          resultContainer.style.position = 'absolute';
          resultContainer.style.left = '33.5%';
          resultContainer.style.transform = 'translateX(-50%)';
          resultContainer.style.top = '60%';
          resultContainer.style.width = inputElement.offsetWidth + 'px';
          
          resultDiv.style.padding = '10px';
          resultDiv.style.backgroundColor = '#white';
          resultDiv.style.borderRadius = '4px';
          resultDiv.style.textAlign = 'center';
        }
        
        resultContainer.appendChild(resultDiv);
        
        container.parentNode.insertBefore(resultContainer, container.nextSibling);
      }
    });
    
    inputElement.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchIcon.click();
      }
    });
  }

  const mobileInput = document.querySelector('.search-input-mobile');
  const mobileSearchIcon = document.querySelector('.mobile-header-input .search-icon');
  if (mobileInput && mobileSearchIcon) {
    handleSearch(mobileInput, mobileSearchIcon, true);
  }
  
  const desktopInput = document.querySelector('.search-input');
  const desktopSearchIcon = document.querySelector('.input-container .search-icon');
  if (desktopInput && desktopSearchIcon) {
    handleSearch(desktopInput, desktopSearchIcon, false);
  }
});