import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => {
      const newProfile = { ...prev, [name]: value };
      localStorage.setItem('userProfile', JSON.stringify(newProfile));
      return newProfile;
    });
  };

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <input
          name="name"
          value={profile.name || ''}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="major"
          value={profile.major || ''}
          onChange={handleChange}
          placeholder="Major"
        />
        <textarea
          name="bio"
          value={profile.bio || ''}
          onChange={handleChange}
          placeholder="Bio"
        />
      </form>
    </div>
  );
}

export default Profile;