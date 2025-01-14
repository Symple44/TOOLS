// src/components/layout/Header.jsx
export const Header = ({ openSidebar }) => (
  <header className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
    <button
      onClick={openSidebar}
      className="p-2 rounded-md hover:bg-gray-100"
    >
      <Menu className="h-6 w-6" />
    </button>
    <h1 className="font-medium">Boîte à Outils</h1>
  </header>
);
