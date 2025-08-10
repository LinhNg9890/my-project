type SidebarProps = {
    isOpen: boolean;
  };
  
  export default function Sidebar({ isOpen }: SidebarProps) {
    return (
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-300 p-4 z-20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button className="w-full bg-gray-200 text-black p-2 rounded mb-4">
          + New Chat
        </button>
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded">Chat 1</li>
          <li className="hover:bg-gray-200 p-2 rounded">Chat 2</li>
        </ul>
      </div>
    );
  }
  