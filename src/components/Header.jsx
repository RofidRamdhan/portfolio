const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">MUHAMMAD ROFIID RAMDHAN</h1>
        <p className="text-xl mb-8">Machine Learning | IoT</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl">
          View Portfolio
        </button>
      </div>
    </header>
  );
};

export default Header;