import React, { useState, useEffect } from 'react';

function StudyBuddy() {
  const [buddies, setBuddies] = useState([]);
  const [newBuddy, setNewBuddy] = useState('');

  useEffect(() => {
    const storedBuddies = localStorage.getItem('studyBuddies');
    if (storedBuddies) {
      setBuddies(JSON.parse(storedBuddies));
    }
  }, []);

  const addBuddy = () => {
    if (newBuddy.trim()) {
      const updatedBuddies = [...buddies, { id: Date.now(), name: newBuddy }];
      setBuddies(updatedBuddies);
      localStorage.setItem('studyBuddies', JSON.stringify(updatedBuddies));
      setNewBuddy('');
    }
  };

  return (
    <div>
      <h2>Study Buddy Finder</h2>
      <input
        value={newBuddy}
        onChange={(e) => setNewBuddy(e.target.value)}
        placeholder="Buddy name"
      />
      <button onClick={addBuddy}>Add Buddy</button>
      <ul>
        {buddies.map(buddy => (
          <li key={buddy.id}>{buddy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudyBuddy;