document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    const textarea = document.querySelector('textarea');
    const submitBtn = document.querySelector('.submit-btn');
    const popup = document.getElementById('moodPopup');
    const openPopupBtn = document.querySelector('.open-mood-popup');
    let selectedMood = null;
  
    // Open mood popup
    openPopupBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  
    // Handle emoji selection
    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        emojis.forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');
        selectedMood = emoji.textContent;
      });
    });
  
    // Save mood and note
    submitBtn.addEventListener('click', () => {
      if (!selectedMood) {
        alert('Please select a mood before saving!');
        return;
      }
  
      const note = textarea.value;
      const entry = {
        mood: selectedMood,
        note: note.trim(),
        timestamp: new Date().toISOString()
      };
  
      const moodLog = JSON.parse(localStorage.getItem('moodLog')) || [];
      moodLog.push(entry);
      localStorage.setItem('moodLog', JSON.stringify(moodLog));
  
      // Redirect to calendar page
      window.location.href = 'mood1.html';
    });
  });
  