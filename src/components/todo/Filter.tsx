import { SyntheticEvent } from 'react';

import styles from '../../styles/shared/form.module.css';

function TodoFilter({ search, setSearch }: Props) {
  const onChange = ({ target }: SyntheticEvent) => {
    const { value } = target as HTMLInputElement;

    setSearch(value);
  };

  return (
    <div className={styles.columnFormControl}>
      <label htmlFor='search-input' className={styles.columnFormControlLabel}>
        <span className={styles.columnFormControlLabelSpan}>Search</span>
      </label>

      <input
        className='w-100'
        name='search-input'
        type='text'
        onChange={(e) => onChange(e)}
        value={search}
      />
    </div>
  );
}

export default TodoFilter;

interface Props {
  search: string;
  setSearch: (search: string) => void;
}
