export default function Card({ userData, close }) {
  return (
    <div className="w-full bg-dark rounded-2xl p-4 pt-15 flex flex-col gap-7 relative">
      <button
        onClick={close}
        className="bg-primary w-7 h-7 rounded-full text-white text-sm font-bold absolute top-3 right-3 cursor-pointer"
      >
        X
      </button>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        <img
          src={userData.avatar_url}
          alt="avatar"
          className="w-30 h-30 rounded-full mx-auto mb-2 border-3 border-primary hover:w-32 hover:h-32"
        />
      </a>
      <div className="flex flex-col items-center gap-1.5 text-white">
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-bold hover:text-primary hover:text-2xl">
            {userData.name}
          </h3>
        </a>
        <p className="text-sm text-gray-500">{userData.login}</p>
        <p className="text-sm text-gray-500">{userData.bio}</p>
      </div>
      <div className="w-full flex gap-2 text-white text-sm ">
        <div className="flex-1 py-1.5 bg-primary rounded-lg flex flex-col items-center">
          <span className="font-light">Followers</span>
          <span>{userData.followers}</span>
        </div>
        <div className="flex-1  py-1.5 bg-primary rounded-lg flex flex-col items-center">
          <span className="font-light">Following</span>
          <span>{userData.following}</span>
        </div>
      </div>
    </div>
  );
}
