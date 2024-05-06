import React, { useState, useEffect, useRef } from "react";
import { Icons } from "./Icons";

interface DropdownProps {
	options: string[];
	placeholder: string;
	onChange: any
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
    placeholder = "Select",
    onChange
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
	const [inputValue, setInputValue] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		// Filter options based on input value
		setFilteredOptions(
			options.filter((option) =>
				option.toLowerCase().includes(inputValue.toLowerCase())
			)
        );
        onChange(selectedOptions)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue, selectedOptions]);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setInputValue("");
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOptions([...selectedOptions, option]);
		setInputValue("");
		setIsOpen(false);
	};

	const handleRemoveOption = (option: string) => {
		const updatedOptions = selectedOptions.filter((item) => item !== option);
		setSelectedOptions(updatedOptions);
	};

	return (
		<div className='relative w-fit'>
			<div
				className='relative border border-gray-300 rounded-md flex px-1.5 py-1 items-center justify-center'
				ref={dropdownRef}
			>
				<div className='flex items-center flex-wrap'>
					{selectedOptions.map((option, index) => (
						<div
							key={index}
							className='inline-flex items-center bg-gray-100 text-gray-800 rounded-md px-1 py-1 text-sm mr-2'
						>
							<span>{option}</span>
							<button
								className='ml-1'
								onClick={() => handleRemoveOption(option)}
							>
								<Icons.close />
							</button>
						</div>
					))}
				</div>
				<input
					ref={inputRef}
					type='text'
					className='min-w-20 text-gray-700 font-light px-1 focus:outline-none outline-none text-[0.8rem] w-fit max-w-32'
					placeholder={selectedOptions.length === 0 ? placeholder : ""}
					value={inputValue}
					onChange={handleInputChange}
					onClick={toggleDropdown}
                />
                {selectedOptions.length > 0 && (
                    <button
                        className='px-1.5 h-6 text-gray-600 font-semibold'
                        onClick={() => setSelectedOptions([])}
                    >
                        <Icons.close />
                    </button>
                )}
				<button
					className='pl-1.5 pr-0.5 h-6 text-gray-600 font-semibold border-l-2'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <Icons.up /> : <Icons.down />}
				</button>
			</div>
			{isOpen && (
				<div className='origin-top-right absolute z-10 top-full right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
					<div className='py-1'>
						{filteredOptions.map((option, index) => (
							<div
								key={index}
								className='px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
								onClick={() => handleOptionClick(option)}
							>
								{option}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
