import React, { useState, useRef, useEffect } from "react";

// Khai báo kiểu dữ liệu cho các props của component Dropdown
interface DropdownProps {
  button: JSX.Element;
  children: JSX.Element;
  classNames: string;
  animation?: string;
}

const DropDown = (props: DropdownProps) => {
  // Destructuring các props truyền vào
  const { button, children, classNames, animation } = props;

  // Khai báo state dùng để xác định trạng thái mở/đóng của dropdown
  const [openWrapper, setOpenWrapper] = useState<boolean>(false);

  // Sử dụng useRef để lưu reference đến element wrapper của dropdown
  // Dùng để xác định xem click có nằm ngoài dropdown hay không
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Sử dụng useEffect để gắn event listener cho document
  // Khi click vào bên ngoài dropdown, dropdown sẽ bị đóng
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpenWrapper(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setOpenWrapper]);

  // Render component Dropdown
  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;