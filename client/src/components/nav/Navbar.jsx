import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [login, setLogin] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex gap-2 flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <h1 className="text-white text-xl sm:text-2xl">
                    Build_Resume
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      //   aria-current={item.current ? "page" : undefined}
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to={"/about"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      //   aria-current={item.current ? "page" : undefined}
                    >
                      About
                    </NavLink>

                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      }
                      //   aria-current={item.current ? "page" : undefined}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="flex items-center gap-4 ">
                  <Dropdown placement="bottom-center" className=" ">
                    <DropdownTrigger>
                      <div className="flex gap-4 items-center ">
                        <Avatar
                          className="cursor-pointer"
                          showFallback
                          src="https://images.unsplash.com/broken"
                        />
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Profile Actions"
                      variant=""
                      className=""
                    >
                      {/* Inside Content  */}

                      {/* Profile Button  */}

                      {/* Login / Logout Button  */}
                      <DropdownItem className="">
                        <div className="  flex flex-col items-center justify-center gap-2">
                          <div className="text-small font-bold">
                            {login ? (
                              <>
                                <div className="flex flex-col gap-2">
                                  <Button className="text-[16px] font-medium tracking-wider  w-32 px-0">
                                    <NavLink
                                      to={`/profile`}
                                      className="flex gap-2 justify-center items-center p-2  w-full"
                                    >
                                      <span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="w-6 h-6"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                      <span>Profile</span>
                                    </NavLink>
                                  </Button>

                                  <Button
                                    onClick={() => {
                                      logoutHandle();
                                      setLogin(false);
                                    }}
                                    variant="flat"
                                    color="danger"
                                    className="px-0 w-32"
                                  >
                                    <div className=" p-2  w-full flex justify-center items-center gap-2 font-bold text-[16px] tracking-wide">
                                      <span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-6 h-6"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                          />
                                        </svg>
                                      </span>
                                      <span>Logout!</span>
                                    </div>
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <Button
                                variant="flat"
                                color="success"
                                className="px-0"
                              >
                                <NavLink
                                  to={"/signin"}
                                  className=" p-4 w-full flex gap-2 font-bold text-[16px] tracking-wide"
                                >
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                  <span>LogIn</span>
                                </NavLink>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
                //   aria-current={item.current ? "page" : undefined}
              >
                Home
              </NavLink>

              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
                //   aria-current={item.current ? "page" : undefined}
              >
                About
              </NavLink>

              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
                //   aria-current={item.current ? "page" : undefined}
              >
                Contact Us
              </NavLink>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
