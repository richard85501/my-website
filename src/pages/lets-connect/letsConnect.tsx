const LetsConnect = () => {
  const handleSendDM = () => {
    // You can customize this action - open email, social media, etc.
    window.open("https://www.linkedin.com/in/chang-liu-08083617a", "_blank");
  };

  return (
    <div className="py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Let's Connect</h2>

        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gray-600">
            Want to chat? I want to connect with likeminded individuals!
          </p>

          <p className="text-lg md:text-xl text-gray-600">
            <button
              onClick={handleSendDM}
              className="text-blue-500 hover:text-blue-600 underline transition-colors duration-200 font-medium cursor-pointer"
            >
              Send me a DM
            </button>
            <span className="ml-2">and I'll gladly respond!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
