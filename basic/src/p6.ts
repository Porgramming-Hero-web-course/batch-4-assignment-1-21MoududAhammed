// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(value: Profile, updates: Partial<Profile>): Profile {
  return { ...value, ...updates };
}

const myProfile: Profile = {
  name: "Moudud",
  age: 25,
  email: "test@gmail.com",
};

const result: Profile = updateProfile(myProfile, {
  age: 30,
  email: "moudud@gmail.com",
});
console.log(result);
