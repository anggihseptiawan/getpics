import React, { FormEvent, useState } from "react";
import { useEffect } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [term, setTerm] = useState<string>("nature");

  useEffect(() => {
    onSubmit(term);
  }, []);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
