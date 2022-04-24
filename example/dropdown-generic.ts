/*interface Email {
  value: string;
  selected: boolean;
}
interface ProductNumber {
  value: number;
  selected: boolean;
}*/
interface DropDown<T>{
  value: T;
  selected: boolean;
}
const emails: DropDown<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];
const numberOfProducts: DropDown<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];
function createDropdownItem<T>(item: DropDown<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);

});

const stringItem: DropDown<string> = { value: 'suhyuk', selected: false };
const numberItem: DropDown<number> = { value: 1, selected: false };