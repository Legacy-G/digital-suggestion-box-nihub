import logo from '../assets/NiHUB.png';

const AuthCard = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col items-center justify-center px-4">
      <div className="text-center mb-4">
        <img src={logo} className="h-10 mx-auto" />
        <h1 className="text-xl font-bold">Insights</h1>
      </div>

      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter the admin credentials to access the dashboard.
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
