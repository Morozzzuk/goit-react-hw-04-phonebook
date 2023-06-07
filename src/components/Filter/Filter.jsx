import { FilterForm, FilterLabel } from './Filter.styled';
import { Input, Span } from '../FormList/FormList.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterForm>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
        />
      </FilterLabel>
    </FilterForm>
  );
};

export default Filter;
