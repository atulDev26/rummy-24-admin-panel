import { IconSearch } from '@tabler/icons-react';
import React from 'react'
import { toast } from 'sonner';

const SearchField = ({ placeholder, inputId, onSubmit }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const inputValue = e.target[inputId].value;
        if (inputValue) {
          onSubmit(inputValue);
        } else {
          toast.error("To search please enter (Name/Mobile/ID)");
        }
      }
  return (
    <form className="w-[300px] flex items-center gap-3" onSubmit={handleSearch}>
      <input
        id={inputId}
        className="p-2 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-[#FABA1F]"
        type="text"
        placeholder={placeholder}
      />
      <button className="p-2 bg-[#FABA1F] rounded-full shadow">
        <IconSearch color="white" />
      </button>
    </form>
  )
}

export default SearchField