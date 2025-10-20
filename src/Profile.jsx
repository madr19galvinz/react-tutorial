export default function Profile({ name, image, profession }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{profession}</p>
    </div>
  );
}
