import "./Profile.css";

function Profile() {
  const name = "Katherine Johnson";
  const field = "Mathematician";

  return (
    <div>
      <img
        className="profile-img"
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt={name}
      />
      <h2>{name}</h2>
      <p>{field}</p>
    </div>
  );
}

export default Profile;
