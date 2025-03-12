const Blender = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-10 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Blender 3D Models</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl">
        Explore my 3D modeling and rendering projects created using Blender.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
          <div className="relative w-full h-64">
            <img
              src="src/assets/blender-sword-01.png"
              alt="3D Sword Model"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fantasy Sword
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A detailed 3D model of a fantasy sword created in Blender, featuring realistic materials and textures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blender;
