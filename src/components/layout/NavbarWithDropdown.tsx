import { FiSearch, FiMenu } from 'react-icons/fi';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded className="bg-white shadow-md text-black ml-64 px-6">
      <div className="flex items-center gap-4 w-full justify-between">
        {/* Brand + Burger Icon */}
        <div className="flex items-center gap-4">
          {/* Mobile menu icon */}
          <button className="md:hidden p-2">
            <FiMenu className="w-6 h-6 text-gray-700" />
          </button>
          <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900">
              Basic Kanban Workflow
            </span>
          </Navbar.Brand>
        </div>

        {/* Search */}
        <form className="hidden md:block w-[400px]">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-5 py-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FiSearch className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </form>

        {/* Avatar Dropdown */}
        <Dropdown arrowIcon={false} inline label={<Avatar alt="User" img="https://i.pravatar.cc/40" rounded />}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@jobsicker.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
