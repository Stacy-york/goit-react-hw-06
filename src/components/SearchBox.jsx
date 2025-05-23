import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
          <label className={css.label}>Find contacts by name</label>
          <input className={css.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
      />
    </div>
  );
};

