import React from 'react';
import { ChangeEvent, useState, KeyboardEvent } from 'react';

function execCommandAlternative(command: string, classList = '', value = null) {
  const wrapper = document.createElement('div');
  wrapper.classList.add(classList);
  document?.getSelection()?.getRangeAt(0).surroundContents(wrapper); //document.createElement('div'));
}

declare type TBlockType = 'heading_2' | 'heading_1' | 'heading_3' | 'text';

interface IRichText {
  type: TBlockType;
  id: string;
  text: {
      content: string;
      link: null | string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null | string;
}

interface Tblock {
  type: TBlockType;
  id: string;
  heading_1?: {
    rich_text: IRichText[];
  };
  heading_2?: {
    rich_text: IRichText[];
  };
  heading_3?: {
    rich_text: IRichText[];
  };
  text?: {
    rich_text: IRichText[];
  };
}

export default function WritePage() {
  const [data, setData] = useState({
    title: '이것은 제목입니다.',
    category: ['frontend', 'backend'],
    tag: [...new Set(['tag', '태그'])],
    inputTag: '',
  });

  const [blocks, setBlocks] = useState<Tblock[]>([
    {
      type: 'heading_2',
      id: '0',
      heading_2: {
        rich_text: [
          {
            type: 'text',
            id: '0',
            text: {
              content: 'Lacinato kale',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'Lacinato kale',
            href: null,
          },
        ],
      },
    },
    {
      type: 'heading_2',
      id: '1',
      heading_2: {
        rich_text: [
          {
            type: 'text',
            id: '0',
            text: {
              content: 'Lacinato kale',
              link: null,
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'green',
            },
            plain_text: 'Lacinato kale',
            href: null,
          },
        ],
      },
    },
  ]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setData(() => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setData(() => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addTag = (e: KeyboardEvent) => {
    console.log(e.key);

    if (e.key === 'Enter') {
      const tags = [...data.tag, data.inputTag];
      setData({
        ...data,
        inputTag: '',
        tag: [...new Set(tags)],
      });
    }
  };

  const onKeyDownEditor = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      // console.log(blocks);
    }
  };

  const onClickDecoration = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const type = e.target.dataset.type;
    execCommandAlternative('div', type);
  };

  return (
    <div className='h-full'>
      <header className='flex p-5 bg-gray-700'>
        <div>
          <img src='../../assets/image/logo.png' alt='logo' />
        </div>
      </header>
      <main>
        <form>
          <div className='flex'>
            <div>제목</div>
            <input value={data.title} name='title' onChange={onChangeInput} />
          </div>
          <div className='flex'>
            <div>카테고리</div>
            <select value={data.title} name='title' onChange={onChangeSelect}>
              {data.category.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
          <div className={'flex'}>
            <div>태그</div>
            <div className='flex gap-2.5'>
              {data.tag.map((value, index) => {
                return (
                  <div
                    className='flex flex-row item-start bg-gray-400 decoration-black rounded-xl	py-0.5	px-4'
                    key={value}
                  >
                    # {value}
                  </div>
                );
              })}
              <input
                value={data.inputTag}
                name='inputTag'
                onChange={onChangeInput}
                onKeyDown={addTag}
              />
            </div>
          </div>
          <div className={'flex'}>
            <div className='flex mt-5'>
              <button
                type='button'
                onClick={onClickDecoration}
                data-type='bold'
              >
                b
              </button>
              <button
                type='button'
                onClick={onClickDecoration}
                data-type='italic'
              >
                i
              </button>
              <button
                type='button'
                onClick={onClickDecoration}
                data-type='strikethrough'
              >
                s
              </button>
              <button
                type='button'
                onClick={onClickDecoration}
                data-type='underline'
              >
                u
              </button>
              <button
                type='button'
                onClick={onClickDecoration}
                data-type='code'
              >
                c
              </button>
            </div>
          </div>
          <div className={'flex'}>
            <div
              className='leading-5 min-w-full cursor-text border-t border-solid border-gray-400 mt-5 py-5 px-2.5 focus-visible:outline-0 shadow-transparent'
              placeholder='placeholder'
              onKeyDown={onKeyDownEditor}
              contentEditable
              suppressContentEditableWarning
            >
              {blocks.map((block, index) => {
                const type = block.type;
                const content = block[type];
                return (
                  <div key={index}>
                    {content!.rich_text.map((richText: any) => {
                      const annotations = richText.annotations;

                      const defaultText =
                        !annotations.bold &&
                        !annotations.italic &&
                        !annotations.strikethrough &&
                        !annotations.underline &&
                        !annotations.code &&
                        annotations.color === 'default';
                      if (defaultText) {
                        return <>{richText[richText.type].content}</>;
                      } else {
                        return (
                          <div
                            className={`${annotations.bold} && "flex font-bold",
                              ${annotations.italic} && "flex italic",
                            `}
                          >
                            {richText[richText.type].content}
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
