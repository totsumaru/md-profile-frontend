export default function Header() {
  return (
    <div className="w-full top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          {/* 左側(ロゴ) */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://via.placeholder.com/150"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
