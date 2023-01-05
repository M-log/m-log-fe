import axios from 'axios';
import {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import Header from '../../components/Header';
import ListItem from './ArticleItem';

export default function ArticleList() {
  const [currentCategory, setCurrentCategory] = useState('FrontEnd');
  const [list, setList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [selectTagList, setSelectTagList] = useState([]);

  const getList = async () => {
    const res = await axios.get('/list/frontend');
    setList(res.data);
  };

  const getTagList = async () => {
    const res = await axios.get('/list/frontend/tags');
    setTagList(res.data);
  };

  useEffect(() => {
    getList();
    getTagList();
  }, []);

  const handleChangeCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    // console.log(e.currentTarget);

    const button = e.target as HTMLButtonElement;
    setCurrentCategory(button.value);
  };

  const handleClickAddTag = (e: any) => {};

  return (
    <>
      <Header
        currentCategory={currentCategory}
        onChange={handleChangeCategory}
      />

      {/* Article List */}
      <ul className="px-50 lg:px-370">
        {list &&
          list.map(({ title, date, summary, tags }) => (
            <ListItem title={title} date={date} summary={summary} tags={tags} />
          ))}
      </ul>

      {/* Article Tags */}
      <ul className="fixed flex flex-col justify-center right-120 top-300">
        {tagList &&
          tagList.map((tag) => (
            <li>
              <button
                className="block text-darkgray"
                onClick={handleClickAddTag}
              >
                {tag}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
